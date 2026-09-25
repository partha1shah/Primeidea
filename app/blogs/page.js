import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { getPostList, getCategoriesPostList } from "@/lib/posts";
// import graphqlRequest from "@/lib/graphqlRequest";
import BlogListing from "@/components/blogs/blogListing";

export const metadata = {
    title: 'PrimeIdea Blog: Insights, Tips & Ideas for Financial Journey',
    description: 'Explore PrimeIdea Ventures blog for expert insights on financial planning, investment strategies, retirement planning, tax savings, and wealth management to make informed financial decisions.',
    keywords: 'mutual funds, investment advisory, financial planning, wealth management, retirement planning, insurance solutions, Partha Shah, PrimeIdea Ventures, Gujarat financial advisor, investment consultant',
    author: 'Partha Shah',
    robots: 'index, follow',
    canonical: 'https://www.primeidea.in/blogs/',
    openGraph: {
      type: 'website',
      locale: 'en_IE',
      url: 'https://www.primeidea.in/blogs/',
      site_name: 'PrimeIdea Ventures',
      title: 'PrimeIdea Blog: Insights, Tips & Ideas for Financial Journey',
      description: 'Explore PrimeIdea Ventures blog for expert insights on financial planning, investment strategies, retirement planning, tax savings, and wealth management to make informed financial decisions.',
    },
    twitter: {
      handle: '@primeidea',
      site: '@primeidea',
      cardType: 'summary_large_image',
    },
    alternates: {
      canonical: 'https://www.primeidea.in/blogs/',
      languages: {
        'en-US': 'https://www.primeidea.in/blogs/',
      },
    },
  };

async function getData(params) {
    const allPosts = await getPostList();
    return { allPosts: allPosts };
}

async function getCategoryData(params) {
    const allPosts = await getCategoriesPostList();
    return { allPosts: allPosts };
}

export default async function BlogsList() {
    const posts = await getData();
    const categoriesList = await getCategoriesPostList();

    return (
        <div>

            <Header />

            <div className="py-12">
                <BlogListing 
                posts={posts.allPosts.nodes}
                categoriesList={categoriesList.categories.nodes}
                />
            </div>

            <Footer />
        </div>
    )
}
