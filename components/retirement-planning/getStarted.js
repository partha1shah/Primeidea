import FadeUpOneByOneRightAnimation from "@/animations/FadeUpOneByOneRightAnimation";
import Image from "next/image";

const GetStarted = () => {
  return (
    <section>
      <div className="py-16">
        <div className="2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] mx-auto px-4">
          <div className="relative">
            <Image
              src="/images/retirement-planning/get-started-bg.png"
              width={1397}
              height={438}
              alt="Get Started"
              className="rounded-[20px] border-[3px] border-[#479AD2] shadow-[0_0_9px_0_#00000040] hidden md:inline-block"  
            />
             <Image
              src="/images/retirement-planning/get-started-mobile-bg.png"
              width={1397}
              height={438}
              alt="Get Started"
              className="rounded-[20px] border-[3px] border-[#479AD2] shadow-[0_0_9px_0_#00000040] inline-block md:hidden"  
            />
            <div className="absolute w-full top-[30%] sm:top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-center ">
              <h2 className="text-[32px] md:text-4xl font-semibold text-[#14606E] mb-2"><FadeUpOneByOneRightAnimation>Sail Smoothly</FadeUpOneByOneRightAnimation></h2>
              <h4 className="text-xl md:text-2xl font-medium text-[#14606E]"><FadeUpOneByOneRightAnimation>into Retirement with Our Help</FadeUpOneByOneRightAnimation></h4>
            </div>
            <div className="absolute bottom-0 right-0 flex bg-[#479AD2] pl-3 sm:pl-6 md:pl-10 xl:pl-12 pr-3 sm:pr-6 py-3 xl:py-5 rounded-tl-[32px] xl:rounded-tl-[42px] rounded-br-[22px] xl:rounded-br-[22px]">
              <Image
                src="/images/retirement-planning/get-start.png"
                width={60}
                height={60}
                alt="Get Started"
                className="mr-2 sm:mr-4 w-[30px] sm:w-[50px] xl:w-[60px] h-[30px] sm:h-[50px] xl:h-[60px]"
              />
              <a href="" className="flex items-center text-white">
                <span className="text-base sm:text-[22px] xl:text-[28px]">
                    Get Started
                </span>
                <Image
                  src="/images/icons/arrow-right-light.png"
                  width={22}
                  height={12}
                  alt="Arrow Right"                  
                  className="ml-3"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
