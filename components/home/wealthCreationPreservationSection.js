import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import Image from "next/image";
import Link from "next/link";

const WealthCreationPreservation = () => {
  return (
    <section aria-labelledby="what-we-do-heading" className="bg-[#F6FDFF]">
      <div className="2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] mx-auto px-4 py-14 md:py-16">
        <div className="text-center max-w-[780px] mx-auto mb-10 md:mb-12">
          <FadeUpOneByOneAnimation>
            <h2
              id="what-we-do-heading"
              className="text-[26px] md:text-[32px] 2xl:text-[36px] font-light text-[#2D2D2D] leading-[125%] mb-4"
            >
              Wealth Creation &amp;{" "}
              <strong className="font-semibold">Preservation</strong>
            </h2>
            <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed">
              Research-led investment planning and financial planning to help you grow wealth with discipline and protect it for the long term — across mutual funds, retirement, tax, and legacy planning for investors in Gujarat and India.
            </p>
          </FadeUpOneByOneAnimation>
        </div>

        <div>
          <div className="flex justify-between flex-col-reverse md:flex-row">
            <div className="w-full md:w-[calc(50%-10px)] px-6 py-6 pb-10 bg-[#fff] rounded-tl-[40px] rounded-tr-[40px] border-2 border-b-0 border-[#cccccc75] relative">
              <FadeUpOneByOneAnimation className="flex relative z-10">
                <Image
                  src="/images/home/icons/investment-planning.png"
                  width={120}
                  height={120}
                  alt="Investment Planning"
                  className="aspect-square min-w-[100px] mr-4 h-full"
                />
                <div>
                  <h3 className="text-[#293C7D] text-xl font-bold mb-1">
                    Investment Planning
                  </h3>
                  <p className="text-[14px] font-semibold line-clamp-4">
                    At Primeidea Ventures, we focus on strategies that protect your wealth while fostering sustained growth and generational impact. Discover our tailored services to build a legacy you can rely on.
                  </p>
                </div>
              </FadeUpOneByOneAnimation>
              <div className="absolute bottom-[-2px] left-0 h-[40px] w-[calc(100%+35px)] bg-white after:content-[''] after:absolute after:bottom-[0] after:right-[-35px] after:w-[70px] after:h-[70px] after:border-l-2 after:border-b-2 after:bg-[#F6FDFF] after:border-[#cccccc75] after:rounded-bl-[40px] hidden md:inline-block"></div>
            </div>
            <Link
              href="/financial-planning-and-investment-advisory"
              className="w-full md:w-[calc(50%-10px)] px-6 py-6 bg-[#fff] h-full rounded-[40px] border-2 border-[#cccccc75] z-10 mb-2 md:mb-0"
            >
              <FadeUpOneByOneAnimation className="flex relative z-10">
                <Image
                  src="/images/home/icons/wealth-preservation.png"
                  width={120}
                  height={120}
                  alt="Financial Planning"
                  className="aspect-square min-w-[100px] mr-4 h-full"
                />
                <div>
                  <h3 className="text-[#293C7D] text-xl font-bold mb-1">
                    Financial Planning
                  </h3>
                  <p className="text-[14px] font-semibold line-clamp-4">
                    Strategic advisory and personalized investment plans thoughtfully designed to grow your wealth with precision, insight, and long-term vision.
                  </p>
                </div>
              </FadeUpOneByOneAnimation>
            </Link>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap justify-between bg-[#fff] p-4 py-6 rounded-[40px] rounded-tl-[0px] rounded-tr-[0px] md:rounded-tr-[40px] border-t-0 border-2 md:border-2 border-[#cccccc75]">
            <div className="mb-4 lg:mb-0 w-full sm:w-1/2 lg:w-1/4 px-2">
              <Link
                href="/research-based-wealth-management"
                className="relative rounded-[12px] shadow-[0px_0px_4px_0px_#00000040] inline-block h-full w-full cursor-pointer"
              >
                <Image
                  src="/images/header/wealth-preservation/RBWM.png"
                  width={425}
                  height={329}
                  alt="Research Based Wealth Management"
                  className="rounded-[12px] w-full h-full"
                />
                <div className="absolute top-0 left-0 p-5">
                  <FadeUpOneByOneAnimation>
                    <h3 className="text-[1.1rem] leading-[130%] xl:text-xl font-bold mb-3">
                      Research Based Wealth Management
                    </h3>
                    <p className="max-w-[240px] text-[14px] sm:text-[16px]">
                      Data-driven strategies for sustainable wealth growth.
                    </p>
                  </FadeUpOneByOneAnimation>
                </div>
              </Link>
            </div>
            <div className="mb-4 lg:mb-0 w-full sm:w-1/2 lg:w-1/4 px-2">
              <Link
                href="/retirement-planning"
                className="relative rounded-[12px] shadow-[0px_0px_4px_0px_#00000040] inline-block h-full w-full cursor-pointer"
              >
                <Image
                  src="/images/header/wealth-preservation/Retirement_PLANING.png"
                  width={282}
                  height={253}
                  alt="Dream Retirement Planning"
                  className="rounded-[12px] w-full h-full"
                />
                <div className="absolute top-0 left-0 p-5">
                  <FadeUpOneByOneAnimation>
                    <h3 className="text-[1.1rem] leading-[130%] xl:text-xl font-bold mb-3">
                      Dream Retirement Planning
                    </h3>
                    <p className="max-w-[240px] text-[14px] sm:text-[16px]">
                      Building the retirement you’ve always dreamed of.
                    </p>
                  </FadeUpOneByOneAnimation>
                </div>
              </Link>
            </div>
            <div className="mb-4 lg:mb-0 w-full sm:w-1/2 lg:w-1/4 px-2">
              <Link
                href="/legacy-succession-estate-planning-india"
                className="relative rounded-[12px] shadow-[0px_0px_4px_0px_#00000040] inline-block h-full w-full cursor-pointer"
              >
                <Image
                  src="/images/header/wealth-preservation/legacy.png"
                  width={289}
                  height={253}
                  alt="Legacy & Inheritance Planning"
                  className="rounded-[12px] w-full h-full"
                />
                <div className="absolute top-0 left-0 p-5">
                  <FadeUpOneByOneAnimation>
                    <h3 className="text-[1.1rem] leading-[130%] xl:text-xl font-bold mb-3">
                      Legacy &amp; Inheritance Planning
                    </h3>
                    <p className="max-w-[240px] text-[14px] sm:text-[16px]">
                      Preserving wealth for future generations.
                    </p>
                  </FadeUpOneByOneAnimation>
                </div>
              </Link>
            </div>
            <div className="mb-4 lg:mb-0 w-full sm:w-1/2 lg:w-1/4 px-2">
              <Link
                href="/tax-planning-savings"
                className="relative rounded-[12px] shadow-[0px_0px_4px_0px_#00000040] inline-block h-full w-full cursor-pointer"
              >
                <Image
                  src="/images/header/wealth-preservation/tax-planning.png"
                  width={284}
                  height={254}
                  alt="Tax Planning & Savings"
                  className="rounded-[12px] w-full h-full"
                />
                <div className="absolute top-0 left-0 p-5">
                  <FadeUpOneByOneAnimation>
                    <h3 className="text-[1.1rem] leading-[130%] xl:text-xl font-bold mb-3">
                      Tax Planning &amp; <br /> Savings
                    </h3>
                    <p className="max-w-[240px] text-[14px] sm:text-[16px]">
                      Maximize savings with efficient tax strategies.
                    </p>
                  </FadeUpOneByOneAnimation>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WealthCreationPreservation;
