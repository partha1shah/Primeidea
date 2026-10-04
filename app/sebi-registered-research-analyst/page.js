import BannerSection from "@/components/bannerSection";
import Footer from "@/components/footer";
import ScopeBreadcrumbs from "@/components/scope/ScopeBreadcrumbs";
import ScopeDisclaimerBar from "@/components/scope/ScopeDisclaimerBar";
import ScopeFaqsSection from "@/components/scope/ScopeFaqsSection";
import ScopePageMetaStrip from "@/components/scope/ScopePageMetaStrip";
import ScopePageJsonLd, {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
} from "@/components/scope/ScopePageJsonLd";
import SebiRaContentSections from "@/components/sebiRa/sebiRaContentSections";

const PAGE_PATH = "/sebi-registered-research-analyst";
const PAGE_URL = `https://www.primeidea.in${PAGE_PATH}`;

const faqs = [
  {
    question: "Who is the SEBI Registered Research Analyst at PrimeIdea Ventures?",
    answer:
      "Partha Shah leads PrimeIdea’s research process as a SEBI Registered Research Analyst with registration number INB010653732. Investors should verify this registration independently on the official SEBI website.",
    plainText:
      "Partha Shah leads PrimeIdea’s research process as a SEBI Registered Research Analyst with registration number INB010653732. Investors should verify this registration independently on the official SEBI website.",
  },
  {
    question: "Does PrimeIdea also distribute financial products?",
    answer:
      "Yes. PrimeIdea Ventures is a distributor of mutual funds, PMS, AIF, and SIF through registered channels, alongside research-led portfolio review. Full registration and validity details are published on this site.",
    plainText:
      "Yes. PrimeIdea Ventures is a distributor of mutual funds, PMS, AIF, and SIF through registered channels, alongside research-led portfolio review. Full registration and validity details are published on this site.",
  },
  {
    question: "Does PrimeIdea guarantee returns?",
    answer:
      "No. PrimeIdea Ventures does not guarantee returns, market-beating performance, or risk-free outcomes. Investments in securities market are subject to market risks, and all guidance is process-first with clear disclosures.",
    plainText:
      "No. PrimeIdea Ventures does not guarantee returns, market-beating performance, or risk-free outcomes. Investments in securities market are subject to market risks, and all guidance is process-first with clear disclosures.",
  },
  {
    question: "How can I verify the SEBI registration?",
    answer:
      "Use registration number INB010653732 on the official SEBI website to verify Partha Shah’s status as a SEBI Registered Research Analyst. PrimeIdea is based in Vadodara and serves investors across Gujarat and India through office and online consultation.",
    plainText:
      "Use registration number INB010653732 on the official SEBI website to verify Partha Shah’s status as a SEBI Registered Research Analyst. PrimeIdea is based in Vadodara and serves investors across Gujarat and India through office and online consultation.",
  },
  {
    question: "How do I start working with PrimeIdea?",
    answer:
      "Begin with a structured portfolio review. Share your current holdings and goals so we can assess suitability, overlaps, asset allocation, and next steps through a research-led process.",
    plainText:
      "Begin with a structured portfolio review. Share your current holdings and goals so we can assess suitability, overlaps, asset allocation, and next steps through a research-led process.",
  },
];

export const metadata = {
  title: "SEBI Registered Research Analyst",
  description:
    "PrimeIdea Ventures explains its SEBI Registered Research Analyst-led portfolio review for investors across Gujarat and India, through a research-led process guided by Partha Shah, SEBI Registered Research Analyst INB010653732.",
  keywords:
    "SEBI Registered Research Analyst, Partha Shah INB010653732, research analyst Gujarat India, portfolio review, PrimeIdea Ventures",
  author: "Partha Shah",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: PAGE_URL,
    site_name: "PrimeIdea Ventures",
    title: "SEBI Registered Research Analyst | PrimeIdea Ventures",
    description:
      "PrimeIdea Ventures explains its SEBI Registered Research Analyst-led portfolio review for investors across Gujarat and India, through a research-led process guided by Partha Shah, SEBI Registered Research Analyst INB010653732.",
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
  name: "SEBI Registered Research Analyst Services",
  description:
    "Research-led portfolio review and analysis guided by Partha Shah, SEBI Registered Research Analyst INB010653732.",
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
  { name: "SEBI Registered Research Analyst", url: PAGE_PATH },
]);

const faqSchema = buildFaqJsonLd(faqs);

export default function SebiRegisteredResearchAnalystPage() {
  return (
    <div className="bg-[#F6FDFF]">
      <ScopePageJsonLd data={[serviceSchema, breadcrumbSchema, faqSchema]} />

      <BannerSection
        mainBannerImage="/images/home/banner.png"
        bannerRightImg="/images/home/banner-right.png"
        mainTitle="SEBI Registered Research Analyst"
        mainSubTitle="PrimeIdea Ventures is a Vadodara-based research-led firm and distributor of financial products — mutual funds, PMS, AIF, and SIF — with SEBI Registered Research Analyst registration INB010653732."
        mainLinkTitle="Book Portfolio Review"
        mainLink="/portfolio-review"
        usePrimaryAsLink={true}
        formTitle="Book Portfolio Review"
        secondaryLinkTitle="View Research Process"
        secondaryLink="/research-process"
      />

      <ScopePageMetaStrip />

      <ScopeBreadcrumbs
        items={[{ label: "SEBI Registered Research Analyst" }]}
      />

      <SebiRaContentSections />

      <ScopeFaqsSection
        title="SEBI RA — Frequently Asked Questions"
        description="Common questions about SEBI registration, role clarification, and how PrimeIdea’s research-led process works."
        faqs={faqs}
      />

      <ScopeDisclaimerBar>
        Investments in Mutual Funds, PMS, AIF, SIF and other market-linked products are
        subject to market risks. Please read all scheme-related documents carefully before
        investing. PrimeIdea Ventures does not guarantee returns. Verify registrations
        independently.
      </ScopeDisclaimerBar>

      <Footer />
    </div>
  );
}
