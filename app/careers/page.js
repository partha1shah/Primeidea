import ApplyNow from "@/components/careers/applyNow";
import BannerSection from "@/components/careers/bannerSection";
import CoreValues from "@/components/careers/coreValues";
import JobListingSection from "@/components/careers/jobListing";
import ClientTestimonial from "@/components/clientTestimonial";
import Footer from "@/components/footer";
import { getJobOpeningtList } from "@/lib/jobOpenings";

async function getJobOpeningData() {
  const allJobOpenings = await getJobOpeningtList();
  return { allJobOpenings: allJobOpenings };
}

export const metadata = {
  title: 'Careers | PrimeIdea - Your Trusted Financial Partner',
  description: 'Join PrimeIdea Ventures and be part of a dynamic team shaping the future of financial services. Explore exciting career opportunities in investment advisory, financial planning, and wealth management.',
  keywords: 'mutual funds, investment advisory, financial planning, wealth management, retirement planning, insurance solutions, Partha Shah, PrimeIdea Ventures, Gujarat financial advisor, investment consultant',
  author: 'Partha Shah',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  canonical: 'https://primeidea.in/careers/',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://primeidea.in/careers/',
    site_name: 'PrimeIdea Ventures',
    title: 'Careers | PrimeIdea - Your Trusted Financial Partner',
    description: 'Join PrimeIdea Ventures and be part of a dynamic team shaping the future of financial services. Explore exciting career opportunities in investment advisory, financial planning, and wealth management.',
  },
  twitter: {
    handle: '@primeidea',
    site: '@primeidea',
    cardType: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://primeidea.in/careers/',
    languages: {
      'en-US': 'https://primeidea.in/careers/',
    },
  },
};

export default async function Careers() { 
  const jobOpeningsList = await getJobOpeningData();
    
    return (
        <div className="bg-[#F6FDFF]">

            <BannerSection />

            <JobListingSection jobOpeningsList={jobOpeningsList.allJobOpenings.data.jobOpenings.nodes} />

            <CoreValues />
            
            <ApplyNow />

            <ClientTestimonial />

            <Footer />

        </div>
    )
 }
