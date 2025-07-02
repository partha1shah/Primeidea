import Image from "next/image";
import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";

const AppInstall = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#479AD2] to-[#3E8ABD] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>
      <div className="lg:max-w-[1024px] xl:max-w-[1170px] 2xl:max-w-[1340px] mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
          <FadeUpOneByOneAnimation>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                Stay Connected to Your Investments
            </h2>
            <p className="text-white/90 mb-10 text-lg max-w-xl ml-auto mr-auto">
              Download our mobile app to track your portfolio, stay updated with market insights, and manage your investments anytime, anywhere.
            </p>
            <div className="flex gap-4 justify-center">
              <div className="transform hover:scale-105 transition-all duration-300 hover:shadow-2xl inline-block">
                <a
                  href="https://play.google.com/store/apps/details?id=com.primeidea.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white p-1 rounded-xl hover:bg-opacity-90 transition-all"
                >
                  <Image
                    src="/images/Google_Play_Store.png"
                    width={220}
                    height={65}
                    alt="Get it on Google Play"
                    className="inline-block"
                  />
                </a>
              </div>
              <div className="transform hover:scale-105 transition-all duration-300 hover:shadow-2xl inline-block">
                <a
                  href="https://apps.apple.com/us/app/primeidea/id6745963533?platform=iphone" // Replace with your actual App Store link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white p-1 rounded-xl hover:bg-opacity-90 transition-all"
                >
                  <Image
                    src="/images/App_Store_Badge.png" // Add this image to your public/images folder
                    width={220}
                    height={65}
                    alt="Download on the App Store"
                    className="inline-block"
                  />
                </a>
              </div>
            </div>
          </FadeUpOneByOneAnimation>
        </div>
      </div>
    </section>
  );
};

export default AppInstall;
