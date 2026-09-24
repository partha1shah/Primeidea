import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import Link from "next/link";
import {
  BanknotesIcon,
  ChartBarSquareIcon,
  DocumentChartBarIcon,
  DocumentTextIcon,
  PresentationChartLineIcon,
  ScaleIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const offerings = [
  {
    title: "HNI portfolio review",
    description:
      "A structured look at multi-product books — concentration, overlap, and whether the mix still fits the household.",
    Icon: DocumentChartBarIcon,
  },
  {
    title: "PMS support, where permitted",
    description:
      "Suitability-led PMS conversation only where distribution and compliance rights are in place. Not every book needs PMS.",
    Icon: PresentationChartLineIcon,
  },
  {
    title: "AIF / SIF suitability",
    description:
      "Minimums, liquidity, costs, and who should consider — or skip — these products. No return promises.",
    Icon: ScaleIcon,
  },
  {
    title: "Tax-aware implementation",
    description:
      "Tax impact, exit loads, and liquidity checked so a change is usable, not only correct on paper.",
    Icon: BanknotesIcon,
  },
  {
    title: "Concentration risk",
    description:
      "Single-stock, sector, and product clusters that can quietly dominate an otherwise “diversified” book.",
    Icon: ChartBarSquareIcon,
  },
  {
    title: "Intergenerational planning",
    description:
      "Family review cadence and longer-term continuity conversations — including partner-enabled succession coordination.",
    Icon: UserGroupIcon,
  },
];

const whoItsFor = [
  {
    title: "HNIs and business families",
    description: "Several products, entities, or family members that need one research-led picture.",
  },
  {
    title: "Investors across Gujarat",
    description: "Served from the Vadodara office and by video — Gujarat is the reach, not extra branch claims.",
  },
  {
    title: "Investors across India",
    description: "Video consultation with the same review process used in the Vadodara office.",
  },
];

const productsCovered = [
  "Mutual Funds Schemes",
  "Direct Equity Stocks",
  "ETFs",
  "PMS",
  "Fixed Income Products",
  "Corporate Bonds",
  "Government Securities",
  "REITs & InvITs",
  "Gold ETFs",
  "Sovereign Gold Bonds",
];

const relatedPages = [
  {
    title: "Portfolio Review in Vadodara",
    href: "/portfolio-review-vadodara",
    description: "Upload holdings or book an office or video review.",
  },
  {
    title: "Research Process",
    href: "/research-process",
    description: "How a research-led review is actually done.",
  },
  {
    title: "Legacy & Inheritance Planning",
    href: "/legacy-succession-estate-planning-india",
    description: "Partner-enabled succession coordination. No partner name or pricing here.",
  },
  {
    title: "Family Wealth Office",
    href: "/family-wealth-office-gujarat-india",
    description: "Multi-generational review and family investment clarity.",
  },
  {
    title: "PMS, AIF & SIF Support",
    href: "/pms-aif-sif-investment-support-gujarat-india",
    description: "Suitability-led managed and alternate strategy review where permitted.",
  },
];

export default function PrivateWealthContent() {
  return (
    <>
      <section
        aria-labelledby="pw-intro-heading"
        className="bg-white py-14 md:py-16"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-5">
              <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-3">
                Private wealth
              </p>
              <h2
                id="pw-intro-heading"
                className="text-[28px] md:text-[36px] font-light text-[#2D2D2D] leading-[120%] mb-4"
              >
                Research-led support for{" "}
                <strong className="font-semibold">larger, more complex books</strong>
              </h2>
              <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed mb-4">
                PrimeIdea Ventures is a Vadodara-based research-led wealth management and
                portfolio review firm serving investors across Gujarat and India. Private wealth
                work is guided by Partha Shah, SEBI Registered Research Analyst INH000017815.
              </p>
              <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed">
                The starting point is still a structured review — not a product list, and not a
                return promise. PrimeIdea does not present itself as a SEBI Registered Investment
                Adviser unless separately registered.
              </p>
            </div>
            <ul className="lg:col-span-7 grid grid-cols-1 gap-3 list-none m-0 p-0">
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
        aria-labelledby="pw-offerings-heading"
        className="bg-[#F6FDFF] py-14 md:py-16"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <FadeUpOneByOneAnimation className="max-w-[720px] mb-8 md:mb-10">
            <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-3">
              What private wealth covers
            </p>
            <h2
              id="pw-offerings-heading"
              className="text-[28px] md:text-[36px] font-light text-[#2D2D2D] leading-[120%] mb-3"
            >
              Suitability across products —{" "}
              <strong className="font-semibold">not a product push</strong>
            </h2>
          </FadeUpOneByOneAnimation>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none m-0 p-0 mb-8">
            {offerings.map(({ title, description, Icon }) => (
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

          <FadeUpOneByOneAnimation className="rounded-[20px] border border-[#E3ECF5] bg-white p-5 md:p-6">
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#479AD2] mb-3">
              Products reviewed in context
            </p>
            <ul className="flex flex-wrap gap-2 list-none m-0 p-0">
              {productsCovered.map((item) => (
                <li
                  key={item}
                  className="inline-flex rounded-full border border-[#E3ECF5] bg-[#F6FDFF] px-3 py-1.5 text-xs md:text-sm font-medium text-[#293C7D]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </FadeUpOneByOneAnimation>
        </div>
      </section>

      <section
        aria-labelledby="pw-succession-heading"
        className="bg-white py-14 md:py-16"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <div className="rounded-[24px] border border-[#E3ECF5] bg-[#F6FDFF] p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-3">
                Continuity
              </p>
              <h2
                id="pw-succession-heading"
                className="text-[24px] md:text-[30px] font-light text-[#2D2D2D] leading-[120%] mb-3"
              >
                Legacy, succession and estate{" "}
                <strong className="font-semibold">coordination</strong>
              </h2>
              <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed mb-4">
                PrimeIdea Ventures provides succession planning, estate planning and documentation
                coordination support through qualified legal/service partners. Legal drafting,
                registration, probate, succession certificate, legal heir certificate, property
                transfer, trust deed, gift deed, power of attorney and legal opinions must be
                handled by qualified legal professionals. PrimeIdea Ventures does not act as an
                independent law firm.
              </p>
              <p className="text-sm text-[#4D4D4D] leading-relaxed">
                Partner identity and pricing are not listed on this site.
              </p>
            </div>
            <div className="lg:col-span-4">
              <Link
                href="/legacy-succession-estate-planning-india"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#293C7D] px-5 py-3 text-base font-bold text-white hover:bg-[#232D63] transition-colors"
              >
                <DocumentTextIcon className="h-5 w-5" aria-hidden="true" />
                Succession planning
              </Link>
            </div>
          </div>
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
                Book a private wealth{" "}
                <strong className="font-semibold">consultation</strong>
              </h2>
              <p className="text-base md:text-lg !text-white/80 leading-relaxed">
                Share the current book and what the family needs next. Review first — from
                Vadodara, across Gujarat and India.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-xl bg-[#FFC300] px-5 py-3 text-base font-bold text-[#232D63] hover:bg-white transition-colors"
              >
                Book consultation
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/portfolio-review-vadodara"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-5 py-3 text-base font-bold text-white hover:border-[#FFC300] hover:text-[#FFC300] transition-colors"
              >
                Upload portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="pw-related-heading"
        className="bg-[#F6FDFF] py-14 md:py-16"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <FadeUpOneByOneAnimation className="mb-8 md:mb-10">
            <h2
              id="pw-related-heading"
              className="text-[24px] md:text-[30px] font-semibold text-[#2D2D2D] mb-2"
            >
              Related pages
            </h2>
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
