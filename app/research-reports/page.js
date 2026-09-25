import BannerSection from "@/components/bannerSection";
import Footer from "@/components/footer";
import ResearchReportsContent from "@/components/researchReports/researchReportsContent";
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
  DocumentTextIcon,
  FolderOpenIcon,
} from "@heroicons/react/24/outline";

const PAGE_PATH = "/research-reports";
const PAGE_URL = `https://www.primeidea.in${PAGE_PATH}`;

const faqs = [
  {
    question: "What is the PrimeIdea Research Reports library?",
    answer:
      "It is a dedicated library for research and education PDFs — monthly market outlooks, equity notes, mutual fund category notes, fixed income notes, asset allocation notes, sector research, portfolio strategy notes, and SIF/PMS/AIF education notes. It is separate from general blogs.",
    plainText:
      "It is a dedicated library for research and education PDFs — monthly market outlooks, equity notes, mutual fund category notes, fixed income notes, asset allocation notes, sector research, portfolio strategy notes, and SIF/PMS/AIF education notes. It is separate from general blogs.",
  },
  {
    question: "How is this different from the Knowledge Centre or blogs?",
    answer:
      "Knowledge Centre and blogs cover broader investor education articles and guides. Research Reports is reserved for structured research/education PDFs and notes that belong in a report catalogue.",
    plainText:
      "Knowledge Centre and blogs cover broader investor education articles and guides. Research Reports is reserved for structured research/education PDFs and notes that belong in a report catalogue.",
  },
  {
    question: "Do research reports guarantee returns?",
    answer:
      "No. Investments in the securities market are subject to market risks. PrimeIdea Ventures does not guarantee returns. Reports are educational and illustrative only.",
    plainText:
      "No. Investments in the securities market are subject to market risks. PrimeIdea Ventures does not guarantee returns. Reports are educational and illustrative only.",
  },
  {
    question: "Who guides the research behind these notes?",
    answer:
      "The research process is guided by Partha Shah, SEBI Registered Research Analyst INH000017815. Investors should verify registration independently.",
    plainText:
      "The research process is guided by Partha Shah, SEBI Registered Research Analyst INH000017815. Investors should verify registration independently.",
  },
  {
    question: "Why do some reports say On request?",
    answer:
      "Some editions are shared on request so the latest approved PDF can be provided. Use the request link to contact the team for the current note.",
    plainText:
      "Some editions are shared on request so the latest approved PDF can be provided. Use the request link to contact the team for the current note.",
  },
  {
    question: "Is this SEBI Registered Investment Adviser advice?",
    answer:
      "No. PrimeIdea operates under SEBI Registered Research Analyst registration. It does not present itself as a SEBI Registered Investment Adviser unless separately registered.",
    plainText:
      "No. PrimeIdea operates under SEBI Registered Research Analyst registration. It does not present itself as a SEBI Registered Investment Adviser unless separately registered.",
  },
];

export const metadata = {
  title: "PrimeIdea Research Reports",
  description:
    "PrimeIdea Research Reports — monthly market outlook, equity notes, mutual fund category notes, fixed income, asset allocation, sector research, portfolio strategy, and SIF/PMS/AIF education notes. Separate from blogs. Guided by Partha Shah, SEBI Registered Research Analyst INH000017815. Educational only; no guaranteed returns.",
  keywords:
    "PrimeIdea research reports, market outlook PDF, mutual fund category notes, portfolio strategy notes, SEBI RA INH000017815, Partha Shah",
  author: "Partha Shah",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: PAGE_URL,
    site_name: "PrimeIdea Ventures",
    title: "PrimeIdea Research Reports | PrimeIdea Ventures",
    description:
      "Dedicated research report library — separate from blogs. Educational notes only. No guaranteed returns.",
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
  "@type": "CollectionPage",
  name: "PrimeIdea Research Reports",
  description:
    "Dedicated research report library from PrimeIdea Ventures. Separate from blogs. Educational content only. Market risks apply.",
  url: PAGE_URL,
  isPartOf: {
    "@type": "WebSite",
    name: "PrimeIdea Ventures",
    url: "https://www.primeidea.in",
  },
  about: {
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
};

const breadcrumbSchema = buildBreadcrumbJsonLd([
  { name: "Research Reports", url: PAGE_PATH },
]);
const faqSchema = buildFaqJsonLd(faqs);

export default function ResearchReportsPage() {
  return (
    <div className="bg-[#F6FDFF]">
      <ScopePageJsonLd data={[webPageSchema, breadcrumbSchema, faqSchema]} />

      <BannerSection
        mainBannerImage="/images/home/banner.png"
        bannerRightImg="/images/home/banner-right.png"
        mainTitle="PrimeIdea Research Reports"
        mainSubTitle="Monthly market outlook, equity notes, mutual fund category notes, fixed income, asset allocation, sector research, portfolio strategy, and SIF/PMS/AIF education notes — downloadable research PDFs separate from general blogs. Guided by Partha Shah, SEBI Registered Research Analyst INH000017815. Educational content only. No guaranteed returns."
        mainLinkTitle="Browse Report Library"
        mainLink="#report-library"
        usePrimaryAsLink={true}
        formTitle="Book Portfolio Review"
        secondaryLinkTitle="View Research Process"
        secondaryLink="/research-process"
      />

      <ScopePageMetaStrip
        stats={[
          { label: "Library type", value: "Research PDFs", Icon: FolderOpenIcon },
          { label: "Separate from", value: "General blogs", Icon: DocumentTextIcon },
          { label: "Registration No.", value: "INH000017815", Icon: CheckBadgeIcon },
        ]}
        disclaimer="Research reports are educational and illustrative. They do not constitute investment advice for a specific security or guaranteed returns. Investments in the securities market are subject to market risks. PrimeIdea Ventures does not present itself as a SEBI Registered Investment Adviser unless separately registered."
      />

      <ScopeBreadcrumbs items={[{ label: "Research Reports" }]} />

      <ResearchReportsContent />

      <ScopeFaqsSection
        title="Research Reports — Frequently Asked Questions"
        description="How this library differs from blogs, what report types are covered, and how to request the latest PDF."
        faqs={faqs}
      />

      <ScopeDisclaimerBar ctaHref="/portfolio-review" ctaLabel="Book Portfolio Review">
        Research Reports content is for investor education only. Investments in the
        securities market are subject to market risks. PrimeIdea Ventures does not
        guarantee returns. Partha Shah is a SEBI Registered Research Analyst
        (INH000017815). PrimeIdea does not act as a SEBI Registered Investment Adviser
        unless separately registered. Investors should verify registration independently
        and read all scheme-related documents carefully before investing. SIF/PMS/AIF
        notes are educational and not a product offer.
      </ScopeDisclaimerBar>

      <Footer />
    </div>
  );
}
