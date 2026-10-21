"use client";

import { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function LeadThankYou({
  title = "Thank you — we have your request",
  description = "Our team will review your details and follow up shortly. This is a research-led consultation request — not a guarantee of returns.",
  eventName = "lead_form_thank_you",
  eventPayload = {},
  primaryHref = "/book-portfolio-review",
  primaryLabel = "Book Portfolio Review",
  secondaryHref = "/",
  secondaryLabel = "Back to homepage",
}) {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...eventPayload,
    });
    if (typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        event_category: "lead",
        event_label: eventName,
        value: 1,
      });
    }
    // Fire once on mount for conversion tracking.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventName]);

  return (
    <div className="bg-[#F6FDFF] min-h-screen">
      <Header />
      <div className="pt-28 md:pt-32 pb-16 md:pb-20">
        <div className="mx-auto max-w-[720px] px-4">
          <div className="relative overflow-hidden rounded-[28px] border border-[#D0E0EC] bg-white p-6 md:p-10 shadow-[0_24px_60px_-40px_rgba(41,60,125,0.45)] text-center">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#479AD2] via-[#293C7D] to-[#FFC300]" />

            <span className="mx-auto mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#E8F6EE] text-[#1F6B3A]">
              <CheckCircleIcon className="h-9 w-9" aria-hidden="true" />
            </span>

            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#479AD2] mb-2">
              Request received
            </p>
            <h1 className="text-[26px] md:text-[32px] font-semibold text-[#2D2D2D] mb-3 leading-tight">
              {title}
            </h1>
            <p className="text-base text-[#4D4D4D] leading-relaxed mb-8 max-w-[520px] mx-auto">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href={primaryHref}
                className="inline-flex items-center justify-center rounded-xl bg-[#293C7D] px-5 py-3.5 text-sm font-bold !text-white hover:bg-[#232D63] transition-colors"
              >
                {primaryLabel}
              </Link>
              <Link
                href={secondaryHref}
                className="inline-flex items-center justify-center rounded-xl border border-[#D0E0EC] px-5 py-3.5 text-sm font-bold text-[#293C7D] hover:border-[#293C7D] transition-colors"
              >
                {secondaryLabel}
              </Link>
            </div>
          </div>

          <p className="text-center text-xs text-[#6B7C8A] mt-6 leading-relaxed">
            Investments in the securities market are subject to market risks.
             
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
