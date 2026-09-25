import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import WhatWeReviewSection from "@/components/researchProcess/WhatWeReviewSection";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowsRightLeftIcon,
  ChartBarIcon,
  CheckBadgeIcon,
  MapPinIcon,
  PresentationChartLineIcon,
  ScaleIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

const analysisPoints = [
  {
    title: "Holdings and overlap",
    description:
      "Funds and stocks mapped for overlap, sector bias, and concentration before any product change is discussed.",
    Icon: ArrowsRightLeftIcon,
  },
  {
    title: "Risk-adjusted consistency",
    description:
      "Rolling returns, Sharpe, Sortino, drawdown, and correlation — how the book behaves, not a headline number.",
    Icon: PresentationChartLineIcon,
  },
  {
    title: "Suitability and allocation",
    description:
      "Risk capacity, time horizon, and goals sit first. Allocation gaps are checked against that profile.",
    Icon: ScaleIcon,
  },
  {
    title: "Mutual fund review",
    description:
      "Scheme mix, expense, overlap, and role in the book — not selection by recent popularity alone.",
    Icon: Squares2X2Icon,
  },
  {
    title: "Equity research support",
    description:
      "Direct equity exposure reviewed for concentration and fit with the rest of the portfolio.",
    Icon: ChartBarIcon,
  },
  {
    title: "Cost, tax, and next steps",
    description:
      "Exit loads, tax impact, and liquidity checked so a change is usable in real life.",
    Icon: ShieldCheckIcon,
  },
];

const relatedPages = [
  {
    title: "Research Process",
    href: "/research-process",
    description: "The five-step method behind research-led reviews.",
  },
  {
    title: "Portfolio Review",
    href: "/portfolio-review",
    description: "Upload holdings or book an office or video review.",
  },
  {
    title: "Mutual Fund Investment Support",
    href: "/mutual-fund-investment-support",
    description: "SIP and scheme review for investors across Gujarat and India.",
  },
  {
    title: "Fixed Income Investments",
    href: "/fixed-income-investments",
    description: "Debt, bonds, and stability allocation — risk before yield.",
  },
];

