
import React from "react";
import BlogDetail from "@/components/blogs/blogDetail";
import graphqlRequest from "@/lib/graphqlRequest";


export async function generateMetadata({ params }) {
  const { slug } = params;
  const query = {
    query: `query pageSEO {
      post(id: "${slug}", idType: SLUG) {
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
                file
              }
            sourceUrl
            }
          }
        }
      }`,
  };
  const response = await graphqlRequest(query);
  const content = response;

  return {
    title: content.data.post.seo.title,
    description: content.data.post.seo.metaDesc,
    keywords: content.data.post.metaKeywords,
    applicationName: 'PrimeIdea Ventures',
    formatDetection: {
      email: true,
      address: true,
      telephone: true,
    },
    author: 'Partha Shah',
    viewport: 'width=device-width, initial-scale=1',
    robots: 'index, follow',
    canonical: `https://primeidea.in/${slug}`,
    alternates: {
      canonical: `https://primeidea.in/${slug}`,
      languages: {
        'en-US': `https://primeidea.in/${slug}`,
      },
    },
    openGraph: {
      title: content.data.post.seo.title,
      description: content.data.post.seo.metaDesc,
      url: `https://primeidea.in/${slug}`,
      site_name: 'PrimeIdea Ventures',
      images: content.data.post.seo.opengraphImage.mediaDetails.file,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      title: content.data.post.seo.title,
      description: content.data.post.seo.metaDesc,
      images: content.data.post.seo.opengraphImage.mediaDetails.file,
    },
  };
}

export async function getSinglePost(slug) {
    const query = {
      query: `query getSinglePost {
        post(id: "${slug}", idType: SLUG) {
          content(format: RENDERED)
          date
          excerpt(format: RENDERED)
          modified
          slug
          title(format: RENDERED)
          databaseId
          featuredImage {
            node {
              uri
              sourceUrl
              mediaDetails {
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
      }`,
      variables: { slug }
    };

    const resJson = await graphqlRequest(query);
    const singlePost = resJson.data.post;

    return singlePost;
}

export default async function BlogDetailPage ({params}) {
    const { slug } = params;
    const post = await getSinglePost(slug);

    return (
        <div className="bg-[#F6FDFF]">
            <BlogDetail slug={slug} post={post} />
        </div>
    )
}
