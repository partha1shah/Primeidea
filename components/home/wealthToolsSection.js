import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import Image from "next/image";
import Link from "next/link";
import {
  CalculatorIcon,
  ChartBarIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  ChartPieIcon,
  BanknotesIcon,
  ArrowPathIcon,
  PresentationChartLineIcon,
  ScaleIcon,
  HomeModernIcon,
} from "@heroicons/react/24/outline";

const tools = [
  {
    id: "sip",
    title: "SIP Calculator",
    description: "Estimate the future value of systematic investments over your chosen time horizon.",
    Icon: CalculatorIcon,
  },
  {
    id: "lumpsum",
    title: "Lumpsum Future Value",
    description: "Project how a one-time investment may grow based on assumed returns and tenure.",
    Icon: ChartBarIcon,
  },
  {
    id: "retirement",
    title: "Retirement Corpus",
    description: "Approximate the corpus needed for retirement income goals and planning gaps.",
    Icon: HomeModernIcon,
  },
  {
    id: "education",
    title: "Child Education",
    description: "Plan for future education costs with inflation-aware goal estimates.",
    Icon: AcademicCapIcon,
  },
  {
    id: "insurance",
    title: "Insurance Need",
    description: "Get a directional view of life cover needs based on income and family priorities.",
    Icon: ShieldCheckIcon,
  },
  {
    id: "allocation",
    title: "Asset Allocation Checker",
    description: "Compare your current mix against a risk-aligned allocation starting point.",
    Icon: ChartPieIcon,
  },
  {
    id: "emergency",
    title: "Emergency Fund",
    description: "Estimate a practical cash buffer based on monthly expenses and stability needs.",
    Icon: BanknotesIcon,
  },
  {
    id: "swp",
    title: "SWP Calculator",
    description: "Model systematic withdrawals and how long a corpus may support income needs.",
    Icon: ArrowPathIcon,
  },
  {
    id: "cagr-xirr",
    title: "CAGR & XIRR",
    description: "Understand return consistency across periods — beyond a single headline number.",
    Icon: PresentationChartLineIcon,
  },
  {
    id: "emi-vs-invest",
    title: "EMI vs Investment",
    description: "Compare debt repayment and investment trade-offs with a clear side-by-side view.",
    Icon: ScaleIcon,
  },
];

const WealthToolsSection = () => {
  return (
    <section
      aria-labelledby="wealth-tools-heading"
      className="bg-white py-14 md:py-20"
    >
      <div className="2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10 md:mb-12">
          <FadeUpOneByOneAnimation className="max-w-[680px]">
            <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-3">
              Planning utilities
            </p>
            <h2
              id="wealth-tools-heading"
              className="text-[26px] md:text-[32px] 2xl:text-[36px] font-light text-[#2D2D2D] leading-[125%] mb-4"
            >
              Wealth <strong className="font-semibold">Tools</strong>
            </h2>
            <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed">
              Practical calculators to explore goals, corpus needs, and planning trade-offs — then continue with a research-led portfolio review for suitability-based next steps.
            </p>
          </FadeUpOneByOneAnimation>

          <FadeUpOneByOneAnimation>
            <Link
              href="/wealth-tools?tab=calculators"
              className="inline-flex items-center gap-2 text-base font-semibold text-[#293C7D] hover:text-[#232D63] transition-colors group whitespace-nowrap"
            >
              <span
                className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#FFC300] text-[#232D63] text-sm leading-none group-hover:translate-x-0.5 transition-transform"
                aria-hidden="true"
              >
                →
              </span>
              Open Calculators
            </Link>
          </FadeUpOneByOneAnimation>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 list-none m-0 p-0 mb-10">
          {tools.map(({ id, title, description, Icon }) => (
            <li key={id} className="sm:col-span-1 lg:col-span-1">
              <Link
                href={`/wealth-tools?tool=${id}`}
                className="group block h-full rounded-[20px] border border-[#D6E4EE] bg-[#F6FDFF] p-5 transition-colors duration-300 hover:border-[#293C7D] hover:bg-white"
              >
                <div className="w-11 h-11 mb-4 rounded-xl bg-white border border-[#D6E4EE] flex items-center justify-center group-hover:bg-[#293C7D] group-hover:border-[#293C7D] transition-colors duration-300">
                  <Icon
                    className="w-5 h-5 text-[#293C7D] group-hover:text-white transition-colors duration-300"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-[#293C7D] text-[15px] md:text-base font-bold mb-2 leading-snug min-h-[2.75rem]">
                  {title}
                </h3>
                <p className="text-[13px] md:text-sm font-medium text-[#5A5A5A] leading-relaxed">
                  {description}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <FadeUpOneByOneAnimation className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 rounded-[20px] bg-[#232D63] bg-[url('/images/insurance/risk-management/bg.png')] bg-no-repeat bg-contain bg-top p-6 md:p-8">
          <div className="max-w-[640px]">
            <h3 className="text-white text-lg md:text-xl font-semibold mb-2">
              Tools inform. A portfolio review decides next steps.
            </h3>
            <p className="text-white/75 text-sm md:text-base leading-relaxed">
              Calculator outputs are illustrative estimates only and do not constitute advice or guaranteed returns. Use them as a starting point, then book a research-led portfolio review for suitability-based guidance.
            </p>
          </div>
          <Link
            href="/portfolio-review-vadodara"
            className="bg-[#FFC300] text-[#232D63] text-base font-bold rounded-md px-5 py-3 inline-flex items-center hover:bg-white transition-colors shrink-0"
          >
            Book Portfolio Review
            <Image
              src="/images/icons/arrow-square-right-dark.png"
              width={21}
              height={21}
              alt=""
              className="ml-2"
            />
          </Link>
        </FadeUpOneByOneAnimation>
      </div>
    </section>
  );
};

export default WealthToolsSection;
