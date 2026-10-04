import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import Link from "next/link";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function ScopeDisclaimerBar({
  children,
  ctaHref = "/regulatory-disclosures",
  ctaLabel = "View Regulatory Disclosures",
}) {
  const disclaimerText =
    children ||
    "Investments in securities market are subject to market risks. PrimeIdea Ventures does not guarantee returns. Investors should verify SEBI registration independently and read all scheme-related documents carefully before investing.";

  return (
    <section aria-label="Financial disclaimer">
      <div className="bg-[#232D63] bg-[url('/images/insurance/risk-management/bg.png')] bg-repeat bg-contain bg-center py-12 md:py-14">
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <FadeUpOneByOneAnimation className="rounded-[20px] border border-white/15 bg-[#293C7D]/50 px-5 py-6 md:px-8 md:py-8">
            <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10">
              <div className="flex items-start gap-4 shrink-0 lg:max-w-[280px]">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#232D63] border border-white/10 shrink-0">
                  <ExclamationTriangleIcon className="h-5 w-5 text-[#FFC300]" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FFC300] mb-1">
                    Important disclaimer
                  </p>
                  <p className="text-white text-lg md:text-xl font-semibold leading-snug">
                    Market risks apply
                  </p>
                </div>
              </div>

              <div className="flex-1">
                <p className="text-sm md:text-base !text-white/85 leading-relaxed mb-5">
                  {disclaimerText}
                </p>
                <Link
                  href={ctaHref}
                  className="inline-flex items-center gap-2 rounded-md bg-[#FFC300] px-5 py-3 text-sm md:text-base font-bold text-[#232D63] hover:bg-white transition-colors"
                >
                  {ctaLabel}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </FadeUpOneByOneAnimation>
        </div>
      </div>
    </section>
  );
}
