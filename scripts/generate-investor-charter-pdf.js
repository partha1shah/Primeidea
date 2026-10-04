const fs = require("fs");
const path = require("path");

const lines = [
  "PrimeIdea Ventures",
  "Investor Charter",
  "",
  "SEBI Registered Research Analyst: Partha Shah  INH000017815",
  "Vadodara-based research-led wealth management and portfolio review",
  "firm serving investors across Gujarat and India.",
  "",
  "Vision",
  "To support investors with research-led, process-first portfolio review",
  "and analysis, with clear disclosures and no promise of returns.",
  "",
  "Mission",
  "To help investors understand suitability, risk, overlap, and asset",
  "allocation before making further investment decisions through research",
  "guided by a SEBI Registered Research Analyst.",
  "",
  "Business transacted",
  "PrimeIdea provides research and portfolio-review support covering",
  "mutual funds, equity, ETFs, fixed income, retirement, insurance",
  "planning context, and related wealth-management review.",
  "",
  "Rights of investors",
  "Investors have the right to fair dealing, clear communication of risks,",
  "access to grievance redressal, and independent verification of SEBI",
  "registration. Read all scheme-related documents carefully.",
  "",
  "Expected timelines",
  "Queries and complaints are acknowledged and reviewed as promptly as",
  "practicable. Complex matters may take longer where documents or",
  "third-party information is required. Escalation to SEBI SCORES remains",
  "available at https://scores.sebi.gov.in/",
  "",
  "Dos and donts",
  "Do verify registration, share complete information, and treat research",
  "as process guidance. Do not expect guaranteed, market-beating, or",
  "risk-free returns. Do not treat website content as a substitute for",
  "your own due diligence.",
  "",
  "Disclaimer",
  "Investments in securities market are subject to market risks.",
  "PrimeIdea Ventures does not guarantee returns.",
];

function esc(s) {
  return s.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

let y = 800;
const ops = [];
lines.forEach((line, i) => {
  const size = i === 0 ? 16 : i === 1 ? 18 : 11;
  if (i === 1) y -= 28;
  else if (i > 0) y -= 16;
  if (y < 50) return;
  ops.push(
    `BT /F1 ${size} Tf 1 0 0 1 50 ${y} Tm (${esc(line)}) Tj ET`
  );
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
objects.forEach((o) => {
  offsets.push(Buffer.byteLength(pdf));
  pdf += o + "\n";
});
const xrefStart = Buffer.byteLength(pdf);
let xref = `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
for (let i = 1; i < offsets.length; i++) {
  xref += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
}
pdf += `${xref}trailer<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;

const out = path.join("D:", "Primeidea", "public", "docs", "investor-charter.pdf");
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, pdf);
console.log("wrote", out, Buffer.byteLength(pdf));
