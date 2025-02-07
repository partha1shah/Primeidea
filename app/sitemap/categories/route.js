import graphqlRequest from '../../../lib/graphqlRequest';

const BASE_URL = 'https://primeidea.in';

export async function GET() {
  const query = `
    query GetCategorySitemapContent {
      categories(first: 100) {
        nodes {
          slug
          posts {
            nodes {
              modified
              date
            }
          }
        }
      }
    }
  `;

  try {
    const response = await graphqlRequest(query);
    const categories = response?.categories?.nodes || [];

    const categoryLastMod = {};
    categories.forEach(category => {
      const posts = category.posts.nodes;
      if (posts.length > 0) {
        const dates = posts.map(post => new Date(post.modified || post.date));
        categoryLastMod[category.slug] = new Date(Math.max(...dates)).toISOString();
      }
    });

    return new Response(
      `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${categories
          .map(
            (category) => `
              <url>
                <loc>${BASE_URL}/category/${category.slug}</loc>
                <lastmod>${categoryLastMod[category.slug]}</lastmod>
                <changefreq>weekly</changefreq>
                <priority>0.6</priority>
              </url>
            `
          )
          .join('')}
      </urlset>`,
      {
        headers: {
          'Content-Type': 'application/xml',
        },
      }
    );
  } catch (error) {
    console.error('Category Sitemap Error:', error);
    return new Response('Error generating sitemap', { status: 500 });
  }
}
