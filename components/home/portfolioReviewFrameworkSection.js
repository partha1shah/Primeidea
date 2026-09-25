import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import Image from "next/image";
import Link from "next/link";
import {
  ClipboardDocumentListIcon,
  ChartPieIcon,
  ArrowsRightLeftIcon,
  PresentationChartLineIcon,
  BanknotesIcon,
  DocumentCheckIcon,
} from "@heroicons/react/24/outline";

const frameworkPillars = [
  {
    title: "Risk Profiling & Goal Mapping",
    description:
      "Risk capacity, time horizon, income needs, and goals — clarified before any product review.",
    Icon: ClipboardDocumentListIcon,
  },
  {
    title: "Asset Allocation Review",
    description:
      "Map current allocation against your profile to find gaps, concentration, and rebalancing needs.",
    Icon: ChartPieIcon,
  },
  {
    title: "Holdings & Overlap Analysis",
    description:
      "Mutual funds, equity, fixed income, and other holdings reviewed for overlap and sector bias.",
    Icon: ArrowsRightLeftIcon,
  },
  {
    title: "Risk-Adjusted Performance",
    description:
      "Rolling returns, Sharpe, Sortino, drawdown, and correlation — consistency over headlines.",
    Icon: PresentationChartLineIcon,
  },
  {
    title: "Tax, Cost & Liquidity",
    description:
      "Exit loads, expense ratios, tax impact, and liquidity checked so next steps stay practical.",
    Icon: BanknotesIcon,
  },
  {
    title: "Written Review & Discipline",
    description:
      "A clear review summary with next steps and a quarterly cadence for ongoing course correction.",
    Icon: DocumentCheckIcon,
  },
];

const reviewChecklist = [
  "Asset allocation",
  "Fund & holding overlap",
  "Sector & market-cap exposure",
  "Rolling returns",
  "CAGR & XIRR",
  "Sharpe & Sortino",
  "Drawdown risk",
  "Tax impact",
  "Exit load & expense ratio",
  "Insurance adequacy",
  "Emergency fund",
  "Goal alignment",
];

const PortfolioReviewFrameworkSection = () => {
  return (
    <section
      aria-labelledby="portfolio-review-framework-heading"
      className="bg-white py-14 md:py-20"
    >
      <div className="2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10 md:mb-12">
          <FadeUpOneByOneAnimation className="max-w-[720px]">
            <h2
              id="portfolio-review-framework-heading"
              className="text-[26px] md:text-[32px] 2xl:text-[36px] font-light text-[#2D2D2D] leading-[125%] mb-4"
            >
              Portfolio Review{" "}
              <strong className="font-semibold">Framework</strong>
            </h2>
            <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed">
              A structured review across allocation, overlap, risk metrics, tax impact, and goal alignment — so you understand what to change before investing further.
            </p>
          </FadeUpOneByOneAnimation>

          <FadeUpOneByOneAnimation className="flex flex-wrap gap-3 shrink-0">
            <Link
              href="/portfolio-review"
              className="bg-[#293C7D] text-base font-bold rounded-md text-white px-5 py-3 inline-flex items-center hover:bg-[#232D63] transition-colors"
            >
              Book Portfolio Review
              <Image
                src="/images/icons/arrow-square-right.png"
                width={21}
                height={21}
                alt=""
                className="ml-2"
              />
            </Link>
            <Link
              href="/research-process"
              className="border-2 border-[#293C7D] text-base font-bold rounded-md text-[#293C7D] px-5 py-3 inline-flex items-center hover:bg-[#293C7D] hover:text-white transition-colors"
            >
              View Research Process
            </Link>
          </FadeUpOneByOneAnimation>
        </div>

        {/* SEBI credibility strip */}
        <FadeUpOneByOneAnimation className="mb-10 md:mb-12 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 rounded-2xl bg-[#F6FDFF] border border-[#D6E4EE] px-5 py-4 md:px-6 md:py-5">
          <span className="inline-flex items-center justify-center rounded-full bg-[#FFC300] text-[#232D63] text-xs font-bold tracking-wide uppercase px-3 py-1.5 shrink-0">
            Research-led
          </span>
          <p className="text-sm md:text-base text-[#2D2D2D] leading-relaxed">
            Guided by{" "}
            <strong className="font-semibold">Partha Shah</strong>, SEBI Registered Research Analyst{" "}
            <strong className="text-[#293C7D] font-semibold">INH000017815</strong>
            {" — "}process-first review with no guaranteed-return claims.
          </p>
        </FadeUpOneByOneAnimation>

        {/* Framework stages */}
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-10 md:mb-12 list-none m-0 p-0">
          {frameworkPillars.map(({ title, description, Icon }, index) => {
            const number = String(index + 1).padStart(2, "0");
            return (
              <li key={title}>
                <FadeUpOneByOneAnimation className="group relative h-full overflow-hidden rounded-[20px] border border-[#D6E4EE] bg-[#F6FDFF] p-5 md:p-6 transition-all duration-300 hover:border-[#293C7D] hover:bg-white">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#D6E4EE] flex items-center justify-center group-hover:bg-[#293C7D] group-hover:border-[#293C7D] transition-colors duration-300">
                      <Icon
                        className="w-6 h-6 text-[#293C7D] group-hover:text-white transition-colors duration-300"
                        aria-hidden="true"
                      />
                    </div>
                    <span
                      className="text-3xl md:text-4xl font-light leading-none text-[#293C7D]/25 group-hover:text-[#FFC300] transition-colors duration-300 tabular-nums"
                      aria-hidden="true"
                    >
                      {number}
                    </span>
                  </div>
                  <h3 className="text-[#293C7D] text-base md:text-lg font-bold mb-2 leading-snug">
                    <span className="sr-only">Step {number}: </span>
                    {title}
                  </h3>
                  <p className="text-[13px] md:text-sm font-medium text-[#5A5A5A] leading-relaxed">
                    {description}
                  </p>
                </FadeUpOneByOneAnimation>
              </li>
            );
          })}
        </ol>

        {/* What We Review */}
        <FadeUpOneByOneAnimation className="rounded-[20px] md:rounded-[24px] bg-[#232D63] bg-[url('/images/insurance/risk-management/bg.png')] bg-no-repeat bg-contain bg-top p-6 md:p-8 lg:p-10">
          <div className="mb-6 md:mb-8 max-w-[640px]">
            <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">
              What We Review
            </h3>
            <p className="text-white/75 text-sm md:text-base leading-relaxed">
              Practical checkpoints covered in every research-led portfolio review.
            </p>
          </div>

          <ul className="flex flex-wrap gap-2.5 md:gap-3 list-none m-0 p-0">
            {reviewChecklist.map((item) => (
              <li
                key={item}
                className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-sm font-medium text-white backdrop-blur-[2px]"
              >
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#FFC300]" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </FadeUpOneByOneAnimation>
      </div>
    </section>
  );
};

export default PortfolioReviewFrameworkSection;
