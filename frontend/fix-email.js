const fs = require('fs');
const path = 'D:/FintechITSolutions/frontend/src/pages/ContactPage.tsx';
let c = fs.readFileSync(path, 'utf8');

// Replace old emails with new professional one
c = c.replace(/fintechitsolutions\.info@gmail\.com/g, 'hello@fintechitsolutions.in');
c = c.replace(/fintech\.itsolutions26@gmail\.com/g, 'hello@fintechitsolutions.in');

fs.writeFileSync(path, c, 'utf8');
console.log('OK: ContactPage email updated to hello@fintechitsolutions.in');
