import BannerSection from "@/components/bannerSection";
import ClientTestimonial from "@/components/clientTestimonial";
import Footer from "@/components/footer";
import InsightsSection from "@/components/insightsSection";
import ResearchBasedWmContent from "@/components/researchWelathManagement/researchBasedWmContent";
import ScopeBreadcrumbs from "@/components/scope/ScopeBreadcrumbs";
import ScopeDisclaimerBar from "@/components/scope/ScopeDisclaimerBar";
import ScopeFaqsSection from "@/components/scope/ScopeFaqsSection";
import ScopePageMetaStrip from "@/components/scope/ScopePageMetaStrip";
import ScopePageJsonLd, {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
} from "@/components/scope/ScopePageJsonLd";
import graphqlRequest from "@/lib/graphqlRequest";
import {
  BeakerIcon,
  CheckBadgeIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";

const PAGE_PATH = "/research-based-wealth-management";
const PAGE_URL = `https://www.primeidea.in${PAGE_PATH}/`;

const faqs = [
  {
    question: "What is research-based wealth management at PrimeIdea?",
    answer:
      "It is wealth management that starts with a structured portfolio review — suitability, overlap, allocation, and risk — guided by Partha Shah, SEBI Registered Research Analyst INH000017815. It is not a product-push process and does not guarantee returns.",
    plainText:
      "It is wealth management that starts with a structured portfolio review — suitability, overlap, allocation, and risk — guided by Partha Shah, SEBI Registered Research Analyst INH000017815. It is not a product-push process and does not guarantee returns.",
  },
  {
    question: "How is this different from a sales-only approach?",
    answer:
      "Holdings are reviewed first. Mutual fund and equity support follows the research process, not recent popularity or a product list.",
    plainText:
      "Holdings are reviewed first. Mutual fund and equity support follows the research process, not recent popularity or a product list.",
  },
  {
    question: "Who leads the research?",
    answer:
      "The research process is guided by Partha Shah, SEBI Registered Research Analyst INH000017815. Investors should verify registration independently.",
    plainText:
      "The research process is guided by Partha Shah, SEBI Registered Research Analyst INH000017815. Investors should verify registration independently.",
  },
  {
    question: "Does research-based wealth management guarantee growth?",
    answer:
      "No. Investments in securities market are subject to market risks. PrimeIdea does not guarantee returns or market-beating performance.",
    plainText:
      "No. Investments in securities market are subject to market risks. PrimeIdea does not guarantee returns or market-beating performance.",
  },
  {
    question: "Is this SEBI Registered Investment Adviser advice?",
    answer:
      "No. PrimeIdea operates under SEBI Registered Research Analyst registration. It does not present itself as a SEBI Registered Investment Adviser unless separately registered.",
    plainText:
      "No. PrimeIdea operates under SEBI Registered Research Analyst registration. It does not present itself as a SEBI Registered Investment Adviser unless separately registered.",
  },
  {
    question: "How do I start?",
    answer:
      "Book a portfolio review or upload current holdings. Share your goals so the process can assess suitability, overlaps, allocation, and next steps.",
    plainText:
      "Book a portfolio review or upload current holdings. Share your goals so the process can assess suitability, overlaps, allocation, and next steps.",
  },
];

export const metadata = {
  title: "Research-Based Wealth Management",
  description:
    "PrimeIdea Ventures helps investors with research-based wealth management through a research-led process guided by Partha Shah, SEBI Registered Research Analyst INH000017815 — portfolio review, mutual funds, and equity support without guaranteed returns.",
  keywords:
    "research-based wealth management, portfolio review, SEBI RA INH000017815, Partha Shah, mutual fund review, equity research support, PrimeIdea Ventures",
  author: "Partha Shah",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: PAGE_URL,
    site_name: "PrimeIdea Ventures",
    title: "Research-Based Wealth Management | PrimeIdea Ventures",
    description:
      "PrimeIdea Ventures helps investors with research-based wealth management through a research-led process guided by Partha Shah, SEBI Registered Research Analyst INH000017815.",
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
  name: "Research-Based Wealth Management",
  description:
    "Research-led wealth management and portfolio review guided by Partha Shah, SEBI Registered Research Analyst INH000017815.",
  provider: {
    "@type": "FinancialService",
    name: "PrimeIdea Ventures",
    url: "https://www.primeidea.in",
  },
  areaServed: ["Vadodara", "Gujarat", "India"],
  url: PAGE_URL,
};

const breadcrumbSchema = buildBreadcrumbJsonLd([
  { name: "Research-Based Wealth Management", url: PAGE_PATH },
]);
const faqSchema = buildFaqJsonLd(faqs);

async function getWealthPosts() {
  try {
    const query = {
      query: `query getPostListByCategory($categorySlug: String!) {
          posts(where: {categoryName: $categorySlug, orderby: {field: DATE, order: DESC}}) {
              nodes {
                  date
                  slug
                  title
                  excerpt(format: RENDERED)
                  featuredImage {
                      node {
                          uri
                          sourceUrl
                          mediaDetails {
                              file
                              sizes {
                                  sourceUrl
                                  width
                                  height
                              }
                          }
                      }
                  }
                  categories {
                      nodes {
                          name
                          slug
                      }
                  }
                  author {
                      node {
                          avatar {
                              url
                          }
                          name
                      }
                  }
              }
          }
      }`,
      variables: { categorySlug: "Wealth Management" },
    };
    const data = await graphqlRequest(query);
    return data?.data?.posts?.nodes || [];
  } catch (error) {
    console.error("Wealth management posts error:", error);
    return [];
  }
}

export default async function ResearchBasedWealthManagementPage() {
  const posts = await getWealthPosts();

  return (
    <div className="bg-[#F6FDFF]">
      <ScopePageJsonLd data={[serviceSchema, breadcrumbSchema, faqSchema]} />

      <BannerSection
        mainBannerImage="/images/research-wealth-management/banner.png"
        bannerRightImg="/images/research-wealth-management/bannerright.png"
        mainTitle="Research-Based Wealth Management"
        mainSubTitle="A research-led approach to mutual funds, equity, and portfolio construction — guided by Partha Shah, SEBI Registered Research Analyst INH000017815. Suitability, risk, and allocation first. No product pushing. No guaranteed returns."
        mainLinkTitle="Book Portfolio Review"
        mainLink="/portfolio-review"
        usePrimaryAsLink={true}
        formTitle="Book Portfolio Review"
        secondaryLinkTitle="View Research Process"
        secondaryLink="/research-process"
      />

      <ScopePageMetaStrip
        stats={[
          { label: "Approach", value: "Research-led", Icon: BeakerIcon },
          { label: "Led by", value: "SEBI RA", Icon: CheckBadgeIcon },
          { label: "Starts with", value: "Portfolio review", Icon: ClipboardDocumentCheckIcon },
        ]}
        disclaimer="Research-based wealth management is a structured review and analysis process. Investments in securities market are subject to market risks. PrimeIdea Ventures does not guarantee returns and does not present itself as a SEBI Registered Investment Adviser unless separately registered."
      />

      <ScopeBreadcrumbs items={[{ label: "Research-Based Wealth Management" }]} />

      <ResearchBasedWmContent />

      {posts.length > 0 && <InsightsSection blogsListing={posts} />}

      <ScopeFaqsSection
        title="Research-based wealth management — FAQs"
        description="How this service works, who leads research, and how to start a review."
        faqs={faqs}
      />

      <ClientTestimonial />

      <ScopeDisclaimerBar ctaHref="/portfolio-review" ctaLabel="Book Portfolio Review">
        Investments in securities market are subject to market risks. PrimeIdea Ventures does
        not guarantee returns. Partha Shah is a SEBI Registered Research Analyst
        (INH000017815). PrimeIdea does not act as a SEBI Registered Investment Adviser unless
        separately registered. Investors should verify registration independently and read all
        scheme-related documents carefully before investing.
      </ScopeDisclaimerBar>

      <Footer />
    </div>
  );
}
