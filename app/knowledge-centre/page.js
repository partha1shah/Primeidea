import BannerSection from "@/components/bannerSection";
import Footer from "@/components/footer";
import KnowledgeCentreContent from "@/components/knowledgeCentre/knowledgeCentreContent";
import ScopeBreadcrumbs from "@/components/scope/ScopeBreadcrumbs";
import ScopeDisclaimerBar from "@/components/scope/ScopeDisclaimerBar";
import ScopeFaqsSection from "@/components/scope/ScopeFaqsSection";
import ScopePageMetaStrip from "@/components/scope/ScopePageMetaStrip";
import ScopePageJsonLd, {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
} from "@/components/scope/ScopePageJsonLd";
import { getPostList } from "@/lib/posts";
import {
  AcademicCapIcon,
  BookOpenIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

const PAGE_PATH = "/knowledge-centre";
const PAGE_URL = `https://www.primeidea.in${PAGE_PATH}`;

const faqs = [
  {
    question: "What is the PrimeIdea Knowledge Centre?",
    answer:
      "It is the education hub for blogs, research notes, market outlooks, portfolio checklists, FAQs, downloadable guides, seminar materials, and periodic planning notes. It supports research-led understanding — not guaranteed returns.",
    plainText:
      "It is the education hub for blogs, research notes, market outlooks, portfolio checklists, FAQs, downloadable guides, seminar materials, and periodic planning notes. It supports research-led understanding — not guaranteed returns.",
  },
  {
    question: "Are Knowledge Centre articles the same as Research Reports?",
    answer:
      "No. General blogs and education notes live in the Knowledge Centre and blog library. Dedicated research reports (market outlook PDFs, category notes, strategy notes) live in the Research Reports library at /research-reports.",
    plainText:
      "No. General blogs and education notes live in the Knowledge Centre and blog library. Dedicated research reports (market outlook PDFs, category notes, strategy notes) live in the Research Reports library at /research-reports.",
  },
  {
    question: "Who reviews Knowledge Centre content?",
    answer:
      "Educational content is aligned with PrimeIdea’s research process guided by Partha Shah, SEBI Registered Research Analyst INH000017815. Investors should verify registration independently.",
    plainText:
      "Educational content is aligned with PrimeIdea’s research process guided by Partha Shah, SEBI Registered Research Analyst INH000017815. Investors should verify registration independently.",
  },
  {
    question: "Does Knowledge Centre content guarantee investment returns?",
    answer:
      "No. Investments in the securities market are subject to market risks. PrimeIdea Ventures does not guarantee returns. Articles and notes are educational and illustrative only.",
    plainText:
      "No. Investments in the securities market are subject to market risks. PrimeIdea Ventures does not guarantee returns. Articles and notes are educational and illustrative only.",
  },
  {
    question: "Is this SEBI Registered Investment Adviser advice?",
    answer:
      "No. PrimeIdea operates under SEBI Registered Research Analyst registration. It does not present itself as a SEBI Registered Investment Adviser unless separately registered.",
    plainText:
      "No. PrimeIdea operates under SEBI Registered Research Analyst registration. It does not present itself as a SEBI Registered Investment Adviser unless separately registered.",
  },
  {
    question: "How do I go from learning to a portfolio review?",
    answer:
      "Use the Knowledge Centre and Wealth Tools to frame questions, then book a portfolio review or upload holdings so suitability, overlaps, allocation, and next steps can be assessed.",
    plainText:
      "Use the Knowledge Centre and Wealth Tools to frame questions, then book a portfolio review or upload holdings so suitability, overlaps, allocation, and next steps can be assessed.",
  },
];

export const metadata = {
  title: "Knowledge Centre",
  description:
    "PrimeIdea Ventures Knowledge Centre — blogs, research notes, market outlooks, portfolio checklists, FAQs, guides, and investor education. Research process guided by Partha Shah, SEBI Registered Research Analyst INH000017815. Educational content only; no guaranteed returns.",
  keywords:
    "Knowledge Centre PrimeIdea, investor education Vadodara, financial blogs Gujarat, portfolio checklist, SEBI RA INH000017815, Partha Shah",
  author: "Partha Shah",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: PAGE_URL,
    site_name: "PrimeIdea Ventures",
    title: "Knowledge Centre | PrimeIdea Ventures",
    description:
      "Research-led investor education: blogs, notes, checklists, FAQs, and guides. No guaranteed returns.",
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
  name: "Knowledge Centre",
  description:
    "PrimeIdea Ventures Knowledge Centre for research-led investor education. Educational content only. Market risks apply.",
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
  { name: "Knowledge Centre", url: PAGE_PATH },
]);
const faqSchema = buildFaqJsonLd(faqs);

async function getLatestPosts() {
  try {
    const allPosts = await getPostList();
    return allPosts?.nodes || [];
  } catch {
    return [];
  }
}

export default async function KnowledgeCentrePage() {
  const posts = await getLatestPosts();

  return (
    <div className="bg-[#F6FDFF]">
      <ScopePageJsonLd data={[webPageSchema, breadcrumbSchema, faqSchema]} />

      <BannerSection
        mainBannerImage="/images/home/banner.png"
        bannerRightImg="/images/home/banner-right.png"
        mainTitle="Knowledge Centre"
        mainSubTitle="Blogs, research notes, market outlooks, portfolio checklists, FAQs, downloadable guides, and seminar materials — research-led investor education for Vadodara, Gujarat, and India. Guided by Partha Shah, SEBI Registered Research Analyst INH000017815. Educational content only. No guaranteed returns."
        mainLinkTitle="Explore Library"
        mainLink="#library"
        usePrimaryAsLink={true}
        formTitle="Book Portfolio Review"
        secondaryLinkTitle="Browse Blogs"
        secondaryLink="/blogs"
      />

      <ScopePageMetaStrip
        stats={[
          { label: "Hub type", value: "Investor education", Icon: AcademicCapIcon },
          { label: "Content", value: "Notes · guides · FAQs", Icon: BookOpenIcon },
          { label: "Registration No.", value: "INH000017815", Icon: CheckBadgeIcon },
        ]}
        disclaimer="Knowledge Centre materials are educational and illustrative. They do not constitute investment advice, research recommendations for a specific security, or guaranteed returns. Investments in the securities market are subject to market risks. PrimeIdea Ventures does not present itself as a SEBI Registered Investment Adviser unless separately registered."
      />

      <ScopeBreadcrumbs items={[{ label: "Knowledge Centre" }]} />

      <KnowledgeCentreContent posts={posts} />

      <div id="knowledge-faqs">
        <ScopeFaqsSection
          title="Knowledge Centre — Frequently Asked Questions"
          description="How the education hub is organised, how it differs from research reports, and how to continue with a portfolio review."
          faqs={faqs}
        />
      </div>

      <ScopeDisclaimerBar ctaHref="/portfolio-review" ctaLabel="Book Portfolio Review">
        Knowledge Centre content is for investor education only. Investments in the
        securities market are subject to market risks. PrimeIdea Ventures does not
        guarantee returns. Partha Shah is a SEBI Registered Research Analyst
        (INH000017815). PrimeIdea does not act as a SEBI Registered Investment Adviser
        unless separately registered. Investors should verify registration independently
        and read all scheme-related documents carefully before investing.
      </ScopeDisclaimerBar>

      <Footer />
    </div>
  );
}
