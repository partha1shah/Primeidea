import BannerSection from "@/components/bannerSection";
import Footer from "@/components/footer";
import SuccessionPlanningForm from "@/components/forms/SuccessionPlanningForm";
import SuccessionPlanningContent from "@/components/succession/successionPlanningContent";
import ScopeBreadcrumbs from "@/components/scope/ScopeBreadcrumbs";
import ScopeDisclaimerBar from "@/components/scope/ScopeDisclaimerBar";
import ScopeFaqsSection from "@/components/scope/ScopeFaqsSection";
import ScopePageMetaStrip from "@/components/scope/ScopePageMetaStrip";
import ScopePageJsonLd, {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
} from "@/components/scope/ScopePageJsonLd";
import {
  CheckBadgeIcon,
  GlobeAltIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";

const PAGE_PATH = "/legacy-succession-estate-planning-india";
const PAGE_URL = `https://www.primeidea.in${PAGE_PATH}`;

const faqs = [
  {
    question: "Does PrimeIdea draft wills and trust deeds?",
    answer:
      "No. Legal drafting, registration, probate, succession certificate, legal heir certificate, property transfer, trust deed, gift deed, power of attorney and legal opinions must be handled by qualified legal professionals. PrimeIdea coordinates through partners and does not act as a law firm.",
    plainText:
      "No. Legal drafting, registration, probate, succession certificate, legal heir certificate, property transfer, trust deed, gift deed, power of attorney and legal opinions must be handled by qualified legal professionals. PrimeIdea coordinates through partners and does not act as a law firm.",
  },
  {
    question: "What does partner-enabled succession planning mean?",
    answer:
      "PrimeIdea helps you identify the need — will, trust, probate, property transfer, POA, HUF, or family settlement — and coordinates with qualified legal or service partners. Partner names and pricing are not listed on this website.",
    plainText:
      "PrimeIdea helps you identify the need — will, trust, probate, property transfer, POA, HUF, or family settlement — and coordinates with qualified legal or service partners. Partner names and pricing are not listed on this website.",
  },
  {
    question: "Who is this for across India?",
    answer:
      "Families and business owners who need documentation and transfer coordination. PrimeIdea is based in Vadodara and serves clients across Gujarat and India through office and video consultation.",
    plainText:
      "Families and business owners who need documentation and transfer coordination. PrimeIdea is based in Vadodara and serves clients across Gujarat and India through office and video consultation.",
  },
  {
    question: "Who leads research at PrimeIdea?",
    answer:
      "Research is led by a SEBI Registered Research Analyst. Investors can verify registration on the official SEBI website.",
    plainText:
      "Research is led by a SEBI Registered Research Analyst. Investors can verify registration on the official SEBI website.",
  },
  {
    question: "Does succession planning guarantee investment returns?",
    answer:
      "No. Succession work is documentation and coordination. Investments in securities market are subject to market risks. PrimeIdea does not guarantee returns.",
    plainText:
      "No. Succession work is documentation and coordination. Investments in securities market are subject to market risks. PrimeIdea does not guarantee returns.",
  },
];

export const metadata = {
  title: "Legacy, Succession and Estate Planning in India",
  description:
    "PrimeIdea Ventures helps families across India with partner-enabled legacy, succession and estate planning coordination through a research-led process Legal drafting by qualified professionals. No partner name or pricing.",
  keywords:
    "succession planning India, estate planning India, will planning coordination, family trust support, probate coordination, PrimeIdea Ventures",
  author: "Partha Shah",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: PAGE_URL,
    site_name: "PrimeIdea Ventures",
    title: "Legacy, Succession and Estate Planning in India | PrimeIdea Ventures",
    description:
      "Partner-enabled succession and estate coordination across India. Legal documents by qualified professionals.",
  },
  twitter: {
    handle: "@primeidea",
    site: "@primeidea",
    cardType: "summary_large_image",
  },
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-US": PAGE_URL,
    },
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Legacy, Succession and Estate Planning in India",
  description:
    "Partner-enabled succession, estate and documentation coordination across India. Legal drafting by qualified legal professionals.",
  provider: {
    "@type": "FinancialService",
    name: "PrimeIdea Ventures",
    url: "https://www.primeidea.in",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vadodara",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
  },
  areaServed: ["India", "Gujarat", "Vadodara"],
  url: PAGE_URL,
};

const breadcrumbSchema = buildBreadcrumbJsonLd([
  { name: "Legacy, Succession and Estate Planning", url: PAGE_PATH },
]);
const faqSchema = buildFaqJsonLd(faqs);

export default function LegacySuccessionEstatePlanningPage() {
  return (
    <div className="bg-[#F6FDFF]">
      <ScopePageJsonLd data={[serviceSchema, breadcrumbSchema, faqSchema]} />

      <BannerSection
        mainBannerImage="/images/legacy-inheritance-planning/banner.png"
        bannerRightImg="/images/home/banner-right.png"
        mainTitle="Legacy, Succession and Estate Planning in India"
        mainSubTitle="Partner-enabled will, trust, probate and estate documentation coordination from a Vadodara base, across India. Legal drafting by qualified professionals. No partner name or pricing. No guaranteed returns."
        mainLinkTitle="Book Succession Planning Consultation"
        mainLink="#lead-form"
        usePrimaryAsLink={true}
        formTitle="Succession Planning"
        secondaryLinkTitle="Family Wealth Office"
        secondaryLink="/family-wealth-office-gujarat-india"
      />

      <ScopePageMetaStrip
        stats={[
          { label: "Geography", value: "India", Icon: GlobeAltIcon },
          { label: "Role", value: "Coordination", Icon: ScaleIcon },
        ]}
        disclaimer="PrimeIdea Ventures does not act as an independent law firm. Partner name and pricing are not shown. Investments in securities market are subject to market risks. PrimeIdea does not guarantee returns."
      />

      <ScopeBreadcrumbs items={[{ label: "Legacy, Succession and Estate Planning" }]} />

      <SuccessionPlanningContent />

      <SuccessionPlanningForm />

      <ScopeFaqsSection
        title="Succession planning — Frequently Asked Questions"
        description="What PrimeIdea coordinates, what lawyers must do, and how to start."
        faqs={faqs}
      />

      <ScopeDisclaimerBar ctaHref="#lead-form" ctaLabel="Book Succession Planning Consultation">
        PrimeIdea Ventures provides succession planning, estate planning and documentation
        coordination support through qualified legal/service partners. Legal drafting,
        registration, probate, succession certificate, legal heir certificate, property
        transfer, trust deed, gift deed, power of attorney and legal opinions must be handled
        by qualified legal professionals. PrimeIdea Ventures does not act as an independent law
        firm. Partner name and pricing are not listed. Investments in securities market are
        subject to market risks. </ScopeDisclaimerBar>

      <Footer />
    </div>
  );
}
