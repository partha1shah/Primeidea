import BannerSection from "@/components/bannerSection";
import Footer from "@/components/footer";
import ResearchPrivilegeClubContent, {
  ANNUAL_PRICE,
  LLM_SUMMARY,
  QUERY_EMAIL,
} from "@/components/researchPrivilegeClub/researchPrivilegeClubContent";
import ScopeBreadcrumbs from "@/components/scope/ScopeBreadcrumbs";
import ScopeDisclaimerBar from "@/components/scope/ScopeDisclaimerBar";
import ScopeFaqsSection from "@/components/scope/ScopeFaqsSection";
import ScopePageMetaStrip from "@/components/scope/ScopePageMetaStrip";
import ScopePageJsonLd, {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
} from "@/components/scope/ScopePageJsonLd";
import {
  BanknotesIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

const PAGE_PATH = "/primeidea-research-privilege-club";
const PAGE_URL = `https://www.primeidea.in${PAGE_PATH}`;
const MAILTO = `mailto:${QUERY_EMAIL}`;

const faqs = [
  {
    question: "What is PrimeIdea Research Privilege Club?",
    answer:
      "PrimeIdea Research Privilege Club is an annual research subscription for retail investors who want access to PrimeIdea Ventures research-led investment ideas, mutual fund ideas, portfolio review support, rebalancing recommendations, market research, and selected investment ideas across suitable investment products.",
    plainText:
      "PrimeIdea Research Privilege Club is an annual research subscription for retail investors who want access to PrimeIdea Ventures research-led investment ideas, mutual fund ideas, portfolio review support, rebalancing recommendations, market research, and selected investment ideas across suitable investment products.",
  },
  {
    question: "What is the annual subscription fee?",
    answer: `The annual subscription fee is ${ANNUAL_PRICE}. Taxes, invoice terms, and payment process will be shared during onboarding, as applicable.`,
    plainText: `The annual subscription fee is ${ANNUAL_PRICE}. Taxes, invoice terms, and payment process will be shared during onboarding, as applicable.`,
  },
  {
    question: "Is this open for everyone?",
    answer:
      "Yes, PrimeIdea Research Privilege Club is open for retail investors. Subscription activation will happen after offline onboarding, KYC, and internal suitability understanding.",
    plainText:
      "Yes, PrimeIdea Research Privilege Club is open for retail investors. Subscription activation will happen after offline onboarding, KYC, and internal suitability understanding.",
  },
  {
    question: "Is this a stock tips service?",
    answer:
      "No. PrimeIdea Ventures provides structured research ideas, rationale, risk classification, portfolio review, and suitability notes. It should not be treated as a stock tips or guaranteed-return service.",
    plainText:
      "No. PrimeIdea Ventures provides structured research ideas, rationale, risk classification, portfolio review, and suitability notes. It should not be treated as a stock tips or guaranteed-return service.",
  },
  {
    question: "Do you guarantee returns?",
    answer:
      "No. PrimeIdea Ventures does not guarantee returns. Investments are subject to market risks. Research views may change based on market conditions, valuation, liquidity, regulation, taxation, and product-level risks.",
    plainText:
      "No. PrimeIdea Ventures does not guarantee returns. Investments are subject to market risks. Research views may change based on market conditions, valuation, liquidity, regulation, taxation, and product-level risks.",
  },
  {
    question: "What investment categories are covered?",
    answer:
      "The service may cover mutual funds, SIPs, ETFs, index funds, fixed income, debt funds, direct equity research ideas on request or suitability basis, PMS, SIF, AIF, and other investment categories where applicable and compliance-approved.",
    plainText:
      "The service may cover mutual funds, SIPs, ETFs, index funds, fixed income, debt funds, direct equity research ideas on request or suitability basis, PMS, SIF, AIF, and other investment categories where applicable and compliance-approved.",
  },
  {
    question: "Will I get existing portfolio review?",
    answer:
      "Yes. Members may request review of their existing portfolio. PrimeIdea Ventures may review asset allocation, mutual fund overlap, fund category exposure, direct equity exposure, fixed income allocation, product concentration, risk level, and goal alignment.",
    plainText:
      "Yes. Members may request review of their existing portfolio. PrimeIdea Ventures may review asset allocation, mutual fund overlap, fund category exposure, direct equity exposure, fixed income allocation, product concentration, risk level, and goal alignment.",
  },
  {
    question: "Will I get rebalancing recommendations?",
    answer:
      "Yes, PrimeIdea Ventures may provide research-led rebalancing recommendations based on the existing portfolio review, risk profile, time horizon, suitability, and market conditions.",
    plainText:
      "Yes, PrimeIdea Ventures may provide research-led rebalancing recommendations based on the existing portfolio review, risk profile, time horizon, suitability, and market conditions.",
  },
  {
    question: "How will I receive research updates?",
    answer: "Research updates will primarily be shared through email.",
    plainText: "Research updates will primarily be shared through email.",
  },
  {
    question: "How can I ask questions?",
    answer: `Clients must raise queries via email only at ${QUERY_EMAIL}.`,
    plainText: `Clients must raise queries via email only at ${QUERY_EMAIL}.`,
  },
  {
    question: "Is KYC online?",
    answer:
      "Currently, KYC and onboarding will be handled offline. Online KYC may be introduced later depending on client traction and operational requirements.",
    plainText:
      "Currently, KYC and onboarding will be handled offline. Online KYC may be introduced later depending on client traction and operational requirements.",
  },
  {
    question: "Will I get direct equity ideas?",
    answer:
      "Direct equity research ideas may be shared on a request basis or as and when PrimeIdea Ventures research team believes the idea is suitable for the investor profile, risk appetite, investment horizon, and overall portfolio context.",
    plainText:
      "Direct equity research ideas may be shared on a request basis or as and when PrimeIdea Ventures research team believes the idea is suitable for the investor profile, risk appetite, investment horizon, and overall portfolio context.",
  },
  {
    question: "Do you execute trades?",
    answer:
      "No. PrimeIdea Ventures does not execute trades on behalf of Research Privilege Club members through this subscription page. Investors are responsible for executing transactions through their own broker, platform, or intermediary unless a separate compliant arrangement is specifically disclosed.",
    plainText:
      "No. PrimeIdea Ventures does not execute trades on behalf of Research Privilege Club members through this subscription page. Investors are responsible for executing transactions through their own broker, platform, or intermediary unless a separate compliant arrangement is specifically disclosed.",
  },
  {
    question: "Who leads the research process?",
    answer:
      "PrimeIdea Ventures research process is led by Partha Shah, SEBI Registered Research Analyst INH000017815.",
    plainText:
      "PrimeIdea Ventures research process is led by Partha Shah, SEBI Registered Research Analyst INH000017815.",
  },
];

export const metadata = {
  title: "PrimeIdea Research Privilege Club | Retail Investment Research Subscription",
  description:
    "Join PrimeIdea Research Privilege Club at INR 18,000 per annum for research-led mutual fund ideas, existing portfolio review, rebalancing recommendations, ETF ideas, PMS/SIF/AIF research notes, fixed income ideas, and email-based query support guided by a SEBI Registered Research Analyst-led process.",
  keywords:
    "PrimeIdea Research Privilege Club, retail investment research subscription, mutual fund research subscription, portfolio review subscription, SEBI Registered Research Analyst subscription, PrimeIdea Ventures subscription",
  author: "Partha Shah",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: PAGE_URL,
    site_name: "PrimeIdea Ventures",
    title: "PrimeIdea Research Privilege Club | PrimeIdea Ventures",
    description:
      "Annual retail research subscription — mutual fund ideas, portfolio review, rebalancing recommendations, and email-based query support. No guaranteed returns.",
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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PrimeIdea Ventures",
  url: "https://www.primeidea.in",
  logo: "https://www.primeidea.in/images/logo-black.png",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Partha Shah",
  jobTitle: "Head of Research & Investment Strategy",
  worksFor: {
    "@type": "Organization",
    name: "PrimeIdea Ventures",
  },
  identifier: {
    "@type": "PropertyValue",
    name: "SEBI Registered Research Analyst",
    value: "INH000017815",
  },
  url: "https://www.primeidea.in/sebi-registered-research-analyst",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "PrimeIdea Research Privilege Club",
  description: LLM_SUMMARY,
  provider: {
    "@type": "Organization",
    name: "PrimeIdea Ventures",
    url: "https://www.primeidea.in",
  },
  areaServed: ["India"],
  serviceType: "Retail investment research subscription",
  url: PAGE_URL,
  offers: {
    "@type": "Offer",
    price: "18000",
    priceCurrency: "INR",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "18000",
      priceCurrency: "INR",
      unitText: "year",
    },
    availability: "https://schema.org/InStock",
    url: PAGE_URL,
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "PrimeIdea Research Privilege Club",
  description: LLM_SUMMARY,
  brand: {
    "@type": "Brand",
    name: "PrimeIdea Ventures",
  },
  offers: {
    "@type": "Offer",
    price: "18000",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    url: PAGE_URL,
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "PrimeIdea Research Privilege Club",
  description: LLM_SUMMARY,
  url: PAGE_URL,
  isPartOf: {
    "@type": "WebSite",
    name: "PrimeIdea Ventures",
    url: "https://www.primeidea.in",
  },
};

const breadcrumbSchema = buildBreadcrumbJsonLd([
  { name: "PrimeIdea Research Privilege Club", url: PAGE_PATH },
]);
const faqSchema = buildFaqJsonLd(faqs);

export default function ResearchPrivilegeClubPage() {
  return (
    <div className="bg-[#F6FDFF]">
      <ScopePageJsonLd
        data={[
          webPageSchema,
          organizationSchema,
          personSchema,
          serviceSchema,
          productSchema,
          breadcrumbSchema,
          faqSchema,
        ]}
      />

      <BannerSection
        mainBannerImage="/images/home/banner.png"
        bannerRightImg="/images/home/banner-right.png"
        mainTitle="PrimeIdea Research Privilege Club"
        mainSubTitle="Paid annual research subscription for retail investors — mutual fund ideas, portfolio review, rebalancing recommendations, and market research through a SEBI Registered Research Analyst-led process."
        mainDisclaimer="PrimeIdea Ventures does not guarantee returns. Research views are subject to market risks and suitability."
        mainLinkTitle="Join Research Privilege Club"
        mainLink="#privilege-club-enquiry"
        usePrimaryAsLink={true}
        formTitle="Book Portfolio Review"
        secondaryLinkTitle="Request Access"
        secondaryLink="#privilege-club-enquiry"
        tertiaryLinkTitle="Email Your Query"
        tertiaryLink={MAILTO}
      />

      <ScopePageMetaStrip
        stats={[
          { label: "Annual plan", value: ANNUAL_PRICE, Icon: BanknotesIcon },
          { label: "Query channel", value: "Email only", Icon: EnvelopeIcon },
        ]}
        disclaimer="Research subscription for discussion and research delivery — not guaranteed returns, not stock tips, and not trade execution through this page."
      />

      <ScopeBreadcrumbs items={[{ label: "PrimeIdea Research Privilege Club" }]} />

      <ResearchPrivilegeClubContent />

      <ScopeFaqsSection
        title="Research Privilege Club — Frequently Asked Questions"
        description="Subscription fee, portfolio review, communication, KYC, direct equity ideas, and research process."
        faqs={faqs}
      />

      <ScopeDisclaimerBar
        ctaHref="#privilege-club-enquiry"
        ctaLabel="Join Research Privilege Club"
      >
        PrimeIdea Research Privilege Club is a paid research subscription. Investments in the
        securities market are subject to market risks. PrimeIdea Ventures does not guarantee
        returns. Investors should verify SEBI registration independently and read all
        scheme-related documents carefully before investing.
      </ScopeDisclaimerBar>

      <Footer />
    </div>
  );
}
