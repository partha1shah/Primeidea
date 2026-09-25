"use client";

import { useMemo, useState } from "react";
import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  ArrowPathIcon,
  BeakerIcon,
  BookOpenIcon,
  CalculatorIcon,
  ChartBarIcon,
  CheckBadgeIcon,
  ClipboardDocumentCheckIcon,
  DocumentTextIcon,
  FilmIcon,
  NewspaperIcon,
  PresentationChartBarIcon,
  QuestionMarkCircleIcon,
  RectangleStackIcon,
  ScaleIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "learn", label: "Learn" },
  { id: "process", label: "Process" },
  { id: "downloads", label: "Downloads" },
  { id: "events", label: "Events" },
];

const featuredResources = [
  {
    id: "blogs",
    title: "Blogs & investor articles",
    description:
      "Practical explainers on mutual funds, portfolio review, retirement, insurance, NRI investing, and investor behaviour.",
    href: "/blogs",
    cta: "Browse blogs",
    Icon: NewspaperIcon,
    accent: "from-[#232D63] to-[#293C7D]",
  },
  {
    id: "research-notes",
    title: "Research process notes",
    description:
      "See how PrimeIdea reviews allocation, overlap, risk metrics, and suitability — process first, not product push.",
    href: "/research-process",
    cta: "View research process",
    Icon: DocumentTextIcon,
    accent: "from-[#1E4A6E] to-[#479AD2]",
  },
  {
    id: "portfolio-checklists",
    title: "Portfolio review checklist",
    description:
      "Download the Portfolio Review Framework PDF — a structured checklist for research-led portfolio health checks.",
    href: "/docs/portfolio-review-framework.pdf",
    cta: "Download PDF",
    Icon: ClipboardDocumentCheckIcon,
    accent: "from-[#7A5A00] to-[#C9A227]",
    external: true,
  },
];

const resourceCategories = [
  {
    id: "blogs",
    group: "learn",
    title: "Blogs",
    description:
      "Investor education articles on mutual funds, portfolio review, retirement, insurance, NRI investing, and behaviour.",
    href: "/blogs",
    cta: "Browse blogs",
    Icon: NewspaperIcon,
    status: "live",
  },
  {
    id: "market-outlooks",
    group: "learn",
    title: "Market outlooks",
    description:
      "Monthly market outlook notes for planning context — without return guarantees or product-push language.",
    href: "/research-reports",
    cta: "View outlooks",
    Icon: ChartBarIcon,
    status: "live",
  },
  {
    id: "monthly-note",
    group: "learn",
    title: "Monthly market note",
    description:
      "A monthly planning note that summarises themes to watch — educational context, not a return forecast.",
    href: "/research-reports",
    cta: "See research library",
    Icon: BookOpenIcon,
    status: "live",
  },
  {
    id: "research-notes",
    group: "process",
    title: "Research notes",
    description:
      "Dedicated research and education PDFs — outlooks, category notes, and strategy notes separate from blogs.",
    href: "/research-reports",
    cta: "Open Research Reports",
    Icon: DocumentTextIcon,
    status: "live",
  },
  {
    id: "comparisons",
    group: "learn",
    title: "Comparison guides",
    description:
      "RA vs IA vs MFD, direct apps vs portfolio review, regular vs direct plans, PMS vs mutual funds, and planner vs wealth manager — education only.",
    href: "/comparisons",
    cta: "Browse comparisons",
    Icon: ScaleIcon,
    status: "live",
  },
  {
    id: "entity-profile",
    group: "process",
    title: "Entity profile",
    description:
      "Structured facts about PrimeIdea Ventures for investors, search, and LLM clarity — Vadodara base, SEBI RA ID.",
    href: "/primeidea-ventures-profile",
    cta: "Open profile",
    Icon: CheckBadgeIcon,
    status: "live",
  },
  {
    id: "portfolio-checklists",
    group: "process",
    title: "Portfolio checklists",
    description:
      "Structured review checklists covering allocation, overlap, costs, insurance adequacy, and goal alignment.",
    href: "/docs/portfolio-review-framework.pdf",
    cta: "Download framework PDF",
    Icon: ClipboardDocumentCheckIcon,
    status: "live",
    external: true,
  },
  {
    id: "quarterly-note",
    group: "process",
    title: "Quarterly portfolio note",
    description:
      "Quarterly reminders on review discipline: allocation drift, overlap, costs, and goal check-ins.",
    href: "/portfolio-review",
    cta: "Book a review",
    Icon: RectangleStackIcon,
    status: "live",
  },
  {
    id: "faqs",
    group: "process",
    title: "FAQs",
    description:
      "Clear answers on SEBI RA role, research process, portfolio review, succession coordination, and disclosures.",
    href: "#knowledge-faqs",
    cta: "Jump to FAQs",
    Icon: QuestionMarkCircleIcon,
    status: "live",
  },
  {
    id: "guides",
    group: "downloads",
    title: "Downloadable guides",
    description:
      "Investor Charter, Portfolio Review Framework, and other crawlable compliance and process documents.",
    href: "#downloads",
    cta: "View downloads",
    Icon: ArrowDownTrayIcon,
    status: "live",
  },
  {
    id: "education-videos",
    group: "events",
    title: "Investor education videos",
    description:
      "Published explainers live as articles. Recorded sessions are added only when a real session is filmed — placeholder videos are not used.",
    href: "/blogs",
    cta: "Read explainers",
    Icon: FilmIcon,
    status: "live",
  },
  {
    id: "seminars",
    group: "events",
    title: "Seminar presentations",
    description:
      "Outline used for investor education sessions from the Vadodara office. No product pitch and no return promise.",
    href: "/docs/research/investor-education-seminar.pdf",
    cta: "Download outline",
    Icon: PresentationChartBarIcon,
    status: "live",
    external: true,
  },
];

