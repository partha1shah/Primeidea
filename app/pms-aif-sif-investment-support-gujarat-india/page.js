import BannerSection from "@/components/bannerSection";
import Footer from "@/components/footer";
import PmsAifSifContent from "@/components/pmsAifSif/pmsAifSifContent";
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

const PAGE_PATH = "/pms-aif-sif-investment-support-gujarat-india";
const PAGE_URL = `https://primeidea.in${PAGE_PATH}`;

const faqs = [
  {
    question: "What is PMS, AIF & SIF investment support at PrimeIdea?",
    answer:
      "It is research-led suitability support for Portfolio Management Services, Alternative Investment Funds, and Specialized Investment Funds — costs, liquidity, concentration, and fit — guided by Partha Shah, SEBI Registered Research Analyst INH000017815. It is not a product push and does not guarantee returns.",
    plainText:
      "It is research-led suitability support for Portfolio Management Services, Alternative Investment Funds, and Specialized Investment Funds — costs, liquidity, concentration, and fit — guided by Partha Shah, SEBI Registered Research Analyst INH000017815. It is not a product push and does not guarantee returns.",
  },
  {
    question: "Does PrimeIdea offer PMS, AIF, or SIF to every client?",
    answer:
      "No. These products are discussed only where they may be suitable and where distribution and compliance rights exist. Many reviews stay with mutual funds, equity, and fixed income.",
    plainText:
      "No. These products are discussed only where they may be suitable and where distribution and compliance rights exist. Many reviews stay with mutual funds, equity, and fixed income.",
  },
  {
    question: "Do PMS, AIF, or SIF guarantee returns?",
    answer:
      "No. Investments in the securities market are subject to market risks. Read all offer documents carefully. PrimeIdea does not guarantee returns or market-beating performance.",
    plainText:
      "No. Investments in the securities market are subject to market risks. Read all offer documents carefully. PrimeIdea does not guarantee returns or market-beating performance.",
  },
  {
    question: "Is this SEBI Registered Investment Adviser advice?",
    answer:
      "No. PrimeIdea operates under SEBI Registered Research Analyst registration. It does not present itself as a SEBI Registered Investment Adviser unless separately registered.",
    plainText:
      "No. PrimeIdea operates under SEBI Registered Research Analyst registration. It does not present itself as a SEBI Registered Investment Adviser unless separately registered.",
  },
  {
    question: "Who is this support for?",
    answer:
      "Typically HNI and family investors across Gujarat and India who want clarity on managed and alternate strategies before committing capital. Minimums and eligibility rules apply to the products themselves.",
    plainText:
      "Typically HNI and family investors across Gujarat and India who want clarity on managed and alternate strategies before committing capital. Minimums and eligibility rules apply to the products themselves.",
  },
  {
    question: "Can I get this review if I do not live in Vadodara?",
    answer:
      "Yes. The office is in Vadodara. Investors across Gujarat and India can join a video review. Naming other cities does not mean PrimeIdea has offices there.",
    plainText:
      "Yes. The office is in Vadodara. Investors across Gujarat and India can join a video review. Naming other cities does not mean PrimeIdea has offices there.",
  },
  {
    question: "How do I start?",
    answer:
      "Book a portfolio or private wealth review, or upload holdings. Share goals, liquidity needs, and any existing PMS, AIF, or SIF exposure.",
    plainText:
      "Book a portfolio or private wealth review, or upload holdings. Share goals, liquidity needs, and any existing PMS, AIF, or SIF exposure.",
  },
];

