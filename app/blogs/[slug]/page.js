import React from "react";
import BlogDetail from "@/components/blogs/blogDetail";
import graphqlRequest from "@/lib/graphqlRequest";
import ScopePageJsonLd, { buildBreadcrumbJsonLd } from "@/components/scope/ScopePageJsonLd";
import { classifyPost, getAuthorAttribution } from "@/data/blogScope";


export async function generateMetadata({ params }) {
  const { slug } = await params;
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
    robots: 'index, follow',
    canonical: `https://www.primeidea.in/${slug}`,
    alternates: {
      canonical: `https://www.primeidea.in/${slug}`,
      languages: {
        'en-US': `https://www.primeidea.in/${slug}`,
      },
    },
    openGraph: {
      title: content.data.post.seo.title,
      description: content.data.post.seo.metaDesc,
      url: `https://www.primeidea.in/${slug}`,
      site_name: 'PrimeIdea Ventures',
      images: [{
        url: content.data.post.seo.opengraphImage?.sourceUrl || '',
        width: 1200,
        height: 630,
        alt: content.data.post.seo.title,
      }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: 'summary_large_image',
      title: content.data.post.seo.title,
      description: content.data.post.seo.metaDesc,
      images: [`${content.data.post.seo.opengraphImage?.sourceUrl || ''}`],
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
    const { slug } = await params;
    const post = await getSinglePost(slug);
    const author = getAuthorAttribution(post);
    const category = classifyPost(post);
    const pageUrl = `https://www.primeidea.in/blogs/${slug}`;

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post?.title?.replace(/<[^>]+>/g, "") || "PrimeIdea article",
      datePublished: post?.date,
      dateModified: post?.modified || post?.date,
      url: pageUrl,
      author: author.writtenByPartha
        ? {
            "@type": "Person",
            name: "Partha Shah",
            jobTitle: author.role,
            identifier: "INH000017815",
          }
        : [
            {
              "@type": "Organization",
              name: "PrimeIdea Research Team",
            },
            {
              "@type": "Person",
              name: "Partha Shah",
              jobTitle: "Head of Research & Investment Strategy",
              identifier: "INH000017815",
            },
          ],
      publisher: {
        "@type": "Organization",
        name: "PrimeIdea Ventures",
        url: "https://www.primeidea.in",
      },
      articleSection: category.label,
    };

    const breadcrumbSchema = buildBreadcrumbJsonLd([
      { name: "Blogs", url: "/blogs" },
      { name: category.label, url: `/blogs/category/${category.slug}` },
    ]);

    return (
        <div className="bg-[#F6FDFF]">
            <ScopePageJsonLd data={[articleSchema, breadcrumbSchema]} />
            <BlogDetail slug={slug} post={post} />
        </div>
    )
}
