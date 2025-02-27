import BannerSection from "@/components/bannerSection";
import ClientTestimonial from "@/components/clientTestimonial";
import Footer from "@/components/footer";
import InsightsSection from "@/components/insightsSection";
import FaqsSection from "@/components/researchWelathManagement/faqsSection";
import HowDoWeDoIt from "@/components/researchWelathManagement/howDoWeDoIt";
import PowerOfStrategy from "@/components/researchWelathManagement/powerOfStrategy";
import PrimeIdeaHelps from "@/components/researchWelathManagement/primeideaHelps";
import WorkSection from "@/components/researchWelathManagement/workSection";
import StepperSection from "@/components/steppers";
import graphqlRequest from "@/lib/graphqlRequest";

export const metadata = {
    title: 'Get Best Wealth Management Services in India - PrimeIdea',
    description: 'Discover top-tier wealth management services in India with certified consultants. Contact with the best wealth management firm for solutions and expert advisory. Achieve your goals with our leading wealth management company.',
    keywords: 'mutual funds, investment advisory, financial planning, wealth management, retirement planning, insurance solutions, Partha Shah, PrimeIdea Ventures, Gujarat financial advisor, investment consultant',
    author: 'Partha Shah',
    viewport: 'width=device-width, initial-scale=1',
    robots: 'index, follow',
    canonical: 'https://primeidea.in/research-based-wealth-management/',
    openGraph: {
      type: 'website',
      locale: 'en_IE',
      url: 'https://primeidea.in/research-based-wealth-management/',
      site_name: 'PrimeIdea Ventures',
      title: 'Get Best Wealth Management Services in India - PrimeIdea',
      description: 'Discover top-tier wealth management services in India with certified consultants. Contact with the best wealth management firm for solutions and expert advisory. Achieve your goals with our leading wealth management company.',
    },
    twitter: {
      handle: '@primeidea',
      site: '@primeidea',
      cardType: 'summary_large_image',
    },
    alternates: {
      canonical: 'https://primeidea.in/research-based-wealth-management/',
      languages: {
        'en-US': 'https://primeidea.in/research-based-wealth-management/',
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

export default async function ResearchBasedWealthManagementPage () { 
  const categorySlug= 'Wealth Management';
  const posts = await getData(categorySlug);
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
            
            <BannerSection 
             mainBannerImage={"/images/research-wealth-management/banner.png"}
             bannerRightImg={"/images/research-wealth-management/bannerright.png"}
             mainTitle={"Maximize Your Wealth Potential with Research-Driven Strategies"}
             mainSubTitle={"Transform Idle Savings into Strategic Investments with Data-Backed Insights"}
             mainLinkTitle={"Start Your Wealth Transformation Today"}
             mainLink={"https://api.whatsapp.com/send?phone=918141027000&text=Hello, I'm interested in learning more about your financial advisory and investment services. Could you please provide me with some details on how I can start planning my investments? Looking forward to hearing from you!"}
             subSectionContent={"Primeidea creates financial plans that fuel your ambitions today and secure your success for tomorrow, whether you’re starting out or scaling up."}
             subSectionTitle1={"Trusted By Family"}
             subSectionSubTitle1={"1000+"}
             subSectionTitle2={"Years of expertise"}
             subSectionSubTitle2={"30+"}
             subSectionTitle3={"Client Satisfaction"}
             subSectionSubTitle3={"1500+"}
            />

            <WorkSection />

            {/* <PrimeIdeaHelps /> */} 

            <HowDoWeDoIt />

            <StepperSection title={'Our Process'} steps={steps} />

            <PowerOfStrategy />

            <InsightsSection blogsListing={posts.posts.nodes}/>

            <FaqsSection />

            <ClientTestimonial />

            <Footer />

        </div>
    )
 }
