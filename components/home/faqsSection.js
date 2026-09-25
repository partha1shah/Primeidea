"use client";

import { useState } from "react";
import Image from "next/image";
import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import homeFaqs from "@/data/homeFaqs";

const FaqsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index === activeTab ? -1 : index);
  };

  return (
    <section aria-labelledby="home-faqs-heading" className="bg-[#F6FDFF] py-14 md:py-16">
      <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
        <FadeUpOneByOneAnimation className="text-center max-w-[767px] px-4 mx-auto mb-8 md:mb-10">
          <h2
            id="home-faqs-heading"
            className="text-2xl font-medium tracking-tight m-0 text-[#04102A] sm:text-3xl"
          >
            Frequently Asked Questions
          </h2>
        </FadeUpOneByOneAnimation>
        <div className="max-w-[1023px] mx-auto">
          <ul className="space-y-3 list-none m-0 p-0">
            {homeFaqs.map((faq, index) => (
              <li
                key={faq.question}
                className="bg-[#C6E8FF] p-4 md:p-6 rounded-lg cursor-pointer"
                onClick={() => handleTabClick(index)}
              >
                <FadeUpOneByOneAnimation>
                  <h3 className="flex items-center justify-between text-[18px] md:text-[20px] 2xl:text-[22px] font-semibold text-[#222222] m-0">
                    <span>{faq.question}</span>
                    <Image
                      src="/images/icons/circle-down-arrow.png"
                      width={30}
                      height={30}
                      alt=""
                      className={`w-[24px] sm:w-[30px] h-[24px] sm:h-[30px] ml-2 shrink-0 transition-transform ${
                        activeTab === index ? "rotate-180" : ""
                      }`}
                    />
                  </h3>
                  <div
                    className={`content mt-4 text-base md:text-lg max-w-full md:max-w-[85%] text-[#222222] ${
                      activeTab === index ? "block" : "hidden"
                    }`}
                  >
                    <p className="m-0 leading-relaxed">{faq.answer}</p>
                  </div>
                </FadeUpOneByOneAnimation>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FaqsSection;
