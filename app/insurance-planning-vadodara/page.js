import BannerSection from "@/components/bannerSection";
import Footer from "@/components/footer";
import InsuranceReviewForm from "@/components/forms/InsuranceReviewForm";
import InsurancePlanningContent from "@/components/insurancePlanning/insurancePlanningContent";
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
  MapPinIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const PAGE_PATH = "/insurance-planning-vadodara";
const PAGE_URL = `https://primeidea.in${PAGE_PATH}`;

const faqs = [
  {
    question: "What is insurance planning support at PrimeIdea in Vadodara?",
    answer:
      "It is research-led review of life and health cover gaps, policy mix, premiums versus need, and nominations — guided by Partha Shah, SEBI Registered Research Analyst INH000017815. It is not product push and does not guarantee claim outcomes.",
    plainText:
      "It is research-led review of life and health cover gaps, policy mix, premiums versus need, and nominations — guided by Partha Shah, SEBI Registered Research Analyst INH000017815. It is not product push and does not guarantee claim outcomes.",
  },
  {
    question: "Is PrimeIdea an insurance company?",
    answer:
      "No. PrimeIdea provides planning and review support. Policy issuance, underwriting, and claims are handled by the insurer and any applicable IRDAI-registered intermediary.",
    plainText:
      "No. PrimeIdea provides planning and review support. Policy issuance, underwriting, and claims are handled by the insurer and any applicable IRDAI-registered intermediary.",
  },
  {
    question: "Does PrimeIdea recommend the best insurance policy?",
    answer:
      "No. PrimeIdea does not use “best insurance” claims. Cover is reviewed for suitability against family need, existing policies, and cost — subject to each insurer’s terms.",
    plainText:
      "No. PrimeIdea does not use “best insurance” claims. Cover is reviewed for suitability against family need, existing policies, and cost — subject to each insurer’s terms.",
  },
  {
    question: "Is this SEBI Registered Investment Adviser advice?",
    answer:
      "No. PrimeIdea operates under SEBI Registered Research Analyst registration. It does not present itself as a SEBI Registered Investment Adviser unless separately registered.",
    plainText:
      "No. PrimeIdea operates under SEBI Registered Research Analyst registration. It does not present itself as a SEBI Registered Investment Adviser unless separately registered.",
  },
  {
    question: "How does insurance planning connect to succession?",
    answer:
      "Nominations and beneficiary clarity affect claim and estate outcomes. Wills and related documents can be coordinated through partner-enabled succession support — without listing partner names or pricing on this website.",
    plainText:
      "Nominations and beneficiary clarity affect claim and estate outcomes. Wills and related documents can be coordinated through partner-enabled succession support — without listing partner names or pricing on this website.",
  },
  {
    question: "How do I start?",
    answer:
      "Book a portfolio review or share a short summary of existing life and health policies, sum insured, premiums, and nominees. Office visits are in Vadodara; video review is available across Gujarat and India.",
    plainText:
      "Book a portfolio review or share a short summary of existing life and health policies, sum insured, premiums, and nominees. Office visits are in Vadodara; video review is available across Gujarat and India.",
  },
];

export const metadata = {
  title: "Insurance Planning in Vadodara",
  description:
    "PrimeIdea Ventures helps investors in Vadodara and across Gujarat and India with research-led insurance planning through a process guided by Partha Shah, SEBI Registered Research Analyst INH000017815. Cover review without product push. Policy terms apply. No guaranteed claim outcomes.",
  keywords:
    "insurance planning Vadodara, term insurance review Vadodara, health cover gap analysis Gujarat, Partha Shah SEBI RA INH000017815, PrimeIdea Ventures",
  author: "Partha Shah",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: PAGE_URL,
    site_name: "PrimeIdea Ventures",
    title: "Insurance Planning in Vadodara | PrimeIdea Ventures",
    description:
      "Research-led insurance cover review in Vadodara, guided by Partha Shah, SEBI Registered Research Analyst INH000017815. Not product push. Policy terms apply.",
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
  name: "Insurance Planning in Vadodara",
  description:
    "Research-led life and health insurance cover review in Vadodara, guided by Partha Shah, SEBI Registered Research Analyst INH000017815.",
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
  areaServed: ["Vadodara", "Gujarat", "India"],
  url: PAGE_URL,
};

const breadcrumbSchema = buildBreadcrumbJsonLd([
  { name: "Insurance Planning", url: PAGE_PATH },
]);
const faqSchema = buildFaqJsonLd(faqs);

export default function InsurancePlanningVadodaraPage() {
  return (
    <div className="bg-[#F6FDFF]">
      <ScopePageJsonLd data={[serviceSchema, breadcrumbSchema, faqSchema]} />

      <BannerSection
        mainBannerImage="/images/home/banner.png"
        bannerRightImg="/images/home/banner-right.png"
        mainTitle="Insurance Planning in Vadodara"
        mainSubTitle="Research-led life and health cover review from a Vadodara office, serving investors across Gujarat and India. Guided by Partha Shah, SEBI Registered Research Analyst INH000017815. Cover first — not product push. Policy terms apply. No guaranteed claim outcomes."
        mainLinkTitle="Start Insurance Review"
        mainLink="#lead-form"
        usePrimaryAsLink={true}
        formTitle="Insurance Review"
        secondaryLinkTitle="Book Portfolio Review"
        secondaryLink="/portfolio-review-vadodara"
      />

      <ScopePageMetaStrip
        stats={[
          { label: "Base Location", value: "Vadodara", Icon: MapPinIcon },
          { label: "Focus", value: "Cover gaps", Icon: ShieldCheckIcon },
          { label: "Registration No.", value: "INH000017815", Icon: CheckBadgeIcon },
        ]}
        disclaimer="Insurance products are subject to insurer terms, conditions, and exclusions. PrimeIdea Ventures does not guarantee claim outcomes or investment-linked returns inside insurance products, and does not present itself as a SEBI Registered Investment Adviser unless separately registered."
      />

      <ScopeBreadcrumbs items={[{ label: "Insurance Planning" }]} />

      <InsurancePlanningContent />

      <InsuranceReviewForm />

      <ScopeSuccessionCrossLink context="insurance and nomination planning" />

      <ScopeFaqsSection
        title="Insurance planning — Frequently Asked Questions"
        description="How cover gaps are reviewed in Vadodara, and how insurance planning links to retirement and succession."
        faqs={faqs}
      />

      <ScopeDisclaimerBar ctaHref="/portfolio-review-vadodara" ctaLabel="Book Portfolio Review">
        Insurance products are subject to the terms, conditions, exclusions, and claim processes of
        the issuing insurer. PrimeIdea Ventures does not guarantee claim outcomes. Partha Shah is a
        SEBI Registered Research Analyst (INH000017815). PrimeIdea does not act as a SEBI Registered
        Investment Adviser unless separately registered. Investors should verify registration
        independently and read all policy documents carefully.
      </ScopeDisclaimerBar>

      <Footer />
    </div>
  );
}
