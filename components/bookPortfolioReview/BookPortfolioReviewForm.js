"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import {
  BuildingOffice2Icon,
  CheckCircleIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";

/** Dedicated CF7 form — must never fall back to Contact (48). */
const CF7_BOOK_PORTFOLIO_REVIEW_ID = "421";

const SERVICES = [
  "Portfolio Review",
  "Retirement Planning",
  "Insurance Review",
  "HNI Private Wealth Consultation",
  "PMS / AIF / SIF Suitability Review",
  "NRI Consultation",
];

const PRODUCT_OPTIONS = [
  "Mutual funds",
  "Direct equity",
  "Fixed income",
  "Insurance",
  "NPS",
  "PMS / AIF",
  "Other",
];

// Same ranges as the holdings-upload form (en-dash U+2013).
const SIZE_OPTIONS = [
  "Under ₹25 lakh",
  "₹25 lakh – ₹1 crore",
  "₹1 crore – ₹5 crore",
  "Above ₹5 crore",
  "Prefer not to say",
];

// Must match CF7 form 421 select options exactly (en-dash U+2013, not hyphen).
const TIME_SLOTS = [
  "10:00 AM – 11:00 AM",
  "11:00 AM – 12:00 PM",
  "12:00 PM – 1:00 PM",
  "2:00 PM – 3:00 PM",
  "3:00 PM – 4:00 PM",
  "4:00 PM – 5:00 PM",
  "5:00 PM – 6:00 PM",
];

const MEETING_MODES = [
  {
    id: "office",
    label: "Office visit",
    description: "Meet at the Vadodara office",
    Icon: BuildingOffice2Icon,
  },
  {
    id: "video",
    label: "Video call",
    description: "Join online from anywhere in India / NRI",
    Icon: VideoCameraIcon,
  },
];

const WHATSAPP_BOOKING_URL =
  "https://api.whatsapp.com/send?phone=918141027000&text=" +
  encodeURIComponent(
    "Hello, I would like to book a portfolio review / consultation with PrimeIdea Ventures."
  );

const fieldClass =
  "block w-full rounded-xl border border-[#D0E0EC] bg-[#F8FCFF] px-4 py-3.5 text-[15px] md:text-base font-medium text-[#2D2D2D] outline-none transition-all focus:border-[#293C7D] focus:bg-white focus:ring-4 focus:ring-[#293C7D]/10";
const labelClass =
  "block text-[13px] font-semibold tracking-wide text-[#293C7D] mb-2";

function pushConversionEvent(payload) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "book_portfolio_review_submit",
    ...payload,
  });
  if (typeof window.gtag === "function") {
    window.gtag("event", "generate_lead", {
      event_category: "booking",
      event_label: payload.service || "Portfolio Review",
      method: "book_portfolio_review",
    });
  }
}

