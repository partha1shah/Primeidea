import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import Image from "next/image";

const ProtectingFinanceFuture = () => { 
    return (
        <section>
        <div className="bg-[#F6FDFF] pt-16 md:py-16">
          <div className="2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] mx-auto px-4">
            <div className="flex flex-col md:flex-row md:justify-between">
              <FadeUpOneByOneAnimation className="w-full md:w-[46%] max-w-[400px] md:max-w-full mb-6 md:mb-0">
                <Image
                  src="/images/insurance/financial-future.png"
                  width={565}
                  height={643}
                  alt="Financial Future"
                  className="w-full"
                />
              </FadeUpOneByOneAnimation>
              <FadeUpOneByOneAnimation className="w-full md:w-[50%]">
                <h2 className="text-2xl xl:text-3xl font-semibold leading-[130%] mb-3">
                  Protecting Your Financial Future <br className="hidden lg:inline-block" /> Beyond the Claim
                </h2>
                <p className="text-lg xl:text-xl mb-4">
                  Filing an insurance claim is just the first step toward
                  financial protection. At Primeidea, we believe that how you
                  manage your claim payout is equally crucial. Many people
                  mistakenly misuse or mismanage their funds, leading to
                  long-term financial issues. Here are common pitfalls and how
                  to avoid them.
                </p>
                <ul className="text-base xl:text-lg mb-4 list-disc pl-[20px]">
                  <li className="mb-3">
                    <strong>Misuse of Funds:</strong> Avoid spending on
                    non-essential items; focus on covering the intended loss.
                  </li>
                  <li className="mb-3">
                    <strong>Neglecting Financial Stability:</strong> Prioritize
                    paying off debts and boosting emergency savings with your
                    payout.
                  </li>
                  <li className="mb-3">
                    <strong>Overlooking Future Protection:</strong> Regularly
                    update your insurance coverage to stay protected after a
                    claim.
                  </li>
                  <li className="mb-3">
                    <strong>Ignoring Tax Implications:</strong> Be aware of any
                    tax liabilities associated with your insurance payout.
                  </li>
                  <li className="mb-3">
                    <strong>Improper Reinvestment:</strong> Reinvest your funds
                    wisely to support long-term financial goals.
                  </li>
                </ul>
                <a
                  href="https://api.whatsapp.com/send?phone=918141027000&text=Hello%2C%20I%27m%20interested%20in%20insurance%20planning%20support%20with%20PrimeIdea%20Ventures.%20Could%20you%20please%20share%20how%20I%20can%20get%20started%3F"
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
    )
 }

 export default ProtectingFinanceFuture;