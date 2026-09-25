import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import Image from "next/image";

const GiftCitySection = () => {
  return (
    <section>
      <div className="bg-[#F6FDFF] py-16">
        <div className="2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="w-full md:w-[46%] max-w-[400px] md:max-w-full mb-6 md:mb-0">
              <Image
                src="/images/tax-planning/giftcity.png"
                width={565}
                height={643}
                alt="Gift City Tax Advantages"
                className="w-full"
              />
            </div>
            <FadeUpOneByOneAnimation className="w-full md:w-[50%]">
              <h2 className="text-2xl xl:text-3xl font-semibold leading-[130%] mb-1 md:mb-3">
                GIFT City Tax Advantages
              </h2>
              <h2 className="text-xl xl:text-2xl font-semibold leading-[130%] mb-3">
                Unlock Significant Tax Benefits by Operating in GIFT City:
              </h2>
              <ul className="text-base xl:text-lg mb-4 list-disc pl-[20px]">
                <li className="mb-3">
                  <strong>100% Income Tax Exemption:</strong> 
                   Enjoy full income tax exemption on profits for 10 years.
                </li>
                <li className="mb-3">
                  <strong>GST Benefits:</strong> Avail zero-rated GST on supplies and services.
                </li>
                <li className="mb-3">
                  <strong>No Stamp Duty:</strong> Save on transaction costs with stamp duty exemptions.
                </li>
                <li className="mb-3">
                  <strong>Exempt from DDT:</strong> Benefit from no Dividend Distribution Tax.
                </li>
                <li className="mb-3">
                  <strong>Lower MAT:</strong> Pay reduced Minimum Alternate Tax rates.
                </li>
                <li className="mb-3">
                  <strong>STT Exemption: </strong> Trade without the burden of Securities Transaction Tax.
                </li>
              </ul>
              <a
                href="https://api.whatsapp.com/send?phone=918141027000&text=Hello, I would like to book a portfolio review with PrimeIdea."
                className="bg-[#479AD2] text-base xl:text-lg font-bold rounded-md text-white px-6 py-3 inline-flex items-center"
              >
                Know More
                <Image
                  src="/images/icons/arrow-square-right.png"
                  width={21}
                  height={21}
                  alt="Read All"
                  className="ml-2"
                />
              </a>
            </FadeUpOneByOneAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftCitySection;