export default function BookPortfolioReviewForm({
  defaultService = "Portfolio Review",
}) {
  const router = useRouter();
  const minDate = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().slice(0, 10);
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    city: "",
    email: "",
    phone: "",
    service: defaultService,
    preferredDate: "",
    preferredTime: "",
    meetingMode: "video",
    whatsappConfirm: true,
    portfolioSize: "",
    concern: "",
    notes: "",
  });
  const [products, setProducts] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleProduct = (item) => {
    setProducts((current) =>
      current.includes(item) ? current.filter((product) => product !== item) : [...current, item]
    );
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const notyf = new Notyf({
      position: { x: "right", y: "top" },
      duration: 5000,
    });

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.city ||
      !formData.service ||
      !formData.preferredDate ||
      !formData.preferredTime ||
      !formData.meetingMode ||
      !formData.portfolioSize ||
      !formData.concern ||
      products.length === 0
    ) {
      notyf.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    const meetingMode =
      formData.meetingMode === "office" ? "Office visit (Vadodara)" : "Video call";
    // Keep en-dash — CF7 select options use U+2013, not ASCII hyphen.
    const preferredTime = String(formData.preferredTime).trim();

    const endpoint =
      "https://admin.primeidea.in/wp-json/contact-form-7/v1/contact-forms/421/feedback";

    const body = new FormData();
    body.append("_wpcf7", CF7_BOOK_PORTFOLIO_REVIEW_ID);
    body.append("_wpcf7_version", "5.7.7");
    body.append("_wpcf7_locale", "en_US");
    body.append(
      "_wpcf7_unit_tag",
      `wpcf7-f${CF7_BOOK_PORTFOLIO_REVIEW_ID}-p${Date.now()}`
    );
    body.append("_wpcf7_container_post", "0");
    body.append("fullName", formData.fullName);
    body.append("city", formData.city);
    body.append("email", formData.email);
    body.append("phone", formData.phone);
    body.append("service", formData.service);
    body.append("preferredDate", formData.preferredDate);
    body.append("preferredTime", preferredTime);
    body.append("meetingMode", meetingMode);
    body.append("whatsappConfirm", formData.whatsappConfirm ? "Yes" : "No");
    body.append("portfolioSize", formData.portfolioSize);
    products.forEach((product) => body.append("products", product));
    body.append("concern", formData.concern);
    // Form 421 already mails [notes]. Size, products, and concern are written
    // there so the booking email carries them even if WordPress has no extra tags.
    const briefing = [
      `Approx. portfolio size: ${formData.portfolioSize}`,
      `Products currently held: ${products.join(", ")}`,
      `Main concern: ${formData.concern}`,
      formData.notes ? `Anything else: ${formData.notes}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    body.append("notes", briefing);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body,
        headers: { Accept: "application/json" },
        mode: "cors",
      });

      const data = await response.json().catch(() => null);

      if (data?.status === "mail_sent") {
        pushConversionEvent({
          service: formData.service,
          meeting_mode: formData.meetingMode,
          whatsapp_confirm: formData.whatsappConfirm,
          portfolio_size: formData.portfolioSize,
          products: products.join(", "),
          cf7_form_id: CF7_BOOK_PORTFOLIO_REVIEW_ID,
        });

        const params = new URLSearchParams({
          service: formData.service,
          mode: formData.meetingMode,
          date: formData.preferredDate,
          time: preferredTime,
          whatsapp: formData.whatsappConfirm ? "1" : "0",
        });

        router.push(`/book-portfolio-review/thank-you?${params.toString()}`);
        return;
      }

      const invalid =
        Array.isArray(data?.invalid_fields) && data.invalid_fields.length
          ? data.invalid_fields.map((f) => f.message || f.field).join(" ")
          : "";

      notyf.error(
        invalid ||
          data?.message ||
          "There was an error booking your review. Please try again."
      );
    } catch (error) {
      console.error("Booking submission error:", error);
      notyf.error("There was an error booking your review. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      id="booking-form"
      className="space-y-5"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fullName" className={labelClass}>
            Full name *
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Your name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Mobile *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="10-digit mobile"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className={labelClass}>
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="city" className={labelClass}>
            City *
          </label>
          <input
            id="city"
            name="city"
            type="text"
            autoComplete="address-level2"
            required
            value={formData.city}
            onChange={handleChange}
            placeholder="Vadodara / your city"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className={labelClass}>
          Service *
        </label>
        <select
          id="service"
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          className={`${fieldClass} appearance-none`}
        >
          {SERVICES.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="portfolioSize" className={labelClass}>
          Approximate portfolio size *
        </label>
        <select
          id="portfolioSize"
          name="portfolioSize"
          required
          value={formData.portfolioSize}
          onChange={handleChange}
          className={`${fieldClass} appearance-none`}
        >
          <option value="">Select a range</option>
          {SIZE_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <fieldset>
        <legend className={labelClass}>Products currently held *</legend>
        <div className="flex flex-wrap gap-2">
          {PRODUCT_OPTIONS.map((item) => {
            const checked = products.includes(item);
            return (
              <label
                key={item}
                className={`inline-flex cursor-pointer items-center rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${
                  checked
                    ? "border-[#232D63] bg-[#232D63] !text-white"
                    : "border-[#D0E0EC] bg-white text-[#293C7D] hover:border-[#293C7D]/40"
                }`}
              >
                <input
                  type="checkbox"
                  name="products"
                  value={item}
                  className="sr-only"
                  checked={checked}
                  onChange={() => toggleProduct(item)}
                />
                {item}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div>
        <label htmlFor="concern" className={labelClass}>
          Main concern *
        </label>
        <textarea
          id="concern"
          name="concern"
          rows={3}
          required
          value={formData.concern}
          onChange={handleChange}
          placeholder="Overlap, allocation, tax, retirement, family structure…"
          className={fieldClass}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="preferredDate" className={labelClass}>
            Preferred date *
          </label>
          <input
            id="preferredDate"
            name="preferredDate"
            type="date"
            required
            min={minDate}
            value={formData.preferredDate}
            onChange={handleChange}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="preferredTime" className={labelClass}>
            Preferred time *
          </label>
          <select
            id="preferredTime"
            name="preferredTime"
            required
            value={formData.preferredTime}
            onChange={handleChange}
            className={`${fieldClass} appearance-none`}
          >
            <option value="">Select a slot</option>
            {TIME_SLOTS.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>
      </div>

      <fieldset>
        <legend className={labelClass}>Meeting mode *</legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {MEETING_MODES.map(({ id, label, description, Icon }) => {
            const selected = formData.meetingMode === id;
            return (
              <label
                key={id}
                className={`flex cursor-pointer items-start gap-3 rounded-2xl border px-4 py-3.5 transition-colors ${
                  selected
                    ? "border-[#293C7D] bg-[#293C7D] shadow-sm"
                    : "border-[#D0E0EC] bg-[#F8FCFF] hover:border-[#293C7D]/50"
                }`}
              >
                <input
                  type="radio"
                  name="meetingMode"
                  value={id}
                  checked={selected}
                  onChange={handleChange}
                  className="sr-only"
                />
                <span
                  className={`mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${
                    selected
                      ? "border-white/15 bg-white/10 text-[#FFC300]"
                      : "border-[#D6E4EE] bg-white text-[#293C7D]"
                  }`}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span
                    className={`block text-sm font-semibold ${
                      selected ? "!text-white" : "text-[#2D2D2D]"
                    }`}
                  >
                    {label}
                  </span>
                  <span
                    className={`block text-xs mt-0.5 leading-snug ${
                      selected ? "!text-white/70" : "text-[#5A5A5A]"
                    }`}
                  >
                    {description}
                  </span>
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <label className="flex items-start gap-3 rounded-2xl border border-[#D0E0EC] bg-[#F8FCFF] px-4 py-3.5 cursor-pointer">
        <input
          type="checkbox"
          name="whatsappConfirm"
          checked={formData.whatsappConfirm}
          onChange={handleChange}
          className="mt-1 h-4 w-4 rounded border-[#D0E0EC] text-[#293C7D] focus:ring-[#293C7D]"
        />
        <span>
          <span className="block text-sm font-semibold text-[#2D2D2D]">
            WhatsApp confirmation
          </span>
          <span className="block text-xs text-[#5A5A5A] mt-0.5 leading-relaxed">
            Send booking confirmation and follow-up on WhatsApp at the mobile number
            above.
          </span>
        </span>
      </label>

      <div>
        <label htmlFor="notes" className={labelClass}>
          Anything we should know? (optional)
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          value={formData.notes}
          onChange={handleChange}
          placeholder="Goals, concerns, or preferred language"
          className={fieldClass}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl bg-[#FFC300] px-5 py-4 text-base font-bold text-[#232D63] hover:bg-[#293C7D] hover:!text-white transition-colors disabled:opacity-60"
      >
        {isSubmitting ? "Booking…" : "Confirm booking request →"}
      </button>

      <p className="text-xs text-[#6B7C8A] leading-relaxed m-0 text-center">
        Prefer WhatsApp?{" "}
        <Link
          href={WHATSAPP_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[#293C7D] underline-offset-2 hover:underline"
        >
          Message us on WhatsApp
        </Link>
        . Or{" "}
        <Link
          href="/portfolio-review"
          className="font-semibold text-[#293C7D] underline-offset-2 hover:underline"
        >
          upload holdings
        </Link>{" "}
        for a file-based review.
      </p>

      <p className="flex items-start gap-2 text-xs text-[#6B7C8A] leading-relaxed m-0">
        <CheckCircleIcon className="h-4 w-4 shrink-0 text-[#479AD2] mt-0.5" />
        Slot requests are confirmed by the team. Investments are subject to market
        risks. PrimeIdea does not guarantee returns.
      </p>
    </form>
  );
}
