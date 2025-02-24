import BannerSection from "@/components/bannerSection";
import ClientTestimonial from "@/components/clientTestimonial";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ComprehensiveSolutions from "@/components/home/comprehensiveSolutions";
import FaqsSection from "@/components/home/faqsSection";
import WealthCreationPreservation from "@/components/home/wealthCreationPreservationSection";
import InsightsSection from "@/components/insightsSection";
import JoinCommunity from "@/components/joinCommunity";
import { getPostList } from "@/lib/posts";
import Image from "next/image";

export const metadata = {
  title: 'PrimeIdea Ventures - Mutual Funds, Insurance and Investment Advisory',
  description: 'Your trusted partner for financial planning, investment advisory, and insurance solutions. Expert guidance for mutual funds, retirement planning, and wealth management with Partha Shah.',
  keywords: 'mutual funds, investment advisory, financial planning, wealth management, retirement planning, insurance solutions, Partha Shah, PrimeIdea Ventures, Gujarat financial advisor, investment consultant',
  author: 'Partha Shah',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  canonical: 'https://primeidea.in/',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://primeidea.in/',
    site_name: 'PrimeIdea Ventures',
    title: 'PrimeIdea Ventures - Expert Financial Planning & Investment Advisory',
    description: 'Transform your financial future with PrimeIdea Ventures. Professional guidance for mutual funds, insurance, and comprehensive wealth management solutions.',
    // images: [
    //   {
    //     url: 'https://primeidea.in/images/home/banner.png',
    //     width: 1200,
    //     height: 630,
    //     alt: 'PrimeIdea Ventures Banner',
    //   }
    // ],
  },
  twitter: {
    handle: '@primeidea',
    site: '@primeidea',
    cardType: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://primeidea.in',
    languages: {
      'en-US': 'https://primeidea.in',
    },
  },
};

async function getData(params) {
  const allPosts = await getPostList();
  return { allPosts: allPosts };
}


export default async function Home() {
  const blogsListing = await getData();
  return (
    <div className="bg-[#F6FDFF]">
      <BannerSection 
       mainBannerImage={"/images/home/banner.png"}
       bannerRightImg={"/images/home/banner-right.png"}
       mainTitle={"Experience You Can Trust"}
       mainSubTitle={"Under Partha Shah's guidance, Primeidea turns financial goals into reality."}
       mainLinkTitle={"Start your journey with us"}
       mainLink={"https://api.whatsapp.com/send?phone=918141027000&text=Hello, I'm interested in learning more about your financial advisory and investment services. Could you please provide me with some details on how I can start planning my investments? Looking forward to hearing from you!"}
       subSectionContent={"Primeidea creates financial plans that fuel your ambitions today and secure your success for tomorrow, whether you’re starting out or scaling up."}
       subSectionTitle1={"Trusted By Clients"}
       subSectionSubTitle1={"80+"}
       subSectionTitle2={"Years of expertise"}
       subSectionSubTitle2={"12+"}
       subSectionTitle3={"Client Satisfaction"}
       subSectionSubTitle3={"92+"}
      />

      <WealthCreationPreservation />

      <ComprehensiveSolutions />

      <InsightsSection blogsListing={blogsListing.allPosts.nodes}/>

      <JoinCommunity />

      <FaqsSection />

      <ClientTestimonial />

      <Footer />
    </div>
  );
}
