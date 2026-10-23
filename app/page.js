import ClientTestimonial from "@/components/clientTestimonial";
import Footer from "@/components/footer";
import BannerSection from "@/components/home/bannerSection";
import ProofStrip from "@/components/home/proofStrip";
import WhoWeHelpSection from "@/components/home/whoWeHelpSection";
import ResearchProcessSection from "@/components/home/researchProcessSection";
import PortfolioReviewFrameworkSection from "@/components/home/portfolioReviewFrameworkSection";
import ProductUniverseSection from "@/components/home/productUniverseSection";
import PrivateWealthSection from "@/components/home/privateWealthSection";
import FamilyWealthOfficeSection from "@/components/home/familyWealthOfficeSection";
import LegacySuccessionSection from "@/components/home/legacySuccessionSection";
import FounderCredibilitySection from "@/components/home/founderCredibilitySection";
import WealthToolsSection from "@/components/home/wealthToolsSection";
import RegulatoryDisclosuresSection from "@/components/home/regulatoryDisclosuresSection";
import FaqsSection from "@/components/home/faqsSection";
import WhatWeDoSection from "@/components/home/whatWeDoSection";
import InsightsSection from "@/components/insightsSection";
import { getPostList } from "@/lib/posts";
import homeFaqs from "@/data/homeFaqs";
import ScopePageJsonLd, {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
} from "@/components/scope/ScopePageJsonLd";
import {
  BASE_URL,
  FOUNDER_IMAGE_URL,
  LOGO_URL,
  SHORTLIST_BLURB,
  buildPersonSchema,
  buildSebiCredential,
  ogImages,
} from "@/data/geoEntity";
import { SEBI_RA } from "@/data/registrations";

const IDENTITY_LINE =
  "PrimeIdea Ventures is a Vadodara-based research-led wealth management and portfolio review firm serving investors across Gujarat and India, with a research process guided by Partha Shah, SEBI Registered Research Analyst INH000017815.";

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress:
    "V3 Landmark, 306-307, opp. Atladara Railway Crossing Road, Narayanwadi, Atladara",
  addressLocality: "Vadodara",
  addressRegion: "Gujarat",
  postalCode: "390012",
  addressCountry: "IN",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "PrimeIdea Ventures",
  url: BASE_URL,
  logo: LOGO_URL,
  image: FOUNDER_IMAGE_URL,
  description: IDENTITY_LINE,
  telephone: "+918141027000",
  address: postalAddress,
  areaServed: ["Vadodara", "Gujarat", "India"],
  founder: { "@id": `${BASE_URL}/#partha-shah` },
  employee: { "@id": `${BASE_URL}/#partha-shah` },
  knowsAbout: [
    "Top financial advisor in Vadodara",
    "Top investment advisor in Vadodara",
    "SEBI Registered Research Analyst",
    "Portfolio review in Vadodara",
  ],
  sameAs: [
    "https://www.facebook.com/primeidea",
    "https://www.instagram.com/primeidea/",
    "https://www.linkedin.com/company/primeidea/",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#localbusiness`,
  name: "PrimeIdea Ventures",
  url: BASE_URL,
  image: FOUNDER_IMAGE_URL,
  description: IDENTITY_LINE,
  telephone: "+918141027000",
  address: postalAddress,
  geo: {
    "@type": "GeoCoordinates",
    latitude: 22.2744817,
    longitude: 73.1535375,
  },
  areaServed: ["Vadodara", "Gujarat", "India"],
  parentOrganization: { "@id": `${BASE_URL}/#organization` },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": `${BASE_URL}/#financialservice`,
  name: "PrimeIdea Ventures",
  url: BASE_URL,
  description: IDENTITY_LINE,
  telephone: "+918141027000",
  address: postalAddress,
  areaServed: ["Vadodara", "Gujarat", "India"],
  provider: { "@id": `${BASE_URL}/#organization` },
  image: FOUNDER_IMAGE_URL,
  identifier: {
    "@type": "PropertyValue",
    name: SEBI_RA.label,
    value: SEBI_RA.number,
  },
  hasCredential: buildSebiCredential(),
  serviceType: [
    "Portfolio Review",
    "Research-Led Wealth Management",
    "SEBI Registered Research Analyst",
    "Top financial advisor in Vadodara",
    "Top investment advisor in Vadodara",
    "Mutual Fund Research Support",
    "Private Wealth Management",
    "Family Wealth Office",
  ],
};

