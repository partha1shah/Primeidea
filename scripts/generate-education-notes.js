const fs = require("fs");
const path = require("path");

const disclaimer = [
  "",
  "Disclaimer",
  "Investments in the securities market are subject to market risks.",
  "This note is education. It is not a forecast, a product offer, or a promise of returns.",
  "PrimeIdea Ventures does not guarantee returns.",
  "Partha Shah, SEBI Registered Research Analyst INH000017815.",
  "Not a SEBI Registered Investment Adviser unless separately registered.",
];

const notes = [
  {
    file: "monthly-market-note.pdf",
    title: "Monthly market note — how to read it",
    lines: [
      "A monthly note lists themes to watch. It is not a return forecast.",
      "Use it to ask whether your existing book still fits goals and risk.",
      "Check concentration, cash needs, and whether one theme dominates.",
      "Do not treat a theme as a reason to buy a product.",
      "Office: Vadodara. Reach: Gujarat, India, and video reviews.",
    ],
  },
  {
    file: "equity-market-note.pdf",
    title: "Equity review note",
    lines: [
      "Direct equity is reviewed for position size, business risk, and overlap.",
      "A large single stock can dominate the book even if the story is familiar.",
      "Check liquidity, sector concentration, and overlap with mutual funds.",
      "Past price rise is not a reason to add more.",
      "A written review comes before any change.",
    ],
  },
  {
    file: "mutual-fund-category-note.pdf",
    title: "Mutual fund category note",
    lines: [
      "Review categories for the job each scheme does in the book.",
      "Map overlap across equity, hybrid, index, and ELSS holdings.",
      "Check expense ratio, exit load, and tax before a switch.",
      "Star ratings and last year's rank are not a research process.",
      "Read all scheme-related documents carefully.",
    ],
  },
  {
    file: "fixed-income-note.pdf",
    title: "Fixed income review note",
    lines: [
      "Fixed income is not the same as guaranteed return.",
      "Review credit risk, interest-rate risk, and liquidity.",
      "Bonds, debt funds, and deposits can behave differently.",
      "Match maturity and cash needs before adding more.",
      "Capital can fluctuate. Read the documents.",
    ],
  },
  {
    file: "asset-allocation-note.pdf",
    title: "Asset allocation note",
    lines: [
      "Allocation is the mix of equity, debt, and cash for your goals.",
      "Review drift before adding a new product.",
      "Time horizon and cash needs come before product names.",
      "Rebalancing is a discipline, not a promise of higher returns.",
      "The mix should be suitable, not copied from someone else.",
    ],
  },
  {
    file: "sector-research-note.pdf",
    title: "Sector concentration note",
    lines: [
      "Sector exposure can hide inside funds and direct stocks together.",
      "A popular theme can raise concentration, not safety.",
      "Ask what share of the book depends on one sector.",
      "This note does not recommend a sector to buy.",
      "Use it in a portfolio review, not as a tip.",
    ],
  },
  {
    file: "portfolio-strategy-note.pdf",
    title: "Portfolio strategy note",
    lines: [
      "Strategy here means review cadence and follow-through.",
      "Goals, overlap, cost, tax, and risk are checked together.",
      "A written next step says what to keep and what to revisit.",
      "Implementation waits until the review is understood.",
      "No product is added because a quarter looked strong.",
    ],
  },
  {
    file: "alts-education-note.pdf",
    title: "PMS, AIF and SIF education note",
    lines: [
      "These products are not suitable for every portfolio.",
      "Review minimums, liquidity, fees, tax, and concentration.",
      "A label such as PMS or AIF is not a reason to invest.",
      "Distribution is discussed only where compliance rights exist.",
      "Who should pause matters as much as who might consider it.",
    ],
  },
  {
    file: "investor-education-seminar.pdf",
    title: "Investor education seminar outline",
    lines: [
      "Used for education sessions from the Vadodara office.",
      "1. Who PrimeIdea is, and the SEBI RA registration.",
      "2. What a portfolio review covers.",
      "3. Mutual funds, direct equity, and fixed income — risks first.",
      "4. What the session does not do: no tips, no guaranteed returns.",
      "5. How to book an office visit or a video review.",
    ],
  },
];

function esc(s) {
  return s.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function buildPdf(title, bodyLines) {
  const lines = [
    "PrimeIdea Ventures",
    title,
    "",
    "SEBI Registered Research Analyst: Partha Shah  INH000017815",
    "Education note. No guaranteed returns.",
    "",
    ...bodyLines,
    ...disclaimer,
  ];
  let y = 760;
  const ops = [];
  lines.forEach((line, i) => {
    const size = i === 0 ? 14 : i === 1 ? 16 : 11;
    if (i === 0) {
      /* start near top */
    } else if (i === 1) y -= 26;
    else y -= 16;
    if (y < 48) return;
    ops.push(`BT /F1 ${size} Tf 1 0 0 1 50 ${y} Tm (${esc(line)}) Tj ET`);
  });
  const stream = ops.join("\n") + "\n";
  const objects = [
    "1 0 obj<< /Type /Catalog /Pages 2 0 R >>endobj",
    "2 0 obj<< /Type /Pages /Kids [3 0 R] /Count 1 >>endobj",
    "3 0 obj<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>endobj",
    `4 0 obj<< /Length ${Buffer.byteLength(stream)} >>stream\n${stream}endstream\nendobj`,
    "5 0 obj<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>endobj",
  ];
  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  objects.forEach((object) => {
    offsets.push(Buffer.byteLength(pdf));
    pdf += object + "\n";
  });
  const xrefStart = Buffer.byteLength(pdf);
  let xref = `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (let i = 1; i < offsets.length; i++) {
    xref += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
  }
  pdf += `${xref}trailer<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;
  return pdf;
}

const outDir = path.join("D:", "Primeidea", "public", "docs", "research");
fs.mkdirSync(outDir, { recursive: true });
notes.forEach((note) => {
  const target = path.join(outDir, note.file);
  fs.writeFileSync(target, buildPdf(note.title, note.lines));
  console.log("wrote", target);
});
