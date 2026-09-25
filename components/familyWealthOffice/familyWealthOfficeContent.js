import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import Link from "next/link";
import {
  AcademicCapIcon,
  BuildingOffice2Icon,
  ClipboardDocumentCheckIcon,
  DocumentTextIcon,
  GlobeAsiaAustraliaIcon,
  ScaleIcon,
  ShieldCheckIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const offerings = [
  {
    title: "Business family wealth planning",
    description:
      "Investment priorities aligned across business owners and the next generation — one research-led picture, not separate product pitches.",
    Icon: BuildingOffice2Icon,
  },
  {
    title: "Multi-generational portfolio review",
    description:
      "Allocation, overlap, and risk reviewed across accounts and family members before further investing.",
    Icon: UsersIcon,
  },
  {
    title: "Succession and estate coordination",
    description:
      "Partner-enabled will, trust, and succession support. Legal drafting stays with qualified legal professionals.",
    Icon: DocumentTextIcon,
  },
  {
    title: "Insurance and nominations",
    description:
      "Cover, nominations, and MWPA context where relevant — so protection matches the family structure.",
    Icon: ShieldCheckIcon,
  },
  {
    title: "NRI family coordination",
    description:
      "India holdings and documentation for families with members living abroad. Same Vadodara research desk.",
    Icon: GlobeAsiaAustraliaIcon,
  },
  {
    title: "Next-generation clarity",
    description:
      "Help the next generation understand process, risk, and why the family book is built the way it is.",
    Icon: AcademicCapIcon,
  },
  {
    title: "CA and legal coordination",
    description:
      "Work alongside your CA and legal professionals. PrimeIdea does not replace them or act as a law firm.",
    Icon: ScaleIcon,
  },
  {
    title: "Family investment map",
    description:
      "A clearer view of holdings, goals, and who is responsible for what across the family wealth structure.",
    Icon: ClipboardDocumentCheckIcon,
  },
];

const whoItsFor = [
  {
    title: "Business families",
    description: "Operating businesses and personal investments that should be reviewed together.",
  },
  {
    title: "Multi-generational households",
    description: "Parents, children, and extended family with overlapping products and accounts.",
  },
  {
    title: "Families across Gujarat and India",
    description: "Office in Vadodara, video for members elsewhere. No extra city offices claimed.",
  },
];

const relatedPages = [
  {
    title: "Private Wealth Management",
    href: "/private-wealth-management-gujarat-india",
    description: "HNI portfolio review and suitability across products.",
  },
  {
    title: "Legacy & Inheritance Planning",
    href: "/legacy-succession-estate-planning-india",
    description: "Partner-enabled succession coordination. No partner name or pricing.",
  },
  {
    title: "Portfolio Review",
    href: "/portfolio-review",
    description: "Upload holdings or book an office or video review.",
  },
  {
    title: "NRI Investment Support",
    href: "/nri-investment-support-india",
    description: "India holdings review for families with members abroad.",
  },
];

const SUCCESSION_DISCLAIMER =
  "PrimeIdea Ventures provides succession planning, estate planning and documentation coordination support through qualified legal/service partners. Legal drafting, registration, probate, succession certificate, legal heir certificate, property transfer, trust deed, gift deed, power of attorney and legal opinions must be handled by qualified legal professionals. PrimeIdea Ventures does not act as an independent law firm.";

export default function FamilyWealthOfficeContent() {
  return (
    <>
      <section
        aria-labelledby="fwo-intro-heading"
        className="bg-white py-14 md:py-16"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-5">
              <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-3">
                Family wealth office
              </p>
              <h2
                id="fwo-intro-heading"
                className="text-[28px] md:text-[36px] font-light text-[#2D2D2D] leading-[120%] mb-4"
              >
                One process for the{" "}
                <strong className="font-semibold">whole family book</strong>
              </h2>
              <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed mb-4">
                PrimeIdea Ventures is a Vadodara-based research-led wealth management and
                portfolio review firm serving investors across Gujarat and India. Family wealth
                work is guided by Partha Shah, SEBI Registered Research Analyst INH000017815.
              </p>
              <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed">
                This is family investment clarity and coordination — not a licensed “family
                office” licence claim, not SEBI RIA advice unless separately registered, and not
                a return promise.
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
        aria-labelledby="fwo-offerings-heading"
        className="bg-[#F6FDFF] py-14 md:py-16"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <FadeUpOneByOneAnimation className="max-w-[720px] mb-8 md:mb-10">
            <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-3">
              What the family work covers
            </p>
            <h2
              id="fwo-offerings-heading"
              className="text-[28px] md:text-[36px] font-light text-[#2D2D2D] leading-[120%] mb-3"
            >
              Oversight across generations —{" "}
              <strong className="font-semibold">process first</strong>
            </h2>
          </FadeUpOneByOneAnimation>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 list-none m-0 p-0">
            {offerings.map(({ title, description, Icon }) => (
              <li key={title}>
                <FadeUpOneByOneAnimation className="h-full rounded-[20px] border border-[#E3ECF5] bg-white p-5">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#F6FDFF] border border-[#E3ECF5] mb-4">
                    <Icon className="h-5 w-5 text-[#293C7D]" aria-hidden="true" />
                  </span>
                  <h3 className="text-base font-bold text-[#293C7D] mb-2 leading-snug">{title}</h3>
                  <p className="text-sm text-[#4D4D4D] leading-relaxed">{description}</p>
                </FadeUpOneByOneAnimation>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="fwo-legal-heading"
        className="bg-[#232D63] py-14 md:py-16 bg-[url('/images/insurance/risk-management/bg.png')] bg-repeat bg-contain bg-center"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#FFC300] mb-3">
                Legal documents
              </p>
              <h2
                id="fwo-legal-heading"
                className="text-[28px] md:text-[36px] font-light text-white leading-[120%] mb-4"
              >
                Partner-enabled succession —{" "}
                <strong className="font-semibold">not a law firm</strong>
              </h2>
              <p className="text-base md:text-lg !text-white/80 leading-relaxed mb-4">
                {SUCCESSION_DISCLAIMER}
              </p>
              <p className="text-sm !text-white/70 leading-relaxed">
                Legal documents must be prepared or reviewed by a qualified legal professional.
                Partner identity and pricing are not displayed on this website.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col items-center justify-center gap-3">
              <Link
                href="/legacy-succession-estate-planning-india"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FFC300] px-5 py-3 text-base font-bold text-[#232D63] hover:bg-white transition-colors w-full"
              >
                Succession planning
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-5 py-3 text-base font-bold text-white hover:border-[#FFC300] hover:text-[#FFC300] transition-colors w-full"
              >
                Book family consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="fwo-related-heading"
        className="bg-white py-14 md:py-16"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <FadeUpOneByOneAnimation className="mb-8 md:mb-10">
            <h2
              id="fwo-related-heading"
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
                  className="flex h-full flex-col rounded-[20px] border border-[#E3ECF5] bg-[#F6FDFF] p-5 hover:border-[#293C7D]/40 transition-colors"
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
