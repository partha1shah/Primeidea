/**
 * Comparison education pages — educational only, no product push / return guarantees.
 */

export const COMPARISON_HUB = {
  path: "/comparisons",
  title: "Investment Comparison Guides",
  description:
    "Educational comparisons — Research Analyst vs Investment Adviser vs MFD, direct apps vs portfolio review, regular vs direct mutual funds, PMS vs mutual funds, and financial planner vs wealth manager. Guided by Partha Shah, SEBI Registered Research Analyst INH000017815. No guaranteed returns.",
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
      { title: "SEBI RA page", href: "/sebi-registered-research-analyst" },
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
        href: "/mutual-fund-investment-support",
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
        href: "/mutual-fund-investment-support",
      },
      { title: "Wealth Tools", href: "/wealth-tools" },
      { title: "Portfolio Review", href: "/portfolio-review" },
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
  {
    slug: "direct-mutual-fund-apps-vs-portfolio-review",
    shortTitle: "Apps vs portfolio review",
    title: "Direct Mutual Fund Apps vs Portfolio Review",
    h1: "Direct Mutual Fund Apps vs a Portfolio Review",
    summary:
      "A direct mutual fund app is a place to transact. A portfolio review is a process that checks overlap, allocation, cost, and whether existing holdings still fit the goal.",
    metaDescription:
      "Educational comparison of direct mutual fund apps and a research-led portfolio review. PrimeIdea Ventures, Vadodara. Guided by Partha Shah, SEBI RA INH000017815. No guaranteed returns.",
    keywords:
      "direct mutual fund app vs portfolio review, direct mutual funds, portfolio overlap, PrimeIdea Ventures Vadodara",
    columns: [
      {
        id: "app",
        name: "Direct mutual fund app",
        tagline: "Transaction platform",
        highlight: false,
      },
      {
        id: "review",
        name: "Portfolio review",
        tagline: "Research-led process",
        highlight: true,
      },
    ],
    rows: [
      {
        lens: "Primary job",
        app: "Buy, sell, SIP, and view scheme transactions",
        review: "Assess what you already hold before adding more",
      },
      {
        lens: "What you typically see",
        app: "Fund list, NAV, SIP status, and past returns on that platform",
        review: "Overlap, allocation gaps, costs, tax impact, and written next steps",
      },
      {
        lens: "What it may miss",
        app: "Holdings outside the app, insurance, and goal fit across products",
        review: "It is not a trading app and does not replace scheme documents",
      },
      {
        lens: "Risk framing",
        app: "Screens often lead with returns and star ratings",
        review: "Suitability, concentration, and drawdown come before product choice",
      },
      {
        lens: "PrimeIdea use",
        app: "Clients may keep using an app they already have",
        review: "PrimeIdea reviews the book from Vadodara, including video consultations",
      },
    ],
    takeaways: [
      "An app is a channel. A review is a decision process.",
      "Map SIPs across platforms before starting another one.",
      "Neither an app nor a review removes market risk or guarantees returns.",
    ],
    whenToUse: [
      {
        title: "Use this comparison when",
        items: [
          "You have several direct apps and no single picture of overlap",
          "A fund screen is pushing a new SIP based on recent returns",
          "You want a written review before investing further",
        ],
      },
    ],
    relatedServices: [
      { title: "Mutual Fund Support", href: "/mutual-fund-investment-support" },
      { title: "Portfolio Review", href: "/portfolio-review" },
      { title: "Wealth Tools", href: "/wealth-tools" },
    ],
    faqs: [
      {
        question: "Are direct mutual fund apps a substitute for a portfolio review?",
        answer:
          "No. Apps help you transact and track schemes on that platform. A portfolio review looks across holdings, overlap, allocation, costs, and goals. Market risks still apply.",
      },
      {
        question: "Does PrimeIdea ask investors to leave their existing app?",
        answer:
          "Not as a default. The review starts with what you already hold. Any change depends on suitability, cost, tax, and exit load — not on moving assets for its own sake.",
      },
    ],
  },
  {
    slug: "regular-plan-vs-direct-plan-mutual-funds",
    shortTitle: "Regular vs direct plan",
    title: "Regular Plan vs Direct Plan Mutual Funds",
    h1: "Regular Plan vs Direct Plan Mutual Funds",
    summary:
      "Regular and direct plans of the same scheme share a portfolio. The practical difference is cost and how advice or distribution is paid for — not a promise of higher returns.",
    metaDescription:
      "Educational comparison of regular plan vs direct plan mutual funds — cost, advice, and review checkpoints. PrimeIdea Ventures. SEBI RA INH000017815. No guaranteed returns.",
    keywords:
      "regular plan vs direct plan mutual funds, expense ratio, mutual fund review, PrimeIdea Ventures",
    columns: [
      {
        id: "regular",
        name: "Regular plan",
        tagline: "Includes distribution cost",
        highlight: false,
      },
      {
        id: "direct",
        name: "Direct plan",
        tagline: "Investor transacts directly",
        highlight: false,
      },
      {
        id: "review",
        name: "Review checkpoint",
        tagline: "What to check first",
        highlight: true,
      },
    ],
    rows: [
      {
        lens: "Same scheme?",
        regular: "Usually the same portfolio as the direct option of that scheme",
        direct: "Usually the same portfolio, with a different plan code",
        review: "Confirm scheme name, plan, and option before comparing returns",
      },
      {
        lens: "Cost",
        regular: "Expense ratio includes distribution commission",
        direct: "Expense ratio is typically lower because commission is excluded",
        review: "Cost matters, but overlap and goal fit can matter more",
      },
      {
        lens: "Who is paid",
        regular: "A distributor or platform may earn trail commission",
        direct: "No distributor commission inside the scheme expense",
        review: "Ask what service, if any, is included with the higher cost",
      },
      {
        lens: "Switching",
        regular: "Moving to direct can be a redemption with tax and exit load",
        direct: "Staying direct is not automatically the right next step",
        review: "Check exit load, tax, and whether the holding still has a role",
      },
      {
        lens: "What it is not",
        regular: "Not a guarantee of advice quality",
        direct: "Not a guarantee of higher returns",
        review: "Not a recommendation to switch every regular holding",
      },
    ],
    takeaways: [
      "Compare plan and option of the same scheme, not unrelated funds.",
      "A lower expense ratio does not remove market risk.",
      "A switch can trigger tax and exit load. Review those before acting.",
    ],
    whenToUse: [
      {
        title: "Use this comparison when",
        items: [
          "You hold the same scheme in both regular and direct plans",
          "Someone says direct plans always produce higher returns",
          "You are considering a switch and want cost, tax, and exit load checked",
        ],
      },
    ],
    relatedServices: [
      { title: "Mutual Fund Support", href: "/mutual-fund-investment-support" },
      { title: "Portfolio Review", href: "/portfolio-review" },
      { title: "Research Process", href: "/research-process" },
    ],
    faqs: [
      {
        question: "Is a direct plan always better than a regular plan?",
        answer:
          "Direct plans usually have a lower expense ratio. That is a cost difference, not a return guarantee. Suitability, overlap, tax, and exit load still need a review. Investments are subject to market risks.",
      },
      {
        question: "Can I switch from regular to direct without any cost?",
        answer:
          "A switch is often treated as a redemption and fresh purchase. Exit load and tax can apply. Check the scheme documents and your own tax position before switching.",
      },
    ],
  },
  {
    slug: "financial-planner-vs-wealth-manager-vadodara",
    shortTitle: "Planner vs wealth manager",
    title: "Financial Planner vs Wealth Manager in Vadodara",
    h1: "Financial Planner vs Wealth Manager in Vadodara",
    summary:
      "The titles are used loosely in Vadodara and across India. What matters is the registration, the process, and whether the conversation starts with your existing portfolio — not with a product list.",
    metaDescription:
      "Educational comparison of a financial planner and a wealth manager for investors in Vadodara. Research-led context from PrimeIdea Ventures. SEBI RA INH000017815. No guaranteed returns.",
    keywords:
      "financial planner vs wealth manager Vadodara, portfolio review Vadodara, SEBI RA INH000017815, PrimeIdea Ventures",
    columns: [
      {
        id: "planner",
        name: "Financial planner",
        tagline: "Goals and cash flow",
        highlight: false,
      },
      {
        id: "manager",
        name: "Wealth manager",
        tagline: "Portfolio and products",
        highlight: false,
      },
      {
        id: "primeidea",
        name: "PrimeIdea",
        tagline: "Research-led review",
        highlight: true,
      },
    ],
    rows: [
      {
        lens: "Usual focus",
        planner: "Goals, savings rate, insurance gaps, and retirement corpus",
        manager: "Existing investments, product mix, and ongoing portfolio oversight",
        primeidea: "Portfolio review first, then planning support across products",
      },
      {
        lens: "Registration to check",
        planner: "Ask which SEBI or distribution registration applies",
        manager: "The label alone is not a SEBI category",
        primeidea: "Partha Shah, SEBI Registered Research Analyst INH000017815",
      },
      {
        lens: "Where work happens",
        planner: "Office or online, depending on the firm",
        manager: "Often positioned for larger or multi-product books",
        primeidea: "Vadodara office, plus online consultations across Gujarat and India",
      },
      {
        lens: "What to ask",
        planner: "How goals, risk, and existing products are mapped",
        manager: "How overlap, cost, and concentration are reviewed",
        primeidea: "Request the research process and the written review steps",
      },
      {
        lens: "What neither title guarantees",
        planner: "A title does not guarantee returns",
        manager: "A title does not mean SEBI Investment Adviser registration",
        primeidea: "PrimeIdea is not an RIA unless separately registered, and does not guarantee returns",
      },
    ],
    takeaways: [
      "Verify the registration category. A job title is not a licence.",
      "Start with the current portfolio, not with a new product.",
      "Vadodara is PrimeIdea’s base. Service reach includes Gujarat, India, and NRI clients online.",
    ],
    whenToUse: [
      {
        title: "Use this comparison when",
        items: [
          "You are comparing firms in Vadodara by job title alone",
          "You want to know whether someone is a Research Analyst or an Investment Adviser",
          "You need a portfolio review before a broader wealth conversation",
        ],
      },
    ],
    relatedServices: [
      { title: "SEBI RA page", href: "/sebi-registered-research-analyst" },
      {
        title: "RA vs IA vs MFD",
        href: "/comparisons/research-analyst-vs-investment-adviser-vs-mfd",
      },
      { title: "Book Portfolio Review", href: "/book-portfolio-review" },
    ],
    faqs: [
      {
        question: "Is a wealth manager the same as a SEBI Registered Investment Adviser?",
        answer:
          "No. Wealth manager and financial planner are descriptions, not SEBI registration categories. A Research Analyst and an Investment Adviser are separate registrations. PrimeIdea operates under SEBI RA INH000017815 and does not present itself as an Investment Adviser unless separately registered.",
      },
      {
        question: "Does this comparison apply only in Vadodara?",
        answer:
          "The page uses Vadodara because that is PrimeIdea’s office and a common search for this comparison. The registration and process points apply to investors who consult online from elsewhere in Gujarat, India, or as NRIs.",
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
