import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    title: "Understand Goals & Constraints",
    description:
      "We begin with your financial goals, time horizon, income needs, and existing product mix so the review stays suitable to your life stage.",
  },
  {
    title: "Review Portfolio & Holdings",
    description:
      "Holdings are mapped across mutual funds, equity, fixed income, insurance, and other products for overlap and concentration risk.",
  },
  {
    title: "Assess Risk & Asset Allocation",
    description:
      "We evaluate suitability, asset allocation gaps, and whether current investments align with your risk profile and goals.",
  },
  {
    title: "Research-Led Recommendations",
    description:
      "Guidance is process-first — suitability, allocation, and risk clarity — not product pushing.",
  },
  {
    title: "Review, Implement & Monitor",
    description:
      "You receive a clear next-step view for portfolio adjustments, planning priorities, and an ongoing review cadence.",
  },
];

const ResearchProcessSection = () => {
  return (
    <section
      aria-labelledby="research-process-heading"
      className="bg-[#232D63] py-14 md:py-20 bg-[url('/images/insurance/risk-management/bg.png')] bg-repeat bg-contain bg-center"
    >
      <div className="2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10 md:mb-12">
          <div className="max-w-[640px]">
            <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#FFC300] mb-3">
              How we work
            </p>
            <h2
              id="research-process-heading"
              className="text-[32px] md:text-[40px] xl:text-[44px] font-semibold text-white leading-[115%] tracking-tight mb-4"
            >
              PrimeIdea Research Process
            </h2>
            <p className="text-base md:text-lg text-white/80 leading-relaxed">
              Our research process prioritises suitability, risk understanding, and structured review — not product pushing or return promises.
            </p>
          </div>

          <Link
            href="/research-process"
            className="inline-flex items-center gap-2 text-base font-semibold text-white hover:text-[#FFC300] transition-colors group shrink-0"
          >
            <span
              className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#FFC300] text-[#232D63] text-sm leading-none group-hover:translate-x-0.5 transition-transform"
              aria-hidden="true"
            >
              →
            </span>
            View Research Process
          </Link>
        </div>

        {/* Founder credibility */}
        <div className="mb-10 md:mb-12 flex flex-col sm:flex-row sm:items-center gap-5 rounded-2xl border border-white/15 bg-[#293C7D]/50 p-5 md:p-6">
          <div className="relative h-16 w-16 md:h-20 md:w-20 shrink-0 overflow-hidden rounded-full ring-2 ring-[#FFC300]/40">
            <Image
              src="/images/about-us/founder.jpg"
              width={160}
              height={160}
              alt="Partha Shah SEBI Registered Research Analyst PrimeIdea Ventures"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div>
            <p className="text-white text-base md:text-lg font-semibold mb-1">
              Partha Shah
            </p>
            <p className="text-white/75 text-sm md:text-base leading-relaxed">
              SEBI Registered Research Analyst — process-first research guiding every
              portfolio review.
            </p>
          </div>
        </div>

        {/* Process step cards */}
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 list-none m-0 p-0">
          {steps.map((step, index) => {
            const number = String(index + 1).padStart(2, "0");
            const isWide = index >= 3;

            return (
              <li
                key={step.title}
                className={isWide ? "sm:col-span-1 lg:col-span-1 lg:first:col-span-1" : ""}
              >
                <div
                  className={`group h-full rounded-2xl border border-white/15 bg-[#293C7D]/40 p-5 md:p-6 transition-colors duration-300 hover:border-[#FFC300]/40 hover:bg-[#293C7D]/65 ${
                    index === 3 ? "lg:col-span-1" : ""
                  } ${index === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}
                >
                  <span
                    className="block text-[40px] md:text-[48px] font-light leading-none text-[#FFC300] tabular-nums mb-4"
                    aria-hidden="true"
                  >
                    {number}
                  </span>
                  <h3 className="text-white text-lg md:text-xl font-semibold mb-2 leading-snug">
                    <span className="sr-only">Step {number}: </span>
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default ResearchProcessSection;
