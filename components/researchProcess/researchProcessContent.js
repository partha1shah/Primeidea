import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import WhatWeReviewSection from "@/components/researchProcess/WhatWeReviewSection";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownTrayIcon,
  ArrowsRightLeftIcon,
  BanknotesIcon,
  BriefcaseIcon,
  ChartPieIcon,
  ClipboardDocumentListIcon,
  DocumentCheckIcon,
  GlobeAltIcon,
  PresentationChartLineIcon,
  UserGroupIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    title: "Understand goals & constraints",
    description:
      "We begin with your financial goals, time horizon, income needs, and existing product mix so the review stays suitable to your life stage.",
  },
  {
    title: "Review portfolio & holdings",
    description:
      "Holdings are mapped across mutual funds, equity, fixed income, insurance, and other products for overlap and concentration risk.",
  },
  {
    title: "Assess risk & asset allocation",
    description:
      "We evaluate suitability, allocation gaps, and whether current investments align with your risk profile and goals.",
  },
  {
    title: "Research-led recommendations",
    description:
      "Guidance is anchored by Partha Shah, SEBI Registered Research Analyst (INH000017815), with process-first reasoning — not product pushing.",
  },
  {
    title: "Review, implement & monitor",
    description:
      "You receive a clear next-step view for portfolio adjustments, planning priorities, and an ongoing review cadence.",
  },
];

const frameworkPillars = [
  {
    title: "Risk profiling & goal mapping",
    description:
      "Risk capacity, time horizon, income needs, and goals — clarified before any product review.",
    Icon: ClipboardDocumentListIcon,
  },
  {
    title: "Asset allocation review",
    description:
      "Map current allocation against your profile to find gaps, concentration, and rebalancing needs.",
    Icon: ChartPieIcon,
  },
  {
    title: "Holdings & overlap analysis",
    description:
      "Mutual funds, equity, fixed income, and other holdings reviewed for overlap and sector bias.",
    Icon: ArrowsRightLeftIcon,
  },
  {
    title: "Risk-adjusted performance",
    description:
      "Rolling returns, Sharpe, Sortino, drawdown, and correlation — consistency over headlines.",
    Icon: PresentationChartLineIcon,
  },
  {
    title: "Tax, cost & liquidity",
    description:
      "Exit loads, expense ratios, tax impact, and liquidity checked so next steps stay practical.",
    Icon: BanknotesIcon,
  },
  {
    title: "Written review & discipline",
    description:
      "A clear review summary with next steps and a quarterly cadence for ongoing course correction.",
    Icon: DocumentCheckIcon,
  },
];

const whoItsFor = [
  {
    title: "Salaried professionals",
    description: "SIPs, overlapping funds, and goals that need a cleaner allocation.",
    Icon: UsersIcon,
  },
  {
    title: "Business owners",
    description: "Mixed personal and business liquidity that should be reviewed as one picture.",
    Icon: BriefcaseIcon,
  },
  {
    title: "Families & HNIs",
    description: "Multiple products and accounts that need consolidated, research-led oversight.",
    Icon: UserGroupIcon,
  },
  {
    title: "NRIs",
    description: "India holdings reviewed with a clear process, from anywhere you live.",
    Icon: GlobeAltIcon,
  },
];