const pathways = [
  {
    title: "Salaried professionals",
    description: "SIP discipline, emergency funds, insurance gaps, and first portfolio reviews.",
    href: "/blogs",
    Icon: UserGroupIcon,
  },
  {
    title: "Pre-retirees",
    description: "Corpus planning, withdrawal design, and healthcare cover check-ins.",
    href: "/retirement-planning",
    Icon: ArrowPathIcon,
  },
  {
    title: "Business families & HNIs",
    description: "Private wealth structure, family oversight, and succession coordination.",
    href: "/private-wealth-management-gujarat-india",
    Icon: ChartBarIcon,
  },
  {
    title: "NRI investors",
    description: "India investing basics, reporting, and estate coordination themes.",
    href: "/nri-investment-support-india",
    Icon: AcademicCapIcon,
  },
];

const downloads = [
  {
    title: "PrimeIdea Portfolio Review Framework",
    description:
      "A structured PDF checklist for research-led portfolio review — allocation, overlap, risk, and process steps.",
    href: "/docs/portfolio-review-framework.pdf",
    meta: "PDF · Checklist",
  },
  {
    title: "Investor Charter",
    description:
      "SEBI Research Analyst Investor Charter in downloadable PDF format for transparency and investor rights.",
    href: "/docs/investor-charter.pdf",
    meta: "PDF · Compliance",
  },
  {
    title: "Regulatory Disclosures",
    description:
      "Registration details, grievance redressal, SCORES information, and role clarification on the live disclosures page.",
    href: "/regulatory-disclosures",
    meta: "Web page",
    isPage: true,
  },
];

const relatedPages = [
  {
    step: "01",
    title: "Research Reports",
    href: "/research-reports",
    description: "Outlooks, category notes, and strategy PDFs — separate from blogs.",
    cta: "Open library",
    Icon: DocumentTextIcon,
  },
  {
    step: "02",
    title: "Comparison Guides",
    href: "/comparisons",
    description: "RA vs IA vs MFD, direct apps vs review, regular vs direct, PMS vs MF, planner vs wealth manager.",
    cta: "Browse comparisons",
    Icon: ScaleIcon,
  },
  {
    step: "03",
    title: "Wealth Tools",
    href: "/wealth-tools",
    description: "SIP, corpus, SWP, and planning calculators with clear assumptions.",
    cta: "Open calculators",
    Icon: CalculatorIcon,
  },
  {
    step: "04",
    title: "Entity Profile",
    href: "/primeidea-ventures-profile",
    description: "Structured facts for investors, search, and LLM recognition.",
    cta: "Open profile",
    Icon: CheckBadgeIcon,
  },
];

