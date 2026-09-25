import BannerSection from "@/components/bannerSection";
import Footer from "@/components/footer";
import ComparisonArticleContent from "@/components/comparisons/comparisonContent";
import ScopeBreadcrumbs from "@/components/scope/ScopeBreadcrumbs";
import ScopeDisclaimerBar from "@/components/scope/ScopeDisclaimerBar";
import ScopeFaqsSection from "@/components/scope/ScopeFaqsSection";
import ScopePageMetaStrip from "@/components/scope/ScopePageMetaStrip";
import ScopePageJsonLd, {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
} from "@/components/scope/ScopePageJsonLd";
import {
  COMPARISONS,
  getAllComparisonSlugs,
  getComparisonBySlug,
} from "@/data/comparisons";
import {
  AcademicCapIcon,
  BookOpenIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllComparisonSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const comparison = getComparisonBySlug(slug);
  if (!comparison) {
    return { title: "Comparison not found" };
  }
  const url = `https://www.primeidea.in/comparisons/${comparison.slug}`;
  return {
    title: comparison.title,
    description: comparison.metaDescription,
    keywords: comparison.keywords,
    author: "Partha Shah",
    robots: "index, follow",
    openGraph: {
      type: "article",
      locale: "en_IE",
      url,
      site_name: "PrimeIdea Ventures",
      title: `${comparison.title} | PrimeIdea Ventures`,
      description: comparison.metaDescription,
    },
    twitter: {
      handle: "@primeidea",
      site: "@primeidea",
      cardType: "summary_large_image",
    },
    alternates: {
      canonical: url,
      languages: {
        "en-US": url,
      },
    },
  };
}

export default async function ComparisonPage({ params }) {
  const { slug } = await params;
  const comparison = getComparisonBySlug(slug);
  if (!comparison) notFound();

  const PAGE_PATH = `/comparisons/${comparison.slug}`;
  const PAGE_URL = `https://www.primeidea.in${PAGE_PATH}`;

  const faqs = (comparison.faqs || []).map((faq) => ({
    ...faq,
    plainText: faq.answer,
  }));

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: comparison.h1,
    description: comparison.metaDescription,
    url: PAGE_URL,
    author: {
      "@type": "Person",
      name: "Partha Shah",
    },
    publisher: {
      "@type": "Organization",
      name: "PrimeIdea Ventures",
      url: "https://www.primeidea.in",
    },
    about: comparison.columns.map((c) => c.name),
  };

  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { name: "Comparisons", url: "/comparisons" },
    { name: comparison.shortTitle, url: PAGE_PATH },
  ]);
  const faqSchema = faqs.length ? buildFaqJsonLd(faqs) : null;

  return (
    <div className="bg-[#F6FDFF]">
      <ScopePageJsonLd
        data={[articleSchema, breadcrumbSchema, faqSchema].filter(Boolean)}
      />

      <BannerSection
        mainBannerImage="/images/home/banner.png"
        bannerRightImg="/images/home/banner-right.png"
        mainTitle={comparison.h1}
        mainSubTitle={`${comparison.summary} Guided by Partha Shah, SEBI Registered Research Analyst INH000017815. Educational only. No guaranteed returns.`}
        mainLinkTitle="Book Portfolio Review"
        mainLink="/book-portfolio-review"
        usePrimaryAsLink={true}
        formTitle="Book Portfolio Review"
        secondaryLinkTitle="All comparisons"
        secondaryLink="/comparisons"
      />

      <ScopePageMetaStrip
        stats={[
          { label: "Guide type", value: "Education", Icon: AcademicCapIcon },
          {
            label: "Topics",
            value: `${comparison.columns.length} compared`,
            Icon: ScaleIcon,
          },
          {
            label: "Library",
            value: `${COMPARISONS.length} guides`,
            Icon: BookOpenIcon,
          },
        ]}
        disclaimer="Educational comparison only — not personalised advice or a product offer. Market risks apply. PrimeIdea Ventures does not guarantee returns."
      />

      <ScopeBreadcrumbs
        items={[
          { label: "Comparisons", href: "/comparisons" },
          { label: comparison.shortTitle },
        ]}
      />

      <ComparisonArticleContent comparison={comparison} />

      {faqs.length ? (
        <ScopeFaqsSection
          title={`${comparison.shortTitle} — Frequently Asked Questions`}
          description="Short answers for investors comparing roles or products."
          faqs={faqs}
        />
      ) : null}

      <ScopeDisclaimerBar ctaHref="/book-portfolio-review" ctaLabel="Book Portfolio Review">
        Educational content only. Investments in the securities market are subject to market
        risks. Read all scheme / offer documents carefully. PrimeIdea Ventures does not
        guarantee returns. Partha Shah is a SEBI Registered Research Analyst (INH000017815).
        PrimeIdea does not act as a SEBI Registered Investment Adviser unless separately
        registered.
      </ScopeDisclaimerBar>

      <Footer />
    </div>
  );
}
