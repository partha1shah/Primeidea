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
  ComputerDesktopIcon,
  GlobeAsiaAustraliaIcon,
  HomeModernIcon,
  LightBulbIcon,
  MapPinIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const foundingPoints = [
  {
    title: "Why the firm exists",
    description:
      "To cater to the in-person and specific needs of individuals who want to grow by investing their hard-earned money — with full understanding and experienced guidance.",
    Icon: LightBulbIcon,
  },
  {
    title: "Clarity before products",
    description:
      "Investing should begin with awareness: goals, holdings, risk, and suitability — then access to the right solutions, not a sales script.",
    Icon: BeakerIcon,
  },
  {
    title: "Vadodara base, global reach",
    description:
      "Meet at the Atladara office or join by video from anywhere in Gujarat, India, or across the globe.",
    Icon: MapPinIcon,
  },
  {
    title: "Understand, then access",
    description:
      "We help you understand mutual funds, equity, fixed income, PMS, AIF, and SIF — and facilitate access through published distribution credentials.",
    Icon: AcademicCapIcon,
  },
];

const segments = [
  { label: "Salaried professionals", Icon: BriefcaseIcon },
  { label: "Business owners", Icon: BuildingOffice2Icon },
  { label: "HNIs and families", Icon: UserGroupIcon },
  { label: "NRIs worldwide", Icon: GlobeAsiaAustraliaIcon },
  { label: "Retirees and pre-retirees", Icon: HomeModernIcon },
  { label: "Doctors and IT professionals", Icon: ComputerDesktopIcon },
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
    title: "Advisor vs Research Analyst",
    href: "/investment-advisor-in-vadodara",
    description: "PrimeIdea as a top research-led investment advisor in Vadodara.",
  },
  {
    title: "Contact Us",
    href: "/contact-us",
    description: "Office, phone, and registration details.",
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
          <FadeUpOneByOneAnimation className="mx-auto max-w-[720px] text-center mb-10 md:mb-12">
            <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-3">
              Why we were founded
            </p>
            <h2
              id="why-founded-heading"
              className="text-[28px] md:text-[40px] font-light text-[#2D2D2D] leading-[118%] mb-4"
            >
              Why the firm{" "}
              <strong className="font-semibold">exists</strong>
            </h2>
            <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed">
              Our approach combines research, education, and access to financial products —
              so investors can grow with confidence and understanding.
            </p>
          </FadeUpOneByOneAnimation>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 list-none m-0 p-0">
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
        </div>
      </section>

      <section
        aria-labelledby="founder-heading"
        className="bg-white py-14 md:py-16"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <FadeUpOneByOneAnimation className="lg:col-span-5">
              <div className="relative mx-auto lg:mx-0 w-full max-w-[420px] overflow-hidden rounded-[24px] ring-1 ring-[#E3ECF5]">
                <Image
                  src="/images/about-us/partha-shah-sebi-registered-research-analyst-inh000017815.jpg"
                  width={800}
                  height={800}
                  alt="Partha Shah, SEBI Registered Research Analyst INH000017815, PrimeIdea Ventures"
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
                Head of Research &amp; Investment Strategy
              </p>
              <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed mb-4">
                Engineering graduate (BE) with a Master’s in Finance (MS Finance). CFA Level 2
                and RIA examinations completed. Leads research and portfolio-review work from
                Vadodara.
              </p>
              <p className="text-sm md:text-base text-[#5A5A5A] leading-relaxed mb-6">
                {SEBI_RA.label} · {SEBI_RA.number}. Full credentials are listed below and on{" "}
                <Link href="/contact-us" className="font-semibold text-[#293C7D] hover:text-[#479AD2]">
                  Contact Us
                </Link>
                .
              </p>
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
        className="bg-[#F6FDFF] py-14 md:py-16"
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
              Built for real portfolios —{" "}
              <strong className="font-semibold">locally and across the globe</strong>
            </h2>
            <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed">
              The same research-led review applies in the Vadodara office or on a video call —
              including NRIs investing in India from overseas.
            </p>
          </FadeUpOneByOneAnimation>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none m-0 p-0">
            {segments.map(({ label, Icon }) => (
              <li key={label}>
                <FadeUpOneByOneAnimation className="flex h-full items-center gap-3 rounded-[20px] border border-[#E3ECF5] bg-white p-5">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F6FDFF] border border-[#E3ECF5]">
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
        className="bg-white py-14 md:py-16"
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
                <FadeUpOneByOneAnimation className="h-full rounded-[20px] border border-[#E3ECF5] bg-[#F6FDFF] px-5 py-4 text-base font-semibold text-[#293C7D]">
                  {item}
                </FadeUpOneByOneAnimation>
              </li>
            ))}
          </ul>

          <RegistrationsBlock />
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
              Process, review, and contact details that sit alongside this page.
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
