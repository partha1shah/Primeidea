"use client"
import Image from "next/image";
import { useState } from "react";
import ContactFormModal from "./ContactFormModal";

const GetStartedButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const toggle = () => setIsModalOpen(!isModalOpen);

    return (
        <div className="absolute bottom-0 right-0 flex bg-[#479AD2] pl-3 sm:pl-6 md:pl-10 xl:pl-12 pr-3 sm:pr-6 py-3 xl:py-5 rounded-tl-[32px] xl:rounded-tl-[42px] rounded-br-[22px] xl:rounded-br-[22px]">
            <Image
                src="/images/retirement-planning/get-start.png"
                width={60}
                height={60}
                alt="Get Started"
                className="mr-2 sm:mr-4 w-[30px] sm:w-[50px] xl:w-[60px] h-[30px] sm:h-[50px] xl:h-[60px]"
            />
            
            <button className="flex items-center text-white" onClick={toggle}>
                <span className="text-base sm:text-[22px] xl:text-[28px]">
                    Get Started
                </span>
                <Image
                    src="/images/icons/arrow-right-light.png"
                    width={22}
                    height={12}
                    alt="Arrow Right"                  
                    className="ml-3"
                />
            </button>
        </div>
    )
}

export default GetStartedButton;