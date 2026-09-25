import { COMPARISONS } from "../data/comparisons";

/**
 * Indexable static routes. Retired paths that permanently redirect
 * (legacy inheritance and /insurance) stay out of the sitemap.
 * The book-review thank-you page is noindex and is omitted on purpose.
 */
const STATIC_SITEMAP_PAGES = [
  { path: "", priority: 1.0 },
  { path: "about-us", priority: 0.9 },
  { path: "become-a-partner", priority: 0.9 },
  { path: "blogs", priority: 0.9 },
  { path: "careers", priority: 0.9 },
  { path: "careers/submit-resume", priority: 0.7 },
  { path: "contact-us", priority: 0.9 },
  { path: "financial-planning-and-investment-advisory", priority: 0.9 },
  { path: "insurance-planning", priority: 0.9 },
  { path: "legacy-succession-estate-planning-india", priority: 0.9 },
  { path: "research-based-wealth-management", priority: 0.8 },
  { path: "research-process", priority: 0.9 },
  { path: "portfolio-review", priority: 0.9 },
  { path: "private-wealth-management-gujarat-india", priority: 0.9 },
  { path: "family-wealth-office-gujarat-india", priority: 0.9 },
  { path: "leadership-team", priority: 0.8 },
  { path: "mutual-fund-investment-support", priority: 0.9 },
  { path: "direct-equity-research-support", priority: 0.9 },
  { path: "fixed-income-investments", priority: 0.9 },
  { path: "pms-aif-sif-investment-support-gujarat-india", priority: 0.9 },
  { path: "retirement-planning", priority: 0.9 },
  { path: "nri-investment-support-india", priority: 0.9 },
  { path: "sebi-registered-research-analyst", priority: 0.9 },
  { path: "regulatory-disclosures", priority: 0.9 },
  { path: "privacy-policy", priority: 0.7 },
  { path: "terms-of-use", priority: 0.7 },
  { path: "tax-planning-savings", priority: 0.9 },
  { path: "wealth-tools", priority: 0.9 },
  { path: "knowledge-centre", priority: 0.9 },
  { path: "research-reports", priority: 0.9 },
  { path: "book-portfolio-review", priority: 0.9 },
  { path: "primeidea-ventures-profile", priority: 0.9 },
  { path: "comparisons", priority: 0.9 },
  ...COMPARISONS.map((guide) => ({
    path: `comparisons/${guide.slug}`,
    priority: 0.8,
  })),
];

export default STATIC_SITEMAP_PAGES;
