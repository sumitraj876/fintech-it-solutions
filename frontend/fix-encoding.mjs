import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dir = path.join(__dirname, 'src');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(dir);
let fixedCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const original = content;

  // Replace all known corrupted UTF-8 sequences
  content = content.replace(/ÃfÂ¢Ã‚Â€Ã‚Â”/g, '—');
  content = content.replace(/ÃfÂ¢Ã‚Â€Ã‚Â“/g, '—');
  content = content.replace(/Ã¢â‚¬â€/g, '—');
  content = content.replace(/â€“/g, '—');
  content = content.replace(/ÃfÂ¢Ã‚Â€Ã‚Â™/g, "'");
  content = content.replace(/Ã¢â‚¬â„¢/g, "'");
  content = content.replace(/â€™/g, "'");
  content = content.replace(/Ã‚Â€Ã‚Â”/g, '—');
  content = content.replace(/Ã‚Â€Ã‚Â“/g, '—');

  // Additional fallback replacements for weird mojibake
  content = content.replace(/Ã‚/g, '');
  content = content.replace(/Â/g, '');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Fixed: ${path.basename(file)}`);
    fixedCount++;
  }
});

console.log(`\nDone! Fixed ${fixedCount} files.`);
