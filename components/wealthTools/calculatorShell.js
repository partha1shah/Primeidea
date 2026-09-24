"use client";

import Link from "next/link";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export function formatFieldValue(value) {
  if (value === "" || value === null || value === undefined) return "";
  return String(value);
}

export function NumberField({
  id,
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  suffix,
  hint,
  prefix,
}) {
  const showPrefix = prefix || suffix === "₹";

  return (
    <label htmlFor={id} className="block group">
      <span className="block text-[13px] font-semibold tracking-wide text-[#293C7D] mb-2">
        {label}
      </span>
      <div className="relative">
        {showPrefix ? (
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-[#479AD2]">
            {prefix || "₹"}
          </span>
        ) : null}
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min={min}
          max={max}
          step={step}
          value={formatFieldValue(value)}
          onChange={(e) =>
            onChange(e.target.value === "" ? "" : Number(e.target.value))
          }
          className={`w-full rounded-2xl border border-[#D0E0EC] bg-[#F8FCFF] px-4 py-3.5 text-[15px] md:text-base font-semibold text-[#2D2D2D] tabular-nums outline-none transition-all duration-200 placeholder:text-[#9BB4C6] hover:border-[#479AD2]/55 hover:bg-white focus:border-[#293C7D] focus:bg-white focus:ring-4 focus:ring-[#293C7D]/10 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none ${
            showPrefix ? "pl-9" : ""
          } ${suffix && suffix !== "₹" ? "pr-12" : ""}`}
        />
        {suffix && suffix !== "₹" ? (
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold uppercase tracking-wider text-[#7A93A8]">
            {suffix}
          </span>
        ) : null}
      </div>
      {hint ? (
        <span className="mt-1.5 block text-xs text-[#6B7C8A] leading-relaxed">
          {hint}
        </span>
      ) : null}
    </label>
  );
}

export function SelectField({ id, label, value, onChange, options }) {
  return (
    <label htmlFor={id} className="block">
      <span className="block text-[13px] font-semibold tracking-wide text-[#293C7D] mb-2">
        {label}
      </span>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none rounded-2xl border border-[#D0E0EC] bg-[#F8FCFF] px-4 py-3.5 pr-10 text-[15px] md:text-base font-semibold text-[#2D2D2D] outline-none transition-all duration-200 hover:border-[#479AD2]/55 hover:bg-white focus:border-[#293C7D] focus:bg-white focus:ring-4 focus:ring-[#293C7D]/10"
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#7A93A8] text-xs"
        >
          ▾
        </span>
      </div>
    </label>
  );
}

export function ResultCard({ title, rows }) {
  const heroRows = rows.filter((row) => row.emphasize);
  const secondaryRows = rows.filter((row) => !row.emphasize);
  const primary = heroRows[0];
  const extraHero = heroRows.slice(1);

  return (
    <div className="relative overflow-hidden rounded-[24px] border border-[#293C7D]/15 bg-gradient-to-br from-[#232D63] via-[#293C7D] to-[#1E3A5F] text-white shadow-[0_20px_50px_-28px_rgba(35,45,99,0.65)]">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: "url('/images/insurance/risk-management/bg.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "contain",
        }}
      />
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#FFC300]/10 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-[#479AD2]/20 blur-2xl" />

      <div className="relative p-5 md:p-7">
        <div className="mb-5 flex items-center justify-between gap-3">
          <p className="!text-[11px] font-semibold uppercase tracking-[0.16em] !text-[#FFC300] m-0">
            {title}
          </p>
          <span className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider !text-white/75">
            Illustrative
          </span>
        </div>

        {primary ? (
          <div className="mb-6">
            <p className="text-sm !text-white/70 mb-2 m-0">{primary.label}</p>
            <p className="text-[28px] md:text-[34px] xl:text-[38px] font-bold leading-none tracking-tight tabular-nums !text-white break-words m-0">
              {primary.value}
            </p>
          </div>
        ) : null}

        {(extraHero.length > 0 || secondaryRows.length > 0) && (
          <dl className="m-0 space-y-0 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
            {[...extraHero, ...secondaryRows].map(({ label, value }, index) => (
              <div
                key={label}
                className={`flex items-start justify-between gap-4 px-4 py-3.5 ${
                  index > 0 ? "border-t border-white/10" : ""
                }`}
              >
                <dt className="text-sm !text-white/65 leading-snug ">{label}</dt>
                <dd className="m-0 text-sm md:text-[15px] font-semibold text-right tabular-nums !text-white">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </div>
  );
}

const DEFAULT_DISCLAIMER =
  "This calculator provides illustrative estimates only. Outputs depend on your assumptions and do not constitute investment advice, research recommendations, or guaranteed returns. Investments in the securities market are subject to market risks. PrimeIdea Ventures does not guarantee returns.";

export default function CalculatorShell({
  title,
  explanation,
  children,
  results,
  disclaimer = DEFAULT_DISCLAIMER,
  ctaHref = "/portfolio-review-vadodara",
  ctaLabel = "Book Portfolio Review",
}) {
  return (
    <article
      aria-labelledby="calculator-heading"
      className="relative overflow-hidden rounded-[28px] border border-[#D0E0EC] bg-white shadow-[0_24px_60px_-40px_rgba(41,60,125,0.45)]"
    >
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#479AD2] via-[#293C7D] to-[#FFC300]" />

      <header className="border-b border-[#E6F0F7] bg-gradient-to-br from-[#F6FDFF] via-white to-[#EEF6FB] px-5 py-6 md:px-8 md:py-7">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="inline-flex items-center rounded-full bg-[#293C7D]/08 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#293C7D]">
            Live calculator
          </span>
          <span className="inline-flex items-center rounded-full bg-[#FFC300]/25 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7A5A00]">
            Assumptions only
          </span>
        </div>
        <h2
          id="calculator-heading"
          className="text-[22px] md:text-[28px] font-semibold text-[#2D2D2D] mb-3 leading-tight"
        >
          {title}
        </h2>
        <p className="text-sm md:text-[15px] text-[#4D4D4D] leading-relaxed max-w-[760px] m-0">
          {explanation}
        </p>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-0 xl:gap-0">
        <div className="xl:col-span-6 border-b xl:border-b-0 xl:border-r border-[#E6F0F7] p-5 md:p-7">
          <div className="mb-5 flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[#293C7D] text-xs font-bold text-white">
              01
            </span>
            <div>
              <p className="text-sm font-semibold text-[#2D2D2D] m-0">
                Your assumptions
              </p>
              <p className="text-xs text-[#6B7C8A] m-0">
                Adjust inputs — results update instantly
              </p>
            </div>
          </div>
          <div className="space-y-4 rounded-[22px] border border-[#E6F0F7] bg-[#F8FCFF] p-4 md:p-5">
            {children}
          </div>
        </div>

        <div className="xl:col-span-6 p-5 md:p-7 bg-gradient-to-b from-white to-[#F6FDFF]">
          <div className="mb-5 flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[#FFC300] text-xs font-bold text-[#232D63]">
              02
            </span>
            <div>
              <p className="text-sm font-semibold text-[#2D2D2D] m-0">
                Estimated outcome
              </p>
              <p className="text-xs text-[#6B7C8A] m-0">
                Planning range — not a forecast or guarantee
              </p>
            </div>
          </div>
          {results}
        </div>
      </div>

      <div className="mx-5 md:mx-7 mb-5 md:mb-7">
        <div className="relative overflow-hidden flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-[22px] bg-[#232D63] px-5 py-5 md:px-6">
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage: "url('/images/insurance/risk-management/bg.png')",
              backgroundRepeat: "repeat",
              backgroundSize: "contain",
            }}
          />
          <p className="relative text-sm md:text-[15px] !text-white/85 leading-relaxed m-0 max-w-[540px]">
            Use this estimate as a starting point, then continue with a research-led
            portfolio review for suitability-based next steps.
          </p>
          <Link
            href={ctaHref}
            className="relative inline-flex items-center justify-center shrink-0 rounded-xl bg-[#FFC300] px-5 py-3.5 text-sm font-bold text-[#232D63] hover:bg-white transition-colors"
          >
            {ctaLabel}
            <span aria-hidden="true" className="ml-2">
              →
            </span>
          </Link>
        </div>
      </div>

      <div className="mx-5 md:mx-7 mb-5 md:mb-7 flex gap-3 rounded-2xl border border-[#F0E0A8] bg-[#FFF9E8] px-4 py-3.5">
        <ExclamationTriangleIcon
          className="h-5 w-5 shrink-0 text-[#B8860B] mt-0.5"
          aria-hidden="true"
        />
        <p className="text-xs md:text-sm text-[#5C4A14] leading-relaxed m-0">
          <span className="font-semibold text-[#7A5A00]">Disclaimer: </span>
          {disclaimer}
        </p>
      </div>
    </article>
  );
}
