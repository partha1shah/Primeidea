import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import Link from "next/link";
import {
  BriefcaseIcon,
  BuildingLibraryIcon,
  ClipboardDocumentListIcon,
  DocumentTextIcon,
  GiftIcon,
  HomeModernIcon,
  IdentificationIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";

export const SUCCESSION_DISCLAIMER =
  "PrimeIdea Ventures provides succession planning, estate planning and documentation coordination support through qualified legal/service partners. Legal drafting, registration, probate, succession certificate, legal heir certificate, property transfer, trust deed, gift deed, power of attorney and legal opinions must be handled by qualified legal professionals. PrimeIdea Ventures does not act as an independent law firm.";

const serviceGroups = [
  {
    title: "Will planning support",
    description:
      "Coordination for online, customised, joint and mirror wills — plus signature and witnessing guidance with qualified professionals.",
    Icon: DocumentTextIcon,
  },
  {
    title: "Will registration and custody",
    description:
      "Registration, safe storage, and executorship coordination. PrimeIdea does not store original legal documents as a law firm.",
    Icon: BuildingLibraryIcon,
  },
  {
    title: "Family trust support",
    description:
      "Private family trust and trust-deed process coordination. The deed is prepared by a qualified legal professional.",
    Icon: HomeModernIcon,
  },
  {
    title: "Business succession",
    description:
      "Continuity conversations for business owners and family enterprises — coordinated, not litigated by PrimeIdea.",
    Icon: BriefcaseIcon,
  },
  {
    title: "Estate and inheritance",
    description:
      "Asset inventory, beneficiary mapping, nomination review, and inheritance coordination.",
    Icon: ClipboardDocumentListIcon,
  },
  {
    title: "Post-death legalities",
    description:
      "Succession certificate, probate, legal heir certificate, and family settlement — handled by qualified legal professionals.",
    Icon: ScaleIcon,
  },
  {
    title: "Property and transfers",
    description:
      "Property transfer, due diligence, and gift deed coordination. Legal execution stays with qualified professionals.",
    Icon: GiftIcon,
  },
  {
    title: "POA and HUF support",
    description:
      "Power of Attorney and Hindu Undivided Family coordination where it applies to the family structure.",
    Icon: IdentificationIcon,
  },
];

const needTypes = [
  "Will",
  "Trust",
  "Succession certificate",
  "Probate",
  "Property transfer",
  "Gift deed",
  "Power of attorney",
  "HUF",
  "Family settlement",
];

const relatedPages = [
  {
    title: "Family Wealth Office",
    href: "/family-wealth-office-gujarat-india",
    description: "Multi-generational review and family investment clarity.",
  },
  {
    title: "Private Wealth Management",
    href: "/private-wealth-management-gujarat-india",
    description: "HNI portfolio review across Gujarat and India.",
  },
  {
    title: "Portfolio Review in Vadodara",
    href: "/portfolio-review-vadodara",
    description: "Start with a structured look at current holdings.",
  },
  {
    title: "NRI Investment Support",
    href: "/nri-investment-support-india",
    description: "India portfolio and nomination clarity for non-resident families.",
  },
];

export default function SuccessionPlanningContent() {
  return (
    <>
      <section
        aria-labelledby="succession-intro-heading"
        className="bg-white py-14 md:py-16"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <div className="max-w-[760px]">
            <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-3">
              Partner-enabled coordination
            </p>
            <h2
              id="succession-intro-heading"
              className="text-[28px] md:text-[36px] font-light text-[#2D2D2D] leading-[120%] mb-4"
            >
              Continuity for the family —{" "}
              <strong className="font-semibold">not a law firm</strong>
            </h2>
            <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed mb-4">
              PrimeIdea Ventures is a Vadodara-based research-led wealth management and
              portfolio review firm serving investors across Gujarat and India. Research is
              guided by Partha Shah, SEBI Registered Research Analyst INH000017815.
            </p>
            <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed">
              This page is about coordinating wills, trusts, succession, and estate
              documentation through qualified legal and service partners. PrimeIdea does not
              draft legal documents, does not list partner names or pricing, and does not
              guarantee investment returns.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="succession-services-heading"
        className="bg-[#F6FDFF] py-14 md:py-16"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <FadeUpOneByOneAnimation className="max-w-[720px] mb-8 md:mb-10">
            <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-3">
              What we coordinate
            </p>
            <h2
              id="succession-services-heading"
              className="text-[28px] md:text-[36px] font-light text-[#2D2D2D] leading-[120%] mb-3"
            >
              Support areas —{" "}
              <strong className="font-semibold">legal work stays with lawyers</strong>
            </h2>
          </FadeUpOneByOneAnimation>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 list-none m-0 p-0 mb-8">
            {serviceGroups.map(({ title, description, Icon }) => (
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

          <FadeUpOneByOneAnimation className="rounded-[20px] border border-[#E3ECF5] bg-white p-5 md:p-6">
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#479AD2] mb-3">
              Tell us the need type
            </p>
            <ul className="flex flex-wrap gap-2 list-none m-0 p-0">
              {needTypes.map((item) => (
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
        aria-labelledby="succession-legal-heading"
        className="bg-[#232D63] py-14 md:py-16 bg-[url('/images/insurance/risk-management/bg.png')] bg-repeat bg-contain bg-center"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#FFC300] mb-3">
                Mandatory disclaimer
              </p>
              <h2
                id="succession-legal-heading"
                className="text-[28px] md:text-[36px] font-light text-white leading-[120%] mb-4"
              >
                Legal documents by{" "}
                <strong className="font-semibold">qualified professionals</strong>
              </h2>
              <p className="text-base md:text-lg !text-white/80 leading-relaxed mb-4">
                {SUCCESSION_DISCLAIMER}
              </p>
              <p className="text-sm !text-white/70 leading-relaxed">
                Partner identity and pricing are not displayed on this website.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col items-center justify-center gap-3">
              <Link
                href="#lead-form"
                className="inline-flex items-center justify-center rounded-xl bg-[#FFC300] px-5 py-3 text-base font-bold text-[#232D63] hover:bg-white transition-colors w-full"
              >
                Book Succession Planning Consultation
              </Link>
              <Link
                href="/family-wealth-office-gujarat-india"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 px-5 py-3 text-base font-bold text-white hover:border-[#FFC300] hover:text-[#FFC300] transition-colors w-full"
              >
                Family Wealth Office
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="succession-related-heading"
        className="bg-white py-14 md:py-16"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <FadeUpOneByOneAnimation className="mb-8 md:mb-10">
            <h2
              id="succession-related-heading"
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
