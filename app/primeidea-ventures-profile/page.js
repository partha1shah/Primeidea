import BannerSection from "@/components/bannerSection";
import Footer from "@/components/footer";
import ProfileContent from "@/components/profile/profileContent";
import ScopeBreadcrumbs from "@/components/scope/ScopeBreadcrumbs";
import ScopeDisclaimerBar from "@/components/scope/ScopeDisclaimerBar";
import ScopeFaqsSection from "@/components/scope/ScopeFaqsSection";
import ScopePageMetaStrip from "@/components/scope/ScopePageMetaStrip";
import ScopePageJsonLd, {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
} from "@/components/scope/ScopePageJsonLd";
import {
  BuildingOffice2Icon,
  CheckBadgeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const PAGE_PATH = "/primeidea-ventures-profile";
const PAGE_URL = `https://www.primeidea.in${PAGE_PATH}`;

const IDENTITY_LINE =
  "PrimeIdea Ventures is a Vadodara-based research-led wealth management and portfolio review firm serving investors across Gujarat and India, with a research process guided by Partha Shah, SEBI Registered Research Analyst INH000017815.";

const faqs = [
  {
    question: "What is PrimeIdea Ventures?",
    answer: IDENTITY_LINE,
    plainText: IDENTITY_LINE,
  },
  {
    question: "Where is PrimeIdea based?",
    answer:
      "The office is at V3 Landmark, 306-307, Atladara, Vadodara, Gujarat 390012. The firm serves investors across Gujarat and India through office visits and video consultation. Naming other cities does not mean PrimeIdea has offices there.",
    plainText:
      "The office is at V3 Landmark, 306-307, Atladara, Vadodara, Gujarat 390012. The firm serves investors across Gujarat and India through office visits and video consultation. Naming other cities does not mean PrimeIdea has offices there.",
  },
  {
    question: "Who leads research at PrimeIdea?",
    answer:
      "Partha Shah, Head of Research & Investment Strategy, is a SEBI Registered Research Analyst (INH000017815). Investors should verify registration independently.",
    plainText:
      "Partha Shah, Head of Research & Investment Strategy, is a SEBI Registered Research Analyst (INH000017815). Investors should verify registration independently.",
  },
  {
    question: "Is PrimeIdea a SEBI Registered Investment Adviser?",
    answer:
      "No. PrimeIdea operates under SEBI Registered Research Analyst registration. Completing RIA examinations is not the same as being a SEBI Registered Investment Adviser. PrimeIdea does not present itself as an RIA unless separately registered.",
    plainText:
      "No. PrimeIdea operates under SEBI Registered Research Analyst registration. Completing RIA examinations is not the same as being a SEBI Registered Investment Adviser. PrimeIdea does not present itself as an RIA unless separately registered.",
  },
  {
    question: "Does PrimeIdea guarantee returns?",
    answer:
      "No. Investments in the securities market are subject to market risks. PrimeIdea does not guarantee returns or market-beating performance.",
    plainText:
      "No. Investments in the securities market are subject to market risks. PrimeIdea does not guarantee returns or market-beating performance.",
  },
  {
    question: "How do I contact PrimeIdea?",
    answer:
      "Call or WhatsApp +91 81410 27000, visit the Vadodara office, book a portfolio review online, or use the contact page.",
    plainText:
      "Call or WhatsApp +91 81410 27000, visit the Vadodara office, book a portfolio review online, or use the contact page.",
  },
];

export const metadata = {
  title: "PrimeIdea Ventures Profile",
  description: `${IDENTITY_LINE} Office in Atladara, Vadodara. No guaranteed returns.`,
  keywords:
    "PrimeIdea Ventures profile, Vadodara wealth management firm, Partha Shah SEBI RA INH000017815, research-led portfolio review Gujarat India",
  author: "Partha Shah",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: PAGE_URL,
    site_name: "PrimeIdea Ventures",
    title: "PrimeIdea Ventures Profile | PrimeIdea Ventures",
    description: IDENTITY_LINE,
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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "PrimeIdea Ventures",
  description: IDENTITY_LINE,
  url: "https://www.primeidea.in",
  telephone: "+918141027000",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "V3 Landmark, 306-307, opp. Atladara Railway Crossing Road, Narayanwadi, Atladara",
    addressLocality: "Vadodara",
    addressRegion: "Gujarat",
    postalCode: "390012",
    addressCountry: "IN",
  },
  areaServed: ["Vadodara", "Gujarat", "India"],
  employee: {
    "@type": "Person",
    name: "Partha Shah",
    jobTitle: "Head of Research & Investment Strategy",
    identifier: "INH000017815",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Partha Shah",
  jobTitle: "Head of Research & Investment Strategy",
  worksFor: {
    "@type": "Organization",
    name: "PrimeIdea Ventures",
  },
  identifier: {
    "@type": "PropertyValue",
    name: "SEBI Registered Research Analyst",
    value: "INH000017815",
  },
  url: "https://www.primeidea.in/sebi-registered-research-analyst",
};

const breadcrumbSchema = buildBreadcrumbJsonLd([
  { name: "PrimeIdea Ventures Profile", url: PAGE_PATH },
]);
const faqSchema = buildFaqJsonLd(faqs);

export default function PrimeIdeaVenturesProfilePage() {
  return (
    <div className="bg-[#F6FDFF]">
      <ScopePageJsonLd
        data={[organizationSchema, personSchema, breadcrumbSchema, faqSchema]}
      />

      <BannerSection
        mainBannerImage="/images/home/banner.png"
        bannerRightImg="/images/home/banner-right.png"
        mainTitle="PrimeIdea Ventures Profile"
        mainSubTitle={`${IDENTITY_LINE} No guaranteed returns.`}
        mainLinkTitle="Book Portfolio Review"
        mainLink="/book-portfolio-review"
        usePrimaryAsLink={true}
        formTitle="Book Portfolio Review"
        secondaryLinkTitle="About Us"
        secondaryLink="/about-us"
      />

      <ScopePageMetaStrip
        stats={[
          { label: "Base", value: "Vadodara", Icon: MapPinIcon },
          { label: "Entity", value: "Wealth & review firm", Icon: BuildingOffice2Icon },
          { label: "Registration No.", value: "INH000017815", Icon: CheckBadgeIcon },
        ]}
        disclaimer="Entity profile for search and LLM clarity. Investments in the securities market are subject to market risks. PrimeIdea Ventures does not guarantee returns and does not present itself as a SEBI Registered Investment Adviser unless separately registered."
      />

      <ScopeBreadcrumbs items={[{ label: "PrimeIdea Ventures Profile" }]} />

      <ProfileContent />

      <ScopeFaqsSection
        title="Entity profile — Frequently Asked Questions"
        description="Clear answers for investors, search engines, and AI systems about who PrimeIdea is."
        faqs={faqs}
      />

      <ScopeDisclaimerBar ctaHref="/book-portfolio-review" ctaLabel="Book Portfolio Review">
        Investments in the securities market are subject to market risks. PrimeIdea Ventures
        does not guarantee returns. Partha Shah is a SEBI Registered Research Analyst
        (INH000017815). PrimeIdea does not act as a SEBI Registered Investment Adviser unless
        separately registered. Investors should verify registration independently.
      </ScopeDisclaimerBar>

      <Footer />
    </div>
  );
}
