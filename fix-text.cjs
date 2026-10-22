const fs = require('fs');
const path = require('path');

const dir = 'D:/FintechITSolutions/frontend/src';

function walk(d) {
  let r = [];
  fs.readdirSync(d).forEach(f => {
    f = path.join(d, f);
    if (fs.statSync(f).isDirectory()) r = r.concat(walk(f));
    else if (f.endsWith('.tsx') || f.endsWith('.ts')) r.push(f);
  });
  return r;
}

const files = walk(dir);
let count = 0;

files.forEach(f => {
  let t = fs.readFileSync(f, 'utf8');
  const o = t;
  
  // Fix the corrupted em-dash and rupee symbol
  t = t.replace(/â€”/g, '—');
  t = t.replace(/â‚¹/g, '₹');
  
  // Fix any remaining garbage blocks
  t = t.replace(/[ÃÂÆÅ¡œž¢]+/g, ''); 

  if (t !== o) {
    fs.writeFileSync(f, t, 'utf8');
    console.log(`Fixed: ${path.basename(f)}`);
    count++;
  }
});

console.log(`\nDone! Fixed ${count} files.`);
