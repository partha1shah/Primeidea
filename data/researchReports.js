/**
 * Research Reports catalogue.
 * Add new PDF files under /public/docs/research/ and register them here.
 * Keep this library separate from general /blogs content.
 */

export const REPORT_CATEGORIES = [
  {
    id: "monthly-outlook",
    title: "Monthly market outlook",
    description:
      "Periodic market context for planning discussions — themes to watch, not return forecasts.",
    Icon: "ChartBarIcon",
  },
  {
    id: "equity-notes",
    title: "Equity market notes",
    description:
      "Process-led notes on equity market structure, concentration, and review lenses.",
    Icon: "PresentationChartLineIcon",
  },
  {
    id: "mf-category",
    title: "Mutual fund category notes",
    description:
      "Category-level education on mutual fund styles, overlap risks, and review checkpoints.",
    Icon: "RectangleStackIcon",
  },
  {
    id: "fixed-income",
    title: "Fixed income notes",
    description:
      "Notes on debt, credit, duration, and liquidity considerations for stability sleeves.",
    Icon: "BanknotesIcon",
  },
  {
    id: "asset-allocation",
    title: "Asset allocation notes",
    description:
      "Framework notes on equity–debt–cash mix, rebalancing discipline, and goal alignment.",
    Icon: "ChartPieIcon",
  },
  {
    id: "sector-research",
    title: "Sector research",
    description:
      "Educational sector context used in portfolio concentration and exposure reviews.",
    Icon: "BuildingLibraryIcon",
  },
  {
    id: "portfolio-strategy",
    title: "Portfolio strategy notes",
    description:
      "Strategy education on review cadence, risk budgeting, and implementation discipline.",
    Icon: "ClipboardDocumentCheckIcon",
  },
  {
    id: "alts-education",
    title: "SIF / PMS / AIF education notes",
    description:
      "Education on suitability, liquidity, cost, and concentration — not product solicitation.",
    Icon: "ScaleIcon",
  },
];

/**
 * status:
 * - available: PDF ready to download
 * - request: contact to receive the latest version
 */
export const RESEARCH_REPORTS = [
  {
    id: "portfolio-review-framework",
    title: "PrimeIdea Portfolio Review Framework",
    categoryId: "portfolio-strategy",
    summary:
      "Structured checklist for research-led portfolio review — allocation, overlap, risk metrics, costs, and process steps.",
    dateLabel: "Framework",
    status: "available",
    href: "/docs/portfolio-review-framework.pdf",
    fileLabel: "PDF",
  },
  {
    id: "monthly-market-outlook",
    title: "Monthly Market Outlook",
    categoryId: "monthly-outlook",
    summary:
      "Latest monthly outlook note summarising themes relevant to portfolio planning. Request the current edition from the research desk.",
    dateLabel: "Updated monthly",
    status: "request",
    href: "/contact-us",
    fileLabel: "Request PDF",
  },
  {
    id: "equity-market-note",
    title: "Equity Market Note",
    categoryId: "equity-notes",
    summary:
      "Educational equity-market note covering concentration, drawdown awareness, and review questions for existing holdings.",
    dateLabel: "On request",
    status: "request",
    href: "/contact-us",
    fileLabel: "Request PDF",
  },
  {
    id: "mf-category-note",
    title: "Mutual Fund Category Note",
    categoryId: "mf-category",
    summary:
      "Category education for mutual fund review — style drift, overlap, and cost awareness without product push.",
    dateLabel: "On request",
    status: "request",
    href: "/contact-us",
    fileLabel: "Request PDF",
  },
  {
    id: "fixed-income-note",
    title: "Fixed Income Note",
    categoryId: "fixed-income",
    summary:
      "Debt and fixed-income education note on interest-rate, credit, and liquidity considerations.",
    dateLabel: "On request",
    status: "request",
    href: "/contact-us",
    fileLabel: "Request PDF",
  },
  {
    id: "asset-allocation-note",
    title: "Asset Allocation Note",
    categoryId: "asset-allocation",
    summary:
      "Allocation framework note for goal-linked equity–debt–cash mix and rebalancing discipline.",
    dateLabel: "On request",
    status: "request",
    href: "/contact-us",
    fileLabel: "Request PDF",
  },
  {
    id: "sector-research-note",
    title: "Sector Research Note",
    categoryId: "sector-research",
    summary:
      "Sector exposure education used during portfolio concentration and diversification reviews.",
    dateLabel: "On request",
    status: "request",
    href: "/contact-us",
    fileLabel: "Request PDF",
  },
  {
    id: "portfolio-strategy-note",
    title: "Portfolio Strategy Note",
    categoryId: "portfolio-strategy",
    summary:
      "Strategy education on review cadence, risk budgeting, and implementation follow-through.",
    dateLabel: "On request",
    status: "request",
    href: "/contact-us",
    fileLabel: "Request PDF",
  },
  {
    id: "alts-education-note",
    title: "SIF / PMS / AIF Education Note",
    categoryId: "alts-education",
    summary:
      "Suitability-first education on PMS, AIF, and SIF concepts — liquidity, cost, and concentration risks. Not a product offer.",
    dateLabel: "On request",
    status: "request",
    href: "/contact-us",
    fileLabel: "Request PDF",
  },
];
