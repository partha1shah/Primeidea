import BannerSection from "@/components/bannerSection";
import Footer from "@/components/footer";
import FamilyWealthOfficeContent from "@/components/familyWealthOffice/familyWealthOfficeContent";
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
  UsersIcon,
} from "@heroicons/react/24/outline";

const PAGE_PATH = "/family-wealth-office-gujarat-india";
const PAGE_URL = `https://www.primeidea.in${PAGE_PATH}`;

const faqs = [
  {
    question: "What is PrimeIdea’s Family Wealth Office?",
    answer:
      "It is research-led family investment clarity: multi-generational portfolio review, nominations and insurance context, next-generation understanding, and partner-enabled succession coordination. It is not a product-push service and does not guarantee returns.",
    plainText:
      "It is research-led family investment clarity: multi-generational portfolio review, nominations and insurance context, next-generation understanding, and partner-enabled succession coordination. It is not a product-push service and does not guarantee returns.",
  },
  {
    question: "Is this a licensed family office?",
    answer:
      "No. The name describes how PrimeIdea works with business families. It does not claim a separate family-office licence. PrimeIdea is a Vadodara-based research-led wealth management and portfolio review firm.",
    plainText:
      "No. The name describes how PrimeIdea works with business families. It does not claim a separate family-office licence. PrimeIdea is a Vadodara-based research-led wealth management and portfolio review firm.",
  },
  {
    question: "Who is it for across Gujarat and India?",
    answer:
      "Business families and multi-generational households. The office is in Vadodara. Family members elsewhere in Gujarat or India can join by video. PrimeIdea does not claim offices in other cities.",
    plainText:
      "Business families and multi-generational households. The office is in Vadodara. Family members elsewhere in Gujarat or India can join by video. PrimeIdea does not claim offices in other cities.",
  },
  {
    question: "Who leads the research?",
    answer:
      "The research process is guided by Partha Shah, SEBI Registered Research Analyst INH000017815. Investors should verify registration independently.",
    plainText:
      "The research process is guided by Partha Shah, SEBI Registered Research Analyst INH000017815. Investors should verify registration independently.",
  },
  {
    question: "Does PrimeIdea draft wills and trust deeds?",
    answer:
      "No. Legal drafting, registration, probate, succession certificates, property transfer, trust deeds, gift deeds, powers of attorney and legal opinions must be handled by qualified legal professionals. PrimeIdea coordinates through partners and does not act as a law firm.",
    plainText:
      "No. Legal drafting, registration, probate, succession certificates, property transfer, trust deeds, gift deeds, powers of attorney and legal opinions must be handled by qualified legal professionals. PrimeIdea coordinates through partners and does not act as a law firm.",
  },
  {
    question: "Is this SEBI Registered Investment Adviser advice?",
    answer:
      "No. PrimeIdea operates under SEBI Registered Research Analyst registration. It does not present itself as a SEBI Registered Investment Adviser unless separately registered.",
    plainText:
      "No. PrimeIdea operates under SEBI Registered Research Analyst registration. It does not present itself as a SEBI Registered Investment Adviser unless separately registered.",
  },
  {
    question: "Are returns guaranteed for family portfolios?",
    answer:
      "No. Investments in securities market are subject to market risks. PrimeIdea does not guarantee returns or market-beating performance.",
    plainText:
      "No. Investments in securities market are subject to market risks. PrimeIdea does not guarantee returns or market-beating performance.",
  },
];

export const metadata = {
  title: "Family Wealth Office in Gujarat and India",
  description:
    "PrimeIdea Ventures helps business families across Gujarat and India with a research-led family wealth office process guided by Partha Shah, SEBI Registered Research Analyst INH000017815 — multi-generational review and partner-enabled succession coordination, without guaranteed returns.",
  keywords:
    "family wealth office Gujarat, family wealth office India, multi-generational portfolio review, succession coordination, Partha Shah SEBI RA INH000017815, PrimeIdea Ventures",
  author: "Partha Shah",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: PAGE_URL,
    site_name: "PrimeIdea Ventures",
    title: "Family Wealth Office in Gujarat and India | PrimeIdea Ventures",
    description:
      "PrimeIdea Ventures helps business families across Gujarat and India with research-led family wealth coordination guided by Partha Shah, SEBI Registered Research Analyst INH000017815.",
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
  name: "Family Wealth Office in Gujarat and India",
  description:
    "Research-led family wealth coordination for business families across Gujarat and India, guided by Partha Shah, SEBI Registered Research Analyst INH000017815.",
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
  { name: "Family Wealth Office", url: PAGE_PATH },
]);
const faqSchema = buildFaqJsonLd(faqs);

export default function FamilyWealthOfficePage() {
  return (
    <div className="bg-[#F6FDFF]">
      <ScopePageJsonLd data={[serviceSchema, breadcrumbSchema, faqSchema]} />

      <BannerSection
        mainBannerImage="/images/home/banner.png"
        bannerRightImg="/images/home/banner-right.png"
        mainTitle="Family Wealth Office in Gujarat and India"
        mainSubTitle="Multi-generational portfolio review and partner-enabled succession coordination for business families — from a Vadodara base, across Gujarat and India. Guided by Partha Shah, SEBI Registered Research Analyst INH000017815. Legal documents by qualified legal professionals. No guaranteed returns."
        mainLinkTitle="Book Family Consultation"
        mainLink="/contact-us"
        usePrimaryAsLink={true}
        formTitle="Book Family Consultation"
        secondaryLinkTitle="Succession Planning"
        secondaryLink="/legacy-succession-estate-planning-india"
      />

      <ScopePageMetaStrip
        stats={[
          { label: "Reach", value: "Gujarat & India", Icon: GlobeAltIcon },
          { label: "Focus", value: "Family books", Icon: UsersIcon },
          { label: "Registration No.", value: "INH000017815", Icon: CheckBadgeIcon },
        ]}
        disclaimer="Family wealth office describes coordinated family review and planning. PrimeIdea does not act as an independent law firm. Investments in securities market are subject to market risks. PrimeIdea does not guarantee returns and does not present itself as a SEBI Registered Investment Adviser unless separately registered."
      />

      <ScopeBreadcrumbs items={[{ label: "Family Wealth Office" }]} />

      <FamilyWealthOfficeContent />

      <ScopeFaqsSection
        title="Family wealth office — Frequently Asked Questions"
        description="How family work differs from a product pitch, and how legal succession is coordinated."
        faqs={faqs}
      />

      <ScopeDisclaimerBar ctaHref="/contact-us" ctaLabel="Book Family Consultation">
        Investments in securities market are subject to market risks. PrimeIdea Ventures does
        not guarantee returns. Partha Shah is a SEBI Registered Research Analyst
        (INH000017815). PrimeIdea does not act as a SEBI Registered Investment Adviser unless
        separately registered. Succession and estate support is partner-enabled coordination,
        not independent legal practice. Partner name and pricing are not listed here.
      </ScopeDisclaimerBar>

      <Footer />
    </div>
  );
}
