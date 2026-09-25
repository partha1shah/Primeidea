import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import Image from "next/image";
import Link from "next/link";
import {
  BuildingOffice2Icon,
  CheckBadgeIcon,
  CheckCircleIcon,
  GlobeAltIcon,
  MapPinIcon,
  PhoneIcon,
  ScaleIcon,
  ShieldExclamationIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const IDENTITY_LINE =
  "PrimeIdea Ventures is a Vadodara-based research-led wealth management and portfolio review firm serving investors across Gujarat and India, with a research process guided by Partha Shah, SEBI Registered Research Analyst INH000017815.";

const entityFacts = [
  { label: "Legal / brand name", value: "PrimeIdea Ventures" },
  { label: "Entity type", value: "Research-led wealth management & portfolio review firm" },
  { label: "Base location", value: "Vadodara, Gujarat, India" },
  { label: "Service reach", value: "Gujarat and India (office + video)" },
  {
    label: "Office address",
    value:
      "V3 Landmark, 306-307, opp. Atladara Railway Crossing Road, Narayanwadi, Atladara, Vadodara, Gujarat 390012",
  },
  { label: "Phone / WhatsApp", value: "+91 81410 27000" },
  { label: "Research leadership", value: "Partha Shah — Head of Research & Investment Strategy" },
  { label: "SEBI registration", value: "Research Analyst INH000017815" },
  {
    label: "Not claiming",
    value: "SEBI Registered Investment Adviser (unless separately registered)",
  },
  { label: "Returns policy", value: "No guaranteed / market-beating / risk-free return claims" },
];

const whatWeDo = [
  "Structured portfolio review (allocation, overlap, suitability)",
  "Mutual fund, fixed income, and equity research context",
  "Private wealth & family wealth office conversations",
  "PMS / AIF / SIF suitability education where permitted",
  "Retirement, insurance, NRI, and succession coordination (partner-enabled for legal work)",
];

const whatWeDont = [
  "Guarantee returns or market-beating performance",
  "Present as SEBI RIA unless separately registered",
  "Claim offices in other cities without proof",
  "List succession partner names or pricing on this site",
  "Sell products on star ratings alone",
];

const serviceLinks = [
  { title: "Portfolio Review", href: "/portfolio-review" },
  { title: "Research Process", href: "/research-process" },
  { title: "Private Wealth", href: "/private-wealth-management-gujarat-india" },
  { title: "SEBI RA page", href: "/sebi-registered-research-analyst" },
  { title: "Regulatory Disclosures", href: "/regulatory-disclosures" },
  { title: "Comparison guides", href: "/comparisons" },
  { title: "Knowledge Centre", href: "/knowledge-centre" },
  { title: "Leadership Team", href: "/leadership-team" },
];

export default function ProfileContent() {
  return (
    <>
      <section className="relative overflow-hidden bg-white py-14 md:py-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(71,154,210,0.14) 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="relative mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#479AD2] mb-3">
                Entity profile
              </p>
              <h2 className="text-[28px] md:text-[36px] font-light text-[#2D2D2D] leading-[120%] mb-4">
                Facts for search, LLMs, and{" "}
                <strong className="font-semibold">investor clarity</strong>
              </h2>
              <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed mb-6">
                {IDENTITY_LINE}
              </p>
              <ul className="flex flex-wrap gap-2 list-none m-0 p-0 mb-6">
                {[
                  "Vadodara base",
                  "Gujarat & India reach",
                  "SEBI RA INH000017815",
                  "No return guarantees",
                ].map((chip) => (
                  <li
                    key={chip}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#D0E0EC] bg-[#F6FDFF] px-3 py-1.5 text-[11px] font-semibold text-[#293C7D]"
                  >
                    <CheckCircleIcon className="h-3.5 w-3.5 text-[#479AD2]" aria-hidden="true" />
                    {chip}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/book-portfolio-review"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#FFC300] px-5 py-3 text-sm font-bold text-[#232D63] hover:bg-[#293C7D] hover:!text-white transition-colors"
                >
                  Book Portfolio Review
                  <Image
                    src="/images/icons/arrow-square-right-dark.png"
                    width={18}
                    height={18}
                    alt=""
                  />
                </Link>
                <Link
                  href="/about-us"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#D0E0EC] px-5 py-3 text-sm font-bold text-[#293C7D] hover:border-[#293C7D] transition-colors"
                >
                  About PrimeIdea
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative h-full overflow-hidden rounded-[28px] border border-[#293C7D]/20 bg-gradient-to-br from-[#232D63] via-[#293C7D] to-[#1E3A5F] p-5 md:p-6 shadow-[0_24px_50px_-30px_rgba(35,45,99,0.65)]">
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#FFC300]/15 blur-2xl" />
                <div className="relative flex items-center gap-4 mb-5">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border-2 border-[#FFC300]/60 bg-[#232D63]">
                    <Image
                      src="/images/about-us/founder.jpg"
                      alt="Partha Shah, SEBI Registered Research Analyst"
                      fill
                      sizes="80px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] !text-[#FFC300] m-0 mb-1">
                      Research leadership
                    </p>
                    <p className="text-xl font-bold !text-white m-0 leading-tight">Partha Shah</p>
                    <p className="text-sm !text-white/75 m-0 mt-1">
                      Head of Research &amp; Investment Strategy
                    </p>
                  </div>
                </div>
                <div className="relative rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 mb-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] !text-white/55 m-0 mb-1">
                    SEBI registration
                  </p>
                  <p className="text-xl font-bold tabular-nums !text-[#FFC300] m-0">INH000017815</p>
                </div>
                <div className="relative flex flex-col gap-2.5">
                  <Link
                    href="/sebi-registered-research-analyst"
                    className="inline-flex items-center justify-center rounded-xl bg-[#FFC300] px-4 py-3 text-sm font-bold text-[#232D63] hover:bg-white transition-colors"
                  >
                    Verify SEBI RA →
                  </Link>
                  <Link
                    href="/leadership-team"
                    className="inline-flex items-center justify-center text-sm font-semibold !text-white/70 hover:!text-[#FFC300] transition-colors"
                  >
                    Leadership team →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F6FDFF] py-14 md:py-16" aria-labelledby="entity-facts-heading">
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <FadeUpOneByOneAnimation className="mb-8 max-w-[680px]">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#479AD2] mb-3">
              Structured facts
            </p>
            <h2
              id="entity-facts-heading"
              className="text-[28px] md:text-[34px] font-light text-[#2D2D2D] leading-[120%] m-0"
            >
              PrimeIdea Ventures —{" "}
              <strong className="font-semibold">entity snapshot</strong>
            </h2>
          </FadeUpOneByOneAnimation>

          <dl className="rounded-[24px] border border-[#E3ECF5] bg-white overflow-hidden divide-y divide-[#E3ECF5] m-0">
            {entityFacts.map((fact) => (
              <div
                key={fact.label}
                className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4 px-5 py-4 md:px-6"
              >
                <dt className="sm:col-span-4 text-sm font-semibold text-[#293C7D]">{fact.label}</dt>
                <dd className="sm:col-span-8 text-sm md:text-base text-[#4D4D4D] m-0 leading-relaxed">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { Icon: MapPinIcon, label: "Base", value: "Vadodara" },
              { Icon: GlobeAltIcon, label: "Reach", value: "Gujarat & India" },
              { Icon: CheckBadgeIcon, label: "SEBI RA", value: "INH000017815" },
            ].map(({ Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-2xl border border-[#D0E0EC] bg-white px-4 py-3.5"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#293C7D] text-[#FFC300]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7A93A8] m-0">
                    {label}
                  </p>
                  <p className="text-sm font-bold text-[#2D2D2D] m-0">{value}</p>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="rounded-[24px] border border-[#D0E0EC] bg-[#F6FDFF] p-6 md:p-7">
              <div className="mb-4 flex items-center gap-3">
                <BuildingOffice2Icon className="h-6 w-6 text-[#293C7D]" aria-hidden="true" />
                <h2 className="text-xl font-bold text-[#293C7D] m-0">What we do</h2>
              </div>
              <ul className="space-y-3 list-none m-0 p-0">
                {whatWeDo.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-[#4D4D4D]">
                    <CheckCircleIcon
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#479AD2]"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[24px] border border-[#E8D5D5] bg-white p-6 md:p-7">
              <div className="mb-4 flex items-center gap-3">
                <ShieldExclamationIcon className="h-6 w-6 text-[#A33B3B]" aria-hidden="true" />
                <h2 className="text-xl font-bold text-[#293C7D] m-0">What we do not claim</h2>
              </div>
              <ul className="space-y-3 list-none m-0 p-0">
                {whatWeDont.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-[#4D4D4D]">
                    <ScaleIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#A33B3B]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-[24px] border border-[#E3ECF5] bg-[#F6FDFF] p-6 md:p-7 flex flex-col sm:flex-row sm:items-center gap-4">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#293C7D] text-[#FFC300]">
              <PhoneIcon className="h-6 w-6" aria-hidden="true" />
            </span>
            <div className="flex-1">
              <p className="text-sm font-semibold text-[#2D2D2D] m-0 mb-1">Contact the Vadodara office</p>
              <p className="text-sm text-[#4D4D4D] m-0">
                Call / WhatsApp{" "}
                <a href="tel:+918141027000" className="font-semibold text-[#293C7D]">
                  +91 81410 27000
                </a>
                . Or book a portfolio review online.
              </p>
            </div>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-xl border border-[#293C7D] px-4 py-2.5 text-sm font-bold text-[#293C7D] hover:bg-[#293C7D] hover:!text-white transition-colors shrink-0"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F6FDFF] py-14 md:py-16">
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <div className="mb-6 flex items-center gap-3">
            <UserIcon className="h-6 w-6 text-[#293C7D]" aria-hidden="true" />
            <h2 className="text-[22px] md:text-[28px] font-light text-[#2D2D2D] m-0">
              Related <strong className="font-semibold">pages</strong>
            </h2>
          </div>
          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 list-none m-0 p-0">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex h-full items-center justify-between rounded-xl border border-[#D0E0EC] bg-white px-4 py-3.5 text-sm font-semibold text-[#293C7D] hover:border-[#293C7D] transition-colors"
                >
                  {link.title}
                  <span aria-hidden="true" className="!text-[#FFC300]">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
