"use client";

import { useRef, useState } from "react";
import { Notyf } from "notyf";
import { ArrowUpTrayIcon, DocumentArrowUpIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { CF7_FORM_IDS, submitCf7Form } from "@/lib/cf7Submit";

const PRODUCT_OPTIONS = [
  "Mutual funds",
  "Direct equity",
  "Fixed income",
  "Insurance",
  "NPS",
  "PMS / AIF",
  "Other",
];

// Option strings must match CF7 form 422 exactly (en-dash U+2013).
const SIZE_OPTIONS = [
  "Under ₹25 lakh",
  "₹25 lakh – ₹1 crore",
  "₹1 crore – ₹5 crore",
  "Above ₹5 crore",
  "Prefer not to say",
];

const CALLBACK_OPTIONS = [
  "Morning (10am–12pm)",
  "Afternoon (12pm–4pm)",
  "Evening (4pm–7pm)",
  "Anytime",
];

const MAX_FILE_MB = 5;
const ACCEPTED = ".pdf,.xls,.xlsx,.csv,.png,.jpg,.jpeg";

export default function PortfolioReviewForm() {
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    fullName: "",
    city: "",
    email: "",
    phone: "",
    portfolioSize: "",
    concern: "",
    callbackTime: "",
  });
  const [products, setProducts] = useState([]);
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleProduct = (item) => {
    setProducts((current) =>
      current.includes(item) ? current.filter((p) => p !== item) : [...current, item]
    );
  };

  const applyFile = (next) => {
    if (!next) {
      setFile(null);
      return;
    }
    if (next.size > MAX_FILE_MB * 1024 * 1024) {
      const notyf = new Notyf({ position: { x: "right", y: "top" }, duration: 5000 });
      notyf.error(`Please keep the file under ${MAX_FILE_MB} MB.`);
      setFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }
    setFile(next);
  };

  const handleFile = (e) => applyFile(e.target.files?.[0]);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    applyFile(e.dataTransfer.files?.[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const notyf = new Notyf({ position: { x: "right", y: "top" }, duration: 5000 });

    if (!formData.fullName || !formData.email || !formData.phone || !formData.city || !formData.concern) {
      notyf.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: "" });

    try {
      const result = await submitCf7Form(CF7_FORM_IDS.portfolioReview, {
        fullName: formData.fullName,
        city: formData.city,
        email: formData.email,
        phone: formData.phone,
        portfolioSize: formData.portfolioSize,
        callbackTime: formData.callbackTime,
        products,
        concern: formData.concern,
        portfolio: file || undefined,
      });

      if (result.ok) {
        const message =
          "Thank you. We have received your portfolio review request and will get back to you.";
        setSubmitStatus({ success: true, message });
        notyf.success(message);
        setFormData({
          fullName: "",
          city: "",
          email: "",
          phone: "",
          portfolioSize: "",
          concern: "",
          callbackTime: "",
        });
        setProducts([]);
        setFile(null);
        e.target.reset();
      } else {
        const message =
          result.message || "There was an error sending your request. Please try again.";
        setSubmitStatus({ success: false, message });
        notyf.error(message);
      }
    } catch (error) {
      console.error("Submission error:", error);
      const message = "There was an error sending your request. Please try again.";
      setSubmitStatus({ success: false, message });
      notyf.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass =
    "block w-full rounded-xl border border-[#E3ECF5] bg-white px-3 py-3 text-[16px] font-medium text-[#1f4153] focus:outline-none focus:ring-2 focus:ring-[#293C7D]/30 focus:border-[#293C7D]";
  const labelClass = "block text-[12px] font-semibold uppercase tracking-[0.08em] text-[#479AD2] mb-1.5";

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fullName" className={labelClass}>
            Full name *
          </label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Your name"
            required
            autoComplete="name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Mobile *
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="10-digit number"
            required
            autoComplete="tel"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email *
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@email.com"
            required
            autoComplete="email"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="city" className={labelClass}>
            City *
          </label>
          <input
            id="city"
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Vadodara or your city"
            required
            autoComplete="address-level2"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="portfolioSize" className={labelClass}>
            Approx. portfolio size
          </label>
          <select
            id="portfolioSize"
            name="portfolioSize"
            value={formData.portfolioSize}
            onChange={handleChange}
            className={fieldClass}
          >
            <option value="">Select a range</option>
            {SIZE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="callbackTime" className={labelClass}>
            Preferred callback
          </label>
          <select
            id="callbackTime"
            name="callbackTime"
            value={formData.callbackTime}
            onChange={handleChange}
            className={fieldClass}
          >
            <option value="">Select a slot</option>
            {CALLBACK_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <fieldset>
        <legend className={labelClass}>Products used</legend>
        <div className="flex flex-wrap gap-2">
          {PRODUCT_OPTIONS.map((item) => {
            const checked = products.includes(item);
            return (
              <label
                key={item}
                className={`inline-flex cursor-pointer items-center rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${
                  checked
                    ? "border-[#232D63] bg-[#232D63] !text-white"
                    : "border-[#E3ECF5] bg-white text-[#293C7D] hover:border-[#293C7D]/40"
                }`}
              >
                <input
                  type="checkbox"
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
          value={formData.concern}
          onChange={handleChange}
          rows="3"
          required
          placeholder="Overlap, allocation, tax, retirement, family structure…"
          className={fieldClass}
        />
      </div>

      <div>
        <p className={labelClass}>Holdings file (optional)</p>
        <input
          ref={fileInputRef}
          id="portfolio-file"
          type="file"
          name="portfolio"
          accept={ACCEPTED}
          onChange={handleFile}
          className="sr-only"
        />
        {file ? (
          <div className="flex items-center justify-between gap-3 rounded-2xl border border-[#293C7D]/20 bg-white px-4 py-3">
            <div className="flex min-w-0 items-center gap-3">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#232D63]">
                <DocumentArrowUpIcon className="h-5 w-5 text-[#FFC300]" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-[#293C7D]">{file.name}</p>
                <p className="text-xs text-[#4D4D4D]">{(file.size / 1024).toFixed(0)} KB</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                setFile(null);
                if (fileInputRef.current) fileInputRef.current.value = "";
              }}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#E3ECF5] text-[#293C7D] hover:bg-[#F6FDFF]"
              aria-label="Remove file"
            >
              <XMarkIcon className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            className={`flex w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed px-4 py-6 text-center transition-colors ${
              isDragging
                ? "border-[#FFC300] bg-[#FFF8E1]"
                : "border-[#D6E4EE] bg-white hover:border-[#293C7D]/40"
            }`}
          >
            <span className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6FDFF]">
              <ArrowUpTrayIcon className="h-5 w-5 text-[#293C7D]" aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold text-[#293C7D]">Drop CAS or holdings here</span>
            <span className="mt-1 text-xs text-[#4D4D4D]">
              PDF, Excel, CSV or image · max {MAX_FILE_MB} MB
            </span>
          </button>
        )}
        <p className="mt-2 text-xs text-[#4D4D4D] leading-relaxed">
          If the file cannot be attached, submit the form and share it on WhatsApp.
        </p>
      </div>

      {submitStatus.message && (
        <div
          className={`p-3 rounded-xl text-sm ${
            submitStatus.success ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl bg-[#FFC300] px-6 py-3.5 text-base font-bold text-[#232D63] hover:bg-[#293C7D] hover:text-white transition-colors disabled:opacity-50"
      >
        {isSubmitting ? "Submitting..." : "Upload Portfolio for Review"}
      </button>
    </form>
  );
}
