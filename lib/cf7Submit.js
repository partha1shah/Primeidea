/**
 * Contact Form 7 REST submit helper (WordPress).
 * Matches the pattern used by contact / book-portfolio / resume forms.
 */

export const CF7_BASE = "https://admin.primeidea.in";

export const CF7_FORM_IDS = {
  contact: 48,
  resume: 109,
  retirement: 418,
  insurance: 419,
  succession: 420,
  /** Dedicated Book Portfolio Review form (not Contact form 48). */
  bookPortfolioReview: 421,
  /** Dedicated Portfolio Review — Vadodara form (not Contact form 48). */
  portfolioReview: 422,
};

/**
 * @param {number|string} formId
 * @param {Record<string, string | File | string[] | null | undefined>} fields
 * @returns {Promise<{ ok: boolean, status?: string, message?: string, data?: object }>}
 */
export async function submitCf7Form(formId, fields) {
  const id = String(formId);
  const body = new FormData();

  body.append("_wpcf7", id);
  body.append("_wpcf7_version", "5.7.7");
  body.append("_wpcf7_locale", "en_US");
  body.append("_wpcf7_unit_tag", `wpcf7-f${id}-p${Date.now()}`);
  body.append("_wpcf7_container_post", "0");

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

  const response = await fetch(
    `${CF7_BASE}/wp-json/contact-form-7/v1/contact-forms/${id}/feedback`,
    {
      method: "POST",
      body,
      headers: { Accept: "application/json" },
      mode: "cors",
    }
  );

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
