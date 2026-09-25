import BannerSection from "@/components/bannerSection";
import Footer from "@/components/footer";
import PrivateWealthContent from "@/components/privateWealth/privateWealthContent";
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
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const PAGE_PATH = "/private-wealth-management-gujarat-india";
const PAGE_URL = `https://www.primeidea.in${PAGE_PATH}`;

const faqs = [
  {
    question: "What is private wealth management at PrimeIdea?",
    answer:
      "It is research-led support for high net worth and family books — portfolio review, suitability across products, tax-aware implementation, and continuity conversations. It starts with a structured review, not a product list, and does not guarantee returns.",
    plainText:
      "It is research-led support for high net worth and family books — portfolio review, suitability across products, tax-aware implementation, and continuity conversations. It starts with a structured review, not a product list, and does not guarantee returns.",
  },
  {
    question: "Does PrimeIdea serve clients only in Vadodara?",
    answer:
      "No. PrimeIdea is based in Vadodara and serves investors across Gujarat and India through office visits and video consultation. Naming other cities does not mean PrimeIdea has offices there.",
    plainText:
      "No. PrimeIdea is based in Vadodara and serves investors across Gujarat and India through office visits and video consultation. Naming other cities does not mean PrimeIdea has offices there.",
  },
  {
    question: "Who leads the research behind private wealth work?",
    answer:
      "The research process is guided by Partha Shah, SEBI Registered Research Analyst INH000017815. Investors should verify registration independently.",
    plainText:
      "The research process is guided by Partha Shah, SEBI Registered Research Analyst INH000017815. Investors should verify registration independently.",
  },
  {
    question: "Does PrimeIdea offer PMS, AIF, or SIF to every client?",
    answer:
      "No. PMS, AIF, and SIF are discussed only where they may be suitable and where distribution and compliance rights exist. Many private wealth reviews stay with mutual funds, equity, and fixed income.",
    plainText:
      "No. PMS, AIF, and SIF are discussed only where they may be suitable and where distribution and compliance rights exist. Many private wealth reviews stay with mutual funds, equity, and fixed income.",
  },
  {
    question: "Is this SEBI Registered Investment Adviser advice?",
    answer:
      "No. PrimeIdea operates under SEBI Registered Research Analyst registration. It does not present itself as a SEBI Registered Investment Adviser unless separately registered.",
    plainText:
      "No. PrimeIdea operates under SEBI Registered Research Analyst registration. It does not present itself as a SEBI Registered Investment Adviser unless separately registered.",
  },
  {
    question: "Does private wealth management guarantee better returns?",
    answer:
      "No. Investments in securities market are subject to market risks. PrimeIdea does not guarantee returns or market-beating performance.",
    plainText:
      "No. Investments in securities market are subject to market risks. PrimeIdea does not guarantee returns or market-beating performance.",
  },
  {
    question: "How does succession planning work with private wealth?",
    answer:
      "Succession, estate, and documentation support is partner-enabled. Legal drafting and opinions are handled by qualified legal professionals. PrimeIdea does not act as a law firm and does not list partner names or pricing here.",
    plainText:
      "Succession, estate, and documentation support is partner-enabled. Legal drafting and opinions are handled by qualified legal professionals. PrimeIdea does not act as a law firm and does not list partner names or pricing here.",
  },
];

export const metadata = {
  title: "Private Wealth Management in Gujarat and India",
  description:
    "PrimeIdea Ventures helps high net worth investors across Gujarat and India with research-led private wealth management through a process guided by Partha Shah, SEBI Registered Research Analyst INH000017815 — portfolio review first, without guaranteed returns.",
  keywords:
    "private wealth management Gujarat, private wealth India, HNI portfolio review, Partha Shah SEBI RA INH000017815, PrimeIdea Ventures Vadodara",
  author: "Partha Shah",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: PAGE_URL,
    site_name: "PrimeIdea Ventures",
    title: "Private Wealth Management in Gujarat and India | PrimeIdea Ventures",
    description:
      "PrimeIdea Ventures helps high net worth investors across Gujarat and India with research-led private wealth management guided by Partha Shah, SEBI Registered Research Analyst INH000017815.",
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
  name: "Private Wealth Management in Gujarat and India",
  description:
    "Research-led private wealth support for high net worth investors across Gujarat and India, guided by Partha Shah, SEBI Registered Research Analyst INH000017815.",
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
  areaServed: ["Gujarat", "India"],
  url: PAGE_URL,
};

const breadcrumbSchema = buildBreadcrumbJsonLd([
  { name: "Private Wealth Management", url: PAGE_PATH },
]);
const faqSchema = buildFaqJsonLd(faqs);

export default function PrivateWealthPage() {
  return (
    <div className="bg-[#F6FDFF]">
      <ScopePageJsonLd data={[serviceSchema, breadcrumbSchema, faqSchema]} />

      <BannerSection
        mainBannerImage="/images/home/banner.png"
        bannerRightImg="/images/home/banner-right.png"
        mainTitle="Private Wealth Management in Gujarat and India"
        mainSubTitle="Research-led private wealth support for HNI and family portfolios — from a Vadodara base, across Gujarat and India. Guided by Partha Shah, SEBI Registered Research Analyst INH000017815. No product pushing. No guaranteed returns."
        mainLinkTitle="Book Consultation"
        mainLink="/contact-us"
        usePrimaryAsLink={true}
        formTitle="Book Private Wealth Consultation"
        secondaryLinkTitle="Upload Portfolio"
        secondaryLink="/portfolio-review"
      />

      <ScopePageMetaStrip
        stats={[
          { label: "Reach", value: "Gujarat & India", Icon: GlobeAltIcon },
          { label: "Who we help", value: "HNI & families", Icon: UserGroupIcon },
          { label: "Registration No.", value: "INH000017815", Icon: CheckBadgeIcon },
        ]}
        disclaimer="Private wealth support is a research-led review and planning process. Investments in securities market are subject to market risks. PrimeIdea Ventures does not guarantee returns and does not present itself as a SEBI Registered Investment Adviser unless separately registered."
      />

      <ScopeBreadcrumbs items={[{ label: "Private Wealth Management" }]} />

      <PrivateWealthContent />

      <ScopeFaqsSection
        title="Private wealth — Frequently Asked Questions"
        description="Who this is for, how Gujarat and India coverage works, and how succession is coordinated."
        faqs={faqs}
      />

      <ScopeDisclaimerBar ctaHref="/contact-us" ctaLabel="Book Private Wealth Consultation">
        Investments in securities market are subject to market risks. PrimeIdea Ventures does
        not guarantee returns. Partha Shah is a SEBI Registered Research Analyst
        (INH000017815). PrimeIdea does not act as a SEBI Registered Investment Adviser unless
        separately registered. Succession and estate support is partner-enabled coordination,
        not independent legal practice. Investors should verify registration independently.
      </ScopeDisclaimerBar>

      <Footer />
    </div>
  );
}
