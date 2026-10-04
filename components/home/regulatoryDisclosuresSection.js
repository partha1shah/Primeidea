import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import Image from "next/image";
import Link from "next/link";
import {
  CheckBadgeIcon,
  DocumentTextIcon,
  TableCellsIcon,
  ScaleIcon,
  ExclamationTriangleIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

const protectionLinks = [
  {
    title: "Investor Charter",
    description: "Investor rights, research-led process, and grievance path.",
    Icon: DocumentTextIcon,
    href: "/regulatory-disclosures#investor-charter",
  },
  {
    title: "AMFI Code of Conduct",
    description: "AMFI standards for mutual fund selling and distribution.",
    Icon: DocumentTextIcon,
    href: "/regulatory-disclosures#amfi-code-of-conduct",
  },
  {
    title: "Complaint Status",
    description: "How complaints are logged, reviewed, and closed.",
    Icon: TableCellsIcon,
    href: "/regulatory-disclosures#complaint-status",
  },
  {
    title: "Grievance Redressal",
    description: "How to raise concerns and follow the redressal process.",
    Icon: ScaleIcon,
    href: "/regulatory-disclosures#grievance-redressal",
  },
  {
    title: "SEBI SCORES",
    description: "File or track complaints on the SEBI SCORES portal.",
    Icon: CheckBadgeIcon,
    href: "https://scores.sebi.gov.in/",
    external: true,
  },
  {
    title: "Role Clarification",
    description: "No guaranteed returns. Market risks apply.",
    Icon: ExclamationTriangleIcon,
    href: "/regulatory-disclosures#role-clarification",
  },
  {
    title: "Compliance Contact",
    description: "Reach compliance for disclosure and grievance follow-ups.",
    Icon: EnvelopeIcon,
    href: "/regulatory-disclosures#compliance-contact",
  },
];

const RegulatoryDisclosuresSection = () => {
  return (
    <section
      id="regulatory-disclosures"
      aria-labelledby="regulatory-disclosures-heading"
    >
      {/* Hero band */}
      <div className="bg-[#232D63] bg-[url('/images/insurance/risk-management/bg.png')] bg-repeat bg-contain bg-center py-14 md:py-16">
        <div className="2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] mx-auto px-4 text-center">
          <FadeUpOneByOneAnimation>
            <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#FFC300] mb-3">
              Transparency &amp; compliance
            </p>
            <h2
              id="regulatory-disclosures-heading"
              className="text-[28px] md:text-[36px] 2xl:text-[40px] font-light text-white leading-[120%] mb-4"
            >
              Regulatory <strong className="font-semibold">Disclosures</strong>
            </h2>
            <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-[720px] mx-auto mb-8">
              Clear registration, grievance, and risk information for investors — process-first, without sales-only language or return promises.
            </p>
          </FadeUpOneByOneAnimation>

          <FadeUpOneByOneAnimation className="mx-auto max-w-[560px] rounded-[20px] border border-white/15 bg-[#293C7D]/50 px-6 py-6 md:px-8 md:py-7">
            <p className="text-white/70 text-sm mb-2">Registration &amp; disclosures</p>
            <p className="text-white text-xl md:text-2xl font-semibold mb-4">
              Verify credentials independently
            </p>
            <p className="text-white/75 text-sm md:text-base leading-relaxed">
              Full SEBI registration details are in the site footer and on the Regulatory
              Disclosures page. Investments in securities market are subject to market risks.
              PrimeIdea Ventures does not guarantee returns.
            </p>
          </FadeUpOneByOneAnimation>
        </div>
      </div>

      {/* Protection links */}
      <div className="bg-white py-12 md:py-14">
        <div className="2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] mx-auto px-4">
          <FadeUpOneByOneAnimation className="mb-8 md:mb-10">
            <h3 className="text-[#2D2D2D] text-xl md:text-2xl font-semibold mb-2">
              Investor protection links
            </h3>
            <p className="text-[#4D4D4D] text-sm md:text-base max-w-[640px] leading-relaxed">
              Access the key disclosure surfaces investors expect — charter, complaints, grievance process, and compliance contact.
            </p>
          </FadeUpOneByOneAnimation>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none m-0 p-0 mb-10">
            {protectionLinks.map(({ title, description, Icon, href, external }) => {
              const className =
                "group flex h-full flex-col rounded-[18px] border border-[#D6E4EE] bg-[#F6FDFF] p-5 transition-colors duration-300 hover:border-[#293C7D] hover:bg-white";

              const content = (
                <>
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div className="w-11 h-11 rounded-xl bg-white border border-[#D6E4EE] flex items-center justify-center group-hover:bg-[#293C7D] group-hover:border-[#293C7D] transition-colors duration-300">
                      <Icon
                        className="w-5 h-5 text-[#293C7D] group-hover:text-white transition-colors duration-300"
                        aria-hidden="true"
                      />
                    </div>
                    <span className="text-[#293C7D] text-lg font-semibold opacity-40 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                  </div>
                  <h4 className="text-[#293C7D] text-base font-bold mb-2 leading-snug">
                    {title}
                  </h4>
                  <p className="text-sm font-medium text-[#5A5A5A] leading-relaxed flex-1">
                    {description}
                  </p>
                </>
              );

              return (
                <li key={title}>
                  <FadeUpOneByOneAnimation className="h-full">
                    {external ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={className}
                      >
                        {content}
                      </a>
                    ) : (
                      <Link href={href} className={className}>
                        {content}
                      </Link>
                    )}
                  </FadeUpOneByOneAnimation>
                </li>
              );
            })}
          </ul>

          <FadeUpOneByOneAnimation className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 rounded-[20px] border border-[#D6E4EE] bg-[#F6FDFF] p-5 md:p-7">
            <div className="max-w-[700px]">
              <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#479AD2] mb-2">
                Risk disclosure
              </p>
              <p className="text-sm md:text-base text-[#4D4D4D] leading-relaxed">
                Investments in securities market are subject to market risks. Read all related documents carefully before investing. Past performance is not indicative of future results. Website content is for information and education and should not be treated as a promise of returns or as personalized investment advice unless provided through an appropriate regulated engagement.
              </p>
            </div>
            <Link
              href="/contact-us"
              className="bg-[#293C7D] text-white text-base font-bold rounded-md px-5 py-3 inline-flex items-center hover:bg-[#232D63] transition-colors shrink-0"
            >
              Contact Compliance
              <Image
                src="/images/icons/arrow-square-right.png"
                width={21}
                height={21}
                alt=""
                className="ml-2"
              />
            </Link>
          </FadeUpOneByOneAnimation>
        </div>
      </div>
    </section>
  );
};

export default RegulatoryDisclosuresSection;
