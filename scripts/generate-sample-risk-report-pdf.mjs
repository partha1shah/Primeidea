/**
 * Generates a minimal multi-page sample risk assessment report PDF
 * (no external dependencies). Illustrative / anonymised sample only.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(
  __dirname,
  "..",
  "public",
  "docs",
  "sample-risk-assessment-report.pdf"
);

function escapePdfText(text) {
  return String(text).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function buildPageContent(lines) {
  const ops = ["BT", "/F1 11 Tf", "50 780 Td", "14 TL"];
  lines.forEach((line, index) => {
    if (index === 0) {
      ops.push(`/F2 18 Tf`, `(${escapePdfText(line)}) Tj`, `/F1 11 Tf`, "T*");
      return;
    }
    if (line.startsWith("## ")) {
      ops.push(`/F2 13 Tf`, `(${escapePdfText(line.slice(3))}) Tj`, `/F1 11 Tf`, "T*");
      return;
    }
    if (line === "") {
      ops.push("T*");
      return;
    }
    ops.push(`(${escapePdfText(line)}) Tj`, "T*");
  });
  ops.push("ET");
  return ops.join("\n");
}

const page1 = buildPageContent([
  "PrimeIdea Ventures — Sample Risk Assessment Report",
  "",
  "Document type: Illustrative sample (anonymised)",
  "Version: 1.0  |  For education and discussion only",
  "Firm: PrimeIdea Ventures · Vadodara, Gujarat",
  "Contact: research@primeidea.in",
  "",
  "## Important disclaimer",
  "This sample report shows the structure of an indicative risk",
  "assessment summary. It is not a real client report, not investment",
  "advice, and not a recommendation to buy or sell any product.",
  "Investments in the securities market are subject to market risks.",
  " ",
  "",
  "## Sample client snapshot",
  "Name: Sample Investor",
  "City: Vadodara",
  "Assessment date: 01 April 2026",
  "Questions answered: 5 of 5",
  "Assessment status: Complete",
  "",
  "## Indicative result",
  "Risk score (2 to 10): 6.67",
  "Risk profile band: Growth-oriented",
  "",
  "Interpretation (indicative): You may be able to accept meaningful",
  "fluctuations for long-term growth, subject to suitability and time",
  "horizon. Final suitability also considers goals, liquidity, tax,",
  "and the complete financial situation.",
]);

const page2 = buildPageContent([
  "Sample Risk Assessment Report — Response summary",
  "",
  "## Risk questions (sample answers)",
  "1. Age bracket: 31 to 45",
  "2. Disposable income: Regular, mostly fixed excess available",
  "3. Investment horizon: Over 5 years",
  "4. Reaction to a 20% loss: I will hold, but refrain from adding more",
  "5. Market understanding: I am a finance enthusiast and understand",
  "   concepts",
  "",
  "## Scoring method (summary)",
  "Each answered risk question uses an option score from 1 to 4.",
  "Scores are averaged with equal weight, then rescaled to a 2–10",
  "range. Unanswered questions are excluded (provisional if incomplete).",
  "",
  "Bands: Conservative (2–4) · Moderate (4–6) ·",
  "Growth-oriented (6–8) · Aggressive (8–10)",
  "",
  "## Next steps",
  "1. Treat this profile as a discussion input, not a product mandate.",
  "2. Share holdings for a research-led portfolio review.",
  "3. Align allocation with goals, liquidity, and time horizon.",
  "4. Verify SEBI registration independently before investing.",
  "",
  "## How to use the live tool",
  "Complete the interactive assessment at:",
  "https://www.primeidea.in/risk-assessment",
  "Download your JSON response or print the result screen.",
  "",
  "PrimeIdea Ventures — A Wealth Management Company",
  "Vadodara-based · Serving investors across India and eligible NRIs",
]);

function buildPdf(pageStreams) {
  const objects = [];
  const add = (body) => {
    objects.push(body);
    return objects.length;
  };

  const fontRegular = add("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
  const fontBold = add(
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>"
  );

  const contentIds = pageStreams.map((stream) =>
    add(
      `<< /Length ${Buffer.byteLength(stream, "utf8")} >>\nstream\n${stream}\nendstream`
    )
  );

  const pageIds = contentIds.map((contentId) =>
    add(
      `<< /Type /Page /Parent 0 0 R /MediaBox [0 0 595 842] /Contents ${contentId} 0 R /Resources << /Font << /F1 ${fontRegular} 0 R /F2 ${fontBold} 0 R >> >> >>`
    )
  );

  // Placeholder parent; rewrite after we know kids
  const kids = pageIds.map((id) => `${id} 0 R`).join(" ");
  const pagesId = add(`<< /Type /Pages /Kids [${kids}] /Count ${pageIds.length} >>`);

  // Fix Parent references in page objects
  for (let i = 0; i < pageIds.length; i++) {
    const id = pageIds[i];
    objects[id - 1] = objects[id - 1].replace("/Parent 0 0 R", `/Parent ${pagesId} 0 R`);
  }

  const catalogId = add(`<< /Type /Catalog /Pages ${pagesId} 0 R >>`);

  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  for (let i = 0; i < objects.length; i++) {
    offsets.push(Buffer.byteLength(pdf, "utf8"));
    pdf += `${i + 1} 0 obj\n${objects[i]}\nendobj\n`;
  }
  const xrefStart = Buffer.byteLength(pdf, "utf8");
  pdf += `xref\n0 ${objects.length + 1}\n`;
  pdf += "0000000000 65535 f \n";
  for (let i = 1; i <= objects.length; i++) {
    pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
  }
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root ${catalogId} 0 R >>\n`;
  pdf += `startxref\n${xrefStart}\n%%EOF\n`;
  return pdf;
}

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, buildPdf([page1, page2]), "utf8");
console.log("Wrote", outPath);
