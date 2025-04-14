"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";

const Footer = () => {

  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

    const button = document.getElementById('back_top');
    button.addEventListener('click', handleScrollToTop);

    return () => {
      button.removeEventListener('click', handleScrollToTop);
    };
  }, []);

  return (
    <>
      <footer className="bg-[#479AD2] relative overflow-hidden">
        <div >
          <span className="absolute bottom-0 right-[-40px] md:right-40 sm:z-[999]">
            <Image src="/images/footer/shape1.png" width="300" height="190" alt="Shape" />
          </span>
          {/* <span className="absolute right-0 top-10 z-[999]">
            <Image src="/images/footer/shape2.png" width="81" height="127" alt="Shape" />
          </span> */}
        </div>
        <div className="relative z-[9999] border border-solid border-[#B4B4B4]">
          <div className="lg:max-w-[1024px] xl:max-w-[1170px] 2xl:max-w-[1340px] mx-auto px-4">
            <div className=" flex flex-wrap ">
              <div className="mb:pb-10 lg:pb-20 pt-12 w-full sm:px-4 md:max-w-[260px] lg:max-w-[320px] xl:max-w-[370px] 2xl:max-w-[400px] relative">
                  <button className="absolute top-[50%] right-[-3.2rem] text-white border border-solid border-white hidden md:flex py-[1px] px-[13px] bg-[#3E8ABD] rotate-[270deg] rounded-2xl" id="back_top">
                    GO UP
                    <Image
                      width="24"
                      height="24"
                      src="/images/footer/icons/arrow-right.png"
                      alt="Arrow Up"
                      className="ml-2"
                    />
                  </button>
                <div className="absolute top-0 right-0 bg-[#3E8ABD] w-[400%] h-[100%] border-r border-solid border-[#B4B4B4] z-[-1] hidden md:inline-block">
                </div>
                <FadeUpOneByOneAnimation className="mb-8 md:mb-10 w-full">
                  <a href="/" className="md:mb-6 inline-block lg:max-w-[260px] xl:max-w-[280px] 2xl:max-w-[320px]">
                    <Image
                      src="/images/logo-white.png"
                      width={320}
                      height={70}
                      alt="Primeidea Ventures"
                      className="max-w-full "
                    />
                  </a>
                </FadeUpOneByOneAnimation>
              </div>
              <FadeUpOneByOneAnimation className="pb-10 lg:pb-20 md:pt-12 w-full sm:px-8 lg:pl-14 lg:pr-10 sm:w-1/2 md:max-w-[42%] xl:max-w-[40%] 2xl:max-w-[33.33%]">
                <LinkGroup header="Financial Planning">
                  {/* <NavLink link="/#" label="Financial Investment Advisory" /> */}
                  <NavLink link="/financial-planning-and-investment-advisory" label="Financial Planning & Investment Advisory" />
                </LinkGroup>
                <LinkGroup header="Investment Planning">
                  <NavLink link="/research-based-wealth-management" label="Research Based Wealth Management" />
                  <NavLink link="/retirement-planning" label="Dream Retirement Planning" />
                  <NavLink link="/legacy-inheritance-planning" label="Legacy & Inheritance Planning" />
                  <NavLink link="/tax-planning-savings" label="Tax Planning & Savings" />
                </LinkGroup>
              </FadeUpOneByOneAnimation>

              <FadeUpOneByOneAnimation className="pb-10 lg:pb-20 md:pt-12 w-full sm:px-4 sm:w-1/2 md:max-w-[20%] xl:max-w-[25%] 2xl:max-w-[25%]">
                <div className="sm:mb-10 w-full">
                  <h4 className="mb-3 text-lg font-semibold text-white">
                    <a href="/insurance">Insurance</a>
                  </h4>
                  <h4 className="mb-3 text-lg font-semibold text-white">
                    <a href="/about-us">About Us</a>
                  </h4>
                  <h4 className="mb-3 text-lg font-semibold text-white">
                    <a href="/blogs">Blogs</a>
                  </h4>
                  <h4 className="mb-3 text-lg font-semibold text-white">
                    <a href="/become-a-partner">Become a Partner</a>
                  </h4>
                  <h4 className="mb-3 text-lg font-semibold text-white">
                    <a href="/careers">Careers</a>
                  </h4>
                  <h4 className="mb-3 text-lg font-semibold text-white">
                    <a href="/contact-us">Contact Us</a>
                  </h4>
                  <h4 className="mt-5 mb-3 text-lg font-semibold text-white">
                    <a 
                      href="https://play.google.com/store/apps/details?id=com.primeidea.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/images/Google_Play_Store.png"
                        width={135}
                        height={40}
                        alt="Get it on Google Play"
                        className="inline-block"
                      />
                    </a>
                  </h4>
                </div>
              </FadeUpOneByOneAnimation>
            </div>
          </div>
        </div>
        <div >
          <div className="lg:max-w-[1024px] xl:max-w-[1170px] 2xl:max-w-[1340px] mx-auto sm:px-4">
            <div >
              <ul className="flex px-4 md:px-0 py-6 w-full md:max-w-[260px] lg:max-w-[320px] xl:max-w-[370px] 2xl:max-w-[400px] relative">
                <li className="absolute top-0 right-0 bg-[#3E8ABD] w-[400%] h-[100%] sm:border-r border-solid border-[#B4B4B4] z-0"></li>
                <li className="mr-8 relative z-1">
                  <a href="https://www.facebook.com/primeidea" target="_blank">
                    <Image
                      src="/images/footer/icons/facebook.svg"
                      alt="Facebook"
                      width={32}
                      height={32}
                    />
                  </a>
                </li>
                <li className="mr-8 relative z-1">
                  <a href="https://www.linkedin.com/company/primeidea/" target="_blank">
                    <Image
                      src="/images/footer/icons/linkedin.svg"
                      alt="LinkedIn"
                      width={32}
                      height={32}
                    />
                  </a>
                </li>
                <li className="mr-8 relative z-1">
                  <a href="https://www.instagram.com/primeidea/" target="_blank">
                    <Image
                      src="/images/footer/icons/instagram.svg"
                      alt="Instagram"
                      width={32}
                      height={32}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

const LinkGroup = ({ children, header }) => {
  return (
    <>
      {/* <div className="mb-10 w-full"> */}
      <h4 className="mb-4 text-lg font-semibold text-white">{header}</h4>
      <ul className="space-y-3 mb-6 last:mb-0">{children}</ul>
      {/* </div> */}
    </>
  );
};

const NavLink = ({ link, label }) => {
  return (
    <li>
      <a href={link} className="inline-block text-base lg:text-lg leading-tight	text-white">
        {label}
      </a>
    </li>
  );
};
