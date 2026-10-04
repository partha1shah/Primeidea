import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import RegistrationsBlock from "@/components/registrations/RegistrationsBlock";
import { PRODUCT_ACCESS, SEBI_RA } from "@/data/registrations";
import Image from "next/image";
import Link from "next/link";
import {
  AcademicCapIcon,
  BeakerIcon,
  BriefcaseIcon,
  BuildingOffice2Icon,
  CheckBadgeIcon,
  ComputerDesktopIcon,
  EyeIcon,
  GlobeAsiaAustraliaIcon,
  HomeModernIcon,
  LightBulbIcon,
  MapPinIcon,
  ShieldExclamationIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const foundingPoints = [
  {
    title: "Why the firm exists",
    description:
      "To cater to the in-person and specific needs of individuals who want to grow by investing their hard-earned money — with full understanding and expert guidance, not a product pitch.",
    Icon: LightBulbIcon,
  },
  {
    title: "Research before products",
    description:
      "Every conversation starts with your goals, cash flow, and current holdings. Suitability, overlap, and risk are reviewed first — then written next steps, not a sales script.",
    Icon: BeakerIcon,
  },
  {
    title: "Vadodara base, global reach",
    description:
      "The office is in Atladara, Vadodara. The same research-led process serves clients across Gujarat, India, and worldwide — in person at the office or on a video call.",
    Icon: MapPinIcon,
  },
  {
    title: "Visible accountability",
    description:
      "Registration details, Investor Charter, and grievance steps stay on the site. Market risks are stated clearly. Returns are never guaranteed.",
    Icon: EyeIcon,
  },
];

const credentials = [
  `${SEBI_RA.label} ${SEBI_RA.number}`,
  "Engineering graduate (BE) and Master’s in Finance (MS Finance)",
  "CFA Level 2 and RIA Level 1 & 2 examinations completed",
  "Research and distribution support across mutual funds, equity, fixed income, PMS, AIF, and SIF",
];

const segments = [
  { label: "Salaried professionals", Icon: BriefcaseIcon },
  { label: "Business owners", Icon: BuildingOffice2Icon },
  { label: "HNIs and families", Icon: UserGroupIcon },
  { label: "NRIs worldwide", Icon: GlobeAsiaAustraliaIcon },
  { label: "Retirees and pre-retirees", Icon: HomeModernIcon },
  { label: "Doctors and IT professionals", Icon: ComputerDesktopIcon },
];

const compliance = [
  {
    title: "Registered distributor",
    description:
      "AMFI mutual fund / SIF distribution and PMS distribution credentials are published with validity dates.",
    Icon: CheckBadgeIcon,
  },
  {
    title: "Research-led guidance",
    description:
      "Research and portfolio review help investors understand products before they invest.",
    Icon: BeakerIcon,
  },
  {
    title: "Market risks apply",
    description:
      "Investments in market-linked products are subject to market risks. Read all scheme-related documents carefully.",
    Icon: ShieldExclamationIcon,
  },
  {
    title: "Disclosures on the site",
    description:
      "Investor Charter, grievance process, and registration details live on Regulatory Disclosures.",
    Icon: AcademicCapIcon,
  },
];

const relatedPages = [
  {
    title: "Research Process",
    href: "/research-process",
    description: "Five-step review method, without product pushing.",
  },
  {
    title: "Portfolio Review",
    href: "/portfolio-review",
    description: "Upload holdings or book an office or video review.",
  },
  {
    title: "SEBI RA credentials",
    href: "/sebi-registered-research-analyst",
    description: "How PrimeIdea is registered and what that means.",
  },
  {
    title: "Leadership Team",
    href: "/leadership-team",
    description: "Partha Shah — photo, role, credentials, focus, and LinkedIn.",
  },
  {
    title: "Entity Profile",
    href: "/primeidea-ventures-profile",
    description: "Structured facts for search, LLMs, and investor clarity.",
  },
];

export default function AboutContentSections() {
  return (
    <>
      <section
        aria-labelledby="why-founded-heading"
        className="relative overflow-hidden bg-[#F6FDFF] py-16 md:py-20"
      >
        <div
          className="pointer-events-none absolute -right-24 top-10 h-64 w-64 rounded-full bg-[#479AD2]/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-[#FFC300]/15 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <FadeUpOneByOneAnimation className="mx-auto max-w-[760px] text-center mb-10 md:mb-14">
            <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-3">
              Why we were founded
            </p>
            <h2
              id="why-founded-heading"
              className="text-[28px] md:text-[40px] font-light text-[#2D2D2D] leading-[118%] mb-4"
            >
              Research, clarity, and{" "}
              <strong className="font-semibold">access to products</strong>
            </h2>
            <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed">
              Built for people who want to invest with understanding — research-led guidance
              plus access to mutual funds, PMS, AIF, SIF, and related solutions.
            </p>
          </FadeUpOneByOneAnimation>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 list-none m-0 p-0 mb-8 md:mb-10">
            {foundingPoints.map(({ title, description, Icon }, index) => (
              <li key={title}>
                <FadeUpOneByOneAnimation className="group relative h-full overflow-hidden rounded-[24px] border border-[#D6E4EE] bg-white p-6 md:p-7 transition-all duration-300 hover:border-[#293C7D]/40 hover:shadow-[0_20px_40px_-28px_rgba(41,60,125,0.45)]">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F6FDFF] border border-[#E3ECF5] transition-colors group-hover:bg-[#293C7D] group-hover:border-[#293C7D]">
                      <Icon
                        className="h-6 w-6 text-[#293C7D] transition-colors group-hover:text-[#FFC300]"
                        aria-hidden="true"
                      />
                    </span>
                    <span
                      className="text-3xl font-light tabular-nums leading-none text-[#293C7D]/20 group-hover:text-[#FFC300]/80 transition-colors"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#293C7D] mb-2.5">{title}</h3>
                  <p className="text-sm md:text-base text-[#4D4D4D] leading-relaxed m-0">
                    {description}
                  </p>
                </FadeUpOneByOneAnimation>
              </li>
            ))}
          </ul>

          <FadeUpOneByOneAnimation className="rounded-2xl border border-[#E3ECF5] bg-white/80 px-5 py-4 md:px-6 md:py-5">
            <p className="text-sm md:text-base text-[#5A5A5A] leading-relaxed m-0 text-center md:text-left">
              Legacy, succession and estate planning is coordinated through qualified legal
              partners. Legal drafting and opinions stay with those professionals. Partner names
              and pricing are not listed here.
            </p>
          </FadeUpOneByOneAnimation>
        </div>
      </section>

      <section
        aria-labelledby="founder-heading"
        className="bg-[#F6FDFF] py-14 md:py-16"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <FadeUpOneByOneAnimation className="lg:col-span-5">
              <div className="relative mx-auto lg:mx-0 w-full max-w-[420px] overflow-hidden rounded-[24px] ring-1 ring-[#E3ECF5]">
                <Image
                  src="/images/about-us/founder.jpg"
                  width={800}
                  height={900}
                  alt="Partha Shah SEBI Registered Research Analyst PrimeIdea Ventures"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </FadeUpOneByOneAnimation>

            <div className="lg:col-span-7">
              <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-3">
                Research leadership
              </p>
              <h2
                id="founder-heading"
                className="text-[28px] md:text-[36px] font-light text-[#2D2D2D] leading-[120%] mb-2"
              >
                Partha <strong className="font-semibold">Shah</strong>
              </h2>
              <p className="text-base md:text-lg font-semibold text-[#293C7D] mb-4">
                Head of Research &amp; Investment Strategy · SEBI RA {SEBI_RA.number}
              </p>
              <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed mb-6">
                Research and portfolio-review work at PrimeIdea is guided by Partha Shah from
                Vadodara. Investors should verify SEBI registration independently.
              </p>
              <ul className="grid grid-cols-1 gap-2 list-none m-0 p-0 mb-6">
                {credentials.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 rounded-xl border border-[#E3ECF5] bg-white px-4 py-3 text-sm md:text-base font-medium text-[#293C7D]"
                  >
                    <AcademicCapIcon className="h-5 w-5 shrink-0 text-[#479AD2] mt-0.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://www.linkedin.com/in/pssays"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-base font-bold text-[#293C7D] hover:text-[#479AD2]"
              >
                LinkedIn profile
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="segments-heading"
        className="bg-white py-14 md:py-16"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <FadeUpOneByOneAnimation className="max-w-[680px] mb-8 md:mb-10">
            <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-3">
              Who we help
            </p>
            <h2
              id="segments-heading"
              className="text-[28px] md:text-[36px] font-light text-[#2D2D2D] leading-[120%] mb-3"
            >
              Built for real portfolios{" "}
              <strong className="font-semibold">across Gujarat, India, and the world</strong>
            </h2>
            <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed">
              The same research-led review applies whether you visit the Vadodara office or join
              from anywhere online — including NRIs investing in India from overseas.
            </p>
          </FadeUpOneByOneAnimation>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none m-0 p-0">
            {segments.map(({ label, Icon }) => (
              <li key={label}>
                <FadeUpOneByOneAnimation className="flex h-full items-center gap-3 rounded-[20px] border border-[#E3ECF5] bg-[#F6FDFF] p-5">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white border border-[#E3ECF5]">
                    <Icon className="h-5 w-5 text-[#293C7D]" aria-hidden="true" />
                  </span>
                  <h3 className="text-base font-bold text-[#293C7D]">{label}</h3>
                </FadeUpOneByOneAnimation>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="products-heading"
        className="bg-[#F6FDFF] py-14 md:py-16"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <FadeUpOneByOneAnimation className="max-w-[720px] mb-8 md:mb-10">
            <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-3">
              What we do
            </p>
            <h2
              id="products-heading"
              className="text-[28px] md:text-[36px] font-light text-[#2D2D2D] leading-[120%] mb-3"
            >
              We help you understand products —{" "}
              <strong className="font-semibold">and access them</strong>
            </h2>
            <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed">
              PrimeIdea Ventures is a distributor of financial products. Our role is to
              facilitate access and help investors understand features and risks before
              investing.
            </p>
          </FadeUpOneByOneAnimation>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none m-0 p-0 mb-10">
            {PRODUCT_ACCESS.map((item) => (
              <li key={item}>
                <FadeUpOneByOneAnimation className="h-full rounded-[20px] border border-[#E3ECF5] bg-white px-5 py-4 text-base font-semibold text-[#293C7D]">
                  {item}
                </FadeUpOneByOneAnimation>
              </li>
            ))}
          </ul>

          <RegistrationsBlock />
        </div>
      </section>

      <section
        aria-labelledby="compliance-heading"
        className="bg-[#232D63] py-14 md:py-16 bg-[url('/images/insurance/risk-management/bg.png')] bg-repeat bg-contain bg-center"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <FadeUpOneByOneAnimation className="max-w-[720px] mb-8 md:mb-10">
            <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#FFC300] mb-3">
              Ethics and compliance
            </p>
            <h2
              id="compliance-heading"
              className="text-[28px] md:text-[36px] font-light text-white leading-[120%] mb-3"
            >
              How we stay{" "}
              <strong className="font-semibold">accountable</strong>
            </h2>
            <p className="text-base md:text-lg !text-white/80 leading-relaxed">
              Process, registration, and disclosures are meant to be readable — not hidden in a
              footer only.
            </p>
          </FadeUpOneByOneAnimation>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none m-0 p-0">
            {compliance.map(({ title, description, Icon }) => (
              <li key={title}>
                <FadeUpOneByOneAnimation className="h-full rounded-[20px] border border-white/15 bg-[#293C7D]/45 p-5 md:p-6">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#232D63] border border-white/10 mb-4">
                    <Icon className="h-5 w-5 text-[#FFC300]" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                  <p className="text-sm !text-white/75 leading-relaxed">{description}</p>
                </FadeUpOneByOneAnimation>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="about-related-heading"
        className="bg-[#F6FDFF] py-14 md:py-16"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <FadeUpOneByOneAnimation className="mb-8 md:mb-10">
            <h2
              id="about-related-heading"
              className="text-[24px] md:text-[30px] font-semibold text-[#2D2D2D] mb-2"
            >
              Related pages
            </h2>
            <p className="text-[#4D4D4D] text-sm md:text-base max-w-[640px]">
              Process, review, registration, and disclosures that sit alongside this page.
            </p>
          </FadeUpOneByOneAnimation>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedPages.map((link) => (
              <FadeUpOneByOneAnimation key={link.title}>
                <Link
                  href={link.href}
                  className="flex h-full flex-col rounded-[20px] border border-[#E3ECF5] bg-white p-5 hover:border-[#293C7D]/40 transition-colors"
                >
                  <h3 className="text-base font-bold text-[#293C7D] mb-1">{link.title}</h3>
                  <p className="text-sm text-[#4D4D4D] leading-relaxed">{link.description}</p>
                </Link>
              </FadeUpOneByOneAnimation>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
