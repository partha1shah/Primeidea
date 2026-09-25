import BannerSection from "@/components/bannerSection";
import Footer from "@/components/footer";
import FixedIncomeContent from "@/components/fixedIncome/fixedIncomeContent";
import ScopeBreadcrumbs from "@/components/scope/ScopeBreadcrumbs";
import ScopeDisclaimerBar from "@/components/scope/ScopeDisclaimerBar";
import ScopeFaqsSection from "@/components/scope/ScopeFaqsSection";
import ScopePageMetaStrip from "@/components/scope/ScopePageMetaStrip";
import ScopePageJsonLd, {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
} from "@/components/scope/ScopePageJsonLd";
import {
  BuildingLibraryIcon,
  CheckBadgeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const PAGE_PATH = "/fixed-income-investments";
const PAGE_URL = `https://www.primeidea.in${PAGE_PATH}`;

const faqs = [
  {
    question: "What is fixed income investment support at PrimeIdea?",
    answer:
      "It is research-led review of debt funds, bonds, and related income holdings — credit, rate, liquidity, tax, and role in the book — guided by Partha Shah, SEBI Registered Research Analyst INH000017815. It is not a product push and does not guarantee returns.",
    plainText:
      "It is research-led review of debt funds, bonds, and related income holdings — credit, rate, liquidity, tax, and role in the book — guided by Partha Shah, SEBI Registered Research Analyst INH000017815. It is not a product push and does not guarantee returns.",
  },
  {
    question: "Do fixed income products guarantee returns?",
    answer:
      "No. Fixed income does not mean fixed or guaranteed returns. These instruments can lose value due to credit, interest-rate, and liquidity risks. PrimeIdea does not guarantee returns.",
    plainText:
      "No. Fixed income does not mean fixed or guaranteed returns. These instruments can lose value due to credit, interest-rate, and liquidity risks. PrimeIdea does not guarantee returns.",
  },
  {
    question: "What kinds of fixed income holdings are reviewed?",
    answer:
      "Debt mutual funds, corporate and government bonds, tax-free bonds where relevant, target-maturity funds, and other income products already held or under consideration — assessed for suitability, not sold on coupon alone.",
    plainText:
      "Debt mutual funds, corporate and government bonds, tax-free bonds where relevant, target-maturity funds, and other income products already held or under consideration — assessed for suitability, not sold on coupon alone.",
  },
  {
    question: "Is this SEBI Registered Investment Adviser advice?",
    answer:
      "No. PrimeIdea operates under SEBI Registered Research Analyst registration. It does not present itself as a SEBI Registered Investment Adviser unless separately registered.",
    plainText:
      "No. PrimeIdea operates under SEBI Registered Research Analyst registration. It does not present itself as a SEBI Registered Investment Adviser unless separately registered.",
  },
  {
    question: "Can I get this review if I do not live in Vadodara?",
    answer:
      "Yes. The office is in Vadodara. Investors across Gujarat and India can share holdings or join a video review. PrimeIdea does not claim offices in other cities.",
    plainText:
      "Yes. The office is in Vadodara. Investors across Gujarat and India can share holdings or join a video review. PrimeIdea does not claim offices in other cities.",
  },
  {
    question: "How do I start?",
    answer:
      "Upload a portfolio or CAS, or book a portfolio review. Share your income needs, time horizon, and any near-term cash requirement.",
    plainText:
      "Upload a portfolio or CAS, or book a portfolio review. Share your income needs, time horizon, and any near-term cash requirement.",
  },
];

export const metadata = {
  title: "Fixed Income Investments",
  description:
    "PrimeIdea Ventures offers research-led fixed income investment support for investors across Gujarat and India, guided by Partha Shah, SEBI Registered Research Analyst INH000017815. Fixed income does not mean guaranteed returns. Market risks apply.",
  keywords:
    "fixed income investments, debt fund review, bond investment support, Partha Shah SEBI RA INH000017815, PrimeIdea Ventures",
  author: "Partha Shah",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: PAGE_URL,
    site_name: "PrimeIdea Ventures",
    title: "Fixed Income Investments | PrimeIdea Ventures",
    description:
      "Research-led fixed income review, guided by Partha Shah, SEBI Registered Research Analyst INH000017815. Not guaranteed returns. Market risks apply.",
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
  name: "Fixed Income Investments",
  description:
    "Research-led fixed income and debt product review, guided by Partha Shah, SEBI Registered Research Analyst INH000017815.",
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
  { name: "Fixed Income Investments", url: PAGE_PATH },
]);
const faqSchema = buildFaqJsonLd(faqs);

export default function FixedIncomeInvestmentsPage() {
  return (
    <div className="bg-[#F6FDFF]">
      <ScopePageJsonLd data={[serviceSchema, breadcrumbSchema, faqSchema]} />

      <BannerSection
        mainBannerImage="/images/home/banner.png"
        bannerRightImg="/images/home/banner-right.png"
        mainTitle="Fixed Income Investments"
        mainSubTitle="Research-led review of debt funds, bonds, and stability allocation from a Vadodara office, serving investors across Gujarat and India. Guided by Partha Shah, SEBI Registered Research Analyst INH000017815. Fixed income does not mean guaranteed returns. Market risks apply."
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
          { label: "Focus", value: "Debt & bonds", Icon: BuildingLibraryIcon },
          { label: "Registration No.", value: "INH000017815", Icon: CheckBadgeIcon },
        ]}
        disclaimer="Fixed income does not mean fixed or guaranteed returns. Investments in the securities market are subject to market risks. PrimeIdea Ventures does not guarantee returns and does not present itself as a SEBI Registered Investment Adviser unless separately registered."
      />

      <ScopeBreadcrumbs items={[{ label: "Fixed Income Investments" }]} />

      <FixedIncomeContent />

      <ScopeFaqsSection
        title="Fixed income — Frequently Asked Questions"
        description="How debt and bond holdings are reviewed, and how to start with a portfolio upload or office visit."
        faqs={faqs}
      />

      <ScopeDisclaimerBar ctaHref="/portfolio-review" ctaLabel="Upload Portfolio for Review">
        Investments in the securities market are subject to market risks. Fixed income products
        can lose value. PrimeIdea Ventures does not guarantee returns. Partha Shah is a SEBI
        Registered Research Analyst (INH000017815). PrimeIdea does not act as a SEBI Registered
        Investment Adviser unless separately registered. Investors should verify registration
        independently and read all related documents carefully.
      </ScopeDisclaimerBar>

      <Footer />
    </div>
  );
}