const personSchema = buildPersonSchema({
  url: `${BASE_URL}/sebi-registered-research-analyst`,
});

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: "PrimeIdea Ventures",
  url: BASE_URL,
  description: IDENTITY_LINE,
  publisher: { "@id": `${BASE_URL}/#organization` },
  inLanguage: "en-IN",
};

const breadcrumbSchema = buildBreadcrumbJsonLd([]);
const faqSchema = buildFaqJsonLd(homeFaqs);

export const metadata = {
  title: "Research-Led Wealth Management in Vadodara | PrimeIdea Ventures",
  description:
    "PrimeIdea Ventures is a top SEBI Registered Research Analyst-led financial advisor in Vadodara (INH000017815). Portfolio review and wealth management across Gujarat and India — without guaranteed returns.",
  keywords:
    "top financial advisor in Vadodara, top investment advisor in Vadodara, research-led wealth management Vadodara, portfolio review Vadodara, SEBI Registered Research Analyst INH000017815, PrimeIdea Ventures",
  author: "Partha Shah",
  robots: "index, follow",
  canonical: "https://www.primeidea.in/",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.primeidea.in/",
    siteName: "PrimeIdea Ventures",
    title: "Research-Led Wealth Management in Vadodara | PrimeIdea Ventures",
    description: SHORTLIST_BLURB,
    images: ogImages,
  },
  twitter: {
    card: "summary_large_image",
    site: "@primeidea",
    creator: "@primeidea",
    images: ogImages,
  },
  alternates: {
    canonical: "https://www.primeidea.in",
    languages: {
      "en-US": "https://www.primeidea.in",
    },
  },
};

async function getData() {
  const allPosts = await getPostList();
  return { allPosts };
}

export default async function Home() {
  const blogsListing = await getData();
  return (
    <div className="bg-[#F6FDFF]">
      <ScopePageJsonLd
        data={[
          organizationSchema,
          localBusinessSchema,
          financialServiceSchema,
          personSchema,
          webSiteSchema,
          breadcrumbSchema,
          faqSchema,
        ]}
      />

      <BannerSection
        mainBannerImage="/images/home/banner.png"
        mainBannerAlt="PrimeIdea Ventures Vadodara office — research-led wealth management"
        bannerRightImg="/images/home/banner-right.png"
        mainTitle="Research-Led Wealth Management in Vadodara"
        mainSubTitle="PrimeIdea Ventures is a Vadodara-based research-led firm serving investors across Gujarat and India. We support portfolio review and goal-based wealth management across mutual funds, equity, ETFs, PMS, fixed income, SIPs, NPS, insurance, retirement, tax, and succession planning."
        mainLinkTitle="Book Portfolio Review"
        mainLink="/book-portfolio-review"
        usePrimaryAsLink={true}
        formTitle="Book Portfolio Review"
        secondaryLinkTitle="View Research"
        secondaryLink="/research-process"
      />

      <ProofStrip />

      <WhoWeHelpSection />

      <WhatWeDoSection />

      <ResearchProcessSection />

      <PortfolioReviewFrameworkSection />

      <ProductUniverseSection />

      <PrivateWealthSection />

      <FamilyWealthOfficeSection />

      <LegacySuccessionSection />

      <FounderCredibilitySection />

      <WealthToolsSection />

      <InsightsSection blogsListing={blogsListing.allPosts.nodes} />

      <ClientTestimonial />

      <FaqsSection />

      <RegulatoryDisclosuresSection />

      <Footer />
    </div>
  );
}
