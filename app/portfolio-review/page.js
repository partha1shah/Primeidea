import BannerSection from "@/components/bannerSection";
import Footer from "@/components/footer";
import PortfolioReviewContent from "@/components/portfolioReview/portfolioReviewContent";
import ScopeBreadcrumbs from "@/components/scope/ScopeBreadcrumbs";
import ScopeDisclaimerBar from "@/components/scope/ScopeDisclaimerBar";
import ScopeFaqsSection from "@/components/scope/ScopeFaqsSection";
import ScopePageMetaStrip from "@/components/scope/ScopePageMetaStrip";
import ScopePageJsonLd, {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
} from "@/components/scope/ScopePageJsonLd";
import {
  ArrowUpTrayIcon,
  CheckBadgeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const PAGE_PATH = "/portfolio-review";
const PAGE_URL = `https://www.primeidea.in${PAGE_PATH}`;

const faqs = [
  {
    question: "What is a portfolio review at PrimeIdea?",
    answer:
      "It is a structured, research-led look at your current holdings — allocation, overlap, risk path, cost, tax, and goals — so you know what to change before investing further. It does not guarantee returns.",
    plainText:
      "It is a structured, research-led look at your current holdings — allocation, overlap, risk path, cost, tax, and goals — so you know what to change before investing further. It does not guarantee returns.",
  },
  {
    question: "Who leads the portfolio review?",
    answer:
      "The research process is guided by Partha Shah, SEBI Registered Research Analyst INH000017815. Investors should verify registration independently.",
    plainText:
      "The research process is guided by Partha Shah, SEBI Registered Research Analyst INH000017815. Investors should verify registration independently.",
  },
  {
    question: "Can I upload my portfolio instead of visiting the office?",
    answer:
      "Yes. Upload a CAS or holdings list on this page, or share it on WhatsApp. You can also book an office visit in Vadodara or a video consultation. The review method is the same.",
    plainText:
      "Yes. Upload a CAS or holdings list on this page, or share it on WhatsApp. You can also book an office visit in Vadodara or a video consultation. The review method is the same.",
  },
  {
    question: "Is this the same as SEBI Registered Investment Adviser advice?",
    answer:
      "No. PrimeIdea operates under SEBI Registered Research Analyst registration. It does not present itself as a SEBI Registered Investment Adviser unless separately registered.",
    plainText:
      "No. PrimeIdea operates under SEBI Registered Research Analyst registration. It does not present itself as a SEBI Registered Investment Adviser unless separately registered.",
  },
  {
    question: "Does a portfolio review guarantee better returns?",
    answer:
      "No. Investments in securities market are subject to market risks. PrimeIdea does not guarantee returns or market-beating performance. The review is process-first.",
    plainText:
      "No. Investments in securities market are subject to market risks. PrimeIdea does not guarantee returns or market-beating performance. The review is process-first.",
  },
  {
    question: "Who should book a portfolio review?",
    answer:
      "Investors with overlapping funds, mixed products, family or inherited holdings, or NRIs with India portfolios. PrimeIdea is based in Vadodara and serves clients across Gujarat and India.",
    plainText:
      "Investors with overlapping funds, mixed products, family or inherited holdings, or NRIs with India portfolios. PrimeIdea is based in Vadodara and serves clients across Gujarat and India.",
  },
];

export const metadata = {
  title: "Portfolio Review",
  description:
    "PrimeIdea Ventures offers a research-led portfolio review for investors across Gujarat and India, guided by Partha Shah, SEBI Registered Research Analyst INH000017815. Upload holdings or book an office or video review. No guaranteed returns.",
  keywords:
    "portfolio review, portfolio review Gujarat India, upload portfolio for review, SEBI RA INH000017815, Partha Shah, PrimeIdea Ventures",
  author: "Partha Shah",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: PAGE_URL,
    site_name: "PrimeIdea Ventures",
    title: "Portfolio Review | PrimeIdea Ventures",
    description:
      "Research-led portfolio review for investors across Gujarat and India, guided by Partha Shah, SEBI Registered Research Analyst INH000017815.",
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
  name: "Portfolio Review",
  description:
    "Research-led portfolio review services, guided by Partha Shah, SEBI Registered Research Analyst INH000017815.",
  provider: {
    "@type": "FinancialService",
    name: "PrimeIdea Ventures",
    url: "https://www.primeidea.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "V3 Landmark, 306-307, opp. Atladara Railway Crossing Road, Narayanwadi, Atladara",
      addressLocality: "Vadodara",
      addressRegion: "Gujarat",
      postalCode: "390012",
      addressCountry: "IN",
    },
  },
  areaServed: ["Vadodara", "Gujarat", "India"],
  url: PAGE_URL,
};

const breadcrumbSchema = buildBreadcrumbJsonLd([
  { name: "Portfolio Review", url: PAGE_PATH },
]);

const faqSchema = buildFaqJsonLd(faqs);

export default function PortfolioReviewPage() {
  return (
    <div className="bg-[#F6FDFF]">
      <ScopePageJsonLd data={[serviceSchema, breadcrumbSchema, faqSchema]} />

      <BannerSection
        mainBannerImage="/images/home/banner.png"
        bannerRightImg="/images/home/banner-right.png"
        mainTitle="Portfolio Review"
        mainSubTitle="Upload your holdings or book an office or video review. PrimeIdea Ventures is a Vadodara-based research-led wealth management firm serving investors across Gujarat and India, with a research process guided by Partha Shah, SEBI Registered Research Analyst INH000017815. No product pushing. No guaranteed returns."
        mainLinkTitle="Upload Portfolio"
        mainLink="#upload-portfolio"
        usePrimaryAsLink={true}
        formTitle="Book Portfolio Review"
        secondaryLinkTitle="View Research Process"
        secondaryLink="/research-process"
      />

      <ScopePageMetaStrip
        stats={[
          { label: "Base Location", value: "Vadodara", Icon: MapPinIcon },
          { label: "Registration No.", value: "INH000017815", Icon: CheckBadgeIcon },
          { label: "Start here", value: "Upload holdings", Icon: ArrowUpTrayIcon },
        ]}
        disclaimer="A portfolio review is a structured analysis of current holdings. Investments in securities market are subject to market risks. PrimeIdea Ventures does not guarantee returns and does not present itself as a SEBI Registered Investment Adviser unless separately registered."
      />

      <ScopeBreadcrumbs items={[{ label: "Portfolio Review" }]} />

      <PortfolioReviewContent />

      <ScopeFaqsSection
        title="Portfolio review — Frequently Asked Questions"
        description="What a review includes, how to share holdings, and how PrimeIdea is registered."
        faqs={faqs}
      />

      <ScopeDisclaimerBar ctaHref="#upload-portfolio" ctaLabel="Upload Portfolio for Review">
        Investments in securities market are subject to market risks. PrimeIdea Ventures does
        not guarantee returns. Partha Shah is a SEBI Registered Research Analyst
        (INH000017815). PrimeIdea does not act as a SEBI Registered Investment Adviser unless
        separately registered. Investors should verify registration independently and read all
        scheme-related documents carefully before investing.
      </ScopeDisclaimerBar>

      <Footer />
    </div>
  );
}
