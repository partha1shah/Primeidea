import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import Image from "next/image";
import Link from "next/link";
import {
  AcademicCapIcon,
  BeakerIcon,
  CheckBadgeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const credibilityPoints = [
  {
    title: "SEBI Registered Research Analyst",
    description: "Research leadership you can verify on the SEBI RA page and in the site footer.",
    Icon: CheckBadgeIcon,
  },
  {
    title: "Research-Led Process",
    description:
      "Portfolio decisions guided by suitability, allocation, overlap analysis, and risk metrics.",
    Icon: BeakerIcon,
  },
  {
    title: "Vadodara Base, Broader Reach",
    description:
      "Based in Vadodara, serving investors across Gujarat and India through office and online consultation.",
    Icon: MapPinIcon,
  },
  {
    title: "Process Over Sales Language",
    description:
      "Clear disclosures, no guaranteed-return claims, and a visible research framework — not product pushing.",
    Icon: AcademicCapIcon,
  },
];

const FounderCredibilitySection = () => {
  return (
    <section
      aria-labelledby="founder-credibility-heading"
      className="bg-[#232D63] py-14 md:py-20 bg-[url('/images/insurance/risk-management/bg.png')] bg-repeat bg-contain bg-center"
    >
      <div className="2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-10 md:mb-12">
          <FadeUpOneByOneAnimation className="lg:col-span-5">
            <div className="relative mx-auto lg:mx-0 w-full max-w-[400px] aspect-[4/5] overflow-hidden rounded-[20px] bg-[#293C7D] ring-1 ring-white/15">
              <Image
                src="/images/about-us/founder.jpg"
                width={800}
                height={1000}
                alt="Partha Shah SEBI Registered Research Analyst PrimeIdea Ventures"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </FadeUpOneByOneAnimation>

          <FadeUpOneByOneAnimation className="lg:col-span-7">
            <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#FFC300] mb-3">
              Founder &amp; research leadership
            </p>
            <h2
              id="founder-credibility-heading"
              className="text-[28px] md:text-[36px] 2xl:text-[40px] font-light text-white leading-[120%] mb-3"
            >
              Partha <strong className="font-semibold">Shah</strong>
            </h2>
            <p className="text-[#FFC300] text-base md:text-lg font-semibold mb-4">
              SEBI Registered Research Analyst
            </p>
            <p className="text-base md:text-lg text-white/80 leading-relaxed mb-6 max-w-[560px]">
              PrimeIdea Ventures is a Vadodara-based research-led wealth management and portfolio review firm serving investors across Gujarat and India, with a research process guided by Partha Shah.
            </p>
            <p className="text-sm md:text-base text-white/70 leading-relaxed mb-8 max-w-[560px]">
              Investors should verify SEBI registration independently. PrimeIdea does not guarantee returns.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/research-process"
                className="bg-[#FFC300] text-[#232D63] text-base font-bold rounded-md px-5 py-3 inline-flex items-center hover:bg-white transition-colors"
              >
                View Research Process
                <Image
                  src="/images/icons/arrow-square-right-dark.png"
                  width={21}
                  height={21}
                  alt=""
                  className="ml-2"
                />
              </Link>
              <Link
                href="/about-us"
                className="border border-white/30 text-white text-base font-bold rounded-md px-5 py-3 inline-flex items-center hover:border-[#FFC300] hover:text-[#FFC300] transition-colors"
              >
                About PrimeIdea
              </Link>
            </div>
          </FadeUpOneByOneAnimation>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 list-none m-0 p-0">
          {credibilityPoints.map(({ title, description, Icon }) => (
            <li key={title}>
              <FadeUpOneByOneAnimation className="group h-full rounded-[20px] border border-white/15 bg-[#293C7D]/45 p-5 transition-colors duration-300 hover:border-[#FFC300]/40">
                <div className="w-11 h-11 mb-4 rounded-xl bg-[#232D63] border border-white/10 flex items-center justify-center group-hover:bg-[#FFC300] group-hover:border-[#FFC300] transition-colors duration-300">
                  <Icon
                    className="w-5 h-5 text-[#FFC300] group-hover:text-[#232D63] transition-colors duration-300"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-white text-base font-bold mb-2 leading-snug">
                  {title}
                </h3>
                <p className="text-sm font-medium text-white/70 leading-relaxed">
                  {description}
                </p>
              </FadeUpOneByOneAnimation>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FounderCredibilitySection;