const startSteps = [
  {
    step: "01",
    title: "Browse education",
    text: "Pick blogs, notes, or checklists that match your question.",
  },
  {
    step: "02",
    title: "Test assumptions",
    text: "Use Wealth Tools to frame SIP, corpus, or cover estimates.",
  },
  {
    step: "03",
    title: "Book a review",
    text: "Connect learning to your holdings with a research-led portfolio review.",
  },
];

function stripHtml(html = "") {
  return html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

export default function KnowledgeCentreContent({ posts = [] }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const latestPosts = posts.slice(0, 3);

  const filteredResources = useMemo(() => {
    if (activeFilter === "all") return resourceCategories;
    return resourceCategories.filter((item) => item.group === activeFilter);
  }, [activeFilter]);

  return (
    <>
      {/* Intro + start path */}
      <section
        aria-labelledby="kc-intro-heading"
        className="bg-white py-14 md:py-16"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-10 md:mb-12">
            <FadeUpOneByOneAnimation className="lg:col-span-7">
              <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-3">
                Education & research library
              </p>
              <h2
                id="kc-intro-heading"
                className="text-[26px] md:text-[32px] font-light text-[#2D2D2D] leading-[125%] mb-4"
              >
                One place for{" "}
                <strong className="font-semibold">
                  research-led investor education
                </strong>
              </h2>
              <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed mb-4">
                The Knowledge Centre brings together blogs, research notes, market
                outlooks, checklists, FAQs, guides, and seminar materials for investors
                in Vadodara, across Gujarat, and across India — without
                guaranteed-return language.
              </p>
              <p className="text-base text-[#4D4D4D] leading-relaxed mb-6">
                Educational material is aligned with PrimeIdea’s research process
                guided by Partha Shah, SEBI Registered Research Analyst INH000017815.
                Dedicated research-report PDFs remain separate from general blogs.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/blogs"
                  className="inline-flex items-center rounded-xl bg-[#293C7D] px-5 py-3 text-sm font-bold !text-white hover:bg-[#232D63] transition-colors"
                >
                  Browse blogs
                </Link>
                <Link
                  href="#library"
                  className="inline-flex items-center rounded-xl border border-[#D0E0EC] bg-white px-5 py-3 text-sm font-bold text-[#293C7D] hover:border-[#293C7D] transition-colors"
                >
                  Explore library
                </Link>
              </div>
            </FadeUpOneByOneAnimation>

            <FadeUpOneByOneAnimation className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-[24px] border border-[#D0E0EC] bg-gradient-to-br from-[#232D63] to-[#293C7D] p-6 md:p-7 h-full shadow-[0_20px_40px_-28px_rgba(35,45,99,0.55)]">
                <div
                  className="pointer-events-none absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "url('/images/insurance/risk-management/bg.png')",
                    backgroundRepeat: "repeat",
                    backgroundSize: "contain",
                  }}
                />
                <div className="relative">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] !text-[#FFC300] mb-2 m-0">
                    Start here
                  </p>
                  <h3 className="text-lg md:text-xl font-semibold !text-white mb-5 m-0">
                    Three steps from learning to review
                  </h3>
                  <ol className="list-none m-0 p-0 space-y-4">
                    {startSteps.map((item) => (
                      <li key={item.step} className="flex items-start gap-3">
                        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FFC300] text-xs font-bold text-[#232D63]">
                          {item.step}
                        </span>
                        <span>
                          <span className="block text-sm font-semibold !text-white">
                            {item.title}
                          </span>
                          <span className="block text-sm !text-white/75 leading-relaxed mt-0.5">
                            {item.text}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </FadeUpOneByOneAnimation>
          </div>

          {/* Featured trio */}
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 list-none m-0 p-0">
            {featuredResources.map(
              ({ id, title, description, href, cta, Icon, accent, external }) => (
                <li key={id}>
                  <Link
                    href={href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className={`group relative overflow-hidden flex h-full flex-col rounded-[24px] bg-gradient-to-br ${accent} p-5 md:p-6 shadow-[0_18px_40px_-28px_rgba(35,45,99,0.55)]`}
                  >
                    <div
                      className="pointer-events-none absolute inset-0 opacity-25"
                      style={{
                        backgroundImage:
                          "url('/images/insurance/risk-management/bg.png')",
                        backgroundRepeat: "repeat",
                        backgroundSize: "contain",
                      }}
                    />
                    <div className="relative flex h-full flex-col">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 border border-white/15 text-[#FFC300] mb-4">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <h3 className="text-lg font-semibold !text-white mb-2 leading-snug">
                        {title}
                      </h3>
                      <p className="text-sm !text-white/75 leading-relaxed flex-1 m-0 mb-5">
                        {description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-bold !text-[#FFC300]">
                        {cta}
                        <span
                          aria-hidden="true"
                          className="!text-[#FFC300] transition-transform group-hover:translate-x-0.5"
                        >
                          →
                        </span>
                      </span>
                    </div>
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </section>

      {/* Pathways */}
      <section
        aria-labelledby="kc-pathways-heading"
        className="border-t border-[#D6E4EE] bg-[#F6FDFF] py-12 md:py-14"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <FadeUpOneByOneAnimation className="mb-7 max-w-[680px]">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#479AD2] mb-2">
              Learning pathways
            </p>
            <h2
              id="kc-pathways-heading"
              className="text-[22px] md:text-[28px] font-light text-[#2D2D2D] m-0"
            >
              Start with what{" "}
              <strong className="font-semibold">fits your situation</strong>
            </h2>
          </FadeUpOneByOneAnimation>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 list-none m-0 p-0">
            {pathways.map(({ title, description, href, Icon }) => (
              <li key={title}>
                <Link
                  href={href}
                  className="group flex h-full flex-col rounded-[22px] border border-[#D0E0EC] bg-white p-5 hover:border-[#293C7D] transition-colors"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6FDFF] border border-[#D6E4EE] text-[#293C7D] mb-3 group-hover:bg-[#293C7D] group-hover:border-[#293C7D] group-hover:text-white transition-colors">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-base font-semibold text-[#2D2D2D] mb-1.5">
                    {title}
                  </h3>
                  <p className="text-sm text-[#5A5A5A] leading-relaxed m-0 flex-1">
                    {description}
                  </p>
                  <span className="mt-3 text-sm font-semibold text-[#293C7D]">
                    Explore →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Library with filters */}
      <section
        id="library"
        aria-labelledby="kc-library-heading"
        className="relative border-t border-[#D6E4EE] py-12 md:py-16"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#E8F4FB_0%,_#FFFFFF_55%,_#F6FDFF_100%)]" />
        <div className="relative mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <div className="mb-6 md:mb-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
            <FadeUpOneByOneAnimation className="max-w-[640px]">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#479AD2] mb-2">
                Resource library
              </p>
              <h2
                id="kc-library-heading"
                className="text-[22px] md:text-[28px] font-light text-[#2D2D2D] m-0 leading-tight"
              >
                Browse the full{" "}
                <strong className="font-semibold">content catalogue</strong>
              </h2>
            </FadeUpOneByOneAnimation>
            <p className="text-sm text-[#6B7C8A] m-0 lg:max-w-[280px] lg:text-right">
              {filteredResources.length} of {resourceCategories.length} resources
              shown
            </p>
          </div>

          <div className="sticky top-16 z-20 -mx-4 px-4 mb-6">
            <div className="rounded-2xl border border-[#D0E0EC] bg-white/95 backdrop-blur-md p-2 shadow-[0_12px_30px_-20px_rgba(41,60,125,0.45)]">
              <div
                role="tablist"
                aria-label="Filter knowledge resources"
                className="flex gap-1.5 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
              >
                {FILTERS.map((filter) => {
                  const isActive = activeFilter === filter.id;
                  return (
                    <button
                      key={filter.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveFilter(filter.id)}
                      className={`shrink-0 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                        isActive
                          ? "bg-[#293C7D] !text-white shadow-sm"
                          : "text-[#293C7D] hover:bg-[#F6FDFF]"
                      }`}
                    >
                      {filter.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5 list-none m-0 p-0">
            {filteredResources.map(
              ({ id, title, description, href, cta, Icon, status, external }) => (
                <li key={id} id={id} className="animate-fadeUp">
                  <Link
                    href={href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex h-full flex-col rounded-[22px] border border-[#D0E0EC] bg-white p-5 md:p-6 transition-all hover:border-[#293C7D] hover:shadow-[0_16px_36px_-28px_rgba(41,60,125,0.55)]"
                  >
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#D6E4EE] bg-[#F6FDFF] text-[#293C7D] group-hover:bg-[#293C7D] group-hover:border-[#293C7D] group-hover:text-white transition-colors">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span
                        className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${
                          status === "live"
                            ? "bg-[#E8F6EE] text-[#1F6B3A]"
                            : "bg-[#FFF4D6] text-[#7A5A00]"
                        }`}
                      >
                        {status === "live" ? "Available" : "On request"}
                      </span>
                    </div>
                    <h3 className="text-base md:text-lg font-semibold text-[#2D2D2D] mb-2">
                      {title}
                    </h3>
                    <p className="text-sm text-[#5A5A5A] leading-relaxed flex-1 m-0 mb-4">
                      {description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#293C7D]">
                      {cta}
                      <span
                        aria-hidden="true"
                        className="transition-transform group-hover:translate-x-0.5"
                      >
                        →
                      </span>
                    </span>
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </section>

      {/* Latest articles */}
      {latestPosts.length > 0 ? (
        <section
          aria-labelledby="kc-blogs-heading"
          className="bg-[#F6FDFF] py-12 md:py-16 border-t border-[#D6E4EE]"
        >
          <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
              <FadeUpOneByOneAnimation>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#479AD2] mb-2">
                  From the blog
                </p>
                <h2
                  id="kc-blogs-heading"
                  className="text-[22px] md:text-[28px] font-light text-[#2D2D2D] m-0"
                >
                  Latest <strong className="font-semibold">articles</strong>
                </h2>
              </FadeUpOneByOneAnimation>
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 rounded-xl border border-[#D0E0EC] bg-white px-4 py-2.5 text-sm font-semibold text-[#293C7D] hover:border-[#293C7D] transition-colors"
              >
                View all blogs
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-3 gap-5 list-none m-0 p-0">
              {latestPosts.map((post, index) => {
                const excerpt = stripHtml(post.excerpt || "").slice(0, 120);
                const category = post.categories?.nodes?.[0]?.name || "Insight";
                const imageUrl =
                  post.featuredImage?.node?.sourceUrl ||
                  "/images/blogs/single-blog.jpg";
                const isFeatured = index === 0;

                return (
                  <li
                    key={post.slug}
                    className={isFeatured ? "md:col-span-1 md:row-span-1" : ""}
                  >
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-[#D0E0EC] bg-white transition-all hover:border-[#293C7D] hover:shadow-[0_16px_36px_-28px_rgba(41,60,125,0.5)]"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-[#E8F4FB]">
                        <Image
                          src={imageUrl}
                          alt=""
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <span className="absolute left-3 top-3 rounded-full bg-[#293C7D] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider !text-white">
                          {category}
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <time
                          dateTime={post.date}
                          className="text-xs text-[#6B7C8A] mb-2"
                        >
                          {moment(post.date).format("D MMM YYYY")}
                        </time>
                        <h3 className="text-base font-semibold text-[#2D2D2D] mb-2 leading-snug group-hover:text-[#293C7D]">
                          {post.title}
                        </h3>
                        {excerpt ? (
                          <p className="text-sm text-[#5A5A5A] leading-relaxed m-0 flex-1">
                            {excerpt}
                            {excerpt.length >= 120 ? "…" : ""}
                          </p>
                        ) : null}
                        <span className="mt-4 text-sm font-semibold text-[#293C7D]">
                          Read article →
                        </span>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      ) : null}

      {/* Editorial standards */}
      <section
        aria-labelledby="kc-standards-heading"
        className="bg-white py-12 md:py-16 border-t border-[#D6E4EE]"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <FadeUpOneByOneAnimation className="mb-8 md:mb-10 max-w-[720px]">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#479AD2] mb-2">
              Editorial standards
            </p>
            <h2
              id="kc-standards-heading"
              className="text-[22px] md:text-[28px] font-light text-[#2D2D2D] m-0 leading-tight"
            >
              How Knowledge Centre content is{" "}
              <strong className="font-semibold">kept accountable</strong>
            </h2>
            <p className="text-base text-[#4D4D4D] leading-relaxed mt-3 mb-0">
              Education here is process-led and compliance-aware — so investors can
              trust what they read before they act.
            </p>
          </FadeUpOneByOneAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
            <div className="lg:col-span-7">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none m-0 p-0 h-full">
                {[
                  {
                    title: "Process-first language",
                    text: "No guaranteed, sure, or market-beating return claims. Content explains method — not promises.",
                    Icon: DocumentTextIcon,
                  },
                  {
                    title: "Education ≠ research reports",
                    text: "Blogs and notes stay separate from dedicated research-report PDFs and strategy packs.",
                    Icon: BookOpenIcon,
                  },
                  {
                    title: "Visible SEBI RA identity",
                    text: "Partha Shah, SEBI Registered Research Analyst INH000017815, is named on this hub.",
                    Icon: CheckBadgeIcon,
                  },
                  {
                    title: "Independent verification",
                    text: "Investors are encouraged to verify registration and read disclosures before deciding.",
                    Icon: ShieldCheckIcon,
                  },
                ].map(({ title, text, Icon }, index) => (
                  <li key={title}>
                    <div className="group h-full rounded-[22px] border border-[#D0E0EC] bg-[#F6FDFF] p-5 md:p-6 transition-colors hover:border-[#293C7D] hover:bg-white">
                      <div className="mb-4 flex items-center justify-between gap-3">
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#D6E4EE] bg-white text-[#293C7D] group-hover:bg-[#293C7D] group-hover:border-[#293C7D] group-hover:text-white transition-colors">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#7A93A8] tabular-nums">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="text-base md:text-[17px] font-semibold text-[#2D2D2D] mb-2">
                        {title}
                      </h3>
                      <p className="text-sm text-[#5A5A5A] leading-relaxed m-0">
                        {text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5">
              <div className="relative h-full overflow-hidden rounded-[28px] border border-[#293C7D]/20 bg-gradient-to-br from-[#232D63] via-[#293C7D] to-[#1E3A5F] shadow-[0_24px_50px_-30px_rgba(35,45,99,0.65)]">
                <div
                  className="pointer-events-none absolute inset-0 opacity-35"
                  style={{
                    backgroundImage:
                      "url('/images/insurance/risk-management/bg.png')",
                    backgroundRepeat: "repeat",
                    backgroundSize: "contain",
                  }}
                />
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#FFC300]/15 blur-2xl" />

                <div className="relative flex h-full flex-col p-5 md:p-6">
                  <div className="flex items-center gap-2 mb-5">
                    <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] !text-[#FFC300]">
                      Research leadership
                    </span>
                    <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] !text-white/70">
                      Verified profile
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
                      SEBI Registered Research Analyst · Vadodara base · Gujarat &amp; India reach
                    </p>
                  </div>

                  <p className="text-sm !text-white/80 leading-relaxed m-0 mb-5 flex-1">
                    Knowledge Centre education follows the same research-led discipline used
                    in portfolio reviews — suitability and process first, never guaranteed
                    returns.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <Link
                      href="/sebi-registered-research-analyst"
                      className="inline-flex flex-1 items-center justify-center rounded-xl bg-[#FFC300] px-4 py-3 text-sm font-bold text-[#232D63] hover:bg-white transition-colors"
                    >
                      Verify SEBI RA →
                    </Link>
                    <Link
                      href="/regulatory-disclosures"
                      className="inline-flex flex-1 items-center justify-center rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-sm font-bold !text-white hover:bg-white/20 transition-colors"
                    >
                      Disclosures
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

      {/* Downloads */}
      <section
        id="downloads"
        aria-labelledby="kc-downloads-heading"
        className="bg-[#F6FDFF] py-12 md:py-16 border-t border-[#D6E4EE]"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <FadeUpOneByOneAnimation className="mb-8 max-w-[680px]">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#479AD2] mb-2">
              Downloads & disclosures
            </p>
            <h2
              id="kc-downloads-heading"
              className="text-[22px] md:text-[28px] font-light text-[#2D2D2D] m-0"
            >
              Guides you can{" "}
              <strong className="font-semibold">save and share</strong>
            </h2>
          </FadeUpOneByOneAnimation>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 list-none m-0 p-0">
            {downloads.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  {...(!item.isPage
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-[#D0E0EC] bg-white p-5 md:p-6 hover:border-[#293C7D] transition-colors"
                >
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#293C7D] text-[#FFC300]">
                      <ArrowDownTrayIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="rounded-full bg-[#F6FDFF] border border-[#D6E4EE] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#479AD2]">
                      {item.meta}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-[#2D2D2D] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#5A5A5A] leading-relaxed m-0 flex-1 mb-4">
                    {item.description}
                  </p>
                  <span className="text-sm font-semibold text-[#293C7D]">
                    {item.isPage ? "Open page →" : "Download PDF →"}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Mid CTA + Related next steps */}
      <section
        aria-labelledby="kc-next-steps-heading"
        className="relative border-t border-[#D6E4EE] bg-[#F6FDFF] py-12 md:py-16"
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
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#232D63] via-[#293C7D] to-[#1E3A5F] px-5 py-7 sm:px-7 md:px-9 md:py-9 mb-10 md:mb-12 shadow-[0_28px_60px_-36px_rgba(35,45,99,0.7)]">
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "url('/images/insurance/risk-management/bg.png')",
                backgroundRepeat: "repeat",
                backgroundSize: "contain",
              }}
            />
            <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#FFC300]/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 left-10 h-40 w-40 rounded-full bg-[#479AD2]/25 blur-3xl" />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              <div className="lg:col-span-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] !text-[#FFC300] mb-2 m-0">
                  From learning to action
                </p>
                <h2 className="text-[22px] md:text-[28px] font-semibold !text-white mb-3 m-0 leading-tight">
                  Ready to connect learning to your portfolio?
                </h2>
                <p className="text-sm md:text-[15px] !text-white/75 leading-relaxed m-0 max-w-[560px]">
                  Calculators and articles frame questions. A research-led portfolio
                  review connects them to your holdings, risk, and goals — without
                  guaranteed-return language.
                </p>
                <ul className="mt-5 flex flex-wrap gap-2 list-none m-0 p-0">
                  {[
                    "Research-led process",
                    "Vadodara office or video",
                    "No guaranteed returns",
                  ].map((label) => (
                    <li
                      key={label}
                      className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-semibold !text-white/80"
                    >
                      {label}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3">
                <Link
                  href="/portfolio-review"
                  className="inline-flex items-center justify-center rounded-xl bg-[#FFC300] px-5 py-3.5 text-sm font-bold text-[#232D63] hover:bg-white transition-colors"
                >
                  Book Portfolio Review →
                </Link>
                <Link
                  href="/wealth-tools"
                  className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-5 py-3.5 text-sm font-bold !text-white hover:bg-white/20 transition-colors"
                >
                  Open Wealth Tools
                </Link>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center text-sm font-semibold !text-white/70 hover:!text-[#FFC300] transition-colors py-1"
                >
                  Or contact the Vadodara team →
                </Link>
              </div>
            </div>
          </div>

          <FadeUpOneByOneAnimation className="mb-7 md:mb-8 max-w-[680px]">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#479AD2] mb-2">
              Continue your journey
            </p>
            <h2
              id="kc-next-steps-heading"
              className="text-[22px] md:text-[28px] font-light text-[#2D2D2D] mb-3 m-0"
            >
              Related <strong className="font-semibold">next steps</strong>
            </h2>
            <p className="text-base text-[#4D4D4D] m-0">
              Use the Knowledge Centre to learn, then continue with tools, process,
              review, or registration verification.
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
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#D6E4EE] bg-[#F6FDFF] text-[#293C7D] group-hover:bg-[#293C7D] group-hover:border-[#293C7D] group-hover:text-white transition-colors">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#7A93A8] tabular-nums">
                      {step}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-[#2D2D2D] mb-2 group-hover:text-[#293C7D] transition-colors">
                    {title}
                  </h3>
                  <p className="text-sm text-[#5A5A5A] leading-relaxed m-0 flex-1 mb-4">
                    {description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#293C7D]">
                    {cta}
                    <span
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-0.5"
                    >
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
