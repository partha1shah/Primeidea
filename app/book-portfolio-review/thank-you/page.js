"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {
  CheckCircleIcon,
  CalendarDaysIcon,
  VideoCameraIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";

function ThankYouInner() {
  const searchParams = useSearchParams();
  const service = searchParams.get("service") || "Portfolio Review";
  const mode = searchParams.get("mode") || "video";
  const date = searchParams.get("date") || "";
  const time = searchParams.get("time") || "";
  const whatsapp = searchParams.get("whatsapp") === "1";

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "book_portfolio_review_thank_you",
      service,
      meeting_mode: mode,
      preferred_date: date,
      preferred_time: time,
      whatsapp_confirm: whatsapp,
    });
    if (typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: undefined,
        event_category: "booking",
        event_label: "thank_you",
        value: 1,
      });
    }
  }, [service, mode, date, time, whatsapp]);

  const modeLabel = mode === "office" ? "Office visit (Vadodara)" : "Video call";

  return (
    <div className="bg-[#F6FDFF] min-h-screen">
      <Header />
      <main className="pt-28 md:pt-32 pb-16 md:pb-20">
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
              Thank you — we have your booking request
            </h1>
            <p className="text-base text-[#4D4D4D] leading-relaxed mb-8 max-w-[520px] mx-auto">
              Our team will confirm your slot based on availability
              {whatsapp ? " and follow up on WhatsApp" : ""}. This is a research-led
              consultation request — not a guarantee of returns.
            </p>

            <dl className="text-left rounded-2xl border border-[#D0E0EC] bg-[#F6FDFF] p-5 mb-8 space-y-3">
              <div className="flex items-start justify-between gap-4">
                <dt className="text-sm text-[#5A5A5A]">Service</dt>
                <dd className="text-sm font-semibold text-[#2D2D2D] text-right m-0">
                  {service}
                </dd>
              </div>
              {(date || time) && (
                <div className="flex items-start justify-between gap-4 border-t border-[#D6E4EE] pt-3">
                  <dt className="text-sm text-[#5A5A5A] inline-flex items-center gap-1.5">
                    <CalendarDaysIcon className="h-4 w-4" aria-hidden="true" />
                    Preferred slot
                  </dt>
                  <dd className="text-sm font-semibold text-[#2D2D2D] text-right m-0">
                    {[date, time].filter(Boolean).join(" · ")}
                  </dd>
                </div>
              )}
              <div className="flex items-start justify-between gap-4 border-t border-[#D6E4EE] pt-3">
                <dt className="text-sm text-[#5A5A5A] inline-flex items-center gap-1.5">
                  {mode === "office" ? (
                    <BuildingOffice2Icon className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <VideoCameraIcon className="h-4 w-4" aria-hidden="true" />
                  )}
                  Meeting mode
                </dt>
                <dd className="text-sm font-semibold text-[#2D2D2D] text-right m-0">
                  {modeLabel}
                </dd>
              </div>
            </dl>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/portfolio-review"
                className="inline-flex items-center justify-center rounded-xl bg-[#293C7D] px-5 py-3.5 text-sm font-bold !text-white hover:bg-[#232D63] transition-colors"
              >
                Upload holdings (optional)
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-xl border border-[#D0E0EC] px-5 py-3.5 text-sm font-bold text-[#293C7D] hover:border-[#293C7D] transition-colors"
              >
                Back to homepage
              </Link>
            </div>
          </div>

          <p className="text-center text-xs text-[#6B7C8A] mt-6 leading-relaxed">
            Partha Shah · SEBI Registered Research Analyst INH000017815 · Investments
            are subject to market risks.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function BookPortfolioReviewThankYouPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#F6FDFF] flex items-center justify-center">
          <p className="text-[#293C7D] font-semibold">Loading confirmation…</p>
        </div>
      }
    >
      <ThankYouInner />
    </Suspense>
  );
}
