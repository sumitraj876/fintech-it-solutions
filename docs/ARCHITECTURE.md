# Technical Architecture

## 1. High-Level Architecture
The project is a **decoupled monorepo** consisting of a frontend Single Page Application (SPA) and a backend REST API.

- **Frontend:** React + TypeScript + Vite + Tailwind CSS.
- **Backend:** Node.js + Express + TypeScript.
- **Email Service:** Nodemailer + Gmail SMTP.

## 2. Frontend Architecture
- **State Management:** React Context + local component state (no Redux needed).
- **Routing:** React Router DOM (v6) with a centralized `router.tsx`.
- **Animations:** Framer Motion (respects `prefers-reduced-motion`).
- **Styling:** Tailwind CSS + custom design tokens in `index.css`.
- **Data Layer:** Centralized TypeScript files in `src/data/` (services, solutions, careers, etc.).

## 3. Backend Architecture
- **Pattern:** Layered architecture (Routes -> Controllers -> Services).
- **Validation:** Zod schemas for request validation.
- **Security:** Helmet, CORS (locked to frontend domain), Rate Limiting.
- **Error Handling:** Centralized error middleware.

## 4. Deployment Strategy
- **Frontend:** Vercel (SPA rewrite rules configured in `vercel.json`).
- **Backend:** Render / Railway (Node.js Web Service).
- **Database:** None currently (stateless backend), but PostgreSQL-ready if CRM features are added.