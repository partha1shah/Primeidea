import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import Image from "next/image";

const ExpertiseSection = () => {
  return (
    <section>
      <div className="pt-16 2xl:pt-20 pb-16 lg:pb-20  mx-auto bg-[url('/images/icons/p-vector.png')] bg-no-repeat bg-[left_top_0] lg:bg-left-top">        
        <div className="max-w-[1150px] mx-auto px-2">
          <div className="flex justify-between items-center flex-col lg:flex-row mx-[-15px]">
            <FadeUpOneByOneAnimation className="w-full sm:w-[80%] md:w-1/2 px-[18px] mb-10 lg:mb-0">
              <Image
                src="/images/become-a-partner/become-partner-section.png"
                width={600}
                height={403}
                alt="Become a Partner"
                className="rounded-md"
              />
            </FadeUpOneByOneAnimation>
            <FadeUpOneByOneAnimation className="w-full md:w-[70%] lg:w-1/2 px-[18px] md:px-[15px] xl:pl-8">
              <h2 className="text-[28px] sm:text-[32px] md:text-[36px] leading-[120%] font-medium mb-3 text-black">
                {/* Empower Your Clients and <br/> Grow Your Business */}
                Why Partner with <br/> PrimeIdea Ventures?
              </h2>
              <p className="text-lg xl:text-xl mb-3 font-medium text-black">
                Partners use PrimeIdea’s research process with their own clients. PrimeIdea is a SEBI Registered Research Analyst practice based in Vadodara. It is not a SEBI Registered Investment Adviser unless separately registered, and it does not guarantee returns for a partner’s clients.
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
                  alt="Read All"
                  className="ml-2"
                />
              </a>
            </FadeUpOneByOneAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
