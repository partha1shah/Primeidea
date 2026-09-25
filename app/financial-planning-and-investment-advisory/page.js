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

export const metadata = {
    title: 'Financial Planning',
    description: 'PrimeIdea writes a financial plan from goals, cash flow, and current holdings for investors in Vadodara and across Gujarat and India. Research is guided by Partha Shah, SEBI Registered Research Analyst INH000017815. This is not SEBI Registered Investment Adviser advice and does not guarantee returns.',
    keywords: 'financial planning, portfolio review, wealth management, Partha Shah, PrimeIdea Ventures, SEBI Registered Research Analyst INH000017815, Vadodara',
    author: 'Partha Shah',
    robots: 'index, follow',
    canonical: 'https://www.primeidea.in/financial-planning-and-investment-advisory/',
    openGraph: {
      type: 'website',
      locale: 'en_IE',
      url: 'https://www.primeidea.in/financial-planning-and-investment-advisory/',
      site_name: 'PrimeIdea Ventures',
      title: 'Financial Planning | PrimeIdea Ventures',
      description: 'PrimeIdea writes a financial plan from goals, cash flow, and current holdings for investors in Vadodara and across Gujarat and India. Research is guided by Partha Shah, SEBI Registered Research Analyst INH000017815. This is not SEBI Registered Investment Adviser advice and does not guarantee returns.',
    },
    twitter: {
      handle: '@primeidea',
      site: '@primeidea',
      cardType: 'summary_large_image',
    },
    alternates: {
      canonical: 'https://www.primeidea.in/financial-planning-and-investment-advisory/',
      languages: {
        'en-US': 'https://www.primeidea.in/financial-planning-and-investment-advisory/',
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

    return (
        <div className="bg-[#F6FDFF]">
            <BannerSection 
             mainBannerImage={"/images/financial-planning/banner.png"}
             bannerRightImg={"/images/financial-planning/bannerright.png"}
             mainTitle={"Financial planning, written before the next investment"}
             mainSubTitle={"Goals, cash flow, and holdings — reviewed in Vadodara"}
             mainLinkTitle={"Book a portfolio review"}
             mainLink={"/book-portfolio-review"}
             usePrimaryAsLink={true}
             subSectionContent={"PrimeIdea is based in Vadodara and serves investors across Gujarat and India. Research is guided by Partha Shah, SEBI RA INH000017815. No guaranteed returns."}
             subSectionTitle1={"Based in"}
             subSectionSubTitle1={"Vadodara"}
             subSectionTitle2={"Registration"}
             subSectionSubTitle2={"SEBI RA"}
             subSectionTitle3={"Serving"}
             subSectionSubTitle3={"India"}
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
