import { NextResponse } from "next/server";
import { CF7_BASE, CF7_FORM_IDS } from "@/lib/cf7Submit";
import { checkLeadRateLimit } from "@/lib/leadRateLimit";
import { getClientIp, verifyTurnstileToken } from "@/lib/turnstile";

export const runtime = "nodejs";

const ALLOWED_FORM_IDS = new Set(
  Object.values(CF7_FORM_IDS).map((id) => String(id))
);

const CF7_META_KEYS = new Set([
  "_wpcf7",
  "_wpcf7_version",
  "_wpcf7_locale",
  "_wpcf7_unit_tag",
  "_wpcf7_container_post",
]);

const RESERVED_KEYS = new Set([
  "formId",
  "turnstileToken",
  "cf-turnstile-response",
  ...CF7_META_KEYS,
]);

export async function POST(request) {
  if (!process.env.TURNSTILE_SECRET_KEY) {
    return NextResponse.json(
      { status: "error", message: "Form protection is not configured." },
      { status: 503 }
    );
  }

  let formData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json(
      { status: "error", message: "Invalid form submission." },
      { status: 400 }
    );
  }

  const formId = String(formData.get("formId") || "").trim();
  if (!formId || !ALLOWED_FORM_IDS.has(formId)) {
    return NextResponse.json(
      { status: "error", message: "Invalid form." },
      { status: 400 }
    );
  }

  const turnstileToken =
    String(formData.get("turnstileToken") || "").trim() ||
    String(formData.get("cf-turnstile-response") || "").trim();

  const ip = getClientIp(request);
  const rateKey = ip || "unknown";
  const rate = checkLeadRateLimit(rateKey);
  if (!rate.allowed) {
    return NextResponse.json(
      {
        status: "error",
        message: "Too many submissions. Please try again later.",
      },
      {
        status: 429,
        headers: rate.retryAfterSec
          ? { "Retry-After": String(rate.retryAfterSec) }
          : undefined,
      }
    );
  }

  const verification = await verifyTurnstileToken(turnstileToken, ip);
  if (!verification.success) {
    return NextResponse.json(
      {
        status: "spam",
        message: "Security check failed. Please refresh and try again.",
      },
      { status: 403 }
    );
  }

  const cf7Body = new FormData();
  cf7Body.append("_wpcf7", formId);
  cf7Body.append("_wpcf7_version", "5.7.7");
  cf7Body.append("_wpcf7_locale", "en_US");
  cf7Body.append("_wpcf7_unit_tag", `wpcf7-f${formId}-p${Date.now()}`);
  cf7Body.append("_wpcf7_container_post", "0");

  for (const [key, value] of formData.entries()) {
    if (RESERVED_KEYS.has(key)) continue;
    if (typeof value === "string" && value === "") continue;
    if (value instanceof File) {
      if (value.size === 0) continue;
      cf7Body.append(key, value, value.name);
      continue;
    }
    cf7Body.append(key, value);
  }

  let cf7Response;
  try {
    cf7Response = await fetch(
      `${CF7_BASE}/wp-json/contact-form-7/v1/contact-forms/${formId}/feedback`,
      {
        method: "POST",
        body: cf7Body,
        headers: { Accept: "application/json" },
      }
    );
  } catch (error) {
    console.error("CF7 proxy error:", error);
    return NextResponse.json(
      {
        status: "error",
        message: "There was an error sending your request. Please try again.",
      },
      { status: 502 }
    );
  }

  let data = null;
  try {
    data = await cf7Response.json();
  } catch {
    data = null;
  }

  if (!data) {
    return NextResponse.json(
      {
        status: "error",
        message: `HTTP error! status: ${cf7Response.status}`,
      },
      { status: cf7Response.ok ? 502 : cf7Response.status }
    );
  }

  return NextResponse.json(data, {
    status: data.status === "mail_sent" ? 200 : cf7Response.status || 400,
  });
}
