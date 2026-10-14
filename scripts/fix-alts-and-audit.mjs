/**
 * One-shot helper: report weak alts + internal href targets that look broken.
 * Run: node scripts/fix-alts-and-audit.mjs
 */
import fs from "fs";
import path from "path";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname).replace(/^\/([A-Za-z]:)/, "$1"), "..");

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (["node_modules", ".next", ".git", "public"].includes(ent.name)) continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, acc);
    else if (/\.(js|jsx|mjs|ts|tsx)$/.test(ent.name)) acc.push(p);
  }
  return acc;
}

const appDirs = new Set(
  fs
    .readdirSync(path.join(ROOT, "app"), { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
);

const files = walk(path.join(ROOT, "components")).concat(walk(path.join(ROOT, "app")));
const weakAlt = [];
const hrefs = new Map();

for (const file of files) {
  const text = fs.readFileSync(file, "utf8");
  const rel = path.relative(ROOT, file).replace(/\\/g, "/");

  for (const m of text.matchAll(/alt=\{?["']([^"']*)["']\}?/g)) {
    const alt = m[1];
    if (
      !alt ||
      /^(Arrow|Read All|Arrow Right|Share|Blog|Banner|image|Image|icon|Icon|1|2|3|4|Work|Users|Commas|Ratings|Left|Right|landing|Landing Page|Single Blog|Careers|PrimeIdea|Without Plan|With Plan)$/i.test(
        alt
      )
    ) {
      const line = text.slice(0, m.index).split("\n").length;
      weakAlt.push(`${rel}:${line} => "${alt}"`);
    }
  }

  for (const m of text.matchAll(/href=["'](\/[^"'#?]*)/g)) {
    const href = m[1].replace(/\/$/, "") || "/";
    if (!hrefs.has(href)) hrefs.set(href, []);
    hrefs.get(href).push(rel);
  }
}

console.log("=== Weak alts (sample) ===");
console.log(`count=${weakAlt.length}`);
weakAlt.slice(0, 40).forEach((l) => console.log(l));

const known = new Set(["/"]);
for (const dir of appDirs) {
  if (["api", "sitemap"].includes(dir)) continue;
  known.add(`/${dir}`);
}
// dynamic comparisons + blogs ok
known.add("/comparisons");
known.add("/blogs");
known.add("/careers");

console.log("\n=== Internal hrefs without matching top-level app route ===");
const missing = [];
for (const [href, from] of [...hrefs.entries()].sort()) {
  if (href.startsWith("/http") || href.startsWith("//")) continue;
  const top = "/" + href.split("/").filter(Boolean)[0];
  if (!known.has(top) && !known.has(href)) {
    missing.push({ href, from: from.slice(0, 3) });
  }
}
missing.forEach((m) => console.log(`${m.href}  (from ${m.from.join(", ")})`));
console.log(`missing-ish count=${missing.length}`);
