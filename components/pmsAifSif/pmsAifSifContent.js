"use client";

import { useState } from "react";
import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import Image from "next/image";
import Link from "next/link";
import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  ArrowRightIcon,
  BanknotesIcon,
  BeakerIcon,
  BuildingLibraryIcon,
  CheckCircleIcon,
  ClipboardDocumentCheckIcon,
  DocumentChartBarIcon,
  DocumentTextIcon,
  NoSymbolIcon,
  PresentationChartLineIcon,
  ScaleIcon,
  ShieldExclamationIcon,
  UserGroupIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const BOOK_HREF =
  "/book-portfolio-review?service=PMS%20%2F%20AIF%20%2F%20SIF%20Suitability%20Review";

const trustChips = [
  "Suitability first",
  "Where permitted only",
  "No return promises",
  "SEBI RA INH000017815",
];

const sectionAnchors = [
  { id: "pms-product-education", label: "Products" },
  { id: "pms-compare", label: "Compare" },
  { id: "pms-decide", label: "Decide" },
  { id: "pms-process", label: "Process" },
  { id: "pms-checkpoints", label: "Checkpoints" },
];

const resourceLinks = [
  {
    title: "SIF / PMS / AIF education notes",
    description:
      "Suitability-first education in the Research Reports library — separate from blogs.",
    href: "/research-reports",
    cta: "Open Research Reports",
    Icon: DocumentTextIcon,
    badge: "Library",
  },
  {
    title: "Portfolio Review Framework",
    description:
      "Download the structured checklist used in research-led portfolio health checks.",
    href: "/docs/portfolio-review-framework.pdf",
    cta: "Download PDF",
    Icon: ArrowDownTrayIcon,
    badge: "PDF",
    external: true,
  },
  {
    title: "Private Wealth Management",
    description:
      "HNI and family portfolio support across Gujarat and India — often the entry point for alt reviews.",
    href: "/private-wealth-management-gujarat-india",
    cta: "Open private wealth",
    Icon: UserGroupIcon,
    badge: "Service",
  },
];

const whoItsFor = [
  {
    title: "HNI and family books across Gujarat",
    description:
      "Multi-product portfolios where managed or alternate strategies may be relevant — reviewed from the Vadodara base.",
    Icon: UserGroupIcon,
  },
  {
    title: "Investors comparing MF vs PMS / AIF",
    description:
      "Want clarity on costs, liquidity, and concentration before adding a managed sleeve.",
    Icon: ScaleIcon,
  },
  {
    title: "Clients across India by video",
    description:
      "Same suitability-led review by video. Naming other cities does not mean PrimeIdea has offices there.",
    Icon: BuildingLibraryIcon,
  },
];

const productLenses = [
  {
    id: "pms",
    short: "PMS",
    title: "Portfolio Management Services",
    tagline: "Managed portfolios with a defined mandate",
    description:
      "Discretionary or non-discretionary managed portfolios. Reviewed for strategy fit, concentration, costs, liquidity, and whether the mandate still matches the household — not past return alone.",
    Icon: PresentationChartLineIcon,
    accent: "from-[#232D63] to-[#293C7D]",
    checks: [
      "Mandate vs household goals",
      "Fee structure and net impact",
      "Stock / sector concentration",
      "Overlap with mutual funds & equity",
      "Liquidity and review cadence",
    ],
  },
  {
    id: "aif",
    short: "AIF",
    title: "Alternative Investment Funds",
    tagline: "Higher minimums, often lower liquidity",
    description:
      "Category I / II / III structures with higher entry thresholds. Suitability checks cover who should consider them, who should skip them, and how they sit next to mutual funds and equity.",
    Icon: BuildingLibraryIcon,
    accent: "from-[#1E4A6E] to-[#479AD2]",
    checks: [
      "Category and strategy fit",
      "Minimum commitment size",
      "Lock-in / exit path",
      "Role vs listed equity & MF",
      "Disclosure and risk clarity",
    ],
  },
  {
    id: "sif",
    short: "SIF",
    title: "Specialized Investment Funds",
    tagline: "Specialized strategies — education first",
    description:
      "Specialized strategies with distinct risk, liquidity, and disclosure profiles. Structure, costs, and role in the book are reviewed before any distribution conversation.",
    Icon: BeakerIcon,
    accent: "from-[#7A5A00] to-[#C9A227]",
    checks: [
      "Strategy complexity vs need",
      "Liquidity and holding period",
      "Cost vs intended outcome",
      "Concentration and correlation",
      "Document / risk understanding",
    ],
  },
];

