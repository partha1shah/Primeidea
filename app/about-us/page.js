import BannerSection from "@/components/aboutUs/bannerSection";
import ExpertiseSection from "@/components/aboutUs/expertiseSection";
import HowFinancialAdvisorHelp from "@/components/aboutUs/howFinancialAdvisorHelp";
import MeetOurTeam from "@/components/aboutUs/meetourTeam";
import ClientTestimonial from "@/components/clientTestimonial";
import FaqsSection from "@/components/faqsSection";
import Footer from "@/components/footer";
import InsightsSection from "@/components/insightsSection";
import JoinCommunity from "@/components/joinCommunity";
import StepperSection from "@/components/steppers";
import { getPostList } from "@/lib/posts";

// export const metadata = {
//   title: 'About Us | PrimeIdea - Your Trusted Financial Partner',
//   description: 'Get to know PrimeIdea Ventures, a team of financial experts to help you achieve your personal and business goals. Learn about our values and vision.',
// }
export const metadata = {
  title: 'About Us | PrimeIdea - Your Trusted Financial Partner',
  description: 'Get to know PrimeIdea Ventures, a team of financial experts to help you achieve your personal and business goals. Learn about our values and vision.',
  keywords: 'mutual funds, investment advisory, financial planning, wealth management, retirement planning, insurance solutions, Partha Shah, PrimeIdea Ventures, Gujarat financial advisor, investment consultant',
  author: 'Partha Shah',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  canonical: 'https://primeidea.in/about-us/',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://primeidea.in/about-us/',
    site_name: 'PrimeIdea Ventures',
    title: 'About Us | PrimeIdea - Your Trusted Financial Partner',
    description: 'Get to know PrimeIdea Ventures, a team of financial experts to help you achieve your personal and business goals. Learn about our values and vision.',
  },
  twitter: {
    handle: '@primeidea',
    site: '@primeidea',
    cardType: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://primeidea.in/about-us/',
    languages: {
      'en-US': 'https://primeidea.in/about-us/',
    },
  },
};


async function getData(params) {
  const allPosts = await getPostList();
  return { allPosts: allPosts };
}

export default async function AboutUs() { 
  const blogsListing = await getData();
    const steps = [
        {
          id: '01',
          title: "Solutions",
          content:
            "Providing tailored financial solutions to optimize growth and  returns for our clients.",
        },
        {
          id: '02',
          title: "Research",
          content:
            "In-depth research analysis drive our financial services to deliver accurate and valuable insights.",
        },
        {
          id: '03',
          title: "Planning",
          content:
            "Strategic planning and forecasting are essential for ensuring financial stability and success.",
        },
        {
          id: '04',
          title: "Ethics",
          content: "Ethical practices and transparency from the foundation of our financial services, fostering trust and long term partnerships. ",
        },
      ];
    
    return (
        <div className="bg-[#F6FDFF]">

            <BannerSection />

            <ExpertiseSection />

            <div className="bg-white">
                <StepperSection 
                  title={'Our Process'}
                  steps={steps}
                  // title1={'Solutions'}
                  // content1={'Providing tailored financial solutions to optimize growth and  returns for our clients.'}
                  // title2={'Research'}
                  // content2={'In-depth research analysis drive our financial services to deliver accurate and valuable insights.'}
                  // title3={'Planning'}
                  // content3={'Strategic planning and forecasting are essential for ensuring financial stability and success.'}
                  // title4={'Ethics'}
                />
            </div>

            <JoinCommunity />

            <HowFinancialAdvisorHelp />

            {/* <MeetOurTeam /> */}

            {/* <InsightsSection blogsListing={blogsListing.allPosts.nodes}/> */}

            {/* <FaqsSection /> */}

            <ClientTestimonial />

            <Footer />

        </div>
    )
 }
