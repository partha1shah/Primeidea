"use client";

import { useState } from "react";
import Image from "next/image";
import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";

export default function ScopeFaqsSection({
  title = "Frequently Asked Questions",
  description,
  faqs = [],
}) {
  const [activeTab, setActiveTab] = useState(-1);

  const handleTabClick = (index) => {
    setActiveTab(index === activeTab ? -1 : index);
  };

  if (!faqs.length) return null;

  return (
    <section aria-labelledby="scope-faqs-heading" className="py-14 md:py-16 bg-[#F6FDFF]">
      <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
        <FadeUpOneByOneAnimation className="text-center max-w-[767px] px-4 mx-auto mb-8 md:mb-10">
          <h2
            id="scope-faqs-heading"
            className="text-2xl font-semibold tracking-tight mb-3 text-[#04102A] sm:text-3xl"
          >
            {title}
          </h2>
          {description && (
            <p className="text-base font-medium leading-relaxed text-[#4D4D4D]">
              {description}
            </p>
          )}
        </FadeUpOneByOneAnimation>

        <div className="max-w-[1023px] mx-auto">
          <ul className="space-y-3">
            {faqs.map((faq, index) => (
              <li
                key={faq.question}
                className="bg-[#C6E8FF] p-4 md:p-6 rounded-xl cursor-pointer transition-colors hover:bg-[#B8E2FF]"
                onClick={() => handleTabClick(index)}
              >
                <FadeUpOneByOneAnimation>
                  <h3 className="flex items-center justify-between text-[17px] md:text-[19px] 2xl:text-[21px] font-semibold text-[#222222]">
                    <span>{faq.question}</span>
                    <Image
                      src="/images/icons/circle-down-arrow.png"
                      width={30}
                      height={30}
                      alt=""
                      aria-hidden="true"
                      className={`w-[24px] sm:w-[30px] h-[24px] sm:h-[30px] ml-2 shrink-0 transition-transform ${
                        activeTab === index ? "rotate-180" : ""
                      }`}
                    />
                  </h3>
                  <div
                    className={`mt-4 text-base md:text-lg max-w-full md:max-w-[90%] text-[#222222] leading-relaxed ${
                      activeTab === index ? "block" : "hidden"
                    }`}
                  >
                    {typeof faq.answer === "string" ? <p>{faq.answer}</p> : faq.answer}
                  </div>
                </FadeUpOneByOneAnimation>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
