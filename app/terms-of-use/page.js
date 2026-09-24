import BannerSection from "@/components/bannerSection";
import Footer from "@/components/footer";
import ScopeBreadcrumbs from "@/components/scope/ScopeBreadcrumbs";
import ScopeDisclaimerBar from "@/components/scope/ScopeDisclaimerBar";
import ScopePageJsonLd, { buildBreadcrumbJsonLd } from "@/components/scope/ScopePageJsonLd";
import Link from "next/link";

const PAGE_PATH = "/terms-of-use";
const PAGE_URL = `https://primeidea.in${PAGE_PATH}`;

export const metadata = {
  title: "Terms of Use",
  description:
    "Terms for using the PrimeIdea Ventures website. Educational, research-led content from a Vadodara base — no guaranteed returns. Guided by Partha Shah, SEBI RA INH000017815.",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: PAGE_URL,
    site_name: "PrimeIdea Ventures",
    title: "Terms of Use | PrimeIdea Ventures",
    description:
      "Website terms for PrimeIdea Ventures — research-led content, market-risk disclaimer, and role clarification.",
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
    title: "Acceptance",
    body: "By using primeidea.in you agree to these terms. If you do not agree, please do not use the site. Content is provided for information and education about research-led portfolio review and related services.",
  },
  {
    title: "Who we are",
    body: "PrimeIdea Ventures is a Vadodara-based research-led wealth management and portfolio review firm serving investors across Gujarat and India, with a research process guided by Partha Shah, SEBI Registered Research Analyst INH000017815. PrimeIdea does not present itself as a SEBI Registered Investment Adviser unless separately registered.",
  },
  {
    title: "No advice or guarantees",
    body: "Website content, calculators, comparisons, and articles are educational and illustrative. They are not personalised investment advice, a solicitation to buy or sell securities, or a promise of returns. Investments in the securities market are subject to market risks. Past performance is not indicative of future results.",
  },
  {
    title: "Third-party links & partners",
    body: "Links to SEBI SCORES, app stores, or other sites are provided for convenience. Partner-enabled services (such as succession coordination) are presented without partner name or pricing on this site; legal work is performed by qualified professionals.",
  },
  {
    title: "Intellectual property",
    body: "Site design, text, and materials are owned by PrimeIdea Ventures or its licensors. You may not copy or redistribute content for commercial use without prior written permission.",
  },
  {
    title: "Changes",
    body: "We may update these terms from time to time. Continued use of the site after changes means you accept the updated terms. For complaints and grievances, use the process on Regulatory Disclosures.",
  },
];

const breadcrumbSchema = buildBreadcrumbJsonLd([
  { name: "Terms of Use", url: PAGE_PATH },
]);

export default function TermsOfUsePage() {
  return (
    <div className="bg-[#F6FDFF]">
      <ScopePageJsonLd data={[breadcrumbSchema]} />

      <BannerSection
        mainBannerImage="/images/home/banner.png"
        bannerRightImg="/images/home/banner-right.png"
        mainTitle="Terms of Use"
        mainSubTitle="Rules for using the PrimeIdea Ventures website — educational content, market risks, and clear role boundaries. Guided by Partha Shah, SEBI Registered Research Analyst INH000017815."
        mainLinkTitle="Regulatory Disclosures"
        mainLink="/regulatory-disclosures"
        usePrimaryAsLink={true}
        secondaryLinkTitle="Contact Us"
        secondaryLink="/contact-us"
      />

      <ScopeBreadcrumbs items={[{ label: "Terms of Use" }]} />

      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4 max-w-[760px]">
          <p className="text-base text-[#4D4D4D] leading-relaxed mb-10">
            These terms apply to use of the website. Registration, Investor Charter, grievance,
            and risk details live on{" "}
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
