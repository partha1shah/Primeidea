import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import Image from "next/image";
import Link from "next/link";
import {
  AcademicCapIcon,
  BeakerIcon,
  BriefcaseIcon,
  BuildingOffice2Icon,
  CheckBadgeIcon,
  ComputerDesktopIcon,
  GlobeAsiaAustraliaIcon,
  HomeModernIcon,
  ScaleIcon,
  ShieldExclamationIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const timeline = [
  {
    title: "Why the firm exists",
    description:
      "Too many portfolios are assembled product by product. PrimeIdea was built in Vadodara so investors can start with a structured review — suitability, overlap, and allocation — before adding more.",
  },
  {
    title: "Research before products",
    description:
      "The process is guided by Partha Shah, SEBI Registered Research Analyst INH000017815. Recommendations follow a written review cadence, not a sales script.",
  },
  {
    title: "Vadodara base, wider reach",
    description:
      "The office is in Atladara, Vadodara. Clients across Gujarat and India use the same process in person or on a video call.",
  },
  {
    title: "Visible accountability",
    description:
      "Regulatory disclosures stay on the site. Returns are not guaranteed. PrimeIdea does not present itself as a SEBI Registered Investment Adviser unless separately registered.",
  },
];

const credentials = [
  "SEBI Registered Research Analyst INH000017815",
  "Engineering graduate (BE) and Master’s in Finance (MS Finance)",
  "CFA Level 2 and RIA Level 1 & 2 examinations completed",
  "Research support across mutual funds, equity, fixed income, PMS, AIF, and SIF review context",
];

const segments = [
  { label: "Salaried professionals", Icon: BriefcaseIcon },
  { label: "Business owners", Icon: BuildingOffice2Icon },
  { label: "HNIs and families", Icon: UserGroupIcon },
  { label: "NRIs", Icon: GlobeAsiaAustraliaIcon },
  { label: "Retirees and pre-retirees", Icon: HomeModernIcon },
  { label: "Doctors and IT professionals", Icon: ComputerDesktopIcon },
];

const compliance = [
  {
    title: "SEBI RA-led research",
    description: "Verify Partha Shah’s registration independently using INH000017815.",
    Icon: CheckBadgeIcon,
  },
  {
    title: "Not SEBI RIA unless registered",
    description: "Research-led portfolio review is not the same as Registered Investment Adviser advice.",
    Icon: ScaleIcon,
  },
  {
    title: "No guaranteed returns",
    description: "Investments in securities market are subject to market risks. Process first, not promises.",
    Icon: ShieldExclamationIcon,
  },
  {
    title: "Disclosures on the site",
    description: "Investor Charter, grievance process, and role clarification live on Regulatory Disclosures.",
    Icon: BeakerIcon,
  },
];

const relatedPages = [
  {
    title: "Research Process",
    href: "/research-process",
    description: "Five-step review method, without product pushing.",
  },
  {
    title: "Portfolio Review in Vadodara",
    href: "/portfolio-review-vadodara",
    description: "Upload holdings or book an office or video review.",
  },
  {
    title: "SEBI RA credentials",
    href: "/sebi-registered-research-analyst-vadodara",
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
        className="bg-white py-14 md:py-16"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-5">
              <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-3">
                Why we were founded
              </p>
              <h2
                id="why-founded-heading"
                className="text-[28px] md:text-[36px] font-light text-[#2D2D2D] leading-[120%] mb-4"
              >
                A research desk in Vadodara —{" "}
                <strong className="font-semibold">not a product counter</strong>
              </h2>
              <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed mb-6">
                Start with a structured portfolio review. Understand risks, overlaps, asset
                allocation, and next financial steps before investing further.
              </p>
              <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed">
                PrimeIdea coordinates Legacy, Succession and Estate Planning through qualified
                partners. Legal drafting and opinions stay with qualified legal professionals.
                Partner names and pricing are not listed here.
              </p>
            </div>

            <ol className="lg:col-span-7 relative list-none m-0 p-0">
              <span
                className="absolute left-[19px] top-3 bottom-3 w-px bg-[#E3ECF5] hidden sm:block"
                aria-hidden="true"
              />
              {timeline.map((item, index) => (
                <li key={item.title} className="relative sm:pl-14 pb-5 last:pb-0">
                  <span className="hidden sm:flex absolute left-0 top-1 h-10 w-10 items-center justify-center rounded-full bg-[#293C7D] text-[#FFC300] text-sm font-bold tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <FadeUpOneByOneAnimation className="rounded-2xl border border-[#E3ECF5] bg-[#F6FDFF] p-5 md:p-6">
                    <p className="sm:hidden text-[#479AD2] text-sm font-bold mb-1 tabular-nums">
                      Step {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="text-lg font-bold text-[#293C7D] mb-2">{item.title}</h3>
                    <p className="text-sm md:text-base text-[#4D4D4D] leading-relaxed">
                      {item.description}
                    </p>
                  </FadeUpOneByOneAnimation>
                </li>
              ))}
            </ol>
          </div>
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
                Head of Research &amp; Investment Strategy · SEBI RA INH000017815
              </p>
              <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed mb-6">
                Research and portfolio-review work at PrimeIdea is guided by Partha Shah from
                Vadodara. Investors should verify SEBI registration independently. Completing RIA
                examinations is not the same as SEBI Registered Investment Adviser registration.
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
              <strong className="font-semibold">across Gujarat and India</strong>
            </h2>
            <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed">
              The same research-led review applies whether you visit the Vadodara office or
              continue online.
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
