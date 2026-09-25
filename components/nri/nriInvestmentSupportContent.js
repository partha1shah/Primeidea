import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import Link from "next/link";
import {
  ArrowsRightLeftIcon,
  BuildingLibraryIcon,
  ClipboardDocumentCheckIcon,
  GlobeAsiaAustraliaIcon,
  ScaleIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";

const supportAreas = [
  {
    title: "India portfolio map",
    description:
      "Mutual funds, equity, deposits, and other India holdings reviewed as one book — not as scattered statements.",
    Icon: ClipboardDocumentCheckIcon,
  },
  {
    title: "Account and remittance context",
    description:
      "NRE / NRO / resident structures discussed at a planning level. Formal banking and FEMA compliance stay with your bank and qualified professionals.",
    Icon: BuildingLibraryIcon,
  },
  {
    title: "Overlap and allocation",
    description:
      "Duplicated funds, concentration, and whether the mix still fits goals and time you spend outside India.",
    Icon: ArrowsRightLeftIcon,
  },
  {
    title: "Tax-aware next steps",
    description:
      "Tax impact flagged before switches. Formal tax filing and treaty advice remain with a qualified tax professional.",
    Icon: ScaleIcon,
  },
  {
    title: "Family and nomination clarity",
    description:
      "Who can act in India, nominee updates, and when partner-enabled succession coordination may help.",
    Icon: GlobeAsiaAustraliaIcon,
  },
  {
    title: "Video-first review",
    description:
      "Same research-led process used in Vadodara — available by video from abroad. No claim of overseas offices.",
    Icon: VideoCameraIcon,
  },
];

const whoItsFor = [
  {
    title: "NRIs with India mutual funds and SIPs",
    description:
      "Holdings built over years that need overlap and suitability review before adding more.",
  },
  {
    title: "Families split across countries",
    description:
      "India assets managed from abroad, with relatives or an office contact still in Gujarat.",
  },
  {
    title: "Returning or relocating investors",
    description:
      "Need a clear picture of India exposure before status, accounts, or goals change.",
  },
];

const relatedPages = [
  {
    title: "Portfolio Review",
    href: "/portfolio-review",
    description: "Upload a CAS or book an office or video review.",
  },
  {
    title: "Private Wealth Management",
    href: "/private-wealth-management-gujarat-india",
    description: "HNI multi-product review across Gujarat and India.",
  },
  {
    title: "Legacy & Succession",
    href: "/legacy-succession-estate-planning-india",
    description: "Partner-enabled wills and estate coordination. No partner name or pricing.",
  },
  {
    title: "Family Wealth Office",
    href: "/family-wealth-office-gujarat-india",
    description: "Multi-generational oversight for families with NRI members.",
  },
];

export default function NriInvestmentSupportContent() {
  return (
    <>
      <section
        aria-labelledby="nri-intro-heading"
        className="bg-white py-14 md:py-16"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-6">
              <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-3">
                NRI investment support
              </p>
              <h2
                id="nri-intro-heading"
                className="text-[28px] md:text-[36px] font-light text-[#2D2D2D] leading-[120%] mb-4"
              >
                India investing from abroad —{" "}
                <strong className="font-semibold">research-led, Vadodara-based</strong>
              </h2>
              <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed mb-4">
                PrimeIdea Ventures is a Vadodara-based research-led wealth management and
                portfolio review firm serving investors across Gujarat and India. NRI investment
                support is guided by Partha Shah, SEBI Registered Research Analyst INH000017815.
              </p>
              <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed">
                This is suitability-oriented review of India holdings — not guaranteed returns,
                not cross-border tax or FEMA legal advice, and not SEBI Registered Investment
                Adviser advice unless PrimeIdea is separately registered.
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
        aria-labelledby="nri-support-heading"
        className="bg-[#F6FDFF] py-14 md:py-16"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <FadeUpOneByOneAnimation className="max-w-[720px] mb-8 md:mb-10">
            <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-3">
              What we review
            </p>
            <h2
              id="nri-support-heading"
              className="text-[28px] md:text-[36px] font-light text-[#2D2D2D] leading-[120%] mb-3"
            >
              NRI checkpoints —{" "}
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
        aria-labelledby="nri-disclaimer-heading"
        className="bg-[#232D63] py-14 md:py-16 bg-[url('/images/insurance/risk-management/bg.png')] bg-repeat bg-contain bg-center"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#FFC300] mb-3">
                NRI disclaimer
              </p>
              <h2
                id="nri-disclaimer-heading"
                className="text-[28px] md:text-[36px] font-light !text-white leading-[120%] mb-4"
              >
                Market risks apply.{" "}
                <strong className="font-semibold">Not tax or FEMA advice.</strong>
              </h2>
              <p className="text-base md:text-lg !text-white/80 leading-relaxed">
                Investments in the securities market are subject to market risks. PrimeIdea does
                not guarantee returns. Tax, banking, and FEMA matters should be confirmed with
                qualified professionals and your bank.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col items-center justify-center gap-3">
              <Link
                href="/portfolio-review"
                className="inline-flex items-center justify-center rounded-xl bg-[#FFC300] px-5 py-3 text-base font-bold text-[#232D63] hover:bg-white transition-colors"
              >
                Book video portfolio review
              </Link>
              <Link
                href="/legacy-succession-estate-planning-india"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 px-5 py-3 text-base font-bold text-white hover:border-[#FFC300] hover:text-[#FFC300] transition-colors"
              >
                Succession planning
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="nri-related-heading"
        className="bg-white py-14 md:py-16"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <h2
            id="nri-related-heading"
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
