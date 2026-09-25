import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { getPostList, getCategoriesPostList } from "@/lib/posts";
// import graphqlRequest from "@/lib/graphqlRequest";
import BlogListing from "@/components/blogs/blogListing";
import graphqlRequest from "@/lib/graphqlRequest";


export async function generateMetadata({ params }) {
  const { categorySlug } = await params;
  const query = {
    query: `query pageSEO {
      category(id: "${categorySlug}", idType: SLUG) {
          seo {
            metaDesc
            title
            metaKeywords
            canonical
            focuskw
            opengraphTitle
            opengraphDescription
            twitterTitle
            twitterDescription
            opengraphImage {
              mediaDetails {
                sizes {
                  sourceUrl
                }
              }
            }
          }
        }
      }`,
  };
  const response = await graphqlRequest(query);
  const content = response;

  return {
    title: content.data.category.seo.title,
    description: content.data.category.seo.metaDesc,
    keywords: content.data.category.metaKeywords,
    applicationName: 'PrimeIdea Ventures',
    formatDetection: {
      email: true,
      address: true,
      telephone: true,
    },
    author: 'Partha Shah',
    robots: 'index, follow',
    canonical: `https://primeidea.in/blogs/category/${categorySlug}`,
    alternates: {
      canonical: `https://primeidea.in/blogs/category/${categorySlug}`,
      languages: {
        'en-US': `https://primeidea.in/blogs/category/${categorySlug}`,
      },
    },
    openGraph: {
      title: content.data.category.seo.title,
      description: content.data.category.seo.metaDesc,
      url: `https://primeidea.in/blogs/category/${categorySlug}`,
      site_name: 'PrimeIdea Ventures',
      // images: [
      //   {
      //     url: content.data.category.seo.opengraphImage?.mediaDetails.sizes
      //       .sourceUrl,
      //   },
      // ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      title: content.data.category.seo.title,
      description: content.data.category.seo.metaDesc,
      // images:
      //   content.data.category.seo.opengraphImage?.mediaDetails.sizes.sourceUrl,
    },
  };
}

async function getData(categorySlug) {
    const query = {
        query: `query getPostListByCategory($categorySlug: String!) {
            posts(where: {categoryName: $categorySlug, orderby: {field: DATE, order: DESC}}) {
                nodes {
                    date
                    slug
                    title
                    excerpt(format: RENDERED)
                    featuredImage {
                        node {
                            uri
                            sourceUrl
                            mediaDetails {
                                file
                                sizes {
                                    sourceUrl
                                    width
                                    height
                                }
                            }
                        }
                    }
                    categories {
                        nodes {
                            name
                            slug
                        }
                    }
                    author {
                        node {
                            avatar {
                                url
                            }
                            name
                        }
                    }
                }
                pageInfo {
                    endCursor
                    hasNextPage
                    hasPreviousPage
                    startCursor
                }
            }
        }`,
        variables: { categorySlug } // Pass categorySlug as a variable
    };

    const data = await graphqlRequest(query);
    return data.data; // Return the post data from the response
}

async function getCategoryData(params) {
    const allPosts = await getCategoriesPostList();
    return { allPosts: allPosts };
}

export default async function BlogsList({params}) {
    const { categorySlug } = await params;
    const posts = await getData(categorySlug);
    const categoriesList = await getCategoriesPostList();

    return (
        <div>

            <Header />

            <div className="py-12">
                <BlogListing 
                posts={posts.posts.nodes}
                categoriesList={categoriesList.categories.nodes}
                />
            </div>

            <Footer />
        </div>
    )
}
