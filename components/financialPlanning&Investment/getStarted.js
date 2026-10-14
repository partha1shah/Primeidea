import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import FadeUpOneByOneRightAnimation from "@/animations/FadeUpOneByOneRightAnimation";
import Image from "next/image";
import GetStartedButton from "../getStartedButton";

const GetStarted = () => {
  return (
    <section>
      <div className="py-16">
        <div className="2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] mx-auto px-4">
          <div className="relative">
            <Image
              src="/images/financial-planning/get-started-bg.png"
              width={1376}
              height={419}
              alt="Get Started"
              className="rounded-[20px] border-[3px] border-[#479AD2] shadow-[0_0_9px_0_#00000040] hidden md:inline-block"  
            />
            <Image
              src="/images/financial-planning/get-started-mobile-bg.png"
              width={1376}
              height={419}
              alt="Get Started"
              className="rounded-[20px] border-[3px] border-[#479AD2] shadow-[0_0_9px_0_#00000040] inline-block md:hidden"  
            />
            <div className="absolute top-[30%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-center w-full">
              <h2 className="text-[18px] md:text-[20px] xl:text-2xl font-medium text-[#293C7D] mb-1 sm:mb-2"><FadeUpOneByOneAnimation>Grow your wealth with a</FadeUpOneByOneAnimation></h2>
              <h4 className="text-[20px] sm:text-[22px] md:text-[32px] xl:text-4xl font-semibold text-[#293C7D] capitalize"><FadeUpOneByOneAnimation>personalised financial plan</FadeUpOneByOneAnimation></h4>
            </div>
            <GetStartedButton />
            {/* <div className="absolute bottom-0 right-0 flex bg-[#479AD2] pl-3 sm:pl-6 md:pl-10 xl:pl-12 pr-3 sm:pr-6 py-3 xl:py-5 rounded-tl-[32px] xl:rounded-tl-[42px] rounded-br-[22px] xl:rounded-br-[22px]">
              <Image
                src="/images/retirement-planning/get-start.png"
                width={60}
                height={60}
                alt="Get Started"
                className="mr-2 sm:mr-4 w-[30px] sm:w-[50px] xl:w-[60px] h-[30px] sm:h-[50px] xl:h-[60px]"
              />
              <button  className="flex items-center text-white">
                <span className="text-base sm:text-[22px] xl:text-[28px]">
                    Get Started
                </span>
                <Image
                  src="/images/icons/arrow-right-light.png"
                  width={22}
                  height={12}
                  alt="" aria-hidden="true"                  
                  className="ml-3"
                />
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
