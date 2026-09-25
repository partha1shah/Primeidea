import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import Link from "next/link";
import {
  ClipboardDocumentCheckIcon,
  HeartIcon,
  IdentificationIcon,
  ScaleIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const supportAreas = [
  {
    title: "Term life cover gap",
    description:
      "Whether existing life cover matches family income needs and liabilities — not a push to buy more by default.",
    Icon: UserGroupIcon,
  },
  {
    title: "Health cover adequacy",
    description:
      "Sum insured, room rent limits, and family inclusion checked against realistic medical cost risk.",
    Icon: HeartIcon,
  },
  {
    title: "Policy mix clarity",
    description:
      "Separate protection from investment-linked products so the cover job is not confused with returns.",
    Icon: ShieldCheckIcon,
  },
  {
    title: "Cost versus benefit",
    description:
      "Premiums reviewed against the protection they provide — without promising the “best” policy.",
    Icon: ScaleIcon,
  },
  {
    title: "Nominations and claim readiness",
    description:
      "Nominee details and document readiness reviewed so claims are not blocked by paperwork gaps.",
    Icon: IdentificationIcon,
  },
  {
    title: "Written next steps",
    description:
      "What to keep, what to review with an insurer or IRDAI-registered intermediary, and what can wait.",
    Icon: ClipboardDocumentCheckIcon,
  },
];

const whoItsFor = [
  {
    title: "Families",
    description:
      "Earning members with dependents who need a clear view of cover gaps before buying another policy.",
  },
  {
    title: "Investors with overlapping policies",
    description:
      "Multiple life or health plans that have never been mapped against actual need.",
  },
  {
    title: "Gujarat and India clients",
    description:
      "Same review by video if you cannot visit the Vadodara office. No claim of other city offices.",
  },
];

const relatedPages = [
  {
    title: "Retirement Planning",
    href: "/retirement-planning",
    description: "Corpus and withdrawal review linked to family cash-flow risk.",
  },
  {
    title: "Legacy & Succession",
    href: "/legacy-succession-estate-planning-india",
    description: "Partner-enabled wills and nominations coordination. No partner name or pricing.",
  },
  {
    title: "Portfolio Review",
    href: "/portfolio-review",
    description: "Upload holdings or book an office or video review.",
  },
  {
    title: "Research Process",
    href: "/research-process",
    description: "The five-step method behind research-led planning support.",
  },
];

export default function InsurancePlanningContent() {
  return (
    <>
      <section
        aria-labelledby="ins-intro-heading"
        className="bg-white py-14 md:py-16"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-6">
              <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-3">
                Insurance planning
              </p>
              <h2
                id="ins-intro-heading"
                className="text-[28px] md:text-[36px] font-light text-[#2D2D2D] leading-[120%] mb-4"
              >
                Right cover first —{" "}
                <strong className="font-semibold">not product push</strong>
              </h2>
              <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed mb-4">
                PrimeIdea Ventures is a Vadodara-based research-led wealth management and
                portfolio review firm serving investors across Gujarat and India. Insurance
                planning support is guided by Partha Shah, SEBI Registered Research Analyst
                INH000017815.
              </p>
              <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed">
                This is cover-gap and suitability-oriented review — not a claim that PrimeIdea
                is an insurer, not “best insurance” marketing, and not SEBI Registered Investment
                Adviser advice unless PrimeIdea is separately registered. Policy issuance and
                claims remain with the insurer and applicable intermediaries.
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
        aria-labelledby="ins-support-heading"
        className="bg-[#F6FDFF] py-14 md:py-16"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <FadeUpOneByOneAnimation className="max-w-[720px] mb-8 md:mb-10">
            <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-3">
              What we review
            </p>
            <h2
              id="ins-support-heading"
              className="text-[28px] md:text-[36px] font-light text-[#2D2D2D] leading-[120%] mb-3"
            >
              Insurance checkpoints —{" "}
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
        aria-labelledby="ins-disclaimer-heading"
        className="bg-[#232D63] py-14 md:py-16 bg-[url('/images/insurance/risk-management/bg.png')] bg-repeat bg-contain bg-center"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#FFC300] mb-3">
                Insurance disclaimer
              </p>
              <h2
                id="ins-disclaimer-heading"
                className="text-[28px] md:text-[36px] font-light !text-white leading-[120%] mb-4"
              >
                Cover is subject to policy terms.{" "}
                <strong className="font-semibold">Read the documents.</strong>
              </h2>
              <p className="text-base md:text-lg !text-white/80 leading-relaxed">
                Insurance products are subject to the terms, conditions, exclusions, and claim
                processes of the issuing insurer. PrimeIdea does not guarantee claim outcomes or
                investment-linked returns inside insurance products.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col items-center justify-center gap-3">
              <Link
                href="#lead-form"
                className="inline-flex items-center justify-center rounded-xl bg-[#FFC300] px-5 py-3 text-base font-bold text-[#232D63] hover:bg-white transition-colors"
              >
                Start insurance review
              </Link>
              <Link
                href="/retirement-planning"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 px-5 py-3 text-base font-bold text-white hover:border-[#FFC300] hover:text-[#FFC300] transition-colors"
              >
                Retirement planning
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="ins-related-heading"
        className="bg-white py-14 md:py-16"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <h2
            id="ins-related-heading"
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
