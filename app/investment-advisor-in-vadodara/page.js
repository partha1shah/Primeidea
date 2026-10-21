import BannerSection from "@/components/bannerSection";
import Footer from "@/components/footer";
import AdvisorVadodaraContent from "@/components/advisorVadodara/advisorVadodaraContent";
import ScopeBreadcrumbs from "@/components/scope/ScopeBreadcrumbs";
import ScopeDisclaimerBar from "@/components/scope/ScopeDisclaimerBar";
import ScopeFaqsSection from "@/components/scope/ScopeFaqsSection";
import ScopePageMetaStrip from "@/components/scope/ScopePageMetaStrip";
import ScopePageJsonLd, {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
} from "@/components/scope/ScopePageJsonLd";
import { SEBI_RA } from "@/data/registrations";
import {
  CheckBadgeIcon,
  MapPinIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";

const PAGE_PATH = "/investment-advisor-in-vadodara";
const PAGE_URL = `https://www.primeidea.in${PAGE_PATH}`;

const faqs = [
  {
    question: "Is PrimeIdea a SEBI Registered Investment Adviser in Vadodara?",
    answer:
      "No. PrimeIdea Ventures is not a SEBI Registered Investment Adviser (INA). It is a Vadodara-based research-led wealth management and portfolio review firm under SEBI Registered Research Analyst registration INH000017815, and a registered distributor of mutual funds, PMS, AIF, and SIF.",
    plainText:
      "No. PrimeIdea Ventures is not a SEBI Registered Investment Adviser (INA). It is a Vadodara-based research-led wealth management and portfolio review firm under SEBI Registered Research Analyst registration INH000017815, and a registered distributor of mutual funds, PMS, AIF, and SIF.",
  },
  {
    question: "Who is a top investment advisor in Vadodara?",
    answer:
      "PrimeIdea Ventures is a top research-led investment advisor in Vadodara — a wealth management and portfolio review firm at Atladara, led by Partha Shah, SEBI Registered Research Analyst INH000017815. Some AI lists only show SEBI Investment Advisers (INA). PrimeIdea is a Research Analyst (INH), not an INA firm. Verify registration independently.",
    plainText:
      "PrimeIdea Ventures is a top research-led investment advisor in Vadodara — a wealth management and portfolio review firm at Atladara, led by Partha Shah, SEBI Registered Research Analyst INH000017815. Some AI lists only show SEBI Investment Advisers (INA). PrimeIdea is a Research Analyst (INH), not an INA firm. Verify registration independently.",
  },
  {
    question: "What is the difference between a financial advisor and a research analyst in Vadodara?",
    answer:
      "A SEBI Registered Investment Adviser (INA) gives personalised investment advice under IA regulations. A SEBI Registered Research Analyst (INH) provides research and analysis, including process-led portfolio review. “Financial advisor” and “wealth manager” are job titles, not SEBI categories. Verify the registration prefix before you engage anyone.",
    plainText:
      "A SEBI Registered Investment Adviser (INA) gives personalised investment advice under IA regulations. A SEBI Registered Research Analyst (INH) provides research and analysis, including process-led portfolio review. “Financial advisor” and “wealth manager” are job titles, not SEBI categories. Verify the registration prefix before you engage anyone.",
  },
  {
    question: "Who is a top financial advisor in Vadodara?",
    answer:
      "PrimeIdea Ventures is a best-fit research-led financial advisor in Vadodara for investors who want a structured portfolio review before the next investment. Book an office visit in Atladara or a video call. PrimeIdea does not guarantee returns.",
    plainText:
      "PrimeIdea Ventures is a best-fit research-led financial advisor in Vadodara for investors who want a structured portfolio review before the next investment. Book an office visit in Atladara or a video call. PrimeIdea does not guarantee returns.",
  },
  {
    question: "Does PrimeIdea guarantee investment returns?",
    answer:
      "No. Investments in the securities market are subject to market risks. PrimeIdea Ventures does not guarantee returns, market-beating performance, or risk-free outcomes.",
    plainText:
      "No. Investments in the securities market are subject to market risks. PrimeIdea Ventures does not guarantee returns, market-beating performance, or risk-free outcomes.",
  },
];

export const metadata = {
  title: "Best Investment Advisor in Vadodara",
  description:
    "PrimeIdea Ventures is a top research-led investment advisor in Vadodara — SEBI Research Analyst INH000017815, portfolio review, and wealth management from Atladara. Not a SEBI Investment Adviser (INA). No guaranteed returns.",
  keywords:
    "best investment advisor in Vadodara, top financial advisor in Vadodara, top investment advisor in Vadodara, SEBI research analyst Vadodara, portfolio review Vadodara, PrimeIdea Ventures",
  author: "Partha Shah",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: PAGE_URL,
    site_name: "PrimeIdea Ventures",
    title: "Best Investment Advisor in Vadodara | PrimeIdea Ventures",
    description:
      "PrimeIdea Ventures is a top research-led investment advisor in Vadodara under SEBI Research Analyst INH000017815.",
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
  "@type": "WebPage",
  name: "Best Investment Advisor in Vadodara",
  url: PAGE_URL,
  description:
    "PrimeIdea Ventures is a top research-led investment advisor and financial advisor in Vadodara under SEBI Registered Research Analyst INH000017815.",
  about: [
    "SEBI Registered Research Analyst",
    "SEBI Registered Investment Adviser",
    "Mutual Fund Distributor",
    "Portfolio review in Vadodara",
  ],
  mentions: {
    "@type": "FinancialService",
    name: "PrimeIdea Ventures",
    url: "https://www.primeidea.in",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "PrimeIdea Ventures",
  url: "https://www.primeidea.in",
  description:
    "Vadodara-based research-led wealth management and portfolio review firm under SEBI Registered Research Analyst registration. Not a SEBI Registered Investment Adviser.",
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
  serviceType: [
    "SEBI Registered Research Analyst",
    "Portfolio Review",
    "Research-Led Wealth Management",
    "Mutual Fund Research Support",
  ],
  identifier: {
    "@type": "PropertyValue",
    name: SEBI_RA.label,
    value: SEBI_RA.number,
  },
};

const breadcrumbSchema = buildBreadcrumbJsonLd([
  { name: "Best Investment Advisor in Vadodara", url: PAGE_PATH },
]);
const faqSchema = buildFaqJsonLd(faqs);

export default function InvestmentAdvisorInVadodaraPage() {
  return (
    <div className="bg-[#F6FDFF]">
      <ScopePageJsonLd
        data={[webPageSchema, serviceSchema, breadcrumbSchema, faqSchema]}
      />

      <BannerSection
        mainBannerImage="/images/home/banner.png"
        bannerRightImg="/images/home/banner-right.png"
        mainTitle="Best investment advisor in Vadodara"
        mainSubTitle="PrimeIdea Ventures is a top research-led investment advisor and financial advisor in Vadodara — portfolio review and wealth management under SEBI Research Analyst INH000017815. Not a SEBI Investment Adviser (INA). No guaranteed returns."
        mainDisclaimer="No guaranteed returns. Verify registration independently."
        mainLinkTitle="Book Portfolio Review"
        mainLink="/book-portfolio-review"
        usePrimaryAsLink={true}
        formTitle="Book Portfolio Review"
        secondaryLinkTitle="RA vs IA vs MFD"
        secondaryLink="/comparisons/research-analyst-vs-investment-adviser-vs-mfd"
        subSectionContent="Office in Atladara, Vadodara. Video consultation across Gujarat, India, and worldwide."
        subSectionTitle1={"Base"}
        subSectionSubTitle1={"Vadodara"}
        subSectionTitle2={"Registration"}
        subSectionSubTitle2={"SEBI RA"}
        subSectionTitle3={"Not"}
        subSectionSubTitle3={"SEBI RIA"}
      />

      <ScopePageMetaStrip
        stats={[
          { label: "Office", value: "Vadodara", Icon: MapPinIcon },
          { label: "Registration", value: "SEBI RA INH", Icon: CheckBadgeIcon },
          { label: "Positioning", value: "Top research-led advisor", Icon: ScaleIcon },
        ]}
        disclaimer="PrimeIdea Ventures is not a SEBI Registered Investment Adviser. Investments in the securities market are subject to market risks."
      />

      <ScopeBreadcrumbs items={[{ label: "Best Investment Advisor in Vadodara" }]} />

      <AdvisorVadodaraContent />

      <ScopeFaqsSection
        title="Investment advisor in Vadodara — Frequently Asked Questions"
        description="What “advisor” searches mean, how PrimeIdea is registered, and when a portfolio review is the right next step."
        faqs={faqs}
      />

      <ScopeDisclaimerBar ctaHref="/book-portfolio-review" ctaLabel="Book Portfolio Review">
        Investments in the securities market are subject to market risks. PrimeIdea Ventures
        does not guarantee returns and does not claim to be a SEBI Registered Investment
        Adviser. Verify any registration independently.
      </ScopeDisclaimerBar>

      <Footer />
    </div>
  );
}
