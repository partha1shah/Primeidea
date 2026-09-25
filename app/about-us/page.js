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
  CheckBadgeIcon,
  MapPinIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const PAGE_PATH = "/about-us";
const PAGE_URL = `https://primeidea.in${PAGE_PATH}`;

const faqs = [
  {
    question: "What is PrimeIdea Ventures?",
    answer:
      "PrimeIdea Ventures is a Vadodara-based research-led wealth management and portfolio review firm serving investors across Gujarat and India, with a research process guided by Partha Shah, SEBI Registered Research Analyst INH000017815.",
    plainText:
      "PrimeIdea Ventures is a Vadodara-based research-led wealth management and portfolio review firm serving investors across Gujarat and India, with a research process guided by Partha Shah, SEBI Registered Research Analyst INH000017815.",
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
      "No. Investments in securities market are subject to market risks. PrimeIdea does not guarantee returns or market-beating performance.",
    plainText:
      "No. Investments in securities market are subject to market risks. PrimeIdea does not guarantee returns or market-beating performance.",
  },
  {
    question: "Where is PrimeIdea based?",
    answer:
      "The office is at V3 Landmark, 306-307, Atladara, Vadodara, Gujarat 390012. The firm serves investors across Gujarat and India through office visits and video consultation.",
    plainText:
      "The office is at V3 Landmark, 306-307, Atladara, Vadodara, Gujarat 390012. The firm serves investors across Gujarat and India through office visits and video consultation.",
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
    "PrimeIdea Ventures helps investors in Vadodara and across Gujarat and India with research-led wealth management and portfolio review through a process guided by Partha Shah, SEBI Registered Research Analyst INH000017815.",
  keywords:
    "About PrimeIdea Ventures, Partha Shah SEBI RA INH000017815, research-led wealth management Vadodara, portfolio review Gujarat",
  author: "Partha Shah",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: PAGE_URL,
    site_name: "PrimeIdea Ventures",
    title: "About PrimeIdea | PrimeIdea Ventures",
    description:
      "PrimeIdea Ventures is a Vadodara-based research-led wealth management and portfolio review firm serving investors across Gujarat and India, guided by Partha Shah, SEBI Registered Research Analyst INH000017815.",
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
  url: "https://primeidea.in",
  description:
    "Vadodara-based research-led wealth management and portfolio review firm serving investors across Gujarat and India.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "V3 Landmark, 306-307, opp. Atladara Railway Crossing Road, Narayanwadi, Atladara",
    addressLocality: "Vadodara",
    addressRegion: "Gujarat",
    postalCode: "390012",
    addressCountry: "IN",
  },
  areaServed: ["Vadodara", "Gujarat", "India"],
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

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Partha Shah",
  jobTitle: "Head of Research & Investment Strategy",
  identifier: "INH000017815",
  worksFor: {
    "@type": "Organization",
    name: "PrimeIdea Ventures",
    url: "https://primeidea.in",
  },
  sameAs: ["https://www.linkedin.com/in/pssays"],
  url: PAGE_URL,
};

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
          { label: "Research led by", value: "Partha Shah", Icon: UserIcon },
          { label: "Registration No.", value: "INH000017815", Icon: CheckBadgeIcon },
        ]}
        disclaimer="PrimeIdea Ventures does not guarantee returns and does not present itself as a SEBI Registered Investment Adviser unless separately registered. Investors should verify SEBI registration independently."
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
