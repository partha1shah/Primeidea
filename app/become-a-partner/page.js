import BannerSection from "@/components/becomeAPartner/bannerSection";
import BenefitsOfPartnership from "@/components/becomeAPartner/benefitsOfPartnership";
import ExpertiseSection from "@/components/becomeAPartner/expertiseSection";
import FaqsSection from "@/components/becomeAPartner/faqsSection";
import HowWeSupport from "@/components/becomeAPartner/howWeSupport";
import JoinOurNetwork from "@/components/becomeAPartner/joinOurNetwork";
import ClientTestimonial from "@/components/clientTestimonial";
import Footer from "@/components/footer";

export const metadata = {
  title: 'Become A Partner | PrimeIdea - Your Trusted Financial Partner',
  description: 'Join PrimeIdea Ventures as a partner and grow your financial advisory business. Get access to comprehensive support, technology tools, and expert resources to enhance your practice and serve clients better.',
  keywords: 'mutual funds, investment advisory, financial planning, wealth management, retirement planning, insurance solutions, Partha Shah, PrimeIdea Ventures, Gujarat financial advisor, investment consultant',
  author: 'Partha Shah',
  robots: 'index, follow',
  canonical: 'https://www.primeidea.in/become-a-partner/',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.primeidea.in/become-a-partner/',
    site_name: 'PrimeIdea Ventures',
    title: 'Become A Partner | PrimeIdea - Your Trusted Financial Partner',
    description: 'Join PrimeIdea Ventures as a partner and grow your financial advisory business. Get access to comprehensive support, technology tools, and expert resources to enhance your practice and serve clients better.',
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
