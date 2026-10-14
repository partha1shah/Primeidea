/**
 * Applies bulk decorative-alt fixes across components.
 * Run: node scripts/apply-perf-alt-fixes.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (["node_modules", ".next", ".git"].includes(ent.name)) continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, acc);
    else if (/\.(js|jsx)$/.test(ent.name)) acc.push(p);
  }
  return acc;
}

const DECORATIVE = new Set([
  "Arrow",
  "Arrow Right",
  "Read All",
  "Share",
  "Commas",
  "Ratings",
  "Left",
  "Right",
]);

let filesChanged = 0;
let replacements = 0;

for (const file of walk(path.join(ROOT, "components"))) {
  let text = fs.readFileSync(file, "utf8");
  const before = text;

  text = text.replace(
    /alt=(["'])(Arrow|Arrow Right|Read All|Share|Commas|Ratings|Left|Right)\1/g,
    (match, q, label) => {
      if (!DECORATIVE.has(label)) return match;
      replacements += 1;
      return `alt="" aria-hidden="true"`;
    }
  );

  // Avoid double aria-hidden if already present nearby — collapse duplicates on same tag roughly
  text = text.replace(/aria-hidden="true"\s+aria-hidden="true"/g, `aria-hidden="true"`);

  if (text !== before) {
    fs.writeFileSync(file, text);
    filesChanged += 1;
  }
}

console.log(`Updated ${filesChanged} files, ${replacements} decorative alts.`);
