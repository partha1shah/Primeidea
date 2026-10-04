import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import {
  DISCLOSURE_SHORT,
  IDENTITY_SHORT,
  PRODUCT_ACCESS,
  REGISTRATION_BLOCKS,
  SEBI_LINKS,
} from "@/data/registrations";
import {
  ArrowDownTrayIcon,
  BriefcaseIcon,
  CheckBadgeIcon,
  CheckCircleIcon,
  ClipboardDocumentListIcon,
  ClockIcon,
  EnvelopeIcon,
  EyeIcon,
  FlagIcon,
  PhoneIcon,
  ScaleIcon,
  ShieldCheckIcon,
  TableCellsIcon,
  UserGroupIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const jumpLinks = [
  { href: "#sebi-registration", label: "SEBI Registration" },
  { href: "#investor-charter", label: "Investor Charter" },
  { href: "#amfi-code-of-conduct", label: "AMFI Code of Conduct" },
  { href: "#complaint-status", label: "Complaint Status" },
  { href: "#grievance-redressal", label: "Grievance" },
  { href: "#sebi-scores", label: "SEBI SCORES" },
  { href: "#disclaimer", label: "Disclaimer" },
  { href: "#risk-disclosure", label: "Risk Disclosure" },
  { href: "#role-clarification", label: "Role Clarification" },
  { href: "#compliance-contact", label: "Contact" },
];

const grievanceSteps = [
  {
    step: "01",
    title: "Write to PrimeIdea",
    description:
      "Email or call with your name, contact details, nature of concern, and any supporting documents.",
  },
  {
    step: "02",
    title: "Acknowledgement",
    description:
      "We record the complaint and acknowledge receipt so you have a reference for follow-up.",
  },
  {
    step: "03",
    title: "Review & response",
    description:
      "The concern is reviewed against our research process and disclosures. We aim to respond with a clear next step.",
  },
  {
    step: "04",
    title: "Escalate if unresolved",
    description:
      "If you remain dissatisfied, you may use SEBI SCORES and other investor protection forums published by SEBI.",
  },
];

export default function RegulatoryContentSections({ complaints = [] }) {
  return (
    <>
      <nav aria-label="On this page" className="bg-white border-b border-[#E3ECF5]">
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4 py-4 overflow-x-auto">
          <ul className="flex flex-wrap gap-2 list-none m-0 p-0">
            {jumpLinks.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex whitespace-nowrap rounded-full border border-[#E3ECF5] bg-[#F6FDFF] px-3.5 py-1.5 text-[13px] font-semibold text-[#293C7D] hover:border-[#293C7D] hover:bg-white transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section
        id="sebi-registration"
        aria-labelledby="sebi-registration-heading"
        className="bg-[#232D63] py-14 md:py-20 bg-[url('/images/insurance/risk-management/bg.png')] bg-repeat bg-contain bg-center scroll-mt-24"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <FadeUpOneByOneAnimation className="mb-10 md:mb-12 max-w-[820px]">
            <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#FFC300] mb-3">
              Transparency &amp; compliance
            </p>
            <h2
              id="sebi-registration-heading"
              className="text-[28px] md:text-[40px] font-light text-white leading-[120%] mb-4"
            >
              Registrations &amp;{" "}
              <strong className="font-semibold">distribution</strong>
            </h2>
            <p className="text-base md:text-lg !text-white/75 leading-relaxed mb-5">
              {IDENTITY_SHORT}
            </p>
            <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
              {PRODUCT_ACCESS.slice(0, 4).map((product) => (
                <li
                  key={product}
                  className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-[12px] font-medium text-white/80"
                >
                  {product}
                </li>
              ))}
            </ul>
          </FadeUpOneByOneAnimation>

          <FadeUpOneByOneAnimation>
            <ul className="m-0 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 xl:grid-cols-4">
              {REGISTRATION_BLOCKS.map((block) => (
                <li key={block.title}>
                  <article className="group flex h-full flex-col rounded-2xl border border-white/12 bg-white/[0.05] p-5 transition-colors hover:border-[#FFC300]/35 hover:bg-white/[0.08]">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#FFC300]/90">
                        {block.shortLabel}
                      </span>
                      <ShieldCheckIcon
                        className="h-4 w-4 shrink-0 text-white/35 transition-colors group-hover:text-[#FFC300]"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="mb-3 text-sm font-semibold leading-snug text-white/90">
                      {block.title}
                    </h3>
                    <p className="mb-3 text-lg font-bold tabular-nums tracking-wide text-[#FFC300] md:text-xl">
                      {block.number}
                    </p>
                    <div className="mt-auto space-y-1 border-t border-white/10 pt-3">
                      {block.meta.map((line) => (
                        <p
                          key={line}
                          className="text-[12px] leading-relaxed text-white/55 tabular-nums"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </FadeUpOneByOneAnimation>

          <FadeUpOneByOneAnimation className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {SEBI_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.05] px-3.5 py-2 text-[12px] font-semibold text-white/85 transition-colors hover:border-[#FFC300]/40 hover:text-white"
                >
                  {link.label}
                  <span aria-hidden="true" className="text-[#FFC300]">
                    ↗
                  </span>
                </a>
              ))}
            </div>
            <Link
              href="/sebi-registered-research-analyst"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#FFC300] px-5 py-3 text-sm font-bold text-[#232D63] transition-colors hover:bg-white sm:shrink-0"
            >
              View SEBI RA page
              <span aria-hidden="true">→</span>
            </Link>
          </FadeUpOneByOneAnimation>
        </div>
      </section>

      <section
        id="investor-charter"
        aria-labelledby="investor-charter-heading"
        className="bg-[#F6FDFF] py-14 md:py-16 scroll-mt-24"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <div className="overflow-hidden rounded-[24px] border border-[#E3ECF5] bg-white shadow-[0_18px_40px_-28px_rgba(41,60,125,0.45)]">
            <div className="bg-[#232D63] bg-[url('/images/insurance/risk-management/bg.png')] bg-repeat bg-contain bg-center px-5 py-8 md:px-10 md:py-10">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
                <FadeUpOneByOneAnimation className="max-w-[640px]">
                  <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#FFC300] mb-3">
                    Investor rights &amp; responsibilities
                  </p>
                  <h2
                    id="investor-charter-heading"
                    className="text-[28px] md:text-[40px] font-light text-white leading-[120%] mb-3"
                  >
                    Investor <strong className="font-semibold">Charter</strong>
                  </h2>
                  <p className="text-base md:text-lg !text-white/80 leading-relaxed">
                    How PrimeIdea works with investors: research-led review, fair dealing,
                    clear risk communication, and a defined grievance path — without
                    guaranteed returns.
                  </p>
                </FadeUpOneByOneAnimation>
                <a
                  href="/docs/investor-charter.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FFC300] px-5 py-3 text-base font-bold text-[#232D63] hover:bg-white transition-colors shrink-0"
                >
                  <ArrowDownTrayIcon className="h-5 w-5" aria-hidden="true" />
                  Download PDF
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FadeUpOneByOneAnimation className="rounded-2xl border border-white/15 bg-[#293C7D]/50 p-5 md:p-6">
                  <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#232D63] border border-white/10">
                    <EyeIcon className="h-5 w-5 text-[#FFC300]" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">Vision</h3>
                  <p className="text-sm md:text-base !text-white/80 leading-relaxed">
                    To support investors with research-led, process-first portfolio review
                    and analysis, with clear disclosures and no promise of returns.
                  </p>
                </FadeUpOneByOneAnimation>
                <FadeUpOneByOneAnimation className="rounded-2xl border border-white/15 bg-[#293C7D]/50 p-5 md:p-6">
                  <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#232D63] border border-white/10">
                    <FlagIcon className="h-5 w-5 text-[#FFC300]" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">Mission</h3>
                  <p className="text-sm md:text-base !text-white/80 leading-relaxed">
                    To help investors understand suitability, risk, overlap, and asset
                    allocation before making further investment decisions — through research
                    guided by a SEBI Registered Research Analyst.
                  </p>
                </FadeUpOneByOneAnimation>
              </div>
            </div>

            <div id="investor-charter-content" className="p-5 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                {[
                  {
                    title: "Business transacted",
                    body: "Research and portfolio-review support across mutual funds, equity, ETFs, fixed income, retirement, insurance planning context, and related wealth-management review. ",
                    Icon: BriefcaseIcon,
                  },
                  {
                    title: "Rights of investors",
                    body: "Fair dealing, clear communication of risks, access to grievance redressal, and independent verification of SEBI registration. Read all scheme-related documents carefully.",
                    Icon: UserGroupIcon,
                  },
                  {
                    title: "Expected timelines",
                    body: "Queries and complaints are acknowledged and reviewed as promptly as practicable. Complex matters may take longer where documents are required. Escalation to SEBI SCORES remains available.",
                    Icon: ClockIcon,
                  },
                ].map(({ title, body, Icon }) => (
                  <FadeUpOneByOneAnimation
                    key={title}
                    className="rounded-2xl border border-[#E3ECF5] bg-[#F6FDFF] p-5 h-full"
                  >
                    <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-[#E3ECF5]">
                      <Icon className="h-5 w-5 text-[#293C7D]" aria-hidden="true" />
                    </span>
                    <h3 className="text-base font-bold text-[#293C7D] mb-2">{title}</h3>
                    <p className="text-sm text-[#4D4D4D] leading-relaxed">{body}</p>
                  </FadeUpOneByOneAnimation>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FadeUpOneByOneAnimation className="rounded-2xl border border-[#E3ECF5] bg-white p-5 md:p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircleIcon className="h-6 w-6 text-[#293C7D]" aria-hidden="true" />
                    <h3 className="text-base font-bold text-[#293C7D]">Do</h3>
                  </div>
                  <ul className="space-y-2.5 list-none m-0 p-0">
                    {[
                      "Verify SEBI registration independently",
                      "Share complete information for a fair review",
                      "Treat research as process guidance, not a return promise",
                    ].map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-[#4D4D4D] leading-relaxed">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFC300]" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </FadeUpOneByOneAnimation>
                <FadeUpOneByOneAnimation className="rounded-2xl border border-[#E3ECF5] bg-white p-5 md:p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <XCircleIcon className="h-6 w-6 text-[#293C7D]" aria-hidden="true" />
                    <h3 className="text-base font-bold text-[#293C7D]">Don&apos;t</h3>
                  </div>
                  <ul className="space-y-2.5 list-none m-0 p-0">
                    {[
                      "Expect guaranteed, market-beating, or risk-free returns",
                      "Treat website content as personalised investment advice",
                      "Skip reading scheme-related documents before investing",
                    ].map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-[#4D4D4D] leading-relaxed">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#293C7D]" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </FadeUpOneByOneAnimation>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="amfi-code-of-conduct"
        aria-labelledby="amfi-code-of-conduct-heading"
        className="bg-white py-14 md:py-16 scroll-mt-24"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <div className="rounded-[24px] border border-[#E3ECF5] bg-[#F6FDFF] p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-[720px]">
              <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-3">
                Association of Mutual Funds in India
              </p>
              <h2
                id="amfi-code-of-conduct-heading"
                className="text-[24px] md:text-[30px] font-semibold text-[#2D2D2D] mb-3"
              >
                AMFI Code of Conduct
              </h2>
              <p className="text-base text-[#4D4D4D] leading-relaxed">
                View or download the AMFI Code of Conduct for intermediaries engaged in selling
                and distribution of mutual fund units. This document sets out expected standards
                of integrity, fair dealing, and investor protection in mutual fund distribution.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="/docs/code-of-conduct.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#293C7D] px-5 py-3 text-base font-bold text-white hover:bg-[#232D63] transition-colors"
              >
                <EyeIcon className="h-5 w-5" aria-hidden="true" />
                Read Code of Conduct
              </a>
              <a
                href="/docs/code-of-conduct.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-[#293C7D] px-5 py-3 text-base font-bold text-[#293C7D] hover:bg-white transition-colors"
              >
                <ArrowDownTrayIcon className="h-5 w-5" aria-hidden="true" />
                {/* Download PDF */}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="complaint-status"
        aria-labelledby="complaint-status-heading"
        className="bg-[#F6FDFF] py-14 md:py-16 scroll-mt-24"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <FadeUpOneByOneAnimation className="mb-8 md:mb-10 max-w-[720px]">
            <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-3">
              Investor protection
            </p>
            <h2
              id="complaint-status-heading"
              className="text-[28px] md:text-[36px] font-light text-[#2D2D2D] leading-[120%] mb-3"
            >
              Complaint <strong className="font-semibold">status</strong>
            </h2>
            <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed">
              Every written concern is logged, acknowledged, and reviewed against our
              research process and disclosures. The monthly register below is updated
              even when the count is zero. You can ask for the status of your own
              complaint at any time using the reference shared in our acknowledgement.
            </p>
          </FadeUpOneByOneAnimation>

          <div className="mb-8 overflow-x-auto rounded-[24px] border border-[#E3ECF5] bg-white shadow-[0_20px_50px_-36px_rgba(41,60,125,0.35)]">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <caption className="sr-only">
                Monthly complaint status for PrimeIdea Ventures
              </caption>
              <thead>
                <tr className="bg-gradient-to-r from-[#232D63] to-[#293C7D]">
                  {[
                    "Month",
                    "Complaints received",
                    "Complaints resolved",
                    "Complaints pending",
                    "Average resolution time",
                    "Remarks",
                  ].map((heading) => (
                    <th
                      key={heading}
                      scope="col"
                      className="px-4 py-3.5 text-xs font-bold uppercase tracking-wider !text-[#FFC300]"
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {complaints.map((row) => (
                  <tr key={row.month} className="border-t border-[#E3ECF5]">
                    <th scope="row" className="px-4 py-3.5 text-sm font-semibold text-[#293C7D]">
                      {row.month}
                    </th>
                    <td className="px-4 py-3.5 text-sm text-[#4D4D4D] tabular-nums">{row.received}</td>
                    <td className="px-4 py-3.5 text-sm text-[#4D4D4D] tabular-nums">{row.resolved}</td>
                    <td className="px-4 py-3.5 text-sm text-[#4D4D4D] tabular-nums">{row.pending}</td>
                    <td className="px-4 py-3.5 text-sm text-[#4D4D4D]">{row.averageResolutionTime}</td>
                    <td className="px-4 py-3.5 text-sm text-[#4D4D4D]">{row.remarks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 list-none m-0 p-0 mb-8">
            {[
              {
                title: "Logged on receipt",
                description:
                  "Complaints received by email, phone, or the contact form are recorded with the date, your details, and the nature of the concern.",
              },
              {
                title: "Reviewed and closed",
                description:
                  "We review the matter, respond with a clear next step, and close the complaint once the response has been shared — or keep it pending if more information is needed.",
              },
              {
                title: "Escalation remains open",
                description:
                  "If you are not satisfied with the outcome, you may use SEBI SCORES. The grievance steps below explain how to raise and follow a concern.",
              },
            ].map((item) => (
              <li key={item.title}>
                <FadeUpOneByOneAnimation className="h-full rounded-[20px] border border-[#E3ECF5] bg-white p-5 md:p-6">
                  <h3 className="text-base font-bold text-[#293C7D] mb-2">{item.title}</h3>
                  <p className="text-sm md:text-base text-[#4D4D4D] leading-relaxed">
                    {item.description}
                  </p>
                </FadeUpOneByOneAnimation>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3">
            <a
              href="#grievance-redressal"
              className="inline-flex items-center gap-2 rounded-md bg-[#293C7D] px-5 py-3 text-base font-bold text-white hover:bg-[#232D63] transition-colors"
            >
              View grievance process
              <span aria-hidden="true">→</span>
            </a>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-md border-2 border-[#293C7D] px-5 py-3 text-base font-bold text-[#293C7D] hover:bg-white transition-colors"
            >
              Ask for your complaint status
            </Link>
          </div>
        </div>
      </section>

      <section
        id="grievance-redressal"
        aria-labelledby="grievance-heading"
        className="bg-white py-14 md:py-16 scroll-mt-24"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <FadeUpOneByOneAnimation className="mb-8 md:mb-10 max-w-[720px]">
            <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-3">
              How to raise a concern
            </p>
            <h2
              id="grievance-heading"
              className="text-[28px] md:text-[36px] font-light text-[#2D2D2D] leading-[120%] mb-3"
            >
              Grievance <strong className="font-semibold">redressal</strong>
            </h2>
            <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed">
              Use this process for service, disclosure, or research-process concerns. Legal
              succession work is partner-enabled and is not handled as independent legal
              practice by PrimeIdea.
            </p>
          </FadeUpOneByOneAnimation>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 list-none m-0 p-0">
            {grievanceSteps.map((item) => (
              <li key={item.step}>
                <FadeUpOneByOneAnimation className="h-full rounded-[20px] border border-[#E3ECF5] bg-[#F6FDFF] p-5">
                  <p className="text-[#FFC300] text-2xl font-light mb-3">{item.step}</p>
                  <h3 className="text-base font-bold text-[#293C7D] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#4D4D4D] leading-relaxed">{item.description}</p>
                </FadeUpOneByOneAnimation>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="sebi-scores"
        aria-labelledby="scores-heading"
        className="bg-[#F6FDFF] py-14 md:py-16 scroll-mt-24"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <div className="rounded-[20px] border border-[#E3ECF5] bg-white p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-[720px]">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#F6FDFF] border border-[#E3ECF5]">
                <CheckBadgeIcon className="h-5 w-5 text-[#293C7D]" aria-hidden="true" />
              </div>
              <h2
                id="scores-heading"
                className="text-[24px] md:text-[30px] font-semibold text-[#2D2D2D] mb-3"
              >
                SEBI SCORES
              </h2>
              <p className="text-base text-[#4D4D4D] leading-relaxed">
                SEBI Complaints Redress System (SCORES) lets investors lodge and track
                complaints against SEBI-registered intermediaries. Use it if a concern is
                not resolved through PrimeIdea’s process.
              </p>
            </div>
            <a
              href="https://scores.sebi.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#293C7D] px-5 py-3 text-base font-bold text-white hover:bg-[#232D63] transition-colors shrink-0"
            >
              Open SEBI SCORES
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section
        id="role-clarification"
        aria-labelledby="role-heading"
        className="bg-[#232D63] py-14 md:py-16 bg-[url('/images/insurance/risk-management/bg.png')] bg-repeat bg-contain bg-center scroll-mt-24"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <FadeUpOneByOneAnimation className="max-w-[720px] mb-8">
            <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#FFC300] mb-3">
              What we are — and are not
            </p>
            <h2
              id="role-heading"
              className="text-[28px] md:text-[36px] font-light text-white leading-[120%] mb-4"
            >
              Role <strong className="font-semibold">clarification</strong>
            </h2>
          </FadeUpOneByOneAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {[
              {
                id: "disclaimer",
                title: "Disclaimer",
                body: DISCLOSURE_SHORT,
                Icon: ScaleIcon,
              },
              {
                id: "risk-disclosure",
                title: "Risk disclosure",
                body: "Investments in Mutual Funds, PMS, AIF, SIF and other market-linked products are subject to market risks. Read all scheme-related documents carefully. Past performance may or may not be sustained in future. PrimeIdea Ventures does not guarantee returns.",
                Icon: ClipboardDocumentListIcon,
              },
              {
                id: "role-note",
                title: "Our role",
                body: "PrimeIdea Ventures is a research-led firm and distributor of financial products (mutual funds, PMS, AIF, SIF and related solutions). Registration and validity details are published above and in the site footer.",
                Icon: CheckBadgeIcon,
              },
            ].map(({ id, title, body, Icon }) => (
              <div key={title} id={id} className="scroll-mt-24">
                <FadeUpOneByOneAnimation className="h-full rounded-[20px] border border-white/15 bg-[#293C7D]/45 p-5 md:p-6">
                  <Icon className="h-6 w-6 text-[#FFC300] mb-4" aria-hidden="true" />
                  <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                  <p className="text-sm !text-white/80 leading-relaxed">{body}</p>
                </FadeUpOneByOneAnimation>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="compliance-contact"
        aria-labelledby="compliance-heading"
        className="bg-white py-14 md:py-16 scroll-mt-24"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <div className="rounded-[20px] border border-[#E3ECF5] bg-[#F6FDFF] p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-3">
                Compliance contact
              </p>
              <h2
                id="compliance-heading"
                className="text-[28px] md:text-[32px] font-semibold text-[#2D2D2D] mb-4"
              >
                Reach PrimeIdea for disclosures and grievances
              </h2>
              <p className="text-base text-[#4D4D4D] leading-relaxed mb-6">
                Vadodara office. Serving investors across Gujarat and India through office
                and online consultation.
              </p>
              <ul className="space-y-3 list-none m-0 p-0">
                <li className="flex gap-3 text-sm md:text-base text-[#293C7D]">
                  <EnvelopeIcon className="h-5 w-5 shrink-0 text-[#479AD2]" aria-hidden="true" />
                  <span>Use the contact form for written complaints and disclosure queries.</span>
                </li>
                <li className="flex gap-3 text-sm md:text-base text-[#293C7D]">
                  <PhoneIcon className="h-5 w-5 shrink-0 text-[#479AD2]" aria-hidden="true" />
                  <a href="tel:+918141027000" className="font-semibold hover:underline">
                    +91 81410 27000
                  </a>
                </li>
                <li className="flex gap-3 text-sm md:text-base text-[#293C7D]">
                  <TableCellsIcon className="h-5 w-5 shrink-0 text-[#479AD2]" aria-hidden="true" />
                  <span>
                    V3 Landmark, 306-307, opp. Atladara Railway Crossing Road, Narayanwadi,
                    Atladara, Vadodara, Gujarat 390012
                  </span>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-center gap-3">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#293C7D] px-5 py-3 text-base font-bold text-white hover:bg-[#232D63] transition-colors"
              >
                Contact compliance
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/sebi-registered-research-analyst"
                className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-[#293C7D] px-5 py-3 text-base font-bold text-[#293C7D] hover:bg-white transition-colors"
              >
                SEBI RA credentials
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
