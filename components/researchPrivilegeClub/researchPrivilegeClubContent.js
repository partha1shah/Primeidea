import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import ResearchPrivilegeClubForm from "@/components/forms/ResearchPrivilegeClubForm";
import Link from "next/link";
import {
  ArrowLongRightIcon,
  ArrowPathIcon,
  BanknotesIcon,
  BeakerIcon,
  BookOpenIcon,
  BuildingLibraryIcon,
  ChartBarIcon,
  ChartPieIcon,
  CheckCircleIcon,
  ClipboardDocumentCheckIcon,
  ClockIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  ExclamationTriangleIcon,
  PresentationChartLineIcon,
  RectangleStackIcon,
  ScaleIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UserGroupIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";

export const QUERY_EMAIL = "research@primeidea.in";
export const ANNUAL_PRICE = "INR 18,000 per annum";

export const LLM_SUMMARY =
  "PrimeIdea Research Privilege Club is an annual retail portfolio and research subscription by PrimeIdea Ventures for investors who want mutual fund investment ideas, existing portfolio review, rebalancing recommendations, ETF ideas, PMS/SIF/AIF research notes, fixed income ideas, market notes, risk-labeled research views, and email-based query support through a SEBI Registered Research Analyst-led process.";

const ACCESS_GROUPS = [
  {
    title: "Mutual funds & SIPs",
    Icon: RectangleStackIcon,
    accent: "from-[#479AD2]/15 to-[#479AD2]/5",
    items: [
      "Mutual fund investment ideas",
      "SIP investment ideas",
      "Lumpsum investment ideas",
      "Fund category review",
      "Mutual fund overlap review",
    ],
  },
  {
    title: "Portfolio & allocation",
    Icon: ChartPieIcon,
    accent: "from-[#293C7D]/12 to-[#293C7D]/4",
    items: [
      "Existing portfolio review",
      "Portfolio rebalancing recommendations",
      "Asset allocation ideas",
      "Risk-adjusted return review",
    ],
  },
  {
    title: "Products & categories",
    Icon: BuildingLibraryIcon,
    accent: "from-[#FFC300]/20 to-[#FFC300]/5",
    items: [
      "ETF investment ideas",
      "Index fund ideas",
      "Fixed income ideas",
      "Debt fund ideas",
      "PMS research and suitability notes",
      "SIF research and suitability notes",
      "AIF education and suitability notes",
      "Sector and theme-based investment ideas",
      "IPO / NFO review notes, if applicable",
    ],
  },
  {
    title: "Research delivery",
    Icon: DocumentTextIcon,
    accent: "from-[#479AD2]/12 to-white",
    items: [
      "Market research notes",
      "Monthly portfolio strategy notes",
      "Risk-labeled investment ideas",
      "Time-stamped research views",
      "Email-based query support",
    ],
  },
];

const REVIEW_ITEMS = [
  { label: "Existing mutual fund portfolio", Icon: RectangleStackIcon },
  { label: "SIP portfolio", Icon: ArrowPathIcon },
  { label: "Lumpsum investments", Icon: BanknotesIcon },
  { label: "Direct equity exposure, if provided", Icon: ChartBarIcon },
  { label: "ETF exposure", Icon: PresentationChartLineIcon },
  { label: "PMS / SIF / AIF exposure, if applicable", Icon: BuildingLibraryIcon },
  { label: "Fixed income exposure", Icon: ScaleIcon },
  { label: "Asset allocation mismatch", Icon: ChartPieIcon },
  { label: "Overlap and duplication", Icon: ArrowPathIcon },
  { label: "Sector / category concentration", Icon: ChartBarIcon },
  { label: "Risk level", Icon: ShieldCheckIcon },
  { label: "Rebalancing recommendation", Icon: ClipboardDocumentCheckIcon },
  {
    label: "Exit / switch / hold view, where applicable and compliance-approved",
    Icon: DocumentTextIcon,
    wide: true,
  },
];

const RESEARCH_NOTE_FIELDS = [
  "Research title",
  "Date of publication",
  "Product category",
  "Risk level",
  "Suitable investor type",
  "Suggested time horizon",
  "Research rationale",
  "Key risks",
  "Suitability notes",
  "Review date or validity period, where applicable",
  "Disclosure",
  "No-return-guarantee statement",
];

const RISK_LABELS = [
  { label: "Low Risk", tone: "border-[#1F6B3A]/25 bg-[#E8F6EE] text-[#1F6B3A]" },
  { label: "Moderate Risk", tone: "border-[#479AD2]/30 bg-[#E8F4FC] text-[#293C7D]" },
  { label: "High Risk", tone: "border-[#B45309]/25 bg-[#FFF7ED] text-[#9A3412]" },
  { label: "Tactical Idea", tone: "border-[#7C3AED]/25 bg-[#F5F3FF] text-[#5B21B6]" },
  { label: "Long-Term Idea", tone: "border-[#293C7D]/25 bg-[#EEF2FF] text-[#232D63]" },
  { label: "Educational Only", tone: "border-[#64748B]/25 bg-[#F1F5F9] text-[#475569]" },
  { label: "Suitability Required", tone: "border-[#FFC300]/40 bg-[#FFFBEB] text-[#854D0E]" },
];

const WHO_CAN_JOIN = [
  "Retail investors",
  "SIP investors",
  "Mutual fund investors",
  "Salaried professionals",
  "Business owners",
  "Young professionals",
  "HNI investors",
  "Retirees",
  "NRIs, where applicable",
  "Investors who want structured research support before making investment decisions",
  "Investors who want existing portfolio review and rebalancing recommendations",
];

const WHO_SHOULD_NOT = [
  "Guaranteed returns",
  "Daily trading calls",
  "Intraday tips",
  "Futures and options tips",
  "Assured profit ideas",
  "Short-term speculation",
  "Stock tips without research rationale",
  "Trade execution service",
  "Portfolio management without investor involvement",
];

const MANDATORY_DISCLOSURES = [
  {
    title: "Research leadership",
    text: "PrimeIdea Ventures research process is led by Partha Shah, SEBI Registered Research Analyst INH000017815.",
    Icon: ShieldCheckIcon,
    tone: "border-[#479AD2]/25 bg-[#F0F9FF]",
    iconTone: "bg-[#479AD2]/15 text-[#293C7D]",
  },
  {
    title: "Market risks",
    text: "Investments in securities market are subject to market risks. Read all related documents carefully before investing.",
    Icon: ExclamationTriangleIcon,
    tone: "border-[#B45309]/20 bg-[#FFFBF7]",
    iconTone: "bg-[#FEF3C7] text-[#B45309]",
  },
  {
    title: "No performance assurance",
    text: "Registration granted by SEBI and certification from NISM do not guarantee performance or provide any assurance of returns to investors.",
    Icon: DocumentTextIcon,
    tone: "border-[#E3ECF5] bg-white",
    iconTone: "bg-[#293C7D]/8 text-[#293C7D]",
  },
  {
    title: "Evolving research views",
    text: "Research content may change based on market conditions, valuation, business performance, macroeconomic data, regulatory changes, liquidity, tax rules, and risk-reward assessment.",
    Icon: ArrowPathIcon,
    tone: "border-[#E3ECF5] bg-white",
    iconTone: "bg-[#479AD2]/12 text-[#293C7D]",
  },
  {
    title: "Member responsibilities",
    text: "PrimeIdea Ventures does not guarantee returns and does not promise profit. Members are responsible for executing transactions through their own broker, platform, or intermediary unless a separate compliant arrangement is specifically disclosed.",
    Icon: ScaleIcon,
    tone: "border-[#293C7D]/15 bg-[#F6FDFF]",
    iconTone: "bg-[#293C7D]/10 text-[#232D63]",
  },
];

const RELATED_FROM_PAGE = [
  {
    title: "Regulatory Disclosures",
    href: "/regulatory-disclosures",
    description: "Investor charter, grievance, and risk disclosures.",
    Icon: ShieldCheckIcon,
  },
  {
    title: "Research Reports",
    href: "/research-reports",
    description: "Published research and education PDF library.",
    Icon: DocumentTextIcon,
  },
  {
    title: "Portfolio Review",
    href: "/portfolio-review",
    description: "Structured review before further investing.",
    Icon: ClipboardDocumentCheckIcon,
  },
  {
    title: "Mutual Fund Support",
    href: "/mutual-fund-investment-support",
    description: "Scheme mix, overlap, and SIP review.",
    Icon: RectangleStackIcon,
  },
  {
    title: "PMS, AIF & SIF Support",
    href: "/pms-aif-sif-investment-support-gujarat-india",
    description: "Suitability-led alternate strategy notes.",
    Icon: BuildingLibraryIcon,
  },
  {
    title: "Fixed Income",
    href: "/fixed-income-investments",
    description: "Debt funds, bonds, and stability allocation.",
    Icon: BanknotesIcon,
  },
  {
    title: "Knowledge Centre",
    href: "/knowledge-centre",
    description: "Investor education hub and guides.",
    Icon: BookOpenIcon,
  },
  {
    title: "Book Portfolio Review",
    href: "/book-portfolio-review",
    description: "Request a research-led portfolio review.",
    Icon: SparklesIcon,
  },
];

const ENQUIRY_ANCHOR = "#privilege-club-enquiry";
const MAILTO = `mailto:${QUERY_EMAIL}`;

const cardHover =
  "transition-all duration-200 hover:-translate-y-0.5 hover:border-[#293C7D]/35 hover:shadow-[0_16px_40px_-28px_rgba(41,60,125,0.45)]";

function SectionHeading({ eyebrow, id, title, description, centered = false }) {
  return (
    <FadeUpOneByOneAnimation
      className={`max-w-[720px] mb-8 md:mb-10 ${centered ? "mx-auto text-center" : ""}`}
    >
      {eyebrow ? (
        <span className="inline-flex items-center rounded-full border border-[#479AD2]/25 bg-[#479AD2]/10 px-3 py-1 text-[11px] md:text-xs font-semibold tracking-[0.12em] uppercase text-[#293C7D] mb-4">
          {eyebrow}
        </span>
      ) : null}
      <h2
        id={id}
        className="text-[26px] md:text-[34px] font-light text-[#2D2D2D] leading-[120%] mb-3 tracking-tight"
      >
        {title}
      </h2>
      {description ? (
        <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed">{description}</p>
      ) : null}
    </FadeUpOneByOneAnimation>
  );
}

function CtaButton({ href, children, variant = "primary" }) {
  const styles = {
    primary:
      "bg-[#293C7D] !text-white hover:bg-[#232D63] shadow-[0_12px_28px_-16px_rgba(41,60,125,0.65)] hover:shadow-[0_16px_32px_-14px_rgba(41,60,125,0.55)]",
    secondary:
      "border border-[#D0E0EC] bg-white text-[#293C7D] hover:border-[#293C7D] hover:bg-[#F6FDFF]",
    ghost:
      "border border-[#479AD2]/35 bg-[#F6FDFF] text-[#293C7D] hover:border-[#293C7D] hover:bg-white",
  };
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}

export default function ResearchPrivilegeClubContent() {
  return (
    <>
      {/* Hero detail + plan */}
      <section
        aria-labelledby="rpc-hero-heading"
        className="relative overflow-hidden bg-gradient-to-b from-white via-[#F6FDFF] to-white py-14 md:py-20 border-b border-[#E3ECF5]"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 10%, rgba(71,154,210,0.12), transparent 45%), radial-gradient(circle at 85% 30%, rgba(255,195,0,0.08), transparent 40%)",
          }}
        />
        <div className="relative mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <FadeUpOneByOneAnimation className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#293C7D]/15 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#293C7D] mb-4 shadow-sm">
                <SparklesIcon className="h-3.5 w-3.5 text-[#FFC300]" aria-hidden="true" />
                Annual research subscription
              </span>
              <h2
                id="rpc-hero-heading"
                className="text-[30px] md:text-[40px] font-light text-[#2D2D2D] leading-[115%] mb-4 tracking-tight"
              >
                Research-Led Investment Ideas &{" "}
                <strong className="font-semibold text-[#232D63]">Portfolio Review</strong> for Retail
                Investors
              </h2>
              <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed mb-7 max-w-[640px]">
                PrimeIdea Research Privilege Club is an annual research subscription for retail
                investors who want to explore PrimeIdea Ventures research capability in greater depth
                through mutual fund investment ideas, portfolio review, rebalancing recommendations,
                market research, and selected investment ideas across suitable products such as PMS,
                SIF, AIF, ETFs, fixed income, and other investment categories.
              </p>
              <div className="flex flex-wrap gap-3 mb-7">
                <CtaButton href={ENQUIRY_ANCHOR} variant="primary">
                  Join Research Privilege Club
                </CtaButton>
                <CtaButton href={ENQUIRY_ANCHOR} variant="secondary">
                  Request Access
                </CtaButton>
                <CtaButton href={MAILTO} variant="ghost">
                  <EnvelopeIcon className="h-5 w-5" aria-hidden="true" />
                  Email Your Query
                </CtaButton>
              </div>
              <div className="rounded-[18px] border border-[#FFC300]/35 bg-gradient-to-r from-[#FFFBEB] to-white p-4 md:p-5 shadow-[0_12px_30px_-24px_rgba(255,195,0,0.55)]">
                <p className="text-sm text-[#5A6472] leading-relaxed m-0">
                  <span className="font-semibold text-[#293C7D]">Compliance note:</span> PrimeIdea
                  Ventures does not guarantee returns. Research views, portfolio observations,
                  investment ideas, and rebalancing recommendations are subject to market risks and
                  must be evaluated based on the investor risk profile, time horizon, financial
                  goals, liquidity needs, tax situation, and suitability.
                </p>
              </div>
            </FadeUpOneByOneAnimation>

            <FadeUpOneByOneAnimation className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="relative overflow-hidden rounded-[28px] border border-[#293C7D]/20 bg-gradient-to-br from-[#232D63] via-[#293C7D] to-[#1e295b] p-6 md:p-8 text-white shadow-[0_28px_60px_-32px_rgba(35,45,99,0.7)]">
                <div
                  className="pointer-events-none absolute inset-0 opacity-25"
                  aria-hidden="true"
                  style={{
                    backgroundImage: "url('/images/insurance/risk-management/bg.png')",
                    backgroundRepeat: "repeat",
                    backgroundSize: "contain",
                  }}
                />
                <div
                  className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#FFC300]/20 blur-3xl"
                  aria-hidden="true"
                />
                <div className="relative">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] !text-[#FFC300] mb-3 m-0">
                    Single annual plan
                  </p>
                  <p className="text-sm !text-white/75 mb-2 m-0">Annual Subscription</p>
                  <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm px-4 py-3 mb-4">
                    <p className="text-[28px] md:text-[34px] font-bold leading-tight !text-white m-0 tracking-tight">
                      INR 18,000
                      <span className="text-base md:text-lg font-semibold !text-white/80 ml-1">
                        / annum
                      </span>
                    </p>
                  </div>
                  <p className="text-sm !text-white/70 leading-relaxed mb-6 m-0">
                    Taxes, invoice terms, and payment process will be shared during onboarding, as
                    applicable.
                  </p>
                  <ul className="space-y-3 text-sm mb-7 list-none m-0 p-0">
                    {[
                      "Research-led ideas and portfolio review support",
                      "Email-based updates and query support",
                      "Offline KYC and onboarding",
                    ].map((line) => (
                      <li key={line} className="flex gap-2.5 !text-white">
                        <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FFC300]/20">
                          <CheckCircleIcon className="h-4 w-4 !text-[#FFC300]" aria-hidden="true" />
                        </span>
                        <span className="!text-white leading-snug">{line}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={ENQUIRY_ANCHOR}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#FFC300] px-5 py-3.5 text-base font-bold text-[#232D63] transition-all duration-200 hover:bg-white hover:-translate-y-0.5 shadow-[0_14px_30px_-18px_rgba(255,195,0,0.9)]"
                  >
                    Join Research Privilege Club
                    <ArrowLongRightIcon className="h-5 w-5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </FadeUpOneByOneAnimation>
          </div>

          <FadeUpOneByOneAnimation className="relative mt-12 overflow-hidden rounded-[22px] border border-[#D0E0EC] bg-white p-5 md:p-7 shadow-[0_20px_50px_-40px_rgba(41,60,125,0.35)]">
            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-[#479AD2] via-[#293C7D] to-[#FFC300]"
              aria-hidden="true"
            />
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#479AD2] mb-2 pl-3">
              At a glance
            </p>
            <p className="text-sm md:text-base text-[#4D4D4D] leading-relaxed m-0 pl-3">
              {LLM_SUMMARY}
            </p>
          </FadeUpOneByOneAnimation>
        </div>
      </section>

      {/* What members get */}
      <section aria-labelledby="rpc-access-heading" className="bg-[#F6FDFF] py-14 md:py-16">
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <SectionHeading
            eyebrow="Membership scope"
            id="rpc-access-heading"
            title={
              <>
                What members get{" "}
                <strong className="font-semibold">access to</strong>
              </>
            }
            description="One annual research subscription — not multiple tiers, trials, or member dashboards."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
            {ACCESS_GROUPS.map(({ title, Icon, accent, items }) => (
              <FadeUpOneByOneAnimation
                key={title}
                className={`rounded-[24px] border border-[#E3ECF5] bg-gradient-to-br ${accent} p-5 md:p-6 ${cardHover}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/60 bg-white text-[#293C7D] shadow-sm">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-bold text-[#232D63] m-0">{title}</h3>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-none m-0 p-0">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 rounded-xl border border-white/70 bg-white/80 px-3 py-2.5 text-[13px] md:text-sm text-[#4D4D4D] leading-snug"
                    >
                      <CheckCircleIcon
                        className="h-4 w-4 shrink-0 text-[#479AD2] mt-0.5"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </FadeUpOneByOneAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Direct equity */}
      <section aria-labelledby="rpc-equity-heading" className="bg-white py-14 md:py-16">
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <SectionHeading
            eyebrow="Direct equity"
            id="rpc-equity-heading"
            title={
              <>
                Direct equity research{" "}
                <strong className="font-semibold">clarification</strong>
              </>
            }
            description="Direct equity research ideas may be shared on a request basis or when the PrimeIdea Ventures research team believes the idea is suitable for your profile, risk appetite, investment horizon, and overall portfolio context. This is not automatic monthly stock recommendations."
          />
          <FadeUpOneByOneAnimation className="rounded-[22px] border border-[#FECACA] bg-gradient-to-br from-[#FFF5F5] to-white p-5 md:p-7 shadow-[0_16px_40px_-32px_rgba(180,83,9,0.25)]">
            <p className="text-sm font-bold text-[#293C7D] mb-3 flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#FEF3C7]">
                <ExclamationTriangleIcon className="h-5 w-5 text-[#B45309]" aria-hidden="true" />
              </span>
              Language we avoid on this service
            </p>
            <p className="text-sm md:text-base text-[#4D4D4D] leading-relaxed m-0">
              Stock tips, assured calls, multibagger calls, jackpot ideas, guaranteed profits, daily
              trading calls — PrimeIdea Ventures provides structured research ideas, rationale, risk
              classification, portfolio review, and suitability notes instead.
            </p>
          </FadeUpOneByOneAnimation>
        </div>
      </section>

      {/* Portfolio review */}
      <section aria-labelledby="rpc-review-heading" className="bg-[#F6FDFF] py-14 md:py-16">
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <SectionHeading
            eyebrow="Portfolio support"
            id="rpc-review-heading"
            title={
              <>
                Existing portfolio review &{" "}
                <strong className="font-semibold">rebalancing support</strong>
              </>
            }
            description="Members can request a review of their existing portfolio. PrimeIdea Ventures may review asset allocation, mutual fund overlap, fund category concentration, equity exposure, risk concentration, fixed income allocation, insurance adequacy, and goal alignment — and may provide research-led rebalancing recommendations."
          />
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 list-none m-0 p-0">
            {REVIEW_ITEMS.map(({ label, Icon, wide }) => (
              <li key={label} className={wide ? "sm:col-span-2" : undefined}>
                <FadeUpOneByOneAnimation
                  className={`flex gap-3 rounded-[18px] border border-[#E3ECF5] bg-white p-4 md:p-5 h-full ${cardHover}`}
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#293C7D]/8 text-[#293C7D]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm md:text-[15px] text-[#4D4D4D] leading-relaxed pt-1.5">
                    {label}
                  </span>
                </FadeUpOneByOneAnimation>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Research note format + risk + timestamps */}
      <section aria-labelledby="rpc-format-heading" className="bg-white py-14 md:py-16">
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            <div className="rounded-[24px] border border-[#E3ECF5] bg-[#F6FDFF]/50 p-6 md:p-8">
              <SectionHeading
                eyebrow="Research standards"
                id="rpc-format-heading"
                title={
                  <>
                    Research note <strong className="font-semibold">format</strong>
                  </>
                }
                description="Each research idea or portfolio note is structured for clarity and compliance."
              />
              <ol className="space-y-2.5 list-none m-0 p-0 counter-reset-none">
                {RESEARCH_NOTE_FIELDS.map((field, index) => (
                  <li
                    key={field}
                    className="flex gap-3 rounded-xl border border-[#E3ECF5] bg-white px-3.5 py-2.5 text-sm text-[#4D4D4D]"
                  >
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#293C7D] text-[11px] font-bold !text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {field}
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-[24px] border border-[#E3ECF5] bg-white p-6 md:p-8 shadow-[0_20px_50px_-42px_rgba(41,60,125,0.35)]">
              <SectionHeading
                eyebrow="Risk labels"
                id="rpc-risk-heading"
                title={
                  <>
                    Risk classification for{" "}
                    <strong className="font-semibold">every investment idea</strong>
                  </>
                }
                description="Risk classification helps investors understand whether an idea is conservative, moderate, aggressive, tactical, long-term, or educational. It does not remove market risk and does not guarantee any outcome."
              />
              <div className="flex flex-wrap gap-2 mb-8">
                {RISK_LABELS.map(({ label, tone }) => (
                  <span
                    key={label}
                    className={`inline-flex rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-transform duration-200 hover:scale-[1.03] ${tone}`}
                  >
                    {label}
                  </span>
                ))}
              </div>
              <div className="rounded-[20px] border border-[#479AD2]/20 bg-gradient-to-br from-[#F6FDFF] to-white p-5 md:p-6">
                <div className="flex gap-3 mb-2">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#479AD2]/15">
                    <ClockIcon className="h-5 w-5 text-[#293C7D]" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-semibold text-[#2D2D2D] m-0 pt-1.5">
                    Time-stamped research views
                  </h3>
                </div>
                <p className="text-sm text-[#4D4D4D] leading-relaxed m-0">
                  Research views may change due to market price, valuation, earnings, interest
                  rates, liquidity, regulation, taxation, macroeconomic data, or product-level risk.
                  Every research note should mention publication date, review date, and validity
                  period where applicable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email + KYC */}
      <section
        aria-labelledby="rpc-comms-heading"
        className="relative overflow-hidden bg-[#232D63] py-14 md:py-16"
      >
        <div
          className="absolute inset-0 bg-[url('/images/insurance/risk-management/bg.png')] bg-repeat bg-contain opacity-40"
          aria-hidden="true"
        />
        <div className="relative mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
            <FadeUpOneByOneAnimation className="rounded-[24px] border border-white/15 bg-[#293C7D]/40 backdrop-blur-sm p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] !text-[#FFC300] mb-3 m-0">
                Communication
              </p>
              <h2
                id="rpc-comms-heading"
                className="text-[26px] md:text-[32px] font-light !text-white leading-[125%] mb-4"
              >
                Email-only queries &{" "}
                <strong className="font-semibold !text-white">research updates</strong>
              </h2>
              <ul className="space-y-2.5 text-sm leading-relaxed mb-6 list-none m-0 p-0">
                <li className="!text-white">Primary communication mode is email.</li>
                <li className="!text-white">Research updates are primarily shared through email.</li>
                <li className="!text-white">Clients raise queries through email only.</li>
                <li className="!text-white">
                  Query email:{" "}
                  <a href={MAILTO} className="font-semibold !text-[#FFC300] hover:underline">
                    {QUERY_EMAIL}
                  </a>
                </li>
                <li className="!text-white">
                  No WhatsApp-based research query system at this stage.
                </li>
                <li className="!text-white">No client dashboard or member login at this stage.</li>
              </ul>
              <Link
                href={MAILTO}
                className="inline-flex items-center gap-2 rounded-xl bg-[#FFC300] px-5 py-3 text-sm font-bold text-[#232D63] transition-all duration-200 hover:bg-white hover:-translate-y-0.5"
              >
                <EnvelopeIcon className="h-5 w-5" aria-hidden="true" />
                Raise Query by Email
              </Link>
            </FadeUpOneByOneAnimation>
            <FadeUpOneByOneAnimation className="rounded-[24px] border border-white/15 bg-[#293C7D]/40 backdrop-blur-sm p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] !text-[#FFC300] mb-3 m-0">
                Onboarding
              </p>
              <h2 className="text-[26px] md:text-[32px] font-light !text-white leading-[125%] mb-4">
                Offline KYC &{" "}
                <strong className="font-semibold !text-white">subscription activation</strong>
              </h2>
              <p className="text-sm !text-white leading-relaxed mb-5 m-0">
                Subscription onboarding and KYC are handled offline by PrimeIdea Ventures. Clients
                who request access are contacted for required documentation, suitability
                understanding, payment process, and subscription activation. Online KYC may be
                introduced later depending on client traction and operational requirements.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-2 text-xs font-semibold !text-white">
                  <ShieldCheckIcon className="h-4 w-4" aria-hidden="true" />
                  SEBI RA-led process
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-2 text-xs font-semibold !text-white">
                  <UserGroupIcon className="h-4 w-4" aria-hidden="true" />
                  Retail investors welcome
                </span>
              </div>
            </FadeUpOneByOneAnimation>
          </div>
        </div>
      </section>

      {/* Who can / should not */}
      <section aria-labelledby="rpc-fit-heading" className="bg-white py-14 md:py-16">
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <SectionHeading
            eyebrow="Suitability"
            id="rpc-fit-heading"
            title={
              <>
                Who this subscription is{" "}
                <strong className="font-semibold">for — and not for</strong>
              </>
            }
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <FadeUpOneByOneAnimation
              className={`rounded-[24px] border border-[#C6E7D4] bg-gradient-to-br from-[#F0FBF4] to-white p-6 md:p-7 shadow-[0_20px_45px_-38px_rgba(31,107,58,0.35)] ${cardHover}`}
            >
              <h3 className="text-lg font-bold text-[#293C7D] mb-4 flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#E8F6EE]">
                  <CheckCircleIcon className="h-5 w-5 text-[#1F6B3A]" aria-hidden="true" />
                </span>
                Who can join
              </h3>
              <ul className="space-y-2.5 list-none m-0 p-0">
                {WHO_CAN_JOIN.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-[#4D4D4D] leading-relaxed flex gap-2.5 pl-1"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1F6B3A]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeUpOneByOneAnimation>
            <FadeUpOneByOneAnimation
              className={`rounded-[24px] border border-[#FECACA] bg-gradient-to-br from-[#FFF8F8] to-white p-6 md:p-7 shadow-[0_20px_45px_-38px_rgba(180,83,9,0.2)] ${cardHover}`}
            >
              <h3 className="text-lg font-bold text-[#293C7D] mb-4 flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#FEF3C7]">
                  <XCircleIcon className="h-5 w-5 text-[#B45309]" aria-hidden="true" />
                </span>
                Who should not join
              </h3>
              <p className="text-sm text-[#4D4D4D] mb-3">
                This subscription may not be suitable for investors looking for:
              </p>
              <ul className="space-y-2.5 list-none m-0 p-0">
                {WHO_SHOULD_NOT.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-[#4D4D4D] leading-relaxed flex gap-2.5 pl-1"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B45309]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeUpOneByOneAnimation>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section aria-label="Research credentials" className="bg-[#F6FDFF] py-12 border-y border-[#E3ECF5]">
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
            {[
              {
                title: "SEBI Registered Research Analyst",
                text: "Partha Shah, INH000017815 — verify on the official SEBI website.",
                Icon: ShieldCheckIcon,
              },
              {
                title: "Process-first research",
                text: "Structured ideas, risk labels, and portfolio review — not product pushing.",
                Icon: BeakerIcon,
              },
              {
                title: "No return promises",
                text: "Investments in securities markets are subject to market risks.",
                Icon: ChartBarIcon,
              },
            ].map(({ title, text, Icon }) => (
              <FadeUpOneByOneAnimation
                key={title}
                className={`relative overflow-hidden rounded-[22px] border border-[#E3ECF5] bg-white p-5 md:p-6 ${cardHover}`}
              >
                <div
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#479AD2] via-[#293C7D] to-[#FFC300]"
                  aria-hidden="true"
                />
                <Icon className="h-7 w-7 text-[#479AD2] mb-3 mt-1" aria-hidden="true" />
                <h3 className="text-base font-bold text-[#293C7D] mb-1">{title}</h3>
                <p className="text-sm text-[#4D4D4D] leading-relaxed m-0">{text}</p>
              </FadeUpOneByOneAnimation>
            ))}
          </div>
        </div>
      </section>

      <ResearchPrivilegeClubForm />

      {/* Mandatory disclosures */}
      <section
        aria-labelledby="rpc-disclosures-heading"
        className="relative overflow-hidden bg-gradient-to-b from-white via-[#F6FDFF] to-white py-14 md:py-16"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 10% 20%, rgba(71,154,210,0.1), transparent 45%), radial-gradient(circle at 90% 80%, rgba(41,60,125,0.06), transparent 40%)",
          }}
        />
        <div className="relative mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-8 md:mb-10">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Disclosures"
                id="rpc-disclosures-heading"
                title={
                  <>
                    Mandatory <strong className="font-semibold">disclosures</strong>
                  </>
                }
                description="Regulatory context for PrimeIdea Research Privilege Club — read alongside scheme documents and your own suitability assessment."
              />
            </div>
            <FadeUpOneByOneAnimation className="lg:col-span-7">
              <div className="rounded-[22px] border border-[#293C7D]/15 bg-gradient-to-br from-[#232D63] to-[#293C7D] p-5 md:p-6 shadow-[0_24px_50px_-36px_rgba(35,45,99,0.55)]">
                <div className="flex gap-3 items-start">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFC300]/20">
                    <ShieldCheckIcon className="h-6 w-6 !text-[#FFC300]" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] !text-[#FFC300] m-0 mb-1">
                      Investor notice
                    </p>
                    <p className="text-sm md:text-[15px] !text-white/90 leading-relaxed m-0">
                      This subscription provides research and portfolio review support. It is not a
                      guarantee of returns, not trade execution, and not a substitute for reading
                      official product and regulatory documents.
                    </p>
                  </div>
                </div>
              </div>
            </FadeUpOneByOneAnimation>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none m-0 p-0 mb-8">
            {MANDATORY_DISCLOSURES.map(({ title, text, Icon, tone, iconTone }) => (
              <li
                key={title}
                className={title === "Member responsibilities" ? "md:col-span-2" : undefined}
              >
                <FadeUpOneByOneAnimation
                  className={`h-full rounded-[20px] border p-5 md:p-6 ${tone} ${cardHover}`}
                >
                  <div className="flex gap-4">
                    <span
                      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${iconTone}`}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-sm font-bold text-[#232D63] mb-1.5 m-0">{title}</h3>
                      <p className="text-sm text-[#4D4D4D] leading-relaxed m-0">{text}</p>
                    </div>
                  </div>
                </FadeUpOneByOneAnimation>
              </li>
            ))}
          </ul>

          <FadeUpOneByOneAnimation className="rounded-[22px] border border-[#E3ECF5] bg-white p-5 md:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-[0_16px_40px_-32px_rgba(41,60,125,0.35)]">
            <div>
              <p className="text-sm font-semibold text-[#293C7D] m-0 mb-1">
                Full regulatory pack
              </p>
              <p className="text-sm text-[#6B7C8A] m-0 leading-relaxed">
                Investor Charter, grievance redressal, complaint status, and SEBI RA verification.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href="/regulatory-disclosures"
                className="inline-flex items-center gap-2 rounded-xl bg-[#293C7D] px-5 py-3 text-sm font-bold !text-white hover:bg-[#232D63] transition-all hover:-translate-y-0.5"
              >
                Regulatory Disclosures
                <ArrowLongRightIcon className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/sebi-registered-research-analyst"
                className="inline-flex items-center gap-2 rounded-xl border border-[#D0E0EC] px-5 py-3 text-sm font-bold text-[#293C7D] hover:border-[#293C7D] transition-all hover:-translate-y-0.5"
              >
                SEBI RA credentials
              </Link>
            </div>
          </FadeUpOneByOneAnimation>
        </div>
      </section>

      {/* Related links */}
      <section aria-labelledby="rpc-related-heading" className="bg-[#F6FDFF] py-14 md:py-16">
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <h2
            id="rpc-related-heading"
            className="text-[24px] md:text-[30px] font-semibold text-[#2D2D2D] mb-8 tracking-tight"
          >
            Related pages
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {RELATED_FROM_PAGE.map(({ title, href, description, Icon }) => (
              <Link
                key={href}
                href={href}
                className={`group flex h-full flex-col rounded-[20px] border border-[#E3ECF5] bg-white p-5 ${cardHover}`}
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#293C7D]/8 text-[#293C7D] mb-3 group-hover:bg-[#293C7D] group-hover:text-white transition-colors">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-base font-bold text-[#293C7D] mb-1 group-hover:text-[#232D63]">
                  {title}
                </h3>
                <p className="text-sm text-[#4D4D4D] leading-relaxed flex-1">{description}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#479AD2] opacity-0 group-hover:opacity-100 transition-opacity">
                  Open page
                  <ArrowLongRightIcon className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