const comparisonRows = [
  {
    lens: "Typical starting point",
    mf: "SIPs & scheme mix",
    pms: "Managed mandate",
    aif: "Alt / private sleeve",
  },
  {
    lens: "Liquidity focus",
    mf: "Usually higher",
    pms: "Strategy-dependent",
    aif: "Often lower / lock-ins",
  },
  {
    lens: "Cost lens",
    mf: "Expense ratio, exit load",
    pms: "Management / performance fees",
    aif: "Fund & structure costs",
  },
  {
    lens: "Key review question",
    mf: "Overlap & role in book",
    pms: "Does mandate still fit?",
    aif: "Who should skip this?",
  },
];

const considerItems = [
  {
    title: "Complex multi-product book",
    text: "You already hold MF, equity, and possibly managed sleeves — and need one suitability picture.",
  },
  {
    title: "Clear liquidity buffer elsewhere",
    text: "Near-term cash needs are covered so illiquid structures are not funding emergencies.",
  },
  {
    title: "Willingness to read documents",
    text: "You want to understand fees, lock-ins, and strategy risk before committing capital.",
  },
];

const skipItems = [
  {
    title: "Product sold only on past return",
    text: "If the pitch starts with “performance” and skips costs, liquidity, and fit — pause.",
  },
  {
    title: "Cash needed soon",
    text: "Short horizons and lock-ins rarely mix. Liquidity risk is reviewed before size.",
  },
  {
    title: "No distribution / eligibility path",
    text: "Not every product is available to every investor. Empanelment and compliance come first.",
  },
];

const reviewSteps = [
  {
    step: "01",
    title: "Map the current book",
    text: "Holdings, goals, liquidity needs, and existing concentration — before naming a product.",
    Icon: DocumentChartBarIcon,
  },
  {
    step: "02",
    title: "Test suitability",
    text: "Minimums, fees, lock-ins, overlap, and whether MF / equity already do the job.",
    Icon: ScaleIcon,
  },
  {
    step: "03",
    title: "Decide keep / review / skip",
    text: "Written next steps without return promises or product pressure.",
    Icon: ClipboardDocumentCheckIcon,
  },
];

const supportAreas = [
  {
    title: "Suitability before product",
    description:
      "Goals, time horizon, liquidity needs, and existing concentration reviewed before any PMS, AIF, or SIF conversation.",
    Icon: ScaleIcon,
  },
  {
    title: "Minimums, costs, and fees",
    description:
      "Entry thresholds, management fees, and other costs checked so the structure is usable — not only interesting on paper.",
    Icon: BanknotesIcon,
  },
  {
    title: "Liquidity and lock-in",
    description:
      "Exit paths, lock-ins, and cash-need timing reviewed. Illiquidity is treated as a risk, not a feature to ignore.",
    Icon: ShieldExclamationIcon,
  },
  {
    title: "Concentration and overlap",
    description:
      "How a managed strategy overlaps with mutual funds, direct equity, or other alts already held.",
    Icon: ClipboardDocumentCheckIcon,
  },
  {
    title: "Where distribution is permitted",
    description:
      "Discussed only where empanelment and compliance rights exist. Not every book needs PMS, AIF, or SIF.",
    Icon: AcademicCapIcon,
  },
  {
    title: "Written next steps",
    description:
      "A clear view of what to keep, what to review further, and what to skip — without return promises.",
    Icon: PresentationChartLineIcon,
  },
];

const relatedPages = [
  {
    step: "01",
    title: "Private Wealth Management",
    href: "/private-wealth-management-gujarat-india",
    description: "HNI and family portfolio support across Gujarat and India.",
    cta: "Open private wealth",
    Icon: UserGroupIcon,
  },
  {
    step: "02",
    title: "Portfolio Review",
    href: "/portfolio-review",
    description: "Upload holdings or book an office or video review.",
    cta: "Upload portfolio",
    Icon: ClipboardDocumentCheckIcon,
  },
  {
    step: "03",
    title: "Mutual Fund Support",
    href: "/mutual-fund-investment-support",
    description: "SIP, overlap, and scheme-role review for fund holdings.",
    cta: "Review mutual funds",
    Icon: PresentationChartLineIcon,
  },
  {
    step: "04",
    title: "Research Process",
    href: "/research-process",
    description: "The five-step method behind product and portfolio review.",
    cta: "See the method",
    Icon: BeakerIcon,
  },
];

