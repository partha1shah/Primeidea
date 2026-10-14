import Image from "next/image";
import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";

const YouIHereSection = () => {
  return (
    <section>
      <div className="bg-[#232D63] py-12">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="flex justify-between flex-col md:flex-row">
            <FadeUpOneByOneAnimation className="w-full md:w-[50%] pb-6 md:py-2 md:px-8 border-b border-b-white md:border-b-0 md:border-r md:border-r-white">
              <div className="w-[50px] h-[50px] p-[8px] bg-white rounded-full mb-4">
                <Image
                  src="/images/icons/users.png"
                  width={50}
                  height={50}
                  alt="Investor and advisor collaboration illustration"
                />
              </div>
              <h3 className="text-[28px] mb-4 text-white">
                You&apos;re Here!
              </h3>
              <p className="text-lg text-white font-medium">
                Because you took a risk and started a business  to impact lives & ignite prosperity - I love that about you!
              </p>
            </FadeUpOneByOneAnimation>
            <FadeUpOneByOneAnimation className="w-full md:w-[50%] pt-6  md:py-2 md:px-8">
              <div className="w-[50px] h-[50px] p-[8px] bg-white rounded-full mb-4">
                <Image
                  src="/images/icons/user.png"
                  width={50}
                  height={50}
                  alt="Investor and advisor collaboration illustration"
                />
              </div>
              <h3 className="text-[28px] mb-4 text-white">
                I’m Here !
              </h3>
              <p className="text-lg text-white font-medium">
                To create a tax strategy that will save you at least Rs 10,00,000/- in taxes this year
              </p>
            </FadeUpOneByOneAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouIHereSection;
