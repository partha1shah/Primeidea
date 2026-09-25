import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { getPostList, getCategoriesPostList } from "@/lib/posts";
import BlogListing from "@/components/blogs/blogListing";
import { classifyPost, getBlogCategory } from "@/data/blogScope";
import { notFound, redirect } from "next/navigation";

export async function generateMetadata({ params }) {
  const { categorySlug } = await params;
  const category = getBlogCategory(categorySlug);
  if (!category) {
    return { title: "Category not found" };
  }
  const url = `https://www.primeidea.in/blogs/category/${category.slug}`;
  const description = `PrimeIdea Ventures helps investors with ${category.label.toLowerCase()} through a research-led process guided by Partha Shah, SEBI Registered Research Analyst INH000017815.`;

  return {
    title: category.label,
    description,
    keywords: `${category.label}, PrimeIdea Ventures, Partha Shah, SEBI RA INH000017815`,
    author: "Partha Shah",
    robots: "index, follow",
    alternates: {
      canonical: url,
      languages: {
        "en-US": url,
      },
    },
    openGraph: {
      title: `${category.label} | PrimeIdea Ventures`,
      description,
      url,
      site_name: "PrimeIdea Ventures",
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${category.label} | PrimeIdea Ventures`,
      description,
    },
  };
}

export default async function BlogsList({params}) {
    const { categorySlug } = await params;
    const category = getBlogCategory(categorySlug);
    if (!category) notFound();
    if (category.slug !== categorySlug) {
      redirect(`/blogs/category/${category.slug}`);
    }

    const allPosts = await getPostList();
    const categoriesList = await getCategoriesPostList();
    const posts = (allPosts?.nodes || []).filter(
      (post) => classifyPost(post).slug === category.slug
    );

    return (
        <div>

            <Header />

            <div className="py-12">
                <BlogListing 
                posts={posts}
                categoriesList={categoriesList.categories.nodes}
                />
            </div>

            <Footer />
        </div>
    )
}
