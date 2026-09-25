import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import Image from "next/image";
import Link from "next/link";
import {
  AcademicCapIcon,
  BeakerIcon,
  CheckBadgeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const credentials = [
  "SEBI Registered Research Analyst INH000017815",
  "Engineering graduate (BE) and Master’s in Finance (MS Finance)",
  "CFA Level 2 examination completed",
  "RIA Level 1 & 2 examinations completed (not SEBI RIA registration)",
];

const focusAreas = [
  "Research-led portfolio review",
  "Suitability, overlap, and asset allocation",
  "Mutual fund and equity research support",
  "Private wealth and family book structure",
];

const relatedPages = [
  {
    title: "About PrimeIdea",
    href: "/about-us",
    description: "Why the firm exists and how it stays accountable.",
  },
  {
    title: "SEBI RA credentials",
    href: "/sebi-registered-research-analyst",
    description: "How to verify registration number INH000017815.",
  },
  {
    title: "Research Process",
    href: "/research-process",
    description: "The five-step method the research desk uses.",
  },
  {
    title: "Careers",
    href: "/careers",
    description: "Join the Vadodara research-led team when roles are open.",
  },
];

export default function LeadershipContent() {
  return (
    <>
      <section
        aria-labelledby="leader-heading"
        className="bg-[#F6FDFF] py-14 md:py-16"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-3">
            Senior profile
          </p>
          <h2
            id="leader-heading"
            className="text-[28px] md:text-[36px] font-light text-[#2D2D2D] leading-[120%] mb-8"
          >
            Named leadership we can{" "}
            <strong className="font-semibold">verify today</strong>
          </h2>

          <div className="overflow-hidden rounded-[28px] border border-[#E3ECF5] bg-white grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 relative min-h-[420px] lg:min-h-[560px]">
              <Image
                src="/images/about-us/founder.jpg"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                alt="Partha Shah SEBI Registered Research Analyst PrimeIdea Ventures"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#232D63] via-[#232D63]/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FFC300] mb-1">
                  Head of Research
                </p>
                <p className="text-2xl font-bold !text-white">Partha Shah</p>
                <p className="text-sm !text-white/80 mt-1">
                  SEBI Registered Research Analyst
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 p-6 md:p-8 lg:p-10">
              <p className="text-base font-semibold text-[#293C7D] mb-4">
                Head of Research &amp; Investment Strategy · INH000017815
              </p>
              <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed mb-6">
                Partha Shah leads PrimeIdea’s research process from Vadodara. The firm serves
                investors across Gujarat and India through office and video consultation.
                Investors should verify SEBI registration independently.
              </p>

              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#479AD2] mb-2">
                Credentials
              </p>
              <ul className="grid grid-cols-1 gap-2 list-none m-0 p-0 mb-6">
                {credentials.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 rounded-xl border border-[#E3ECF5] bg-[#F6FDFF] px-4 py-3 text-sm font-medium text-[#293C7D]"
                  >
                    <AcademicCapIcon className="h-5 w-5 shrink-0 text-[#479AD2] mt-0.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#479AD2] mb-2">
                Focus
              </p>
              <ul className="flex flex-wrap gap-2 list-none m-0 p-0 mb-6">
                {focusAreas.map((item) => (
                  <li
                    key={item}
                    className="inline-flex rounded-full border border-[#E3ECF5] bg-[#F6FDFF] px-3 py-1.5 text-xs md:text-sm font-medium text-[#293C7D]"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-sm text-[#4D4D4D] leading-relaxed mb-6">
                Completing RIA examinations is not the same as SEBI Registered Investment
                Adviser registration. PrimeIdea does not present itself as an RIA unless
                separately registered, and does not guarantee returns.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/pssays"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#293C7D] px-5 py-3 text-base font-bold text-white hover:bg-[#232D63] transition-colors"
                >
                  LinkedIn
                  <span aria-hidden="true">→</span>
                </a>
                <Link
                  href="/sebi-registered-research-analyst"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-[#293C7D] px-5 py-3 text-base font-bold text-[#293C7D] hover:bg-[#F6FDFF] transition-colors"
                >
                  Verify SEBI RA
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="research-team-heading"
        className="bg-white py-14 md:py-16"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <FadeUpOneByOneAnimation className="max-w-[720px] mb-8">
            <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-3">
              Research team
            </p>
            <h2
              id="research-team-heading"
              className="text-[28px] md:text-[36px] font-light text-[#2D2D2D] leading-[120%] mb-3"
            >
              Named profiles only when{" "}
              <strong className="font-semibold">photos and credentials are verified</strong>
            </h2>
            <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed">
              Educational and research output is written by the PrimeIdea Research Team and
              reviewed by Partha Shah. Additional senior names, photos, and LinkedIn links will
              be published here when PrimeIdea supplies them — placeholder team photos are not
              used.
            </p>
          </FadeUpOneByOneAnimation>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 list-none m-0 p-0">
            <li className="rounded-[20px] border border-[#E3ECF5] bg-[#F6FDFF] p-5">
              <CheckBadgeIcon className="h-6 w-6 text-[#293C7D] mb-3" aria-hidden="true" />
              <h3 className="text-base font-bold text-[#293C7D] mb-1">Reviewed by</h3>
              <p className="text-sm text-[#4D4D4D] leading-relaxed">
                Partha Shah, SEBI RA INH000017815
              </p>
            </li>
            <li className="rounded-[20px] border border-[#E3ECF5] bg-[#F6FDFF] p-5">
              <MapPinIcon className="h-6 w-6 text-[#293C7D] mb-3" aria-hidden="true" />
              <h3 className="text-base font-bold text-[#293C7D] mb-1">Based in</h3>
              <p className="text-sm text-[#4D4D4D] leading-relaxed">
                Vadodara office, serving Gujarat and India
              </p>
            </li>
            <li className="rounded-[20px] border border-[#E3ECF5] bg-[#F6FDFF] p-5">
              <BeakerIcon className="h-6 w-6 text-[#293C7D] mb-3" aria-hidden="true" />
              <h3 className="text-base font-bold text-[#293C7D] mb-1">How the team works</h3>
              <p className="text-sm text-[#4D4D4D] leading-relaxed">
                Process-first review. No guaranteed-return claims.
              </p>
            </li>
          </ul>
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
                Start with a structured{" "}
                <strong className="font-semibold">portfolio review</strong>
              </h2>
              <p className="text-base md:text-lg !text-white/80 leading-relaxed">
                Understand risks, overlaps, allocation, and next steps before investing further.
              </p>
            </div>
            <Link
              href="/portfolio-review"
              className="inline-flex items-center gap-2 rounded-xl bg-[#FFC300] px-5 py-3 text-base font-bold text-[#232D63] hover:bg-white transition-colors shrink-0"
            >
              Book Portfolio Review
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="leadership-related-heading"
        className="bg-[#F6FDFF] py-14 md:py-16"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <h2
            id="leadership-related-heading"
            className="text-[24px] md:text-[30px] font-semibold text-[#2D2D2D] mb-8"
          >
            Related pages
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedPages.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="flex h-full flex-col rounded-[20px] border border-[#E3ECF5] bg-white p-5 hover:border-[#293C7D]/40 transition-colors"
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
