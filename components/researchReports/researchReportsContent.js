"use client";

import { useMemo, useState } from "react";
import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownTrayIcon,
  BanknotesIcon,
  BeakerIcon,
  BookOpenIcon,
  BuildingLibraryIcon,
  CalculatorIcon,
  ChartBarIcon,
  ChartPieIcon,
  ClipboardDocumentCheckIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  NewspaperIcon,
  PresentationChartLineIcon,
  RectangleStackIcon,
  ScaleIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import {
  REPORT_CATEGORIES,
  RESEARCH_REPORTS,
} from "@/data/researchReports";

const ICON_MAP = {
  ChartBarIcon,
  PresentationChartLineIcon,
  RectangleStackIcon,
  BanknotesIcon,
  ChartPieIcon,
  BuildingLibraryIcon,
  ClipboardDocumentCheckIcon,
  ScaleIcon,
};

const STATUS_FILTERS = [
  { id: "all", label: "All" },
  { id: "available", label: "Downloadable" },
  { id: "request", label: "On request" },
];

const SHORT_CATEGORY_LABELS = {
  "monthly-outlook": "Outlook",
  "equity-notes": "Equity",
  "mf-category": "Mutual funds",
  "fixed-income": "Fixed income",
  "asset-allocation": "Allocation",
  "sector-research": "Sectors",
  "portfolio-strategy": "Strategy",
  "alts-education": "SIF/PMS/AIF",
};

