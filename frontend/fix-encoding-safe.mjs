import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, 'src');

const dryRun = !process.argv.includes('--apply');

// These are the exact corrupted byte sequences and their correct UTF-8 replacements
const replacements = [
  // Arrows
  { bad: /â†’/g, good: '→' },
  { bad: /Ã¢â€ â€™/g, good: '→' },
  // Em-dashes
  { bad: /â€“/g, good: '—' },
  { bad: /â€”/g, good: '—' },
  { bad: /Ã¢â‚¬â€/g, good: '—' },
  { bad: /Ã¢â€šÂ¬/g, good: '—' },
  // Apostrophes
  { bad: /â€™/g, good: "'" },
  { bad: /Ã¢â‚¬â„¢/g, good: "'" },
  // Quotes
  { bad: /â€œ/g, good: '"' },
  { bad: /â€/g, good: '"' },
  // The weird block from the last script that broke everything
  { bad: /ÃÆ’Ã‚¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â/g, good: ' ' },
  { bad: /ÃÆ’Ã‚¢ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢/g, good: "'" }
];

function walk(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.html') || file.endsWith('.css')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(rootDir);
let fixedCount = 0;

console.log(`Scanning ${files.length} files... Mode: ${dryRun ? 'DRY RUN' : 'APPLYING FIXES'}`);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  replacements.forEach(rule => {
    content = content.replace(rule.bad, rule.good);
  });

  if (content !== original) {
    if (dryRun) {
      console.log(`[WOULD FIX] ${path.basename(file)}`);
      fixedCount++;
    } else {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`[FIXED] ${path.basename(file)}`);
      fixedCount++;
    }
  }
});

console.log(`\nDone. ${fixedCount} files ${dryRun ? 'need fixing' : 'were fixed'}.`);