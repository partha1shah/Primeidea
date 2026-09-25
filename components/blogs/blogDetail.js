'use client';
import Image from "next/image";
import Link from "next/link";
import Header from "../header";
import moment from "moment";
import Footer from "../footer";
import GetStarted from "../financialPlanning&Investment/getStarted";
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/react'
import { LinkIcon } from '@heroicons/react/24/outline';
import Facebook from '../../public/images/blogs/icons/fb.svg';
import Linkedin from '../../public/images/blogs/icons/linkedin.svg';
import { Notyf } from "notyf";
import {
  classifyPost,
  extractSources,
  getAuthorAttribution,
  relatedServiceLinks,
} from "@/data/blogScope";
// import 'notyf/notyf.min.css';

function WhatsAppGlyph() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 shrink-0 fill-current">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
    );
}

const BlogDetail = (props) => {
    const { post } = props;
    // const notyf = new Notyf();

    const copyLink = () => {
        const notyf = new Notyf({
            position: {
                x: "right",
                y: "top",
            },
            duration: 5000,
        });
        navigator.clipboard.writeText(window.location.href);
        notyf.success('Link copied to share!');
    };

    const shareOnFacebook = () => {
        const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
        window.open(url, '_blank');
    };

    const shareOnLinkedIn = () => {
        const url = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}`;
        window.open(url, '_blank');
    };

    const category = classifyPost(post);
    const author = getAuthorAttribution(post);
    const sources = extractSources(post?.content);
    const relatedLinks = relatedServiceLinks(post);
    const updatedLabel = moment(post?.modified || post?.date).format("MMMM D, YYYY");

    const products = [
        { name: 'Copy Link', icon: LinkIcon, action: copyLink },
        { name: 'Share on Facebook', iconImage: Facebook, action: shareOnFacebook },
        { name: 'Share on LinkedIn', iconImage: Linkedin, action: shareOnLinkedIn },        
    ]

    return (
        <>
        <Header />
        <section className="pt-[120px]">
            <div className="2xl:max-w-[1320px] xl:max-w-[1170px] lg:max-w-[1004px] mx-auto px-4">
                <ul className="flex flex-wrap mb-6">
                    <li className="font-bold text-[#0077FF]">
                        <Link href="/" >Home</Link> <span className="inline-block px-1 text-[#171717]">/</span>
                    </li>
                    <li className="font-bold text-[#0077FF]">
                        <Link href="/blogs" >Blogs</Link> <span className="inline-block px-1 text-[#171717]">/</span>
                    </li>
                    <li className="font-bold text-[#171717]">
                        <span>{post?.title}</span>
                    </li>
                </ul>
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl md:text-3xl xl:text-4xl text-[#2D2D2D] font-bold mb-3 max-w-[768px] leading-[130%]">
                        {post?.title}
                    </h1>
                    <div>
                        <PopoverGroup className="lg:flex lg:gap-x-12">
                            <Popover className="relative">
                                <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 outline-0">
                                <Image src="/images/blogs/icons/share.png" width={24} height={24} className="opacity-60" alt="Share" />
                                </PopoverButton>

                                <PopoverPanel
                                transition
                                className="absolute right-0 lg:right-unset lg:-left-8 top-full z-10 mt-3 overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in min-w-[210px]"
                                >
                                <div className="p-4">
                                    {products.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group relative flex items-center gap-x-6 rounded-lg py-2 px-1 text-sm/6 hover:bg-gray-50 cursor-pointer"
                                        onClick={item.action}
                                    >
                                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                        {item.icon ? <item.icon aria-hidden="true" className="size-6 text-gray-600 " /> :
                                        <Image src={item.iconImage} width={24} height={24} alt={item.name} />}
                                        </div>
                                        <div className="flex-auto">
                                            <span className="block font-semibold text-gray-900">
                                                {item.name}
                                            </span>
                                        </div>
                                    </div>
                                    ))}
                                </div>
                                </PopoverPanel>
                            </Popover>
                        </PopoverGroup>
                    </div>
                </div>
                <div className="mb-6 mt-2 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-[#4D4D4D]">
                    <Link
                      href={`/blogs/category/${category.slug}`}
                      className="inline-flex rounded-full bg-[#E8F5FF] px-3 py-1 text-sm font-semibold text-[#293C7D]"
                    >
                      {category.label}
                    </Link>
                    <span aria-hidden="true" className="hidden sm:inline text-[#D0E0EC]">|</span>
                    <span>Updated {updatedLabel}</span>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
                    <div className="w-full lg:min-w-0 lg:flex-1 mb-[40px] lg:mb-0">
                        <div className="mb-4">
                            <Image src={`${post?.featuredImage?.node.sourceUrl ? post?.featuredImage?.node.sourceUrl  : '/images/blogs/single-blog.jpg'}`} width={1920} height={600} alt="Single Blog" className="rounded-[10px]"/>
                        </div>
                        <div className="single-blog-content">
                            <div dangerouslySetInnerHTML={{ __html: post.content}}></div>
                        </div>
                        <aside className="mt-12 overflow-hidden rounded-[24px] border border-[#D0E0EC] bg-white shadow-[0_24px_50px_-36px_rgba(41,60,125,0.55)]">
                          <div className="h-1.5 bg-gradient-to-r from-[#232D63] via-[#479AD2] to-[#FFC300]" aria-hidden="true" />
                          <div className="p-5 md:p-7">
                            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#479AD2] m-0 mb-4">
                              About the author
                            </p>
                            <div className="flex flex-col sm:flex-row gap-5">
                              <Image
                                src="/images/about-us/founder.jpg"
                                width={112}
                                height={112}
                                alt="Partha Shah SEBI Registered Research Analyst PrimeIdea Ventures"
                                className="h-24 w-24 rounded-2xl object-cover object-top ring-4 ring-[#F6FDFF] shrink-0"
                              />
                              <div className="min-w-0">
                                <p className="text-lg md:text-xl font-bold text-[#232D63] leading-snug m-0">
                                  {author.byline}
                                </p>
                                <p className="mt-1 text-sm font-medium text-[#479AD2] m-0">{author.role}</p>
                              </div>
                            </div>

                            <dl className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 m-0">
                              {[
                                ["Author", author.authorName],
                                ["SEBI RA registration", author.registration],
                                ["Reviewed by", "Partha Shah"],
                                ["Last updated", updatedLabel],
                              ].map(([label, value]) => (
                                <div key={label} className="rounded-2xl bg-[#F6FDFF] px-4 py-3">
                                  <dt className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#479AD2] m-0">
                                    {label}
                                  </dt>
                                  <dd className="mt-1 text-sm font-semibold text-[#232D63] m-0">{value}</dd>
                                </div>
                              ))}
                              <div className="rounded-2xl bg-[#F6FDFF] px-4 py-3 sm:col-span-2">
                                <dt className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#479AD2] m-0">
                                  Experience
                                </dt>
                                <dd className="mt-1 text-sm leading-relaxed text-[#2D2D2D] m-0">{author.experience}</dd>
                              </div>
                            </dl>

                            <p className="mt-4 rounded-2xl border border-[#E3ECF5] bg-[#FFFcf3] px-4 py-3 text-sm leading-relaxed text-[#4D4D4D] m-0">
                              <span className="font-semibold text-[#293C7D]">Disclosure. </span>
                              {author.disclosure}
                            </p>

                            <div className="mt-4">
                              <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#479AD2] m-0 mb-2">
                                Sources used
                              </p>
                              {sources.length ? (
                                <ul className="list-disc pl-5 m-0 space-y-1 text-sm text-[#2D2D2D]">
                                  {sources.map((source) => (
                                    <li key={source.href}>
                                      <a href={source.href} target="_blank" rel="noreferrer" className="text-[#293C7D] underline">
                                        {source.label}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                <p className="text-sm leading-relaxed text-[#4D4D4D] m-0">
                                  No external sources are cited in this article. Check scheme documents and regulatory filings before acting on any figure mentioned above.
                                </p>
                              )}
                            </div>
                          </div>

                          <nav aria-label="Related service pages" className="border-t border-[#E3ECF5] bg-[#F6FDFF] px-5 py-5 md:px-7">
                            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#479AD2] m-0 mb-3">
                              Continue with these pages
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 list-none m-0 p-0">
                              {relatedLinks.map((item) => (
                                <li key={item.href}>
                                  <Link
                                    href={item.href}
                                    className="flex h-full items-center justify-between gap-2 rounded-xl border border-[#D0E0EC] bg-white px-4 py-3 text-sm font-semibold text-[#293C7D] hover:border-[#293C7D] transition-colors"
                                  >
                                    <span>{item.title}</span>
                                    <span aria-hidden="true" className="text-[#FFC300]">→</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </nav>
                        </aside>
                    </div>
                    <aside className="w-full max-w-[350px] lg:w-[300px] lg:max-w-[300px] lg:sticky lg:top-28 self-start overflow-hidden rounded-[24px] border border-[#D0E0EC] bg-white shadow-[0_24px_50px_-36px_rgba(41,60,125,0.55)]">
                        <div className="h-1.5 bg-gradient-to-r from-[#232D63] via-[#479AD2] to-[#FFC300]" aria-hidden="true" />
                        <div className="p-5">
                            <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-[#479AD2] m-0">Follow PrimeIdea</h2>
                            <p className="mt-1.5 text-sm leading-relaxed text-[#4D4D4D] m-0">
                              Research notes and office updates from Vadodara.
                            </p>
                            <div className="mt-4 flex flex-nowrap items-stretch gap-2">
                                {[
                                  { href: "https://www.facebook.com/primeidea", src: "/images/blogs/social-media/fb.png", label: "Facebook", short: "Facebook" },
                                  { href: "https://www.instagram.com/primeidea/", src: "/images/blogs/social-media/instagram.png", label: "Instagram", short: "Instagram" },
                                  { href: "https://www.linkedin.com/company/primeidea/", src: "/images/blogs/social-media/linkedin.png", label: "LinkedIn", short: "LinkedIn" },
                                  {
                                    href: "https://api.whatsapp.com/send?phone=918141027000&text=" + encodeURIComponent("Hello, I would like to book a portfolio review with PrimeIdea Ventures."),
                                    src: "/images/blogs/social-media/whatsapp.png",
                                    label: "WhatsApp",
                                    short: "WhatsApp",
                                  },
                                ].map((item) => (
                                  <a
                                    key={item.label}
                                    href={item.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    title={item.label}
                                    className="flex min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-2xl border border-[#E3ECF5] bg-[#F6FDFF] px-1 py-2.5 hover:border-[#293C7D] transition-colors"
                                  >
                                    <Image src={item.src} width={28} height={28} alt="" className="h-7 w-7" />
                                    <span className="w-full truncate text-center text-[10px] font-semibold leading-none text-[#293C7D]">
                                      {item.short}
                                    </span>
                                  </a>
                                ))}
                            </div>
                        </div>
                        <div className="border-t border-[#E3ECF5] bg-[#F8FBFE] px-5 py-5">
                            <h2 className="text-base font-bold text-[#232D63] m-0">Talk to the team</h2>
                            <p className="mt-1.5 text-sm leading-relaxed text-[#4D4D4D] m-0">
                              Book a portfolio review in Vadodara or on a video call.
                            </p>
                            <a
                              href="https://api.whatsapp.com/send?phone=918141027000&text=Hello,%20I%20would%20like%20to%20book%20a%20portfolio%20review%20with%20PrimeIdea%20Ventures."
                              target="_blank"
                              rel="noreferrer"
                              className="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#1F8F4E] px-4 py-3 text-sm font-bold !text-white shadow-[0_12px_22px_-14px_rgba(31,143,78,0.9)] hover:bg-[#187A42] transition-colors"
                            >
                              <WhatsAppGlyph />
                              Message on WhatsApp
                            </a>
                            <a
                              href="https://whatsapp.com/channel/0029VaNUByW5vKAEkvUQCo33"
                              target="_blank"
                              rel="noreferrer"
                              className="mt-2.5 inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-[#1F8F4E] bg-white px-4 py-3 text-sm font-bold !text-[#1F8F4E] hover:bg-[#E9F8EF] transition-colors"
                            >
                              <WhatsAppGlyph />
                              Join the WhatsApp channel
                            </a>
                        </div>
                    </aside>
                </div>
            </div>
        </section>

        <GetStarted />

        <Footer />

        </>
    )
}

export default BlogDetail;