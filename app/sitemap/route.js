const BASE_URL = 'https://primeidea.in';

export async function GET() {
  const sitemaps = [
    {
      url: `${BASE_URL}/sitemap/static.xml`,
      lastmod: new Date().toISOString()
    },
    {
      url: `${BASE_URL}/sitemap/blogs.xml`,
      lastmod: new Date().toISOString()
    },
    {
      url: `${BASE_URL}/sitemap/categories.xml`,
      lastmod: new Date().toISOString()
    }
  ];

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sitemaps.map(sitemap => `
        <sitemap>
          <loc>${sitemap.url}</loc>
          <lastmod>${sitemap.lastmod}</lastmod>
        </sitemap>
      `).join('')}
    </sitemapindex>`,
    {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600',
      },
    }
  );
}
