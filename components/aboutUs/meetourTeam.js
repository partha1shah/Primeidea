import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import Image from "next/image";

const MeetOurTeam = () => { 
    return (
        <section>
            <div className="py-8">
                <div className="2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] mx-auto px-4">
                    <FadeUpOneByOneAnimation className="flex justify-between flex-col md:flex-row mb-4">
                        <h2 className="text-2xl lg:text-3xl text-center md:text-left mb-2 md:mb-0 font-medium">
                            Meet the <br/>
                            consultation team 
                        </h2>
                        <p className="text-base md:text-lg lg:text-xl text-center md:text-left md:max-w-[420px] lg:max-w-[600px] xl:max-w-[780px]">
                            Explore our diverse case studies showcasing how our financial consultation services have enabled businesses to overcome challenges and achieve their full potential.
                        </p>
                        {/* <a href="" className="font-semibold underline-offset-8 px-2 text-[#293C7D]s">
                            Join our team
                        </a> */}
                    </FadeUpOneByOneAnimation>
                    <div className="flex flex-wrap mx-[-10px]">
                        <FadeUpOneByOneAnimation className="mb-4 md:mb-0 w-1/2 md:w-1/4 px-[10px] text-center">
                            <Image src="/images/about-us/meet-our-team/1.png" width={314} height={447} alt="Aman Jeoy, Co-ordinator at PrimeIdea Ventures" className="mb-2" sizes="(max-width: 768px) 50vw, 314px" />
                            <h2 className="leading-[130%] text-xl xl:text-2xl font-semibold mb-1 xl:mb-2 text-[#222222]">
                                Aman Jeoy
                            </h2>
                            <h3 className="text-base xl:text-lg font-medium text-[#6E6E71]">
                                Co-ordinator
                            </h3>
                        </FadeUpOneByOneAnimation>
                        <FadeUpOneByOneAnimation className="mb-4 md:mb-0 w-1/2 md:w-1/4 px-[10px] text-center">
                            <Image src="/images/about-us/meet-our-team/2.png" width={314} height={447} alt="PrimeIdea Ventures consultation team member" className="mb-2" sizes="(max-width: 768px) 50vw, 314px" />
                            <h2 className="leading-[130%] text-xl xl:text-2xl font-semibold mb-1 xl:mb-2 text-[#222222]">
                                Aman Jeoy
                            </h2>
                            <h3 className="text-base xl:text-lg font-medium text-[#6E6E71]">
                                Co-ordinator
                            </h3>
                        </FadeUpOneByOneAnimation>
                        <FadeUpOneByOneAnimation className="mb-4 md:mb-0 w-1/2 md:w-1/4 px-[10px] text-center">
                            <Image src="/images/about-us/meet-our-team/3.png" width={314} height={447} alt="PrimeIdea Ventures consultation team member" className="mb-2" sizes="(max-width: 768px) 50vw, 314px" />
                            <h2 className="leading-[130%] text-xl xl:text-2xl font-semibold mb-1 xl:mb-2 text-[#222222]">
                                Aman Jeoy
                            </h2>
                            <h3 className="text-base xl:text-lg font-medium text-[#6E6E71]">
                                Co-ordinator
                            </h3>
                        </FadeUpOneByOneAnimation>
                        <FadeUpOneByOneAnimation className="mb-4 md:mb-0 w-1/2 md:w-1/4 px-[10px] text-center">
                            <Image src="/images/about-us/meet-our-team/4.png" width={314} height={447} alt="PrimeIdea Ventures consultation team member" className="mb-2" sizes="(max-width: 768px) 50vw, 314px" />
                            <h2 className="leading-[130%] text-xl xl:text-2xl font-semibold mb-1 xl:mb-2 text-[#222222]">
                                Aman Jeoy
                            </h2>
                            <h3 className="text-base xl:text-lg font-medium text-[#6E6E71]">
                                Co-ordinator
                            </h3>
                        </FadeUpOneByOneAnimation>
                    </div>
                </div>
            </div>
        </section>
    )
 }

 export default MeetOurTeam;