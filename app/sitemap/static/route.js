import staticPages from '../../../lib/sitemapStaticPages';

const BASE_URL = 'https://www.primeidea.in';

function imageXml(page) {
  if (!page.image) return '';
  const loc = `${BASE_URL}${page.image}`;
  const title = page.imageTitle
    ? `<image:title>${page.imageTitle}</image:title>`
    : '';
  const caption = page.imageTitle
    ? `<image:caption>${page.imageTitle}</image:caption>`
    : '';
  return `
        <image:image>
          <image:loc>${loc}</image:loc>
          ${title}
          ${caption}
        </image:image>`;
}

export async function GET() {
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
      ${staticPages.map(page => `
        <url>
          <loc>${BASE_URL}${page.path ? `/${page.path}` : ''}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>${page.priority}</priority>${imageXml(page)}
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
