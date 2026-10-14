"use client"
import { useState } from "react";
import Image from "next/image";
import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";

const FaqsSection = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index === activeTab ? -1 : index);
    };
    return (
        <div className="py-16 sm:py-8">
            <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
              <FadeUpOneByOneAnimation className="text-center max-w-[767px] px-4 mx-auto">
                <h2 className="text-2xl font-medium tracking-tight mb-6 md:mb-8 text-[#04102A] sm:text-3xl">
                  Frequently Asked Questions
                </h2>
               {/* <p className="mb-12 text-base font-semibold leading-6 text-[#4D4D4D]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                </p> */}
              </FadeUpOneByOneAnimation>
              <div className="max-w-[1023px] mx-auto">
                <ul>
                  <li className="bg-[#C6E8FF] p-4 md:p-6 rounded-lg cursor-pointer" onClick={() => handleTabClick(0)}>
                    <FadeUpOneByOneAnimation>
                    <h2 className="flex items-center justify-between text-[18px] md:text-[20px] 2xl:text-[22px] font-semibold text-[#222222]">
                      <span>
                        Why do I need an insurance?
                      </span>
                      <Image src="/images/icons/circle-down-arrow.png" width={30} height={30} alt="" aria-hidden="true" className="w-[24px] sm:w-[30px] h-[24px] sm:h-[30px] ml-2" />
                    </h2>
                    <div className={`content mt-4 text-base md:text-lg max-w-full md:max-w-[85%] text-[#222222] ${activeTab === 0 ? 'block' : 'hidden'}`}>
                      <p>
                      Insurance is a financial tool that provides protection against unexpected losses by transferring risk to an insurer. It is essential for safeguarding assets, ensuring financial stability, and providing peace of mind.
                      </p>
                    </div>
                    </FadeUpOneByOneAnimation>
                  </li>
                  <li className="bg-[#C6E8FF] p-4 md:p-6 rounded-lg cursor-pointer" onClick={() => handleTabClick(1)}>
                    <FadeUpOneByOneAnimation>
                    <h2 className="flex items-center justify-between text-[18px] md:text-[20px] 2xl:text-[22px] font-semibold text-[#222222]">
                      <span>
                        What types of insurance are available?
                      </span>
                      <Image src="/images/icons/circle-down-arrow.png" width={30} height={30} alt="" aria-hidden="true" className="w-[24px] sm:w-[30px] h-[24px] sm:h-[30px] ml-2" />
                    </h2>
                    <div className={`content mt-4 text-base md:text-lg max-w-full md:max-w-[85%] text-[#222222] ${activeTab === 1 ? 'block' : 'hidden'}`}>
                      <p>
                        Common types include health insurance, life insurance, auto insurance, property insurance, liability insurance, and business insurance, among others. Each serves a unique purpose based on individual needs.
                      </p>
                    </div>
                    </FadeUpOneByOneAnimation>
                  </li>
                  <li className="bg-[#C6E8FF] p-4 md:p-6 rounded-lg cursor-pointer" onClick={() => handleTabClick(2)}>
                    <FadeUpOneByOneAnimation>
                    <h2 className="flex items-center justify-between text-[18px] md:text-[20px] 2xl:text-[22px] font-semibold text-[#222222]">
                      <span>
                        How do I determine which type of insurance I need?  
                      </span>
                      <Image src="/images/icons/circle-down-arrow.png" width={30} height={30} alt="" aria-hidden="true" className="w-[24px] sm:w-[30px] h-[24px] sm:h-[30px] ml-2" />
                    </h2>
                    <div className={`content mt-4 text-base md:text-lg max-w-full md:max-w-[85%] text-[#222222] ${activeTab === 2 ? 'block' : 'hidden'}`}>
                      <p>
                        The type of insurance depends on your personal or business risks, financial situation, and long-term goals. A consultation with an insurance advisor can help identify the most suitable coverage.
                      </p>
                    </div>
                    </FadeUpOneByOneAnimation>
                  </li>
                  <li className="bg-[#C6E8FF] p-4 md:p-6 rounded-lg cursor-pointer" onClick={() => handleTabClick(3)}>
                    <FadeUpOneByOneAnimation>
                    <h2 className="flex items-center justify-between text-[18px] md:text-[20px] 2xl:text-[22px] font-semibold text-[#222222]">
                      <span>
                        What factors influence my insurance premiums?
                      </span>
                      <Image src="/images/icons/circle-down-arrow.png" width={30} height={30} alt="" aria-hidden="true" className="w-[24px] sm:w-[30px] h-[24px] sm:h-[30px] ml-2" />
                    </h2>
                    <div className={`content mt-4 text-base md:text-lg max-w-full md:max-w-[85%] text-[#222222] ${activeTab === 3 ? 'block' : 'hidden'}`}>
                      <p>
                        Premiums are determined by factors like age, health, location, coverage amount, claims history, lifestyle choices, and the type of policy. Riskier profiles generally result in higher premiums.
                      </p>
                    </div>
                    </FadeUpOneByOneAnimation>
                  </li>
                  <li className="bg-[#C6E8FF] p-4 md:p-6 rounded-lg cursor-pointer" onClick={() => handleTabClick(4)}>
                    <FadeUpOneByOneAnimation>
                    <h2 className="flex items-center justify-between text-[18px] md:text-[20px] 2xl:text-[22px] font-semibold text-[#222222]">
                      <span>
                        Can I have multiple insurance policies at the same time?
                      </span>
                      <Image src="/images/icons/circle-down-arrow.png" width={30} height={30} alt="" aria-hidden="true" className="w-[24px] sm:w-[30px] h-[24px] sm:h-[30px] ml-2" />
                    </h2>
                    <div className={`content mt-4 text-base md:text-lg max-w-full md:max-w-[85%] text-[#222222] ${activeTab === 4 ? 'block' : 'hidden'}`}>
                      <p>
                        Yes, you can hold multiple policies for different types of coverage, such as health, auto, and property insurance. However, overlapping policies for the same asset may result in limited payouts.
                      </p>
                    </div>
                    </FadeUpOneByOneAnimation>
                  </li>
                  <li className="bg-[#C6E8FF] p-4 md:p-6 rounded-lg cursor-pointer" onClick={() => handleTabClick(5)}>
                    <FadeUpOneByOneAnimation>
                    <h2 className="flex items-center justify-between text-[18px] md:text-[20px] 2xl:text-[22px] font-semibold text-[#222222]">
                      <span>
                        How do I make a claim on my insurance policy?
                      </span>
                      <Image src="/images/icons/circle-down-arrow.png" width={30} height={30} alt="" aria-hidden="true" className="w-[24px] sm:w-[30px] h-[24px] sm:h-[30px] ml-2" />
                    </h2>
                    <div className={`content mt-4 text-base md:text-lg max-w-full md:max-w-[85%] text-[#222222] ${activeTab === 5 ? 'block' : 'hidden'}`}>
                      <p>
                        To file a claim, notify your insurer promptly, provide necessary documentation (like police reports or medical records), and follow their claims process. The insurer will assess and process your claim accordingly.
                      </p>
                    </div>
                    </FadeUpOneByOneAnimation>
                  </li>
                </ul>
              </div>
            </div>
      </div>
    )
 }

 export default FaqsSection;