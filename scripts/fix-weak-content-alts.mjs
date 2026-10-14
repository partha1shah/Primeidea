import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "components");

const replacements = [
  ['alt="1"', 'alt="Illustration supporting this section"'],
  ['alt="2"', 'alt="Illustration supporting this section"'],
  ['alt="3"', 'alt="Illustration supporting this section"'],
  ['alt="4"', 'alt="Illustration supporting this section"'],
  ['alt="Work"', 'alt="Research-led wealth management illustration"'],
  ['alt="Users"', 'alt="Investor and advisor collaboration illustration"'],
  ['alt="Landing Page"', 'alt="PrimeIdea Ventures landing page hero"'],
  ['alt="landing"', 'alt="PrimeIdea Ventures service illustration"'],
  ['alt="Careers"', 'alt="Careers at PrimeIdea Ventures in Vadodara"'],
  ['alt="Become A Partner"', 'alt="Become a PrimeIdea Ventures partner"'],
  ['alt="Without Plan"', 'alt="Financial outcomes without a structured plan"'],
  ['alt="With Plan"', 'alt="Financial outcomes with a structured plan"'],
];

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, acc);
    else if (/\.js$/.test(ent.name)) acc.push(p);
  }
  return acc;
}

let files = 0;
let count = 0;
for (const file of walk(ROOT)) {
  let text = fs.readFileSync(file, "utf8");
  const before = text;
  for (const [from, to] of replacements) {
    if (!text.includes(from)) continue;
    const parts = text.split(from);
    count += parts.length - 1;
    text = parts.join(to);
  }
  if (text !== before) {
    fs.writeFileSync(file, text);
    files += 1;
  }
}
console.log(`Updated ${files} files, ${count} content alts.`);
