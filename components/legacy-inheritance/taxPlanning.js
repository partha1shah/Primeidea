"use client"
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";

const TaxPlanning = () => {
  const scrollContainerRef = useRef(null);
  const stickyHeaderRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const stickyHeader = stickyHeaderRef.current;

    const handleScroll = () => {
      if (scrollContainer.scrollLeft > 0) {
        stickyHeader.classList.add("sticky");
      } else {
        stickyHeader.classList.remove("sticky");
      }
    };

    const handleWheel = (e) => {
      const containerScrollLeft = scrollContainer.scrollLeft;
      const containerScrollWidth = scrollContainer.scrollWidth;
      const containerOffsetWidth = scrollContainer.offsetWidth;
      
      if (
        (containerScrollLeft === 0 && e.deltaY < 0) || 
        (containerScrollLeft + containerOffsetWidth >= containerScrollWidth && e.deltaY > 0)
      ) {
        // At the start or end of horizontal scroll, allow vertical scrolling
        return;
      }
      
      e.preventDefault();
      scrollContainer.scrollLeft += e.deltaY;
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    scrollContainer.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
      scrollContainer.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section className="py-8 bg-[#F6FDFF]  ">
      <div className="border-b border-b-[#222222] px-1">
        <div className="2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] mx-auto px-4">
          <div ref={stickyHeaderRef} className="sticky-header">
            <h2 className="text-[28px] md:text-[32px] leading-[140%] font-normal mb-6 text-[#04102A]">
              <FadeUpOneByOneAnimation>
              Main Components of
               <br className="hidden md:block" /> Legacy and Inheritance Planning
              </FadeUpOneByOneAnimation>
            </h2>
          </div>
          <div ref={scrollContainerRef} className="scroll-container">
            <div className="content-wrapper">
              <div className="text-[#317CAF] w-[900px] pr-[30px] pb-6 mr-[30px] border-r border-r-[#222222] ">
                <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-end mb-8">
                  <div className="w-full md:w-[60%] pb-[40px]">
                    <h3 className="text-[22px] md:text-[28px] font-semibold mb-3">
                        Wills & Trust
                    </h3>
                    <p className="text-lg mb-1 text-black">
                      A will is a crucial document that ensures your wishes are honored and your assets are distributed according to your intentions.
                      <br />                      
                      At Primeidea, we help you draft a clear and comprehensive will that reflects your values, secures your legacy, and provides peace of mind for your loved ones.
                    </p>
                  </div>
                  <div className="w-full md:w-[37%] max-w-[300px] md:max-w-full">
                    <Image
                      src="/images/legacy-inheritance-planning/service/will.png"
                      width="331"
                      height="198"
                      alt="Illustration supporting this section"
                      className="max-w-[190px] object-contain ml-auto"
                    />
                  </div>
                </div>
                <h3 className="text-[20px] md:text-2xl font-medium mb-5 text-black ">
                  Key Feature
                </h3>
                <ul className="flex justify-between mx-[-10px] ">
                  <li className="px-[10px] w-[33%]">
                    <div className=" shadow-[0_0_4px_0_rgba(0,0,0,0.25)] bg-white p-4 rounded-lg h-full">
                      <Image
                        src="/images/legacy-inheritance-planning/service/1.png"
                        width={387}
                        height={159}
                        alt="Clarity and Control"
                      />
                      <h3 className="my-[10px] text-lg text-[#222222] font-bold">
                        Clarity and Control
                      </h3>
                      <p className="text-base font-normal text-[#222222]">
                        A well-drafted will gives you complete control over how your assets are distributed, ensuring that your wishes are clear and legally binding
                      </p>
                    </div>
                  </li>
                  <li className="px-[10px] w-[33%]">
                    <div className=" shadow-[0_0_4px_0_rgba(0,0,0,0.25)] bg-white p-4 rounded-lg h-full">
                      <Image
                        src="/images/legacy-inheritance-planning/service/2.png"
                        width={387}
                        height={159}
                        alt="Minimizing Disputes"
                      />
                      <h3 className="my-[10px] text-lg text-[#222222] font-bold">
                        Minimizing Disputes
                      </h3>
                      <p className="text-base font-normal text-[#222222]">
                        By clearly outlining your intentions, a will helps reduce the risk of family disputes or legal challenges, protecting your loved ones from potential conflicts.
                      </p>
                    </div>
                  </li>
                  <li className="px-[10px] w-[33%]">
                    <div className=" shadow-[0_0_4px_0_rgba(0,0,0,0.25)] bg-white p-4 rounded-lg h-full">
                      <Image
                        src="/images/legacy-inheritance-planning/service/3.png"
                        width={387}
                        height={159}
                        alt="Tax Efficiency"
                      />
                      <h3 className="my-[10px] text-lg text-[#222222] font-bold">
                        Tax Efficiency
                      </h3>
                      <p className="text-base font-normal text-[#222222]">
                        Our expert guidance ensures your will is structured to minimize tax liabilities, preserving more of your wealth for your heirs
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="text-[#317CAF] w-[900px] pr-[30px] pb-6 mr-[30px] border-r border-r-[#222222] ">
                <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-end mb-8">
                  <div className="w-full md:w-[60%] pb-[40px]">
                    <h3 className="text-[22px] md:text-[28px] font-semibold mb-3">
                      Tax Planning
                    </h3>
                    <p className="text-lg mb-1 text-black">
                      Trusts are powerful tools in legacy and inheritance planning, allowing you to protect and manage your wealth while ensuring it is distributed according to your specific wishes.
                      <br/>At Primeidea, we assist in establishing and managing trusts that align with your long-term goals, providing flexibility, control, and security for your assets.
                    </p>
                  </div>
                  <div className="w-full md:w-[37%] max-w-[300px] md:max-w-full">
                    <Image
                      src="/images/legacy-inheritance-planning/service/tax-planning.png"
                      width="331"
                      height="198"
                      alt="Tax Planning"
                    />
                  </div>
                </div>
                <h3 className="text-[20px] md:text-2xl font-medium mb-5 text-black ">
                  Key Feature
                </h3>
                <ul className="flex justify-between mx-[-10px] ">
                  <li className="px-[10px] w-[33%]">
                    <div className=" shadow-[0_0_4px_0_rgba(0,0,0,0.25)] bg-white p-4 rounded-lg h-full">
                      <Image
                        src="/images/legacy-inheritance-planning/service/service21.png"
                        width={387}
                        height={159}
                        alt="Asset Protection"
                      />
                      <h3 className="my-[10px] text-lg text-[#222222] font-bold">
                        Asset Protection
                      </h3>
                      <p className="text-base font-normal text-[#222222]">
                        Trusts offer robust protection for your assets, shielding them from potential creditors, legal disputes, or mismanagement, ensuring they are preserved for your beneficiaries.
                      </p>
                    </div>
                  </li>
                  <li className="px-[10px] w-[33%]">
                    <div className=" shadow-[0_0_4px_0_rgba(0,0,0,0.25)] bg-white p-4 rounded-lg h-full">
                      <Image
                        src="/images/legacy-inheritance-planning/service/service22.png"
                        width={387}
                        height={159}
                        alt="Customized Distribution"
                      />
                      <h3 className="my-[10px] text-lg text-[#222222] font-bold">
                        Customized Distribution
                      </h3>
                      <p className="text-base font-normal text-[#222222]">
                        A trust lets you control how your assets are distributed, ensuring they align with your goals, like supporting education or charities.
                      </p>
                    </div>
                  </li>
                  <li className="px-[10px] w-[33%]">
                    <div className=" shadow-[0_0_4px_0_rgba(0,0,0,0.25)] bg-white p-4 rounded-lg h-full">
                      <Image
                        src="/images/legacy-inheritance-planning/service/service23.png"
                        width={387}
                        height={159}
                        alt="Tax Effiency"
                      />
                      <h3 className="my-[10px] text-lg text-[#222222] font-bold">
                        Tax Effiency
                      </h3>
                      <p className="text-base font-normal text-[#222222]">
                        Trusts can be structured to reduce estate taxes and other financial burdens, maximizing the wealth that is passed on to your heirs and ensuring more of your legacy is preserved.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="text-[#317CAF] w-[900px] pr-[30px] pb-6 mr-[30px] border-r border-r-[#222222] ">
                <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-end mb-8">
                  <div className="w-full md:w-[60%] pb-[40px]">
                    <h3 className="text-[22px] md:text-[28px] font-semibold mb-3">
                      Asset Protection
                    </h3>
                    <p className="text-lg mb-1 text-black">
                      SMART (Strategic Management of Assets and Resources through Trusts) that combines trust benefits with advanced asset management techniques.
                      <br/><br/>
                      Primeidea uses SMART to help you preserve, grow and efficiently transfer your wealth to future generations.
                    </p>
                    
                  </div>
                  <div className="w-full md:w-[37%] max-w-[300px] md:max-w-full">
                    <Image
                      src="/images/legacy-inheritance-planning/service/asset-protection.png"
                      width="331"
                      height="198"
                      alt="Asset Protection"
                      className="max-h-[260px] object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-[20px] md:text-2xl font-medium mb-5 text-black ">
                  Key Feature
                </h3>
                <ul className="flex justify-between mx-[-10px] ">
                  <li className="px-[10px] w-[33%]">
                    <div className=" shadow-[0_0_4px_0_rgba(0,0,0,0.25)] bg-white p-4 rounded-lg h-full">
                      <Image
                        src="/images/legacy-inheritance-planning/service/service31.png"
                        width={387}
                        height={159}
                        alt="Strategic Asset Growth"
                      />
                      <h3 className="my-[10px] text-lg text-[#222222] font-bold">
                        Strategic Asset Growth
                      </h3>
                      <p className="text-base font-normal text-[#222222]">
                        SMART planning focuses on not just preserving your assets but actively managing them to grow over time, ensuring that your legacy continues to build wealth for future generations.
                      </p>
                    </div>
                  </li>
                  <li className="px-[10px] w-[33%]">
                    <div className=" shadow-[0_0_4px_0_rgba(0,0,0,0.25)] bg-white p-4 rounded-lg h-full">
                      <Image
                        src="/images/legacy-inheritance-planning/service/service32.png"
                        width={387}
                        height={159}
                        alt="Tailored Flexibility"
                      />
                      <h3 className="my-[10px] text-lg text-[#222222] font-bold">
                        Tailored Flexibility
                      </h3>
                      <p className="text-base font-normal text-[#222222]">
                        SMART allows you to create personalized plans that can be adjusted to meet your evolving needs and circumstances.
                      </p>
                    </div>
                  </li>
                  <li className="px-[10px] w-[33%]">
                    <div className=" shadow-[0_0_4px_0_rgba(0,0,0,0.25)] bg-white p-4 rounded-lg h-full">
                      <Image
                        src="/images/legacy-inheritance-planning/service/service33.png"
                        width={387}
                        height={159}
                        alt="Enhanced Control and Security"
                      />
                      <h3 className="my-[10px] text-lg text-[#222222] font-bold">
                        Enhanced Control and Security
                      </h3>
                      <p className="text-base font-normal text-[#222222]">
                        SMART trusts give you greater control over your wealth, with built-in safeguards to protect your assets and ensure they are used as you intend. 
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .sticky-header {
          position: sticky;
          top: 0;
          background: #F6FDFF;
          z-index: 10;
          transition: all 0.3s ease;
        }
        .sticky-header.sticky {
      
        }
        .scroll-container {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }
        .scroll-container::-webkit-scrollbar {
          height: 5px;
        }
        .scroll-container::-webkit-scrollbar-track {
          background: #f1f1f1; 
        }
        
        .scroll-container::-webkit-scrollbar-thumb {
          background: #abddff; 
        }

        .scroll-container::-webkit-scrollbar-thumb:hover {
          background: #555; 
        }
        .content-wrapper {
          display: flex;
          width: 2900px;
        }
      `}</style>
    </section>
  );
};

export default TaxPlanning;
