import BannerSection from "@/components/bannerSection";
import Footer from "@/components/footer";
import MutualFundSupportContent from "@/components/mutualFunds/mutualFundSupportContent";
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
  MapPinIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

const PAGE_PATH = "/mutual-fund-investment-support";
const PAGE_URL = `https://www.primeidea.in${PAGE_PATH}`;

const faqs = [
  {
    question: "What is mutual fund investment support at PrimeIdea?",
    answer:
      "It is research-led review of the mutual funds you already hold — overlap, SIP fit, cost, tax, and allocation — guided by Partha Shah, SEBI Registered Research Analyst INH000017815. It is not a product push and does not guarantee returns.",
    plainText:
      "It is research-led review of the mutual funds you already hold — overlap, SIP fit, cost, tax, and allocation — guided by Partha Shah, SEBI Registered Research Analyst INH000017815. It is not a product push and does not guarantee returns.",
  },
  {
    question: "How are mutual fund portfolios reviewed?",
    answer:
      "Holdings are mapped for overlap and concentration. Expense ratios, exit loads, rolling returns, and the role of each scheme in the book are checked before any change is discussed.",
    plainText:
      "Holdings are mapped for overlap and concentration. Expense ratios, exit loads, rolling returns, and the role of each scheme in the book are checked before any change is discussed.",
  },
  {
    question: "Is this SEBI Registered Investment Adviser advice?",
    answer:
      "No. PrimeIdea operates under SEBI Registered Research Analyst registration. It does not present itself as a SEBI Registered Investment Adviser unless separately registered.",
    plainText:
      "No. PrimeIdea operates under SEBI Registered Research Analyst registration. It does not present itself as a SEBI Registered Investment Adviser unless separately registered.",
  },
  {
    question: "Do mutual funds guarantee returns?",
    answer:
      "No. Mutual fund investments are subject to market risks. Read all scheme-related documents carefully. PrimeIdea does not guarantee returns or market-beating performance.",
    plainText:
      "No. Mutual fund investments are subject to market risks. Read all scheme-related documents carefully. PrimeIdea does not guarantee returns or market-beating performance.",
  },
  {
    question: "Can I get this review if I do not live in Vadodara?",
    answer:
      "Yes. The office is in Vadodara. Investors across Gujarat and India can share a CAS or join a video review. PrimeIdea does not claim offices in other cities.",
    plainText:
      "Yes. The office is in Vadodara. Investors across Gujarat and India can share a CAS or join a video review. PrimeIdea does not claim offices in other cities.",
  },
  {
    question: "How do I start?",
    answer:
      "Upload a mutual fund CAS or book a portfolio review. Share your SIPs, goals, and any near-term cash need.",
    plainText:
      "Upload a mutual fund CAS or book a portfolio review. Share your SIPs, goals, and any near-term cash need.",
  },
];

export const metadata = {
  title: "Mutual Fund Investment Support",
  description:
    "PrimeIdea Ventures offers research-led mutual fund investment support for investors across Gujarat and India, guided by Partha Shah, SEBI Registered Research Analyst INH000017815. Mutual fund investments are subject to market risks. Read all scheme-related documents carefully.",
  keywords:
    "mutual fund investment support, SIP review, mutual fund overlap analysis, Partha Shah SEBI RA INH000017815, PrimeIdea Ventures",
  author: "Partha Shah",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: PAGE_URL,
    site_name: "PrimeIdea Ventures",
    title: "Mutual Fund Investment Support | PrimeIdea Ventures",
    description:
      "Research-led mutual fund review, guided by Partha Shah, SEBI Registered Research Analyst INH000017815. Market risks apply.",
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
  name: "Mutual Fund Investment Support",
  description:
    "Research-led mutual fund review and SIP support, guided by Partha Shah, SEBI Registered Research Analyst INH000017815.",
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
  areaServed: ["Vadodara", "Gujarat", "India"],
  url: PAGE_URL,
};

const breadcrumbSchema = buildBreadcrumbJsonLd([
  { name: "Mutual Fund Investment Support", url: PAGE_PATH },
]);
const faqSchema = buildFaqJsonLd(faqs);

export default function MutualFundInvestmentSupportPage() {
  return (
    <div className="bg-[#F6FDFF]">
      <ScopePageJsonLd data={[serviceSchema, breadcrumbSchema, faqSchema]} />

      <BannerSection
        mainBannerImage="/images/home/banner.png"
        bannerRightImg="/images/home/banner-right.png"
        mainTitle="Mutual Fund Investment Support"
        mainSubTitle="Research-led SIP and scheme review from a Vadodara office, serving investors across Gujarat and India. Guided by Partha Shah, SEBI Registered Research Analyst INH000017815. Mutual fund investments are subject to market risks. Read all scheme-related documents carefully. No guaranteed returns."
        mainLinkTitle="Upload Portfolio"
        mainLink="/portfolio-review"
        usePrimaryAsLink={true}
        formTitle="Book Portfolio Review"
        secondaryLinkTitle="View Research Process"
        secondaryLink="/research-process"
      />

      <ScopePageMetaStrip
        stats={[
          { label: "Base Location", value: "Vadodara", Icon: MapPinIcon },
          { label: "Focus", value: "Scheme review", Icon: Squares2X2Icon },
          { label: "Registration No.", value: "INH000017815", Icon: CheckBadgeIcon },
        ]}
        disclaimer="Mutual fund investments are subject to market risks. Read all scheme-related documents carefully. PrimeIdea Ventures does not guarantee returns and does not present itself as a SEBI Registered Investment Adviser unless separately registered."
      />

      <ScopeBreadcrumbs items={[{ label: "Mutual Fund Investment Support" }]} />

      <MutualFundSupportContent />

      <ScopeFaqsSection
        title="Mutual fund support — Frequently Asked Questions"
        description="How schemes are reviewed, and how to start with a CAS or office visit."
        faqs={faqs}
      />

      <ScopeDisclaimerBar ctaHref="/portfolio-review" ctaLabel="Upload Portfolio for Review">
        Mutual fund investments are subject to market risks. Read all scheme-related documents
        carefully. PrimeIdea Ventures does not guarantee returns. Partha Shah is a SEBI
        Registered Research Analyst (INH000017815). PrimeIdea does not act as a SEBI Registered
        Investment Adviser unless separately registered. Investors should verify registration
        independently.
      </ScopeDisclaimerBar>

      <Footer />
    </div>
  );
}
