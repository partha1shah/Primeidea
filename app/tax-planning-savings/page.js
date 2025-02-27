import BannerSection from "@/components/bannerSection";
import ClientTestimonial from "@/components/clientTestimonial";
import FaqsSection from "@/components/tax-planning/faqsSection";
import Footer from "@/components/footer";
import InsightsSection from "@/components/insightsSection";
import StepperSection from "@/components/steppers";
import GiftCitySection from "@/components/tax-planning/giftCitySection";
import TaxPlanning from "@/components/tax-planning/taxPlanning";
import YouIHereSection from "@/components/tax-planning/you-i-here";
import graphqlRequest from "@/lib/graphqlRequest";

// export const metadata = {
//     title: 'Get Tax Planning And Management Services in India',
//     description: 'Discover expert tax planning services in India to optimize your income and save more. Explore the best tax-saving plans to meet your financial goals. Secure your future with effective income tax planning strategies.',
// }

export const metadata = {
    title: 'Get Tax Planning And Management Services in India',
    description: 'Discover expert tax planning services in India to optimize your income and save more. Explore the best tax-saving plans to meet your financial goals. Secure your future with effective income tax planning strategies.',
    keywords: 'mutual funds, investment advisory, financial planning, wealth management, retirement planning, insurance solutions, Partha Shah, PrimeIdea Ventures, Gujarat financial advisor, investment consultant',
    author: 'Partha Shah',
    viewport: 'width=device-width, initial-scale=1',
    robots: 'index, follow',
    canonical: 'https://primeidea.in/tax-planning-savings/',
    openGraph: {
      type: 'website',
      locale: 'en_IE',
      url: 'https://primeidea.in/tax-planning-savings/',
      site_name: 'PrimeIdea Ventures',
      title: 'Get Tax Planning And Management Services in India',
      description: 'Discover expert tax planning services in India to optimize your income and save more. Explore the best tax-saving plans to meet your financial goals. Secure your future with effective income tax planning strategies.',
    },
    twitter: {
      handle: '@primeidea',
      site: '@primeidea',
      cardType: 'summary_large_image',
    },
    alternates: {
      canonical: 'https://primeidea.in/tax-planning-savings/',
      languages: {
        'en-US': 'https://primeidea.in/tax-planning-savings/',
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

export default async function TaxPlanningPage() { 
    const categorySlug= 'Tax Planning';
    const posts = await getData(categorySlug);

    const steps = [
    {
      id: '01',
      title: "Assess Your Income and Tax Liability",
      content:
        "Evaluate your total income and calculate your tax liability based on current slabs.",
    },
    {
      id: '02',
      title: "Maximize Section 80C Deductions",
      content:
        "Invest in ELSS, PPF, and insurance to claim ₹1.5 lakh deductions under Section 80C and reduce taxable income.",
    },
    {
      id: '03',
      title: "Utilize Additional Deductions",
      content:
        "Use deductions under Sections 80D, 24(b), and 80E to lower your tax liability.",
    },
    {
      id: '04',
      title: "Tax-Exempt & Income Splitting",
      content: "Use HRA, LTA, and split income to leverage lower tax brackets.",
    },
  ];

    return (
        <div className="bg-[#F6FDFF]">

            <BannerSection 
                mainBannerImage={"/images/tax-planning/banner.png"}
                bannerRightImg={"/images/tax-planning/bannerright.png"}
                mainTitle={"Optimize Your Tax Liabilities with Strategic Planning"}
                mainSubTitle={"Comprehensive Solutions to Minimize Taxes and Maximize Savings"}
                mainLinkTitle={"Start Saving on Taxes Now"}
                mainLink={"https://api.whatsapp.com/send?phone=918141027000&text=Hello, I'm interested in learning more about your financial advisory and investment services. Could you please provide me with some details on how I can start planning my investments? Looking forward to hearing from you!"}
                subSectionContent={"Primeidea creates financial plans that fuel your ambitions today and secure your success for tomorrow, whether you’re starting out or scaling up."}
                subSectionTitle1={"Trusted By Family"}
                subSectionSubTitle1={"1000+"}
                subSectionTitle2={"Years of expertise"}
                subSectionSubTitle2={"30+"}
                subSectionTitle3={"Client Satisfaction"}
                subSectionSubTitle3={"1500+"}
            />
            <TaxPlanning  />
            <StepperSection title={'Steps for Tax Planning & Savings'}  steps={steps}/>
            <YouIHereSection />
            <GiftCitySection />
            <InsightsSection blogsListing={posts.posts.nodes} />
            <FaqsSection />
            <ClientTestimonial />
            <Footer />
        </div>
    )
 }
