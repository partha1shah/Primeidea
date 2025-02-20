'use client';
import { useState } from 'react';
import Image from "next/image";
import Header from "../header";
import moment from "moment";
import Footer from "../footer";
import GetStarted from "../financialPlanning&Investment/getStarted";
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/react'
import { LinkIcon } from '@heroicons/react/24/outline';
import Facebook from '../../public/images/blogs/icons/fb.svg';
import Linkedin from '../../public/images/blogs/icons/linkedin.svg';
import { Notyf } from "notyf";
// import 'notyf/notyf.min.css';

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
                        <a href="/" >Home</a> <span className="inline-block px-1 text-[#171717]">/</span>
                    </li>
                    <li className="font-bold text-[#0077FF]">
                        <a href="/blogs" >Blogs</a> <span className="inline-block px-1 text-[#171717]">/</span>
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
                <div className="border-y-2 border-black py-[12px] my-4 flex flex-col sm:flex-row sm:justify-between items-baseline sm:items-center">
                    <div className="flex items-center  mb-3 sm:mb-0 hidden">
                        <Image
                            src={post?.author.node.avatar.url}
                            width={120}
                            height={120}
                            alt={post?.title}
                            className="max-w-[100px] lg:max-w-[120px] max-h-[100px] lg:max-h-[120px] rounded-[5px]"
                        />
                      <h3 className="mt-3 leading-[100%] text-sm ml-2 sm:ml-4 text-[#727272] font-bold">
                        Written by{" "}
                        <span className="text-xl font-bold capitalize block text-black">{post?.author.node.name}</span>
                      </h3>
                    </div>
                    <div className="text-left">
                        <h3 className="font-semibold text-base md:text-xl lg:text-2xl sm:mb-[4px] hidden">Updated: {moment(post.modified).format('MMMM D, YYYY')}</h3>
                        <h3 className="font-semibold text-[16px] text-[#727272]">{moment(post.date).format('MMMM D, YYYY')} <span className='pr-[3px]'></span> |  <span className='capitalize text-[#727272] pl-[3px]'>{post?.author.node.name}</span></h3>
                    </div>
                </div>
                <div className="flex justify-between flex-col lg:flex-row">
                    <div className="w-full lg:w-[calc(100%-300px)] mb-[40px] lg:mb-0">
                        <div className="mb-4">
                            <Image src={`${post?.featuredImage?.node.sourceUrl ? post?.featuredImage?.node.sourceUrl  : '/images/blogs/single-blog.jpg'}`} width={1920} height={600} alt="Single Blog" className="rounded-[10px]"/>
                        </div>
                        <div className="single-blog-content">
                            <div dangerouslySetInnerHTML={{ __html: post.content}}></div>
                        </div>
                    </div>
                    <div className="w-full max-w-[350px] lg:w-[280px] lg:max-w-[280px] bg-[#fff] shadow-[0_0_2px_0_#00000040] rounded-[10px] h-full">
                        <div className="p-4 border-b-2 border-[#eaeaea]">
                            <h2 className="mb-4 text-xl font-medium">FOLLOW US</h2>
                            <ul className="flex justify-between">
                                <li>
                                    <a href="https://www.facebook.com/primeidea" target="_blank">
                                        <Image src="/images/blogs/social-media/fb.png" width={42} height={42} alt="Facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/primeidea/" target="_blank">
                                        <Image src="/images/blogs/social-media/instagram.png" width={42} height={42} alt="Instagram" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/primeidea/" target="_blank">
                                        <Image src="/images/blogs/social-media/linkedin.png" width={42} height={42} alt="LinkedIn" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://api.whatsapp.com/send?phone=918141027000&text=Hello, I'm interested in learning more about your financial advisory and investment services. Could you please provide me with some details on how I can start planning my investments? Looking forward to hearing from you!">
                                        <Image src="/images/blogs/social-media/whatsapp.png" width={42} height={42} alt="WhatsApp" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="p-4">
                            {/* <h2 className="mb-1 text-xl font-bold">
                                Subscription
                            </h2>
                            <p className="mb-3">
                                Subscribe to our newsletter and receive a selection of cool articles every weeks
                            </p>
                            <input type="email" placeholder="Enter your email" className="border rounded-[5px] border-[#00000080] text-[#00000080] mb-2 w-full p-3"/>
                            <button type="submit" className="border rounded-[5px] border-[#232D63] text-[#fff] bg-[#232D63] p-3 w-full" >Subscribe</button>  */}
                            <h2 className="mb-1 text-xl font-bold">
                                Connect with us
                            </h2>
                            <p className="mb-3">
                            Join our exclusive community of financial advisors! Share insights, and stay updated with the latest trends and tools. Connect with experts on WhatsApp!
                            </p>
                            <a href="https://chat.whatsapp.com/Bgocyi51gNA3S4CrFkggot" className="border rounded-[5px] border-[#232D63] text-[#fff] bg-[#232D63] p-3 text-center font-bold w-full inline-block" >Join our community</a>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        <GetStarted />

        <Footer />

        </>
    )
}

export default BlogDetail;