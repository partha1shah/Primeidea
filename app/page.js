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
import AppInstall from "@/components/appInstall";
import homeFaqs from "@/data/homeFaqs";
import ScopePageJsonLd, {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
} from "@/components/scope/ScopePageJsonLd";

const BASE_URL = "https://www.primeidea.in";
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
  logo: `${BASE_URL}/images/logo-black.png`,
  description: IDENTITY_LINE,
  telephone: "+918141027000",
  address: postalAddress,
  areaServed: ["Vadodara", "Gujarat", "India"],
  founder: { "@id": `${BASE_URL}/#partha-shah` },
  employee: { "@id": `${BASE_URL}/#partha-shah` },
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
  image: `${BASE_URL}/images/home/banner.png`,
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
  serviceType: [
    "Portfolio Review",
    "Research-Led Wealth Management",
    "Mutual Fund Investment Support",
    "Private Wealth Management",
    "Family Wealth Office",
  ],
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${BASE_URL}/#partha-shah`,
  name: "Partha Shah",
  jobTitle: "Head of Research & Investment Strategy",
  description:
    "SEBI Registered Research Analyst INH000017815. Guides the research process at PrimeIdea Ventures.",
  url: `${BASE_URL}/sebi-registered-research-analyst`,
  image: `${BASE_URL}/images/about-us/founder.jpg`,
  worksFor: { "@id": `${BASE_URL}/#organization` },
  identifier: {
    "@type": "PropertyValue",
    name: "SEBI Registered Research Analyst",
    value: "INH000017815",
  },
  sameAs: ["https://www.linkedin.com/in/pssays"],
};

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
    "PrimeIdea Ventures helps investors across Gujarat and India with portfolio review and research-led wealth management through a process guided by Partha Shah, SEBI Registered Research Analyst INH000017815.",
  keywords:
    "mutual funds, investment advisory, financial planning, wealth management, retirement planning, insurance solutions, Partha Shah, PrimeIdea Ventures, Gujarat financial advisor, investment consultant",
  author: "Partha Shah",
  robots: "index, follow",
  canonical: "https://www.primeidea.in/",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://www.primeidea.in/",
    site_name: "PrimeIdea Ventures",
    title: "Research-Led Wealth Management in Vadodara | PrimeIdea Ventures",
    description:
      "PrimeIdea Ventures helps investors across Gujarat and India with portfolio review and research-led wealth management through a process guided by Partha Shah, SEBI Registered Research Analyst INH000017815.",
  },
  twitter: {
    handle: "@primeidea",
    site: "@primeidea",
    cardType: "summary_large_image",
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
        bannerRightImg="/images/home/banner-right.png"
        mainTitle="Research-Led Wealth Management in Vadodara"
        mainSubTitle="PrimeIdea Ventures is a Vadodara-based research-led firm serving investors across Gujarat and India. Under Partha Shah, SEBI Registered Research Analyst (INH000017815), we support portfolio review and goal-based wealth management across mutual funds, equity, ETFs, PMS, fixed income, SIPs, NPS, insurance, retirement, tax, and succession planning."
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

      <AppInstall />

      <InsightsSection blogsListing={blogsListing.allPosts.nodes} />

      <ClientTestimonial />

      <FaqsSection />

      <RegulatoryDisclosuresSection />

      <Footer />
    </div>
  );
}
