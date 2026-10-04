import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import Link from "next/link";
import {
  ChartBarSquareIcon,
  ScaleIcon,
  PresentationChartLineIcon,
  BanknotesIcon,
  UserGroupIcon,
  DocumentChartBarIcon,
} from "@heroicons/react/24/outline";

const offerings = [
  {
    title: "HNI Portfolio Review",
    description:
      "Structured review of multi-product portfolios for concentration, overlap, and suitability.",
    Icon: DocumentChartBarIcon,
  },
  {
    title: "PMS Distribution Support",
    description:
      "Suitability-led PMS support where distribution and compliance rights are in place.",
    Icon: PresentationChartLineIcon,
  },
  {
    title: "AIF / SIF Suitability",
    description:
      "Clarity on minimums, liquidity, costs, and who should consider — or avoid — these products.",
    Icon: ScaleIcon,
  },
  {
    title: "Tax-Efficient Planning",
    description:
      "Portfolio planning that accounts for tax impact, exit loads, and practical implementation.",
    Icon: BanknotesIcon,
  },
  {
    title: "Concentrated Risk Review",
    description:
      "Identify single-stock, sector, and product concentration that may raise portfolio risk.",
    Icon: ChartBarSquareIcon,
  },
  {
    title: "Intergenerational Planning",
    description:
      "Annual family portfolio review and longer-term wealth continuity conversations.",
    Icon: UserGroupIcon,
  },
];

const productsCovered = [
  "Mutual Funds Schemes",
  "Direct Equity Stocks",
  "ETFs",
  "PMS",
  "Fixed Income Products",
  "Corporate Bonds",
  "Government Securities",
  "REITs & InvITs",
  "Gold ETFs",
  "Sovereign Gold Bonds",
];

const PrivateWealthSection = () => {
  return (
    <section
      aria-labelledby="private-wealth-heading"
      className="bg-white py-14 md:py-20"
    >
      <div className="2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-10 md:mb-12">
          <FadeUpOneByOneAnimation className="lg:col-span-5">
            <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-3">
              For HNIs across Gujarat & India
            </p>
            <h2
              id="private-wealth-heading"
              className="text-[28px] md:text-[36px] 2xl:text-[40px] font-light text-[#2D2D2D] leading-[120%] mb-4"
            >
              Private <strong className="font-semibold">Wealth</strong>
            </h2>
            <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed mb-6">
              Research-led private wealth support for high net worth investors — portfolio review, suitability across products, and disciplined planning without guaranteed-return claims.
            </p>
            <Link
              href="/private-wealth-management-gujarat-india"
              className="inline-flex items-center gap-2 text-base font-semibold text-[#293C7D] hover:text-[#232D63] transition-colors group"
            >
              <span
                className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#FFC300] text-[#232D63] text-sm leading-none group-hover:translate-x-0.5 transition-transform"
                aria-hidden="true"
              >
                →
              </span>
              Book Private Wealth Consultation
            </Link>
          </FadeUpOneByOneAnimation>

          <div className="lg:col-span-7">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none m-0 p-0">
              {offerings.map(({ title, description, Icon }) => (
                <li key={title}>
                  <FadeUpOneByOneAnimation className="group h-full rounded-[20px] border border-[#D6E4EE] bg-[#F6FDFF] p-5 transition-colors duration-300 hover:border-[#293C7D] hover:bg-white">
                    <div className="w-11 h-11 mb-4 rounded-xl bg-white border border-[#D6E4EE] flex items-center justify-center group-hover:bg-[#293C7D] group-hover:border-[#293C7D] transition-colors duration-300">
                      <Icon
                        className="w-5 h-5 text-[#293C7D] group-hover:text-white transition-colors duration-300"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-[#293C7D] text-base font-bold mb-2 leading-snug">
                      {title}
                    </h3>
                    <p className="text-sm font-medium text-[#5A5A5A] leading-relaxed">
                      {description}
                    </p>
                  </FadeUpOneByOneAnimation>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <FadeUpOneByOneAnimation className="rounded-[20px] border border-[#D6E4EE] bg-[#F6FDFF] p-5 md:p-6">
          <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#479AD2] mb-3">
            Products covered
          </p>
          <ul className="flex flex-wrap gap-2 list-none m-0 p-0">
            {productsCovered.map((item) => (
              <li
                key={item}
                className="inline-flex rounded-full border border-[#D6E4EE] bg-white px-3 py-1.5 text-xs md:text-sm font-medium text-[#2D2D2D]"
              >
                {item}
              </li>
            ))}
          </ul>
        </FadeUpOneByOneAnimation>
      </div>
    </section>
  );
};

export default PrivateWealthSection;
