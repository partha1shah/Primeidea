import BannerSection from "@/components/bannerSection";
import ClientTestimonial from "@/components/clientTestimonial";
import Footer from "@/components/footer";
import InsightsSection from "@/components/insightsSection";
import WorkSection from "@/components/researchWelathManagement/workSection";
import GetStarted from "@/components/retirement-planning/getStarted";
import ReportSection from "@/components/retirement-planning/reportSection";
import StepperSection from "@/components/steppers";
import graphqlRequest from "@/lib/graphqlRequest";
import RetirementPlanningSection from "@/components/retirement-planning/retirementPlanningSection";
import FaqsSection from "@/components/retirement-planning/faqsSection";

// export const metadata = {
//     title: 'Best Retirement Plan Services in India - PrimeIdea',
//     description: 'Secure your future with the best retirement plans. Get expert retirement financial planning and pension services in India. Explore top retirement plan options and start planning today. ',
// }

export const metadata = {
    title: 'Best Retirement Plan Services in India - PrimeIdea',
    description: 'Secure your future with the best retirement plans. Get expert retirement financial planning and pension services in India. Explore top retirement plan options and start planning today.',
    keywords: 'mutual funds, investment advisory, financial planning, wealth management, retirement planning, insurance solutions, Partha Shah, PrimeIdea Ventures, Gujarat financial advisor, investment consultant',
    author: 'Partha Shah',
    viewport: 'width=device-width, initial-scale=1',
    robots: 'index, follow',
    canonical: 'https://primeidea.in/retirement-planning/',
    openGraph: {
      type: 'website',
      locale: 'en_IE',
      url: 'https://primeidea.in/retirement-planning/',
      site_name: 'PrimeIdea Ventures',
      title: 'Best Retirement Plan Services in India - PrimeIdea',
      description: 'Secure your future with the best retirement plans. Get expert retirement financial planning and pension services in India. Explore top retirement plan options and start planning today.',
    },
    twitter: {
      handle: '@primeidea',
      site: '@primeidea',
      cardType: 'summary_large_image',
    },
    alternates: {
      canonical: 'https://primeidea.in/retirement-planning/',
      languages: {
        'en-US': 'https://primeidea.in/retirement-planning/',
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

export default async function RetirementPlanning() { 
  const categorySlug= 'Retirement Planning';
  const posts = await getData(categorySlug);
    const steps = [
        {
          id: '01',
          title: "Planning",
          content:
            "The first step in retirement planning is identifying your target retirement age, desired post-retirement lifestyle, life expectancy, and the retirement corpus needed to support it.",
        },
        {
          id: '02',
          title: "Designing",
          content:
            "This step involves selecting investment options to build your retirement corpus and creating a realistic plan to achieve your goal.",
        },
        {
          id: '03',
          title: "Execution",
          content:
            "Assisting you at every step in dedicatedly following the created plan for the required tenure to successfully complete the investment journey and achieve the desired goals.",
        },
        {
          id: '04',
          title: "Review",
          content: "Regularly review your investments' performance and make adjustments as needed to stay on track and achieve your desired returns.",
        },
      ];
    
    return (
        <div className="bg-[#F6FDFF]">

            <BannerSection 
            mainBannerImage={"/images/retirement-planning/banner-right.png"}
            mainMobileBannerImage={"/images/retirement-planning/banner-mobile.png"}
            isMobileBanner={true}
            mainTitle={"Retirement Planning Made Simple and Effective"}
            mainSubTitle={"With tailored strategies from Primeidea, prepare for a retirement that reflects your dreams and goals."}
            mainLinkTitle={"Start your journey with us"}
            mainLink={"https://api.whatsapp.com/send?phone=918141027000&text=Hello, I'm interested in learning more about your financial advisory and investment services. Could you please provide me with some details on how I can start planning my investments? Looking forward to hearing from you!"}
            subSectionContent={"Primeidea creates financial plans that fuel your ambitions today and secure your success for tomorrow, whether you’re starting out or scaling up."}
            subSectionTitle1={"Trusted By Family"}
            subSectionSubTitle1={"1000+"}
            subSectionTitle2={"Years of expertise"}
            subSectionSubTitle2={"30+"}
            subSectionTitle3={"Client Satisfaction"}
            subSectionSubTitle3={"1500+"}
            />

            {/* <WorkSection /> */}
            <RetirementPlanningSection  />

            <StepperSection title={'Steps for Dream Retirement Planning'} steps={steps}/>

            <div className="md:mb-[140px]">
                <ReportSection />
            </div>

            <InsightsSection blogsListing={posts.posts.nodes} customCSS={'pb-0'}/>

            <FaqsSection />

            <ClientTestimonial />

            {/* <>Get Started</> */}
            <GetStarted />  

            <Footer />

        </div>
    )
 }

 