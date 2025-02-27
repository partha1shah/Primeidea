import Image from "next/image";
import Header from "../header";
import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import FadeUpOneByOneLeftAnimation from "@/animations/FadeUpOneByOneLeftAnimation";

const BannerSection = () => {
  return (
    <section>
      <div className="banner-section relative h-[100vh] max-h-[800px]">
        <div className="image-section h-[100vh] max-h-[800px] w-full relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:content-[''] before:bg-[url('/images/about-us/bg-overlay.png')] before:bg-no-repeat before:bg-[length:100%_100%] before:bg-center before:opacity-75">
          <Image
            src="/images/become-a-partner/banner-bg.png"
            width={1601}
            height={726}
            alt="Become A Partner"
            className="h-full w-full object-cover"
          />
          <div className="main-section mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4 flex justify-between absolute w-full top-[30%] left-[50%] translate-x-[-50%]">
            <FadeUpOneByOneAnimation className="flex items-baseline lg:items-center flex-col  lg:flex-row">
              <Image
                src="/images/icons/p-light.png"
                width={165}
                height={157}
                alt="PrimeIdea Ventures"
                className="mb-5 lg:mb-0 mr-0 lg:mr-12 max-w-[80px] md:max-w-[100px] xl:max-w-[120px] 2xl:max-w-[150px]"
              />
              <div className="max-w-[500px] xl:max-w-[650px]">
                <h1 className="text-[1.65rem] md:text-3xl xl:text-[2rem] 2xl:text-4xl text-white font-medium mb-3 leading-[130%]">
                  Partner with Us for Growth & Success
                </h1>
                <p className="text-base xl:text-lg 2xl:text-xl font-medium text-white mb-3">
                  Join a trusted network of financial professionals and elevate your practice with our expert support and resources.
                </p>
                {/* <a
                  href="https://api.whatsapp.com/send?phone=918141027000&text=Hello, I'm interested in becoming a partner with Primeidea. Could you please provide me with some details on how I can get started? Looking forward to hearing from you!"
                  className="bg-[#293C7D] md:text-md xl:text-lg font-bold rounded-md text-white px-6 py-3 inline-flex items-center"
                  target="_blank"
                >
                  Get Started Now
                  <Image
                    src="/images/icons/arrow-square-right.png"
                    width={21}
                    height={21}
                    alt="Read All"
                    className="ml-2"
                  />
                </a> */}
              </div>
            </FadeUpOneByOneAnimation>
            <div className="hidden md:flex flex-col items-center">
                <h4 className="text-center text-white text-lg xl:text-xl"><FadeUpOneByOneAnimation>FOLLOW <br/> US</FadeUpOneByOneAnimation></h4>
                <FadeUpOneByOneAnimation className="w-[1px] h-[20px] xl:h-[30px] my-2 bg-white inline-block"></FadeUpOneByOneAnimation>
                <ul className="flex flex-col items-center">
                    <li className="m-2">
                        <a href="https://www.facebook.com/primeidea" target="_blank">
                            <FadeUpOneByOneLeftAnimation><Image src="/images/icons/social-media/facebook.png" width={40} height={40} alt="Facebook" className="w-[35px] h-[35px] xl:w-[40px] xl:h-[40px]" /></FadeUpOneByOneLeftAnimation>
                        </a>
                    </li>
                    <li className="m-2">
                      <a href="https://www.instagram.com/primeidea/" target="_blank">
                            <FadeUpOneByOneLeftAnimation><Image src="/images/icons/social-media/instagram.png" width={40} height={40} alt="Instagram" className="w-[35px] h-[35px] xl:w-[40px] xl:h-[40px]" /></FadeUpOneByOneLeftAnimation>
                        </a>
                    </li>
                    <li className="m-2">
                      <a href="https://www.linkedin.com/company/primeidea/" target="_blank">
                            <FadeUpOneByOneLeftAnimation><Image src="/images/icons/social-media/linkedin.png" width={40} height={40} alt="LinkedIn" className="w-[35px] h-[35px] xl:w-[40px] xl:h-[40px]" /></FadeUpOneByOneLeftAnimation>
                        </a>
                    </li>
                    <li className="m-2">
                        <a href="https://api.whatsapp.com/send?phone=918141027000&text=Hello, I'm interested in learning more about your financial advisory and investment services. Could you please provide me with some details on how I can start planning my investments? Looking forward to hearing from you!">
                            <FadeUpOneByOneLeftAnimation><Image src="/images/icons/social-media/whatsapp.png" width={40} height={40} alt="WhatsApp" className="w-[35px] h-[35px] xl:w-[40px] xl:h-[40px]" /></FadeUpOneByOneLeftAnimation>
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
