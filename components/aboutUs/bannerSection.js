import Image from "next/image";
import Link from "next/link";
import Header from "../header";
import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import FadeUpOneByOneLeftAnimation from "@/animations/FadeUpOneByOneLeftAnimation";

const BannerSection = () => {
  return (
    <section>
      <div className="banner-section relative h-[100vh] max-h-[800px]">
        <div className="image-section h-[100vh] max-h-[800px] w-full relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:content-[''] before:bg-[url('/images/about-us/bg-overlay.png')] before:bg-no-repeat before:bg-[length:100%_100%] before:bg-center before:opacity-75">
          <Image
            src="/images/about-us/banner-bg.png"
            width={1601}
            height={726}
            alt="PrimeIdea Ventures wealth management office in Vadodara"
            className="h-full w-full object-cover"
          />
          <div className="main-section mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4 flex justify-between absolute w-full top-[28%] left-[50%] translate-x-[-50%]">
            <FadeUpOneByOneAnimation className="flex items-baseline lg:items-center flex-col lg:flex-row max-w-[760px]">
              <Image
                src="/images/icons/p-light.png"
                width={165}
                height={157}
                alt="PrimeIdea Ventures"
                className="mb-5 lg:mb-0 mr-0 lg:mr-12 max-w-[80px] md:max-w-[100px] xl:max-w-[120px] 2xl:max-w-[150px]"
              />
              <div className="max-w-[560px] xl:max-w-[640px]">
                <h1 className="text-[1.65rem] md:text-3xl xl:text-[2rem] 2xl:text-4xl text-white font-medium mb-3 leading-[130%]">
                  About PrimeIdea Ventures
                </h1>
                <p className="text-base xl:text-lg 2xl:text-xl font-medium text-white mb-6 leading-relaxed">
                  PrimeIdea Ventures is a Vadodara-based research-led wealth management and
                  portfolio review firm serving investors across Gujarat and India, with a
                  research process guided by Partha Shah, SEBI Registered Research Analyst
                  INH000017815.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/portfolio-review"
                    className="bg-[#FFC300] text-[#232D63] text-base font-bold rounded-md px-5 py-3 inline-flex items-center hover:bg-white transition-colors"
                  >
                    Book Portfolio Review
                    <Image
                      src="/images/icons/arrow-square-right-dark.png"
                      width={21}
                      height={21}
                      alt=""
                      className="ml-2"
                    />
                  </Link>
                  <Link
                    href="/research-process"
                    className="border-2 border-white text-white text-base font-bold rounded-md px-5 py-3 inline-flex items-center hover:border-[#FFC300] hover:text-[#FFC300] transition-colors"
                  >
                    View Research Process
                  </Link>
                </div>
              </div>
            </FadeUpOneByOneAnimation>
            <div className="hidden md:flex flex-col items-center">
              <p className="text-center text-white text-lg xl:text-xl font-medium">
                <FadeUpOneByOneAnimation>
                  FOLLOW
                  <br /> US
                </FadeUpOneByOneAnimation>
              </p>
              <FadeUpOneByOneAnimation className="w-[1px] h-[20px] xl:h-[30px] my-2 bg-white inline-block" />
              <ul className="flex flex-col items-center">
                <li className="m-2">
                  <a href="https://www.facebook.com/primeidea" target="_blank" rel="noopener noreferrer">
                    <FadeUpOneByOneLeftAnimation>
                      <Image
                        src="/images/icons/social-media/facebook.png"
                        width={40}
                        height={40}
                        alt="PrimeIdea on Facebook"
                        className="w-[35px] h-[35px] xl:w-[40px] xl:h-[40px]"
                      />
                    </FadeUpOneByOneLeftAnimation>
                  </a>
                </li>
                <li className="m-2">
                  <a href="https://www.instagram.com/primeidea/" target="_blank" rel="noopener noreferrer">
                    <FadeUpOneByOneLeftAnimation>
                      <Image
                        src="/images/icons/social-media/instagram.png"
                        width={40}
                        height={40}
                        alt="PrimeIdea on Instagram"
                        className="w-[35px] h-[35px] xl:w-[40px] xl:h-[40px]"
                      />
                    </FadeUpOneByOneLeftAnimation>
                  </a>
                </li>
                <li className="m-2">
                  <a
                    href="https://www.linkedin.com/company/primeidea/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FadeUpOneByOneLeftAnimation>
                      <Image
                        src="/images/icons/social-media/linkedin.png"
                        width={40}
                        height={40}
                        alt="PrimeIdea on LinkedIn"
                        className="w-[35px] h-[35px] xl:w-[40px] xl:h-[40px]"
                      />
                    </FadeUpOneByOneLeftAnimation>
                  </a>
                </li>
                <li className="m-2">
                  <a
                    href="https://api.whatsapp.com/send?phone=918141027000&text=Hello,%20I%20would%20like%20a%20research-led%20portfolio%20review%20with%20PrimeIdea%20Ventures."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FadeUpOneByOneLeftAnimation>
                      <Image
                        src="/images/icons/social-media/whatsapp.png"
                        width={40}
                        height={40}
                        alt="WhatsApp PrimeIdea Ventures"
                        className="w-[35px] h-[35px] xl:w-[40px] xl:h-[40px]"
                      />
                    </FadeUpOneByOneLeftAnimation>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Header />
      </div>
    </section>
  );
};

export default BannerSection;
