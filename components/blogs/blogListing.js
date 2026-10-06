"use client";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { getWordPressCategory } from "@/data/blogScope";

function topicChipClass(active) {
  return [
    "inline-flex min-h-9 items-center justify-center rounded-full border px-3.5 py-1.5 text-center text-[13px] font-semibold leading-tight transition-colors",
    active
      ? "border-[#293C7D] bg-[#293C7D] !text-white shadow-[0_8px_18px_-12px_rgba(41,60,125,0.95)]"
      : "border-[#D7E4EF] bg-white !text-[#293C7D] hover:border-[#479AD2] hover:bg-[#F6FDFF]",
  ].join(" ");
}

function listingExcerpt(html) {
  return String(html || "")
    .replace(/<audio[\s\S]*?<\/audio>/gi, "")
    .replace(/Your browser does not support the audio element\.?\s*/gi, "");
}

function sideLinkClass(active) {
  return [
    "flex items-center justify-between gap-3 rounded-xl px-3.5 py-3 text-base font-semibold transition-colors xl:text-[17px]",
    active
      ? "bg-[#293C7D] !text-white shadow-[0_10px_22px_-16px_rgba(41,60,125,0.9)]"
      : "!text-[#222222] hover:bg-[#F6FDFF]",
  ].join(" ");
}

export default function BlogListing({ posts, categoriesList = [] }) {
  const pathname = (usePathname() || "").replace(/\/$/, "") || "/";
  const activeSlug = pathname.startsWith("/blogs/category/")
    ? pathname.slice("/blogs/category/".length).split("/")[0]
    : null;
  const allActive = pathname === "/blogs";
  const categories = (categoriesList || [])
    .filter((item) => item?.slug && Number(item.count) >= 1)
    .slice()
    .sort((a, b) => {
      const isPrimeProspective = (item) => {
        const name = String(item?.name || "").toLowerCase();
        const slug = String(item?.slug || "").toLowerCase();
        return name === "prime prospective" || slug === "prime-prospective";
      };
      if (isPrimeProspective(a) && !isPrimeProspective(b)) return -1;
      if (!isPrimeProspective(a) && isPrimeProspective(b)) return 1;
      return String(a.name || "").localeCompare(String(b.name || ""));
    });
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
          <nav aria-label="Blog categories" className="px-3 pb-4">
            <p className="mb-2 px-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#479AD2]">
              Topics
            </p>
            <ul className="m-0 flex list-none flex-col gap-1 p-0">
              <li>
                <Link
                  href="/blogs"
                  aria-current={allActive ? "page" : undefined}
                  className={sideLinkClass(allActive)}
                >
                  All categories
                  {allActive ? (
                    <span className="h-2 w-2 shrink-0 rounded-full bg-[#FFC300]" aria-hidden="true" />
                  ) : null}
                </Link>
              </li>
              {categories.map((items) => {
                const active = activeSlug === items.slug;
                return (
                  <li key={items.slug}>
                    <Link
                      href={`/blogs/category/${items.slug}`}
                      aria-current={active ? "page" : undefined}
                      className={sideLinkClass(active)}
                    >
                      {items.name}
                      {active ? (
                        <span className="h-2 w-2 shrink-0 rounded-full bg-[#FFC300]" aria-hidden="true" />
                      ) : null}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="w-full lg:w-[calc(100%-305px)] xl:w-[calc(100%-362px)] h-full lg:shadow-[0_0_7px_0_#00000040] rounded-2xl ">
          <nav aria-label="Blog categories" className="mb-2 px-3 pb-2 lg:hidden">
            <div className="overflow-hidden rounded-[22px] border border-[#D6E4EE] bg-white shadow-[0_18px_40px_-30px_rgba(41,60,125,0.55)]">
              <div className="h-1 bg-gradient-to-r from-[#232D63] via-[#479AD2] to-[#FFC300]" aria-hidden="true" />
              <div className="p-3.5">
                <p className="mb-3 px-0.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#479AD2]">
                  Browse topics
                </p>
                <div className="flex flex-wrap gap-2">
                  <Link
                    href="/blogs"
                    aria-current={allActive ? "page" : undefined}
                    className={topicChipClass(allActive)}
                  >
                    All topics
                  </Link>
                  {categories.map((items) => {
                    const active = activeSlug === items.slug;
                    return (
                      <Link
                        key={items.slug}
                        href={`/blogs/category/${items.slug}`}
                        aria-current={active ? "page" : undefined}
                        className={topicChipClass(active)}
                      >
                        {items.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </nav>
          <ul className="m-0 list-none p-0">
            {posts.length === 0 ? (
              <li className="px-4 py-10 text-base text-[#4D4D4D]">
                No articles are filed in this category yet.
              </li>
            ) : null}
            {posts.map((item) => {
              const category = getWordPressCategory(item);
              const imageUrl = item.featuredImage?.node?.sourceUrl || "/images/blogs/single-blog.jpg";
              return (
                <li
                  className="border-b border-[#E6EEF4] last:border-b-0"
                  key={item.slug}
                >
                  <a href={`/blogs/${item.slug}`} className="group flex items-start gap-3 px-3 py-4 sm:px-4 lg:items-center lg:gap-4 lg:px-8">
                    <div className="relative h-[72px] w-[96px] shrink-0 overflow-hidden rounded-xl bg-[#E8F4FB] md:h-[88px] md:w-[132px]">
                      <Image
                        src={imageUrl}
                        alt=""
                        fill
                        sizes="132px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="mb-1.5 flex flex-wrap items-center gap-x-2 gap-y-1">
                        {category ? (
                          <span className="rounded-full bg-[#E8F5FF] px-2.5 py-0.5 text-xs font-semibold !text-[#293C7D]">
                            {category.label}
                          </span>
                        ) : null}
                        <time dateTime={item.date} className="text-xs text-[#6B7C8A] md:text-sm">
                          {moment(item.date).format("MMMM D, YYYY")}
                        </time>
                      </div>
                      <h2 className="text-base font-semibold leading-snug text-[#2D2D2D] sm:text-lg md:text-2xl">
                        {item.title}
                      </h2>
                      <div
                        dangerouslySetInnerHTML={{ __html: listingExcerpt(item.excerpt) }}
                        className="mt-1 line-clamp-2 text-sm leading-relaxed text-[#4D4D4D] md:line-clamp-3"
                      />
                    </div>
                    <Image
                      src="/images/blogs/right-arrow.png"
                      width={28}
                      height={28}
                      alt=""
                      className="mt-1 h-7 w-7 shrink-0 lg:mt-0 lg:h-9 lg:w-9"
                    />
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
