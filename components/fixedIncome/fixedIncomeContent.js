import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import Link from "next/link";
import {
  BanknotesIcon,
  BuildingLibraryIcon,
  ClipboardDocumentCheckIcon,
  ClockIcon,
  ScaleIcon,
  ShieldExclamationIcon,
} from "@heroicons/react/24/outline";

const supportAreas = [
  {
    title: "Credit and issuer quality",
    description:
      "Who is paying you back matters as much as the coupon. Issuer and instrument quality are reviewed before size is discussed.",
    Icon: BuildingLibraryIcon,
  },
  {
    title: "Interest-rate and duration risk",
    description:
      "How sensitive the holding is to rate moves — especially when the time horizon is shorter than the instrument.",
    Icon: ClockIcon,
  },
  {
    title: "Liquidity and exit path",
    description:
      "Whether you can exit when cash is needed, and what that exit may cost in price or load.",
    Icon: BanknotesIcon,
  },
  {
    title: "Tax and holding period",
    description:
      "Tax treatment and intended hold period checked so the product still fits after costs.",
    Icon: ScaleIcon,
  },
  {
    title: "Role in the full book",
    description:
      "Debt funds, bonds, deposits, and target-maturity options reviewed for the job they do next to equity and cash.",
    Icon: ClipboardDocumentCheckIcon,
  },
  {
    title: "Risk before yield",
    description:
      "Higher quoted yield is not treated as safety. Credit, rate, and liquidity risks come first.",
    Icon: ShieldExclamationIcon,
  },
];

const whoItsFor = [
  {
    title: "Investors seeking stability allocation",
    description:
      "Want a clearer debt sleeve — not another product sold only on coupon or past return.",
  },
  {
    title: "Families consolidating income assets",
    description:
      "Bonds, debt funds, and deposits across accounts that should be reviewed as one picture.",
  },
  {
    title: "Gujarat and India clients",
    description:
      "Same research-led review by video if you cannot visit the Vadodara office.",
  },
];

const relatedPages = [
  {
    title: "Portfolio Review",
    href: "/portfolio-review",
    description: "Upload holdings or book an office or video review.",
  },
  {
    title: "Mutual Fund Investment Support",
    href: "/mutual-fund-investment-support",
    description: "SIP, overlap, and scheme-role review for fund holdings.",
  },
  {
    title: "Research Process",
    href: "/research-process",
    description: "The five-step method behind product and portfolio review.",
  },
  {
    title: "Retirement Planning",
    href: "/retirement-planning",
    description: "Corpus, allocation, and withdrawal review — without return promises.",
  },
  {
    title: "PMS, AIF & SIF Support",
    href: "/pms-aif-sif-investment-support-gujarat-india",
    description: "Suitability-led review of managed and alternate strategies.",
  },
];

export default function FixedIncomeContent() {
  return (
    <>
      <section
        aria-labelledby="fi-intro-heading"
        className="bg-white py-14 md:py-16"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-6">
              <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-3">
                Fixed income support
              </p>
              <h2
                id="fi-intro-heading"
                className="text-[28px] md:text-[36px] font-light text-[#2D2D2D] leading-[120%] mb-4"
              >
                Stability allocation —{" "}
                <strong className="font-semibold">risk first, not yield first</strong>
              </h2>
              <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed mb-4">
                PrimeIdea Ventures is a Vadodara-based research-led wealth management and
                portfolio review firm serving investors across Gujarat and India. Fixed income
                review is guided by Partha Shah, SEBI Registered Research Analyst INH000017815.
              </p>
              <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed">
                Fixed income does not mean fixed or guaranteed returns. Bonds, debt funds, and
                related instruments carry credit, interest-rate, and liquidity risks. This is
                suitability-oriented research — not SEBI Registered Investment Adviser advice
                unless PrimeIdea is separately registered.
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
        aria-labelledby="fi-support-heading"
        className="bg-[#F6FDFF] py-14 md:py-16"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <FadeUpOneByOneAnimation className="max-w-[720px] mb-8 md:mb-10">
            <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-3">
              What we review
            </p>
            <h2
              id="fi-support-heading"
              className="text-[28px] md:text-[36px] font-light text-[#2D2D2D] leading-[120%] mb-3"
            >
              Fixed income checkpoints —{" "}
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
        aria-labelledby="fi-disclaimer-heading"
        className="bg-[#232D63] py-14 md:py-16 bg-[url('/images/insurance/risk-management/bg.png')] bg-repeat bg-contain bg-center"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#FFC300] mb-3">
                Fixed income disclaimer
              </p>
              <h2
                id="fi-disclaimer-heading"
                className="text-[28px] md:text-[36px] font-light !text-white leading-[120%] mb-4"
              >
                Not risk-free.{" "}
                <strong className="font-semibold">Not a return promise.</strong>
              </h2>
              <p className="text-base md:text-lg !text-white/80 leading-relaxed">
                Investments in the securities market are subject to market risks. Fixed income
                products can lose value. Read all related documents carefully. PrimeIdea does
                not guarantee returns.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col items-center justify-center gap-3">
              <Link
                href="/portfolio-review"
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
        aria-labelledby="fi-related-heading"
        className="bg-white py-14 md:py-16"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <h2
            id="fi-related-heading"
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
