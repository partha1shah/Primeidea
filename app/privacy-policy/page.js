import BannerSection from "@/components/bannerSection";
import Footer from "@/components/footer";
import ScopeBreadcrumbs from "@/components/scope/ScopeBreadcrumbs";
import ScopeDisclaimerBar from "@/components/scope/ScopeDisclaimerBar";
import ScopePageJsonLd, { buildBreadcrumbJsonLd } from "@/components/scope/ScopePageJsonLd";
import Link from "next/link";

const PAGE_PATH = "/privacy-policy";
const PAGE_URL = `https://primeidea.in${PAGE_PATH}`;

export const metadata = {
  title: "Privacy Policy",
  description:
    "How PrimeIdea Ventures collects, uses, and protects personal information shared through the website, forms, and consultations. Vadodara-based research-led firm guided by Partha Shah, SEBI RA INH000017815.",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: PAGE_URL,
    site_name: "PrimeIdea Ventures",
    title: "Privacy Policy | PrimeIdea Ventures",
    description:
      "Privacy practices for website visitors and people who contact PrimeIdea Ventures for portfolio review or related services.",
  },
  twitter: {
    handle: "@primeidea",
    site: "@primeidea",
    cardType: "summary_large_image",
  },
  alternates: {
    canonical: PAGE_URL,
    languages: { "en-US": PAGE_URL },
  },
};

const sections = [
  {
    title: "Who we are",
    body: "PrimeIdea Ventures is a Vadodara-based research-led wealth management and portfolio review firm serving investors across Gujarat and India, with a research process guided by Partha Shah, SEBI Registered Research Analyst INH000017815.",
  },
  {
    title: "Information we collect",
    body: "We may collect details you submit through contact forms, portfolio review bookings, WhatsApp or phone enquiries, career applications, and related channels — such as name, contact details, city, goals, and documents you choose to share for a review.",
  },
  {
    title: "How we use information",
    body: "Information is used to respond to enquiries, schedule consultations, deliver research-led portfolio reviews where requested, improve website experience, and meet legal or regulatory obligations. We do not sell personal information.",
  },
  {
    title: "Sharing",
    body: "We may share information with service providers who help us operate forms, email, hosting, or analytics, and with partner professionals only when you request partner-enabled coordination (for example succession support). Legal drafting and opinions remain with qualified professionals.",
  },
  {
    title: "Retention & security",
    body: "We retain information only as long as needed for the purpose collected or as required by law. Reasonable technical and organisational measures are used to protect data; no method of transmission is fully secure.",
  },
  {
    title: "Your choices",
    body: "You may ask for access, correction, or deletion of personal information we hold about you, subject to legal retention needs. Contact us through the website contact form or phone listed on Regulatory Disclosures.",
  },
];

const breadcrumbSchema = buildBreadcrumbJsonLd([
  { name: "Privacy Policy", url: PAGE_PATH },
]);

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#F6FDFF]">
      <ScopePageJsonLd data={[breadcrumbSchema]} />

      <BannerSection
        mainBannerImage="/images/home/banner.png"
        bannerRightImg="/images/home/banner-right.png"
        mainTitle="Privacy Policy"
        mainSubTitle="How PrimeIdea Ventures handles personal information shared through the website and consultations. Guided by Partha Shah, SEBI Registered Research Analyst INH000017815."
        mainLinkTitle="Contact Us"
        mainLink="/contact-us"
        usePrimaryAsLink={true}
        secondaryLinkTitle="Regulatory Disclosures"
        secondaryLink="/regulatory-disclosures"
      />

      <ScopeBreadcrumbs items={[{ label: "Privacy Policy" }]} />

      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4 max-w-[760px]">
          <p className="text-base text-[#4D4D4D] leading-relaxed mb-10">
            This page summarises privacy practices for visitors and clients. It is not legal
            advice. For registration, grievance, and risk disclosures, see{" "}
            <Link href="/regulatory-disclosures" className="font-semibold text-[#293C7D] underline">
              Regulatory Disclosures
            </Link>
            .
          </p>
          <div className="space-y-8">
            {sections.map((item) => (
              <div key={item.title}>
                <h2 className="text-xl md:text-2xl font-semibold text-[#2D2D2D] mb-3">
                  {item.title}
                </h2>
                <p className="text-base text-[#4D4D4D] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ScopeDisclaimerBar />
      <Footer />
    </div>
  );
}
