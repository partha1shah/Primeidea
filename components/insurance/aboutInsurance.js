import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import Image from "next/image";

const AboutInsurance = () => { 
    return (
        <section>
        <div className="bg-[#F6FDFF] py-16">
          <div className="2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] mx-auto px-4">
            <div className="flex justify-between flex-col-reverse md:flex-row">
              <FadeUpOneByOneAnimation className="w-full md:w-[50%]">
                <h2 className="text-[28px] xl:text-[32px] leading-[130%] font-light mb-2 text-[#04102A]">
                  Insurance Solutions for Financial Security
                </h2>
                <p className="text-base sm:text-lg font-light">
                  At Primeidea, we understand that insurance plays a crucial
                  role in a comprehensive wealth management plan. Our expert
                  insurance solutions are designed to safeguard your wealth,
                  protect your family, and ensure your financial goals are
                  achieved, regardless of life&apos;s uncertainties.
                </p>
              </FadeUpOneByOneAnimation>
              <FadeUpOneByOneAnimation className="w-[50%] flex md:justify-end items-baseline mb-3 md:mb-0">
                <Image
                  src="/images/icons/p.png"
                  width={110}
                  height={105}
                  alt=""
                  aria-hidden="true"
                />
              </FadeUpOneByOneAnimation>
            </div>
          </div>
        </div>
        <div className="bg-[#F6FDFF] pt-8 pb-16">
          <div className="2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] mx-auto px-4">
            <FadeUpOneByOneAnimation className="max-w-[652px]">
              <h2 className="text-[28px] lg:text-[32px] font-light mb-1 text-[#04102A] leading-[130%]">
                The Role of Insurance in Wealth Management
              </h2>
              <p className="text-base sm:text-lg font-light mb-4">
                Insurance is more than just a safeguard; it&apos;s a key components
                in managing and preserving your wealth, Here&apos;s why it&apos;s
                essential
              </p>
            </FadeUpOneByOneAnimation>
            <ul className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between mx-[-10px]">
              <li className="px-[10px] mb-4 lg:mb-0 sm:max-w-full w-full sm:w-1/2 lg:w-1/3">
                <FadeUpOneByOneAnimation className=" shadow-[0_0_4px_0_rgba(0,0,0,0.25)] bg-white p-4 rounded-lg h-full">
                  <Image
                    src="/images/insurance/wealth-management/image.jpg"
                    width={387}
                    height={159}
                    alt="Illustration supporting this section"
                    className="w-full"
                  />
                  <h3 className="mb-[5px] sm:mb-[10px] mt-[10px] text-xl sm:text-2xl font-bold">
                    Mitigate Risks
                  </h3>
                  <p className="text-base sm:text-lg font-normal">
                    Protect yourself from financial losses due to unforeseen
                    events, ensuring that your wealth remains intact.
                  </p>
                </FadeUpOneByOneAnimation>
              </li>
              <li className="px-[10px] mb-4 lg:mb-0 sm:max-w-full w-full sm:w-1/2 lg:w-1/3">
                <FadeUpOneByOneAnimation className=" shadow-[0_0_4px_0_rgba(0,0,0,0.25)] bg-white p-4 rounded-lg h-full">
                  <Image
                    src="/images/insurance/wealth-management/image1.jpg"
                    width={387}
                    height={159}
                    alt="Illustration supporting this section"
                    className="w-full"
                  />
                  <h3 className="mb-[5px] sm:mb-[10px] mt-[10px] text-xl sm:text-2xl font-bold">
                    Preserve Wealth
                  </h3>
                  <p className="text-base sm:text-lg font-normal">
                    Secure your assets and investments, enabling you to continue
                    growing your wealth without interruptions.
                  </p>
                </FadeUpOneByOneAnimation>
              </li>
              <li className="px-[10px] mb-4 lg:mb-0 sm:max-w-full w-full sm:w-1/2 lg:w-1/3">
                <FadeUpOneByOneAnimation className=" shadow-[0_0_4px_0_rgba(0,0,0,0.25)] bg-white p-4 rounded-lg h-full">
                  <Image
                    src="/images/insurance/wealth-management/image3.jpg"
                    width={387}
                    height={159}
                    alt="Illustration supporting this section"
                    className="w-full"
                  />
                  <h3 className="mb-[5px] sm:mb-[10px] mt-[10px] text-xl sm:text-2xl font-bold">
                    Gain Peace of Mind
                  </h3>
                  <p className="text-base sm:text-lg font-normal">
                    With comprehensive coverage, you can confidently focus on
                    your financial goals, knowing you’re protected.
                  </p>
                </FadeUpOneByOneAnimation>
              </li>
            </ul>
          </div>
        </div>
      </section>
    )
 }

 export default AboutInsurance;