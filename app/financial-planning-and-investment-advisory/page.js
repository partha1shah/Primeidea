import BannerSection from "@/components/bannerSection";
import ClientTestimonial from "@/components/clientTestimonial";
import FaqsSection from "@/components/financialPlanning&Investment/faqsSection";
import FinancialPlanning from "@/components/financialPlanning&Investment/financialPlanning";
import GetStarted from "@/components/financialPlanning&Investment/getStarted";
import HelpWealthCreation from "@/components/financialPlanning&Investment/helpWealthCreation";
import InvestmentAdvisory from "@/components/financialPlanning&Investment/investmentAdvisory";
import KeyComponentsOfFinancialPlanning from "@/components/financialPlanning&Investment/keyComponentsFinancialPlanning";

import ReportSection from "@/components/financialPlanning&Investment/reportSection";
import StepperSection from "@/components/financialPlanning&Investment/steppers";
import Footer from "@/components/footer";
import InsightsSection from "@/components/insightsSection";
import graphqlRequest from "@/lib/graphqlRequest";

// export const metadata = {
//     title: 'Financial Planning And Investment Advisory Services in India',
//     description: 'Discover top-tier wealth management services in India with certified consultants. Contact with the best wealth management firm for solutions and expert advisory. Achieve your goals with our leading wealth management company.',
// }

export const metadata = {
    title: 'Financial Planning And Investment Advisory Services in India',
    description: 'Discover top-tier wealth management services in India with certified consultants. Contact with the best wealth management firm for solutions and expert advisory. Achieve your goals with our leading wealth management company.',
    keywords: 'mutual funds, investment advisory, financial planning, wealth management, retirement planning, insurance solutions, Partha Shah, PrimeIdea Ventures, Gujarat financial advisor, investment consultant',
    author: 'Partha Shah',
    viewport: 'width=device-width, initial-scale=1',
    robots: 'index, follow',
    canonical: 'https://primeidea.in/financial-planning-and-investment-advisory/',
    openGraph: {
      type: 'website',
      locale: 'en_IE',
      url: 'https://primeidea.in/financial-planning-and-investment-advisory/',
      site_name: 'PrimeIdea Ventures',
      title: 'Financial Planning And Investment Advisory Services in India',
      description: 'Discover top-tier wealth management services in India with certified consultants. Contact with the best wealth management firm for solutions and expert advisory. Achieve your goals with our leading wealth management company.',
    },
    twitter: {
      handle: '@primeidea',
      site: '@primeidea',
      cardType: 'summary_large_image',
    },
    alternates: {
      canonical: 'https://primeidea.in/financial-planning-and-investment-advisory/',
      languages: {
        'en-US': 'https://primeidea.in/financial-planning-and-investment-advisory/',
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

export default async function FinancialPlanningAndInvestmentAdvisory() { 
    const categorySlug= 'Finance Planning';
    const posts = await getData(categorySlug);

    const steps = [
        {
          id: '01',
          title: "Getting to know you.",
          content:
            "We begin the financial planning process by understanding your unique needs, goals, and existing assets and liabilities. We also pay close attention to the crucial details that impact your financial plan.",
        },
        {
          id: '02',
          title: "Finding the right investments",
          content:
            "We use our expertise and AI-driven Robo Advisor to match investment avenues with your goals, covering retirement and tax planning for a complete financial solution.",
        },
        {
          id: '03',
          title: "Recommending the best plan",
          content:
            "We recommend investments and manage your portfolio, including performance analysis and rebalancing, to help you achieve your financial goals.",
        },
      ];

    return (
        <div className="bg-[#F6FDFF]">
            <BannerSection 
             mainBannerImage={"/images/financial-planning/banner.png"}
             bannerRightImg={"/images/financial-planning/bannerright.png"}
             mainTitle={"Empowering Young Professionals & Enterprenuers to Secure Their Financial Future"}
             mainSubTitle={""}
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

            <FinancialPlanning />

            <KeyComponentsOfFinancialPlanning />

            <StepperSection />

            <HelpWealthCreation />

            <ReportSection />

            <InvestmentAdvisory />

            <div className="mt-16">
                <InsightsSection blogsListing={posts.posts.nodes} />
            </div>

            <FaqsSection />

            <ClientTestimonial />

            <GetStarted />

            <Footer />
        </div>
    )
 }
