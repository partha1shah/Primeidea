import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import RiskAssessmentWizard from "@/components/riskAssessment/RiskAssessmentWizard";
import Link from "next/link";
import {
  CheckCircleIcon,
  ClipboardDocumentListIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const expectItems = [
  {
    title: "Client details first",
    body: "Name, mobile, and email are required to prepare the profile.",
  },
  {
    title: "Five optional risk questions",
    body: "Skip any question — a provisional score still works.",
  },
  {
    title: "Indicative score from 2 to 10",
    body: "Bands from Conservative to Aggressive for discussion only.",
  },
  {
    title: "Download JSON or email your result",
    body: "Share the response securely with the research desk.",
  },
];

const relatedPages = [
  {
    title: "Portfolio Review",
    href: "/portfolio-review",
    description: "Continue with a research-led look at suitability, overlap, and allocation.",
  },
  {
    title: "Wealth Tools",
    href: "/wealth-tools",
    description: "Illustrative calculators for SIP, corpus, and planning trade-offs.",
  },
  {
    title: "Research Process",
    href: "/research-process",
    description: "The five-step method behind structured reviews.",
  },
  {
    title: "Financial Profile",
    href: "/financial-profile",
    description: "A fuller questionnaire on goals, holdings, liquidity, and estate priorities.",
  },
];

export default function RiskAssessmentContent() {
  return (
    <>
      <section
        id="risk-assessment-overview"
        aria-labelledby="risk-intro-heading"
        className="scroll-mt-24 border-b border-[#E3ECF5] bg-white py-14 md:py-16"
      >
        <div className="mx-auto px-4 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px]">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#479AD2] md:text-sm">
                PrimeIdea Financial Planning
              </p>
              <h2
                id="risk-intro-heading"
                className="mb-4 text-[26px] font-light leading-[125%] text-[#2D2D2D] md:text-[32px]"
              >
                Purpose of this assessment
              </h2>
              <p className="mb-4 text-base leading-relaxed text-[#4D4D4D]">
                This assessment is a starting point for a suitability conversation. It does
                not predict returns and it does not by itself determine which investment
                product is suitable for you.
              </p>
              <p className="mb-6 text-sm leading-relaxed text-[#6B7C8A]">
                <strong className="font-semibold text-[#2D2D2D]">Confidentiality:</strong>{" "}
                Please provide information that is accurate to the best of your knowledge.
                PrimeIdea Ventures may use your responses for financial profiling and
                discussion.
              </p>
              <a
                href="#risk-assessment-form"
                className="inline-flex items-center justify-center rounded-xl bg-[#FFC300] px-5 py-3.5 text-sm font-bold text-[#232D63] transition-colors hover:bg-[#293C7D] hover:text-white"
              >
                Start Assessment →
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
                    <p className="text-xl font-bold text-[#293C7D]">How the assessment works</p>
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
                  Indicative profiling only — not investment advice and 
                </p>
              </FadeUpOneByOneAnimation>
            </aside>
          </div>
        </div>
      </section>

      <section
        id="risk-assessment-form"
        aria-labelledby="risk-workspace-heading"
        className="scroll-mt-28 border-t border-[#D6E4EE] bg-[#F6FDFF] py-14 md:py-16"
      >
        <div className="mx-auto px-4 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px]">
          <div className="mb-8 max-w-3xl md:mb-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#479AD2] md:text-sm">
              Interactive assessment
            </p>
            <h2
              id="risk-workspace-heading"
              className="mb-3 text-[26px] font-light leading-[125%] text-[#2D2D2D] md:text-[32px]"
            >
              Complete the risk assessment
            </h2>
            <p className="text-base leading-relaxed text-[#4D4D4D]">
              Answer the client details, then the optional risk questions. Your draft is
              saved on this device until you download or clear it.
            </p>
          </div>
          <RiskAssessmentWizard />
          <p className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-[#6B7C8A]">
            <ClipboardDocumentListIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#479AD2]" />
            <span>
              Prefer to continue with holdings?{" "}
              <Link
                href="/portfolio-review"
                className="font-semibold text-[#293C7D] underline-offset-2 hover:underline"
              >
                Upload portfolio for review
              </Link>
              .
            </span>
          </p>
        </div>
      </section>

      <section
        aria-labelledby="risk-related-heading"
        className="border-t border-[#E3ECF5] bg-[#F6FDFF] py-14 md:py-16"
      >
        <div className="mx-auto px-4 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px]">
          <FadeUpOneByOneAnimation className="mb-8 md:mb-10">
            <h2
              id="risk-related-heading"
              className="mb-2 text-[24px] font-semibold text-[#2D2D2D] md:text-[30px]"
            >
              Related pages
            </h2>
            <p className="max-w-[640px] text-sm text-[#4D4D4D] md:text-base">
              Continue with a research-led review, planning tools, or the process behind
              suitability discussions.
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
