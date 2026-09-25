import BannerSection from "@/components/bannerSection";
import Footer from "@/components/footer";
import ResearchProcessContent from "@/components/researchProcess/researchProcessContent";
import ScopeBreadcrumbs from "@/components/scope/ScopeBreadcrumbs";
import ScopeDisclaimerBar from "@/components/scope/ScopeDisclaimerBar";
import ScopeFaqsSection from "@/components/scope/ScopeFaqsSection";
import ScopePageMetaStrip from "@/components/scope/ScopePageMetaStrip";
import ScopePageJsonLd, {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
} from "@/components/scope/ScopePageJsonLd";
import {
  BeakerIcon,
  CheckBadgeIcon,
  QueueListIcon,
} from "@heroicons/react/24/outline";

const PAGE_PATH = "/research-process";
const PAGE_URL = `https://www.primeidea.in${PAGE_PATH}`;

const faqs = [
  {
    question: "What is PrimeIdea’s research process?",
    answer:
      "It is a five-step, research-led review: understand goals, map holdings, assess risk and allocation, share process-first recommendations, then implement and monitor. It is not a product-push or guaranteed-return process.",
    plainText:
      "It is a five-step, research-led review: understand goals, map holdings, assess risk and allocation, share process-first recommendations, then implement and monitor. It is not a product-push or guaranteed-return process.",
  },
  {
    question: "Who leads the research?",
    answer:
      "The research process is guided by Partha Shah, SEBI Registered Research Analyst INH000017815. Investors should verify registration independently.",
    plainText:
      "The research process is guided by Partha Shah, SEBI Registered Research Analyst INH000017815. Investors should verify registration independently.",
  },
  {
    question: "What does a portfolio review include?",
    answer:
      "A structured review covers asset allocation, fund overlap, sector exposure, risk-adjusted metrics, tax and cost, insurance adequacy, emergency funds, and goal alignment.",
    plainText:
      "A structured review covers asset allocation, fund overlap, sector exposure, risk-adjusted metrics, tax and cost, insurance adequacy, emergency funds, and goal alignment.",
  },
  {
    question: "Does the research process guarantee returns?",
    answer:
      "No. Investments in securities market are subject to market risks. PrimeIdea does not guarantee returns or market-beating performance.",
    plainText:
      "No. Investments in securities market are subject to market risks. PrimeIdea does not guarantee returns or market-beating performance.",
  },
  {
    question: "Is this the same as SEBI Registered Investment Adviser advice?",
    answer:
      "No. PrimeIdea operates under SEBI Registered Research Analyst registration. It does not present itself as a SEBI Registered Investment Adviser unless separately registered.",
    plainText:
      "No. PrimeIdea operates under SEBI Registered Research Analyst registration. It does not present itself as a SEBI Registered Investment Adviser unless separately registered.",
  },
  {
    question: "How do I start?",
    answer:
      "Book a portfolio review. Share your current holdings and goals so the process can assess suitability, overlaps, allocation, and next steps.",
    plainText:
      "Book a portfolio review. Share your current holdings and goals so the process can assess suitability, overlaps, allocation, and next steps.",
  },
];

export const metadata = {
  title: "Research Process",
  description:
    "PrimeIdea Ventures helps investors with a research-led portfolio review process guided by Partha Shah, SEBI Registered Research Analyst INH000017815 — suitability, allocation, and risk first, without guaranteed returns.",
  keywords:
    "PrimeIdea research process, portfolio review framework, SEBI RA INH000017815, Partha Shah, asset allocation review",
  author: "Partha Shah",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: PAGE_URL,
    site_name: "PrimeIdea Ventures",
    title: "Research Process | PrimeIdea Ventures",
    description:
      "PrimeIdea Ventures helps investors with a research-led portfolio review process guided by Partha Shah, SEBI Registered Research Analyst INH000017815 — suitability, allocation, and risk first, without guaranteed returns.",
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
  name: "PrimeIdea Research Process",
  description:
    "Research-led portfolio review process guided by Partha Shah, SEBI Registered Research Analyst INH000017815.",
  provider: {
    "@type": "FinancialService",
    name: "PrimeIdea Ventures",
    url: "https://www.primeidea.in",
  },
  areaServed: ["Vadodara", "Gujarat", "India"],
  url: PAGE_URL,
};

const breadcrumbSchema = buildBreadcrumbJsonLd([
  { name: "Research Process", url: PAGE_PATH },
]);

const faqSchema = buildFaqJsonLd(faqs);

export default function ResearchProcessPage() {
  return (
    <div className="bg-[#F6FDFF]">
      <ScopePageJsonLd data={[serviceSchema, breadcrumbSchema, faqSchema]} />

      <BannerSection
        mainBannerImage="/images/home/banner.png"
        bannerRightImg="/images/home/banner-right.png"
        mainTitle="PrimeIdea Research Process"
        mainSubTitle="A structured, research-led portfolio review process: suitability, risk, overlap, and allocation first — guided by Partha Shah, SEBI Registered Research Analyst INH000017815. No product pushing. No guaranteed returns."
        mainLinkTitle="Book Portfolio Review"
        mainLink="/portfolio-review"
        usePrimaryAsLink={true}
        formTitle="Book Portfolio Review"
        secondaryLinkTitle="View Framework"
        secondaryLink="#review-framework"
      />

      <ScopePageMetaStrip
        stats={[
          { label: "Process", value: "5 steps", Icon: QueueListIcon },
          { label: "Led by", value: "SEBI RA", Icon: BeakerIcon },
          { label: "Registration No.", value: "INH000017815", Icon: CheckBadgeIcon },
        ]}
        disclaimer="The research process is for structured review and analysis. Investments in securities market are subject to market risks. PrimeIdea Ventures does not guarantee returns and does not present itself as a SEBI Registered Investment Adviser unless separately registered."
      />

      <ScopeBreadcrumbs items={[{ label: "Research Process" }]} />

      <ResearchProcessContent />

      <ScopeFaqsSection
        title="Research process — Frequently Asked Questions"
        description="How the process works, what a review covers, and how to start."
        faqs={faqs}
      />

      <ScopeDisclaimerBar ctaHref="/portfolio-review" ctaLabel="Book Portfolio Review">
        Investments in securities market are subject to market risks. PrimeIdea Ventures does
        not guarantee returns. Partha Shah is a SEBI Registered Research Analyst
        (INH000017815). PrimeIdea does not act as a SEBI Registered Investment Adviser unless
        separately registered. Investors should verify registration independently and read
        all scheme-related documents carefully before investing.
      </ScopeDisclaimerBar>

      <Footer />
    </div>
  );
}
