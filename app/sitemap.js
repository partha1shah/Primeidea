import graphqlRequest from '../lib/graphqlRequest';
import { getJobOpeningsSlugs } from '../lib/jobOpenings';
import staticPages from '../lib/sitemapStaticPages';

const BASE_URL = 'https://primeidea.in';

export default async function sitemap() {
  try {
    const query = {
      query: `
        query GetSitemapContent {
          posts(first: 1000) {
            nodes {
              slug
              modified
              date
            }
          }
          categories(first: 100) {
            nodes {
              slug
              name
            }
          }
        }
      `
    };

    const data = await graphqlRequest(query);
    const posts = data?.data?.posts?.nodes || [];
    const categories = data?.data?.categories?.nodes || [];

    let jobOpenings = [];
    try {
      jobOpenings = (await getJobOpeningsSlugs()) || [];
    } catch (jobError) {
      console.error('Job openings sitemap error:', jobError);
    }

    return [
      // Static pages
      ...staticPages.map(page => ({
        url: `${BASE_URL}${page.path ? `/${page.path}` : ''}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: page.priority
      })),
      // Blog posts
      ...posts
        .filter((post) => post?.slug)
        .map(post => ({
        url: `${BASE_URL}/blogs/${post.slug}`,
        lastModified: new Date(post.modified || post.date),
        changeFrequency: 'weekly',
        priority: 0.8
      })),
      // Categories — live route is /blogs/category/[slug]
      ...categories
        .filter((category) => category?.slug)
        .map(category => ({
        url: `${BASE_URL}/blogs/category/${category.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7
      })),
      // Open roles
      ...jobOpenings
        .filter((job) => job?.slug)
        .map(job => ({
        url: `${BASE_URL}/careers/${job.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.6
      }))
    ];
  } catch (error) {
    console.error('Sitemap generation error:', error);
    // Return static pages at minimum in case of error
    return staticPages.map(page => ({
      url: `${BASE_URL}${page.path ? `/${page.path}` : ''}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: page.priority
    }));
  }
}