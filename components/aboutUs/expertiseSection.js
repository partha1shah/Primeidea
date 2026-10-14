import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import Image from "next/image";

const ExpertiseSection = () => {
  return (
    <section>
      <div className="py-16 2xl:py-20  mx-auto bg-[url('/images/icons/p-vector.png')] bg-no-repeat bg-[center_top_13%] lg:bg-[left_center]">        
        <div className="max-w-[1120px] mx-auto px-2">
          <div className="flex justify-between items-center flex-col lg:flex-row mx-[-15px]">
            <div className="w-[80%] md:w-1/2 px-[15px] mb-10 lg:mb-0">
              <Image
                src="/images/about-us/founder.jpg"
                width={485}
                height={509}
                alt="Founder - Mr. Partha Shah"
              />
            </div>
            <FadeUpOneByOneAnimation className="w-full md:w-[70%] lg:w-1/2 px-[30px] md:px-[15px]">
              <h2 className="text-[32px] md:text-[36px] xl:text-[40px] leading-[120%] font-medium mb-3 md:mb-4 xl:mb-6 text-black">
                Empowering Your <br /> Financial Future
              </h2>
              <p className="text-lg xl:text-xl mb-2 xl:mb-3 font-medium text-black">
                ​At <strong>Primeidea</strong>, we are dedicated to guiding you through your financial journey with expertise, integrity, and a strictly personalized approach. We believe that wealth management is not just about keeping score with money, it is about creating the freedom to live your life on your own terms.
              </p>
              <p className="text-lg xl:text-xl mb-4 xl:mb-6 font-medium text-black">
                ​Working with Primeidea gives you real-time peace of mind, knowing that your investments are optimized and your taxes are filed on schedule.
              </p>
              <a
                href="/contact-us"
                className="bg-[#293C7D] text-lg font-bold rounded-md text-white px-6 py-3 inline-flex items-center"
              >
                Get in touch
                <Image
                  src="/images/icons/arrow-square-right.png"
                  width={21}
                  height={21}
                  alt="" aria-hidden="true"
                  className="ml-2"
                />
              </a>
            </FadeUpOneByOneAnimation>
          </div>
          <FadeUpOneByOneAnimation className="pt-16 2xl:pt-18">
            <h2 className="text-[32px] md:text-[34px] xl:text-[36px] leading-[120%] text-center font-medium mb-3 md:mb-4 xl:mb-6 text-black">
              ​Our Research & Investment Expertise
            </h2>
            <p className="text-lg xl:text-xl mb-4 xl:mb-6 font-medium text-black">
              ​Our investment strategies are anchored by <strong>Mr. Partha Shah</strong>, a key member of our leadership team who spearheads our Research division. A <strong>SEBI Registered Research Analyst (INH000017815)</strong> with a robust academic foundation, Mr. Shah is an Engineering Graduate (BE) with a Master’s in Finance (MS Finance). 
            </p>
            <p className="text-lg xl:text-xl font-medium text-black">
              He has successfully qualified for CFA (Chartered Financial Analyst) Level 2 and the RIA Level 1 & 2 examinations (examination credentials only — not SEBI Registered Investment Adviser registration), bringing deep technical expertise to our portfolio construction. <strong>His rigorous analysis supports PrimeIdea’s specialized offerings, including Portfolio Management Services (PMS), Specialized Investment Funds (SIF), and Alternate Investment Funds (AIF), where distribution and suitability review are permitted.</strong> To ensure consistent excellence and regulatory adherence across the organization, our <strong>Relationship Managers hold relevant NISM certifications</strong> and support a research-led portfolio review process.
            </p>
          </FadeUpOneByOneAnimation>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
