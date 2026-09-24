import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import Image from "next/image";
import Link from "next/link";
import {
  ChartBarIcon,
  BuildingLibraryIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const categories = [
  {
    title: "Equity & Markets",
    description: "Direct and market-linked growth options reviewed for suitability and concentration.",
    Icon: ChartBarIcon,
    products: [
      "Direct Equity Stocks",
      "ETFs",
      "IPOs",
      "Unlisted Shares",
      "REITs",
      "InvITs",
    ],
  },
  {
    title: "Mutual Funds & SIPs",
    description: "Scheme selection and review across categories — with overlap and risk clarity.",
    href: "/mutual-fund-investment-support-vadodara",
    Icon: SparklesIcon,
    products: [
      "Mutual Funds Schemes",
      "SIPs",
      "Lumpsum Investment Plans",
      "Index & Hybrid Funds",
      "ELSS",
      "Multi-Asset Allocation",
    ],
  },
  {
    title: "Fixed Income",
    description: "Income and capital-preservation options assessed for credit, rate, and liquidity risk.",
    href: "/fixed-income-investments-vadodara",
    Icon: BuildingLibraryIcon,
    products: [
      "Fixed Income Products",
      "Corporate Bonds",
      "Government Securities",
      "Tax-Free Bonds",
      "Capital Gains Bond",
      "Target Maturity Funds",
    ],
  },
  {
    title: "Protection, Retirement & Gold",
    description: "Planning support across insurance, retirement products, and gold-linked options.",
    href: "/insurance-planning-vadodara",
    Icon: ShieldCheckIcon,
    products: [
      "Life Insurance Policies",
      "Health Insurance Plans",
      "NPS",
      "PPF & SCSS",
      "Gold ETFs",
      "Sovereign Gold Bonds",
    ],
  },
];

const specialtyProducts = [
  {
    label: "PMS",
    image: "/images/home/icons/pms.png",
    href: "/pms-aif-sif-investment-support-gujarat-india",
  },
  {
    label: "AIF",
    image: "/images/home/icons/stocks.png",
    href: "/pms-aif-sif-investment-support-gujarat-india",
  },
  {
    label: "SIF",
    image: "/images/home/icons/personal-cfo.png",
    href: "/pms-aif-sif-investment-support-gujarat-india",
  },
  { label: "Fixed Deposit", image: "/images/home/icons/fixed-deposit.png" },
  { label: "Gold", image: "/images/home/icons/gold.png" },
  {
    label: "NRI Support",
    image: "/images/home/icons/nri-help-desk.png",
    href: "/nri-investment-support-india",
  },
];

const ProductUniverseSection = () => {
  return (
    <section
      aria-labelledby="product-universe-heading"
      className="bg-[#232D63] py-14 md:py-20 bg-[url('/images/insurance/risk-management/bg.png')] bg-repeat bg-contain bg-center"
    >
      <div className="2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10 md:mb-12">
          <FadeUpOneByOneAnimation className="max-w-[680px]">
            <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#FFC300] mb-3">
              What we cover
            </p>
            <h2
              id="product-universe-heading"
              className="text-[26px] md:text-[32px] 2xl:text-[36px] font-light text-white leading-[125%] mb-4"
            >
              Product <strong className="font-semibold">Universe</strong>
            </h2>
            <p className="text-base md:text-lg text-white/80 leading-relaxed">
              Mutual Funds Schemes, Direct Equity Stocks, ETFs, PMS, Fixed Income Products, NPS, Insurance Planning, and more — reviewed through a research-led process for investors across Gujarat and India.
            </p>
          </FadeUpOneByOneAnimation>

          <FadeUpOneByOneAnimation>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 text-base font-semibold text-white hover:text-[#FFC300] transition-colors group whitespace-nowrap"
            >
              <span
                className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#FFC300] text-[#232D63] text-sm leading-none group-hover:translate-x-0.5 transition-transform"
                aria-hidden="true"
              >
                →
              </span>
              Book Portfolio Review
            </Link>
          </FadeUpOneByOneAnimation>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 list-none m-0 p-0 mb-8 md:mb-10">
          {categories.map(({ title, description, Icon, products, href }) => {
            const card = (
              <FadeUpOneByOneAnimation className="group h-full rounded-[20px] border border-white/15 bg-[#293C7D]/45 p-5 md:p-6 transition-colors duration-300 hover:border-[#FFC300]/40 hover:bg-[#293C7D]/70">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-[#232D63] border border-white/10 flex items-center justify-center group-hover:bg-[#FFC300] group-hover:border-[#FFC300] transition-colors duration-300">
                    <Icon
                      className="w-6 h-6 text-[#FFC300] group-hover:text-[#232D63] transition-colors duration-300"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="text-white text-lg md:text-xl font-bold mb-1.5 leading-snug">
                      {title}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
                <ul className="flex flex-wrap gap-2 list-none m-0 p-0">
                  {products.map((product) => (
                    <li
                      key={product}
                      className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs md:text-sm font-medium text-white"
                    >
                      {product}
                    </li>
                  ))}
                </ul>
              </FadeUpOneByOneAnimation>
            );

            return (
              <li key={title}>
                {href ? (
                  <Link href={href} className="block h-full">
                    {card}
                  </Link>
                ) : (
                  card
                )}
              </li>
            );
          })}
        </ul>

        <FadeUpOneByOneAnimation className="rounded-[20px] md:rounded-[24px] border border-white/15 bg-[#293C7D]/35 p-6 md:p-8 mb-8">
          <div className="mb-6">
            <h3 className="text-white text-lg md:text-xl font-semibold mb-1">
              Specialty & distribution support
            </h3>
            <p className="text-white/75 text-sm md:text-base">
              Including PMS, AIF and SIF suitability support where empanelment and compliance allow.
            </p>
          </div>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 list-none m-0 p-0">
            {specialtyProducts.map(({ label, image, href }) => {
              const inner = (
                <>
                  <Image
                    src={image}
                    width={72}
                    height={72}
                    alt={label}
                    className="h-12 w-12 object-contain"
                  />
                  <span className="text-white text-sm font-semibold leading-snug">
                    {label}
                  </span>
                </>
              );

              return (
                <li key={label}>
                  {href ? (
                    <Link
                      href={href}
                      className="flex h-full flex-col items-center justify-center gap-3 rounded-xl border border-white/15 bg-[#232D63]/60 px-3 py-5 text-center hover:border-[#FFC300]/40 transition-colors"
                    >
                      {inner}
                    </Link>
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-3 rounded-xl border border-white/15 bg-[#232D63]/60 px-3 py-5 text-center">
                      {inner}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </FadeUpOneByOneAnimation>

        <FadeUpOneByOneAnimation className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm text-white/70 leading-relaxed max-w-[640px]">
            Investments in the securities market are subject to market risks. Product recommendations are based on suitability — PrimeIdea Ventures does not guarantee returns.
          </p>
          <Link
            href="/contact-us"
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

export default ProductUniverseSection;
