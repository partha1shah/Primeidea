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
                        What is retirement planning, and why is it important?
                      </span>
                      <Image src="/images/icons/circle-down-arrow.png" width={30} height={30} alt="" aria-hidden="true" className="w-[24px] sm:w-[30px] h-[24px] sm:h-[30px] ml-2" />
                    </h2>
                    <div className={`content mt-4 text-base md:text-lg max-w-full md:max-w-[85%] text-[#222222] ${activeTab === 0 ? 'block' : 'hidden'}`}>
                      <p>
                        Retirement planning involves setting financial goals and strategies to ensure a comfortable and secure post-work life. It&apos;s important because it provides financial independence, mitigates inflation risks, and helps meet healthcare and lifestyle needs in retirement.
                      </p>
                    </div>
                    </FadeUpOneByOneAnimation>
                  </li>
                  <li className="bg-[#C6E8FF] p-4 md:p-6 rounded-lg cursor-pointer" onClick={() => handleTabClick(1)}>
                    <FadeUpOneByOneAnimation>
                    <h2 className="flex items-center justify-between text-[18px] md:text-[20px] 2xl:text-[22px] font-semibold text-[#222222]">
                      <span>
                        When is the right time to start retirement planning?
                      </span>
                      <Image src="/images/icons/circle-down-arrow.png" width={30} height={30} alt="" aria-hidden="true" className="w-[24px] sm:w-[30px] h-[24px] sm:h-[30px] ml-2" />
                    </h2>
                    <div className={`content mt-4 text-base md:text-lg max-w-full md:max-w-[85%] text-[#222222] ${activeTab === 1 ? 'block' : 'hidden'}`}>
                      <p>
                        The earlier you start, the better. Starting early allows more time for your investments to grow and reduces the financial burden as you approach retirement.
                      </p>
                    </div>
                    </FadeUpOneByOneAnimation>
                  </li>
                  <li className="bg-[#C6E8FF] p-4 md:p-6 rounded-lg cursor-pointer" onClick={() => handleTabClick(2)}>
                    <FadeUpOneByOneAnimation>
                    <h2 className="flex items-center justify-between text-[18px] md:text-[20px] 2xl:text-[22px] font-semibold text-[#222222]">
                      <span>
                        How much money will I need for a comfortable retirement?
                      </span>
                      <Image src="/images/icons/circle-down-arrow.png" width={30} height={30} alt="" aria-hidden="true" className="w-[24px] sm:w-[30px] h-[24px] sm:h-[30px] ml-2" />
                    </h2>
                    <div className={`content mt-4 text-base md:text-lg max-w-full md:max-w-[85%] text-[#222222] ${activeTab === 2 ? 'block' : 'hidden'}`}>
                      <p>
                        The amount varies based on lifestyle, location, and healthcare needs. Financial advisors often recommend saving 70-80% of your pre-retirement income annually for retirement.
                      </p>
                    </div>
                    </FadeUpOneByOneAnimation>
                  </li>
                  <li className="bg-[#C6E8FF] p-4 md:p-6 rounded-lg cursor-pointer" onClick={() => handleTabClick(3)}>
                    <FadeUpOneByOneAnimation>
                    <h2 className="flex items-center justify-between text-[18px] md:text-[20px] 2xl:text-[22px] font-semibold text-[#222222]">
                      <span>
                        What role does inflation play in retirement planning?
                      </span>
                      <Image src="/images/icons/circle-down-arrow.png" width={30} height={30} alt="" aria-hidden="true" className="w-[24px] sm:w-[30px] h-[24px] sm:h-[30px] ml-2" />
                    </h2>
                    <div className={`content mt-4 text-base md:text-lg max-w-full md:max-w-[85%] text-[#222222] ${activeTab === 3 ? 'block' : 'hidden'}`}>
                      <p>
                        Inflation reduces purchasing power over time, so retirement plans should factor in rising costs to ensure your savings maintain value and buying power.
                      </p>
                    </div>
                    </FadeUpOneByOneAnimation>
                  </li>
                  <li className="bg-[#C6E8FF] p-4 md:p-6 rounded-lg cursor-pointer" onClick={() => handleTabClick(4)}>
                    <FadeUpOneByOneAnimation>
                    <h2 className="flex items-center justify-between text-[18px] md:text-[20px] 2xl:text-[22px] font-semibold text-[#222222]">
                      <span>
                        Can I still plan for retirement if I&apos;m close to retirement age?
                      </span>
                      <Image src="/images/icons/circle-down-arrow.png" width={30} height={30} alt="" aria-hidden="true" className="w-[24px] sm:w-[30px] h-[24px] sm:h-[30px] ml-2" />
                    </h2>
                    <div className={`content mt-4 text-base md:text-lg max-w-full md:max-w-[85%] text-[#222222] ${activeTab === 4 ? 'block' : 'hidden'}`}>
                      <p>
                        Yes! While starting early is ideal, it&apos;s never too late. Focus on saving more aggressively, reducing debts, and exploring alternative income sources like part-time work or passive income streams.
                      </p>
                    </div>
                    </FadeUpOneByOneAnimation>
                  </li>
                  <li className="bg-[#C6E8FF] p-4 md:p-6 rounded-lg cursor-pointer" onClick={() => handleTabClick(5)}>
                    <FadeUpOneByOneAnimation>
                    <h2 className="flex items-center justify-between text-[18px] md:text-[20px] 2xl:text-[22px] font-semibold text-[#222222]">
                      <span>
                        How can I balance retirement savings with current financial goals?
                      </span>
                      <Image src="/images/icons/circle-down-arrow.png" width={30} height={30} alt="" aria-hidden="true" className="w-[24px] sm:w-[30px] h-[24px] sm:h-[30px] ml-2" />
                    </h2>
                    <div className={`content mt-4 text-base md:text-lg max-w-full md:max-w-[85%] text-[#222222] ${activeTab === 5 ? 'block' : 'hidden'}`}>
                      <p>
                      Create a comprehensive financial plan that prioritizes immediate needs while allocating a portion of your income to long-term retirement savings. Automating contributions can help maintain consistency.
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