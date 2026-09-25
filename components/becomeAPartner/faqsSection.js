"use client"
import { useState } from "react";
import Image from "next/image";
import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";

const FaqsSection = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index === activeTab ? -1 : index);
    };

    const faqItems = [
        {
            question: "Who can become a partner with Primeidea Ventures?",
            answer: "Professionals who work with investors on portfolios, planning, or research support can ask about a partnership. PrimeIdea is a SEBI Registered Research Analyst practice. It does not present itself as a SEBI Registered Investment Adviser unless separately registered."
        },
        {
            question: "What are the eligibility criteria to join Primeidea Ventures as a financial advisor?",
            answer: "You should have a background in finance or a related field and a strong interest in providing financial guidance to clients. Additionally, certifications like CFP (Certified Financial Planner) or NISM are beneficial but not mandatory."
        },
        {
            question: "How does Primeidea Ventures support its financial advisors?",
            answer: "Primeidea Ventures offers training, marketing support, lead generation tools, and a dedicated relationship manager to ensure the success of our partners."
        },
        {
            question: "What are the benefits of becoming a financial advisor with Primeidea Ventures?",
            answer: "As a partner, you'll enjoy access to advanced financial tools, regular training sessions, and a vast product portfolio to offer your clients. We also provide competitive commissions and performance-based incentives."
        },
        {
            question: "How will Primeidea Ventures help me in acquiring clients?",
            answer: "We provide digital marketing support, lead generation campaigns, and networking opportunities to help you connect with potential clients and expand your reach."
        },
        {
            question: "What training programs do you provide for partners?",
            answer: "We offer comprehensive training programs, including investment planning, wealth management strategies, and updates on regulatory compliance to keep you ahead in the industry."
        },
        {
            question: "What products can I offer to my clients as a Primeidea Ventures partner?",
            answer: "Our product portfolio includes mutual funds, SIPs, insurance plans, tax-saving instruments, retirement plans, and more. This variety ensures you can cater to diverse client needs."
        },
        {
            question: "How is PrimeIdea Ventures different from an investment-advisory platform?",
            answer: "PrimeIdea works as a SEBI Registered Research Analyst practice. Research notes support a partner’s client conversations. They are not SEBI Registered Investment Adviser advice unless PrimeIdea is separately registered for that."
        },
        {
            question: "Can I earn passive income as a financial advisor with Primeidea Ventures?",
            answer: "Any commercial terms are set in the written partner arrangement. PrimeIdea does not promise passive income or returns."
        }
    ];

    return (
        <div className="pt-16 pb-16 sm:pt-16 sm:pb-8">
            <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
                <FadeUpOneByOneAnimation className="text-center max-w-[767px] px-4 mx-auto">
                    <h2 className="text-2xl font-medium tracking-tight mb-6 md:mb-8 text-[#04102A] sm:text-3xl">
                        Frequently Asked Questions
                    </h2>
                </FadeUpOneByOneAnimation>
                <div className="max-w-[1023px] mx-auto">
                    <ul>
                        {faqItems.map((item, index) => (
                            <li key={index} className="bg-[#C6E8FF] p-4 md:p-6 rounded-lg cursor-pointer mb-4" onClick={() => handleTabClick(index)}>
                                <FadeUpOneByOneAnimation>
                                    <h2 className="flex items-center justify-between text-[18px] md:text-[20px] 2xl:text-[22px] font-semibold text-[#222222]">
                                        <span>{item.question}</span>
                                        <Image src="/images/icons/circle-down-arrow.png" width={30} height={30} alt="Arrow" className="w-[24px] sm:w-[30px] h-[24px] sm:h-[30px] ml-2" />
                                    </h2>
                                    <div className={`content mt-4 text-base md:text-lg max-w-full md:max-w-[85%] text-[#222222] ${activeTab === index ? 'block' : 'hidden'}`}>
                                        <p>{item.answer}</p>
                                    </div>
                                </FadeUpOneByOneAnimation>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FaqsSection;