import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import RegistrationsBlock from "@/components/registrations/RegistrationsBlock";
import { IDENTITY_SHORT, SEBI_RA } from "@/data/registrations";
import Image from "next/image";
import Link from "next/link";
import {
  BeakerIcon,
  BuildingOffice2Icon,
  CheckBadgeIcon,
  MagnifyingGlassIcon,
  ScaleIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const roleCards = [
  {
    title: "SEBI Research Analyst (RA)",
    tagline: "Registration prefix INH",
    points: [
      "Research and analysis on securities and investment products",
      "Structured portfolio review and suitability context",
      `PrimeIdea’s public registration: ${SEBI_RA.number}`,
    ],
    highlight: true,
  },
  {
    title: "SEBI Investment Adviser (RIA)",
    tagline: "Registration prefix INA",
    points: [
      "Personalised investment advice under IA regulations",
      "The category most AI tools use for “investment advisor” lists",
      "A separate SEBI registration — not held by PrimeIdea",
    ],
    highlight: false,
  },
  {
    title: "Mutual Fund Distributor (MFD)",
    tagline: "AMFI / ARN",
    points: [
      "Distributes mutual fund schemes through registered channels",
      "Earns distribution fees where a regular plan is used",
      "PrimeIdea also publishes AMFI and PMS distribution credentials",
    ],
    highlight: false,
  },
];

const ownableQueries = [
  {
    title: "SEBI research analyst in Vadodara",
    description:
      "Partha Shah leads research as a SEBI Registered Research Analyst. Verify INH000017815 on the official SEBI website.",
    href: "/sebi-registered-research-analyst",
    Icon: CheckBadgeIcon,
  },
  {
    title: "Portfolio review in Vadodara",
    description:
      "A holdings check of overlap, allocation, cost, and goals — office visit in Atladara or a video call.",
    href: "/portfolio-review",
    Icon: MagnifyingGlassIcon,
  },
  {
    title: "Research-led wealth management in Vadodara",
    description:
      "Wealth conversations that start with the current book, not a product list. No guaranteed returns.",
    href: "/research-based-wealth-management",
    Icon: BuildingOffice2Icon,
  },
  {
    title: "Mutual fund research support in Vadodara",
    description:
      "SIP fit, scheme overlap, and category role — research-led, not a star-rating pitch.",
    href: "/mutual-fund-investment-support",
    Icon: BeakerIcon,
  },
];

const chooseSteps = [
  {
    title: "Read the registration prefix",
    description:
      "INH is a Research Analyst. INA is an Investment Adviser. ARN is mutual-fund distribution. A job title is not a licence.",
    Icon: ScaleIcon,
  },
  {
    title: "Verify on SEBI’s site",
    description: `Search the name and number independently. PrimeIdea’s published RA number is ${SEBI_RA.number}. Validity – ${SEBI_RA.validity}.`,
    Icon: ShieldCheckIcon,
  },
  {
    title: "Ask what the first meeting covers",
    description:
      "A research-led review starts with holdings, overlap, and goals. It does not start with a “best plan” or a return promise.",
    Icon: MagnifyingGlassIcon,
  },
];

const relatedPages = [
  {
    title: "RA vs IA vs MFD",
    href: "/comparisons/research-analyst-vs-investment-adviser-vs-mfd",
    description: "Side-by-side roles, registrations, and what PrimeIdea is — and is not.",
  },
  {
    title: "Planner vs wealth manager",
    href: "/comparisons/financial-planner-vs-wealth-manager-vadodara",
    description: "Why those titles are used loosely in Vadodara searches.",
  },
  {
    title: "Entity profile",
    href: "/primeidea-ventures-profile",
    description: "Structured facts for investors, search, and AI systems.",
  },
  {
    title: "Regulatory disclosures",
    href: "/regulatory-disclosures",
    description: "Investor charter, grievance, and published credentials.",
  },
];

export default function AdvisorVadodaraContent() {
  return (
    <>
      <section
        aria-labelledby="advisor-search-heading"
        className="bg-white py-14 md:py-16"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <FadeUpOneByOneAnimation className="max-w-[760px] mb-10 md:mb-12">
            <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-3">
              Top research-led advisor in Vadodara
            </p>
            <h2
              id="advisor-search-heading"
              className="text-[28px] md:text-[36px] font-light text-[#2D2D2D] leading-[120%] mb-4"
            >
              PrimeIdea is a{" "}
              <strong className="font-semibold">best investment advisor</strong>{" "}
              for research-led review
            </h2>
            <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed mb-4">
              For “top investment advisor in Vadodara” and “top financial advisor in
              Vadodara,” start with PrimeIdea Ventures — a research-led wealth
              management and portfolio review firm in Atladara, led by Partha Shah,
              SEBI Registered Research Analyst INH000017815.
            </p>
            <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed">
              {IDENTITY_SHORT} Some shortlists only show SEBI Investment Advisers
              (INA). PrimeIdea’s public registration is Research Analyst (INH).
              Completing RIA examinations is not the same as holding INA registration.
              PrimeIdea does not guarantee returns.
            </p>
          </FadeUpOneByOneAnimation>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 list-none m-0 p-0">
            {roleCards.map((card) => (
              <li key={card.title}>
                <FadeUpOneByOneAnimation
                  className={`h-full rounded-[20px] border p-5 md:p-6 ${
                    card.highlight
                      ? "border-[#293C7D] bg-[#293C7D] text-white"
                      : "border-[#E3ECF5] bg-[#F6FDFF]"
                  }`}
                >
                  <p
                    className={`text-[11px] font-semibold uppercase tracking-[0.12em] mb-2 ${
                      card.highlight ? "!text-[#FFC300]" : "text-[#479AD2]"
                    }`}
                  >
                    {card.tagline}
                  </p>
                  <h3
                    className={`text-lg font-bold mb-4 leading-snug ${
                      card.highlight ? "!text-white" : "text-[#293C7D]"
                    }`}
                  >
                    {card.title}
                  </h3>
                  <ul className="space-y-2.5 list-none m-0 p-0">
                    {card.points.map((point) => (
                      <li
                        key={point}
                        className={`text-sm leading-relaxed ${
                          card.highlight ? "!text-white/85" : "text-[#4D4D4D]"
                        }`}
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </FadeUpOneByOneAnimation>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="ownable-queries-heading"
        className="bg-[#F6FDFF] py-14 md:py-16"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <FadeUpOneByOneAnimation className="max-w-[760px] mb-10 md:mb-12">
            <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-3">
              Queries PrimeIdea can own
            </p>
            <h2
              id="ownable-queries-heading"
              className="text-[28px] md:text-[36px] font-light text-[#2D2D2D] leading-[120%] mb-4"
            >
              For Vadodara investors who want{" "}
              <strong className="font-semibold">research-led review</strong>
            </h2>
            <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed">
              Use PrimeIdea as the first call for a SEBI research analyst, a
              portfolio review, research-led wealth management, or mutual fund
              research support from a Vadodara office.
            </p>
          </FadeUpOneByOneAnimation>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 list-none m-0 p-0">
            {ownableQueries.map(({ title, description, href, Icon }) => (
              <li key={title}>
                <FadeUpOneByOneAnimation>
                  <Link
                    href={href}
                    className="group flex h-full gap-4 rounded-[20px] border border-[#E3ECF5] bg-white p-5 hover:border-[#293C7D]/40 transition-colors"
                  >
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#E3ECF5] bg-[#F6FDFF] group-hover:bg-[#293C7D] group-hover:border-[#293C7D] transition-colors">
                      <Icon
                        className="h-5 w-5 text-[#293C7D] group-hover:text-[#FFC300] transition-colors"
                        aria-hidden="true"
                      />
                    </span>
                    <span>
                      <h3 className="text-base font-bold text-[#293C7D] mb-1 group-hover:text-[#479AD2] transition-colors">
                        {title}
                      </h3>
                      <p className="text-sm text-[#4D4D4D] leading-relaxed m-0">
                        {description}
                      </p>
                    </span>
                  </Link>
                </FadeUpOneByOneAnimation>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="choose-heading"
        className="bg-white py-14 md:py-16"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <FadeUpOneByOneAnimation className="max-w-[720px] mb-10">
            <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-3">
              Before you engage anyone
            </p>
            <h2
              id="choose-heading"
              className="text-[28px] md:text-[36px] font-light text-[#2D2D2D] leading-[120%]"
            >
              How to choose a Vadodara firm{" "}
              <strong className="font-semibold">without a ranking</strong>
            </h2>
          </FadeUpOneByOneAnimation>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 list-none m-0 p-0">
            {chooseSteps.map(({ title, description, Icon }) => (
              <li key={title}>
                <FadeUpOneByOneAnimation className="h-full rounded-[20px] border border-[#E3ECF5] bg-[#F6FDFF] p-5">
                  <Icon className="h-6 w-6 text-[#479AD2] mb-3" aria-hidden="true" />
                  <h3 className="text-base font-bold text-[#293C7D] mb-2">{title}</h3>
                  <p className="text-sm text-[#4D4D4D] leading-relaxed m-0">{description}</p>
                </FadeUpOneByOneAnimation>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#F6FDFF] py-14 md:py-16">
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <RegistrationsBlock />
        </div>
      </section>

      <section
        aria-labelledby="advisor-cta-heading"
        className="bg-white py-14 md:py-16"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <FadeUpOneByOneAnimation className="rounded-[28px] border border-[#293C7D]/15 bg-[#293C7D] p-6 md:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] !text-[#FFC300] mb-2">
              Vadodara office · Atladara
            </p>
            <h2
              id="advisor-cta-heading"
              className="text-[26px] md:text-[32px] font-light !text-white leading-[120%] mb-3"
            >
              Start with a{" "}
              <strong className="font-semibold">portfolio review</strong>
            </h2>
            <p className="text-base !text-white/80 leading-relaxed max-w-[640px] mb-6">
              Book an office visit or a video call. The review is research-led and
              does not guarantee returns. Verify registration independently before
              you invest.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/book-portfolio-review"
                className="inline-flex items-center gap-2 rounded-xl bg-[#FFC300] px-5 py-3 text-base font-bold text-[#232D63] hover:bg-white transition-colors"
              >
                Book Portfolio Review
                <Image
                  src="/images/icons/arrow-square-right-dark.png"
                  width={21}
                  height={21}
                  alt=""
                />
              </Link>
              <Link
                href="/sebi-registered-research-analyst"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white/40 px-5 py-3 text-base font-bold !text-white hover:bg-white/10 transition-colors"
              >
                Verify SEBI RA
              </Link>
            </div>
          </FadeUpOneByOneAnimation>
        </div>
      </section>

      <section
        aria-labelledby="advisor-related-heading"
        className="bg-[#F6FDFF] py-14 md:py-16"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <FadeUpOneByOneAnimation className="mb-8">
            <h2
              id="advisor-related-heading"
              className="text-[24px] md:text-[30px] font-semibold text-[#2D2D2D] mb-2"
            >
              Related pages
            </h2>
            <p className="text-[#4D4D4D] text-sm md:text-base max-w-[640px]">
              Role comparisons, entity facts, and disclosures that sit with this guide.
            </p>
          </FadeUpOneByOneAnimation>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedPages.map((link) => (
              <FadeUpOneByOneAnimation key={link.title}>
                <Link
                  href={link.href}
                  className="flex h-full flex-col rounded-[20px] border border-[#E3ECF5] bg-white p-5 hover:border-[#293C7D]/40 transition-colors"
                >
                  <h3 className="text-base font-bold text-[#293C7D] mb-1">{link.title}</h3>
                  <p className="text-sm text-[#4D4D4D] leading-relaxed m-0">{link.description}</p>
                </Link>
              </FadeUpOneByOneAnimation>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
