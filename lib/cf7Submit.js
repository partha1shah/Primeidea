/**
 * Lead form submit helper — posts through /api/lead (Turnstile + CF7 proxy).
 */

export const CF7_BASE = "https://admin.primeidea.in";

export const CF7_FORM_IDS = {
  contact: 48,
  partner: 88,
  resume: 109,
  retirement: 418,
  insurance: 419,
  succession: 420,
  /** Dedicated Book Portfolio Review form (not Contact form 48). */
  bookPortfolioReview: 421,
  /** Dedicated Portfolio Review — Vadodara form (not Contact form 48). */
  portfolioReview: 422,
  /** Research Privilege Club subscription enquiry (CF7 on admin.primeidea.in). */
  researchPrivilegeClub: 449,
};

/**
 * @param {number|string} formId
 * @param {Record<string, string | File | string[] | null | undefined>} fields
 * @param {{ turnstileToken?: string | null }} [options]
 * @returns {Promise<{ ok: boolean, status?: string, message?: string, data?: object }>}
 */
export async function submitCf7Form(formId, fields, options = {}) {
  const id = String(formId);
  const turnstileToken = options.turnstileToken;

  if (!turnstileToken) {
    return {
      ok: false,
      message: "Please complete the security check before submitting.",
    };
  }

  const body = new FormData();
  body.append("formId", id);
  body.append("turnstileToken", turnstileToken);

  Object.entries(fields).forEach(([key, value]) => {
    if (value === undefined || value === null || value === "") return;
    if (Array.isArray(value)) {
      value.forEach((item) => {
        if (item !== undefined && item !== null && item !== "") {
          body.append(key, item);
        }
      });
      return;
    }
    if (value instanceof File) {
      body.append(key, value, value.name);
      return;
    }
    body.append(key, value);
  });

  const response = await fetch("/api/lead", {
    method: "POST",
    body,
    headers: { Accept: "application/json" },
  });

  let data = null;
  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!response.ok && !data) {
    return {
      ok: false,
      message: `HTTP error! status: ${response.status}`,
    };
  }

  if (data?.status === "mail_sent") {
    return { ok: true, status: data.status, message: data.message, data };
  }

  const invalid =
    Array.isArray(data?.invalid_fields) && data.invalid_fields.length
      ? data.invalid_fields
          .map((f) => f.message || f.field)
          .filter(Boolean)
          .join(" ")
      : "";

  return {
    ok: false,
    status: data?.status,
    message:
      invalid ||
      data?.message ||
      "There was an error sending your request. Please try again.",
    data,
  };
}

export function pushLeadEvent(eventName, payload = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...payload });
  if (typeof window.gtag === "function") {
    window.gtag("event", "generate_lead", {
      event_category: "lead_form",
      event_label: payload.form || eventName,
      method: eventName,
    });
  }
}
