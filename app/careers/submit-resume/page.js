import ApplyNow from "@/components/careers/applyNow";
import ApplyNowForm from "@/components/careers/applyNowForm";
import BannerSection from "@/components/careers/bannerSection";
import CoreValues from "@/components/careers/coreValues";
import ClientTestimonial from "@/components/clientTestimonial";
import Footer from "@/components/footer";

export const metadata = {
    title: 'Careers | PrimeIdea - Your Trusted Financial Partner',
    description: 'Join PrimeIdea Ventures and be part of a dynamic team shaping the future of financial services. Explore exciting career opportunities in investment advisory, financial planning, and wealth management.',
    keywords: 'mutual funds, investment advisory, financial planning, wealth management, retirement planning, insurance solutions, Partha Shah, PrimeIdea Ventures, Gujarat financial advisor, investment consultant',
    author: 'Partha Shah',
    viewport: 'width=device-width, initial-scale=1',
    robots: 'index, follow',
    canonical: 'https://primeidea.in/careers/submit-resume',
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        url: 'https://primeidea.in/careers/submit-resume',
        site_name: 'PrimeIdea Ventures',
        title: 'Careers | PrimeIdea - Your Trusted Financial Partner',
        description: 'Join PrimeIdea Ventures and be part of a dynamic team shaping the future of financial services. Explore exciting career opportunities in investment advisory, financial planning, and wealth management.',
    },
    twitter: {
        handle: '@primeidea',
        site: '@primeidea',
        cardType: 'summary_large_image',
    },
    alternates: {
        canonical: 'https://primeidea.in/careers/submit-resume',
        languages: {
            'en-US': 'https://primeidea.in/careers/submit-resume',
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
