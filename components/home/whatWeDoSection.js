import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import Image from "next/image";
import Link from "next/link";
import {
  ClipboardDocumentCheckIcon,
  ScaleIcon,
  SunIcon,
  ShieldCheckIcon,
  CalculatorIcon,
  DocumentTextIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    title: "Portfolio Review & Research",
    description:
      "Structured review of holdings, overlaps, risk, and asset allocation before further investing.",
    href: "/portfolio-review",
    Icon: ClipboardDocumentCheckIcon,
  },
  {
    title: "Financial Planning & Advisory",
    description:
      "Goal-based planning across savings, investments, insurance, and tax coordination.",
    href: "/financial-planning-and-investment-advisory",
    Icon: ScaleIcon,
  },
  {
    title: "Retirement Planning",
    description:
      "Corpus planning, withdrawal strategy, and long-term income security for retirement goals.",
    href: "/retirement-planning",
    Icon: SunIcon,
  },
  {
    title: "Insurance Planning",
    description:
      "Term, health, and protection review aligned to family needs and existing cover gaps.",
    href: "/insurance-planning",
    Icon: ShieldCheckIcon,
  },
  {
    title: "Tax Planning Support",
    description:
      "Tax-efficient structuring support within your broader financial plan.",
    href: "/tax-planning-savings",
    Icon: CalculatorIcon,
  },
  {
    title: "Legacy & Succession Coordination",
    description:
      "Partner-enabled coordination for wills, trusts, succession certificates, and estate documentation.",
    href: "/legacy-succession-estate-planning-india",
    Icon: DocumentTextIcon,
  },
];

const WhatWeDoSection = () => {
  return (
    <section aria-labelledby="what-we-do-heading" className="bg-[#F6FDFF]">
      <div className="2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] mx-auto px-4 py-14 md:py-16">
        <div className="text-center max-w-[780px] mx-auto mb-10 md:mb-12">
          <FadeUpOneByOneAnimation>
            <h2
              id="what-we-do-heading"
              className="text-[26px] md:text-[32px] 2xl:text-[36px] font-light text-[#2D2D2D] leading-[125%] mb-4"
            >
              What We <strong className="font-semibold">Do</strong>
            </h2>
            <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed">
              We combine research-led portfolio review with planning support across mutual funds, equity, fixed income, insurance, retirement, tax, and succession coordination — without sales-only language or guaranteed-return claims.
            </p>
          </FadeUpOneByOneAnimation>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map(({ title, description, href, Icon }) => (
            <li key={title}>
              <FadeUpOneByOneAnimation className="h-full">
                <Link
                  href={href}
                  className="group flex flex-col h-full bg-white border border-[#D6E4EE] rounded-[20px] p-5 md:p-6 shadow-[0_2px_12px_rgba(41,60,125,0.04)] hover:border-[#293C7D] hover:shadow-[0_8px_24px_rgba(41,60,125,0.08)] transition-all duration-300"
                >
                  <div className="w-12 h-12 mb-5 rounded-xl bg-[#EAF5FF] flex items-center justify-center group-hover:bg-[#293C7D] transition-colors duration-300">
                    <Icon
                      className="w-6 h-6 text-[#293C7D] group-hover:text-white transition-colors duration-300"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-[#293C7D] text-base md:text-lg font-bold mb-2 leading-snug">
                    {title}
                  </h3>
                  <p className="text-[13px] md:text-sm font-medium text-[#5A5A5A] leading-relaxed mb-4 flex-1">
                    {description}
                  </p>
                  <span className="inline-flex items-center text-sm font-semibold text-[#293C7D] group-hover:text-[#232D63]">
                    Learn more
                    <ArrowRightIcon className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </FadeUpOneByOneAnimation>
            </li>
          ))}
        </ul>

        <FadeUpOneByOneAnimation className="mt-10 md:mt-12 text-center">
          <Link
            href="/research-process"
            className="border-2 border-[#293C7D] text-base md:text-lg font-bold rounded-md text-[#293C7D] px-6 py-3 inline-flex items-center hover:bg-[#293C7D] hover:text-white transition-colors"
          >
            View Research Process
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

export default WhatWeDoSection;
