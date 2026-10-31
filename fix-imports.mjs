import fs from 'fs';

const routerPath = 'D:/FintechITSolutions/frontend/src/router.tsx';
let content = fs.readFileSync(routerPath, 'utf8');

// Remove the three unused import lines (with any line ending)
content = content.replace(/import PrivacyPage from '\.\/pages\/PrivacyPage';\r?\n/g, '');
content = content.replace(/import TermsPage from '\.\/pages\/TermsPage';\r?\n/g, '');
content = content.replace(/import LicensePage from '\.\/pages\/LicensePage';\r?\n/g, '');

fs.writeFileSync(routerPath, content, 'utf8');
console.log('OK: Unused imports removed from router.tsx');

// Verify
const verify = fs.readFileSync(routerPath, 'utf8');
if (verify.includes('PrivacyPage') || verify.includes('TermsPage') || verify.includes('LicensePage')) {
  console.log('WARNING: Some imports may still exist');
} else {
  console.log('VERIFIED: All three unused imports removed');
}