export default function ResearchReportsContent() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const featuredReport =
    RESEARCH_REPORTS.find((r) => r.status === "available") || RESEARCH_REPORTS[0];

  const filteredReports = useMemo(() => {
    return RESEARCH_REPORTS.filter((report) => {
      const categoryOk =
        activeCategory === "all" || report.categoryId === activeCategory;
      const statusOk =
        statusFilter === "all" || report.status === statusFilter;
      return categoryOk && statusOk;
    });
  }, [activeCategory, statusFilter]);

  const availableCount = RESEARCH_REPORTS.filter(
    (r) => r.status === "available"
  ).length;
  const requestCount = RESEARCH_REPORTS.length - availableCount;

  const selectCategory = (id) => {
    setActiveCategory(id);
    document
      .getElementById("report-library")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Intro */}
      <section
        aria-labelledby="rr-intro-heading"
        className="bg-white py-14 md:py-16"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-10 md:mb-12">
            <FadeUpOneByOneAnimation className="lg:col-span-7">
              <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-3">
                Dedicated research library
              </p>
              <h2
                id="rr-intro-heading"
                className="text-[26px] md:text-[32px] font-light text-[#2D2D2D] leading-[125%] mb-4"
              >
                Research reports,{" "}
                <strong className="font-semibold">separate from blogs</strong>
              </h2>
              <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed mb-4">
                This library holds PrimeIdea research and education notes —
                monthly market outlooks, equity and mutual-fund category notes,
                fixed income, asset allocation, sector research, portfolio
                strategy, and SIF/PMS/AIF education. It is distinct from general
                Knowledge Centre blogs.
              </p>
              <p className="text-base text-[#4D4D4D] leading-relaxed mb-6">
                Reports are educational and process-led. They do not guarantee
                returns. Research process guided by Partha Shah, SEBI Registered
                Research Analyst INH000017815.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="#report-library"
                  className="inline-flex items-center rounded-xl bg-[#293C7D] px-5 py-3 text-sm font-bold !text-white hover:bg-[#232D63] transition-colors"
                >
                  Browse report library
                </Link>
                <Link
                  href="/knowledge-centre"
                  className="inline-flex items-center rounded-xl border border-[#D0E0EC] bg-white px-5 py-3 text-sm font-bold text-[#293C7D] hover:border-[#293C7D] transition-colors"
                >
                  Knowledge Centre
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
                <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#FFC300]/15 blur-2xl" />
                <div className="relative">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] !text-[#FFC300] mb-4 m-0">
                    Library snapshot
                  </p>
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {[
                      { label: "Categories", value: REPORT_CATEGORIES.length },
                      { label: "Catalogue", value: RESEARCH_REPORTS.length },
                      { label: "Downloads", value: availableCount },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-center"
                      >
                        <p className="text-xl md:text-2xl font-bold tabular-nums !text-[#FFC300] m-0">
                          {item.value}
                        </p>
                        <p className="text-[10px] uppercase tracking-wider !text-white/60 m-0 mt-1">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs !text-white/65 leading-relaxed m-0 mb-4">
                    {requestCount} notes available on request. New PDFs publish
                    here as editions are approved.
                  </p>
                  <Link
                    href={featuredReport.href}
                    {...(featuredReport.status === "available"
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#FFC300] px-4 py-3 text-sm font-bold text-[#232D63] hover:bg-white transition-colors"
                  >
                    <ArrowDownTrayIcon className="h-4 w-4" aria-hidden="true" />
                    {featuredReport.status === "available"
                      ? "Download featured PDF"
                      : "Request featured note"}
                  </Link>
                </div>
              </div>
            </FadeUpOneByOneAnimation>
          </div>

          {/* Blogs vs reports */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-[22px] border border-[#D0E0EC] bg-[#F6FDFF] p-5 md:p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-[#D6E4EE] text-[#293C7D]">
                  <NewspaperIcon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7A93A8] m-0">
                    Knowledge Centre
                  </p>
                  <h3 className="text-base font-semibold text-[#2D2D2D] m-0">
                    Blogs & education articles
                  </h3>
                </div>
              </div>
              <p className="text-sm text-[#5A5A5A] leading-relaxed m-0 mb-4">
                Practical investor articles, FAQs, checklists, and guides for
                broader learning.
              </p>
              <Link
                href="/knowledge-centre"
                className="text-sm font-semibold text-[#293C7D] inline-flex items-center gap-1"
              >
                Open Knowledge Centre
                <span aria-hidden="true" className="!text-[#293C7D]">
                  →
                </span>
              </Link>
            </div>
            <div className="rounded-[22px] border border-[#293C7D]/25 bg-gradient-to-br from-[#232D63] to-[#293C7D] p-5 md:p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 border border-white/15 text-[#FFC300]">
                  <DocumentTextIcon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] !text-white/55 m-0">
                    This page
                  </p>
                  <h3 className="text-base font-semibold !text-white m-0">
                    Research report PDFs
                  </h3>
                </div>
              </div>
              <p className="text-sm !text-white/75 leading-relaxed m-0 mb-4">
                Structured research and education notes — outlooks, category
                notes, and strategy PDFs.
              </p>
              <span className="text-sm font-semibold !text-[#FFC300] inline-flex items-center gap-1">
                You are here
                <span aria-hidden="true" className="!text-[#FFC300]">
                  →
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured download */}
      {featuredReport ? (
        <section
          aria-labelledby="rr-featured-heading"
          className="border-t border-[#D6E4EE] bg-[#F6FDFF] py-12 md:py-14"
        >
          <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
            <FadeUpOneByOneAnimation className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#479AD2] mb-2">
                Featured download
              </p>
              <h2
                id="rr-featured-heading"
                className="text-[22px] md:text-[28px] font-light text-[#2D2D2D] m-0"
              >
                Start with a{" "}
                <strong className="font-semibold">ready-to-use PDF</strong>
              </h2>
            </FadeUpOneByOneAnimation>

            <div className="relative overflow-hidden rounded-[28px] border border-[#D0E0EC] bg-white grid grid-cols-1 lg:grid-cols-12 shadow-[0_20px_50px_-36px_rgba(41,60,125,0.45)]">
              <div className="lg:col-span-4 relative min-h-[220px] bg-gradient-to-br from-[#232D63] via-[#293C7D] to-[#1E3A5F] p-6 md:p-8 flex flex-col justify-between">
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
                  <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider !text-[#FFC300] mb-4">
                    {featuredReport.status === "available"
                      ? "Available now"
                      : "On request"}
                  </span>
                  <p className="text-sm !text-white/70 m-0 mb-1">
                    {REPORT_CATEGORIES.find(
                      (c) => c.id === featuredReport.categoryId
                    )?.title || "Research note"}
                  </p>
                  <h3 className="text-xl md:text-2xl font-semibold !text-white m-0 leading-snug">
                    {featuredReport.title}
                  </h3>
                </div>
                <div className="relative mt-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFC300] text-[#232D63]">
                  <ArrowDownTrayIcon className="h-7 w-7" aria-hidden="true" />
                </div>
              </div>
              <div className="lg:col-span-8 p-6 md:p-8 flex flex-col">
                <p className="text-base text-[#4D4D4D] leading-relaxed m-0 mb-5 flex-1">
                  {featuredReport.summary}
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href={featuredReport.href}
                    {...(featuredReport.status === "available"
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#293C7D] px-5 py-3 text-sm font-bold !text-white hover:bg-[#232D63] transition-colors"
                  >
                    <ArrowDownTrayIcon className="h-4 w-4" aria-hidden="true" />
                    {featuredReport.fileLabel}
                    <span aria-hidden="true" className="!text-white">
                      →
                    </span>
                  </Link>
                  <Link
                    href="/research-process"
                    className="inline-flex items-center gap-2 rounded-xl border border-[#D0E0EC] px-5 py-3 text-sm font-bold text-[#293C7D] hover:border-[#293C7D] transition-colors"
                  >
                    How we use this framework
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* Categories */}
      <section
        aria-labelledby="rr-categories-heading"
        className="border-t border-[#D6E4EE] bg-white py-12 md:py-14"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <FadeUpOneByOneAnimation className="mb-8 max-w-[680px]">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#479AD2] mb-2">
              Report types
            </p>
            <h2
              id="rr-categories-heading"
              className="text-[22px] md:text-[28px] font-light text-[#2D2D2D] m-0"
            >
              What this library{" "}
              <strong className="font-semibold">covers</strong>
            </h2>
          </FadeUpOneByOneAnimation>

          <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 list-none m-0 p-0">
            {REPORT_CATEGORIES.map(({ id, title, description, Icon }, index) => {
              const CategoryIcon = ICON_MAP[Icon] || DocumentTextIcon;
              const count = RESEARCH_REPORTS.filter(
                (r) => r.categoryId === id
              ).length;
              const isActive = activeCategory === id;

              return (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => selectCategory(id)}
                    aria-pressed={isActive}
                    className={`group w-full h-full text-left rounded-[22px] border p-5 transition-all ${
                      isActive
                        ? "border-[#293C7D] bg-[#293C7D] shadow-[0_16px_36px_-20px_rgba(41,60,125,0.7)]"
                        : "border-[#D0E0EC] bg-[#F6FDFF] hover:border-[#293C7D] hover:bg-white"
                    }`}
                  >
                    <div className="mb-3 flex items-center justify-between gap-2">
                      <span
                        className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border transition-colors ${
                          isActive
                            ? "bg-white/10 border-white/15 text-[#FFC300]"
                            : "bg-white border-[#D6E4EE] text-[#293C7D] group-hover:bg-[#293C7D] group-hover:border-[#293C7D] group-hover:text-white"
                        }`}
                      >
                        <CategoryIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span
                        className={`text-[11px] font-bold tabular-nums ${
                          isActive ? "!text-white/55" : "text-[#7A93A8]"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")} · {count}
                      </span>
                    </div>
                    <h3
                      className={`text-base font-semibold mb-1.5 ${
                        isActive ? "!text-white" : "text-[#2D2D2D]"
                      }`}
                    >
                      {title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed m-0 ${
                        isActive ? "!text-white/70" : "text-[#5A5A5A]"
                      }`}
                    >
                      {description}
                    </p>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Library */}
      <section
        id="report-library"
        aria-labelledby="rr-library-heading"
        className="relative border-t border-[#D6E4EE] py-12 md:py-16 overflow-hidden"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#E8F4FB_0%,_#F6FDFF_50%,_#EEF5FA_100%)]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(71,154,210,0.16) 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
        />

        <div className="relative mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <div className="mb-6 md:mb-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <FadeUpOneByOneAnimation className="max-w-[640px]">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#479AD2] mb-2">
                Downloadable PDFs
              </p>
              <h2
                id="rr-library-heading"
                className="text-[22px] md:text-[28px] font-light text-[#2D2D2D] m-0"
              >
                Research report{" "}
                <strong className="font-semibold">catalogue</strong>
              </h2>
            </FadeUpOneByOneAnimation>
            <p className="text-sm text-[#6B7C8A] m-0 lg:text-right">
              Showing {filteredReports.length} of {RESEARCH_REPORTS.length}
            </p>
          </div>

          <div className="sticky top-16 z-20 -mx-4 px-4 mb-6 space-y-2.5">
            <div className="rounded-2xl border border-[#D0E0EC] bg-white/95 backdrop-blur-md p-2 shadow-[0_12px_30px_-20px_rgba(41,60,125,0.45)]">
              <div className="flex flex-wrap gap-1.5 mb-2 px-1">
                {STATUS_FILTERS.map((filter) => {
                  const isActive = statusFilter === filter.id;
                  return (
                    <button
                      key={filter.id}
                      type="button"
                      onClick={() => setStatusFilter(filter.id)}
                      className={`rounded-lg px-3 py-1.5 text-xs font-bold uppercase tracking-wide transition-colors ${
                        isActive
                          ? "bg-[#FFC300] text-[#232D63]"
                          : "bg-[#F6FDFF] text-[#5A5A5A] hover:text-[#293C7D]"
                      }`}
                    >
                      {filter.label}
                    </button>
                  );
                })}
              </div>
              <div
                role="tablist"
                aria-label="Filter by report category"
                className="flex gap-1.5 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === "all"}
                  onClick={() => setActiveCategory("all")}
                  className={`shrink-0 rounded-xl px-3.5 py-2.5 text-sm font-semibold whitespace-nowrap transition-colors ${
                    activeCategory === "all"
                      ? "bg-[#293C7D] !text-white"
                      : "text-[#293C7D] hover:bg-[#F6FDFF]"
                  }`}
                >
                  All categories
                </button>
                {REPORT_CATEGORIES.map((category) => {
                  const isActive = activeCategory === category.id;
                  return (
                    <button
                      key={category.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveCategory(category.id)}
                      className={`shrink-0 rounded-xl px-3.5 py-2.5 text-sm font-semibold whitespace-nowrap transition-colors ${
                        isActive
                          ? "bg-[#293C7D] !text-white"
                          : "text-[#293C7D] hover:bg-[#F6FDFF]"
                      }`}
                    >
                      {SHORT_CATEGORY_LABELS[category.id] || category.title}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {filteredReports.length === 0 ? (
            <div className="rounded-[22px] border border-dashed border-[#D0E0EC] bg-white px-6 py-12 text-center">
              <p className="text-base font-semibold text-[#2D2D2D] mb-2">
                No reports match these filters
              </p>
              <p className="text-sm text-[#5A5A5A] mb-4">
                Try “All categories” or switch status to All.
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory("all");
                  setStatusFilter("all");
                }}
                className="inline-flex rounded-xl bg-[#293C7D] px-4 py-2.5 text-sm font-bold !text-white"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 list-none m-0 p-0">
              {filteredReports.map((report) => {
                const category = REPORT_CATEGORIES.find(
                  (c) => c.id === report.categoryId
                );
                const isAvailable = report.status === "available";
                const CategoryIcon =
                  ICON_MAP[category?.Icon] || DocumentTextIcon;

                return (
                  <li key={report.id} className="animate-fadeUp">
                    <article className="group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-[#D0E0EC] bg-white p-5 md:p-6 transition-all hover:border-[#293C7D] hover:shadow-[0_18px_40px_-28px_rgba(41,60,125,0.55)]">
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-[#479AD2] via-[#293C7D] to-[#FFC300] transition-transform duration-300 group-hover:scale-x-100"
                      />
                      <div className="mb-4 flex items-start justify-between gap-3">
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#D6E4EE] bg-[#F6FDFF] text-[#293C7D] group-hover:bg-[#293C7D] group-hover:border-[#293C7D] group-hover:text-white transition-colors">
                          <CategoryIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <span
                          className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${
                            isAvailable
                              ? "bg-[#E8F6EE] text-[#1F6B3A]"
                              : "bg-[#FFF4D6] text-[#7A5A00]"
                          }`}
                        >
                          {isAvailable ? "Download" : "On request"}
                        </span>
                      </div>

                      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#479AD2] mb-1.5 m-0">
                        {category?.title || "Research note"} · {report.dateLabel}
                      </p>
                      <h3 className="text-lg font-semibold text-[#2D2D2D] mb-2 leading-snug group-hover:text-[#293C7D] transition-colors">
                        {report.title}
                      </h3>
                      <p className="text-sm text-[#5A5A5A] leading-relaxed m-0 flex-1 mb-5">
                        {report.summary}
                      </p>

                      <Link
                        href={report.href}
                        {...(isAvailable
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-colors ${
                          isAvailable
                            ? "bg-[#293C7D] !text-white hover:bg-[#232D63]"
                            : "border border-[#D0E0EC] bg-[#F6FDFF] text-[#293C7D] hover:border-[#293C7D] hover:bg-white"
                        }`}
                      >
                        {isAvailable ? (
                          <ArrowDownTrayIcon
                            className="h-4 w-4"
                            aria-hidden="true"
                          />
                        ) : (
                          <EnvelopeIcon className="h-4 w-4" aria-hidden="true" />
                        )}
                        {report.fileLabel}
                        <span
                          aria-hidden="true"
                          className={
                            isAvailable ? "!text-white" : "!text-[#293C7D]"
                          }
                        >
                          →
                        </span>
                      </Link>
                    </article>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </section>

      {/* How to use + leadership */}
      <section className="border-t border-[#D6E4EE] bg-white py-12 md:py-16">
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 mb-10">
            <div className="lg:col-span-7">
              <FadeUpOneByOneAnimation className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#479AD2] mb-2">
                  How to use reports
                </p>
                <h2 className="text-[22px] md:text-[28px] font-light text-[#2D2D2D] m-0 mb-3">
                  Read for context,{" "}
                  <strong className="font-semibold">review for decisions</strong>
                </h2>
                <p className="text-base text-[#4D4D4D] leading-relaxed m-0">
                  Reports support education and discussion. Suitability-based next
                  steps still require a research-led portfolio review of your
                  holdings.
                </p>
              </FadeUpOneByOneAnimation>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 list-none m-0 p-0">
                {[
                  {
                    step: "01",
                    title: "Select a category",
                    text: "Outlook, equity, MF, debt, allocation, sector, strategy, or alts education.",
                    Icon: DocumentTextIcon,
                  },
                  {
                    step: "02",
                    title: "Download or request",
                    text: "Open available PDFs now, or request the latest approved edition.",
                    Icon: ArrowDownTrayIcon,
                  },
                  {
                    step: "03",
                    title: "Book a review",
                    text: "Connect the note to your portfolio with a research-led review.",
                    Icon: BeakerIcon,
                  },
                ].map(({ step, title, text, Icon }) => (
                  <li
                    key={step}
                    className="rounded-[22px] border border-[#D0E0EC] bg-[#F6FDFF] p-5"
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#293C7D] text-[#FFC300] mb-3">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#7A93A8] mb-1 m-0">
                      {step}
                    </p>
                    <h3 className="text-base font-semibold text-[#2D2D2D] mb-1.5">
                      {title}
                    </h3>
                    <p className="text-sm text-[#5A5A5A] leading-relaxed m-0">
                      {text}
                    </p>
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
                    Research reports follow the same research-led discipline used
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

          {/* CTA */}
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#232D63] via-[#293C7D] to-[#1E3A5F] px-5 py-7 md:px-9 md:py-9 mb-10 shadow-[0_28px_60px_-36px_rgba(35,45,99,0.7)]">
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "url('/images/insurance/risk-management/bg.png')",
                backgroundRepeat: "repeat",
                backgroundSize: "contain",
              }}
            />
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#FFC300]/12 blur-3xl" />
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] !text-[#FFC300] mb-2 m-0">
                  Next step
                </p>
                <h2 className="text-[22px] md:text-[28px] font-semibold !text-white mb-3 m-0">
                  Put research into a portfolio review
                </h2>
                <p className="text-sm md:text-[15px] !text-white/75 leading-relaxed m-0">
                  Download or request notes, then book a review so allocation,
                  overlap, and risk can be assessed against your goals.
                </p>
                <ul className="mt-4 flex flex-wrap gap-2 list-none m-0 p-0">
                  {[
                    "Process-first notes",
                    "No guaranteed returns",
                    "Vadodara or video review",
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
                  href="/research-process"
                  className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-5 py-3.5 text-sm font-bold !text-white hover:bg-white/20 transition-colors"
                >
                  View Research Process
                </Link>
              </div>
            </div>
          </div>

          <FadeUpOneByOneAnimation className="mb-6 max-w-[640px]">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#479AD2] mb-2">
              Continue
            </p>
            <h2 className="text-[22px] md:text-[28px] font-light text-[#2D2D2D] m-0">
              Related <strong className="font-semibold">next steps</strong>
            </h2>
          </FadeUpOneByOneAnimation>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 list-none m-0 p-0">
            {[
              {
                title: "Knowledge Centre",
                href: "/knowledge-centre",
                description: "Blogs, checklists, FAQs, and investor education hub.",
                cta: "Explore hub",
                Icon: BookOpenIcon,
              },
              {
                title: "Wealth Tools",
                href: "/wealth-tools",
                description: "SIP, corpus, SWP, and planning calculators.",
                cta: "Open tools",
                Icon: CalculatorIcon,
              },
              {
                title: "Research Process",
                href: "/research-process",
                description: "Five-step method behind research-led support.",
                cta: "See process",
                Icon: BeakerIcon,
              },
              {
                title: "SEBI RA page",
                href: "/sebi-registered-research-analyst",
                description: "Verify Research Analyst registration details.",
                cta: "Verify RA",
                Icon: ShieldCheckIcon,
              },
            ].map(({ title, href, description, cta, Icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="group flex h-full flex-col rounded-[20px] border border-[#D6E4EE] bg-[#F6FDFF] p-5 hover:border-[#293C7D] hover:bg-white transition-colors"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#D6E4EE] bg-white text-[#293C7D] mb-3 group-hover:bg-[#293C7D] group-hover:border-[#293C7D] group-hover:text-white transition-colors">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-base font-semibold text-[#2D2D2D] mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-[#5A5A5A] leading-relaxed m-0 flex-1 mb-3">
                    {description}
                  </p>
                  <span className="text-sm font-semibold text-[#293C7D] inline-flex items-center gap-1">
                    {cta}
                    <span aria-hidden="true" className="!text-[#293C7D]">
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
