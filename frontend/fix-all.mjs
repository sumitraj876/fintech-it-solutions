import fs from 'fs';

// 1. Fix ContactForm.tsx (Sending text)
let formPath = 'D:/FintechITSolutions/frontend/src/sections/shared/ContactForm.tsx';
let formContent = fs.readFileSync(formPath, 'utf8');
formContent = formContent.replace(/Sending[^<]*?</g, 'Sending...<');
fs.writeFileSync(formPath, formContent, 'utf8');
console.log('OK: Sending text fixed in ContactForm.tsx');

// 2. Fix ContactPage.tsx (Email address)
let pagePath = 'D:/FintechITSolutions/frontend/src/pages/ContactPage.tsx';
let pageContent = fs.readFileSync(pagePath, 'utf8');
pageContent = pageContent.replace(/fintechitsolutions\.info@gmail\.com/g, 'hello@fintechitsolutions.in');
pageContent = pageContent.replace(/fintech\.itsolutions26@gmail\.com/g, 'hello@fintechitsolutions.in');
fs.writeFileSync(pagePath, pageContent, 'utf8');
console.log('OK: Email updated to hello@fintechitsolutions.in in ContactPage.tsx');
