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
      "How a monthly note is used in planning. Themes to question, not a return forecast or a product list.",
    dateLabel: "Education note",
    status: "available",
    href: "/docs/research/monthly-market-note.pdf",
    fileLabel: "PDF",
  },
  {
    id: "equity-market-note",
    title: "Equity Market Note",
    categoryId: "equity-notes",
    summary:
      "Review questions for direct equity: position size, overlap with funds, sector concentration, and drawdown.",
    dateLabel: "Education note",
    status: "available",
    href: "/docs/research/equity-market-note.pdf",
    fileLabel: "PDF",
  },
  {
    id: "mf-category-note",
    title: "Mutual Fund Category Note",
    categoryId: "mf-category",
    summary:
      "Category review checklist: overlap, expense ratio, exit load, and the job each scheme does in the book.",
    dateLabel: "Education note",
    status: "available",
    href: "/docs/research/mutual-fund-category-note.pdf",
    fileLabel: "PDF",
  },
  {
    id: "fixed-income-note",
    title: "Fixed Income Note",
    categoryId: "fixed-income",
    summary:
      "Credit, interest-rate, and liquidity risks. Fixed income is not a guaranteed return.",
    dateLabel: "Education note",
    status: "available",
    href: "/docs/research/fixed-income-note.pdf",
    fileLabel: "PDF",
  },
  {
    id: "asset-allocation-note",
    title: "Asset Allocation Note",
    categoryId: "asset-allocation",
    summary:
      "Equity, debt, and cash mix, plus when drift should be reviewed before a new product is added.",
    dateLabel: "Education note",
    status: "available",
    href: "/docs/research/asset-allocation-note.pdf",
    fileLabel: "PDF",
  },
  {
    id: "sector-research-note",
    title: "Sector Research Note",
    categoryId: "sector-research",
    summary:
      "How sector exposure can build up across stocks and funds. Not a sector to buy.",
    dateLabel: "Education note",
    status: "available",
    href: "/docs/research/sector-research-note.pdf",
    fileLabel: "PDF",
  },
  {
    id: "portfolio-strategy-note",
    title: "Portfolio Strategy Note",
    categoryId: "portfolio-strategy",
    summary:
      "Review cadence, written next steps, and why a strong quarter is not a reason to add a product.",
    dateLabel: "Education note",
    status: "available",
    href: "/docs/research/portfolio-strategy-note.pdf",
    fileLabel: "PDF",
  },
  {
    id: "alts-education-note",
    title: "SIF / PMS / AIF Education Note",
    categoryId: "alts-education",
    summary:
      "Minimums, liquidity, fees, and who should pause. Not a product offer.",
    dateLabel: "Education note",
    status: "available",
    href: "/docs/research/alts-education-note.pdf",
    fileLabel: "PDF",
  },
];
