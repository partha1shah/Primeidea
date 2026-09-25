import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import PortfolioReviewForm from "@/components/portfolioReview/PortfolioReviewForm";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpTrayIcon,
  BuildingOffice2Icon,
  ChartPieIcon,
  ClipboardDocumentCheckIcon,
  DevicePhoneMobileIcon,
  ScaleIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const whoShouldBook = [
  {
    title: "Scattered SIPs and overlapping funds",
    description: "Several schemes doing similar work, with no clear allocation picture.",
  },
  {
    title: "Mixed equity, funds, and deposits",
    description: "Holdings across products that have never been reviewed as one book.",
  },
  {
    title: "Family or inherited portfolios",
    description: "Accounts in more than one name that need a single, research-led view.",
  },
  {
    title: "NRIs with India holdings",
    description: "India investments reviewed from anywhere, with a Vadodara research desk behind the process.",
  },
];

const reviewOutcomes = [
  {
    title: "Allocation and concentration",
    description: "How the book is split across asset class, sector, and market-cap — and where it clusters.",
    Icon: ChartPieIcon,
  },
  {
    title: "Overlap and product mix",
    description: "Fund and holding overlap, plus whether insurance, cash, and debt sit in the right place.",
    Icon: ScaleIcon,
  },
  {
    title: "Risk path, not headlines",
    description: "Consistency, drawdown behaviour, and whether the path matches how you live with volatility.",
    Icon: ShieldCheckIcon,
  },
  {
    title: "Practical next steps",
    description: "Tax, cost, liquidity, and goals checked so a change is usable — not only correct on paper.",
    Icon: ClipboardDocumentCheckIcon,
  },
];

const shareItems = [
  { title: "Mutual fund CAS", hint: "CAMS / KFintech PDF" },
  { title: "Demat or broker list", hint: "PDF, Excel, or screenshot" },
  { title: "Deposits, bonds, NPS", hint: "If they sit in the book" },
  { title: "Term and health cover", hint: "A short summary is enough" },
  { title: "Goals and cash needs", hint: "What this review should solve" },
];

const uploadSteps = [
  { step: "01", title: "Share holdings", body: "CAS, broker list, or a simple snapshot." },
  { step: "02", title: "Tell us the concern", body: "Overlap, allocation, tax, or family structure." },
  { step: "03", title: "We prepare the review", body: "Office in Vadodara or a video call — same process." },
];

const relatedPages = [
  {
    title: "Research Process",
    href: "/research-process",
    description: "The five-step method behind every structured review.",
  },
  {
    title: "SEBI RA credentials",
    href: "/sebi-registered-research-analyst",
    description: "Partha Shah, SEBI Registered Research Analyst INH000017815.",
  },
  {
    title: "Mutual Fund Investment Support",
    href: "/mutual-fund-investment-support",
    description: "SIP, overlap, cost, and scheme-role review.",
  },
  {
    title: "Fixed Income Investments",
    href: "/fixed-income-investments",
    description: "Debt, bonds, and stability allocation — risk before yield.",
  },
];

const WHATSAPP_HREF =
  "https://api.whatsapp.com/send?phone=918141027000&text=" +
  encodeURIComponent(
    "Hello, I would like a research-led portfolio review with PrimeIdea Ventures. I can share my current holdings."
  );

