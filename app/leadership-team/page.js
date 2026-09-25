import BannerSection from "@/components/bannerSection";
import Footer from "@/components/footer";
import LeadershipContent from "@/components/leadership/leadershipContent";
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

const PAGE_PATH = "/leadership-team";
const PAGE_URL = `https://primeidea.in${PAGE_PATH}`;

const faqs = [
  {
    question: "Who leads research at PrimeIdea Ventures?",
    answer:
      "Partha Shah, Head of Research & Investment Strategy, is a SEBI Registered Research Analyst with registration number INH000017815. Investors should verify this independently on the official SEBI website.",
    plainText:
      "Partha Shah, Head of Research & Investment Strategy, is a SEBI Registered Research Analyst with registration number INH000017815. Investors should verify this independently on the official SEBI website.",
  },
  {
    question: "Is Partha Shah a SEBI Registered Investment Adviser?",
    answer:
      "No. Completing RIA examinations is not the same as SEBI Registered Investment Adviser registration. PrimeIdea operates under SEBI RA registration and does not present itself as an RIA unless separately registered.",
    plainText:
      "No. Completing RIA examinations is not the same as SEBI Registered Investment Adviser registration. PrimeIdea operates under SEBI RA registration and does not present itself as an RIA unless separately registered.",
  },
  {
    question: "Where is the leadership based?",
    answer:
      "PrimeIdea Ventures is a Vadodara-based research-led wealth management and portfolio review firm serving investors across Gujarat and India.",
    plainText:
      "PrimeIdea Ventures is a Vadodara-based research-led wealth management and portfolio review firm serving investors across Gujarat and India.",
  },
  {
    question: "Why are other team members not named on this page?",
    answer:
      "This page publishes named senior profiles only with a real photo, role, credentials, focus area, and LinkedIn when those facts are verified. Placeholder names are not used.",
    plainText:
      "This page publishes named senior profiles only with a real photo, role, credentials, focus area, and LinkedIn when those facts are verified. Placeholder names are not used.",
  },
  {
    question: "Does leadership guarantee investment returns?",
    answer:
      "No. Investments in securities market are subject to market risks. PrimeIdea does not guarantee returns or market-beating performance.",
    plainText:
      "No. Investments in securities market are subject to market risks. PrimeIdea does not guarantee returns or market-beating performance.",
  },
];

export const metadata = {
  title: "Leadership Team",
  description:
    "PrimeIdea Ventures leadership is led by Partha Shah, SEBI Registered Research Analyst INH000017815, from Vadodara, serving investors across Gujarat and India through a research-led portfolio review process. No guaranteed returns.",
  keywords:
    "PrimeIdea leadership, Partha Shah SEBI RA INH000017815, Head of Research PrimeIdea Ventures, research-led wealth management Vadodara",
  author: "Partha Shah",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: PAGE_URL,
    site_name: "PrimeIdea Ventures",
    title: "Leadership Team | PrimeIdea Ventures",
    description:
      "Partha Shah, Head of Research & Investment Strategy, SEBI Registered Research Analyst INH000017815, leads PrimeIdea’s research process from Vadodara.",
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
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vadodara",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  employee: {
    "@type": "Person",
    name: "Partha Shah",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Partha Shah",
  jobTitle: "Head of Research & Investment Strategy",
  identifier: "INH000017815",
  image: "https://primeidea.in/images/about-us/founder.jpg",
  worksFor: {
    "@type": "Organization",
    name: "PrimeIdea Ventures",
    url: "https://primeidea.in",
  },
  sameAs: ["https://www.linkedin.com/in/pssays"],
  url: PAGE_URL,
};

const breadcrumbSchema = buildBreadcrumbJsonLd([{ name: "Leadership Team", url: PAGE_PATH }]);
const faqSchema = buildFaqJsonLd(faqs);

export default function LeadershipTeamPage() {
  return (
    <div className="bg-[#F6FDFF]">
      <ScopePageJsonLd data={[organizationSchema, personSchema, breadcrumbSchema, faqSchema]} />

      <BannerSection
        mainBannerImage="/images/home/banner.png"
        bannerRightImg="/images/home/banner-right.png"
        mainTitle="Leadership Team"
        mainSubTitle="PrimeIdea Ventures is a Vadodara-based research-led wealth management and portfolio review firm serving investors across Gujarat and India. Research is led by Partha Shah, SEBI Registered Research Analyst INH000017815. Named profiles appear here only with verified photo, role, credentials, focus, and LinkedIn."
        mainLinkTitle="Book Portfolio Review"
        mainLink="/portfolio-review"
        usePrimaryAsLink={true}
        formTitle="Book Portfolio Review"
        secondaryLinkTitle="About PrimeIdea"
        secondaryLink="/about-us"
      />

      <ScopePageMetaStrip
        stats={[
          { label: "Base Location", value: "Vadodara", Icon: MapPinIcon },
          { label: "Research led by", value: "Partha Shah", Icon: UserIcon },
          { label: "Registration No.", value: "INH000017815", Icon: CheckBadgeIcon },
        ]}
        disclaimer="Investors should verify SEBI registration independently. Completing RIA examinations is not SEBI Registered Investment Adviser registration. PrimeIdea does not guarantee returns."
      />

      <ScopeBreadcrumbs items={[{ label: "Leadership Team" }]} />

      <LeadershipContent />

      <ScopeFaqsSection
        title="Leadership — Frequently Asked Questions"
        description="Who leads research, how to verify registration, and how named profiles are published."
        faqs={faqs}
      />

      <ScopeDisclaimerBar ctaHref="/portfolio-review" ctaLabel="Book Portfolio Review">
        Investments in securities market are subject to market risks. PrimeIdea Ventures does
        not guarantee returns. Partha Shah is a SEBI Registered Research Analyst
        (INH000017815). PrimeIdea does not act as a SEBI Registered Investment Adviser unless
        separately registered. Investors should verify registration independently.
      </ScopeDisclaimerBar>

      <Footer />
    </div>
  );
}
