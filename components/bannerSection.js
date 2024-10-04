import Image from "next/image";
import Header from "./header";

const BannerSection = () => {
  return (
    <section>
      <div className="banner-section relative h-[100vh]">
        <div className="image-section h-[100vh] w-full">
          <Image
            src="/images/insurance/banner.jpg"
            width={1920}
            height={1280}
            alt="Banner"
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
                href=""
                className="bg-[#293C7D] md:text-md xl:text-lg font-bold rounded-md text-white px-6 py-3 inline-flex items-center"
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
                src="/images/insurance/banner-right.png"
                width={802}
                height={642}
                alt="Insurance"
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
                  Prime Idea creates financial plans that fuel your ambitions
                  today and secure your success for tomorrow, whether you’re
                  starting out or scaling up.
                </p>
              </div>
              <div className="w-[55%] flex justify-between">
                <div className="flex flex-col	items-end px-2">
                  <span className="text-white text-18px xl:text-[20px] font-bold text-right">
                    Trusted By Clients
                  </span>
                  <h3 className="text-[42px] leading-[120%] xl:text-5xl font-extrabold mt-2 text-[#FFC300]">
                    80+
                  </h3>
                </div>
                <div className="flex flex-col	items-end px-2">
                  <span className="text-white text-18px xl:text-[20px] font-bold text-right">
                    Years of expertise
                  </span>
                  <h3 className="text-[42px] leading-[120%] xl:text-5xl font-extrabold mt-2 text-[#FFC300]">
                    12+
                  </h3>
                </div>
                <div className="flex flex-col	items-end px-2">
                  <span className="text-white text-18px xl:text-[20px] font-bold text-right">
                    Client Satisfaction
                  </span>
                  <h3 className="text-[42px] leading-[120%] xl:text-5xl font-extrabold mt-2 text-[#FFC300]">
                    92+
                  </h3>
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
