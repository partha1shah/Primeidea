import BannerSection from "@/components/bannerSection";
import Footer from "@/components/footer";
import RiskAssessmentContent from "@/components/riskAssessment/riskAssessmentContent";
import ScopeBreadcrumbs from "@/components/scope/ScopeBreadcrumbs";
import ScopeDisclaimerBar from "@/components/scope/ScopeDisclaimerBar";
import ScopeFaqsSection from "@/components/scope/ScopeFaqsSection";
import ScopePageMetaStrip from "@/components/scope/ScopePageMetaStrip";
import ScopePageJsonLd, {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
} from "@/components/scope/ScopePageJsonLd";
import {
  ClipboardDocumentCheckIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const PAGE_PATH = "/risk-assessment";
const PAGE_URL = `https://www.primeidea.in${PAGE_PATH}`;

const faqs = [
  {
    question: "What is the PrimeIdea Risk Assessment?",
    answer:
      "It is a short, structured questionnaire that helps understand how you respond to investment volatility, how long you can stay invested, and how familiar you are with financial markets. It produces an indicative score from 2 to 10.",
    plainText:
      "It is a short, structured questionnaire that helps understand how you respond to investment volatility, how long you can stay invested, and how familiar you are with financial markets. It produces an indicative score from 2 to 10.",
  },
  {
    question: "Does this assessment recommend products or guarantee returns?",
    answer:
      "No. It is a starting point for a suitability conversation. It does not predict returns and does not by itself determine which investment product is suitable. Investments in the securities market are subject to market risks.",
    plainText:
      "No. It is a starting point for a suitability conversation. It does not predict returns and does not by itself determine which investment product is suitable. Investments in the securities market are subject to market risks.",
  },
  {
    question: "Are all questions mandatory?",
    answer:
      "Client details (name, mobile, email) are required. The five risk questions are optional. If you skip some, a provisional profile is shown based only on the questions you answer.",
    plainText:
      "Client details (name, mobile, email) are required. The five risk questions are optional. If you skip some, a provisional profile is shown based only on the questions you answer.",
  },
  {
    question: "Can I download or share my result?",
    answer:
      "Yes. You can download a JSON response, or use Prepare Email to download the JSON file and open a draft to research@primeidea.in with your details and clear instructions to attach that downloaded JSON file before sending.",
    plainText:
      "Yes. You can download a JSON response, or use Prepare Email to download the JSON file and open a draft to research@primeidea.in with your details and clear instructions to attach that downloaded JSON file before sending.",
  },
  {
    question: "What should I do after the assessment?",
    answer:
      "Use the indicative profile as a discussion input, then book a research-led portfolio review so holdings, goals, liquidity, and time horizon can be reviewed together.",
    plainText:
      "Use the indicative profile as a discussion input, then book a research-led portfolio review so holdings, goals, liquidity, and time horizon can be reviewed together.",
  },
];

export const metadata = {
  title: "Risk Assessment",
  description:
    "PrimeIdea Ventures Risk Assessment — a short suitability questionnaire on volatility comfort, investment horizon, and market familiarity. Indicative score only. No guaranteed returns.",
  keywords:
    "risk assessment, investor risk profile, risk questionnaire India, PrimeIdea Ventures, suitability profiling",
  author: "Partha Shah",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: PAGE_URL,
    site_name: "PrimeIdea Ventures",
    title: "Risk Assessment | PrimeIdea Ventures",
    description:
      "Understand your risk comfort with a structured assessment. Indicative profile for discussion — not investment advice.",
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

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Risk Assessment",
  description:
    "Indicative investor risk assessment from PrimeIdea Ventures. Not investment advice. Market risks apply.",
  url: PAGE_URL,
  isPartOf: {
    "@type": "WebSite",
    name: "PrimeIdea Ventures",
    url: "https://www.primeidea.in",
  },
  about: {
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
};

const breadcrumbSchema = buildBreadcrumbJsonLd([
  { name: "Risk Assessment", url: PAGE_PATH },
]);
const faqSchema = buildFaqJsonLd(faqs);

export default function RiskAssessmentPage() {
  return (
    <div className="bg-[#F6FDFF]">
      <ScopePageJsonLd data={[webPageSchema, breadcrumbSchema, faqSchema]} />

      <BannerSection
        mainBannerImage="/images/home/banner.png"
        bannerRightImg="/images/home/banner-right.png"
        mainTitle="Risk Assessment"
        mainSubTitle="Understand your risk comfort. A short, structured assessment of how you respond to investment volatility, how long you can stay invested, and how familiar you are with financial markets."
        mainLinkTitle="Start Assessment"
        mainLink="#risk-assessment-form"
        usePrimaryAsLink={true}
        formTitle="Book Portfolio Review"
      />

      <ScopePageMetaStrip
        stats={[
          {
            label: "Purpose",
            value: "Suitability conversation",
            Icon: ShieldCheckIcon,
          },
          {
            label: "Output",
            value: "Indicative score 2–10",
            Icon: ClipboardDocumentCheckIcon,
          },
        ]}
        disclaimer="This assessment is an indicative starting point for discussion. It does not predict returns or determine product suitability by itself. Investments in the securities market are subject to market risks."
      />

      <ScopeBreadcrumbs items={[{ label: "Risk Assessment" }]} />

      <RiskAssessmentContent />

      <ScopeFaqsSection
        title="Risk assessment — Frequently Asked Questions"
        description="What the assessment covers, what it does not promise, and how to continue."
        faqs={faqs}
      />

      <ScopeDisclaimerBar ctaHref="/portfolio-review" ctaLabel="Book Portfolio Review">
        This risk assessment is indicative and for discussion only. Investments in the
        securities market are subject to market risks. PrimeIdea Ventures does not guarantee
        returns. Investors should verify registration independently and read all
        scheme-related documents carefully before investing.
      </ScopeDisclaimerBar>

      <Footer />
    </div>
  );
}
