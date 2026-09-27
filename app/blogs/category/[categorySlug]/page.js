import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { getPostList, getCategoriesPostList, getCategoryDetails } from "@/lib/posts";
import BlogListing from "@/components/blogs/blogListing";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { categorySlug } = await params;
  const category = await getCategoryDetails(categorySlug);
  if (!category?.name || !category?.slug) {
    return { title: "Category not found" };
  }
  const url = `https://www.primeidea.in/blogs/category/${category.slug}`;
  const description = `Articles filed under ${category.name} on the PrimeIdea Ventures blog, guided by Partha Shah, SEBI Registered Research Analyst INH000017815.`;

  return {
    title: category.name,
    description,
    keywords: `${category.name}, PrimeIdea Ventures, Partha Shah, SEBI RA INH000017815`,
    author: "Partha Shah",
    robots: "index, follow",
    alternates: {
      canonical: url,
      languages: {
        "en-US": url,
      },
    },
    openGraph: {
      title: `${category.name} | PrimeIdea Ventures`,
      description,
      url,
      site_name: "PrimeIdea Ventures",
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${category.name} | PrimeIdea Ventures`,
      description,
    },
  };
}

export default async function BlogsList({params}) {
    const { categorySlug } = await params;
    const category = await getCategoryDetails(categorySlug);
    if (!category?.slug) notFound();

    const allPosts = await getPostList();
    const categoriesList = await getCategoriesPostList();
    const posts = (allPosts?.nodes || []).filter((post) =>
      (post.categories?.nodes || []).some((node) => node.slug === category.slug)
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
