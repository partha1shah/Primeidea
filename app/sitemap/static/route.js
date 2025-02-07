const BASE_URL = 'https://primeidea.in';

export async function GET() {
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

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages.map(page => `
        <url>
          <loc>${BASE_URL}${page.path ? `/${page.path}` : ''}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>${page.priority}</priority>
        </url>
      `).join('')}
    </urlset>`,
    {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600',
      },
    }
  );
}
