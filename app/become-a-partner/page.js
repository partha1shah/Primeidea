import BannerSection from "@/components/becomeAPartner/bannerSection";
import BenefitsOfPartnership from "@/components/becomeAPartner/benefitsOfPartnership";
import ExpertiseSection from "@/components/becomeAPartner/expertiseSection";
import FaqsSection from "@/components/becomeAPartner/faqsSection";
import HowWeSupport from "@/components/becomeAPartner/howWeSupport";
import JoinOurNetwork from "@/components/becomeAPartner/joinOurNetwork";
import ClientTestimonial from "@/components/clientTestimonial";
import Footer from "@/components/footer";

export const metadata = {
  title: 'Become a Partner',
  description: 'Partner with PrimeIdea Ventures, a Vadodara research desk under SEBI Registered Research Analyst INH000017815. Partners use the research process with their clients. PrimeIdea is not a SEBI Registered Investment Adviser unless separately registered.',
  keywords: 'PrimeIdea partner, portfolio review, research process, Partha Shah, SEBI Registered Research Analyst INH000017815, Vadodara',
  author: 'Partha Shah',
  robots: 'index, follow',
  canonical: 'https://www.primeidea.in/become-a-partner/',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.primeidea.in/become-a-partner/',
    site_name: 'PrimeIdea Ventures',
    title: 'Become a Partner | PrimeIdea Ventures',
    description: 'Partner with PrimeIdea Ventures, a Vadodara research desk under SEBI Registered Research Analyst INH000017815. Partners use the research process with their clients. PrimeIdea is not a SEBI Registered Investment Adviser unless separately registered.',
  },
  twitter: {
    handle: '@primeidea',
    site: '@primeidea',
    cardType: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://www.primeidea.in/become-a-partner/',
    languages: {
      'en-US': 'https://www.primeidea.in/become-a-partner/',
    },
  },
};


export default async function BecomeAPartner() { 
    
    return (
        <div className="bg-[#F6FDFF]">

            <BannerSection />

            <ExpertiseSection />

            <BenefitsOfPartnership />

            <HowWeSupport />

            <JoinOurNetwork />
            
            <FaqsSection />

            <ClientTestimonial />

            <Footer />

        </div>
    )
 }
