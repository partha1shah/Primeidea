"use client";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BLOG_CATEGORIES, classifyPost } from "@/data/blogScope";

export default function BlogListing({ posts }) {
  // console.log(posts);
  // console.log(categoriesList);

  const categoryItems = [
    {
      name: "Finance",
    },
    {
      name: "Insurance",
    },
    {
      name: "Mediclaim",
    },
  ];

  const insightsItems = [
    {
      imageUrl: "/images/home/insights/1.png",
      title: "How can I start planning for retirement if I'm in my 30s ?",
      description:
        "Starting your retirement planning in your 30s is a smart move. Begin by assessing your current financial situation and setting clear retirement goals. Contribute regularly to retirement accounts like a 401(k) or IRA, and consider diversifying your investments to build a robust portfolio.",
      category: "Retirement Planning",
      date: "January 21, 2024",
      author: "PrimeIdea",
      url: "/",
    },
    {
      imageUrl: "/images/home/insights/2.png",
      title: "How can I start planning for retirement if I'm in my 30s ?",
      description:
        "Starting your retirement planning in your 30s is a smart move. Begin by assessing your current financial situation and setting clear retirement goals. Contribute regularly to retirement accounts like a 401(k) or IRA, and consider diversifying your investments to build a robust portfolio.",
      category: "Retirement Planning",
      date: "January 21, 2024",
      author: "PrimeIdea",
      url: "/",
    },
    {
      imageUrl: "/images/home/insights/3.png",
      title: "How can I start planning for retirement if I'm in my 30s ?",
      description:
        "Starting your retirement planning in your 30s is a smart move. Begin by assessing your current financial situation and setting clear retirement goals. Contribute regularly to retirement accounts like a 401(k) or IRA, and consider diversifying your investments to build a robust portfolio.",
      category: "Retirement Planning",
      date: "January 21, 2024",
      author: "PrimeIdea",
      url: "/",
    },
    {
      imageUrl: "/images/home/insights/1.png",
      title: "How can I start planning for retirement if I'm in my 30s ?",
      description:
        "Starting your retirement planning in your 30s is a smart move. Begin by assessing your current financial situation and setting clear retirement goals. Contribute regularly to retirement accounts like a 401(k) or IRA, and consider diversifying your investments to build a robust portfolio.",
      category: "Retirement Planning",
      date: "January 21, 2024",
      author: "PrimeIdea",
      url: "/",
    },
    {
      imageUrl: "/images/home/insights/2.png",
      title: "How can I start planning for retirement if I'm in my 30s ?",
      description:
        "Starting your retirement planning in your 30s is a smart move. Begin by assessing your current financial situation and setting clear retirement goals. Contribute regularly to retirement accounts like a 401(k) or IRA, and consider diversifying your investments to build a robust portfolio.",
      category: "Retirement Planning",
      date: "January 21, 2024",
      author: "PrimeIdea",
      url: "/",
    },
    {
      imageUrl: "/images/home/insights/3.png",
      title: "How can I start planning for retirement if I'm in my 30s ?",
      description:
        "Starting your retirement planning in your 30s is a smart move. Begin by assessing your current financial situation and setting clear retirement goals. Contribute regularly to retirement accounts like a 401(k) or IRA, and consider diversifying your investments to build a robust portfolio.",
      category: "Retirement Planning",
      date: "January 21, 2024",
      author: "PrimeIdea",
      url: "/",
    },
  ];
  return (
    <section className="2xl:max-w-[1320px] xl:max-w-[1170px] lg:max-w-[1004px] my-16 mx-auto flex flex-wrap">
      {/* <div className="flex flex-wrap">
                {posts.slice(0, 7).reverse().map((item, index) => {
                    return (
                        <div className="border border-black p-4 mb-2 mr-2 w-[48%]" key={index}>
                            <Image src={item.featuredImage?.node?.sourceUrl} width={1320} height={565} alt={item.title} className="mb-2"/>
                            <h1 className="text-2xl font-semibold"><a href={`blogs/${item.slug}`}>{item.title}</a></h1>
                            <p dangerouslySetInnerHTML={{ __html: item.excerpt }} />
                        </div>
                    )
                })}
            </div> */}
      <div className="flex flex-wrap w-full h-full ">
        <div className="w-[285px] xl:w-[345px] mr-4 shadow-[0_0_7px_0_#00000040] rounded-2xl h-full hidden lg:flex lg:flex-col">
          <div className="p-4">
            <Image
              src="/images/blogs/blog.png"
              width={258}
              height={100}
              alt="Blog"
              className="max-w-[240px] mx-auto mb-4"
            />
            <h2 className="text-3xl font-semibold text-center mb-3">Blogs</h2>
            <p className="text-lg xl:text-xl text-center mb-4">
              Personal finance resources for informed financial decisions and a
              happier wallet.
            </p>
          </div>
          <ul>
            <li className="border-b border-[#479AD2]">
              <Link
                href="/blogs"
                className="text-[#222222] font-semibold text-lg xl:text-xl inline-block w-full px-4 py-3 xl:py-4"
              >
                All Categories
              </Link>
            </li>
            {BLOG_CATEGORIES.map((items) => {
              return (
                <li
                  key={items.slug}
                  className="border-b border-[#479AD2] last:border-b-0"
                >
                  <Link
                    href={`/blogs/category/${items.slug}`}
                    className="text-[#222222] font-semibold text-base xl:text-lg inline-block w-full px-4 py-3 xl:py-4"
                  >
                    {items.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-full lg:w-[calc(100%-305px)] xl:w-[calc(100%-362px)] h-full lg:shadow-[0_0_7px_0_#00000040] rounded-2xl ">
          <div className="lg:hidden flex flex-wrap gap-2 px-2 pb-4">
            <Link href="/blogs" className="rounded-md bg-[#293C7D] px-3 py-1.5 text-sm font-semibold text-white">
              All
            </Link>
            {BLOG_CATEGORIES.map((items) => (
              <Link
                key={items.slug}
                href={`/blogs/category/${items.slug}`}
                className="rounded-md bg-[#BCE4FF] px-3 py-1.5 text-sm font-semibold text-[#222]"
              >
                {items.label}
              </Link>
            ))}
          </div>
          <ul>
            {posts.length === 0 ? (
              <li className="px-4 py-10 text-base text-[#4D4D4D]">
                No articles are filed in this category yet.
              </li>
            ) : null}
            {posts.map((item, index) => {
              // console.log("items", item);
              return (
                <li
                  className="border-b border-b-[#222222] last:border-b-0"
                  key={index}
                >
                  <a href={`/blogs/${item.slug}`} className="flex flex-wrap lg:flex-nowrap py-4 px-2 sm:px-4 lg:px-8 ">
                    <div className="w-[85px] md:w-[132px] mr-[10px] md:mr-4">
                      <Image
                        // src={item.author.node.avatar.url}
                        src={item.featuredImage?.node.sourceUrl ? item.featuredImage?.node.sourceUrl : '/images/blogs/single-blog.jpg'}
                        width={132}
                        height={88}
                        alt={item.title}
                        className="object-contain rounded"
                      />
                      <h3 className="flex flex-col justify-center items-center mt-3 leading-[100%] text-sm md:text-base hidden">
                        Written by{" "}
                        <span className="text-base md:text-xl font-bold capitalize">{item.author.node.name}</span>
                      </h3>
                    </div>
                    <div className="w-[calc(100%-95px)] md:w-[calc(100%-148px)] lg:w-[calc(100%-168px)]">
                      <div className="top-section flex items-center ">
                        <div className="bg-[#BCE4FF] text-[#000] px-3 py-1 rounded-md font-normal text-sm md:text-base">
                          {classifyPost(item).label}
                        </div>{" "}
                        <span className="w-[16px] h-[2px] rounded-[5px] bg-[#222222] mx-2 md:mx-4"></span>{" "}
                        <div className="text-sm md:text-lg">{moment(item.date).format('MMMM D, YYYY')}</div>
                      </div>
                      <div className="pt-2 md:pt-3">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-1 md:mb-0">{item.title}</h2>
                        <div dangerouslySetInnerHTML={{ __html: item.excerpt}} className="line-clamp-3 text-sm sm:text-base mb-2 md:mb-0"></div>
                      </div>
                    </div>
                    <div className="ml-auto inline-flex justify-end items-baseline w-full lg:w-[36px]">
                      <Image
                        src="/images/blogs/right-arrow.png"
                        width={36}
                        height={36}
                        alt="Arrow"
                        className="w-[32px] sm:w-[36px] h-[32px] sm:h-[36px]"
                      />
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
