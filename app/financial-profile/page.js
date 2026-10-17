import BannerSection from "@/components/bannerSection";
import Footer from "@/components/footer";
import FinancialProfileContent from "@/components/financialProfile/financialProfileContent";
import ScopeBreadcrumbs from "@/components/scope/ScopeBreadcrumbs";
import ScopeDisclaimerBar from "@/components/scope/ScopeDisclaimerBar";
import ScopeFaqsSection from "@/components/scope/ScopeFaqsSection";
import ScopePageMetaStrip from "@/components/scope/ScopePageMetaStrip";
import ScopePageJsonLd, {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
} from "@/components/scope/ScopePageJsonLd";
import {
  ClipboardDocumentListIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

const PAGE_PATH = "/financial-profile";
const PAGE_URL = `https://www.primeidea.in${PAGE_PATH}`;

const faqs = [
  {
    question: "What is the PrimeIdea Financial Profile?",
    answer:
      "It is a structured questionnaire covering goals, risk comfort, existing investments, liquidity needs, liabilities, and succession priorities. It helps prepare a more relevant suitability conversation.",
    plainText:
      "It is a structured questionnaire covering goals, risk comfort, existing investments, liquidity needs, liabilities, and succession priorities. It helps prepare a more relevant suitability conversation.",
  },
  {
    question: "Does completing this profile guarantee returns or recommend products?",
    answer:
      "No. The questionnaire is for profiling and discussion only. It is not an offer, solicitation, or guarantee of returns. Investments in the securities market are subject to market risks.",
    plainText:
      "No. The questionnaire is for profiling and discussion only. It is not an offer, solicitation, or guarantee of returns. Investments in the securities market are subject to market risks.",
  },
  {
    question: "Which answers are required?",
    answer:
      "Full name, mobile, email, and city are required on the first step to download or email your response. Other sections can be skipped or left approximate.",
    plainText:
      "Full name, mobile, email, and city are required on the first step to download or email your response. Other sections can be skipped or left approximate.",
  },
  {
    question: "Can I save and continue later?",
    answer:
      "Yes. A draft is saved on this device until you download, clear the form, or clear browser storage.",
    plainText:
      "Yes. A draft is saved on this device until you download, clear the form, or clear browser storage.",
  },
  {
    question: "How do I share my completed profile?",
    answer:
      "Use Download Response for a JSON file, or Prepare Email to download the JSON and open a draft to research@primeidea.in with your details and clear instructions to attach that downloaded JSON file before sending.",
    plainText:
      "Use Download Response for a JSON file, or Prepare Email to download the JSON and open a draft to research@primeidea.in with your details and clear instructions to attach that downloaded JSON file before sending.",
  },
];

export const metadata = {
  title: "Financial Profile",
  description:
    "PrimeIdea Ventures Financial Profile — a structured questionnaire on goals, risk comfort, investments, liquidity, liabilities, and succession priorities. For discussion only. No guaranteed returns.",
  keywords:
    "financial profile, investor questionnaire, financial planning profile India, PrimeIdea Ventures, suitability profiling",
  author: "Partha Shah",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: PAGE_URL,
    site_name: "PrimeIdea Ventures",
    title: "Financial Profile | PrimeIdea Ventures",
    description:
      "Build a structured financial profile for a more relevant suitability conversation. Not investment advice.",
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
  name: "Financial Profile",
  description:
    "Structured financial profiling questionnaire from PrimeIdea Ventures. Not investment advice. Market risks apply.",
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
  { name: "Financial Profile", url: PAGE_PATH },
]);
const faqSchema = buildFaqJsonLd(faqs);

export default function FinancialProfilePage() {
  return (
    <div className="bg-[#F6FDFF]">
      <ScopePageJsonLd data={[webPageSchema, breadcrumbSchema, faqSchema]} />

      <BannerSection
        mainBannerImage="/images/home/banner.png"
        bannerRightImg="/images/home/banner-right.png"
        mainTitle="Financial Profile"
        mainSubTitle="Build your Financial Profile. A structured questionnaire to help us understand your goals, risk comfort, existing investments, liquidity needs, and succession priorities."
        mainLinkTitle="Start Financial Profile"
        mainLink="#financial-profile-form"
        usePrimaryAsLink={true}
        formTitle="Book Portfolio Review"
      />

      <ScopePageMetaStrip
        stats={[
          {
            label: "Sections",
            value: "11 short steps",
            Icon: ClipboardDocumentListIcon,
          },
          {
            label: "Purpose",
            value: "Suitability conversation",
            Icon: UserCircleIcon,
          },
        ]}
        disclaimer="This questionnaire is for profiling and discussion purposes. It is not an offer, solicitation, or guarantee of returns. Investments in the securities market are subject to market risks."
      />

      <ScopeBreadcrumbs items={[{ label: "Financial Profile" }]} />

      <FinancialProfileContent />

      <ScopeFaqsSection
        title="Financial profile — Frequently Asked Questions"
        description="What the questionnaire covers, what is required, and how to share your response."
        faqs={faqs}
      />

      <ScopeDisclaimerBar ctaHref="/portfolio-review" ctaLabel="Book Portfolio Review">
        This financial profile is for discussion only. Investments in the securities market
        are subject to market risks. PrimeIdea Ventures does not guarantee returns.
        Investors should verify registration independently and read all scheme-related
        documents carefully before investing.
      </ScopeDisclaimerBar>

      <Footer />
    </div>
  );
}