export const metadata = {
  title: "PMS, AIF & SIF Investment Support in Gujarat and India",
  description:
    "PrimeIdea Ventures helps investors across Gujarat and India with research-led PMS, AIF, and SIF investment support through a process guided by Partha Shah, SEBI Registered Research Analyst INH000017815. Suitability first. Market risks apply. No guaranteed returns.",
  keywords:
    "PMS investment support Gujarat, AIF suitability India, SIF investment support, Portfolio Management Services Vadodara, Partha Shah SEBI RA INH000017815, PrimeIdea Ventures",
  author: "Partha Shah",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: PAGE_URL,
    site_name: "PrimeIdea Ventures",
    title:
      "PMS, AIF & SIF Investment Support in Gujarat and India | PrimeIdea Ventures",
    description:
      "Research-led PMS, AIF, and SIF suitability support across Gujarat and India, guided by Partha Shah, SEBI Registered Research Analyst INH000017815. No guaranteed returns.",
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
  name: "PMS, AIF & SIF Investment Support in Gujarat and India",
  description:
    "Research-led PMS, AIF, and SIF suitability support for investors across Gujarat and India, guided by Partha Shah, SEBI Registered Research Analyst INH000017815.",
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
  areaServed: ["Gujarat", "India"],
  url: PAGE_URL,
};

const breadcrumbSchema = buildBreadcrumbJsonLd([
  { name: "PMS, AIF & SIF Investment Support", url: PAGE_PATH },
]);
const faqSchema = buildFaqJsonLd(faqs);

export default function PmsAifSifInvestmentSupportPage() {
  return (
    <div className="bg-[#F6FDFF]">
      <ScopePageJsonLd data={[serviceSchema, breadcrumbSchema, faqSchema]} />

      <BannerSection
        mainBannerImage="/images/home/banner.png"
        bannerRightImg="/images/home/banner-right.png"
        mainTitle="PMS, AIF & SIF Investment Support in Gujarat and India"
        mainSubTitle="Research-led suitability support for Portfolio Management Services, Alternative Investment Funds, and Specialized Investment Funds — from a Vadodara base, across Gujarat and India. Guided by Partha Shah, SEBI Registered Research Analyst INH000017815. Discussed only where suitable and where distribution rights exist. No guaranteed returns."
        mainLinkTitle="Book Suitability Review"
        mainLink="/book-portfolio-review?service=PMS%20%2F%20AIF%20%2F%20SIF%20Suitability%20Review"
        usePrimaryAsLink={true}
        formTitle="Book Portfolio Review"
        secondaryLinkTitle="Research Reports"
        secondaryLink="/research-reports"
      />

      <ScopePageMetaStrip
        stats={[
          { label: "Reach", value: "Gujarat & India", Icon: GlobeAltIcon },
          { label: "Focus", value: "Suitability first", Icon: ScaleIcon },
          { label: "Registration No.", value: "INH000017815", Icon: CheckBadgeIcon },
        ]}
        disclaimer="PMS, AIF, and SIF products carry market, liquidity, and concentration risks. Availability depends on eligibility, empanelment, and compliance. PrimeIdea Ventures does not guarantee returns and does not present itself as a SEBI Registered Investment Adviser unless separately registered. Many reviews stay with mutual funds, equity, and fixed income."
      />

      <ScopeBreadcrumbs items={[{ label: "PMS, AIF & SIF Investment Support" }]} />

      <PmsAifSifContent />

      <ScopeFaqsSection
        title="PMS, AIF & SIF — Frequently Asked Questions"
        description="How managed and alternate strategies are reviewed across Gujarat and India, and when they may not be suitable."
        faqs={faqs}
      />

      <ScopeDisclaimerBar
        ctaHref="/book-portfolio-review?service=PMS%20%2F%20AIF%20%2F%20SIF%20Suitability%20Review"
        ctaLabel="Book Suitability Review"
      >
        Investments in the securities market are subject to market risks. PMS, AIF, and SIF
        products can lose value and may have limited liquidity. Read all offer documents
        carefully. PrimeIdea Ventures does not guarantee returns. Partha Shah is a SEBI
        Registered Research Analyst (INH000017815). PrimeIdea does not act as a SEBI Registered
        Investment Adviser unless separately registered. Distribution support is provided only
        where empanelment and compliance rights exist. Investors should verify registration
        independently.
      </ScopeDisclaimerBar>

      <Footer />
    </div>
  );
}
