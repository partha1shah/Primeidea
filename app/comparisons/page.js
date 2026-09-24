import BannerSection from "@/components/bannerSection";
import Footer from "@/components/footer";
import { ComparisonHubContent } from "@/components/comparisons/comparisonContent";
import ScopeBreadcrumbs from "@/components/scope/ScopeBreadcrumbs";
import ScopeDisclaimerBar from "@/components/scope/ScopeDisclaimerBar";
import ScopePageMetaStrip from "@/components/scope/ScopePageMetaStrip";
import ScopePageJsonLd, { buildBreadcrumbJsonLd } from "@/components/scope/ScopePageJsonLd";
import { COMPARISON_HUB } from "@/data/comparisons";
import {
  AcademicCapIcon,
  BookOpenIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";

const PAGE_PATH = COMPARISON_HUB.path;
const PAGE_URL = `https://primeidea.in${PAGE_PATH}`;

export const metadata = {
  title: COMPARISON_HUB.title,
  description: COMPARISON_HUB.description,
  keywords:
    "investment comparison guides, RA vs IA vs MFD, PMS vs mutual funds, SIP vs lumpsum vs STP, PrimeIdea Ventures",
  author: "Partha Shah",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: PAGE_URL,
    site_name: "PrimeIdea Ventures",
    title: `${COMPARISON_HUB.title} | PrimeIdea Ventures`,
    description: COMPARISON_HUB.description,
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

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: COMPARISON_HUB.title,
  description: COMPARISON_HUB.description,
  url: PAGE_URL,
  isPartOf: {
    "@type": "WebSite",
    name: "PrimeIdea Ventures",
    url: "https://primeidea.in",
  },
};

const breadcrumbSchema = buildBreadcrumbJsonLd([
  { name: "Comparisons", url: PAGE_PATH },
]);

export default function ComparisonsHubPage() {
  return (
    <div className="bg-[#F6FDFF]">
      <ScopePageJsonLd data={[collectionSchema, breadcrumbSchema]} />

      <BannerSection
        mainBannerImage="/images/home/banner.png"
        bannerRightImg="/images/home/banner-right.png"
        mainTitle="Investment Comparison Guides"
        mainSubTitle="Educational comparisons of roles and products — RA vs IA vs MFD, PMS vs mutual funds, AIF vs PMS vs MF, SIP vs lumpsum vs STP. Research-led context from a Vadodara base. Guided by Partha Shah, SEBI Registered Research Analyst INH000017815. No guaranteed returns."
        mainLinkTitle="Browse guides"
        mainLink="#guides"
        usePrimaryAsLink={true}
        formTitle="Book Portfolio Review"
        secondaryLinkTitle="Knowledge Centre"
        secondaryLink="/knowledge-centre"
      />

      <ScopePageMetaStrip
        stats={[
          { label: "Type", value: "Education", Icon: AcademicCapIcon },
          { label: "Guides", value: "4 core topics", Icon: BookOpenIcon },
          { label: "Approach", value: "Suitability lenses", Icon: ScaleIcon },
        ]}
        disclaimer="Comparison pages are educational only. They are not personalised advice, product offers, or return forecasts. Market risks apply. PrimeIdea does not guarantee returns."
      />

      <ScopeBreadcrumbs items={[{ label: "Comparisons" }]} />

      <div id="guides">
        <ComparisonHubContent />
      </div>

      <ScopeDisclaimerBar ctaHref="/book-portfolio-review" ctaLabel="Book Portfolio Review">
        Educational content only. Investments in the securities market are subject to market
        risks. PrimeIdea Ventures does not guarantee returns. Partha Shah is a SEBI Registered
        Research Analyst (INH000017815). PrimeIdea does not act as a SEBI Registered Investment
        Adviser unless separately registered.
      </ScopeDisclaimerBar>

      <Footer />
    </div>
  );
}
