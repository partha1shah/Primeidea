import BannerSection from "@/components/bannerSection";
import Footer from "@/components/footer";
import BookPortfolioReviewContent from "@/components/bookPortfolioReview/bookPortfolioReviewContent";
import ScopeBreadcrumbs from "@/components/scope/ScopeBreadcrumbs";
import ScopeDisclaimerBar from "@/components/scope/ScopeDisclaimerBar";
import ScopeFaqsSection from "@/components/scope/ScopeFaqsSection";
import ScopePageMetaStrip from "@/components/scope/ScopePageMetaStrip";
import ScopePageJsonLd, {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
} from "@/components/scope/ScopePageJsonLd";
import {
  CalendarDaysIcon,
  CheckBadgeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const PAGE_PATH = "/book-portfolio-review";
const PAGE_URL = `https://primeidea.in${PAGE_PATH}`;

const faqs = [
  {
    question: "What can I book on this page?",
    answer:
      "You can request Portfolio Review, Retirement Planning, Insurance Review, HNI Private Wealth Consultation, or NRI Consultation — with a preferred date, time, and office or video meeting mode.",
    plainText:
      "You can request Portfolio Review, Retirement Planning, Insurance Review, HNI Private Wealth Consultation, or NRI Consultation — with a preferred date, time, and office or video meeting mode.",
  },
  {
    question: "Is my preferred slot confirmed immediately?",
    answer:
      "No. Your request is received by the team and confirmed based on availability. You can opt in for WhatsApp confirmation updates.",
    plainText:
      "No. Your request is received by the team and confirmed based on availability. You can opt in for WhatsApp confirmation updates.",
  },
  {
    question: "Can I join by video if I am not in Vadodara?",
    answer:
      "Yes. Choose Video call. PrimeIdea is Vadodara-based and serves investors across Gujarat and India, including NRI clients, without claiming offices in other cities.",
    plainText:
      "Yes. Choose Video call. PrimeIdea is Vadodara-based and serves investors across Gujarat and India, including NRI clients, without claiming offices in other cities.",
  },
  {
    question: "Does booking guarantee investment returns?",
    answer:
      "No. Investments in the securities market are subject to market risks. PrimeIdea Ventures does not guarantee returns.",
    plainText:
      "No. Investments in the securities market are subject to market risks. PrimeIdea Ventures does not guarantee returns.",
  },
  {
    question: "Who leads the research process?",
    answer:
      "The research process is guided by Partha Shah, SEBI Registered Research Analyst INH000017815. Investors should verify registration independently.",
    plainText:
      "The research process is guided by Partha Shah, SEBI Registered Research Analyst INH000017815. Investors should verify registration independently.",
  },
  {
    question: "Is this SEBI Registered Investment Adviser advice?",
    answer:
      "No. PrimeIdea operates under SEBI Registered Research Analyst registration and does not present itself as a SEBI Registered Investment Adviser unless separately registered.",
    plainText:
      "No. PrimeIdea operates under SEBI Registered Research Analyst registration and does not present itself as a SEBI Registered Investment Adviser unless separately registered.",
  },
];

export const metadata = {
  title: "Book Portfolio Review",
  description:
    "Book a research-led portfolio review or consultation with PrimeIdea Ventures — choose service, preferred date/time, office visit or video call, and WhatsApp confirmation. Guided by Partha Shah, SEBI Registered Research Analyst INH000017815. No guaranteed returns.",
  keywords:
    "book portfolio review Vadodara, schedule wealth consultation, NRI consultation booking, PrimeIdea Ventures, Partha Shah SEBI RA INH000017815",
  author: "Partha Shah",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: PAGE_URL,
    site_name: "PrimeIdea Ventures",
    title: "Book Portfolio Review | PrimeIdea Ventures",
    description:
      "Request a portfolio review or specialist consultation — office or video. Educational, research-led process. No guaranteed returns.",
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
  "@type": "ContactPage",
  name: "Book Portfolio Review",
  description:
    "Book a research-led portfolio review or consultation with PrimeIdea Ventures in Vadodara or by video.",
  url: PAGE_URL,
  isPartOf: {
    "@type": "WebSite",
    name: "PrimeIdea Ventures",
    url: "https://primeidea.in",
  },
};

const breadcrumbSchema = buildBreadcrumbJsonLd([
  { name: "Book Portfolio Review", url: PAGE_PATH },
]);
const faqSchema = buildFaqJsonLd(faqs);

export default async function BookPortfolioReviewPage({ searchParams }) {
  const params = await searchParams;
  const serviceParam = params?.service;
  const allowed = [
    "Portfolio Review",
    "Retirement Planning",
    "Insurance Review",
    "HNI Private Wealth Consultation",
    "PMS / AIF / SIF Suitability Review",
    "NRI Consultation",
  ];
  const defaultService = allowed.includes(serviceParam)
    ? serviceParam
    : "Portfolio Review";

  return (
    <div className="bg-[#F6FDFF]">
      <ScopePageJsonLd data={[webPageSchema, breadcrumbSchema, faqSchema]} />

      <BannerSection
        mainBannerImage="/images/home/banner.png"
        bannerRightImg="/images/home/banner-right.png"
        mainTitle="Book Portfolio Review"
        mainSubTitle="Choose your service, preferred date and time, and office visit or video call. Opt in for WhatsApp confirmation. Research process guided by Partha Shah, SEBI Registered Research Analyst INH000017815. Educational consultation — no guaranteed returns."
        mainLinkTitle="Start booking"
        mainLink="#booking-form"
        usePrimaryAsLink={true}
        formTitle="Book Portfolio Review"
        secondaryLinkTitle="Upload holdings"
        secondaryLink="/portfolio-review-vadodara"
      />

      <ScopePageMetaStrip
        stats={[
          { label: "Booking type", value: "Review / consultation", Icon: CalendarDaysIcon },
          { label: "Modes", value: "Office or video", Icon: MapPinIcon },
          { label: "Registration No.", value: "INH000017815", Icon: CheckBadgeIcon },
        ]}
        disclaimer="Booking requests are confirmed by the team subject to availability. Consultations are research-led and educational. Investments in the securities market are subject to market risks. PrimeIdea Ventures does not guarantee returns and does not present itself as a SEBI Registered Investment Adviser unless separately registered."
      />

      <ScopeBreadcrumbs items={[{ label: "Book Portfolio Review" }]} />

      <BookPortfolioReviewContent defaultService={defaultService} />

      <ScopeFaqsSection
        title="Booking — Frequently Asked Questions"
        description="How scheduling works, meeting modes, WhatsApp confirmation, and compliance basics."
        faqs={faqs}
      />

      <ScopeDisclaimerBar ctaHref="/portfolio-review-vadodara" ctaLabel="Upload Portfolio for Review">
        Booking a review does not guarantee investment returns or outcomes.
        Investments in the securities market are subject to market risks. Partha Shah
        is a SEBI Registered Research Analyst (INH000017815). PrimeIdea does not act
        as a SEBI Registered Investment Adviser unless separately registered.
        Investors should verify registration independently.
      </ScopeDisclaimerBar>

      <Footer />
    </div>
  );
}
