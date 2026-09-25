"use client";
import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import React from "react";

const StepperSection = () => {
  const steps = [
    {
      id: '01',
      title: "Getting to know you",
      content:
        "We start with your goals, cash flow, and existing assets and liabilities. Those details decide what the written plan has to cover.",
    },
    {
      id: '02',
      title: "Reviewing the holdings",
      content:
        "We check overlap, cost, tax, and risk against the goal date. There is no automated adviser that picks a product for you.",
    },
    {
      id: '03',
      title: "Writing the next step",
      content:
        "You receive a written note on what to keep, review, or change. It is not labelled the best plan, and it does not guarantee returns.",
    },
  ];

  return (
    <section>
      <div className="bg-[#F6FDFF] py-16">
        <div className="2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] xl:px-4 mx-auto">
          <h2 className="text-2xl xl:text-3xl font-bold mb-6 text-center">
            <FadeUpOneByOneAnimation> 
              Steps for Financial Planning 
            </FadeUpOneByOneAnimation>
          </h2>
          <div className="flex flex-col items-center justify-center pt-8 xl:px-8">
            <div className="relative flex justify-between items-baseline w-full 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4 xl:mb-8 overflow-y-auto xl:overflow-y-hidden">
              {steps.map((step, index) => (
                <React.Fragment key={step.id}>
                  <FadeUpOneByOneAnimation className="flex flex-col items-center w-1/3 text-center px-[8px] xl:px-0 min-w-[250px] relative before:absolute before:top-[21px] before:left-[50%] before:w-full before:h-[1px] before:bg-[#3A414D80] before:content-[''] last:before:hidden after:absolute after:top-[11px] after:right-0 after:bg-[url('/images/icons/right.png')] last:after:hidden after:bg-no-repeat after:bg-contain	after:bg-center	after:w-[20px] after:h-[20px]">
                    <div
                      className={`w-12 h-12 flex items-center justify-center rounded-full relative font-medium z-10 bg-[#232D63] text-white after:absolute after:top-[50%] after:left-[50%] after:w-[calc(100%-6px)] after:h-[calc(100%-6px)] after:bg-[url('/images/icons/circle.png')] after:bg-no-repeat after:bg-contain after:bg-center after:translate-x-[-50%] after:translate-y-[-50%] after:z-[999] after:content-['']`}
                    >
                      {step.id}
                    </div>
                    <h3 className="text-xl xl:text-2xl font-semibold mt-4 max-w-[240px]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-base xl:text-lg max-w-[270px] font-medium">
                      {step.content}
                    </p>
                  </FadeUpOneByOneAnimation>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepperSection;
