import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import Link from "next/link";
import {
  ChartBarIcon,
  ClipboardDocumentCheckIcon,
  ScaleIcon,
  Squares2X2Icon,
  PresentationChartLineIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const checkpoints = [
  {
    title: "Position size",
    description: "How much of the book depends on one stock, and whether that size still fits the goal.",
    Icon: ScaleIcon,
  },
  {
    title: "Overlap with funds",
    description: "The same company can sit in a direct holding and inside mutual funds at the same time.",
    Icon: Squares2X2Icon,
  },
  {
    title: "Sector concentration",
    description: "Several stocks can still be one sector bet. That is reviewed before adding more.",
    Icon: ChartBarIcon,
  },
  {
    title: "Liquidity and drawdown",
    description: "What happens if the price falls, and how easy it is to reduce the holding.",
    Icon: PresentationChartLineIcon,
  },
  {
    title: "Business and risk questions",
    description: "Research asks about the business and the risks. A rising price is not the research.",
    Icon: ShieldCheckIcon,
  },
  {
    title: "Written next step",
    description: "Keep, reduce, or study further — written down before any trade is discussed.",
    Icon: ClipboardDocumentCheckIcon,
  },
];

const whoItsFor = [
  {
    title: "Investors with a few large stocks",
    description: "A small number of shares can drive most of the risk in an otherwise mixed book.",
  },
  {
    title: "Families mixing stocks and SIPs",
    description: "Direct equity and mutual funds are reviewed as one portfolio, not two stories.",
  },
  {
    title: "Clients outside Vadodara",
    description: "The office is in Vadodara. The same equity review can be done on a video call.",
  },
];

const relatedPages = [
  { title: "Portfolio Review", href: "/portfolio-review", description: "Start with the full book, not a single stock tip." },
  { title: "Research Process", href: "/research-process", description: "How holdings are reviewed before a change." },
  { title: "Equity review note", href: "/docs/research/equity-market-note.pdf", description: "Download the education note on equity concentration." },
  { title: "Mutual Fund Support", href: "/mutual-fund-investment-support", description: "Scheme overlap next to direct holdings." },
];

export default function DirectEquityContent() {
  return (
    <>
      <section className="bg-white py-14 md:py-16" aria-labelledby="equity-intro-heading">
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-6">
              <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-3">
                Direct equity
              </p>
              <h2 id="equity-intro-heading" className="text-[28px] md:text-[36px] font-light text-[#2D2D2D] leading-[120%] mb-4">
                Research on stocks you already hold —{" "}
                <strong className="font-semibold">not a tip list</strong>
              </h2>
              <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed mb-4">
                PrimeIdea Ventures is a Vadodara-based research-led firm serving investors across Gujarat and India.
                Direct equity support is guided by Partha Shah, SEBI Registered Research Analyst INH000017815.
              </p>
              <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed">
                The review looks at concentration, overlap, and whether each holding still has a role.
                It is not a buy or sell tip, not a guaranteed return, and not SEBI Registered Investment Adviser advice unless separately registered.
              </p>
            </div>
            <ul className="lg:col-span-6 grid grid-cols-1 gap-3 list-none m-0 p-0">
              {whoItsFor.map((item, index) => (
                <li key={item.title}>
                  <FadeUpOneByOneAnimation className="rounded-2xl border border-[#E3ECF5] bg-[#F6FDFF] p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#479AD2] mb-1">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="text-lg font-bold text-[#293C7D] mb-1">{item.title}</h3>
                    <p className="text-sm md:text-base text-[#4D4D4D] leading-relaxed m-0">{item.description}</p>
                  </FadeUpOneByOneAnimation>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#F6FDFF] py-14 md:py-16" aria-labelledby="equity-checkpoints-heading">
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <FadeUpOneByOneAnimation className="max-w-[720px] mb-8">
            <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-3">What we review</p>
            <h2 id="equity-checkpoints-heading" className="text-[28px] md:text-[36px] font-light text-[#2D2D2D] leading-[120%] m-0">
              Equity checkpoints — <strong className="font-semibold">size and risk first</strong>
            </h2>
          </FadeUpOneByOneAnimation>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none m-0 p-0">
            {checkpoints.map(({ title, description, Icon }) => (
              <li key={title}>
                <FadeUpOneByOneAnimation className="h-full rounded-[20px] border border-[#E3ECF5] bg-white p-5 md:p-6">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#F6FDFF] border border-[#E3ECF5] mb-4">
                    <Icon className="h-5 w-5 text-[#293C7D]" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-bold text-[#293C7D] mb-2">{title}</h3>
                  <p className="text-sm text-[#4D4D4D] leading-relaxed m-0">{description}</p>
                </FadeUpOneByOneAnimation>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <h2 className="text-[24px] md:text-[30px] font-semibold text-[#2D2D2D] mb-6">Related pages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedPages.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-[20px] border border-[#E3ECF5] bg-[#F6FDFF] p-5 hover:border-[#293C7D]/40 transition-colors">
                <h3 className="text-base font-bold text-[#293C7D] mb-1">{link.title}</h3>
                <p className="text-sm text-[#4D4D4D] leading-relaxed m-0">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
