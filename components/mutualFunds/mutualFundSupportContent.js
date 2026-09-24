import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import Link from "next/link";
import {
  ArrowsRightLeftIcon,
  BanknotesIcon,
  ChartPieIcon,
  ClipboardDocumentCheckIcon,
  PresentationChartLineIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

const supportAreas = [
  {
    title: "Scheme mix and overlap",
    description:
      "Map what you already hold so similar funds are not stacked without a reason.",
    Icon: ArrowsRightLeftIcon,
  },
  {
    title: "SIP and lumpsum review",
    description:
      "Whether ongoing SIPs still fit goals, time horizon, and the rest of the book.",
    Icon: Squares2X2Icon,
  },
  {
    title: "Cost and tax practicality",
    description:
      "Expense ratio, exit load, and tax impact checked before a switch is suggested.",
    Icon: BanknotesIcon,
  },
  {
    title: "Risk path, not star ratings",
    description:
      "Rolling returns, drawdown, and consistency — not last year’s ranking alone.",
    Icon: PresentationChartLineIcon,
  },
  {
    title: "Allocation role",
    description:
      "Equity, hybrid, debt, ELSS, and index funds reviewed for the job they do in the book.",
    Icon: ChartPieIcon,
  },
  {
    title: "Written next steps",
    description:
      "A clear view of what to keep, what to review further, and what can wait.",
    Icon: ClipboardDocumentCheckIcon,
  },
];

const whoItsFor = [
  {
    title: "SIP investors in Vadodara",
    description: "Several schemes over years, with overlap that has never been mapped.",
  },
  {
    title: "Families consolidating funds",
    description: "Accounts in more than one name that should be reviewed as one picture.",
  },
  {
    title: "Gujarat and India clients",
    description: "Same research-led review by video if you cannot visit the Vadodara office.",
  },
];

const relatedPages = [
  {
    title: "Portfolio Review in Vadodara",
    href: "/portfolio-review-vadodara",
    description: "Upload a CAS or book an office or video review.",
  },
  {
    title: "Research Process",
    href: "/research-process",
    description: "The five-step method behind scheme review.",
  },
  {
    title: "Research-Based Wealth Management",
    href: "/research-based-wealth-management",
    description: "How mutual funds sit inside the broader research-led process.",
  },
  {
    title: "Fixed Income Investments",
    href: "/fixed-income-investments-vadodara",
    description: "Debt, bonds, and stability allocation reviewed for risk — not yield alone.",
  },
  {
    title: "PMS, AIF & SIF Support",
    href: "/pms-aif-sif-investment-support-gujarat-india",
    description: "Suitability-led review of managed and alternate strategies.",
  },
];

export default function MutualFundSupportContent() {
  return (
    <>
      <section
        aria-labelledby="mf-intro-heading"
        className="bg-white py-14 md:py-16"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-6">
              <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-3">
                Mutual fund support
              </p>
              <h2
                id="mf-intro-heading"
                className="text-[28px] md:text-[36px] font-light text-[#2D2D2D] leading-[120%] mb-4"
              >
                Review the book you already hold —{" "}
                <strong className="font-semibold">before adding another SIP</strong>
              </h2>
              <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed mb-4">
                PrimeIdea Ventures is a Vadodara-based research-led wealth management and
                portfolio review firm serving investors across Gujarat and India. Mutual fund
                support is guided by Partha Shah, SEBI Registered Research Analyst INH000017815.
              </p>
              <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed">
                This is scheme review and suitability-oriented research — not a popularity
                contest, not a return promise, and not SEBI Registered Investment Adviser advice
                unless PrimeIdea is separately registered. It is also distinct from a
                product-push mutual fund distributor pitch: overlap, cost, and fit come first.
              </p>
            </div>
            <ul className="lg:col-span-6 grid grid-cols-1 gap-3 list-none m-0 p-0">
              {whoItsFor.map((item, index) => (
                <li key={item.title}>
                  <FadeUpOneByOneAnimation className="rounded-2xl border border-[#E3ECF5] bg-[#F6FDFF] p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#479AD2] mb-1">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="text-lg font-bold text-[#293C7D] mb-1">{item.title}</h3>
                    <p className="text-sm md:text-base text-[#4D4D4D] leading-relaxed">
                      {item.description}
                    </p>
                  </FadeUpOneByOneAnimation>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="mf-support-heading"
        className="bg-[#F6FDFF] py-14 md:py-16"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <FadeUpOneByOneAnimation className="max-w-[720px] mb-8 md:mb-10">
            <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-3">
              What we review
            </p>
            <h2
              id="mf-support-heading"
              className="text-[28px] md:text-[36px] font-light text-[#2D2D2D] leading-[120%] mb-3"
            >
              Mutual fund checkpoints —{" "}
              <strong className="font-semibold">process first</strong>
            </h2>
          </FadeUpOneByOneAnimation>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none m-0 p-0">
            {supportAreas.map(({ title, description, Icon }) => (
              <li key={title}>
                <FadeUpOneByOneAnimation className="h-full rounded-[20px] border border-[#E3ECF5] bg-white p-5 md:p-6">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#F6FDFF] border border-[#E3ECF5] mb-4">
                    <Icon className="h-5 w-5 text-[#293C7D]" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-bold text-[#293C7D] mb-2">{title}</h3>
                  <p className="text-sm text-[#4D4D4D] leading-relaxed">{description}</p>
                </FadeUpOneByOneAnimation>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="mf-disclaimer-heading"
        className="bg-[#232D63] py-14 md:py-16 bg-[url('/images/insurance/risk-management/bg.png')] bg-repeat bg-contain bg-center"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#FFC300] mb-3">
                Mutual fund disclaimer
              </p>
              <h2
                id="mf-disclaimer-heading"
                className="text-[28px] md:text-[36px] font-light !text-white leading-[120%] mb-4"
              >
                Market risks apply.{" "}
                <strong className="font-semibold">Read the documents.</strong>
              </h2>
              <p className="text-base md:text-lg !text-white/80 leading-relaxed">
                Mutual fund investments are subject to market risks. Read all scheme-related
                documents carefully. PrimeIdea does not guarantee returns.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col items-center justify-center gap-3">
              <Link
                href="/portfolio-review-vadodara"
                className="inline-flex items-center justify-center rounded-xl bg-[#FFC300] px-5 py-3 text-base font-bold text-[#232D63] hover:bg-white transition-colors"
              >
                Upload portfolio for review
              </Link>
              <Link
                href="/research-process"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 px-5 py-3 text-base font-bold text-white hover:border-[#FFC300] hover:text-[#FFC300] transition-colors"
              >
                View Research Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="mf-related-heading"
        className="bg-white py-14 md:py-16"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <h2
            id="mf-related-heading"
            className="text-[24px] md:text-[30px] font-semibold text-[#2D2D2D] mb-8"
          >
            Related pages
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedPages.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="flex h-full flex-col rounded-[20px] border border-[#E3ECF5] bg-[#F6FDFF] p-5 hover:border-[#293C7D]/40 transition-colors"
              >
                <h3 className="text-base font-bold text-[#293C7D] mb-1">{link.title}</h3>
                <p className="text-sm text-[#4D4D4D] leading-relaxed">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