export default function ResearchProcessContent() {
  return (
    <>
      <section
        id="process-steps"
        aria-labelledby="process-steps-heading"
        className="bg-white py-14 md:py-16 scroll-mt-24"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-5">
              <FadeUpOneByOneAnimation className="lg:sticky lg:top-28">
                <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-3">
                  How we work
                </p>
                <h2
                  id="process-steps-heading"
                  className="text-[28px] md:text-[36px] font-light text-[#2D2D2D] leading-[120%] mb-4"
                >
                  Five steps.{" "}
                  <strong className="font-semibold">No product push.</strong>
                </h2>
                <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed mb-6">
                  PrimeIdea Ventures is a Vadodara-based research-led wealth management and
                  portfolio review firm serving investors across Gujarat and India. The
                  research process is guided by Partha Shah, SEBI Registered Research Analyst
                  INH000017815.
                </p>

                <div className="flex items-center gap-4 rounded-2xl border border-[#E3ECF5] bg-[#F6FDFF] p-4 mb-6">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-2 ring-[#FFC300]/50">
                    <Image
                      src="/images/about-us/founder.jpg"
                      width={128}
                      height={128}
                      alt="Partha Shah SEBI Registered Research Analyst PrimeIdea Ventures"
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-[#293C7D]">Partha Shah</p>
                    <p className="text-sm text-[#4D4D4D] leading-snug">
                      SEBI RA · <span className="font-semibold text-[#293C7D]">INH000017815</span>
                    </p>
                  </div>
                </div>

                <a
                  href="/docs/portfolio-review-framework.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-md border-2 border-[#293C7D] px-5 py-3 text-base font-bold text-[#293C7D] hover:bg-[#F6FDFF] transition-colors"
                >
                  <ArrowDownTrayIcon className="h-5 w-5" aria-hidden="true" />
                  Download framework PDF
                </a>
              </FadeUpOneByOneAnimation>
            </div>

            <ol className="lg:col-span-7 relative list-none m-0 p-0">
              <span
                className="absolute left-[19px] top-3 bottom-3 w-px bg-[#E3ECF5] hidden sm:block"
                aria-hidden="true"
              />
              {steps.map((step, index) => (
                <li key={step.title} className="relative sm:pl-14 pb-6 last:pb-0">
                  <span className="hidden sm:flex absolute left-0 top-1 h-10 w-10 items-center justify-center rounded-full bg-[#293C7D] text-[#FFC300] text-sm font-bold tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <FadeUpOneByOneAnimation className="rounded-2xl border border-[#E3ECF5] bg-[#F6FDFF] p-5 md:p-6">
                    <p className="sm:hidden text-[#479AD2] text-sm font-bold mb-1 tabular-nums">
                      Step {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="text-lg font-bold text-[#293C7D] mb-2">{step.title}</h3>
                    <p className="text-sm md:text-base text-[#4D4D4D] leading-relaxed">
                      {step.description}
                    </p>
                  </FadeUpOneByOneAnimation>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section
        id="review-framework"
        aria-labelledby="review-framework-heading"
        className="bg-[#232D63] py-14 md:py-16 bg-[url('/images/insurance/risk-management/bg.png')] bg-repeat bg-contain bg-center scroll-mt-24"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <FadeUpOneByOneAnimation className="max-w-[720px] mb-8 md:mb-10">
            <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#FFC300] mb-3">
              Portfolio review framework
            </p>
            <h2
              id="review-framework-heading"
              className="text-[28px] md:text-[36px] font-light text-white leading-[120%] mb-4"
            >
              What a structured review <strong className="font-semibold">actually covers</strong>
            </h2>
            <p className="text-base md:text-lg !text-white/80 leading-relaxed">
              Allocation, overlap, risk metrics, tax impact, and goal alignment — so you
              understand what to change before investing further.
            </p>
          </FadeUpOneByOneAnimation>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none m-0 p-0">
            {frameworkPillars.map(({ title, description, Icon }, index) => (
              <li key={title}>
                <FadeUpOneByOneAnimation className="h-full rounded-[20px] border border-white/15 bg-[#293C7D]/45 p-5 md:p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#232D63] border border-white/10">
                      <Icon className="h-5 w-5 text-[#FFC300]" aria-hidden="true" />
                    </span>
                    <span className="text-2xl font-light text-white/25 tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{title}</h3>
                  <p className="text-sm !text-white/75 leading-relaxed">{description}</p>
                </FadeUpOneByOneAnimation>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <WhatWeReviewSection />

      <section
        id="who-its-for"
        aria-labelledby="who-heading"
        className="bg-white py-14 md:py-16 scroll-mt-24"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <FadeUpOneByOneAnimation className="mb-8 md:mb-10 max-w-[680px]">
            <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-3">
              Who this process helps
            </p>
            <h2
              id="who-heading"
              className="text-[28px] md:text-[36px] font-light text-[#2D2D2D] leading-[120%] mb-3"
            >
              Built for real portfolios,{" "}
              <strong className="font-semibold">not a sales script</strong>
            </h2>
          </FadeUpOneByOneAnimation>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none m-0 p-0">
            {whoItsFor.map(({ title, description, Icon }, index) => (
              <li key={title}>
                <FadeUpOneByOneAnimation className="group flex h-full gap-4 rounded-[20px] border border-[#E3ECF5] bg-[#F6FDFF] p-5 md:p-6 transition-colors hover:border-[#293C7D]/30 hover:bg-white">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white border border-[#E3ECF5] group-hover:bg-[#293C7D] group-hover:border-[#293C7D] transition-colors">
                    <Icon className="h-6 w-6 text-[#293C7D] group-hover:text-[#FFC300] transition-colors" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#479AD2] mb-1">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="text-lg font-bold text-[#293C7D] mb-1">{title}</h3>
                    <p className="text-sm md:text-base text-[#4D4D4D] leading-relaxed">{description}</p>
                  </div>
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
                Understand risks, overlaps, allocation, and next steps before investing
                further — research-led, with no return promises.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href="/portfolio-review"
                className="inline-flex items-center gap-2 rounded-xl bg-[#FFC300] px-5 py-3 text-base font-bold text-[#232D63] hover:bg-white transition-colors"
              >
                Book Portfolio Review
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/sebi-registered-research-analyst"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-5 py-3 text-base font-bold text-white hover:border-[#FFC300] hover:text-[#FFC300] transition-colors"
              >
                SEBI RA credentials
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
