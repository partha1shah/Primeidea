import ApplyNow from "@/components/careers/applyNow";
import BannerSection from "@/components/careers/bannerSection";
import CareerDetailSection from "@/components/careers/careerDetailSection";
import ClientTestimonial from "@/components/clientTestimonial";
import Footer from "@/components/footer";
import graphqlRequest from "../../../lib/graphqlRequest";
import { getJobOpeningsSlugs, getSingleJobOpening } from "@/lib/jobOpenings";

export async function generateStaticParams() {
  const jobOpeningSlugs = await getJobOpeningsSlugs();
  return Object.values(jobOpeningSlugs)
}
async function getJobOpeningData(jobOpeningSlug) {
  const res = await getSingleJobOpening(jobOpeningSlug);
  return res;
}

export async function generateMetadata({ params }) {
  const { jobOpeningSlug } = params;
  const query = {
    query: `query pageSEO {
      jobOpening(id: "${jobOpeningSlug}", idType: SLUG) {
          seo {
            metaDesc
            title
            metaKeywords
            canonical
            focuskw
            opengraphTitle
            opengraphDescription
            twitterTitle
            twitterDescription
            opengraphImage {
              mediaDetails {
                sizes {
                  sourceUrl
                }
              }
            }
          }
        }
      }`,
  };
  const response = await graphqlRequest(query);
  const content = response;

  return {
    title: content.data.jobOpening.seo.title,
    description: content.data.jobOpening.seo.metaDesc,
    keywords: content.data.jobOpening.metaKeywords,
    applicationName: 'PrimeIdea Ventures',
    formatDetection: {
      email: true,
      address: true,
      telephone: true,
    },
    author: 'Partha Shah',
    viewport: 'width=device-width, initial-scale=1',
    robots: 'index, follow',
    canonical: `https://primeidea.in/careers/${jobOpeningSlug}`,
    alternates: {
      canonical: `https://primeidea.in/careers/${jobOpeningSlug}`,
      languages: {
        'en-US': `https://primeidea.in/careers/${jobOpeningSlug}`,
      },
    },
    openGraph: {
      title: content.data.jobOpening.seo.title,
      description: content.data.jobOpening.seo.metaDesc,
      url: `https://primeidea.in/careers/${jobOpeningSlug}`,
      site_name: 'PrimeIdea Ventures',
      // images: [
      //   {
      //     url: content.data.category?.seo?.opengraphImage?.mediaDetails.sizes
      //       .sourceUrl,
      //   },
      // ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      title: content.data.jobOpening.seo.title,
      description: content.data.jobOpening.seo.metaDesc,
      // images:
      //   content.data.category?.seo?.opengraphImage?.mediaDetails.sizes.sourceUrl,
    },
  };
}


// export const metadata = {
//   title: 'Careers | PrimeIdea - Your Trusted Financial Partner',
//   description: 'Join PrimeIdea Ventures and be part of a dynamic team shaping the future of financial services. Explore exciting career opportunities in investment advisory, financial planning, and wealth management.',
//   keywords: 'mutual funds, investment advisory, financial planning, wealth management, retirement planning, insurance solutions, Partha Shah, PrimeIdea Ventures, Gujarat financial advisor, investment consultant',
//   author: 'Partha Shah',
//   viewport: 'width=device-width, initial-scale=1',
//   robots: 'index, follow',
//   canonical: `https://primeidea.in/careers/${jobOpeningSlug}`,
//   openGraph: {
//     type: 'website',
//     locale: 'en_IE',
//     url: `https://primeidea.in/careers/${jobOpeningSlug}`,
//     site_name: 'PrimeIdea Ventures',
//     title: 'Careers | PrimeIdea - Your Trusted Financial Partner',
//     description: 'Join PrimeIdea Ventures and be part of a dynamic team shaping the future of financial services. Explore exciting career opportunities in investment advisory, financial planning, and wealth management.',
//   },
//   twitter: {
//     handle: '@primeidea',
//     site: '@primeidea',
//     cardType: 'summary_large_image',
//   },
//   alternates: {
//     canonical: `https://primeidea.in/careers/${jobOpeningSlug}`,
//     languages: {
//       'en-US': `https://primeidea.in/careers/${jobOpeningSlug}`,
//     },
//   },
// };

function removeDash(str) {
    return str.replace(/-/g, ' ');
  }

export default async function JobDetailPage({ params }) {
    const { jobOpeningSlug } = params;
    const jobOpeningDetail = await getJobOpeningData(jobOpeningSlug);
    const jobOpeningName = removeDash(jobOpeningSlug);


    return (
        <div className="bg-[#F6FDFF]">

            <BannerSection />

            {/* <CoreValues /> */}
            
            <CareerDetailSection jobOpeningDetail={jobOpeningDetail} jobOpeningName={jobOpeningName} />

            <ApplyNow />

            <ClientTestimonial />

            <Footer />

        </div>
    )
 }
