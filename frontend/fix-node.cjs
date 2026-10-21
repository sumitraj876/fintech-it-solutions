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
  let o = t;

  // Define the bad bytes and their correct replacements using hex codes
  t = t.replace(/\u00C3\u00A2\u00E2\u201A\u00AC\u00E2\u20AC\u009D/g, '\u2014'); // em-dash
  t = t.replace(/\u00C3\u00A2\u00E2\u201A\u00AC\u00E2\u20AC\u0099/g, "'"); // apostrophe
  t = t.replace(/\u00C3\u00A2\u00E2\u201A\u00AC\u00C2\u00A0\u00E2\u201A\u00AC\u00E2\u20AC\u009D/g, '\u2192'); // arrow
  t = t.replace(/[\u00C3\u00C2\u00A2\u00E2\u20AC\u201D\u201C\u2122\u201E\u2020\u0080\u0099\u00A0\u0083]+/g, ' '); // sweep

  if (t !== o) {
    fs.writeFileSync(f, t, 'utf8');
    console.log('Fixed: ' + path.basename(f));
    count++;
  }
});

console.log('DONE! Fixed ' + count + ' files.');