export default function ResearchBasedWmContent() {
  return (
    <>
      <section
        aria-labelledby="rbwm-intro-heading"
        className="bg-[#F6FDFF] py-14 md:py-16"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <div className="overflow-hidden rounded-[28px] border border-[#E3ECF5] bg-white grid grid-cols-1 lg:grid-cols-12">
            <FadeUpOneByOneAnimation className="lg:col-span-5 relative min-h-[360px] lg:min-h-[520px]">
              <Image
                src="/images/about-us/founder.jpg"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                alt="Partha Shah SEBI Registered Research Analyst PrimeIdea Ventures"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#232D63] via-[#232D63]/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FFC300] mb-1">
                  Research leadership
                </p>
                <p className="text-2xl font-bold !text-white mb-1">Partha Shah</p>
                <p className="text-sm !text-white/80 mb-3">
                  SEBI Registered Research Analyst
                </p>
                <p className="inline-flex items-center rounded-full border border-white/20 bg-[#232D63]/80 px-3 py-1 text-sm font-bold tabular-nums text-[#FFC300]">
                  INH000017815
                </p>
              </div>
            </FadeUpOneByOneAnimation>

            <div className="lg:col-span-7 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
              <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-3">
                SEBI RA-led research
              </p>
              <h2
                id="rbwm-intro-heading"
                className="text-[28px] md:text-[36px] font-light text-[#2D2D2D] leading-[120%] mb-4"
              >
                Wealth management that starts with a{" "}
                <strong className="font-semibold">portfolio review</strong>
              </h2>
              <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed mb-4">
                PrimeIdea Ventures is a Vadodara-based research-led wealth management and
                portfolio review firm serving investors across Gujarat and India. The research
                process is guided by Partha Shah, SEBI Registered Research Analyst INH000017815.
              </p>
              <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed mb-6">
                Mutual fund and equity support follows the same method: suitability, overlap,
                allocation, and risk first. Not a product push. Not a return promise. Not SEBI
                RIA advice unless separately registered.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none m-0 p-0 mb-7">
                <li className="flex items-start gap-3 rounded-xl border border-[#E3ECF5] bg-[#F6FDFF] px-4 py-3">
                  <CheckBadgeIcon className="h-5 w-5 shrink-0 text-[#293C7D] mt-0.5" aria-hidden="true" />
                  <span>
                    <span className="block text-sm font-bold text-[#293C7D]">Verify registration</span>
                    <span className="block text-xs text-[#4D4D4D]">INH000017815 on SEBI records</span>
                  </span>
                </li>
                <li className="flex items-start gap-3 rounded-xl border border-[#E3ECF5] bg-[#F6FDFF] px-4 py-3">
                  <MapPinIcon className="h-5 w-5 shrink-0 text-[#293C7D] mt-0.5" aria-hidden="true" />
                  <span>
                    <span className="block text-sm font-bold text-[#293C7D]">Vadodara office</span>
                    <span className="block text-xs text-[#4D4D4D]">Serving Gujarat and India</span>
                  </span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/portfolio-review"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#FFC300] px-5 py-3 text-base font-bold text-[#232D63] hover:bg-[#293C7D] hover:text-white transition-colors"
                >
                  Book Portfolio Review
                  <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href="/research-process"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-[#293C7D] px-5 py-3 text-base font-bold text-[#293C7D] hover:bg-[#F6FDFF] transition-colors"
                >
                  View Research Process
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatWeReviewSection />

      <section
        aria-labelledby="analysis-heading"
        className="bg-white py-14 md:py-16"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <FadeUpOneByOneAnimation className="max-w-[720px] mb-8 md:mb-10">
            <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-3">
              How the research is used
            </p>
            <h2
              id="analysis-heading"
              className="text-[28px] md:text-[36px] font-light text-[#2D2D2D] leading-[120%] mb-3"
            >
              Analysis that sits on the{" "}
              <strong className="font-semibold">current book</strong>
            </h2>
            <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed">
              Tools matter only when they change what you do with holdings you already have.
            </p>
          </FadeUpOneByOneAnimation>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none m-0 p-0">
            {analysisPoints.map(({ title, description, Icon }) => (
              <li key={title}>
                <FadeUpOneByOneAnimation className="h-full rounded-[20px] border border-[#E3ECF5] bg-[#F6FDFF] p-5 md:p-6">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white border border-[#E3ECF5] mb-4">
                    <Icon className="h-5 w-5 text-[#293C7D]" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-bold text-[#293C7D] mb-2">{title}</h3>
                  <p className="text-sm md:text-base text-[#4D4D4D] leading-relaxed">{description}</p>
                </FadeUpOneByOneAnimation>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#232D63] py-14 md:py-16 bg-[url('/images/insurance/risk-management/bg.png')] bg-repeat bg-contain bg-center">
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-[640px]">
              <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#FFC300] mb-3">
                Next step
              </p>
              <h2 className="text-[28px] md:text-[36px] font-light text-white leading-[120%] mb-3">
                Start with a structured{" "}
                <strong className="font-semibold">portfolio review</strong>
              </h2>
              <p className="text-base md:text-lg !text-white/80 leading-relaxed">
                Understand risks, overlaps, asset allocation, and next financial steps before
                investing further.
              </p>
            </div>
            <Link
              href="/portfolio-review"
              className="inline-flex items-center gap-2 rounded-xl bg-[#FFC300] px-5 py-3 text-base font-bold text-[#232D63] hover:bg-white transition-colors shrink-0"
            >
              Book Portfolio Review
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="rbwm-related-heading"
        className="bg-[#F6FDFF] py-14 md:py-16"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <FadeUpOneByOneAnimation className="mb-8 md:mb-10">
            <h2
              id="rbwm-related-heading"
              className="text-[24px] md:text-[30px] font-semibold text-[#2D2D2D] mb-2"
            >
              Related pages
            </h2>
            <p className="text-[#4D4D4D] text-sm md:text-base max-w-[640px]">
              Process, review, registration, and disclosures that sit with this service page.
            </p>
          </FadeUpOneByOneAnimation>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedPages.map((link) => (
              <FadeUpOneByOneAnimation key={link.title}>
                <Link
                  href={link.href}
                  className="flex h-full flex-col rounded-[20px] border border-[#E3ECF5] bg-white p-5 hover:border-[#293C7D]/40 transition-colors"
                >
                  <h3 className="text-base font-bold text-[#293C7D] mb-1">{link.title}</h3>
                  <p className="text-sm text-[#4D4D4D] leading-relaxed">{link.description}</p>
                </Link>
              </FadeUpOneByOneAnimation>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
