import graphqlRequest from '../../../lib/graphqlRequest';

const BASE_URL = 'https://primeidea.in';

export async function GET() {
  try {
    const response = await graphqlRequest(`
      query GetBlogSitemapContent {
        posts(first: 1000) {
          nodes {
            slug
            modified
            date
          }
        }
      }
    `);

    // Validate posts data
    if (!response?.posts?.nodes) {
      throw new Error('Invalid posts data structure');
    }

    const posts = response.posts.nodes;
    
    if (!Array.isArray(posts)) {
      throw new Error('Posts data is not an array');
    }

    const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${posts
          .filter(post => post && post.slug) // Filter out invalid posts
          .map(post => `
            <url>
              <loc>${BASE_URL}/blogs/${post.slug}</loc>
              <lastmod>${post.modified || post.date || new Date().toISOString()}</lastmod>
              <changefreq>daily</changefreq>
              <priority>0.8</priority>
            </url>
          `)
          .join('')}
      </urlset>`;

    // Log success
    console.log(`Generated sitemap with ${posts.length} blog entries`);

    return new Response(xmlContent, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    console.error('Blog Sitemap Error:', {
      message: error.message,
      stack: error.stack,
    });
    
    // Return a minimal valid XML in case of error
    return new Response(
      `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>${BASE_URL}/blog</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>daily</changefreq>
          <priority>0.8</priority>
        </url>
      </urlset>`,
      {
        status: 200,
        headers: {
          'Content-Type': 'application/xml',
        },
      }
    );
  }
}
