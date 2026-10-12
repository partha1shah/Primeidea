'use client';
import Image from "next/image";
import Link from "next/link";
import Header from "./header";
import FadeUpAnimation from "@/animations/FadeUpAnimation";
import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import FadeUpAnimationDelay from "@/animations/FadeUpAnimationDelay";
import ContactFormModal from "./ContactFormModal";
import { useState } from "react";

const BannerSection = (props) => {
   const [isModalOpen, setIsModalOpen] = useState(false);
      
  const toggle = () => setIsModalOpen(!isModalOpen);
  const formTitle = props.formTitle || 'Connect with Us';
  const usePrimaryAsLink = props.usePrimaryAsLink === true && Boolean(props.mainLink);
  const hasSubSection =
    Boolean(props.subSectionContent) ||
    Boolean(props.subSectionTitle1) ||
    Boolean(props.subSectionTitle2) ||
    Boolean(props.subSectionTitle3);
  
  // console.log(props);
  return (
    <section>
      <ContactFormModal formTitle={formTitle} isOpen={isModalOpen} onClose={toggle} />
      <div className={`banner-section relative h-full ${hasSubSection ? "md:h-[100vh]" : ""}`}>
        <div
          className={`image-section w-full relative overflow-hidden ${
            hasSubSection ? "h-[calc(100vh-166px)]" : ""
          }`}
        >
          <Image
            src={props.mainBannerImage?props.mainBannerImage:''}
            width={1920}
            height={1280}
            alt={props.mainTitle}
            className={`w-full object-cover ${
              hasSubSection
                ? `h-full ${props.isMobileBanner ? "hidden sm:block" : ""}`
                : `absolute inset-0 h-full -z-10 ${props.isMobileBanner ? "hidden sm:block" : ""}`
            }`}
          />
          {props.isMobileBanner &&
          <Image
            src={props.mainMobileBannerImage?props.mainMobileBannerImage:''}
            width={550}
            height={920}
            alt={props.mainTitle}
            className={`w-full object-cover ${props.isMobileBanner ? 'block sm:hidden' : ''} ${
              hasSubSection ? "h-full" : "absolute inset-0 h-full -z-10"
            }`}
          />
          }
          <div
            className={`main-section mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4 flex justify-between flex-col sm:flex-row gap-6 sm:gap-8 w-full ${
              hasSubSection
                ? "absolute pt-[160px] sm:pt-0 bottom-[186px] sm:bottom-unset top-0 sm:top-[20%] left-[50%] translate-x-[-50%] items-start"
                : "relative pt-[140px] sm:pt-[120px] pb-6 md:pb-8 sm:items-stretch"
            }`}
          >

            <FadeUpAnimation
              className={`order-2 sm:order-1 lg:max-w-[400px] xl:max-w-[520px] w-full ${
                hasSubSection
                  ? "mb-[4%] md:mb-0 mt-0 sm:mt-[10%]"
                  : "mb-0 flex flex-col justify-center"
              }`}
            >
              {props.mainTitle &&
              <h1 className="text-2xl md:text-3xl xl:text-4xl text-[#2D2D2D] font-bold mb-3">
                {/* Protect Your Family&apos;s Future with Confidence */}
                {props.mainTitle}
              </h1>
              }
              {props.mainSubTitle && 
                <p className="md:text-base xl:text-lg font-medium mb-4 leading-relaxed">
                  {/* Expert Assistance in Navigating Insurance Claims and Ensuring
                  Financial Security */}
                  {props.mainSubTitle}
                </p>
              }
              {(props.mainLinkTitle || props.secondaryLinkTitle) &&
              <div className="flex flex-wrap gap-3">
                {props.mainLinkTitle && (
                  usePrimaryAsLink ? (
                    <Link
                      href={props.mainLink}
                      className="bg-[#293C7D] md:text-md xl:text-lg font-bold rounded-md text-white px-6 py-3 inline-flex items-center"
                    >
                      {props.mainLinkTitle}
                      <Image
                        src="/images/icons/arrow-square-right.png"
                        width={21}
                        height={21}
                        alt=""
                        aria-hidden="true"
                        className="ml-2"
                      />
                    </Link>
                  ) : (
                    <button
                      type="button"
                      className="bg-[#293C7D] md:text-md xl:text-lg font-bold rounded-md text-white px-6 py-3 inline-flex items-center"
                      onClick={toggle}
                    >
                      {props.mainLinkTitle}
                      <Image
                        src="/images/icons/arrow-square-right.png"
                        width={21}
                        height={21}
                        alt=""
                        aria-hidden="true"
                        className="ml-2"
                      />
                    </button>
                  )
                )}
                {props.secondaryLinkTitle && props.secondaryLink && (
                  <Link
                    href={props.secondaryLink}
                    className="border-2 border-[#293C7D] md:text-md xl:text-lg font-bold rounded-md text-[#293C7D] px-6 py-3 inline-flex items-center bg-white/90 hover:bg-white transition-colors"
                  >
                    {props.secondaryLinkTitle}
                    <Image
                      src="/images/icons/arrow-square-right-dark.png"
                      width={21}
                      height={21}
                      alt=""
                      aria-hidden="true"
                      className="ml-2"
                    />
                  </Link>
                )}
              </div>
              }
              {props.mainDisclaimer && (
                <p className="mt-4 max-w-[520px] text-[11px] md:text-xs leading-relaxed text-[#5A5A5A]/90 font-normal">
                  {String(props.mainDisclaimer).trim().startsWith("*")
                    ? props.mainDisclaimer
                    : `* ${props.mainDisclaimer}`}
                </p>
              )}
            </FadeUpAnimation>
            
            {props.bannerRightImg && (
              <div className="order-1 sm:order-2 mx-auto sm:mx-0 w-full max-w-[min(100%,375px)] sm:max-w-[min(100%,693px)]">
                {/* Aspect box reserves space before the image paints — prevents mobile CLS */}
                <div className="relative w-full aspect-[802/642]">
                  <Image
                    src={props.bannerRightImg}
                    alt={props.mainTitle || ""}
                    fill
                    priority
                    sizes="(max-width: 640px) 90vw, 693px"
                    className="object-contain object-center sm:object-left"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <Header />
        {hasSubSection && (
        <div className="bg-[#293C7D] py-10 relative w-full overflow-y-auto">
        {/* <div className="bg-[#293C7D]/95 py-10 absolute bottom-0 w-full"></div> */}
          <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4 min-w-0 md:min-w-[590px]">
            <div className="flex justify-between">
              <FadeUpAnimation className="w-[45%] min-w-[230px]">
                {props.subSectionContent &&
                <p className="text-white text-base xl:text-xl max-w-[400px] xl:max-w-[500px]">                  
                  {props.subSectionContent?props.subSectionContent:''}
                </p>
                }
              </FadeUpAnimation>
              <div className="w-[55%] flex justify-between min-w-[400px]">
                <FadeUpAnimationDelay className="flex flex-col	items-end px-2">
                  {props.subSectionTitle1 &&
                  <span className="text-white text-18px xl:text-[20px] font-bold text-right">
                    {props.subSectionTitle1}
                  </span>
                  }
                  {props.subSectionSubTitle1 &&
                  <h3 className="text-[42px] leading-[120%] xl:text-5xl font-extrabold mt-2 text-[#FFC300]">
                    {props.subSectionSubTitle1}
                  </h3>
                  }
                </FadeUpAnimationDelay>
                <FadeUpAnimationDelay className="flex flex-col	items-end px-2">
                  {props.subSectionTitle2 &&
                  <span className="text-white text-18px xl:text-[20px] font-bold text-right">
                    {props.subSectionTitle2}
                  </span>
                  }
                  {props.subSectionSubTitle2 &&
                  <h3 className="text-[42px] leading-[120%] xl:text-5xl font-extrabold mt-2 text-[#FFC300]">
                    {props.subSectionSubTitle2}
                  </h3>
                  }
                </FadeUpAnimationDelay>
                <FadeUpAnimationDelay className="flex flex-col	items-end px-2">
                  {props.subSectionTitle3 &&
                  <span className="text-white text-18px xl:text-[20px] font-bold text-right">
                    {props.subSectionTitle3}
                  </span>
                  }
                  {props.subSectionSubTitle3 &&
                  <h3 className="text-[42px] leading-[120%] xl:text-5xl font-extrabold mt-2 text-[#FFC300]">
                    {props.subSectionSubTitle3}
                  </h3>
                  }
                </FadeUpAnimationDelay>
              </div>
            </div>
          </div>
        </div>
        )}
      </div>
    </section>
  );
};

export default BannerSection;
