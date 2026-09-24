import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import Image from "next/image";
import Link from "next/link";
import {
  AcademicCapIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";
import { COMPARISONS } from "@/data/comparisons";

const BOOK_HREF = "/book-portfolio-review";

export function ComparisonHubContent() {
  return (
    <>
      <section className="relative overflow-hidden bg-white py-14 md:py-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(71,154,210,0.14) 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="relative mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <FadeUpOneByOneAnimation className="max-w-[760px] mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#479AD2] mb-3">
              Investor education
            </p>
            <h2 className="text-[28px] md:text-[36px] font-light text-[#2D2D2D] leading-[120%] mb-4">
              Compare roles and products —{" "}
              <strong className="font-semibold">without return promises</strong>
            </h2>
            <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed m-0">
              PrimeIdea Ventures is a Vadodara-based research-led wealth management and
              portfolio review firm serving investors across Gujarat and India. These guides
              are educational. Guided by Partha Shah, SEBI Registered Research Analyst
              INH000017815.
            </p>
          </FadeUpOneByOneAnimation>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none m-0 p-0">
            {COMPARISONS.map((item, index) => (
              <li key={item.slug}>
                <Link
                  href={`/comparisons/${item.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-[#D0E0EC] bg-[#F6FDFF] p-6 hover:border-[#293C7D] transition-all hover:shadow-[0_18px_40px_-28px_rgba(41,60,125,0.55)]"
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-[#479AD2] via-[#293C7D] to-[#FFC300] transition-transform duration-300 group-hover:scale-x-100"
                  />
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#293C7D] text-[#FFC300]">
                      <ScaleIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="text-[11px] font-bold tabular-nums text-[#479AD2]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#479AD2] mb-1 m-0">
                    {item.shortTitle}
                  </p>
                  <h3 className="text-lg font-bold text-[#293C7D] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#4D4D4D] leading-relaxed m-0 flex-1 mb-4">
                    {item.summary}
                  </p>
                  <span className="text-sm font-semibold text-[#293C7D] inline-flex items-center gap-1">
                    Open guide
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

      <section className="bg-[#F6FDFF] py-12 md:py-16">
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#232D63] via-[#293C7D] to-[#1E3A5F] px-5 py-7 md:px-9 md:py-9">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#FFC300]/15 blur-3xl" />
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] !text-[#FFC300] mb-2 m-0">
                  Next step
                </p>
                <h2 className="text-[22px] md:text-[28px] font-semibold !text-white mb-3 m-0">
                  Connect education to your portfolio
                </h2>
                <p className="text-sm md:text-[15px] !text-white/75 leading-relaxed m-0">
                  Comparisons frame questions. A research-led review connects them to your
                  holdings — without guaranteed-return language.
                </p>
              </div>
              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3">
                <Link
                  href={BOOK_HREF}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FFC300] px-5 py-3.5 text-sm font-bold text-[#232D63] hover:bg-white transition-colors"
                >
                  Book Portfolio Review
                  <Image
                    src="/images/icons/arrow-square-right-dark.png"
                    width={18}
                    height={18}
                    alt=""
                  />
                </Link>
                <Link
                  href="/knowledge-centre"
                  className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-5 py-3.5 text-sm font-bold !text-white hover:bg-white/20 transition-colors"
                >
                  Knowledge Centre
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function ComparisonArticleContent({ comparison }) {
  const { columns, rows, takeaways, whenToUse, relatedServices, faqs } = comparison;
  const otherGuides = COMPARISONS.filter((c) => c.slug !== comparison.slug).slice(0, 3);

  return (
    <>
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <FadeUpOneByOneAnimation className="max-w-[760px] mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#479AD2] mb-3">
              Comparison guide
            </p>
            <h2 className="text-[26px] md:text-[34px] font-light text-[#2D2D2D] leading-[120%] mb-4">
              {comparison.summary.split("—")[0].trim()}
              {comparison.summary.includes("—") ? (
                <>
                  {" — "}
                  <strong className="font-semibold">
                    {comparison.summary.split("—").slice(1).join("—").trim()}
                  </strong>
                </>
              ) : null}
            </h2>
            <p className="text-base text-[#4D4D4D] leading-relaxed m-0">
              Educational content only. Investments are subject to market risks. PrimeIdea
              Ventures does not guarantee returns. Research process guided by Partha Shah,
              SEBI Registered Research Analyst INH000017815.
            </p>
          </FadeUpOneByOneAnimation>

          <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {columns.map((col) => (
              <div
                key={col.id}
                className={`rounded-2xl border p-5 ${
                  col.highlight
                    ? "border-[#293C7D] bg-[#293C7D]"
                    : "border-[#E3ECF5] bg-[#F6FDFF]"
                }`}
              >
                <p
                  className={`text-[11px] font-bold uppercase tracking-[0.12em] mb-1 m-0 ${
                    col.highlight ? "!text-[#FFC300]" : "text-[#479AD2]"
                  }`}
                >
                  {col.tagline}
                </p>
                <h3
                  className={`text-lg font-bold m-0 ${
                    col.highlight ? "!text-white" : "text-[#293C7D]"
                  }`}
                >
                  {col.name}
                </h3>
              </div>
            ))}
          </div>

          <div className="overflow-x-auto rounded-[24px] border border-[#E3ECF5] shadow-[0_20px_50px_-36px_rgba(41,60,125,0.35)]">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="bg-gradient-to-r from-[#232D63] to-[#293C7D]">
                  <th className="px-4 py-3.5 text-xs font-bold uppercase tracking-wider !text-white/80">
                    Lens
                  </th>
                  {columns.map((col) => (
                    <th
                      key={col.id}
                      className="px-4 py-3.5 text-xs font-bold uppercase tracking-wider !text-[#FFC300]"
                    >
                      {col.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={row.lens} className={i % 2 === 0 ? "bg-white" : "bg-[#F6FDFF]"}>
                    <th className="px-4 py-3.5 text-sm font-semibold text-[#293C7D] align-top">
                      {row.lens}
                    </th>
                    {columns.map((col) => (
                      <td key={col.id} className="px-4 py-3.5 text-sm text-[#4D4D4D]">
                        {row[col.id]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-[#6B7C8A] m-0">
            Context, not ranking. Read all scheme / offer documents carefully before investing.
          </p>
        </div>
      </section>

      <section className="bg-[#F6FDFF] py-12 md:py-16">
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 rounded-[24px] border border-[#D0E0EC] bg-white p-6 md:p-7">
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#293C7D] text-[#FFC300]">
                  <CheckCircleIcon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h2 className="text-xl font-bold text-[#293C7D] m-0">Key takeaways</h2>
              </div>
              <ul className="space-y-3 list-none m-0 p-0">
                {takeaways.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-[#4D4D4D] leading-relaxed">
                    <CheckCircleIcon
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#479AD2]"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 rounded-[24px] border border-[#D0E0EC] bg-white p-6 md:p-7">
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6FDFF] border border-[#E3ECF5] text-[#293C7D]">
                  <AcademicCapIcon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h2 className="text-xl font-bold text-[#293C7D] m-0">
                  {whenToUse[0]?.title || "When to use"}
                </h2>
              </div>
              <ul className="space-y-2.5 list-none m-0 p-0">
                {(whenToUse[0]?.items || []).map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-[#4D4D4D]">
                    <ArrowRightIcon
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#FFC300]"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {faqs?.length ? (
            <div className="mt-6 rounded-[24px] border border-[#D0E0EC] bg-white p-6 md:p-7">
              <h2 className="text-xl font-bold text-[#293C7D] mb-4">Quick answers</h2>
              <ul className="space-y-4 list-none m-0 p-0">
                {faqs.map((faq) => (
                  <li key={faq.question}>
                    <p className="text-sm font-semibold text-[#2D2D2D] mb-1 m-0">
                      {faq.question}
                    </p>
                    <p className="text-sm text-[#4D4D4D] leading-relaxed m-0">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <h2 className="text-[22px] md:text-[28px] font-light text-[#2D2D2D] mb-6">
            Related <strong className="font-semibold">pages</strong>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {relatedServices.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-[20px] border border-[#E3ECF5] bg-[#F6FDFF] p-5 hover:border-[#293C7D]/40 transition-colors"
              >
                <h3 className="text-base font-bold text-[#293C7D] mb-1">{link.title}</h3>
                <span className="text-sm font-semibold text-[#293C7D]">
                  Open <span className="!text-[#FFC300]">→</span>
                </span>
              </Link>
            ))}
          </div>

          <h2 className="text-[20px] md:text-[24px] font-semibold text-[#2D2D2D] mb-4">
            More comparison guides
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 list-none m-0 p-0">
            {otherGuides.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/comparisons/${item.slug}`}
                  className="block rounded-xl border border-[#D0E0EC] bg-white px-4 py-3.5 text-sm font-semibold text-[#293C7D] hover:border-[#293C7D] transition-colors"
                >
                  {item.shortTitle}{" "}
                  <span aria-hidden="true" className="!text-[#FFC300]">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href={BOOK_HREF}
              className="inline-flex items-center gap-2 rounded-xl bg-[#FFC300] px-5 py-3 text-sm font-bold text-[#232D63] hover:bg-[#293C7D] hover:!text-white transition-colors"
            >
              Book Portfolio Review
            </Link>
            <Link
              href="/comparisons"
              className="inline-flex items-center gap-2 rounded-xl border border-[#D0E0EC] px-5 py-3 text-sm font-bold text-[#293C7D] hover:border-[#293C7D] transition-colors"
            >
              All comparisons
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
