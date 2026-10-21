# Project Memory & Context

## 1. History
- The project was initially built with a plain black background and basic cards.
- Upgraded to a cinematic video background and glassmorphism dropdowns.
- Upgraded text encoding to UTF-8 (no BOM) to fix Windows PowerShell corruption issues.

## 2. Important Decisions
- **No Database:** Chose stateless backend with Gmail SMTP for simplicity and security. No client data is stored.
- **Concept Demos:** Built CRM/ERP mockups directly in React rather than using screenshots to keep the site fast and interactive.
- **Image Formats:** All large PNGs were converted to WebP to ensure rapid loading.

## 3. Known Constraints
- Gmail SMTP is limited to ~500 emails/day. For higher volume, swap to SendGrid/Resend.
- The backend must be deployed to a service that allows outbound SMTP connections (Vercel does not).