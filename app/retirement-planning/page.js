import BannerSection from "@/components/bannerSection";
import Footer from "@/components/footer";
import RetirementPlanningForm from "@/components/forms/RetirementPlanningForm";
import RetirementPlanningContent from "@/components/retirement/retirementPlanningContent";
import ScopeBreadcrumbs from "@/components/scope/ScopeBreadcrumbs";
import ScopeDisclaimerBar from "@/components/scope/ScopeDisclaimerBar";
import ScopeFaqsSection from "@/components/scope/ScopeFaqsSection";
import ScopePageMetaStrip from "@/components/scope/ScopePageMetaStrip";
import ScopePageJsonLd, {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
} from "@/components/scope/ScopePageJsonLd";
import ScopeSuccessionCrossLink from "@/components/scope/ScopeSuccessionCrossLink";
import {
  CheckBadgeIcon,
  MapPinIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

const PAGE_PATH = "/retirement-planning";
const PAGE_URL = `https://www.primeidea.in${PAGE_PATH}`;

const faqs = [
  {
    question: "What is retirement planning support at PrimeIdea?",
    answer:
      "It is research-led review of retirement age, lifestyle spend, corpus gap, allocation path, inflation assumptions, and withdrawal design — guided by Partha Shah, SEBI Registered Research Analyst INH000017815. It does not guarantee retirement income or investment returns.",
    plainText:
      "It is research-led review of retirement age, lifestyle spend, corpus gap, allocation path, inflation assumptions, and withdrawal design — guided by Partha Shah, SEBI Registered Research Analyst INH000017815. It does not guarantee retirement income or investment returns.",
  },
  {
    question: "Does PrimeIdea guarantee a retirement corpus or income?",
    answer:
      "No. Investments in the securities market are subject to market risks. Any corpus or withdrawal figures used in planning are working assumptions, not promises. PrimeIdea does not guarantee returns.",
    plainText:
      "No. Investments in the securities market are subject to market risks. Any corpus or withdrawal figures used in planning are working assumptions, not promises. PrimeIdea does not guarantee returns.",
  },
  {
    question: "Is this SEBI Registered Investment Adviser advice?",
    answer:
      "No. PrimeIdea operates under SEBI Registered Research Analyst registration. It does not present itself as a SEBI Registered Investment Adviser unless separately registered.",
    plainText:
      "No. PrimeIdea operates under SEBI Registered Research Analyst registration. It does not present itself as a SEBI Registered Investment Adviser unless separately registered.",
  },
  {
    question: "How does retirement planning connect to insurance and succession?",
    answer:
      "Healthcare cover and family protection affect cash-flow risk in retirement. Wills, nominations, and estate documents can be coordinated through partner-enabled succession support — without listing partner names or pricing on this website.",
    plainText:
      "Healthcare cover and family protection affect cash-flow risk in retirement. Wills, nominations, and estate documents can be coordinated through partner-enabled succession support — without listing partner names or pricing on this website.",
  },
  {
    question: "Can I get this review if I do not live in Vadodara?",
    answer:
      "Yes. The office is in Vadodara. Investors across Gujarat and India can join a video review or share holdings online. PrimeIdea does not claim offices in other cities.",
    plainText:
      "Yes. The office is in Vadodara. Investors across Gujarat and India can join a video review or share holdings online. PrimeIdea does not claim offices in other cities.",
  },
  {
    question: "How do I start?",
    answer:
      "Book a portfolio review or upload current holdings. Share your target retirement age, monthly spend estimate, and any existing NPS, PF, or pension inputs.",
    plainText:
      "Book a portfolio review or upload current holdings. Share your target retirement age, monthly spend estimate, and any existing NPS, PF, or pension inputs.",
  },
];

export const metadata = {
  title: "Retirement Planning",
  description:
    "PrimeIdea Ventures offers research-led retirement planning for investors across Gujarat and India, guided by Partha Shah, SEBI Registered Research Analyst INH000017815. No guaranteed corpus or returns. Market risks apply.",
  keywords:
    "retirement planning, retirement corpus review, NPS retirement planning India, Partha Shah SEBI RA INH000017815, PrimeIdea Ventures",
  author: "Partha Shah",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: PAGE_URL,
    site_name: "PrimeIdea Ventures",
    title: "Retirement Planning | PrimeIdea Ventures",
    description:
      "Research-led retirement planning, guided by Partha Shah, SEBI Registered Research Analyst INH000017815. No guaranteed income or returns.",
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
  name: "Retirement Planning",
  description:
    "Research-led retirement corpus, allocation, and withdrawal planning support, guided by Partha Shah, SEBI Registered Research Analyst INH000017815.",
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
  { name: "Retirement Planning", url: PAGE_PATH },
]);
const faqSchema = buildFaqJsonLd(faqs);

export default function RetirementPlanningPage() {
  return (
    <div className="bg-[#F6FDFF]">
      <ScopePageJsonLd data={[serviceSchema, breadcrumbSchema, faqSchema]} />

      <BannerSection
        mainBannerImage="/images/home/banner.png"
        bannerRightImg="/images/home/banner-right.png"
        mainTitle="Retirement Planning"
        mainSubTitle="Research-led corpus, allocation, and withdrawal review from a Vadodara office, serving investors across Gujarat and India. Guided by Partha Shah, SEBI Registered Research Analyst INH000017815. No guaranteed retirement income or investment returns. Market risks apply."
        mainLinkTitle="Start Retirement Form"
        mainLink="#lead-form"
        usePrimaryAsLink={true}
        formTitle="Retirement Planning"
        secondaryLinkTitle="Book Portfolio Review"
        secondaryLink="/portfolio-review"
      />

      <ScopePageMetaStrip
        stats={[
          { label: "Base Location", value: "Vadodara", Icon: MapPinIcon },
          { label: "Focus", value: "Corpus & income", Icon: SunIcon },
          { label: "Registration No.", value: "INH000017815", Icon: CheckBadgeIcon },
        ]}
        disclaimer="Retirement projections are working assumptions, not promises. Investments in the securities market are subject to market risks. PrimeIdea Ventures does not guarantee returns and does not present itself as a SEBI Registered Investment Adviser unless separately registered."
      />

      <ScopeBreadcrumbs items={[{ label: "Retirement Planning" }]} />

      <RetirementPlanningContent />

      <RetirementPlanningForm />

      <ScopeSuccessionCrossLink context="retirement planning" />

      <ScopeFaqsSection
        title="Retirement planning — Frequently Asked Questions"
        description="How corpus and withdrawal planning is reviewed, and how to start with a portfolio review."
        faqs={faqs}
      />

      <ScopeDisclaimerBar ctaHref="/portfolio-review" ctaLabel="Book Portfolio Review">
        Investments in the securities market are subject to market risks. PrimeIdea Ventures does
        not guarantee retirement corpus size, withdrawal rates, or investment returns. Partha Shah
        is a SEBI Registered Research Analyst (INH000017815). PrimeIdea does not act as a SEBI
        Registered Investment Adviser unless separately registered. Investors should verify
        registration independently.
      </ScopeDisclaimerBar>

      <Footer />
    </div>
  );
}
