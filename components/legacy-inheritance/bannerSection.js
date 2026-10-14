import Image from "next/image";
import Header from "../header";
import FadeUpAnimation from "@/animations/FadeUpAnimation";
import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";

const BannerSection = () => {
  return (
    <section>
      <div className="banner-section relative h-[100vh]">
        <div className="image-section h-[100vh] w-full">
          <Image
            src="/images/legacy-inheritance-planning/banner.png"
            width={1920}
            height={1280}
            alt="Legacy & Inheritance Planning"
            className="h-full w-full object-cover"
          />
          <div className="main-section mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4 flex justify-between absolute w-full top-[20%] left-[50%] translate-x-[-50%]">
            <FadeUpAnimation className="lg:max-w-[400px] xl:max-w-[490px] mt-[10%]">
              <h1 className="md:text-3xl xl:text-4xl text-[#2D2D2D] font-bold mb-3">
                Protect Your Family&apos;s Future with Confidence
              </h1>
              <p className="md:text-lg xl:text-xl font-medium mb-4">
                Expert Assistance in Navigating Insurance Claims and Ensuring
                Financial Security
              </p>
              <a
                href="https://api.whatsapp.com/send?phone=918141027000&text=Hello%2C%20I%27m%20interested%20in%20succession%20and%20estate%20planning%20coordination%20with%20PrimeIdea%20Ventures.%20Could%20you%20please%20share%20how%20I%20can%20get%20started%3F"
                className="bg-[#293C7D] md:text-md xl:text-lg font-bold rounded-md text-white px-6 py-3 inline-flex items-center"
                target="_blank"
              >
                Get Expert Guidance Now
                <Image
                  src="/images/icons/arrow-square-right.png"
                  width={21}
                  height={21}
                  alt="" aria-hidden="true"
                  className="ml-2"
                />
              </a>
            </FadeUpAnimation>
            {/* <div className="max-w-[740px] w-full">
              <Image
                src="/images/insurance/banner-right.png"
                width={802}
                height={642}
                alt="Insurance"
              />
            </div> */}
          </div>
        </div>
        <Header />
        <div className="bg-[#293C7D]/95 py-10 absolute bottom-0 w-full">
          <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
            <div className="flex justify-between">
              <div className="w-full flex justify-between">
                <FadeUpOneByOneAnimation className="flex flex-col	items-start px-2 w-1/4">
                    <Image src="/images/legacy-inheritance-planning/icons/1.png" width={50} height={50} alt="Illustration supporting this section" className="mb-4" />
                    <p className="md:text-lg xl:text-xl font-medium mb-4 text-white">
                        Designed by estate planning experts with 50+ years of experience.
                    </p>
                </FadeUpOneByOneAnimation>
                <FadeUpOneByOneAnimation className="flex flex-col	items-start px-2 w-1/4">
                    <Image src="/images/legacy-inheritance-planning/icons/2.png" width={50} height={50} alt="Illustration supporting this section" className="mb-4" />
                    <p className="md:text-lg xl:text-xl font-medium mb-4 text-white">
                        We offer full assistance with optional will registration and other offline procedures
                    </p>
                </FadeUpOneByOneAnimation>
                <FadeUpOneByOneAnimation className="flex flex-col	items-start px-2 w-1/4">
                    <Image src="/images/legacy-inheritance-planning/icons/3.png" width={50} height={50} alt="Illustration supporting this section" className="mb-4" />
                    <p className="md:text-lg xl:text-xl font-medium mb-4 text-white">
                        We encrypt and protect your data so nobody has access to it, but you
                    </p>
                </FadeUpOneByOneAnimation>
                <FadeUpOneByOneAnimation className="flex flex-col	items-start px-2 w-1/4">
                    <Image src="/images/legacy-inheritance-planning/icons/4.png" width={50} height={50} alt="Illustration supporting this section" className="mb-4" />
                    <p className="md:text-lg xl:text-xl font-medium mb-4 text-white">
                        Backed by <br/> institutional Investors
                    </p>
                </FadeUpOneByOneAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;