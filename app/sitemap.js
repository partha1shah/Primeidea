import graphqlRequest from '../lib/graphqlRequest';

const BASE_URL = 'https://primeidea.in';  // Removed trailing slash
const GRAPHQL_ENDPOINT = 'https://primeidea.kashyappandya.com/graphql';

export default async function sitemap() {
  async function fetchContent() {
    try {
      const query = `
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
      `;
      
      console.log('Executing GraphQL query:', query);
      const response = await graphqlRequest(query);
      console.log('Raw GraphQL Response:', JSON.stringify(response, null, 2));
      
      // Validate response structure
      if (!response) {
        console.error('No response received from GraphQL');
        throw new Error('No response received');
      }
      
      if (!response.posts) {
        console.error('Response missing posts data:', response);
        throw new Error('Posts data missing in response');
      }
      
      if (!Array.isArray(response.posts.nodes)) {
        console.error('Posts nodes is not an array:', response.posts);
        throw new Error('Invalid posts data structure');
      }
      
      console.log('Posts count:', response.posts.nodes.length);
      console.log('Categories count:', response?.categories?.nodes?.length || 0);
      
      return response;
    } catch (error) {
      console.error('GraphQL Error:', {
        message: error.message,
        stack: error.stack,
        response: error.response || 'No response data'
      });
      return { posts: { nodes: [] }, categories: { nodes: [] } };
    }
  }

  const content = await fetchContent();
  
  // Add debug logging
  console.log('Content received:', JSON.stringify(content, null, 2));

  // Static pages with their configurations
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
  ].map(({ path, priority }) => ({
    url: `${BASE_URL}${path ? `/${path}/` : '/'}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority,
  }));

  // Updated dynamic pages handling
  const postPages = Array.isArray(content?.posts?.nodes) 
    ? content.posts.nodes.map((post) => ({
        url: `${BASE_URL}/blogs/${post.slug}`, // Changed from /blog/ to /blogs/
        lastModified: post.modified || post.date || new Date().toISOString(),
        changeFrequency: 'weekly',
        priority: 0.8,
      }))
    : [];

  const categoryPages = Array.isArray(content?.categories?.nodes)
    ? content.categories.nodes.map((category) => ({
        url: `${BASE_URL}/category/${category.slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly',
        priority: 0.7,
      }))
    : [];

  console.log('Post pages count:', postPages.length); // Debug log
  console.log('Category pages count:', categoryPages.length); // Debug log

  // Add debug logging for final sitemap
  const sitemap = [...staticPages, ...postPages, ...categoryPages];
  console.log('Generated sitemap entries:', sitemap.length);

  return sitemap;
}