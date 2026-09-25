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
  title: 'Careers',
  description: 'Careers at PrimeIdea Ventures in Vadodara. The office works on portfolio review and research-led wealth management under SEBI Registered Research Analyst INH000017815.',
  keywords: 'PrimeIdea careers, Vadodara, portfolio review, research team, Partha Shah, SEBI Registered Research Analyst INH000017815',
  author: 'Partha Shah',
  robots: 'index, follow',
  canonical: 'https://www.primeidea.in/careers/',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.primeidea.in/careers/',
    site_name: 'PrimeIdea Ventures',
    title: 'Careers | PrimeIdea Ventures',
    description: 'Careers at PrimeIdea Ventures in Vadodara. The office works on portfolio review and research-led wealth management under SEBI Registered Research Analyst INH000017815.',
  },
  twitter: {
    handle: '@primeidea',
    site: '@primeidea',
    cardType: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://www.primeidea.in/careers/',
    languages: {
      'en-US': 'https://www.primeidea.in/careers/',
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
