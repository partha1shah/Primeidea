import BannerSection from "@/components/bannerSection";
import ClientTestimonial from "@/components/clientTestimonial";
import Footer from "@/components/footer";
import Header from "@/components/header";
import InsightsSection from "@/components/insightsSection";
import AboutInsurance from "@/components/insurance/aboutInsurance";
import ProtectingFinanceFuture from "@/components/insurance/protectingFinanceFuture";
import TypesOfInsurance from "@/components/insurance/typeOfInsurance";
import Image from "next/image";
import graphqlRequest from "@/lib/graphqlRequest";
import FaqsSection from "@/components/insurance/faqsSection";

// export const metadata = {
//     title: 'Get Best Insurance Services in India | PrimeIdea Ventures',
//     description: 'Secure your future with PrimeIdea Ventures expert insurance services. From life and health coverage to auto and home protection, find solutions according to your needs.',
// }

export const metadata = {
    title: 'Get Best Insurance Services in India | PrimeIdea Ventures',
    description: 'Secure your future with PrimeIdea Ventures expert insurance services. From life and health coverage to auto and home protection, find solutions according to your needs.',
    keywords: 'mutual funds, investment advisory, financial planning, wealth management, retirement planning, insurance solutions, Partha Shah, PrimeIdea Ventures, Gujarat financial advisor, investment consultant',
    author: 'Partha Shah',
    viewport: 'width=device-width, initial-scale=1',
    robots: 'index, follow',
    canonical: 'https://primeidea.in/insurance/',
    openGraph: {
      type: 'website',
      locale: 'en_IE',
      url: 'https://primeidea.in/insurance/',
      site_name: 'PrimeIdea Ventures',
      title: 'Get Best Insurance Services in India | PrimeIdea Ventures',
      description: 'Secure your future with PrimeIdea Ventures expert insurance services. From life and health coverage to auto and home protection, find solutions according to your needs.',
    },
    twitter: {
      handle: '@primeidea',
      site: '@primeidea',
      cardType: 'summary_large_image',
    },
    alternates: {
      canonical: 'https://primeidea.in/insurance/',
      languages: {
        'en-US': 'https://primeidea.in/insurance/',
      },
    },
  };

async function getData(categorySlug) {
  const query = {
      query: `query getPostListByCategory($categorySlug: String!) {
          posts(where: {categoryName: $categorySlug, orderby: {field: DATE, order: DESC}}) {
              nodes {
                  date
                  slug
                  title
                  excerpt(format: RENDERED)
                  featuredImage {
                      node {
                          uri
                          sourceUrl
                          mediaDetails {
                              file
                              sizes {
                                  sourceUrl
                                  width
                                  height
                              }
                          }
                      }
                  }
                  categories {
                      nodes {
                          name
                          slug
                      }
                  }
                  author {
                      node {
                          avatar {
                              url
                          }
                          name
                      }
                  }
              }
              pageInfo {
                  endCursor
                  hasNextPage
                  hasPreviousPage
                  startCursor
              }
          }
      }`,
      variables: { categorySlug } // Pass categorySlug as a variable
  };

  const data = await graphqlRequest(query);
  return data.data; // Return the post data from the response
}

export default async function InsurancePage() {
  const categorySlug= 'Insurance';
    const posts = await getData(categorySlug);
  return (
    <div className="bg-[#F6FDFF]">
      <BannerSection 
        mainBannerImage={"/images/insurance/banner.jpg"}
        bannerRightImg={"/images/insurance/banner-right.png"}
        mainTitle={"Protect Your Family's Future with Confidence"}
        mainSubTitle={"Expert Assistance in Navigating Insurance Claims and Ensuring Financial Security"}
        mainLinkTitle={"Get Expert Guidance Now"}
        mainLink={"https://api.whatsapp.com/send?phone=918141027000&text=Hello, I'm interested in learning more about your financial advisory and investment services. Could you please provide me with some details on how I can start planning my investments? Looking forward to hearing from you!"}
        subSectionContent={"Primeidea creates financial plans that fuel your ambitions today and secure your success for tomorrow, whether you’re starting out or scaling up."}
        subSectionTitle1={"Trusted By Family"}
        subSectionSubTitle1={"1000+"}
        subSectionTitle2={"Years of expertise"}
        subSectionSubTitle2={"30+"}
        subSectionTitle3={"Client Satisfaction"}
        subSectionSubTitle3={"1500+"}
      />

      <AboutInsurance />

      <TypesOfInsurance />

      <ProtectingFinanceFuture />

      <InsightsSection  blogsListing={posts.posts.nodes} bgColor="bg-[#F6FDFF]" />
      
      <FaqsSection />

      <ClientTestimonial />

      <Footer />

    </div>
  );
};

