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
    { path: 'insurance-planning-vadodara', priority: 0.9 },
    { path: 'legacy-succession-estate-planning-india', priority: 0.9 },
    { path: 'research-based-wealth-management', priority: 0.8 },
    { path: 'research-process', priority: 0.9 },
    { path: 'portfolio-review-vadodara', priority: 0.9 },
    { path: 'private-wealth-management-gujarat-india', priority: 0.9 },
    { path: 'family-wealth-office-gujarat-india', priority: 0.9 },
    { path: 'leadership-team', priority: 0.8 },
    { path: 'mutual-fund-investment-support-vadodara', priority: 0.9 },
    { path: 'fixed-income-investments-vadodara', priority: 0.9 },
    { path: 'pms-aif-sif-investment-support-gujarat-india', priority: 0.9 },
    { path: 'retirement-planning-vadodara', priority: 0.9 },
    { path: 'nri-investment-support-india', priority: 0.9 },
    { path: 'sebi-registered-research-analyst-vadodara', priority: 0.9 },
    { path: 'regulatory-disclosures', priority: 0.9 },
    { path: 'privacy-policy', priority: 0.7 },
    { path: 'terms-of-use', priority: 0.7 },
    { path: 'tax-planning-savings', priority: 0.9 },
    { path: 'wealth-tools', priority: 0.9 },
    { path: 'knowledge-centre', priority: 0.9 },
    { path: 'research-reports', priority: 0.9 },
    { path: 'book-portfolio-review', priority: 0.9 },
    { path: 'primeidea-ventures-profile', priority: 0.9 },
    { path: 'comparisons', priority: 0.9 },
    { path: 'comparisons/research-analyst-vs-investment-adviser-vs-mfd', priority: 0.8 },
    { path: 'comparisons/pms-vs-mutual-funds', priority: 0.8 },
    { path: 'comparisons/aif-vs-pms-vs-mutual-funds', priority: 0.8 },
    { path: 'comparisons/sip-vs-lumpsum-vs-stp', priority: 0.8 },
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
