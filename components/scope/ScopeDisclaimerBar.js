import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import Link from "next/link";

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
            <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8">
              <div className="flex-1 min-w-0">
                <p className="text-white text-lg md:text-xl font-semibold leading-snug mb-3">
                  Ready for the next step?
                </p>
                <p className="text-[11px] md:text-xs !text-white/55 leading-relaxed mb-0">
                  {String(disclaimerText).trim().startsWith("*")
                    ? disclaimerText
                    : `* ${disclaimerText}`}
                </p>
              </div>
              <Link
                href={ctaHref}
                className="inline-flex shrink-0 items-center gap-2 rounded-md bg-[#FFC300] px-5 py-3 text-sm md:text-base font-bold text-[#232D63] hover:bg-white transition-colors"
              >
                {ctaLabel}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </FadeUpOneByOneAnimation>
        </div>
      </div>
    </section>
  );
}
