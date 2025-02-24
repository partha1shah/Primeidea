import ContactForm from "@/components/contact/contactForm";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";

// export const metadata = {
//     title: 'Contact Us | PrimeIdea - Financial Guidance & Support',
//     description: 'Have questions about financial planning or wealth management? Contact PrimeIdea Ventures for personalized advice and expert support.',
// }

export const metadata = {
    title: 'Contact Us | PrimeIdea - Financial Guidance & Support',
    description: 'Have questions about financial planning or wealth management? Contact PrimeIdea Ventures for personalized advice and expert support.',
    keywords: 'mutual funds, investment advisory, financial planning, wealth management, retirement planning, insurance solutions, Partha Shah, PrimeIdea Ventures, Gujarat financial advisor, investment consultant',
    author: 'Partha Shah',
    viewport: 'width=device-width, initial-scale=1',
    robots: 'index, follow',
    canonical: 'https://primeidea.in/contact-us/',
    openGraph: {
      type: 'website',
      locale: 'en_IE',
      url: 'https://primeidea.in/contact-us/',
      site_name: 'PrimeIdea Ventures',
      title: 'Contact Us | PrimeIdea - Financial Guidance & Support',
      description: 'Have questions about financial planning or wealth management? Contact PrimeIdea Ventures for personalized advice and expert support.',
    },
    twitter: {
      handle: '@primeidea',
      site: '@primeidea',
      cardType: 'summary_large_image',
    },
    alternates: {
      canonical: 'https://primeidea.in/contact-us/',
      languages: {
        'en-US': 'https://primeidea.in/contact-us/',
      },
    },
  };