export default function PmsAifSifContent() {
  const [activeProduct, setActiveProduct] = useState("pms");
  const active = productLenses.find((p) => p.id === activeProduct) || productLenses[0];
  const ActiveIcon = active.Icon;

  const focusProduct = (id) => {
    setActiveProduct(id);
    document.getElementById("pms-product-education")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      {/* Intro */}
      <section
        aria-labelledby="pms-intro-heading"
        className="relative overflow-hidden bg-white pt-10 pb-14 md:pt-12 md:pb-16"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(71,154,210,0.14) 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="relative mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <div className="mb-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { label: "Geography", value: "Gujarat & India" },
              { label: "Base office", value: "Vadodara" },
              { label: "Registration", value: "INH000017815" },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="rounded-2xl border border-[#D0E0EC] bg-gradient-to-br from-[#232D63] to-[#293C7D] px-4 py-3.5 shadow-[0_16px_40px_-28px_rgba(35,45,99,0.55)]"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] !text-[#FFC300] mb-1 m-0">
                  {label}
                </p>
                <p className="text-sm md:text-base font-semibold !text-white m-0 tabular-nums">
                  {value}
                </p>
              </div>
            ))}
          </div>

          <nav
            aria-label="Page sections"
            className="mb-10 hidden lg:flex flex-wrap gap-2 rounded-2xl border border-[#D0E0EC] bg-[#F6FDFF] p-2 sticky top-[76px] z-20 shadow-[0_12px_32px_-24px_rgba(41,60,125,0.45)]"
          >
            {sectionAnchors.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="rounded-xl px-4 py-2 text-sm font-semibold text-[#293C7D] hover:bg-white hover:border-[#293C7D]/20 border border-transparent transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-6">
              <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-3">
                PMS · AIF · SIF support
              </p>
              <h2
                id="pms-intro-heading"
                className="text-[28px] md:text-[36px] font-light text-[#2D2D2D] leading-[120%] mb-4"
              >
                Suitability first —{" "}
                <strong className="font-semibold">not a product push</strong>
              </h2>
              <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed mb-4">
                PrimeIdea Ventures is a Vadodara-based research-led wealth management and
                portfolio review firm serving investors across Gujarat and India. PMS, AIF,
                and SIF investment support is guided by Partha Shah, SEBI Registered Research
                Analyst INH000017815.
              </p>
              <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed mb-6">
                These products are discussed only where they may be suitable and where
                distribution and compliance rights exist. Many reviews stay with mutual funds,
                equity, and fixed income — without return promises.
              </p>
              <ul className="flex flex-wrap gap-2 list-none m-0 p-0 mb-6">
                {trustChips.map((chip) => (
                  <li
                    key={chip}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#D0E0EC] bg-[#F6FDFF] px-3 py-1.5 text-[11px] font-semibold text-[#293C7D]"
                  >
                    <CheckCircleIcon className="h-3.5 w-3.5 text-[#479AD2]" aria-hidden="true" />
                    {chip}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={BOOK_HREF}
                  className="group inline-flex items-center gap-2 rounded-xl bg-[#FFC300] px-5 py-3 text-sm font-bold text-[#232D63] hover:bg-[#293C7D] hover:!text-white transition-colors"
                >
                  Book suitability review
                  <Image
                    src="/images/icons/arrow-square-right-dark.png"
                    width={18}
                    height={18}
                    alt=""
                    className="transition-[filter] group-hover:brightness-0 group-hover:invert"
                  />
                </Link>
                <Link
                  href="/research-process"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#D0E0EC] bg-white px-5 py-3 text-sm font-bold text-[#293C7D] hover:border-[#293C7D] transition-colors"
                >
                  View research process
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#479AD2] m-0">
                Jump to product education
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3 list-none m-0 p-0">
                {productLenses.map((product) => {
                  const Icon = product.Icon;
                  const selected = product.id === activeProduct;
                  return (
                    <li key={product.id}>
                      <button
                        type="button"
                        onClick={() => focusProduct(product.id)}
                        className={`group flex w-full gap-4 rounded-2xl border p-4 text-left transition-all ${
                          selected
                            ? "border-[#293C7D] bg-[#293C7D] shadow-[0_18px_40px_-28px_rgba(35,45,99,0.55)]"
                            : "border-[#E3ECF5] bg-[#F6FDFF] hover:border-[#293C7D]/35"
                        }`}
                      >
                        <span
                          className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${product.accent} text-[#FFC300]`}
                        >
                          <Icon className="h-6 w-6" aria-hidden="true" />
                        </span>
                        <span className="min-w-0">
                          <p
                            className={`text-[11px] font-bold uppercase tracking-[0.12em] mb-0.5 m-0 ${
                              selected ? "!text-[#FFC300]" : "text-[#479AD2]"
                            }`}
                          >
                            {product.short}
                          </p>
                          <p
                            className={`text-sm font-semibold m-0 leading-snug ${
                              selected ? "!text-white" : "text-[#293C7D]"
                            }`}
                          >
                            {product.tagline}
                          </p>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>

              <ul className="grid grid-cols-1 gap-2 list-none m-0 p-0 pt-2">
                {whoItsFor.map((item, index) => {
                  const Icon = item.Icon;
                  return (
                    <li key={item.title}>
                      <FadeUpOneByOneAnimation className="group flex gap-3 rounded-xl border border-[#E3ECF5] bg-white px-4 py-3 hover:border-[#293C7D]/30 transition-colors">
                        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F6FDFF] border border-[#E3ECF5] text-[#293C7D]">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span className="min-w-0">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#7A93A8] mb-0.5 m-0">
                            {String(index + 1).padStart(2, "0")} · Who it&apos;s for
                          </p>
                          <p className="text-sm font-semibold text-[#2D2D2D] m-0 leading-snug">
                            {item.title}
                          </p>
                        </span>
                      </FadeUpOneByOneAnimation>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive product lenses */}
      <section
        id="pms-product-education"
        aria-labelledby="pms-lenses-heading"
        className="scroll-mt-28 bg-[#F6FDFF] py-14 md:py-16"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <FadeUpOneByOneAnimation className="max-w-[720px] mb-8 md:mb-10">
            <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-3">
              Product education
            </p>
            <h2
              id="pms-lenses-heading"
              className="text-[28px] md:text-[36px] font-light text-[#2D2D2D] leading-[120%] mb-3"
            >
              What PMS, AIF, and SIF{" "}
              <strong className="font-semibold">mean in a review</strong>
            </h2>
            <p className="text-base text-[#4D4D4D] leading-relaxed m-0">
              Education and suitability context only. Availability depends on empanelment,
              eligibility, and compliance. Read all offer documents carefully.
            </p>
          </FadeUpOneByOneAnimation>

          <div
            className="mb-5 flex flex-wrap gap-2 p-1.5 rounded-2xl border border-[#D0E0EC] bg-white w-fit max-w-full"
            role="tablist"
            aria-label="Product type"
          >
            {productLenses.map((product) => {
              const selected = product.id === activeProduct;
              const TabIcon = product.Icon;
              return (
                <button
                  key={product.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveProduct(product.id)}
                  className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                    selected
                      ? "bg-[#293C7D] !text-white shadow-sm"
                      : "text-[#293C7D] hover:bg-[#F6FDFF]"
                  }`}
                >
                  <TabIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {product.short}
                </button>
              );
            })}
          </div>

          <FadeUpOneByOneAnimation
            key={active.id}
            className="relative overflow-hidden rounded-[28px] border border-[#D0E0EC] bg-white shadow-[0_24px_50px_-36px_rgba(35,45,99,0.45)]"
          >
            <div className={`h-1.5 w-full bg-gradient-to-r ${active.accent}`} />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="lg:col-span-7 p-6 md:p-8 lg:p-10">
                <div className="flex items-start gap-4 mb-5">
                  <span
                    className={`inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${active.accent} text-[#FFC300]`}
                  >
                    <ActiveIcon className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#479AD2] mb-1 m-0">
                      {active.short}
                    </p>
                    <h3 className="text-[22px] md:text-[26px] font-semibold text-[#2D2D2D] m-0 leading-tight">
                      {active.title}
                    </h3>
                    <p className="text-sm font-medium text-[#5A5A5A] mt-1 m-0">
                      {active.tagline}
                    </p>
                  </div>
                </div>
                <p className="text-base text-[#4D4D4D] leading-relaxed mb-6">
                  {active.description}
                </p>
                <Link
                  href={BOOK_HREF}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#293C7D] hover:text-[#232D63]"
                >
                  Discuss suitability for {active.short}
                  <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>

              <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-[#E3ECF5] bg-[#F8FCFF] p-6 md:p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#479AD2] mb-4 m-0">
                  Review checkpoints
                </p>
                <ul className="space-y-3 list-none m-0 p-0">
                  {active.checks.map((check) => (
                    <li key={check} className="flex items-start gap-3">
                      <CheckCircleIcon
                        className="mt-0.5 h-5 w-5 shrink-0 text-[#479AD2]"
                        aria-hidden="true"
                      />
                      <span className="text-sm md:text-[15px] font-medium text-[#2D2D2D] leading-snug">
                        {check}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeUpOneByOneAnimation>
        </div>
      </section>

      {/* Comparison */}
      <section
        id="pms-compare"
        aria-labelledby="pms-compare-heading"
        className="scroll-mt-28 bg-white py-14 md:py-16"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <FadeUpOneByOneAnimation className="max-w-[720px] mb-8 md:mb-10">
            <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-3">
              Context, not ranking
            </p>
            <h2
              id="pms-compare-heading"
              className="text-[28px] md:text-[36px] font-light text-[#2D2D2D] leading-[120%] mb-3"
            >
              How MF, PMS, and AIF differ{" "}
              <strong className="font-semibold">in a review lens</strong>
            </h2>
            <p className="text-base text-[#4D4D4D] leading-relaxed m-0">
              Educational comparison only — not a recommendation hierarchy. SIF is reviewed with
              the same suitability filters as other specialized strategies.
            </p>
          </FadeUpOneByOneAnimation>

          <div className="overflow-x-auto rounded-[24px] border border-[#E3ECF5] bg-[#F6FDFF] shadow-[0_20px_50px_-36px_rgba(41,60,125,0.35)]">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="bg-gradient-to-r from-[#232D63] to-[#293C7D]">
                  <th className="px-4 py-3.5 text-xs font-bold uppercase tracking-wider !text-white/80">
                    Lens
                  </th>
                  <th className="px-4 py-3.5 text-xs font-bold uppercase tracking-wider !text-[#FFC300]">
                    Mutual funds
                  </th>
                  <th className="px-4 py-3.5 text-xs font-bold uppercase tracking-wider !text-[#FFC300]">
                    PMS
                  </th>
                  <th className="px-4 py-3.5 text-xs font-bold uppercase tracking-wider !text-[#FFC300]">
                    AIF
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.lens}
                    className={i % 2 === 0 ? "bg-white" : "bg-[#F6FDFF]"}
                  >
                    <th className="px-4 py-3.5 text-sm font-semibold text-[#293C7D] align-top">
                      {row.lens}
                    </th>
                    <td className="px-4 py-3.5 text-sm text-[#4D4D4D]">{row.mf}</td>
                    <td className="px-4 py-3.5 text-sm text-[#4D4D4D]">{row.pms}</td>
                    <td className="px-4 py-3.5 text-sm text-[#4D4D4D]">{row.aif}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-[#6B7C8A] leading-relaxed m-0">
            Investments are subject to market risks. Read all scheme / offer documents carefully.
            PrimeIdea does not guarantee returns.
          </p>
        </div>
      </section>

      {/* Consider / Skip */}
      <section
        id="pms-decide"
        aria-labelledby="pms-decide-heading"
        className="scroll-mt-28 bg-[#F6FDFF] py-14 md:py-16"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <FadeUpOneByOneAnimation className="max-w-[720px] mb-8 md:mb-10">
            <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-3">
              Decision framing
            </p>
            <h2
              id="pms-decide-heading"
              className="text-[28px] md:text-[36px] font-light text-[#2D2D2D] leading-[120%] mb-3"
            >
              When to consider —{" "}
              <strong className="font-semibold">and when to skip</strong>
            </h2>
          </FadeUpOneByOneAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">
            <FadeUpOneByOneAnimation className="rounded-[24px] border border-[#D0E0EC] bg-white p-6 md:p-7">
              <div className="mb-5 flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8F6EE] text-[#1F7A4D]">
                  <CheckCircleIcon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="text-xl font-bold text-[#293C7D] m-0">May be worth discussing</h3>
              </div>
              <ul className="space-y-4 list-none m-0 p-0">
                {considerItems.map((item) => (
                  <li key={item.title}>
                    <p className="text-sm font-semibold text-[#2D2D2D] mb-1 m-0">{item.title}</p>
                    <p className="text-sm text-[#4D4D4D] leading-relaxed m-0">{item.text}</p>
                  </li>
                ))}
              </ul>
            </FadeUpOneByOneAnimation>

            <FadeUpOneByOneAnimation className="rounded-[24px] border border-[#E8D5D5] bg-white p-6 md:p-7">
              <div className="mb-5 flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#FCEEEE] text-[#A33B3B]">
                  <NoSymbolIcon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="text-xl font-bold text-[#293C7D] m-0">Often better to pause</h3>
              </div>
              <ul className="space-y-4 list-none m-0 p-0">
                {skipItems.map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <XMarkIcon
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#A33B3B]"
                      aria-hidden="true"
                    />
                    <span>
                      <p className="text-sm font-semibold text-[#2D2D2D] mb-1 m-0">{item.title}</p>
                      <p className="text-sm text-[#4D4D4D] leading-relaxed m-0">{item.text}</p>
                    </span>
                  </li>
                ))}
              </ul>
            </FadeUpOneByOneAnimation>
          </div>
        </div>
      </section>

      {/* Process + leadership */}
      <section
        id="pms-process"
        aria-labelledby="pms-journey-heading"
        className="scroll-mt-28 border-t border-[#D6E4EE] bg-white py-12 md:py-16"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
            <div className="lg:col-span-7">
              <FadeUpOneByOneAnimation className="mb-6 max-w-[640px]">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#479AD2] mb-2">
                  How a review runs
                </p>
                <h2
                  id="pms-journey-heading"
                  className="text-[22px] md:text-[28px] font-light text-[#2D2D2D] m-0 mb-3"
                >
                  Three steps —{" "}
                  <strong className="font-semibold">process before product</strong>
                </h2>
                <p className="text-base text-[#4D4D4D] leading-relaxed m-0">
                  Managed and alternate strategies are reviewed in the same research-led
                  discipline as mutual funds and equity — suitability first, never guaranteed
                  returns.
                </p>
              </FadeUpOneByOneAnimation>

              <ol className="grid grid-cols-1 sm:grid-cols-3 gap-4 list-none m-0 p-0">
                {reviewSteps.map(({ step, title, text, Icon }) => (
                  <li key={step}>
                    <FadeUpOneByOneAnimation className="relative h-full overflow-hidden rounded-[22px] border border-[#D0E0EC] bg-[#F6FDFF] p-5">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#293C7D] text-[#FFC300] mb-3">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#7A93A8] mb-1 m-0">
                        {step}
                      </p>
                      <h3 className="text-base font-semibold text-[#2D2D2D] mb-1.5">{title}</h3>
                      <p className="text-sm text-[#5A5A5A] leading-relaxed m-0">{text}</p>
                    </FadeUpOneByOneAnimation>
                  </li>
                ))}
              </ol>
            </div>

            <div className="lg:col-span-5">
              <div className="relative h-full overflow-hidden rounded-[28px] border border-[#293C7D]/20 bg-gradient-to-br from-[#232D63] via-[#293C7D] to-[#1E3A5F] shadow-[0_24px_50px_-30px_rgba(35,45,99,0.65)]">
                <div
                  className="pointer-events-none absolute inset-0 opacity-35"
                  style={{
                    backgroundImage: "url('/images/insurance/risk-management/bg.png')",
                    backgroundRepeat: "repeat",
                    backgroundSize: "contain",
                  }}
                />
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#FFC300]/15 blur-2xl" />

                <div className="relative flex h-full flex-col p-5 md:p-6">
                  <div className="flex flex-wrap items-center gap-2 mb-5">
                    <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] !text-[#FFC300]">
                      Research leadership
                    </span>
                    <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] !text-white/70">
                      PMS · AIF · SIF context
                    </span>
                  </div>

                  <div className="flex items-center gap-4 mb-5">
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border-2 border-[#FFC300]/60 bg-[#232D63]">
                      <Image
                        src="/images/about-us/founder.jpg"
                        alt="Partha Shah, SEBI Registered Research Analyst"
                        fill
                        sizes="80px"
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xl font-bold !text-white m-0 leading-tight">
                        Partha Shah
                      </p>
                      <p className="text-sm !text-white/75 m-0 mt-1 leading-snug">
                        Head of Research &amp; Investment Strategy
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-3.5 mb-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] !text-white/55 m-0 mb-1">
                      SEBI registration
                    </p>
                    <p className="text-lg md:text-xl font-bold tabular-nums !text-[#FFC300] m-0 tracking-wide">
                      INH000017815
                    </p>
                    <p className="text-xs !text-white/65 m-0 mt-1.5 leading-relaxed">
                      SEBI Registered Research Analyst · Vadodara base · Gujarat &amp; India
                      reach
                    </p>
                  </div>

                  <p className="text-sm !text-white/80 leading-relaxed m-0 mb-5 flex-1">
                    Alternate and managed product conversations follow the same process-led
                    review used across the book — not product-push language and not return
                    promises.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <Link
                      href="/sebi-registered-research-analyst"
                      className="inline-flex flex-1 items-center justify-center rounded-xl bg-[#FFC300] px-4 py-3 text-sm font-bold text-[#232D63] hover:bg-white transition-colors"
                    >
                      Verify SEBI RA →
                    </Link>
                    <Link
                      href={BOOK_HREF}
                      className="inline-flex flex-1 items-center justify-center rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-sm font-bold !text-white hover:bg-white/20 transition-colors"
                    >
                      Book review
                    </Link>
                  </div>

                  <Link
                    href="/leadership-team"
                    className="mt-3 inline-flex items-center justify-center text-sm font-semibold !text-white/70 hover:!text-[#FFC300] transition-colors"
                  >
                    View leadership team →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Checkpoints bento */}
      <section
        id="pms-checkpoints"
        aria-labelledby="pms-support-heading"
        className="scroll-mt-28 bg-[#F6FDFF] py-14 md:py-16"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <FadeUpOneByOneAnimation className="max-w-[720px] mb-8 md:mb-10">
            <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-3">
              What we review
            </p>
            <h2
              id="pms-support-heading"
              className="text-[28px] md:text-[36px] font-light text-[#2D2D2D] leading-[120%] mb-3"
            >
              Checkpoints —{" "}
              <strong className="font-semibold">process first</strong>
            </h2>
          </FadeUpOneByOneAnimation>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none m-0 p-0">
            {supportAreas.map(({ title, description, Icon }) => (
                <li key={title}>
                  <FadeUpOneByOneAnimation className="group relative h-full overflow-hidden rounded-[22px] border border-[#E3ECF5] bg-white p-5 md:p-6 hover:border-[#293C7D]/40 transition-colors">
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#479AD2] via-[#293C7D] to-[#FFC300] opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#F6FDFF] border border-[#E3ECF5] mb-4 text-[#293C7D] group-hover:bg-[#293C7D] group-hover:!text-white group-hover:border-[#293C7D] transition-colors">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-bold text-[#293C7D] mb-2">{title}</h3>
                    <p className="text-sm text-[#4D4D4D] leading-relaxed m-0">{description}</p>
                  </FadeUpOneByOneAnimation>
                </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Research resources */}
      <section
        aria-labelledby="pms-resources-heading"
        className="border-t border-[#D6E4EE] bg-white py-12 md:py-16"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <FadeUpOneByOneAnimation className="mb-8 max-w-[680px]">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#479AD2] mb-2">
              Read before you decide
            </p>
            <h2
              id="pms-resources-heading"
              className="text-[22px] md:text-[28px] font-light text-[#2D2D2D] m-0 mb-3"
            >
              Education &amp;{" "}
              <strong className="font-semibold">research links</strong>
            </h2>
            <p className="text-base text-[#4D4D4D] m-0">
              Use reports and checklists for context — suitability decisions still need a
              research-led review of your holdings.
            </p>
          </FadeUpOneByOneAnimation>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 list-none m-0 p-0">
            {resourceLinks.map(({ title, description, href, cta, Icon, badge, external }) => (
              <li key={title}>
                <Link
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-[#D0E0EC] bg-[#F6FDFF] p-5 md:p-6 hover:border-[#293C7D] transition-colors"
                >
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#293C7D] text-[#FFC300]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="rounded-full bg-white border border-[#D6E4EE] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#479AD2]">
                      {badge}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-[#2D2D2D] mb-2">{title}</h3>
                  <p className="text-sm text-[#5A5A5A] leading-relaxed m-0 flex-1 mb-4">
                    {description}
                  </p>
                  <span className="text-sm font-semibold text-[#293C7D] inline-flex items-center gap-1">
                    {cta}
                    <span aria-hidden="true" className="!text-[#FFC300]">
                      →
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Next step CTA */}
      <section
        aria-labelledby="pms-next-heading"
        className="relative border-t border-[#D6E4EE] bg-white py-12 md:py-16"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#232D63] via-[#293C7D] to-[#1E3A5F] px-5 py-7 sm:px-7 md:px-9 md:py-9 shadow-[0_28px_60px_-36px_rgba(35,45,99,0.7)]">
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                backgroundImage: "url('/images/insurance/risk-management/bg.png')",
                backgroundRepeat: "repeat",
                backgroundSize: "contain",
              }}
            />
            <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#FFC300]/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 left-10 h-40 w-40 rounded-full bg-[#479AD2]/25 blur-3xl" />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              <div className="lg:col-span-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] !text-[#FFC300] mb-2 m-0">
                  Next step
                </p>
                <h2
                  id="pms-next-heading"
                  className="text-[22px] md:text-[28px] font-semibold !text-white mb-3 m-0 leading-tight"
                >
                  Ready for a suitability-led review?
                </h2>
                <p className="text-sm md:text-[15px] !text-white/75 leading-relaxed m-0 max-w-[560px]">
                  Share your goals, liquidity needs, and any existing PMS, AIF, or SIF exposure.
                  Review first — from Vadodara, across Gujarat and India. No guaranteed returns.
                </p>
                <ul className="mt-5 flex flex-wrap gap-2 list-none m-0 p-0">
                  {["Office or video", "Where permitted only", "Market risks apply"].map(
                    (label) => (
                      <li
                        key={label}
                        className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-semibold !text-white/80"
                      >
                        {label}
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3">
                <Link
                  href={BOOK_HREF}
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#FFC300] px-5 py-3.5 text-sm font-bold text-[#232D63] hover:bg-white transition-colors"
                >
                  Book suitability review
                  <Image
                    src="/images/icons/arrow-square-right-dark.png"
                    width={18}
                    height={18}
                    alt=""
                    className="transition-[filter] group-hover:brightness-110"
                  />
                </Link>
                <Link
                  href="/portfolio-review"
                  className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-5 py-3.5 text-sm font-bold !text-white hover:bg-white/20 transition-colors"
                >
                  Upload holdings
                </Link>
                <Link
                  href="/private-wealth-management-gujarat-india"
                  className="inline-flex items-center justify-center text-sm font-semibold !text-white/70 hover:!text-[#FFC300] transition-colors py-1"
                >
                  Or explore Private Wealth →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related next steps */}
      <section
        aria-labelledby="pms-related-heading"
        className="relative bg-[#F6FDFF] py-14 md:py-16"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(71,154,210,0.16) 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="relative mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <FadeUpOneByOneAnimation className="mb-7 md:mb-8 max-w-[680px]">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#479AD2] mb-2">
              Continue your journey
            </p>
            <h2
              id="pms-related-heading"
              className="text-[22px] md:text-[28px] font-light text-[#2D2D2D] mb-3 m-0"
            >
              Related <strong className="font-semibold">next steps</strong>
            </h2>
            <p className="text-base text-[#4D4D4D] m-0">
              Use this page for education, then continue with private wealth, portfolio upload,
              mutual fund review, or the research process.
            </p>
          </FadeUpOneByOneAnimation>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 list-none m-0 p-0">
            {relatedPages.map(({ step, title, href, description, cta, Icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-[#D0E0EC] bg-white p-5 md:p-6 transition-all hover:border-[#293C7D] hover:shadow-[0_18px_40px_-28px_rgba(41,60,125,0.55)]"
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-[#479AD2] via-[#293C7D] to-[#FFC300] transition-transform duration-300 group-hover:scale-x-100"
                  />
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#D6E4EE] bg-[#F6FDFF] text-[#293C7D] group-hover:bg-[#293C7D] group-hover:border-[#293C7D] group-hover:!text-white transition-colors">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="text-[11px] font-bold tabular-nums text-[#479AD2]">
                      {step}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#293C7D] mb-1">{title}</h3>
                  <p className="text-sm text-[#4D4D4D] leading-relaxed m-0 flex-1 mb-4">
                    {description}
                  </p>
                  <span className="text-sm font-semibold text-[#293C7D] inline-flex items-center gap-1">
                    {cta}
                    <span aria-hidden="true" className="!text-[#FFC300]">
                      →
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
