import BannerSection from "@/components/bannerSection";
import Footer from "@/components/footer";
import DirectEquityContent from "@/components/directEquity/directEquityContent";
import ScopeBreadcrumbs from "@/components/scope/ScopeBreadcrumbs";
import ScopeDisclaimerBar from "@/components/scope/ScopeDisclaimerBar";
import ScopeFaqsSection from "@/components/scope/ScopeFaqsSection";
import ScopePageMetaStrip from "@/components/scope/ScopePageMetaStrip";
import ScopePageJsonLd, {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
} from "@/components/scope/ScopePageJsonLd";
import { CheckBadgeIcon, MapPinIcon, PresentationChartLineIcon } from "@heroicons/react/24/outline";

const PAGE_PATH = "/direct-equity-research-support";
const PAGE_URL = `https://www.primeidea.in${PAGE_PATH}`;

const faqs = [
  {
    question: "What is direct equity research support?",
    answer:
      "It is a research-led review of the shares you already hold — position size, overlap with funds, sector concentration, and risk — guided by Partha Shah, SEBI Registered Research Analyst INH000017815. It is not a stock tip.",
    plainText:
      "It is a research-led review of the shares you already hold — position size, overlap with funds, sector concentration, and risk — guided by Partha Shah, SEBI Registered Research Analyst INH000017815. It is not a stock tip.",
  },
  {
    question: "Does PrimeIdea publish buy and sell calls on this page?",
    answer:
      "No. This page explains how holdings are reviewed. It does not name stocks to buy or sell, and it does not promise returns.",
    plainText:
      "No. This page explains how holdings are reviewed. It does not name stocks to buy or sell, and it does not promise returns.",
  },
  {
    question: "Is this SEBI Registered Investment Adviser advice?",
    answer:
      "No. PrimeIdea operates under SEBI Registered Research Analyst registration. It does not present itself as a SEBI Registered Investment Adviser unless separately registered.",
    plainText:
      "No. PrimeIdea operates under SEBI Registered Research Analyst registration. It does not present itself as a SEBI Registered Investment Adviser unless separately registered.",
  },
  {
    question: "Can stocks and SIPs be reviewed together?",
    answer:
      "Yes. Direct equity and mutual funds are reviewed as one book so the same company is not held twice without a reason.",
    plainText:
      "Yes. Direct equity and mutual funds are reviewed as one book so the same company is not held twice without a reason.",
  },
  {
    question: "Do I need to visit Vadodara?",
    answer:
      "The office is in Vadodara. Investors across Gujarat and India can join the same review on a video call.",
    plainText:
      "The office is in Vadodara. Investors across Gujarat and India can join the same review on a video call.",
  },
  {
    question: "How do I start?",
    answer:
      "Book a portfolio review and share your holdings. Direct equity is reviewed with the rest of the book, not as a separate product pitch.",
    plainText:
      "Book a portfolio review and share your holdings. Direct equity is reviewed with the rest of the book, not as a separate product pitch.",
  },
];

export const metadata = {
  title: "Direct Equity Research Support",
  description:
    "PrimeIdea Ventures offers research-led direct equity review for investors across Gujarat and India, guided by Partha Shah, SEBI Registered Research Analyst INH000017815. No stock tips. No guaranteed returns.",
  keywords:
    "direct equity research support, stock portfolio review Vadodara, Partha Shah SEBI RA INH000017815, PrimeIdea Ventures",
  author: "Partha Shah",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: PAGE_URL,
    site_name: "PrimeIdea Ventures",
    title: "Direct Equity Research Support | PrimeIdea Ventures",
    description:
      "Research-led review of direct equity holdings, guided by Partha Shah, SEBI Registered Research Analyst INH000017815. Market risks apply.",
  },
  twitter: {
    handle: "@primeidea",
    site: "@primeidea",
    cardType: "summary_large_image",
  },
  alternates: {
    canonical: PAGE_URL,
    languages: { "en-US": PAGE_URL },
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Direct Equity Research Support",
  description:
    "Research-led review of direct equity holdings, guided by Partha Shah, SEBI Registered Research Analyst INH000017815.",
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
  { name: "Direct Equity Research Support", url: PAGE_PATH },
]);
const faqSchema = buildFaqJsonLd(faqs);

export default function DirectEquityResearchSupportPage() {
  return (
    <div className="bg-[#F6FDFF]">
      <ScopePageJsonLd data={[serviceSchema, breadcrumbSchema, faqSchema]} />
      <BannerSection
        mainBannerImage="/images/home/banner.png"
        bannerRightImg="/images/home/banner-right.png"
        mainTitle="Direct Equity Research Support"
        mainSubTitle="Research-led review of the shares you already hold, from a Vadodara office, for investors across Gujarat and India. Guided by Partha Shah, SEBI Registered Research Analyst INH000017815. Not a stock tip. No guaranteed returns."
        mainLinkTitle="Book Portfolio Review"
        mainLink="/book-portfolio-review"
        usePrimaryAsLink={true}
        formTitle="Book Portfolio Review"
        secondaryLinkTitle="View Research Process"
        secondaryLink="/research-process"
      />
      <ScopePageMetaStrip
        stats={[
          { label: "Base Location", value: "Vadodara", Icon: MapPinIcon },
          { label: "Focus", value: "Holdings review", Icon: PresentationChartLineIcon },
          { label: "Registration No.", value: "INH000017815", Icon: CheckBadgeIcon },
        ]}
        disclaimer="Investments in the securities market are subject to market risks. PrimeIdea Ventures does not guarantee returns and does not present itself as a SEBI Registered Investment Adviser unless separately registered."
      />
      <ScopeBreadcrumbs items={[{ label: "Direct Equity Research Support" }]} />
      <DirectEquityContent />
      <ScopeFaqsSection
        title="Direct equity — Frequently Asked Questions"
        description="How share holdings are reviewed, and what this page does not do."
        faqs={faqs}
      />
      <ScopeDisclaimerBar ctaHref="/book-portfolio-review" ctaLabel="Book Portfolio Review">
        Investments in the securities market are subject to market risks. PrimeIdea Ventures does
        not guarantee returns. Partha Shah is a SEBI Registered Research Analyst (INH000017815).
        This page is not a stock tip and is not SEBI Registered Investment Adviser advice unless
        separately registered.
      </ScopeDisclaimerBar>
      <Footer />
    </div>
  );
}
