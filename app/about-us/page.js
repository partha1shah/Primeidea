import BannerSection from "@/components/aboutUs/bannerSection";
import AboutContentSections from "@/components/aboutUs/aboutContentSections";
import ClientTestimonial from "@/components/clientTestimonial";
import Footer from "@/components/footer";
import ScopeBreadcrumbs from "@/components/scope/ScopeBreadcrumbs";
import ScopeDisclaimerBar from "@/components/scope/ScopeDisclaimerBar";
import ScopeFaqsSection from "@/components/scope/ScopeFaqsSection";
import ScopePageMetaStrip from "@/components/scope/ScopePageMetaStrip";
import ScopePageJsonLd, {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
} from "@/components/scope/ScopePageJsonLd";
import {
  FOUNDER_IMAGE_URL,
  ogImages,
  buildPersonSchema,
  buildSebiCredential,
} from "@/data/geoEntity";
import {
  CheckBadgeIcon,
  MapPinIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const PAGE_PATH = "/about-us";
const PAGE_URL = `https://www.primeidea.in${PAGE_PATH}`;

const faqs = [
  {
    question: "What is PrimeIdea Ventures?",
    answer:
      "PrimeIdea Ventures is a Vadodara-based research-led wealth management and portfolio review firm, and a top SEBI Registered Research Analyst-led financial advisor in Vadodara (INH000017815). We help individuals grow hard-earned money with clear understanding and expert guidance — in person or online.",
    plainText:
      "PrimeIdea Ventures is a Vadodara-based research-led wealth management and portfolio review firm, and a top SEBI Registered Research Analyst-led financial advisor in Vadodara (INH000017815). We help individuals grow hard-earned money with clear understanding and expert guidance — in person or online.",
  },
  {
    question: "Who leads research at PrimeIdea?",
    answer:
      "Partha Shah, Head of Research & Investment Strategy, is a SEBI Registered Research Analyst (INH000017815). Official photo: Partha Shah. Investors can verify SEBI registration independently.",
    plainText:
      "Partha Shah, Head of Research & Investment Strategy, is a SEBI Registered Research Analyst (INH000017815). Official photo: Partha Shah. Investors can verify SEBI registration independently.",
  },
  {
    question: "Does PrimeIdea guarantee returns?",
    answer:
      "No. Investments in securities market are subject to market risks.  ",
    plainText:
      "No. Investments in securities market are subject to market risks.  ",
  },
  {
    question: "Where is PrimeIdea based?",
    answer:
      "The office is at V3 Landmark, 306-307, Atladara, Vadodara, Gujarat 390012. Clients across Gujarat, India, and worldwide can join the same review in person or on a video call.",
    plainText:
      "The office is at V3 Landmark, 306-307, Atladara, Vadodara, Gujarat 390012. Clients across Gujarat, India, and worldwide can join the same review in person or on a video call.",
  },
  {
    question: "How do I start with PrimeIdea?",
    answer:
      "Start with a structured portfolio review. Upload holdings or book an office or video review so the process can assess suitability, overlaps, allocation, and next steps.",
    plainText:
      "Start with a structured portfolio review. Upload holdings or book an office or video review so the process can assess suitability, overlaps, allocation, and next steps.",
  },
];

export const metadata = {
  title: "About PrimeIdea",
  description:
    "PrimeIdea Ventures is a Vadodara-based research-led wealth management firm helping investors across Gujarat, India, and worldwide with portfolio review and expert guidance.",
  keywords:
    "About PrimeIdea Ventures, research-led wealth management Vadodara, SEBI research analyst Vadodara, portfolio review Vadodara, Gujarat India NRI",
  author: "Partha Shah",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: PAGE_URL,
    siteName: "PrimeIdea Ventures",
    title: "About PrimeIdea | PrimeIdea Ventures",
    description:
      "PrimeIdea Ventures is a Vadodara-based research-led wealth management firm serving investors across Gujarat, India, and worldwide. SEBI Registered Research Analyst INH000017815.",
    images: ogImages,
  },
  twitter: {
    card: "summary_large_image",
    site: "@primeidea",
    creator: "@primeidea",
    images: ogImages,
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
  url: "https://www.primeidea.in",
  image: FOUNDER_IMAGE_URL,
  description:
    "Vadodara-based research-led wealth management and portfolio review firm serving investors across Gujarat, India, and worldwide. SEBI Registered Research Analyst INH000017815.",
  identifier: {
    "@type": "PropertyValue",
    name: "SEBI Registered Research Analyst",
    value: "INH000017815",
  },
  hasCredential: buildSebiCredential(),
  address: {
    "@type": "PostalAddress",
    streetAddress: "V3 Landmark, 306-307, opp. Atladara Railway Crossing Road, Narayanwadi, Atladara",
    addressLocality: "Vadodara",
    addressRegion: "Gujarat",
    postalCode: "390012",
    addressCountry: "IN",
  },
  areaServed: ["Vadodara", "Gujarat", "India", "Worldwide"],
  founder: {
    "@type": "Person",
    name: "Partha Shah",
  },
  sameAs: [
    "https://www.facebook.com/primeidea",
    "https://www.instagram.com/primeidea/",
    "https://www.linkedin.com/company/primeidea/",
  ],
};

const personSchema = buildPersonSchema({ url: PAGE_URL });

const breadcrumbSchema = buildBreadcrumbJsonLd([{ name: "About PrimeIdea", url: PAGE_PATH }]);
const faqSchema = buildFaqJsonLd(faqs);

export default function AboutUs() {
  return (
    <div className="bg-[#F6FDFF]">
      <ScopePageJsonLd data={[organizationSchema, personSchema, breadcrumbSchema, faqSchema]} />

      <BannerSection />

      <ScopePageMetaStrip
        stats={[
          { label: "Base Location", value: "Vadodara", Icon: MapPinIcon },
          { label: "Reach", value: "India & worldwide", Icon: UserIcon },
          { label: "Approach", value: "Research-led", Icon: CheckBadgeIcon },
        ]}
        disclaimer="PrimeIdea Ventures is a research-led firm and distributor of financial products. Investments are subject to market risks. Read all scheme-related documents carefully."
      />

      <ScopeBreadcrumbs items={[{ label: "About PrimeIdea" }]} />

      <AboutContentSections />

      <ScopeFaqsSection
        title="About PrimeIdea — Frequently Asked Questions"
        description="Who we are, who leads research, and how to start a review."
        faqs={faqs}
      />

      <ClientTestimonial />

      <ScopeDisclaimerBar ctaHref="/portfolio-review" ctaLabel="Book Portfolio Review">
        Investments in market-linked products are subject to market risks. Please read all
        scheme-related documents carefully before investing. PrimeIdea Ventures does not
        guarantee returns.
      </ScopeDisclaimerBar>

      <Footer />
    </div>
  );
}
