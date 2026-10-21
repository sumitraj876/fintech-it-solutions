# Engineering & Coding Rules

## 1. Text & Encoding
- **NEVER** use Windows PowerShell 5.1 to bulk-edit text files (it corrupts UTF-8).
- Always save files as UTF-8 without BOM.
- Use Node.js scripts for text replacement.

## 2. Code Quality
- All components must be typed with TypeScript.
- Business logic must be separated from UI.
- Data must be centralized in `src/data/*.ts` files, not hardcoded in components.
- No secrets in the frontend (only `VITE_` variables that are safe to be public).

## 3. Security
- Never expose `.env` files.
- Always validate API inputs using Zod on the backend.
- Use rate limiting on all public endpoints.

## 4. Git & Deployment
- Do not commit broken code. Run `npm run build` before pushing.
- Do not commit `.env` files.