/**
 * Blog author box, category labels, and the internal-link rule.
 * Categories are assigned in the template so every article is filed even when
 * WordPress still uses older category names.
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

export const BLOG_CATEGORIES = [
  {
    slug: "mutual-fund-research",
    label: "Mutual Fund Research",
    wpSlugs: ["finance-planning"],
    keywords: ["mutual fund", "sip", "elss", "index fund", "scheme"],
    links: ["/mutual-fund-investment-support", "/portfolio-review", "/research-process"],
  },
  {
    slug: "equity-research",
    label: "Equity Research",
    wpSlugs: [],
    keywords: ["equity", "stock", "share market", "ipo", "shares"],
    links: ["/research-process", "/portfolio-review", "/private-wealth-management-gujarat-india"],
  },
  {
    slug: "portfolio-review",
    label: "Portfolio Review",
    wpSlugs: ["wealth-management"],
    keywords: ["portfolio", "overlap", "asset allocation", "rebalanc"],
    links: ["/portfolio-review", "/research-process", "/mutual-fund-investment-support"],
  },
  {
    slug: "retirement-planning",
    label: "Retirement Planning",
    wpSlugs: ["retirement-planning"],
    keywords: ["retirement", "nps", "pension", "corpus"],
    links: ["/retirement-planning", "/portfolio-review", "/fixed-income-investments"],
  },
  {
    slug: "insurance-planning",
    label: "Insurance Planning",
    wpSlugs: ["insurance", "mediclaim"],
    keywords: ["insurance", "mediclaim", "term plan", "health cover"],
    links: ["/insurance-planning", "/portfolio-review", "/research-process"],
  },
  {
    slug: "tax-planning",
    label: "Tax Planning",
    wpSlugs: ["tax-planning"],
    keywords: ["tax", "80c", "capital gain"],
    links: ["/research-process", "/mutual-fund-investment-support", "/retirement-planning"],
  },
  {
    slug: "fixed-income",
    label: "Fixed Income",
    wpSlugs: [],
    keywords: ["fixed income", "bond", "debt fund", "gilt", "yield"],
    links: ["/fixed-income-investments", "/portfolio-review", "/research-process"],
  },
  {
    slug: "nri-investing",
    label: "NRI Investing",
    wpSlugs: [],
    keywords: ["nri", "nre", "nro", "repatriat"],
    links: ["/portfolio-review", "/research-process", "/regulatory-disclosures"],
  },
  {
    slug: "pms-aif-sif",
    label: "PMS / AIF / SIF",
    wpSlugs: [],
    keywords: ["pms", "aif", "sif", "alternative investment"],
    links: ["/private-wealth-management-gujarat-india", "/research-process", "/portfolio-review"],
  },
  {
    slug: "investor-behaviour",
    label: "Investor Behaviour",
    wpSlugs: ["legacy-inheritance"],
    keywords: ["behaviour", "behavior", "bias", "discipline", "legacy", "nomination"],
    links: ["/research-process", "/portfolio-review", "/regulatory-disclosures"],
  },
  {
    slug: "market-outlook",
    label: "Market Outlook",
    wpSlugs: ["update"],
    keywords: ["outlook", "capex", "macro"],
    links: ["/research-process", "/portfolio-review", "/private-wealth-management-gujarat-india"],
  },
];

const DEFAULT_CATEGORY = BLOG_CATEGORIES.find((item) => item.slug === "investor-behaviour");

const DISCLOSURE =
  "Educational content only. Investments in the securities market are subject to market risks. PrimeIdea Ventures does not guarantee returns and does not present itself as a SEBI Registered Investment Adviser unless separately registered.";

const PARTHA_EXPERIENCE =
  "SEBI Registered Research Analyst. Engineering graduate (BE) and Master’s in Finance (MS Finance). CFA Level 2 examination completed. RIA examinations completed are not a SEBI Investment Adviser registration.";

export function getBlogCategory(slug) {
  if (!slug) return null;
  return (
    BLOG_CATEGORIES.find((item) => item.slug === slug) ||
    BLOG_CATEGORIES.find((item) => item.wpSlugs.includes(slug)) ||
    null
  );
}

function plainText(value) {
  return String(value || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .toLowerCase();
}

export function classifyPost(post) {
  const nodes = post?.categories?.nodes || [];
  for (const node of nodes) {
    const mapped = getBlogCategory(node.slug);
    if (mapped && mapped.slug !== node.slug) return mapped;
    const exact = BLOG_CATEGORIES.find((item) => item.slug === node.slug);
    if (exact) return exact;
  }

  const text = plainText(`${post?.title || ""} ${post?.excerpt || ""}`);
  let best = null;
  let bestScore = 0;
  for (const category of BLOG_CATEGORIES) {
    const score = category.keywords.reduce(
      (total, keyword) => total + (text.includes(keyword) ? 1 : 0),
      0
    );
    if (score > bestScore) {
      best = category;
      bestScore = score;
    }
  }
  return best || DEFAULT_CATEGORY;
}

export function relatedServiceLinks(post) {
  const category = classifyPost(post);
  return category.links.map(
    (href) => SERVICE_LINKS.find((item) => item.href === href)
  ).filter(Boolean);
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
