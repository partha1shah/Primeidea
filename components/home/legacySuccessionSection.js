import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import Image from "next/image";
import Link from "next/link";
import {
  DocumentTextIcon,
  BuildingLibraryIcon,
  HomeModernIcon,
  BriefcaseIcon,
  ScaleIcon,
  IdentificationIcon,
  GiftIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";

const serviceGroups = [
  {
    title: "Will Planning Support",
    description:
      "Online, customized, joint and mirror will coordination, plus signature and witnessing guidance.",
    Icon: DocumentTextIcon,
  },
  {
    title: "Will Registration & Custody",
    description:
      "Coordination for will registration, safe storage/custodianship, and executorship support.",
    Icon: BuildingLibraryIcon,
  },
  {
    title: "Family Trust Support",
    description:
      "Private family trust creation, trust deed process, and wealth-usage documentation coordination.",
    Icon: HomeModernIcon,
  },
  {
    title: "Business Succession",
    description:
      "Succession planning support for business owners and family-owned enterprises.",
    Icon: BriefcaseIcon,
  },
  {
    title: "Estate & Inheritance",
    description:
      "Asset inventory, beneficiary mapping, nomination review, and inheritance assistance.",
    Icon: ClipboardDocumentListIcon,
  },
  {
    title: "Post-Death Legalities",
    description:
      "Succession certificate, probate, legal heir certificate, and family settlement coordination.",
    Icon: ScaleIcon,
  },
  {
    title: "Property & Transfers",
    description:
      "Property transfer, due diligence, and gift deed coordination with qualified professionals.",
    Icon: GiftIcon,
  },
  {
    title: "POA & HUF Support",
    description:
      "Power of Attorney support and Hindu Undivided Family coordination where applicable.",
    Icon: IdentificationIcon,
  },
];

const LegacySuccessionSection = () => {
  return (
    <section
      aria-labelledby="legacy-succession-heading"
      className="bg-[#F6FDFF] py-14 md:py-20"
    >
      <div className="2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10 md:mb-12">
          <FadeUpOneByOneAnimation className="max-w-[720px]">
            <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-3">
              Partner-enabled coordination across India
            </p>
            <h2
              id="legacy-succession-heading"
              className="text-[26px] md:text-[32px] 2xl:text-[36px] font-light text-[#2D2D2D] leading-[125%] mb-4"
            >
              Legacy, Succession &amp;{" "}
              <strong className="font-semibold">Estate Planning</strong>
            </h2>
            <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed">
              Will planning, family trusts, business succession, probate, and estate documentation coordination — presented as partner-enabled support, not independent legal practice.
            </p>
          </FadeUpOneByOneAnimation>

          <FadeUpOneByOneAnimation className="flex flex-wrap gap-3 shrink-0">
            <Link
              href="/contact-us"
              className="bg-[#293C7D] text-base font-bold rounded-md text-white px-5 py-3 inline-flex items-center hover:bg-[#232D63] transition-colors"
            >
              Book Succession Planning Consultation
              <Image
                src="/images/icons/arrow-square-right.png"
                width={21}
                height={21}
                alt=""
                className="ml-2"
              />
            </Link>
            <Link
              href="/legacy-succession-estate-planning-india"
              className="border-2 border-[#293C7D] text-base font-bold rounded-md text-[#293C7D] px-5 py-3 inline-flex items-center hover:bg-[#293C7D] hover:text-white transition-colors"
            >
              Explore legacy and estate planning
            </Link>
          </FadeUpOneByOneAnimation>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 list-none m-0 p-0 mb-10">
          {serviceGroups.map(({ title, description, Icon }) => (
            <li key={title}>
              <FadeUpOneByOneAnimation className="group h-full rounded-[20px] border border-[#D6E4EE] bg-white p-5 transition-colors duration-300 hover:border-[#293C7D]">
                <div className="w-11 h-11 mb-4 rounded-xl bg-[#EAF5FF] flex items-center justify-center group-hover:bg-[#293C7D] transition-colors duration-300">
                  <Icon
                    className="w-5 h-5 text-[#293C7D] group-hover:text-white transition-colors duration-300"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-[#293C7D] text-base font-bold mb-2 leading-snug min-h-[2.5rem]">
                  {title}
                </h3>
                <p className="text-sm font-medium text-[#5A5A5A] leading-relaxed">
                  {description}
                </p>
              </FadeUpOneByOneAnimation>
            </li>
          ))}
        </ul>

        <FadeUpOneByOneAnimation className="rounded-[20px] border border-[#D6E4EE] bg-white p-5 md:p-6">
          <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#479AD2] mb-2">
            Mandatory disclaimer
          </p>
          <p className="text-sm md:text-base text-[#4D4D4D] leading-relaxed">
            PrimeIdea Ventures provides succession planning, estate planning and documentation coordination support through qualified legal/service partners. Legal drafting, registration, probate, succession certificate, legal heir certificate, property transfer, trust deed, gift deed, power of attorney and legal opinions must be handled by qualified legal professionals. PrimeIdea Ventures does not act as an independent law firm. Partner name and pricing are not shown on this website.
          </p>
        </FadeUpOneByOneAnimation>
      </div>
    </section>
  );
};

export default LegacySuccessionSection;
