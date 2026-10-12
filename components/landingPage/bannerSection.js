import Image from "next/image";
import Header from "../header";

const BannerSection = () => {
  return (
    <section>
      <div className="banner-section relative h-[100vh]">
        <div className="image-section h-[calc(100vh-164px)] w-full">
          <Image
            src="/images/landing/banner.png"
            width={1920}
            height={1280}
            alt="Landing Page"
            className="h-full w-full object-cover"
          />
          <div className="main-section mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4 flex justify-between absolute w-full top-[20%] left-[50%] translate-x-[-50%]">
            <div className="lg:max-w-[400px] xl:max-w-[490px] mt-[10%]">
              <h1 className="md:text-3xl xl:text-4xl text-[#2D2D2D] font-bold mb-3">
                Protect Your Family&apos;s Future with Confidence
              </h1>
              <p className="md:text-lg xl:text-xl font-medium mb-4">
                Expert Assistance in Navigating Insurance Claims and Ensuring
                Financial Security
              </p>
              <a
                href="https://api.whatsapp.com/send?phone=918141027000&text=Hello%2C%20I%27m%20interested%20in%20a%20research-led%20portfolio%20review%20with%20PrimeIdea%20Ventures.%20Could%20you%20please%20share%20how%20I%20can%20get%20started%3F"
                className="bg-[#293C7D] md:text-md xl:text-lg font-bold rounded-md text-white px-6 py-3 inline-flex items-center"
                target="_blank"
              >
                Get Expert Guidance Now
                <Image
                  src="/images/icons/arrow-square-right.png"
                  width={21}
                  height={21}
                  alt="Read All"
                  className="ml-2"
                />
              </a>
            </div>
            <div className="max-w-[740px] w-full">
              <Image
                src="/images/landing/banner-right.png"
                width={802}
                height={642}
                alt="landing"
              />
            </div>
          </div>
        </div>
        <Header />
        <div className="bg-[#293C7D]/95 py-10 absolute bottom-0 w-full">
          <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
            <div className="flex justify-between">
              <div className="w-[45%]">
                <p className="text-white text-lg xl:text-xl max-w-[500px]">
                  Primeidea creates financial plans that fuel your ambitions
                  today and secure your success for tomorrow, whether you’re
                  starting out or scaling up.
                </p>
              </div>
              <div className="w-[55%] flex justify-between">
                <div className="flex flex-col	items-end px-2">
                  <h3 className="text-[28px] leading-[120%] xl:text-[32px] font-extrabold my-2 text-[#FFC300]">
                    ₹ 50,000Cr+
                  </h3>
                  <span className="text-white text-16px xl:text-[18px] font-bold text-right">
                    Previously managed
                  </span>
                </div>
                <div className="flex flex-col	items-end px-2">
                  <h3 className="text-[28px] leading-[120%] xl:text-[32px] font-extrabold my-2 text-[#FFC300]">
                    29.74%
                  </h3>
                  <span className="text-white text-16px xl:text-[18px] font-bold text-right">
                    Return Since Inception
                  </span>
                </div>
                <div className="flex flex-col	items-end px-2">
                  <h3 className="text-[28px] leading-[120%] xl:text-[32px] font-extrabold my-2 text-[#FFC300]">
                    92+
                  </h3>
                  <span className="text-white text-16px xl:text-[18px] font-bold text-right">
                    Of Investment Expertise
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;