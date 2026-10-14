import Image from "next/image";

const ExpertiseSection = () => {
  return (
    <>
      <div className="2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] mx-auto px-4 py-16">
        <div className="flex justify-between">
          <div className="w-[50%]">
            <h2 className="text-[32px] font-light mb-1 text-[#04102A]">
              Our Expertise
            </h2>
            <p className="text-lg font-light">
              Primeidea offers a comprehensive range of wealth management
              services designed to meet your unique financial needs. From
              personalized financial planning to strategic investment advisory,
              we provide the expertise you need to achieve your financial goals.
            </p>
          </div>
          <div className="w-[50%] flex justify-end items-baseline">
            <Image
              src="/images/icons/p.png"
              width={110}
              height={105}
              alt=""
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
      <div className="2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] mx-auto px-4">
        <h2 className="text-[32px] font-light mb-2 text-black">Services</h2>
        <div className="flex justify-center flex-wrap	mx-[-8px] 2xl:mx-[-12px]">
          <div className="px-[8px] 2xl:px-[12px] mb-[16px] w-full sm:w-[50%] md:w-[33.33%] 2xl:w-[20%]">
            <div className="shadow-[_0_0_4px_0_#00000040] bg-white rounded-[20px] p-4 h-full">
              <Image
                src="/images/landing/icons/financial-planning.png"
                width={87}
                height={103}
                alt="Financial Planning"
                className="w-[85px] h-[85px] 2xl:h-[100px] object-contain mt-3 mb-4 lg:my-4"
              />
              <h2 className="text-xl font-bold mb-2">Financial Planning</h2>
              <p className="font-normal text-black">
                Tailored strategies that align with your unique financial goals.
                Primeidea creates detailed plans to guide you toward long-term
                success.
              </p>
            </div>
          </div>
          <div className="px-[8px] 2xl:px-[12px] mb-[16px] w-full sm:w-[50%] md:w-[33.33%] 2xl:w-[20%]">
            <div className="shadow-[_0_0_4px_0_#00000040] bg-white rounded-[20px] p-4 h-full">
              <Image
                src="/images/landing/icons/investment-advisory.png"
                width={100}
                height={103}
                alt="Research-led portfolio review"
                className="w-[85px] h-[85px] 2xl:h-[100px] object-contain mt-3 mb-4 lg:my-4"
              />
              <h2 className="text-xl font-bold mb-2">Portfolio Review</h2>
              <p className="font-normal text-black">
                We use a research-led process to review holdings, goals, and
                risk — without guaranteed or market-beating return claims.
              </p>
            </div>
          </div>
          <div className="px-[8px] 2xl:px-[12px] mb-[16px] w-full sm:w-[50%] md:w-[33.33%] 2xl:w-[20%]">
            <div className="shadow-[_0_0_4px_0_#00000040] bg-white rounded-[20px] p-4 h-full">
              <Image
                src="/images/landing/icons/wealth-preservation.png"
                width={109}
                height={116}
                alt="Investment Planning"
                className="w-[85px] h-[85px] 2xl:h-[100px] object-contain mt-3 mb-4 lg:my-4"
              />
              <h2 className="text-xl font-bold mb-2">Investment Planning</h2>
              <p className="font-normal text-black">
                We protect your wealth for future generations with strategies
                that guard against market volatility and economic changes.
              </p>
            </div>
          </div>

          <div className="px-[8px] 2xl:px-[12px] mb-[16px] w-full sm:w-[50%] md:w-[33.33%] 2xl:w-[20%]">
            <div className="shadow-[_0_0_4px_0_#00000040] bg-white rounded-[20px] p-4 h-full">
              <Image
                src="/images/landing/icons/risk-management.png"
                width={94}
                height={103}
                alt="Risk Management"
                className="w-[85px] h-[85px] 2xl:h-[100px] object-contain mt-3 mb-4 lg:my-4"
              />
              <h2 className="text-xl font-bold mb-2">Risk Management</h2>
              <p className="font-normal text-black">
                We identify and manage risks to secure your financial future,
                ensuring steady growth of your wealth.
              </p>
            </div>
          </div>

          <div className="px-[8px] 2xl:px-[12px] mb-[16px] w-full sm:w-[50%] md:w-[33.33%] 2xl:w-[20%]">
            <div className="shadow-[_0_0_4px_0_#00000040] bg-white rounded-[20px] p-4 h-full">
              <Image
                src="/images/landing/icons/retirement-planning.png"
                width={94}
                height={103}
                alt="Retirement Planning"
                className="w-[85px] h-[85px] 2xl:h-[100px] object-contain mt-3 mb-4 lg:my-4"
              />
              <h2 className="text-xl font-bold mb-2">Retirement Planning</h2>
              <p className="font-normal text-black">
                We design retirement plans for a comfortable, secure future,
                providing steady income and peace of mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpertiseSection;
