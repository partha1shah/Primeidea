import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import FadeUpAnimationDelay from "@/animations/FadeUpAnimationDelay";
import FadeUpAnimation from "@/animations/FadeUpAnimation";
import Image from "next/image";

const JoinCommunity = () => { 
    return (
        <section>
        <div className="bg-[#F6FDFF] py-12 2xl:py-20">
          <div className="2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] mx-auto px-4">
            <div className="flex justify-between flex-col lg:flex-row">
              <FadeUpOneByOneAnimation className="max-w-[500px] lg:max-w-[100%] w-full lg:w-[40%] xl:w-[45%] mb-5">
                <h2 className="text-[98px] sm:text-[118px] xl:text-[158px] 2xl:text-[170px] font-extrabold leading-[100%] bg-[#2f8d46] bg-[url('/images/home/prime-idea-textbg.png')] bg-repeat bg-clip-text text-transparent">
                  Prime idea{" "}
                  <span className="inline-block w-[70px] h-[70px] bg-[url('/images/home/prime-idea-textbg.png')] rounded-[50%]"></span>
                </h2>
              </FadeUpOneByOneAnimation>
              <FadeUpOneByOneAnimation className="w-full lg:w-[60%] xl:w-[55%]">
                <h3 className="text-xl font-normal tracking-tight text-[#000] sm:text-3xl mt-0 mb-6">
                  Join the community
                </h3>
                <p className="mb-4 text-lg">
                  Be a part of a dynamic network of like-minded individuals and
                  forward-thinking professionals. At Primeidea, we’re more than
                  just a financial advisory service; we’re a community dedicated
                  to shared success and growth.
                </p>
                <p className="mb-4 text-lg">Connect with us to:</p>
                <ul className="list-disc pl-[20px] mb-6">
                  <li className="mb-3 text-lg">
                    <p className="contents">
                      <strong>Access Exclusive Insights:</strong> Stay updated
                      with the latest financial trends and tips.
                    </p>
                  </li>
                  <li className="mb-3 text-lg">
                    <p className="contents">
                      <strong>Engage in Events:</strong> Participate in
                      workshops, webinars, and networking opportunities.
                    </p>
                  </li>
                  <li className="mb-3 text-lg">
                    <p className="contents">
                      <strong>Receive Personalized Support:</strong> Get
                      tailored advice and resources to achieve your financial
                      goals.
                    </p>
                  </li>
                </ul>
                <a
                href='https://whatsapp.com/channel/0029VaNUByW5vKAEkvUQCo33'
                className="bg-[#293C7D] md:text-md xl:text-lg font-bold rounded-md text-white px-6 py-3 inline-flex items-center"
                >
                  Join our WhatApps Community 
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

 export default JoinCommunity;