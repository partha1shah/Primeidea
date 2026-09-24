import BannerSection from "@/components/bannerSection";
import Footer from "@/components/footer";
import WealthToolsContent from "@/components/wealthTools/wealthToolsContent";
import ScopeBreadcrumbs from "@/components/scope/ScopeBreadcrumbs";
import ScopeDisclaimerBar from "@/components/scope/ScopeDisclaimerBar";
import ScopeFaqsSection from "@/components/scope/ScopeFaqsSection";
import ScopePageMetaStrip from "@/components/scope/ScopePageMetaStrip";
import ScopePageJsonLd, {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
} from "@/components/scope/ScopePageJsonLd";
import {
  CalculatorIcon,
  CheckBadgeIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";
import { Suspense } from "react";

const PAGE_PATH = "/wealth-tools";
const PAGE_URL = `https://primeidea.in${PAGE_PATH}`;

const faqs = [
  {
    question: "What are PrimeIdea Wealth Tools?",
    answer:
      "They are free planning calculators for SIP growth, lumpsum value, retirement corpus, education goals, insurance need, asset allocation, emergency funds, SWP, CAGR/XIRR, and EMI versus investment trade-offs. Outputs are illustrative estimates only.",
    plainText:
      "They are free planning calculators for SIP growth, lumpsum value, retirement corpus, education goals, insurance need, asset allocation, emergency funds, SWP, CAGR/XIRR, and EMI versus investment trade-offs. Outputs are illustrative estimates only.",
  },
  {
    question: "Do calculator results guarantee returns or corpus size?",
    answer:
      "No. Results depend on the assumptions you enter. Investments in the securities market are subject to market risks. PrimeIdea Ventures does not guarantee returns.",
    plainText:
      "No. Results depend on the assumptions you enter. Investments in the securities market are subject to market risks. PrimeIdea Ventures does not guarantee returns.",
  },
  {
    question: "Are these tools the same as investment advice?",
    answer:
      "No. Calculators are educational planning utilities. Suitability-based next steps come through a research-led portfolio review. PrimeIdea operates under SEBI Registered Research Analyst registration and does not present itself as a SEBI Registered Investment Adviser unless separately registered.",
    plainText:
      "No. Calculators are educational planning utilities. Suitability-based next steps come through a research-led portfolio review. PrimeIdea operates under SEBI Registered Research Analyst registration and does not present itself as a SEBI Registered Investment Adviser unless separately registered.",
  },
  {
    question: "Who guides the research process behind portfolio reviews?",
    answer:
      "The research process is guided by Partha Shah, SEBI Registered Research Analyst INH000017815. Investors should verify registration independently.",
    plainText:
      "The research process is guided by Partha Shah, SEBI Registered Research Analyst INH000017815. Investors should verify registration independently.",
  },
  {
    question: "How should I use a calculator result?",
    answer:
      "Treat it as a starting range. Adjust assumptions, note the disclaimer, then book a portfolio review so holdings, risk, tax, and goals can be reviewed together.",
    plainText:
      "Treat it as a starting range. Adjust assumptions, note the disclaimer, then book a portfolio review so holdings, risk, tax, and goals can be reviewed together.",
  },
  {
    question: "Can investors outside Vadodara use these tools?",
    answer:
      "Yes. The tools are available online. PrimeIdea is Vadodara-based and serves investors across Gujarat and India through office and video consultation models. It does not claim offices in other cities.",
    plainText:
      "Yes. The tools are available online. PrimeIdea is Vadodara-based and serves investors across Gujarat and India through office and video consultation models. It does not claim offices in other cities.",
  },
];

export const metadata = {
  title: "Wealth Tools",
  description:
    "PrimeIdea Ventures Wealth Tools — SIP, lumpsum, retirement corpus, education, insurance need, asset allocation, emergency fund, SWP, CAGR/XIRR, and EMI vs investment calculators. Illustrative estimates only. Research process guided by Partha Shah, SEBI Registered Research Analyst INH000017815.",
  keywords:
    "wealth tools, SIP calculator, retirement corpus calculator, SWP calculator, portfolio planning tools Vadodara, PrimeIdea Ventures, Partha Shah SEBI RA INH000017815",
  author: "Partha Shah",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: PAGE_URL,
    site_name: "PrimeIdea Ventures",
    title: "Wealth Tools | PrimeIdea Ventures",
    description:
      "Practical wealth calculators with clear assumptions, results, CTAs, and disclaimers. Illustrative only — no guaranteed returns.",
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

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Wealth Tools",
  description:
    "Illustrative wealth planning calculators from PrimeIdea Ventures. Not investment advice. Market risks apply.",
  url: PAGE_URL,
  isPartOf: {
    "@type": "WebSite",
    name: "PrimeIdea Ventures",
    url: "https://primeidea.in",
  },
  about: {
    "@type": "FinancialService",
    name: "PrimeIdea Ventures",
    url: "https://primeidea.in",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vadodara",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
  },
};

const breadcrumbSchema = buildBreadcrumbJsonLd([
  { name: "Wealth Tools", url: PAGE_PATH },
]);
const faqSchema = buildFaqJsonLd(faqs);

export default function WealthToolsPage() {
  return (
    <div className="bg-[#F6FDFF]">
      <ScopePageJsonLd data={[webPageSchema, breadcrumbSchema, faqSchema]} />

      <BannerSection
        mainBannerImage="/images/home/banner.png"
        bannerRightImg="/images/home/banner-right.png"
        mainTitle="Wealth Tools"
        mainSubTitle="Practical calculators to explore SIP growth, corpus needs, insurance cover, allocation starting points, and withdrawal trade-offs — then continue with a research-led portfolio review. Outputs are illustrative estimates only. Guided by Partha Shah, SEBI Registered Research Analyst INH000017815. No guaranteed returns."
        mainLinkTitle="Book Portfolio Review"
        mainLink="/portfolio-review-vadodara"
        usePrimaryAsLink={true}
        formTitle="Book Portfolio Review"
        secondaryLinkTitle="Open Calculators"
        secondaryLink="/wealth-tools?tab=calculators"
      />

      <ScopePageMetaStrip
        stats={[
          { label: "Tool type", value: "Planning calculators", Icon: CalculatorIcon },
          { label: "Purpose", value: "Illustrative estimates", Icon: LightBulbIcon },
          { label: "Registration No.", value: "INH000017815", Icon: CheckBadgeIcon },
        ]}
        disclaimer="Calculator outputs depend on your assumptions and do not constitute advice or guaranteed returns. Investments in the securities market are subject to market risks. PrimeIdea Ventures does not present itself as a SEBI Registered Investment Adviser unless separately registered."
      />

      <ScopeBreadcrumbs items={[{ label: "Wealth Tools" }]} />

      <Suspense fallback={<div className="py-20 text-center text-[#6B7C8A]">Loading wealth tools…</div>}>
        <WealthToolsContent />
      </Suspense>

      <ScopeFaqsSection
        title="Wealth Tools — Frequently Asked Questions"
        description="How to use these calculators, what they are not, and how to continue with a portfolio review."
        faqs={faqs}
      />

      <ScopeDisclaimerBar ctaHref="/portfolio-review-vadodara" ctaLabel="Book Portfolio Review">
        Wealth Tools provide illustrative estimates only. Investments in the securities market
        are subject to market risks. PrimeIdea Ventures does not guarantee returns, corpus size,
        insurance adequacy, or withdrawal sustainability. Partha Shah is a SEBI Registered
        Research Analyst (INH000017815). PrimeIdea does not act as a SEBI Registered Investment
        Adviser unless separately registered. Investors should verify registration independently
        and read all scheme-related documents carefully before investing.
      </ScopeDisclaimerBar>

      <Footer />
    </div>
  );
}
