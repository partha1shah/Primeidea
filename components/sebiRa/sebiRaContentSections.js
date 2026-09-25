import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import Image from "next/image";
import Link from "next/link";
import {
  BeakerIcon,
  CheckBadgeIcon,
  DocumentMagnifyingGlassIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const verificationSteps = [
  {
    title: "Check SEBI registration",
    description:
      "Verify Partha Shah’s registration as a SEBI Registered Research Analyst on the official SEBI website using registration number INH000017815.",
    Icon: CheckBadgeIcon,
  },
  {
    title: "Understand the RA role",
    description:
      "A Research Analyst provides research and analysis. This is distinct from a SEBI Registered Investment Adviser or a mutual fund distributor.",
    Icon: DocumentMagnifyingGlassIcon,
  },
  {
    title: "Review disclosures",
    description:
      "Read PrimeIdea’s regulatory disclosures, grievance process, and risk statements before acting on any research-led guidance.",
    Icon: ShieldCheckIcon,
  },
  {
    title: "Start with portfolio review",
    description:
      "A structured portfolio review helps you understand suitability, overlaps, and allocation before making further investment decisions.",
    Icon: BeakerIcon,
  },
];

const roleCards = [
  {
    title: "SEBI Registered Research Analyst",
    subtitle: "What PrimeIdea operates under",
    points: [
      "Research and analysis on securities and investment products",
      "Portfolio review and suitability-oriented guidance",
      "Process-first recommendations without return guarantees",
    ],
    highlight: true,
  },
  {
    title: "SEBI Registered Investment Adviser",
    subtitle: "Not PrimeIdea’s current registration",
    points: [
      "Personalised investment advice under a separate SEBI registration",
      "PrimeIdea does not present itself as an RIA unless separately registered",
      "Always verify registration category independently",
    ],
    highlight: false,
  },
  {
    title: "Mutual Fund Distributor",
    subtitle: "Different role and incentives",
    points: [
      "Distribution-focused model with commission structures",
      "PrimeIdea’s positioning is research-led review, not product pushing",
      "Suitability and process matter more than product sales volume",
    ],
    highlight: false,
  },
];

const supportAreas = [
  "Mutual fund scheme review and overlap analysis",
  "Direct equity research support",
  "Fixed income and retirement allocation review",
  "Insurance adequacy review in a planning context",
  "Private wealth and family portfolio consolidation",
  "NRI investment structure review for India exposure",
];

export default function SebiRaContentSections() {
  return (
    <>
      <section
        aria-labelledby="sebi-verification-heading"
        className="bg-white py-14 md:py-16"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <FadeUpOneByOneAnimation className="max-w-[720px] mb-10 md:mb-12">
            <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-3">
              Verify before you invest
            </p>
            <h2
              id="sebi-verification-heading"
              className="text-[28px] md:text-[36px] font-light text-[#2D2D2D] leading-[120%] mb-4"
            >
              How to verify a{" "}
              <strong className="font-semibold">SEBI Registered Research Analyst</strong>
            </h2>
            <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed">
              PrimeIdea Ventures is a Vadodara-based research-led wealth management and
              portfolio review firm serving investors across Gujarat and India, with a
              research process guided by Partha Shah, SEBI Registered Research Analyst
              INH000017815.
            </p>
          </FadeUpOneByOneAnimation>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 list-none m-0 p-0">
            {verificationSteps.map(({ title, description, Icon }) => (
              <li key={title}>
                <FadeUpOneByOneAnimation className="group h-full rounded-[20px] border border-[#E3ECF5] bg-[#F6FDFF] p-5 transition-all hover:border-[#479AD2]/40 hover:shadow-[0_12px_30px_-18px_rgba(41,60,125,0.45)]">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white border border-[#E3ECF5] group-hover:bg-[#293C7D] group-hover:border-[#293C7D] transition-colors">
                    <Icon
                      className="h-5 w-5 text-[#293C7D] group-hover:text-[#FFC300] transition-colors"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-base font-bold text-[#293C7D] mb-2 leading-snug">
                    {title}
                  </h3>
                  <p className="text-sm font-medium text-[#4D4D4D] leading-relaxed">
                    {description}
                  </p>
                </FadeUpOneByOneAnimation>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="sebi-role-heading"
        className="bg-[#232D63] py-14 md:py-20 bg-[url('/images/insurance/risk-management/bg.png')] bg-repeat bg-contain bg-center"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <FadeUpOneByOneAnimation className="max-w-[720px] mb-10 md:mb-12">
            <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#FFC300] mb-3">
              Role clarification
            </p>
            <h2
              id="sebi-role-heading"
              className="text-[28px] md:text-[36px] font-light text-white leading-[120%] mb-4"
            >
              Research Analyst vs Investment Adviser vs{" "}
              <strong className="font-semibold">Distributor</strong>
            </h2>
            <p className="text-base md:text-lg text-white/80 leading-relaxed">
              Understanding registration categories helps you evaluate who you are working
              with, what they can legally provide, and what disclosures you should expect.
            </p>
          </FadeUpOneByOneAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6">
            {roleCards.map((card) => (
              <FadeUpOneByOneAnimation
                key={card.title}
                className={`h-full rounded-[20px] border p-6 md:p-7 ${
                  card.highlight
                    ? "border-[#FFC300]/50 bg-[#293C7D]/70 ring-1 ring-[#FFC300]/30"
                    : "border-white/15 bg-[#293C7D]/45"
                }`}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#FFC300] mb-2">
                  {card.subtitle}
                </p>
                <h3 className="text-lg md:text-xl font-bold text-white mb-4 leading-snug">
                  {card.title}
                </h3>
                <ul className="space-y-3 list-none m-0 p-0">
                  {card.points.map((point) => (
                    <li key={point} className="flex gap-2 text-sm md:text-base leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFC300]" aria-hidden="true" />
                      <span className="!text-white">{point}</span>
                    </li>
                  ))}
                </ul>
              </FadeUpOneByOneAnimation>
            ))}
          </div>

          <FadeUpOneByOneAnimation className="mt-8">
            <Link
              href="/research-process"
              className="inline-flex items-center gap-2 text-base font-semibold text-[#FFC300] hover:text-white transition-colors group"
            >
              <span
                className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#FFC300] text-[#232D63] text-sm leading-none group-hover:translate-x-0.5 transition-transform"
                aria-hidden="true"
              >
                →
              </span>
              Explore the full research process
            </Link>
          </FadeUpOneByOneAnimation>
        </div>
      </section>

      <section
        aria-labelledby="sebi-support-heading"
        className="bg-[#F6FDFF] py-14 md:py-16"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <FadeUpOneByOneAnimation className="lg:col-span-5">
              <div className="relative mx-auto lg:mx-0 w-full max-w-[420px] aspect-[4/5] overflow-hidden rounded-[20px] bg-[#293C7D] ring-1 ring-[#E3ECF5]">
                <Image
                  src="/images/about-us/founder.jpg"
                  width={800}
                  height={1000}
                  alt="Partha Shah SEBI Registered Research Analyst PrimeIdea Ventures Vadodara"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </FadeUpOneByOneAnimation>

            <FadeUpOneByOneAnimation className="lg:col-span-7">
              <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-3">
                Research-led support
              </p>
              <h2
                id="sebi-support-heading"
                className="text-[28px] md:text-[36px] font-light text-[#2D2D2D] leading-[120%] mb-4"
              >
                What investors receive under{" "}
                <strong className="font-semibold">RA-led research</strong>
              </h2>
              <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed mb-6 max-w-[620px]">
                PrimeIdea’s research process prioritises suitability, risk understanding,
                and structured review — not product pushing or return promises.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none m-0 p-0 mb-8">
                {supportAreas.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 rounded-xl border border-[#E3ECF5] bg-white px-4 py-3 text-sm md:text-base font-medium text-[#293C7D]"
                  >
                    <span className="text-[#FFC300]" aria-hidden="true">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/portfolio-review"
                  className="inline-flex items-center gap-2 rounded-md bg-[#293C7D] px-5 py-3 text-base font-bold text-white hover:bg-[#232D63] transition-colors"
                >
                  Book Portfolio Review
                  <Image
                    src="/images/icons/arrow-square-right.png"
                    width={21}
                    height={21}
                    alt=""
                  />
                </Link>
                <Link
                  href="/research-process"
                  className="inline-flex items-center gap-2 rounded-md border-2 border-[#293C7D] px-5 py-3 text-base font-bold text-[#293C7D] hover:bg-white transition-colors"
                >
                  View Research Process
                  <Image
                    src="/images/icons/arrow-square-right-dark.png"
                    width={21}
                    height={21}
                    alt=""
                  />
                </Link>
              </div>
            </FadeUpOneByOneAnimation>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="sebi-related-heading"
        className="bg-white py-14 md:py-16 border-t border-[#E3ECF5]"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <FadeUpOneByOneAnimation className="mb-8 md:mb-10">
            <h2
              id="sebi-related-heading"
              className="text-[24px] md:text-[30px] font-semibold text-[#2D2D2D] mb-2"
            >
              Related pages
            </h2>
            <p className="text-[#4D4D4D] text-sm md:text-base max-w-[640px]">
              Explore the research process, portfolio review framework, and regulatory
              disclosures that support PrimeIdea&apos;s RA-led positioning.
            </p>
          </FadeUpOneByOneAnimation>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Research Process",
                href: "/research-process",
                description: "How PrimeIdea reviews portfolios and assesses suitability.",
              },
              {
                title: "Portfolio Review",
                href: "/portfolio-review",
                description: "Book a structured review of your current holdings.",
              },
              {
                title: "Regulatory Disclosures",
                href: "/regulatory-disclosures",
                description: "Investor charter, grievance, and compliance information.",
              },
              {
                title: "Mutual Fund Investment Support",
                href: "/mutual-fund-investment-support",
                description: "Research-led SIP and scheme review.",
              },
            ].map((link) => (
              <FadeUpOneByOneAnimation key={link.title}>
                <Link
                  href={link.href}
                  className="group block h-full rounded-[20px] border border-[#E3ECF5] bg-[#F6FDFF] p-5 transition-all hover:border-[#479AD2]/40 hover:shadow-[0_12px_30px_-18px_rgba(41,60,125,0.35)]"
                >
                  <h3 className="text-base font-bold text-[#293C7D] mb-2 group-hover:text-[#479AD2] transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-sm text-[#4D4D4D] leading-relaxed mb-3">
                    {link.description}
                  </p>
                  <span className="text-sm font-semibold text-[#479AD2] group-hover:translate-x-1 inline-block transition-transform">
                    Learn more →
                  </span>
                </Link>
              </FadeUpOneByOneAnimation>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