export default function PortfolioReviewContent() {
  return (
    <>
      <section
        id="portfolio-review-overview"
        aria-labelledby="review-intro-heading"
        className="bg-white py-14 md:py-16 scroll-mt-24"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-7">
              <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-3">
                Portfolio review services
              </p>
              <h2
                id="review-intro-heading"
                className="text-[28px] md:text-[36px] font-light text-[#2D2D2D] leading-[120%] mb-4"
              >
                A structured review of what you already hold —{" "}
                <strong className="font-semibold">before you invest further</strong>
              </h2>
              <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed mb-4">
                PrimeIdea Ventures is a Vadodara-based research-led wealth management and
                portfolio review firm serving investors across Gujarat and India. Reviews are
                guided by Partha Shah, SEBI Registered Research Analyst INH000017815.
              </p>
              <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed mb-6">
                Meet at the Vadodara office or continue on a video call. The work is the same:
                suitability, overlap, allocation, and next steps — not a product push, and not a
                return promise.
              </p>

              <div className="flex items-center gap-4 rounded-2xl border border-[#E3ECF5] bg-[#F6FDFF] p-4">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-2 ring-[#FFC300]/50">
                  <Image
                    src="/images/about-us/founder.jpg"
                    width={128}
                    height={128}
                    alt="Partha Shah SEBI Registered Research Analyst PrimeIdea Ventures"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div>
                  <p className="text-base font-semibold text-[#293C7D]">Partha Shah</p>
                  <p className="text-sm text-[#4D4D4D] leading-snug">
                    SEBI RA · <span className="font-semibold text-[#293C7D]">INH000017815</span>
                  </p>
                  <p className="text-sm text-[#4D4D4D] mt-1">
                    Research-led review from Vadodara, including office and online consultation.
                  </p>
                </div>
              </div>
            </div>

            <ul className="lg:col-span-5 grid grid-cols-1 gap-3 list-none m-0 p-0">
              {whoShouldBook.map((item, index) => (
                <li key={item.title}>
                  <FadeUpOneByOneAnimation className="rounded-2xl border border-[#E3ECF5] bg-[#F6FDFF] p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#479AD2] mb-1">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="text-base font-bold text-[#293C7D] mb-1">{item.title}</h3>
                    <p className="text-sm text-[#4D4D4D] leading-relaxed">{item.description}</p>
                  </FadeUpOneByOneAnimation>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="what-you-get-heading"
        className="bg-[#F6FDFF] py-14 md:py-16"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <FadeUpOneByOneAnimation className="max-w-[720px] mb-8 md:mb-10">
            <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-3">
              What the review covers
            </p>
            <h2
              id="what-you-get-heading"
              className="text-[28px] md:text-[36px] font-light text-[#2D2D2D] leading-[120%] mb-3"
            >
              What you walk away{" "}
              <strong className="font-semibold">understanding</strong>
            </h2>
            <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed">
              The review is analysis and a written next-step view. It is not SEBI Registered
              Investment Adviser advice unless PrimeIdea is separately registered.
            </p>
          </FadeUpOneByOneAnimation>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none m-0 p-0">
            {reviewOutcomes.map(({ title, description, Icon }) => (
              <li key={title}>
                <FadeUpOneByOneAnimation className="flex h-full gap-4 rounded-[20px] border border-[#E3ECF5] bg-white p-5 md:p-6">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F6FDFF] border border-[#E3ECF5]">
                    <Icon className="h-6 w-6 text-[#293C7D]" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-[#293C7D] mb-1">{title}</h3>
                    <p className="text-sm md:text-base text-[#4D4D4D] leading-relaxed">
                      {description}
                    </p>
                  </div>
                </FadeUpOneByOneAnimation>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="upload-portfolio"
        aria-labelledby="upload-heading"
        className="relative overflow-hidden bg-[#232D63] bg-[url('/images/insurance/risk-management/bg.png')] bg-repeat bg-contain bg-center py-14 md:py-16 scroll-mt-24"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#293C7D]/50 to-[#232D63] pointer-events-none" />
        <div className="relative mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <div className="rounded-[28px] border border-white/10 bg-[#293C7D]/35 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-5 p-6 md:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-white/10">
                <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#FFC300] mb-3">
                  Share your book
                </p>
                <h2
                  id="upload-heading"
                  className="text-[28px] md:text-[34px] font-light text-white leading-[120%] mb-4"
                >
                  Upload your portfolio{" "}
                  <strong className="font-semibold">for review</strong>
                </h2>
                <p className="text-base md:text-lg !text-white/80 leading-relaxed mb-8">
                  Send a CAS or holdings snapshot and your main concern. Used only to prepare the
                  review — not to push products.
                </p>

                <ol className="space-y-3 list-none m-0 p-0 mb-8">
                  {uploadSteps.map((item) => (
                    <li key={item.step} className="flex gap-4">
                      <span className="text-sm font-bold tabular-nums text-[#FFC300] pt-0.5">
                        {item.step}
                      </span>
                      <div>
                        <p className="text-base font-bold !text-white">{item.title}</p>
                        <p className="text-sm !text-white/70 leading-relaxed">{item.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>

                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#FFC300] mb-3">
                  Helpful to include
                </p>
                <ul className="grid grid-cols-1 gap-2 list-none m-0 p-0 mb-8">
                  {shareItems.map((item, index) => (
                    <li
                      key={item.title}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5"
                    >
                      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#232D63] border border-white/10">
                        <span className="text-[11px] font-bold tabular-nums text-[#FFC300]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </span>
                      <span>
                        <span className="block text-sm font-semibold !text-white">{item.title}</span>
                        <span className="block text-xs !text-white/60">{item.hint}</span>
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+918141027000"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FFC300] px-4 py-3 text-sm font-bold text-[#232D63] hover:bg-white transition-colors"
                  >
                    <DevicePhoneMobileIcon className="h-4 w-4" aria-hidden="true" />
                    Call +91 81410 27000
                  </a>
                  <a
                    href={WHATSAPP_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 px-4 py-3 text-sm font-bold !text-white hover:border-[#FFC300] hover:!text-[#FFC300] transition-colors"
                  >
                    WhatsApp holdings
                  </a>
                </div>
                <p className="mt-4 flex items-start gap-2 text-xs !text-white/60 leading-relaxed">
                  <BuildingOffice2Icon className="h-4 w-4 shrink-0 text-[#FFC300] mt-0.5" aria-hidden="true" />
                  V3 Landmark, 306-307, Atladara, Vadodara, Gujarat 390012
                </p>
              </div>

              <FadeUpOneByOneAnimation className="lg:col-span-7 bg-[#F6FDFF] p-6 md:p-8 lg:p-10">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#232D63]">
                      <ArrowUpTrayIcon className="h-6 w-6 text-[#FFC300]" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#479AD2]">
                        Review request
                      </p>
                      <p className="text-xl font-bold text-[#293C7D]">Start the review</p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-flex rounded-full border border-[#E3ECF5] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#293C7D]">
                    Secure form
                  </span>
                </div>
                <PortfolioReviewForm />
              </FadeUpOneByOneAnimation>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="review-related-heading"
        className="bg-[#F6FDFF] py-14 md:py-16 border-t border-[#E3ECF5]"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <FadeUpOneByOneAnimation className="mb-8 md:mb-10">
            <h2
              id="review-related-heading"
              className="text-[24px] md:text-[30px] font-semibold text-[#2D2D2D] mb-2"
            >
              Related pages
            </h2>
            <p className="text-[#4D4D4D] text-sm md:text-base max-w-[640px]">
              How the process works, who leads the research, and how PrimeIdea is registered.
            </p>
          </FadeUpOneByOneAnimation>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedPages.map((link) => (
              <FadeUpOneByOneAnimation key={link.title}>
                <Link
                  href={link.href}
                  className="flex h-full flex-col rounded-[20px] border border-[#E3ECF5] bg-white p-5 hover:border-[#293C7D]/40 transition-colors"
                >
                  <UserGroupIcon className="h-5 w-5 text-[#293C7D] mb-3" aria-hidden="true" />
                  <h3 className="text-base font-bold text-[#293C7D] mb-1">{link.title}</h3>
                  <p className="text-sm text-[#4D4D4D] leading-relaxed">{link.description}</p>
                </Link>
              </FadeUpOneByOneAnimation>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
