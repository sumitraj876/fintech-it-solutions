const fs = require('fs');
const path = 'D:/FintechITSolutions/frontend/src/sections/shared/ContactForm.tsx';
let c = fs.readFileSync(path, 'utf8');

// Fix the corrupted Sending text
c = c.replace(/Sending[^<]*?</g, 'Sending...<');
fs.writeFileSync(path, c, 'utf8');
console.log('OK: Sending text fixed via Node.js!');
