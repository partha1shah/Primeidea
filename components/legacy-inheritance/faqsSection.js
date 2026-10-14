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
                        What is legacy & inheritance planning and why is it important?
                      </span>
                      <Image src="/images/icons/circle-down-arrow.png" width={30} height={30} alt="" aria-hidden="true" className="w-[24px] sm:w-[30px] h-[24px] sm:h-[30px] ml-2" />
                    </h2>
                    <div className={`content mt-4 text-base md:text-lg max-w-full md:max-w-[85%] text-[#222222] ${activeTab === 0 ? 'block' : 'hidden'}`}>
                      <p>
                        Legacy and inheritance planning involves preparing to transfer your assets, values, and wishes to your loved ones or chosen beneficiaries. It&apos;s essential to minimize disputes, manage taxes, and ensure your desires are honored.
                      </p>
                    </div>
                    </FadeUpOneByOneAnimation>
                  </li>
                  <li className="bg-[#C6E8FF] p-4 md:p-6 rounded-lg cursor-pointer" onClick={() => handleTabClick(1)}>
                    <FadeUpOneByOneAnimation>
                    <h2 className="flex items-center justify-between text-[18px] md:text-[20px] 2xl:text-[22px] font-semibold text-[#222222]">
                      <span>
                        What documents are typically included in it?
                      </span>
                      <Image src="/images/icons/circle-down-arrow.png" width={30} height={30} alt="" aria-hidden="true" className="w-[24px] sm:w-[30px] h-[24px] sm:h-[30px] ml-2" />
                    </h2>
                    <div className={`content mt-4 text-base md:text-lg max-w-full md:max-w-[85%] text-[#222222] ${activeTab === 1 ? 'block' : 'hidden'}`}>
                      <p>
                        Key documents include wills, trusts, powers of attorney, healthcare directives, and beneficiary designations. These ensure your assets are distributed according to your wishes.
                      </p>
                    </div>
                    </FadeUpOneByOneAnimation>
                  </li>
                  <li className="bg-[#C6E8FF] p-4 md:p-6 rounded-lg cursor-pointer" onClick={() => handleTabClick(2)}>
                    <FadeUpOneByOneAnimation>
                    <h2 className="flex items-center justify-between text-[18px] md:text-[20px] 2xl:text-[22px] font-semibold text-[#222222]">
                      <span>
                        Are there tax implications for inheritance?
                      </span>
                      <Image src="/images/icons/circle-down-arrow.png" width={30} height={30} alt="" aria-hidden="true" className="w-[24px] sm:w-[30px] h-[24px] sm:h-[30px] ml-2" />
                    </h2>
                    <div className={`content mt-4 text-base md:text-lg max-w-full md:max-w-[85%] text-[#222222] ${activeTab === 2 ? 'block' : 'hidden'}`}>
                      <p>
                        Yes, inheritance may be subject to estate, inheritance, or capital gains taxes, depending on your location and the size of your estate. Proper planning can minimize or eliminate these tax burdens.
                      </p>
                    </div>
                    </FadeUpOneByOneAnimation>
                  </li>
                  <li className="bg-[#C6E8FF] p-4 md:p-6 rounded-lg cursor-pointer" onClick={() => handleTabClick(3)}>
                    <FadeUpOneByOneAnimation>
                    <h2 className="flex items-center justify-between text-[18px] md:text-[20px] 2xl:text-[22px] font-semibold text-[#222222]">
                      <span>
                        What role do life insurance policies play in legacy planning?
                      </span>
                      <Image src="/images/icons/circle-down-arrow.png" width={30} height={30} alt="" aria-hidden="true" className="w-[24px] sm:w-[30px] h-[24px] sm:h-[30px] ml-2" />
                    </h2>
                    <div className={`content mt-4 text-base md:text-lg max-w-full md:max-w-[85%] text-[#222222] ${activeTab === 3 ? 'block' : 'hidden'}`}>
                      <p>
                        Life insurance can provide immediate financial support to beneficiaries, help cover estate taxes, and ensure liquidity in your estate without selling assets.
                      </p>
                    </div>
                    </FadeUpOneByOneAnimation>
                  </li>
                  <li className="bg-[#C6E8FF] p-4 md:p-6 rounded-lg cursor-pointer" onClick={() => handleTabClick(4)}>
                    <FadeUpOneByOneAnimation>
                    <h2 className="flex items-center justify-between text-[18px] md:text-[20px] 2xl:text-[22px] font-semibold text-[#222222]">
                      <span>
                        When should I review or update my legacy and inheritance plan?
                      </span>
                      <Image src="/images/icons/circle-down-arrow.png" width={30} height={30} alt="" aria-hidden="true" className="w-[24px] sm:w-[30px] h-[24px] sm:h-[30px] ml-2" />
                    </h2>
                    <div className={`content mt-4 text-base md:text-lg max-w-full md:max-w-[85%] text-[#222222] ${activeTab === 4 ? 'block' : 'hidden'}`}>
                      <p>
                        Regularly review your plan and update it after major life events such as marriage, divorce, childbirth, relocation, or a significant change in assets.
                      </p>
                    </div>
                    </FadeUpOneByOneAnimation>
                  </li>
                  <li className="bg-[#C6E8FF] p-4 md:p-6 rounded-lg cursor-pointer" onClick={() => handleTabClick(5)}>
                    <FadeUpOneByOneAnimation>
                    <h2 className="flex items-center justify-between text-[18px] md:text-[20px] 2xl:text-[22px] font-semibold text-[#222222]">
                      <span>
                        What happens if I don’t have a legacy and inheritance plan in place?
                      </span>
                      <Image src="/images/icons/circle-down-arrow.png" width={30} height={30} alt="" aria-hidden="true" className="w-[24px] sm:w-[30px] h-[24px] sm:h-[30px] ml-2" />
                    </h2>
                    <div className={`content mt-4 text-base md:text-lg max-w-full md:max-w-[85%] text-[#222222] ${activeTab === 5 ? 'block' : 'hidden'}`}>
                      <p>
                        If you pass away without a plan, your assets will be distributed according to local laws of intestacy. This process may not reflect your wishes and can cause delays, disputes, and increased costs for your loved ones.
                      </p>
                    </div>
                    </FadeUpOneByOneAnimation>
                  </li>
                  <li className="bg-[#C6E8FF] p-4 md:p-6 rounded-lg cursor-pointer" onClick={() => handleTabClick(6)}>
                    <FadeUpOneByOneAnimation>
                    <h2 className="flex items-center justify-between text-[18px] md:text-[20px] 2xl:text-[22px] font-semibold text-[#222222]">
                      <span>
                        Can I include charitable donations in my legacy plan?
                      </span>
                      <Image src="/images/icons/circle-down-arrow.png" width={30} height={30} alt="" aria-hidden="true" className="w-[24px] sm:w-[30px] h-[24px] sm:h-[30px] ml-2" />
                    </h2>
                    <div className={`content mt-4 text-base md:text-lg max-w-full md:max-w-[85%] text-[#222222] ${activeTab === 6 ? 'block' : 'hidden'}`}>
                      <p>
                        Yes, you can designate a portion of your estate to charities or foundations of your choice. Options like charitable trusts or bequests in your will allow you to leave a lasting impact while potentially reducing estate taxes.
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