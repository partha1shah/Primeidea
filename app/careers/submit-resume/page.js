import ApplyNow from "@/components/careers/applyNow";
import ApplyNowForm from "@/components/careers/applyNowForm";
import BannerSection from "@/components/careers/bannerSection";
import CoreValues from "@/components/careers/coreValues";
import ClientTestimonial from "@/components/clientTestimonial";
import Footer from "@/components/footer";

export const metadata = {
    title: 'Submit a Resume',
    description: 'Send a resume to PrimeIdea Ventures in Vadodara. The office works on portfolio review and research-led wealth management under SEBI Registered Research Analyst INH000017815.',
    keywords: 'PrimeIdea careers, submit resume, Vadodara, Partha Shah, SEBI Registered Research Analyst INH000017815',
    author: 'Partha Shah',
    robots: 'index, follow',
    canonical: 'https://www.primeidea.in/careers/submit-resume',
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        url: 'https://www.primeidea.in/careers/submit-resume',
        site_name: 'PrimeIdea Ventures',
        title: 'Submit a Resume | PrimeIdea Ventures',
        description: 'Send a resume to PrimeIdea Ventures in Vadodara. The office works on portfolio review and research-led wealth management under SEBI Registered Research Analyst INH000017815.',
    },
    twitter: {
        handle: '@primeidea',
        site: '@primeidea',
        cardType: 'summary_large_image',
    },
    alternates: {
        canonical: 'https://www.primeidea.in/careers/submit-resume',
        languages: {
            'en-US': 'https://www.primeidea.in/careers/submit-resume',
        },
    },
};

export default async function SubmitResume() {
    return (
        <div className="bg-[#F6FDFF]">

            <BannerSection />

            {/* <CoreValues /> */}
            <section className="bg-white">
                <div className="py-16 mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
                    <div className="mx-auto max-w-[650px] shadow-[0_0_14px_1px_#0000001c] rounded-[20px] bg-white">
                        <ApplyNowForm />
                    </div>
                </div>
            </section>

            {/* <ApplyNow /> */}

            <ClientTestimonial />

            <Footer />

        </div>
    )
}
