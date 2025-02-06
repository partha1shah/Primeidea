'use client';
import Image from "next/image";
import Header from "./header";
import FadeUpAnimation from "@/animations/FadeUpAnimation";
import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import FadeUpAnimationDelay from "@/animations/FadeUpAnimationDelay";

const BannerSection = (props) => {
  
  // console.log(props);
  return (
    <section>
      <div className="banner-section relative h-full md:h-[100vh]">
        <div className="image-section h-[calc(100vh-166px)] w-full">
          <Image
            src={props.mainBannerImage?props.mainBannerImage:''}
            width={1920}
            height={1280}
            alt={props.mainTitle}
            className={`h-full w-full object-cover ${props.isMobileBanner ? 'hidden sm:block' : ''}`}
          />
          {props.isMobileBanner &&
          <Image
            src={props.mainMobileBannerImage?props.mainMobileBannerImage:''}
            width={550}
            height={920}
            alt={props.mainTitle}
            className={`h-full w-full object-cover ${props.isMobileBanner ? 'block sm:hidden' : ''}`}
          />
          }
          <div className="main-section mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4 pt-[160px] sm:pt-0 flex justify-between flex-col sm:flex-row absolute w-full bottom-[186px] sm:bottom-unset top-0 sm:top-[20%] left-[50%] translate-x-[-50%]">

            <FadeUpAnimation className="lg:max-w-[400px] xl:max-w-[490px] mb-[4%] md:mb-0 mt-0 sm:mt-[10%]">
              {props.mainTitle &&
              <h1 className="text-2xl md:text-3xl xl:text-4xl text-[#2D2D2D] font-bold mb-3">
                {/* Protect Your Family&apos;s Future with Confidence */}
                {props.mainTitle}
              </h1>
              }
              {props.mainSubTitle && 
                <p className="md:text-lg xl:text-xl font-medium mb-4">
                  {/* Expert Assistance in Navigating Insurance Claims and Ensuring
                  Financial Security */}
                  {props.mainSubTitle}
                </p>
              }
              {props.mainLinkTitle &&
              <a
                href={props.mainLink?props.mainLink:''}
                className="bg-[#293C7D] md:text-md xl:text-lg font-bold rounded-md text-white px-6 py-3 inline-flex items-center"
                target="_blank"
              >
                {props.mainLinkTitle?props.mainLinkTitle:''}
                <Image
                  src="/images/icons/arrow-square-right.png"
                  width={21}
                  height={21}
                  alt="Read All"
                  className="ml-2"
                />
              </a>
              }
            </FadeUpAnimation>
            {props.bannerRightImg &&
              <div className="max-w-[740px] w-full">
                <Image
                  src={props.bannerRightImg}
                  // src="/images/insurance/banner-right.png"
                  width={802}
                  height={642}
                  alt={props.mainTitle}
                  className="max-h-[300px] sm:max-h-[555px] object-contain m-auto sm:m-0"
                />
              </div>
            }
          </div>
        </div>
        <Header />
        <div className="bg-[#293C7D] py-10 relative w-full overflow-y-auto">
        {/* <div className="bg-[#293C7D]/95 py-10 absolute bottom-0 w-full"></div> */}
          <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4 min-w-[590px]">
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
      </div>
    </section>
  );
};

export default BannerSection;
