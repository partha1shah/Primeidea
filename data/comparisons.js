/**
 * Comparison education pages — educational only, no product push / return guarantees.
 */

export const COMPARISON_HUB = {
  path: "/comparisons",
  title: "Investment Comparison Guides",
  description:
    "Educational comparisons — Research Analyst vs Investment Adviser vs MFD, PMS vs mutual funds, AIF vs PMS vs MF, and SIP vs lumpsum vs STP. Guided by Partha Shah, SEBI Registered Research Analyst INH000017815. No guaranteed returns.",
};

export const COMPARISONS = [
  {
    slug: "research-analyst-vs-investment-adviser-vs-mfd",
    shortTitle: "RA vs IA vs MFD",
    title: "Research Analyst vs Investment Adviser vs MFD",
    h1: "Research Analyst vs Investment Adviser vs Mutual Fund Distributor",
    summary:
      "Three different SEBI / distribution roles. Understanding the difference helps you know what PrimeIdea is — and what it is not.",
    metaDescription:
      "Compare SEBI Registered Research Analyst, SEBI Registered Investment Adviser, and Mutual Fund Distributor roles. PrimeIdea operates as research-led under SEBI RA INH000017815 — not as an RIA unless separately registered.",
    keywords:
      "research analyst vs investment adviser, RA vs RIA vs MFD, SEBI RA INH000017815, PrimeIdea Ventures",
    columns: [
      {
        id: "ra",
        name: "Research Analyst (RA)",
        tagline: "Research & analysis",
        highlight: true,
      },
      {
        id: "ia",
        name: "Investment Adviser (IA / RIA)",
        tagline: "Personalised advice",
        highlight: false,
      },
      {
        id: "mfd",
        name: "Mutual Fund Distributor (MFD)",
        tagline: "Distribution / sales",
        highlight: false,
      },
    ],
    rows: [
      {
        lens: "Primary role",
        ra: "Research and analysis on securities / markets",
        ia: "Personalised investment advice under IA regulations",
        mfd: "Distributes mutual fund schemes; earns distribution fees",
      },
      {
        lens: "Registration",
        ra: "SEBI Registered Research Analyst",
        ia: "SEBI Registered Investment Adviser (separate category)",
        mfd: "AMFI / ARN registration for mutual fund distribution",
      },
      {
        lens: "What you typically get",
        ra: "Research notes, process-led portfolio review context",
        ia: "Advice tailored to your situation under IA rules",
        mfd: "Scheme recommendations tied to distribution offerings",
      },
      {
        lens: "PrimeIdea positioning",
        ra: "Yes — Partha Shah, SEBI RA INH000017815",
        ia: "No — not presented as RIA unless separately registered",
        mfd: "Distinct from a product-push distributor pitch",
      },
    ],
    takeaways: [
      "Completing RIA examinations is not the same as being a SEBI Registered Investment Adviser.",
      "PrimeIdea’s public positioning is research-led portfolio review under SEBI RA registration.",
      "Always verify the registration category independently before engaging any intermediary.",
    ],
    whenToUse: [
      {
        title: "Use this comparison when",
        items: [
          "You want to know if someone is an RA, RIA, or distributor",
          "You are checking PrimeIdea’s regulatory category",
          "You are comparing how advice, research, and distribution differ",
        ],
      },
    ],
    relatedServices: [
      { title: "SEBI RA page", href: "/sebi-registered-research-analyst-vadodara" },
      { title: "Regulatory Disclosures", href: "/regulatory-disclosures" },
      { title: "Entity profile", href: "/primeidea-ventures-profile" },
    ],
    faqs: [
      {
        question: "Is a Research Analyst the same as an Investment Adviser?",
        answer:
          "No. A SEBI Registered Research Analyst provides research and analysis. A SEBI Registered Investment Adviser provides personalised investment advice under a separate registration. PrimeIdea operates under SEBI RA registration (INH000017815) and does not present itself as an RIA unless separately registered.",
      },
      {
        question: "Is PrimeIdea a Mutual Fund Distributor?",
        answer:
          "PrimeIdea’s public positioning is research-led wealth management and portfolio review under SEBI Registered Research Analyst registration. Mutual fund support is suitability-oriented review — not a product-push distributor pitch.",
      },
    ],
  },
  {
    slug: "pms-vs-mutual-funds",
    shortTitle: "PMS vs Mutual Funds",
    title: "PMS vs Mutual Funds",
    h1: "PMS vs Mutual Funds — What Differs in a Review",
    summary:
      "Portfolio Management Services and mutual funds can both hold securities — but costs, liquidity, minimums, and concentration often differ. Education only; not a ranking.",
    metaDescription:
      "Educational comparison of PMS vs mutual funds — mandate, fees, liquidity, and suitability. Research-led review guided by Partha Shah, SEBI RA INH000017815. No guaranteed returns.",
    keywords:
      "PMS vs mutual funds, portfolio management services vs MF, PMS suitability India, PrimeIdea Ventures",
    columns: [
      {
        id: "mf",
        name: "Mutual funds",
        tagline: "Pooled schemes",
        highlight: false,
      },
      {
        id: "pms",
        name: "PMS",
        tagline: "Managed mandate",
        highlight: true,
      },
    ],
    rows: [
      {
        lens: "Structure",
        mf: "Pooled scheme units with a stated objective",
        pms: "Managed portfolio under a defined mandate (discretionary or otherwise)",
      },
      {
        lens: "Typical entry",
        mf: "Often accessible via SIP / lumpsum with lower ticket sizes",
        pms: "Higher minimums are common; eligibility rules apply",
      },
      {
        lens: "Liquidity lens",
        mf: "Usually higher — subject to exit loads and fund rules",
        pms: "Strategy-dependent; review exit path before size",
      },
      {
        lens: "Cost lens",
        mf: "Expense ratio, exit load, tax on switches",
        pms: "Management / performance-related fees — net impact matters",
      },
      {
        lens: "Key review question",
        mf: "Overlap, role in the book, SIP fit",
        pms: "Does the mandate still fit the household?",
      },
    ],
    takeaways: [
      "PMS is not automatically “better” than mutual funds — suitability and costs come first.",
      "Many private wealth reviews stay with mutual funds, equity, and fixed income.",
      "Discuss PMS only where distribution/compliance rights exist and the book may need it.",
    ],
    whenToUse: [
      {
        title: "Use this comparison when",
        items: [
          "Someone is pitching PMS purely on past return",
          "You already hold many MFs and wonder if PMS adds anything",
          "You need a checklist before a suitability conversation",
        ],
      },
    ],
    relatedServices: [
      {
        title: "PMS, AIF & SIF Support",
        href: "/pms-aif-sif-investment-support-gujarat-india",
      },
      {
        title: "Mutual Fund Support",
        href: "/mutual-fund-investment-support-vadodara",
      },
      {
        title: "Private Wealth",
        href: "/private-wealth-management-gujarat-india",
      },
    ],
    faqs: [
      {
        question: "Should every HNI use PMS?",
        answer:
          "No. PMS is discussed only where it may be suitable and where distribution rights exist. Overlap, costs, liquidity, and mandate fit are reviewed first. Many books stay with mutual funds and equity.",
      },
      {
        question: "Do PMS or mutual funds guarantee returns?",
        answer:
          "No. Investments in the securities market are subject to market risks. PrimeIdea does not guarantee returns.",
      },
    ],
  },
  {
    slug: "aif-vs-pms-vs-mutual-funds",
    shortTitle: "AIF vs PMS vs MF",
    title: "AIF vs PMS vs Mutual Funds",
    h1: "AIF vs PMS vs Mutual Funds — Suitability Lenses",
    summary:
      "Alternative Investment Funds, Portfolio Management Services, and mutual funds sit in different structural and liquidity buckets. Compare lenses — not return promises.",
    metaDescription:
      "Educational comparison of AIF vs PMS vs mutual funds — structure, liquidity, costs, and who should pause. Guided by Partha Shah, SEBI RA INH000017815. No guaranteed returns.",
    keywords:
      "AIF vs PMS vs mutual funds, alternative investment funds comparison, PMS suitability, PrimeIdea Ventures",
    columns: [
      {
        id: "mf",
        name: "Mutual funds",
        tagline: "Listed pooled schemes",
        highlight: false,
      },
      {
        id: "pms",
        name: "PMS",
        tagline: "Managed portfolios",
        highlight: false,
      },
      {
        id: "aif",
        name: "AIF",
        tagline: "Alternate / private sleeves",
        highlight: true,
      },
    ],
    rows: [
      {
        lens: "Typical starting point",
        mf: "SIPs & scheme mix",
        pms: "Managed mandate",
        aif: "Alt / private strategy sleeve",
      },
      {
        lens: "Liquidity focus",
        mf: "Usually higher",
        pms: "Strategy-dependent",
        aif: "Often lower / lock-ins",
      },
      {
        lens: "Cost lens",
        mf: "Expense ratio, exit load",
        pms: "Management / performance fees",
        aif: "Fund & structure costs",
      },
      {
        lens: "Concentration risk",
        mf: "Category & scheme overlap",
        pms: "Stock / sector vs mandate",
        aif: "Strategy & underlying exposure",
      },
      {
        lens: "Who should often pause",
        mf: "If adding schemes without an overlap map",
        pms: "If sold only on past performance",
        aif: "If cash is needed soon or docs are unclear",
      },
    ],
    takeaways: [
      "Higher minimums and lower liquidity are risks to understand — not features to ignore.",
      "SIF is reviewed with the same suitability filters as other specialized strategies.",
      "Availability depends on eligibility, empanelment, and compliance.",
    ],
    whenToUse: [
      {
        title: "Use this comparison when",
        items: [
          "You are comparing an alternate sleeve to listed MF / PMS options",
          "You need a keep / review / skip framing before committing capital",
          "You want education before a private wealth conversation",
        ],
      },
    ],
    relatedServices: [
      {
        title: "PMS, AIF & SIF Support",
        href: "/pms-aif-sif-investment-support-gujarat-india",
      },
      {
        title: "Research Reports",
        href: "/research-reports",
      },
      {
        title: "Book suitability review",
        href: "/book-portfolio-review?service=PMS%20%2F%20AIF%20%2F%20SIF%20Suitability%20Review",
      },
    ],
    faqs: [
      {
        question: "Are AIFs always higher risk than mutual funds?",
        answer:
          "Risk depends on strategy, leverage, liquidity, and concentration — not the label alone. AIFs often have higher minimums and lower liquidity. Read offer documents carefully. PrimeIdea does not guarantee returns.",
      },
      {
        question: "Does PrimeIdea offer AIF or PMS to every client?",
        answer:
          "No. These products are discussed only where they may be suitable and where distribution and compliance rights exist.",
      },
    ],
  },
  {
    slug: "sip-vs-lumpsum-vs-stp",
    shortTitle: "SIP vs Lumpsum vs STP",
    title: "SIP vs Lumpsum vs STP",
    h1: "SIP vs Lumpsum vs STP — How to Think About Deployment",
    summary:
      "Systematic Investment Plans, lumpsum investments, and Systematic Transfer Plans are deployment methods — not return guarantees. Choice depends on cash flow, time horizon, and behaviour.",
    metaDescription:
      "Educational comparison of SIP vs lumpsum vs STP for mutual fund deployment. Process-led guidance from PrimeIdea Ventures, Vadodara. No guaranteed returns. SEBI RA INH000017815.",
    keywords:
      "SIP vs lumpsum vs STP, mutual fund deployment, systematic transfer plan, PrimeIdea Ventures Vadodara",
    columns: [
      {
        id: "sip",
        name: "SIP",
        tagline: "Regular contributions",
        highlight: true,
      },
      {
        id: "lumpsum",
        name: "Lumpsum",
        tagline: "One-time investment",
        highlight: false,
      },
      {
        id: "stp",
        name: "STP",
        tagline: "Staged transfer",
        highlight: false,
      },
    ],
    rows: [
      {
        lens: "How money moves",
        sip: "Fixed amount from bank to scheme on a schedule",
        lumpsum: "Entire amount invested at once",
        stp: "Amount moves from one scheme (often liquid/debt) to another over time",
      },
      {
        lens: "Cash-flow fit",
        sip: "Works well with salary / regular surplus",
        lumpsum: "Works when a large sum is already available",
        stp: "Useful when a corpus is parked and you want staged equity/debt entry",
      },
      {
        lens: "Behaviour lens",
        sip: "Can reduce timing pressure; discipline still required",
        lumpsum: "Timing anxiety is common; process review still needed",
        stp: "Can bridge parking and long-term allocation without all-at-once pressure",
      },
      {
        lens: "Review checkpoints",
        sip: "Amount, tenure, scheme role, overlap with other SIPs",
        lumpsum: "Goal horizon, emergency buffer, tax / exit load if switching",
        stp: "Source & target schemes, transfer size, and remaining cash need",
      },
      {
        lens: "What it is not",
        sip: "Not a guarantee of higher returns",
        lumpsum: "Not automatically better or worse than SIP",
        stp: "Not a risk-free way to time the market",
      },
    ],
    takeaways: [
      "Deployment method does not remove market risk.",
      "Map overlapping SIPs before adding another.",
      "Choose based on cash flow and goals — not on “best return” claims.",
    ],
    whenToUse: [
      {
        title: "Use this comparison when",
        items: [
          "You have a bonus / maturity amount and are unsure how to deploy",
          "Your SIPs have multiplied without an overlap review",
          "Someone claims SIP always beats lumpsum (or the reverse)",
        ],
      },
    ],
    relatedServices: [
      {
        title: "Mutual Fund Support",
        href: "/mutual-fund-investment-support-vadodara",
      },
      { title: "Wealth Tools", href: "/wealth-tools" },
      { title: "Portfolio Review", href: "/portfolio-review-vadodara" },
    ],
    faqs: [
      {
        question: "Is SIP always better than lumpsum?",
        answer:
          "No. SIP and lumpsum are deployment methods. Suitability depends on when cash is available, time horizon, and behaviour. Neither guarantees higher returns. Market risks apply.",
      },
      {
        question: "What is an STP used for?",
        answer:
          "An STP systematically transfers money from one scheme to another over time — often from a liquid/debt parking scheme into a longer-term allocation. Costs, tax, and target-scheme fit should still be reviewed.",
      },
    ],
  },
];

export function getComparisonBySlug(slug) {
  return COMPARISONS.find((item) => item.slug === slug) || null;
}

export function getAllComparisonSlugs() {
  return COMPARISONS.map((item) => item.slug);
}
