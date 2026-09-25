import BannerSection from "@/components/bannerSection";
import Footer from "@/components/footer";
import RegulatoryContentSections from "@/components/regulatory/regulatoryContentSections";
import ScopeBreadcrumbs from "@/components/scope/ScopeBreadcrumbs";
import ScopeDisclaimerBar from "@/components/scope/ScopeDisclaimerBar";
import ScopeFaqsSection from "@/components/scope/ScopeFaqsSection";
import ScopePageMetaStrip from "@/components/scope/ScopePageMetaStrip";
import ScopePageJsonLd, {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
} from "@/components/scope/ScopePageJsonLd";

const PAGE_PATH = "/regulatory-disclosures";
const PAGE_URL = `https://primeidea.in${PAGE_PATH}`;

const faqs = [
  {
    question: "Where can I verify PrimeIdea’s SEBI registration?",
    answer:
      "Partha Shah is a SEBI Registered Research Analyst with registration number INH000017815. Investors should verify this independently on the official SEBI website.",
    plainText:
      "Partha Shah is a SEBI Registered Research Analyst with registration number INH000017815. Investors should verify this independently on the official SEBI website.",
  },
  {
    question: "Does PrimeIdea guarantee returns?",
    answer:
      "No. Investments in securities market are subject to market risks. PrimeIdea Ventures does not guarantee returns, market-beating performance, or risk-free outcomes.",
    plainText:
      "No. Investments in securities market are subject to market risks. PrimeIdea Ventures does not guarantee returns, market-beating performance, or risk-free outcomes.",
  },
  {
    question: "Is PrimeIdea a SEBI Registered Investment Adviser?",
    answer:
      "PrimeIdea operates under SEBI Registered Research Analyst registration. It does not present itself as a SEBI Registered Investment Adviser unless separately registered.",
    plainText:
      "PrimeIdea operates under SEBI Registered Research Analyst registration. It does not present itself as a SEBI Registered Investment Adviser unless separately registered.",
  },
  {
    question: "How do I raise a complaint or grievance?",
    answer:
      "Contact PrimeIdea through the contact form or phone listed on this page. If the concern remains unresolved, you may use the SEBI SCORES portal at scores.sebi.gov.in.",
    plainText:
      "Contact PrimeIdea through the contact form or phone listed on this page. If the concern remains unresolved, you may use the SEBI SCORES portal at scores.sebi.gov.in.",
  },
  {
    question: "Where is the Investor Charter?",
    answer:
      "The Investor Charter on this page explains investor rights, how PrimeIdea works, expected timelines, and grievance options. You can also download the charter as a PDF from the same section.",
    plainText:
      "The Investor Charter on this page explains investor rights, how PrimeIdea works, expected timelines, and grievance options. You can also download the charter as a PDF from the same section.",
  },
  {
    question: "How can I check the status of my complaint?",
    answer:
      "Write to PrimeIdea through the contact form or phone and quote the acknowledgement reference. We will confirm whether your complaint is under review, pending information, or closed. If you remain dissatisfied, you may use SEBI SCORES.",
    plainText:
      "Write to PrimeIdea through the contact form or phone and quote the acknowledgement reference. We will confirm whether your complaint is under review, pending information, or closed. If you remain dissatisfied, you may use SEBI SCORES.",
  },
];

export const metadata = {
  title: "Regulatory Disclosures",
  description:
    "PrimeIdea Ventures helps investors review SEBI RA registration, Investor Charter, complaint status, grievance redressal, and SCORES through a research-led process guided by Partha Shah, SEBI Registered Research Analyst INH000017815.",
  keywords:
    "PrimeIdea regulatory disclosures, SEBI RA INH000017815, Investor Charter, SEBI SCORES, grievance redressal, complaint status",
  author: "Partha Shah",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: PAGE_URL,
    site_name: "PrimeIdea Ventures",
    title: "Regulatory Disclosures | PrimeIdea Ventures",
    description:
      "PrimeIdea Ventures helps investors review SEBI RA registration, Investor Charter, complaint status, grievance redressal, and SCORES through a research-led process guided by Partha Shah, SEBI Registered Research Analyst INH000017815.",
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
  "@type": "WebPage",
  name: "Regulatory Disclosures",
  description:
    "SEBI RA registration, Investor Charter, complaint status, grievance redressal, and SCORES for PrimeIdea Ventures.",
  url: PAGE_URL,
  about: {
    "@type": "Person",
    name: "Partha Shah",
    identifier: "INH000017815",
    jobTitle: "SEBI Registered Research Analyst",
  },
};

const breadcrumbSchema = buildBreadcrumbJsonLd([
  { name: "Regulatory Disclosures", url: PAGE_PATH },
]);

const faqSchema = buildFaqJsonLd(faqs);

export default function RegulatoryDisclosuresPage() {
  return (
    <div className="bg-[#F6FDFF]">
      <ScopePageJsonLd data={[serviceSchema, breadcrumbSchema, faqSchema]} />

      <BannerSection
        mainBannerImage="/images/home/banner.png"
        bannerRightImg="/images/home/banner-right.png"
        mainTitle="Regulatory Disclosures"
        mainSubTitle="PrimeIdea Ventures is a Vadodara-based research-led wealth management and portfolio review firm serving investors across Gujarat and India. This page publishes SEBI RA details, Investor Charter, complaint status, grievance process, and SCORES access."
        mainLinkTitle="Contact Compliance"
        mainLink="/contact-us"
        usePrimaryAsLink={true}
        formTitle="Contact Compliance"
        secondaryLinkTitle="SEBI RA Page"
        secondaryLink="/sebi-registered-research-analyst"
      />

      <ScopePageMetaStrip
        disclaimer="Investors should verify SEBI registration independently. Investments in securities market are subject to market risks. PrimeIdea Ventures does not guarantee returns and does not present itself as a SEBI Registered Investment Adviser unless separately registered."
      />

      <ScopeBreadcrumbs items={[{ label: "Regulatory Disclosures" }]} />

      <RegulatoryContentSections />

      <ScopeFaqsSection
        title="Disclosures — Frequently Asked Questions"
        description="Registration, Investor Charter, complaints, and SEBI SCORES."
        faqs={faqs}
      />

      <ScopeDisclaimerBar ctaHref="/sebi-registered-research-analyst" ctaLabel="View SEBI RA page">
        Investments in securities market are subject to market risks. PrimeIdea Ventures does
        not guarantee returns. Partha Shah is a SEBI Registered Research Analyst
        (INH000017815). PrimeIdea does not act as a SEBI Registered Investment Adviser unless
        separately registered. Investors should verify registration independently and read
        all scheme-related documents carefully before investing.
      </ScopeDisclaimerBar>

      <Footer />
    </div>
  );
}