const ContactUs = () => {   

    return (
        <>
        <Header />
            <main className="bg-[#f2f3f4] pt-24 py-12">
                <div className="2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] mx-auto px-4">                
                    <section className="mt-12">
                        <div className="text-center">
                            <h2 className="text-3xl font-semibold text-black">Contact Information</h2>
                            <p className="mt-4 text-lg text-black">
                                You can also reach us through the following methods
                            </p>
                        </div>
                        <div className="mt-8 flex flex-col md:flex-row md:space-x-4 justify-center max-w-[1050px] mx-auto">
                            <div className="text-center bg-[#bbdcfb3b] min-h-[220px] w-full max-w-[420px] mx-auto py-6 px-4 rounded-lg shadow-lg flex-1 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" className="mb-6 inline-block"><path d="M24.1641 30.002H15.8359C14.4609 30.002 13.3359 28.8772 13.3359 27.5024V19.1681C13.3359 17.7934 14.4609 16.6686 15.8359 16.6686H24.1719C25.5469 16.6686 26.6719 17.7934 26.6719 19.1681V27.5024C26.6641 28.8772 25.5469 30.002 24.1641 30.002ZM15.8359 18.3324C15.375 18.3324 15 18.7073 15 19.1681V27.5024C15 27.9633 15.375 28.3382 15.8359 28.3382H24.1719C24.6328 28.3382 25.0078 27.9633 25.0078 27.5024V19.1681C25.0078 18.7073 24.6328 18.3324 24.1719 18.3324H15.8359ZM32.5 40H7.5C3.36719 40 0 36.6335 0 32.5015V15.9344C0 13.4427 1.23438 11.115 3.30469 9.71685L15.8047 1.281C18.3516 -0.437416 21.6484 -0.437416 24.1953 1.281L36.6953 9.71685C38.7656 11.115 40 13.4349 40 15.9344V32.4937C40 36.6335 36.6328 40 32.5 40ZM20 1.66374C18.8672 1.66374 17.7266 1.99961 16.7422 2.67135L4.24219 11.0994C2.63281 12.1851 1.67188 13.9895 1.67188 15.9344V32.4937C1.67188 35.7118 4.28906 38.3285 7.50781 38.3285H32.5078C35.7266 38.3285 38.3438 35.7118 38.3438 32.4937V15.9344C38.3438 13.9895 37.3828 12.1851 35.7734 11.0994L23.2734 2.66354C22.2734 1.99961 21.1328 1.66374 20 1.66374Z" fill="black" className="fill-paragraph"></path></svg>
                                <h3 className="text-xl font-semibold text-gray-800">Address</h3>
                                <p className="mt-2 text-base text-gray-600">V3 Landmark, 306-307, opp. Atladara Railway Crossing Road, Narayanwadi, Atladara, Vadodara, Gujarat 390012</p>
                            </div>

                            <div className="text-center bg-[#bbdcfb3b] min-h-[220px] w-full max-w-[420px] mx-auto py-6 px-4 rounded-lg shadow-lg flex-1 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" className="mb-6 inline-block"><path d="M37.0899 2.93026L35.2227 1.29713C33.5196 -0.406328 30.6367 -0.484468 28.8008 1.38308L25.6836 5.46982C23.9336 7.22016 23.9336 10.0723 25.6836 11.807L28.168 14.3544C25.4649 20.6915 20.4883 25.6925 14.3477 28.193L11.8008 25.7003C10.9492 24.8486 9.83206 24.3798 8.63675 24.3798C7.44143 24.3798 6.31643 24.8486 5.55081 25.63L1.31643 28.8963C-0.433567 30.6466 -0.433567 33.4987 1.28518 35.1944L2.98831 37.1479C4.82425 38.9842 7.28518 40 9.97268 40C22.8867 40 40.0039 22.8638 40.0039 9.96288C40.0039 7.2983 38.9883 4.81344 37.1211 2.94589L37.0899 2.93026ZM9.93362 38.32C7.69924 38.32 5.65237 37.4839 4.16799 35.9992L2.46487 34.0301C1.36331 32.9283 1.36331 31.1467 2.37893 30.1153L6.61331 26.849C7.14456 26.3176 7.84768 26.0129 8.61331 26.0129C9.37893 26.0129 10.0821 26.3098 10.6133 26.849L13.5664 29.7324C13.8008 29.9668 14.1367 30.0293 14.4492 29.9121C21.4024 27.2631 27.0508 21.6136 29.9336 14.4403C30.0508 14.1434 29.9805 13.7918 29.7539 13.5417L26.8711 10.588C25.7696 9.48623 25.7696 7.70463 26.9414 6.5169L30.0586 2.43016C31.1602 1.32839 32.9414 1.32839 34.0899 2.46142L35.9571 4.09455C37.4727 5.61047 38.3086 7.66556 38.3086 9.89256C38.3086 21.8246 21.8789 38.2653 9.94143 38.2653L9.93362 38.32Z" fill="black" className="fill-paragraph"></path></svg>
                                <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
                                {/* <p className="mt-2 text-lg text-gray-600">+91 (960) 195-1757</p> */}
                                <p className="mt-2 text-lg text-gray-600">+91 (814) 102-7000</p>
                            </div>

                            {/* <div className="text-center bg-[#bbdcfb3b] min-h-[220px] w-full max-w-[420px] mx-auto py-6 px-4 rounded-lg shadow-lg flex-1 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" className="mb-6 inline-block"><path d="M37.7031 15.4297L35 12.8281V5.83594C35 2.61719 32.3828 0 29.1641 0H10.8359C7.61719 0 5 2.61719 5 5.83594V12.8281L2.29688 15.4375C0.835937 16.8438 0 18.8047 0 20.8359V32.5C0 36.6328 3.36719 40 7.5 40H32.5C36.6328 40 40 36.6328 40 32.5V20.8359C40 18.8047 39.1641 16.8438 37.7031 15.4297ZM36.5469 16.6328C36.7031 16.7812 36.8438 16.9375 36.9766 17.1016L35 19.0781V15.1328L36.5469 16.6328ZM6.66406 5.83594C6.66406 3.53906 8.53125 1.67188 10.8281 1.67188H29.1641C31.4609 1.67188 33.3281 3.53906 33.3281 5.83594V20.75L24.125 29.9609C21.9219 32.1641 18.0781 32.1641 15.875 29.9609L6.66406 20.75V5.83594ZM3.45312 16.6328L5 15.1406V19.0859L3.01562 17.1016C3.15625 16.9375 3.29688 16.7812 3.45312 16.6328ZM38.3359 32.5C38.3359 35.7188 35.7188 38.3359 32.5 38.3359H7.5C4.28125 38.3359 1.66406 35.7188 1.66406 32.5V20.8359C1.66406 20.0547 1.82031 19.2812 2.125 18.5703L14.6953 31.1406C16.1094 32.5547 17.9922 33.3359 20 33.3359C22.0078 33.3359 23.8828 32.5547 25.3047 31.1406L37.875 18.5703C38.1719 19.2812 38.3359 20.0547 38.3359 20.8359V32.5ZM11.6641 9.16406C11.6641 8.70312 12.0391 8.32812 12.5 8.32812H27.5C27.9609 8.32812 28.3359 8.70312 28.3359 9.16406C28.3359 9.625 27.9609 10 27.5 10H12.5C12.0391 10 11.6641 9.625 11.6641 9.16406ZM11.6641 15.8359C11.6641 15.375 12.0391 15 12.5 15H24.1641C24.625 15 25 15.375 25 15.8359C25 16.2969 24.625 16.6719 24.1641 16.6719H12.5C12.0391 16.6641 11.6641 16.2969 11.6641 15.8359Z" fill="black" className="fill-paragraph"></path></svg>
                                <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                                <p className="mt-2 text-base text-gray-600">info@primeidea.in</p>
                            </div> */}
                        </div>
                    </section>
                </div>
                <div className="2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] mx-auto px-4 pt-16 ">                
                    <div className="flex flex-col md:flex-row items-center md:items-center">
                        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-8">
                            <div className="text-center max-w-[500px] mx-auto">
                                <div className="relative inline-block">
                                    <Image src="/images/contact/founder.png" alt="Mr. Partha Shah" className="w-32 h-32 rounded-full mx-auto" width={128} height={128} />
                                    <a href="https://www.linkedin.com/in/pssays" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 absolute top-0 right-0 text-[#0c5aa4]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="" className="mx-auto">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.5c0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5v5.5h-3v-10h3v1.268c.878-.805 2.021-1.268 3.25-1.268 2.481 0 4.5 2.019 4.5 4.5v5.5z" fill="currentColor" />
                                        </svg>
                                    </a>
                                </div>
                                <p className="mt-4 text-base text-gray-600">&quot;Welcome to PrimeIdea Ventures. With over two decades of experience in financial markets, we are dedicated to helping you achieve your financial goals. Our personalized approach ensures that every client receives tailored solutions for their unique needs, whether it&apos;s wealth management, retirement planning, or investment strategies. We believe in building long-term relationships based on trust, transparency, and excellence in service.&quot;</p>
                                <p className="mt-2 text-base text-gray-800 font-semibold">- Partha Shah, Founder</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 bg-[#f2f3f4] py-8 px-12 rounded-lg shadow-lg bg-[#fff]">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2">Get in Touch</h2>
                            <p className="text-[#787878] font-medium">Send us a message using the form below, and we&apos;ll be in touch.</p>
                            
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </main>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14768.370415817908!2d73.1535375!3d22.2744817!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc62043c33df9%3A0x9fba545369e22bb9!2sPrimeidea%20Ventures%20-%20Mutual%20Fund%20%7C%20Insurance%20-%20Investment%20Advisor!5e0!3m2!1sen!2sin!4v1704794238110!5m2!1sen!2sin"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
                className="h-[450px] md:h-[500px]"
            ></iframe>
        <Footer />
        </>
    )
}

export default ContactUs;