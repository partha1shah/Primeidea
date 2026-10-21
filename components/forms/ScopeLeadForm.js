"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import TurnstileWidget from "@/components/TurnstileWidget";
import { pushLeadEvent, submitCf7Form } from "@/lib/cf7Submit";
import { useTurnstile } from "@/lib/useTurnstile";

const fieldClass =
  "block w-full rounded-xl border border-[#D0E0EC] bg-[#F8FCFF] px-4 py-3.5 text-[15px] md:text-base font-medium text-[#2D2D2D] outline-none transition-all focus:border-[#293C7D] focus:bg-white focus:ring-4 focus:ring-[#293C7D]/10";
const labelClass =
  "block text-[13px] font-semibold tracking-wide text-[#293C7D] mb-2";

function createNotyf() {
  return new Notyf({
    position: { x: "right", y: "top" },
    duration: 5000,
  });
}

export default function ScopeLeadForm({
  formId,
  title,
  description,
  submitLabel = "Submit request",
  successMessage = "Thank you. We have received your request and will get back to you soon.",
  eventName = "scope_lead_form_submit",
  extraFields = [],
  disclaimer,
  thankYouPath,
  sectionId = "lead-form",
  messageLabel = "Message",
  messagePlaceholder = "Share any context that will help us prepare",
  messageRequired = false,
  showMessageField = true,
  consentText,
  hiddenFields = {},
  formEyebrow = "Lead form",
  sectionClassName = "bg-[#F6FDFF] py-14 md:py-16 scroll-mt-28 border-t border-[#D6E4EE]",
  formTheme = "light",
}) {
  const isDarkSidebar = formTheme === "dark";
  const router = useRouter();
  const initialState = {
    fullName: "",
    city: "",
    email: "",
    phone: "",
    description: "",
    consentAgreed: false,
  };
  extraFields.forEach((field) => {
    initialState[field.name] = field.type === "checkbox" ? [] : "";
  });

  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const turnstile = useTurnstile();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => {
        const current = Array.isArray(prev[name]) ? prev[name] : [];
        const next = checked
          ? [...current, value]
          : current.filter((item) => item !== value);
        return { ...prev, [name]: next };
      });
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const notyf = createNotyf();

    if (!formData.fullName || !formData.email || !formData.phone || !formData.city) {
      notyf.error("Please fill in all required fields");
      return;
    }

    if (showMessageField && messageRequired && !formData.description?.trim()) {
      notyf.error(`Please complete: ${messageLabel.replace(/\s*\*$/, "")}`);
      return;
    }

    for (const field of extraFields) {
      if (!field.required) continue;
      const value = formData[field.name];
      if (field.type === "checkbox") {
        if (!Array.isArray(value) || value.length === 0) {
          notyf.error(`Please select at least one option for ${field.label}`);
          return;
        }
      } else if (!value) {
        notyf.error(`Please complete: ${field.label}`);
        return;
      }
    }

    if (consentText && !formData.consentAgreed) {
      notyf.error("Please confirm consent to continue.");
      return;
    }

    if (!turnstile.token) {
      notyf.error("Please complete the security check before submitting.");
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = { ...formData, ...hiddenFields };
      delete payload.consentAgreed;
      if (consentText && formData.consentAgreed) {
        payload.consent = "Yes";
      }

      const result = await submitCf7Form(formId, payload, {
        turnstileToken: turnstile.token,
      });
      if (result.ok) {
        pushLeadEvent(eventName, { form: String(title), form_id: formId });
        setFormData(initialState);
        turnstile.reset();
        if (thankYouPath) {
          router.push(thankYouPath);
          return;
        }
        notyf.success(successMessage);
      } else {
        turnstile.reset();
        notyf.error(result.message);
      }
    } catch (error) {
      console.error("Lead form submission error:", error);
      turnstile.reset();
      notyf.error("There was an error sending your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id={sectionId}
      aria-labelledby="lead-form-heading"
      className={sectionClassName}
    >
      {isDarkSidebar ? (
        <div
          className="pointer-events-none absolute inset-0 bg-[url('/images/insurance/risk-management/bg.png')] bg-repeat bg-contain opacity-30"
          aria-hidden="true"
        />
      ) : null}
      <div className="relative mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <p
              className={`text-xs md:text-sm font-semibold tracking-[0.14em] uppercase mb-3 ${
                isDarkSidebar ? "!text-[#FFC300]" : "text-[#479AD2]"
              }`}
            >
              {formEyebrow}
            </p>
            <h2
              id="lead-form-heading"
              className={`text-[26px] md:text-[32px] font-light leading-[125%] mb-4 ${
                isDarkSidebar ? "!text-white [&_strong]:!text-white" : "text-[#2D2D2D]"
              }`}
            >
              {title}
            </h2>
            {description ? (
              <p
                className={`text-base leading-relaxed mb-4 ${
                  isDarkSidebar ? "!text-white/85" : "text-[#4D4D4D]"
                }`}
              >
                {description}
              </p>
            ) : null}
            {disclaimer ? (
              <p
                className={`text-sm leading-relaxed ${
                  isDarkSidebar ? "!text-white/65" : "text-[#6B7C8A]"
                }`}
              >
                {disclaimer}
              </p>
            ) : null}
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-[24px] border border-[#D0E0EC] bg-white p-5 md:p-8 shadow-[0_18px_40px_-28px_rgba(41,60,125,0.35)] space-y-4"
              noValidate
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor={`${formId}-fullName`} className={labelClass}>
                    Full name *
                  </label>
                  <input
                    id={`${formId}-fullName`}
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className={fieldClass}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor={`${formId}-city`} className={labelClass}>
                    City *
                  </label>
                  <input
                    id={`${formId}-city`}
                    name="city"
                    type="text"
                    autoComplete="address-level2"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className={fieldClass}
                    placeholder="Vadodara / your city"
                  />
                </div>
                <div>
                  <label htmlFor={`${formId}-email`} className={labelClass}>
                    Email *
                  </label>
                  <input
                    id={`${formId}-email`}
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={fieldClass}
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor={`${formId}-phone`} className={labelClass}>
                    Phone *
                  </label>
                  <input
                    id={`${formId}-phone`}
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className={fieldClass}
                    placeholder="+91…"
                  />
                </div>
              </div>

              {extraFields.map((field) => {
                if (field.type === "select") {
                  return (
                    <div key={field.name}>
                      <label htmlFor={`${formId}-${field.name}`} className={labelClass}>
                        {field.label}
                        {field.required ? " *" : ""}
                      </label>
                      <select
                        id={`${formId}-${field.name}`}
                        name={field.name}
                        required={field.required}
                        value={formData[field.name]}
                        onChange={handleChange}
                        className={fieldClass}
                      >
                        <option value="">{field.placeholder || "Select…"}</option>
                        {field.options.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  );
                }

                if (field.type === "checkbox") {
                  return (
                    <fieldset key={field.name} className="space-y-2">
                      <legend className={labelClass}>
                        {field.label}
                        {field.required ? " *" : ""}
                      </legend>
                      <div className="flex flex-wrap gap-2">
                        {field.options.map((option) => {
                          const checked = Array.isArray(formData[field.name])
                            ? formData[field.name].includes(option)
                            : false;
                          return (
                            <label
                              key={option}
                              className={`inline-flex cursor-pointer items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-medium transition-colors ${
                                checked
                                  ? "border-[#293C7D] bg-[#293C7D] text-white"
                                  : "border-[#D0E0EC] bg-[#F8FCFF] text-[#293C7D] hover:border-[#293C7D]/50"
                              }`}
                            >
                              <input
                                type="checkbox"
                                name={field.name}
                                value={option}
                                checked={checked}
                                onChange={handleChange}
                                className="sr-only"
                              />
                              {option}
                            </label>
                          );
                        })}
                      </div>
                    </fieldset>
                  );
                }

                if (field.type === "textarea") {
                  return (
                    <div key={field.name}>
                      <label htmlFor={`${formId}-${field.name}`} className={labelClass}>
                        {field.label}
                        {field.required ? " *" : ""}
                      </label>
                      <textarea
                        id={`${formId}-${field.name}`}
                        name={field.name}
                        rows={field.rows || 4}
                        required={field.required}
                        value={formData[field.name]}
                        onChange={handleChange}
                        className={fieldClass}
                        placeholder={field.placeholder || ""}
                      />
                    </div>
                  );
                }

                return null;
              })}

              {showMessageField ? (
                <div>
                  <label htmlFor={`${formId}-description`} className={labelClass}>
                    {messageLabel}
                    {messageRequired ? " *" : ""}
                  </label>
                  <textarea
                    id={`${formId}-description`}
                    name="description"
                    rows={4}
                    required={messageRequired}
                    value={formData.description}
                    onChange={handleChange}
                    className={fieldClass}
                    placeholder={messagePlaceholder}
                  />
                </div>
              ) : null}

              {consentText ? (
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="consentAgreed"
                    checked={formData.consentAgreed}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        consentAgreed: e.target.checked,
                      }))
                    }
                    className="mt-1 h-4 w-4 shrink-0 rounded border-[#D0E0EC] text-[#293C7D] focus:ring-[#293C7D]/30"
                  />
                  <span className="text-sm text-[#4D4D4D] leading-relaxed">{consentText}</span>
                </label>
              ) : null}

              <TurnstileWidget
                onToken={turnstile.onToken}
                resetKey={turnstile.resetKey}
                className="min-h-[65px]"
              />

              <button
                type="submit"
                disabled={isSubmitting || !turnstile.token}
                className="inline-flex w-full items-center justify-center rounded-xl bg-[#293C7D] px-5 py-3.5 text-base font-bold text-white transition-colors hover:bg-[#232D63] disabled:opacity-50"
              >
                {isSubmitting ? "Submitting…" : submitLabel}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
