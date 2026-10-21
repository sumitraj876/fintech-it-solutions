const fs = require('fs');
const path = require('path');

const dir = 'D:/FintechITSolutions/frontend/src';

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

  // Replace the mojibake sequences with the proper characters
  // This regex targets the broken sequences we saw
  content = content.replace(/ÃfÂ¢Ã‚Â€Ã‚Â”/g, '—');
  content = content.replace(/ÃfÂ¢Ã‚Â€Ã‚Â“/g, '—');
  content = content.replace(/Ã¢â‚¬â€/g, '—');
  content = content.replace(/â€“/g, '—');
  content = content.replace(/ÃfÂ¢Ã‚Â€Ã‚Â™/g, "'");
  content = content.replace(/Ã¢â‚¬â„¢/g, "'");
  content = content.replace(/â€™/g, "'");
  
  // Handle the specific sequence in your screenshot
  content = content.replace(/Ã‚Â€Ã‚Â”/g, '—');
  content = content.replace(/Ã‚Â€Ã‚Â“/g, '—');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Fixed: ${file}`);
    fixedCount++;
  }
});

console.log(`\nDone! Fixed ${fixedCount} files.`);
