import BannerSection from "@/components/bannerSection";
import Footer from "@/components/footer";
import NriInvestmentSupportContent from "@/components/nri/nriInvestmentSupportContent";
import ScopeBreadcrumbs from "@/components/scope/ScopeBreadcrumbs";
import ScopeDisclaimerBar from "@/components/scope/ScopeDisclaimerBar";
import ScopeFaqsSection from "@/components/scope/ScopeFaqsSection";
import ScopePageMetaStrip from "@/components/scope/ScopePageMetaStrip";
import ScopePageJsonLd, {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
} from "@/components/scope/ScopePageJsonLd";
import ScopeSuccessionCrossLink from "@/components/scope/ScopeSuccessionCrossLink";
import {
  CheckBadgeIcon,
  GlobeAsiaAustraliaIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const PAGE_PATH = "/nri-investment-support-india";
const PAGE_URL = `https://primeidea.in${PAGE_PATH}`;

const faqs = [
  {
    question: "What is NRI investment support at PrimeIdea?",
    answer:
      "It is research-led review of India-based holdings for non-resident investors — overlap, allocation, account context, and next steps — guided by Partha Shah, SEBI Registered Research Analyst INH000017815. The firm is based in Vadodara and serves clients across Gujarat and India by video.",
    plainText:
      "It is research-led review of India-based holdings for non-resident investors — overlap, allocation, account context, and next steps — guided by Partha Shah, SEBI Registered Research Analyst INH000017815. The firm is based in Vadodara and serves clients across Gujarat and India by video.",
  },
  {
    question: "Does PrimeIdea have offices outside India?",
    answer:
      "No. PrimeIdea is Vadodara-based. NRI clients typically join by video or share a CAS for review. The firm does not claim overseas or multi-city offices.",
    plainText:
      "No. PrimeIdea is Vadodara-based. NRI clients typically join by video or share a CAS for review. The firm does not claim overseas or multi-city offices.",
  },
  {
    question: "Do you provide tax or FEMA legal advice for NRIs?",
    answer:
      "No. Tax, banking, and FEMA compliance should be confirmed with a qualified tax professional and your bank. PrimeIdea flags practical investment implications; it does not replace specialised legal or tax advice.",
    plainText:
      "No. Tax, banking, and FEMA compliance should be confirmed with a qualified tax professional and your bank. PrimeIdea flags practical investment implications; it does not replace specialised legal or tax advice.",
  },
  {
    question: "Is this SEBI Registered Investment Adviser advice?",
    answer:
      "No. PrimeIdea operates under SEBI Registered Research Analyst registration. It does not present itself as a SEBI Registered Investment Adviser unless separately registered.",
    plainText:
      "No. PrimeIdea operates under SEBI Registered Research Analyst registration. It does not present itself as a SEBI Registered Investment Adviser unless separately registered.",
  },
  {
    question: "Can NRIs get succession planning support for India assets?",
    answer:
      "Yes. Partner-enabled succession and estate documentation coordination is available for India assets. Partner names and pricing are not listed on this website. Legal work is handled by qualified legal professionals.",
    plainText:
      "Yes. Partner-enabled succession and estate documentation coordination is available for India assets. Partner names and pricing are not listed on this website. Legal work is handled by qualified legal professionals.",
  },
  {
    question: "How do I start from abroad?",
    answer:
      "Upload a mutual fund CAS or holdings list, or book a video portfolio review. Share your NRI status context, goals, and any near-term remittance or family need in India.",
    plainText:
      "Upload a mutual fund CAS or holdings list, or book a video portfolio review. Share your NRI status context, goals, and any near-term remittance or family need in India.",
  },
];

export const metadata = {
  title: "NRI Investment Support in India",
  description:
    "PrimeIdea Ventures helps NRIs with research-led India investment support from a Vadodara base, serving investors across Gujarat and India through a process guided by Partha Shah, SEBI Registered Research Analyst INH000017815. Video review available. No guaranteed returns. Not tax or FEMA legal advice.",
  keywords:
    "NRI investment support India, NRI portfolio review Gujarat, NRI mutual fund review Vadodara, Partha Shah SEBI RA INH000017815, PrimeIdea Ventures",
  author: "Partha Shah",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: PAGE_URL,
    site_name: "PrimeIdea Ventures",
    title: "NRI Investment Support in India | PrimeIdea Ventures",
    description:
      "Research-led India portfolio review for NRIs from Vadodara, guided by Partha Shah, SEBI Registered Research Analyst INH000017815. Video review available.",
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
  name: "NRI Investment Support in India",
  description:
    "Research-led India investment and portfolio review support for NRIs, based in Vadodara and serving Gujarat and India, guided by Partha Shah, SEBI Registered Research Analyst INH000017815.",
  provider: {
    "@type": "FinancialService",
    name: "PrimeIdea Ventures",
    url: "https://primeidea.in",
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
  { name: "NRI Investment Support", url: PAGE_PATH },
]);
const faqSchema = buildFaqJsonLd(faqs);

export default function NriInvestmentSupportPage() {
  return (
    <div className="bg-[#F6FDFF]">
      <ScopePageJsonLd data={[serviceSchema, breadcrumbSchema, faqSchema]} />

      <BannerSection
        mainBannerImage="/images/home/banner.png"
        bannerRightImg="/images/home/banner-right.png"
        mainTitle="NRI Investment Support in India"
        mainSubTitle="Research-led review of India holdings for NRIs — from a Vadodara office serving investors across Gujarat and India by video. Guided by Partha Shah, SEBI Registered Research Analyst INH000017815. No guaranteed returns. Not tax or FEMA legal advice."
        mainLinkTitle="Book Video Review"
        mainLink="/portfolio-review"
        usePrimaryAsLink={true}
        formTitle="Book Portfolio Review"
        secondaryLinkTitle="View Research Process"
        secondaryLink="/research-process"
      />

      <ScopePageMetaStrip
        stats={[
          { label: "Base Location", value: "Vadodara", Icon: MapPinIcon },
          { label: "Reach", value: "India / NRI", Icon: GlobeAsiaAustraliaIcon },
          { label: "Registration No.", value: "INH000017815", Icon: CheckBadgeIcon },
        ]}
        disclaimer="Investments in the securities market are subject to market risks. PrimeIdea Ventures does not guarantee returns, does not provide FEMA or cross-border tax legal advice, and does not present itself as a SEBI Registered Investment Adviser unless separately registered."
      />

      <ScopeBreadcrumbs items={[{ label: "NRI Investment Support" }]} />

      <NriInvestmentSupportContent />

      <ScopeSuccessionCrossLink context="NRI family assets and India estate documentation" />

      <ScopeFaqsSection
        title="NRI investment support — Frequently Asked Questions"
        description="How India portfolios are reviewed for NRIs from Vadodara, and how to start by video or CAS upload."
        faqs={faqs}
      />

      <ScopeDisclaimerBar ctaHref="/portfolio-review" ctaLabel="Book Video Portfolio Review">
        Investments in the securities market are subject to market risks. PrimeIdea Ventures does
        not guarantee returns. Tax, banking, and FEMA matters should be confirmed with qualified
        professionals. Partha Shah is a SEBI Registered Research Analyst (INH000017815). PrimeIdea
        does not act as a SEBI Registered Investment Adviser unless separately registered.
        Investors should verify registration independently.
      </ScopeDisclaimerBar>

      <Footer />
    </div>
  );
}
