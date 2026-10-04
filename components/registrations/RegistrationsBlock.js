import Link from "next/link";
import {
  REGISTRATION_BLOCKS,
  SEBI_LINKS,
  DISCLOSURE_SHORT,
} from "@/data/registrations";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";

/**
 * Registration disclosure block.
 * variant: "page" (about / regulatory) | "footer" (compact strip)
 */
export default function RegistrationsBlock({
  variant = "page",
  showLinks = true,
  showDisclaimer = true,
  className = "",
}) {
  const isFooter = variant === "footer";

  if (isFooter) {
    return (
      <div className={className}>
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#FFC300]/90 mb-1">
              Registrations &amp; distribution
            </p>
            <p className="text-sm text-white/70 max-w-[520px] leading-relaxed">
              Verify credentials independently on official SEBI / AMFI records.
            </p>
          </div>
          {showLinks && (
            <div className="flex flex-wrap gap-2">
              {SEBI_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-medium text-white/85 transition-colors hover:border-[#FFC300]/40 hover:text-white"
                >
                  {link.label}
                  <span aria-hidden="true" className="text-[#FFC300]">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          )}
        </div>

        <ul className="m-0 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 xl:grid-cols-4">
          {REGISTRATION_BLOCKS.map((block) => (
            <li key={block.title}>
              <div className="h-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 transition-colors hover:border-white/20">
                <div className="mb-2 flex items-start gap-2">
                  <ShieldCheckIcon
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#FFC300]"
                    aria-hidden="true"
                  />
                  <p className="text-[11px] font-semibold leading-snug text-white/90">
                    {block.title}
                  </p>
                </div>
                <p className="pl-6 text-sm font-semibold tabular-nums tracking-wide text-[#FFC300]">
                  {block.lines[0]}
                </p>
                <div className="mt-1.5 space-y-0.5 pl-6">
                  {block.lines.slice(1).map((line) => (
                    <p
                      key={line}
                      className="text-[11px] leading-relaxed text-white/60 tabular-nums"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>

        {showDisclaimer && (
          <p className="mt-4 border-t border-white/10 pt-4 text-[11px] leading-relaxed text-white/55">
            <span className="font-semibold text-white/75">Disclaimer: </span>
            {DISCLOSURE_SHORT}
          </p>
        )}
      </div>
    );
  }

  return (
    <div
      className={
        className || "rounded-[20px] border border-[#E3ECF5] bg-white p-5 md:p-8"
      }
    >
      <div className="mb-6">
        <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-2">
          Registrations &amp; distribution
        </p>
        <h2 className="text-[22px] md:text-[28px] font-semibold text-[#2D2D2D] leading-snug">
          How PrimeIdea is registered
        </h2>
        <p className="mt-2 text-sm md:text-base text-[#4D4D4D] leading-relaxed max-w-[720px]">
          PrimeIdea Ventures operates as a research-led firm and distributor of financial
          products. Verify registrations independently on the official SEBI / AMFI records.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {REGISTRATION_BLOCKS.map((block) => (
          <div
            key={block.title}
            className="rounded-2xl border border-[#E3ECF5] bg-[#F6FDFF] p-5"
          >
            <div className="mb-2 flex items-start gap-2">
              <ShieldCheckIcon
                className="mt-0.5 h-5 w-5 shrink-0 text-[#293C7D]"
                aria-hidden="true"
              />
              <p className="text-sm font-bold text-[#293C7D]">{block.title}</p>
            </div>
            <p className="pl-7 text-base font-semibold tabular-nums text-[#232D63]">
              {block.lines[0]}
            </p>
            <ul className="m-0 mt-1.5 space-y-1 p-0 list-none pl-7">
              {block.lines.slice(1).map((line) => (
                <li
                  key={line}
                  className="text-sm text-[#4D4D4D] leading-relaxed tabular-nums"
                >
                  {line}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {showLinks && (
        <div className="mt-5 flex flex-wrap gap-3">
          {SEBI_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-semibold text-[#293C7D] hover:text-[#479AD2]"
            >
              {link.label}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
          <Link
            href="/regulatory-disclosures"
            className="inline-flex items-center gap-1 text-sm font-semibold text-[#293C7D] hover:text-[#479AD2]"
          >
            Full regulatory disclosures
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      )}

      {showDisclaimer && (
        <p className="mt-5 text-sm text-[#4D4D4D] leading-relaxed border-t border-[#E3ECF5] pt-4">
          <strong className="text-[#2D2D2D]">Disclaimer: </strong>
          {DISCLOSURE_SHORT}
        </p>
      )}
    </div>
  );
}
