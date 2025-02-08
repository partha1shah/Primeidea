import graphqlRequest from '../lib/graphqlRequest';

const BASE_URL = 'https://primeidea.in';

const staticPages = [
  { path: '', priority: 1.0 },
  { path: 'about-us', priority: 0.9 },
  { path: 'become-a-partner', priority: 0.9 },
  { path: 'blogs', priority: 0.9 },
  { path: 'careers', priority: 0.9 },
  { path: 'contact-us', priority: 0.9 },
  { path: 'financial-planning-and-investment-advisory', priority: 0.9 },
  { path: 'insurance', priority: 0.9 },
  { path: 'legacy-inheritance-planning', priority: 0.9 },
  { path: 'research-based-wealth-management', priority: 0.9 },
  { path: 'retirement-planning', priority: 0.9 },
  { path: 'tax-planning-savings', priority: 0.9 },
];

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

    return [
      // Static pages
      ...staticPages.map(page => ({
        url: `${BASE_URL}${page.path ? `/${page.path}` : ''}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: page.priority
      })),
      // Blog posts
      ...posts.map(post => ({
        url: `${BASE_URL}/blogs/${post.slug}`,
        lastModified: new Date(post.modified || post.date),
        changeFrequency: 'weekly',
        priority: 0.8
      })),
      // Categories
      ...categories.map(category => ({
        url: `${BASE_URL}/category/${category.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7
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