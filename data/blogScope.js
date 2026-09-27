/**
 * Blog author box and related service links.
 * Blog categories come from WordPress. Add or rename them in the WordPress admin.
 */

export const SERVICE_LINKS = [
  { title: "Research Process", href: "/research-process" },
  { title: "Portfolio Review", href: "/portfolio-review" },
  { title: "Mutual Fund Investment Support", href: "/mutual-fund-investment-support" },
  { title: "Retirement Planning", href: "/retirement-planning" },
  { title: "Insurance Planning", href: "/insurance-planning" },
  { title: "Fixed Income", href: "/fixed-income-investments" },
  { title: "Private Wealth", href: "/private-wealth-management-gujarat-india" },
  { title: "Regulatory Disclosures", href: "/regulatory-disclosures" },
];

const DISCLOSURE =
  "Educational content only. Investments in the securities market are subject to market risks. PrimeIdea Ventures does not guarantee returns and does not present itself as a SEBI Registered Investment Adviser unless separately registered.";

const PARTHA_EXPERIENCE =
  "Engineering Graduate, Masters in Finance & SEBI Registered Research Analyst.";

/** Category assigned to the post in WordPress. */
export function getWordPressCategory(post) {
  const nodes = post?.categories?.nodes || [];
  const node =
    nodes.find((item) => item?.slug && item.slug !== "uncategorized") || nodes[0];
  if (!node?.name || !node?.slug) return null;
  return { label: node.name, slug: node.slug };
}

export function relatedServiceLinks() {
  return SERVICE_LINKS;
}

export function getAuthorAttribution(post) {
  const wpName = post?.author?.node?.name || "";
  const writtenByPartha = /partha/i.test(wpName);
  const reviewer = "Partha Shah, SEBI Registered Research Analyst INH000017815";

  if (writtenByPartha) {
    return {
      writtenByPartha: true,
      byline: "Written by Partha Shah, SEBI Registered Research Analyst INH000017815",
      authorName: "Partha Shah",
      role: "Head of Research & Investment Strategy",
      registration: "INH000017815",
      experience: PARTHA_EXPERIENCE,
      reviewedBy: reviewer,
      disclosure: DISCLOSURE,
    };
  }

  return {
    writtenByPartha: false,
    byline: "Written by PrimeIdea Research Team | Reviewed by Partha Shah",
    authorName: "PrimeIdea Research Team",
    role: "Research desk, reviewed by the SEBI Registered Research Analyst",
    registration: "INH000017815",
    experience: `Prepared by the PrimeIdea research desk. ${PARTHA_EXPERIENCE}`,
    reviewedBy: reviewer,
    disclosure: DISCLOSURE,
  };
}

export function extractSources(html) {
  if (!html) return [];
  const matches = html.matchAll(/<a[^>]+href="(https?:\/\/[^"]+)"[^>]*>([\s\S]*?)<\/a>/gi);
  const sources = [];
  for (const match of matches) {
    const href = match[1];
    if (/primeidea\.in|facebook\.com|instagram\.com|linkedin\.com|whatsapp\.com|twitter\.com|x\.com|tawk\.to/i.test(href)) {
      continue;
    }
    const label = match[2].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
    if (!label) continue;
    sources.push({ label, href });
    if (sources.length >= 5) break;
  }
  return sources;
}
