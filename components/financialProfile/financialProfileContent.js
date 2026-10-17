import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import FinancialProfileWizard from "@/components/financialProfile/FinancialProfileWizard";
import Link from "next/link";
import {
  CheckCircleIcon,
  ClipboardDocumentListIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const expectItems = [
  {
    title: "11 short sections",
    body: "Investor profile through goals, risk, liabilities, and estate priorities.",
  },
  {
    title: "About 10–15 minutes",
    body: "Approximate values are fine — exact figures are not required.",
  },
  {
    title: "Draft saved on this device",
    body: "Continue later without losing progress until you clear the form.",
  },
  {
    title: "Review before sharing",
    body: "Download JSON or prepare an email to the research desk.",
  },
];

const relatedPages = [
  {
    title: "Risk Assessment",
    href: "/risk-assessment",
    description: "A shorter indicative risk profile for suitability discussion.",
  },
  {
    title: "Portfolio Review",
    href: "/portfolio-review",
    description: "Upload holdings for a research-led review of suitability and allocation.",
  },
  {
    title: "Wealth Tools",
    href: "/wealth-tools",
    description: "Illustrative calculators for SIP, corpus, and planning trade-offs.",
  },
  {
    title: "Book Portfolio Review",
    href: "/book-portfolio-review",
    description: "Continue after profiling with an office or video consultation booking.",
  },
];

export default function FinancialProfileContent() {
  return (
    <>
      <section
        id="financial-profile-overview"
        aria-labelledby="fp-intro-heading"
        className="scroll-mt-24 border-b border-[#E3ECF5] bg-white py-14 md:py-16"
      >
        <div className="mx-auto px-4 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px]">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#479AD2] md:text-sm">
                PrimeIdea Financial Planning Profile
              </p>
              <h2
                id="fp-intro-heading"
                className="mb-4 text-[26px] font-light leading-[125%] text-[#2D2D2D] md:text-[32px]"
              >
                Why we ask these questions
              </h2>
              <p className="mb-4 text-base leading-relaxed text-[#4D4D4D]">
                This questionnaire helps PrimeIdea Ventures prepare more relevant
                conversations around mutual funds, equity, portfolio review, insurance,
                retirement planning, succession planning, and other suitable financial
                solutions.
              </p>
              <p className="mb-6 text-sm leading-relaxed text-[#6B7C8A]">
                <strong className="font-semibold text-[#2D2D2D]">Privacy:</strong> Please
                share only information you are comfortable providing. Your responses
                should be reviewed by an authorised PrimeIdea representative before any
                investment decision is made.
              </p>
              <a
                href="#financial-profile-form"
                className="inline-flex items-center justify-center rounded-xl bg-[#FFC300] px-5 py-3.5 text-sm font-bold text-[#232D63] transition-colors hover:bg-[#293C7D] hover:text-white"
              >
                Start Financial Profile →
              </a>
            </div>

            <aside className="lg:col-span-7">
              <FadeUpOneByOneAnimation className="rounded-[24px] border border-[#D0E0EC] bg-[#F6FDFF] p-5 shadow-[0_18px_40px_-28px_rgba(41,60,125,0.35)] md:p-8">
                <div className="mb-5 flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#232D63]">
                    <ShieldCheckIcon className="h-6 w-6 text-[#FFC300]" aria-hidden />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#479AD2]">
                      What to expect
                    </p>
                    <p className="text-xl font-bold text-[#293C7D]">How profiling works</p>
                  </div>
                </div>
                <ul className="m-0 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2">
                  {expectItems.map((item, index) => (
                    <li
                      key={item.title}
                      className="flex items-start gap-3 rounded-2xl border border-[#E3ECF5] bg-white px-4 py-3.5"
                    >
                      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#E3ECF5] bg-[#F6FDFF]">
                        <span className="text-[11px] font-bold tabular-nums text-[#293C7D]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </span>
                      <span>
                        <span className="mb-0.5 block text-sm font-semibold text-[#293C7D]">
                          {item.title}
                        </span>
                        <span className="block text-xs leading-relaxed text-[#4D4D4D]">
                          {item.body}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-[#6B7C8A]">
                  <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#479AD2]" />
                  For profiling and discussion only — not an offer, solicitation, or
                  guarantee of returns.
                </p>
              </FadeUpOneByOneAnimation>
            </aside>
          </div>
        </div>
      </section>

      <section
        id="financial-profile-form"
        aria-labelledby="fp-workspace-heading"
        className="scroll-mt-28 border-t border-[#D6E4EE] bg-[#F6FDFF] py-14 md:py-16"
      >
        <div className="mx-auto px-4 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px]">
          <div className="mb-8 max-w-3xl md:mb-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#479AD2] md:text-sm">
              Interactive questionnaire
            </p>
            <h2
              id="fp-workspace-heading"
              className="mb-3 text-[26px] font-light leading-[125%] text-[#2D2D2D] md:text-[32px]"
            >
              Build your Financial Profile
            </h2>
            <p className="text-base leading-relaxed text-[#4D4D4D]">
              Complete the sections at your pace. Only the first step is required to
              download or email your response.
            </p>
          </div>
          <FinancialProfileWizard />
          <p className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-[#6B7C8A]">
            <ClipboardDocumentListIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#479AD2]" />
            <span>
              Prefer a shorter risk-only questionnaire?{" "}
              <Link
                href="/risk-assessment"
                className="font-semibold text-[#293C7D] underline-offset-2 hover:underline"
              >
                Open Risk Assessment
              </Link>
              .
            </span>
          </p>
        </div>
      </section>

      <section
        aria-labelledby="fp-related-heading"
        className="border-t border-[#E3ECF5] bg-[#F6FDFF] py-14 md:py-16"
      >
        <div className="mx-auto px-4 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px]">
          <FadeUpOneByOneAnimation className="mb-8 md:mb-10">
            <h2
              id="fp-related-heading"
              className="mb-2 text-[24px] font-semibold text-[#2D2D2D] md:text-[30px]"
            >
              Related pages
            </h2>
            <p className="max-w-[640px] text-sm text-[#4D4D4D] md:text-base">
              Continue with risk profiling, a research-led review, or planning tools.
            </p>
          </FadeUpOneByOneAnimation>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {relatedPages.map((link) => (
              <FadeUpOneByOneAnimation key={link.title}>
                <Link
                  href={link.href}
                  className="flex h-full flex-col rounded-[20px] border border-[#E3ECF5] bg-white p-5 transition-colors hover:border-[#293C7D]/40"
                >
                  <UserGroupIcon
                    className="mb-3 h-5 w-5 text-[#293C7D]"
                    aria-hidden="true"
                  />
                  <h3 className="mb-1 text-base font-bold text-[#293C7D]">{link.title}</h3>
                  <p className="text-sm leading-relaxed text-[#4D4D4D]">{link.description}</p>
                </Link>
              </FadeUpOneByOneAnimation>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
