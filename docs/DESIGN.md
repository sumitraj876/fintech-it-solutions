# Design System & UI/UX Guidelines

## 1. Brand Identity
- **Theme:** Premium, futuristic enterprise technology.
- **Vibe:** Cyberpunk-inspired but professional (like Vercel, Linear, Apple).

## 2. Color Palette (Design Tokens)
- **Jet Black:** `#08080B` (Primary background)
- **Graphite:** `#17171F` (Card backgrounds, panels)
- **Hot Pink:** `#FF168A` (Primary accent, CTAs)
- **Electric Yellow:** `#FFE600` (Secondary accent, highlights)
- **Off-white:** `#F4F4F5` (Primary text)

## 3. Typography
- **Display/Headings:** Space Grotesk (Geometric, tech-focused)
- **Body/UI:** Inter (Highly legible, clean)

## 4. UI Components
- **Cards:** Glassmorphism (`bg-graphite/40 backdrop-blur`), 3D hover tilt, neon glow.
- **Buttons:** Rounded-full, pink background, yellow hover state.
- **Navigation:** Premium mega-dropdown menus on desktop, sliding drawer on mobile.

## 5. Motion & Animation
- **Scroll Reveals:** Elements fade and slide up on scroll using Framer Motion.
- **Ambient Background:** Slowly drifting, blurred pink/yellow orbs behind content.
- **Reduced Motion:** All animations disabled if `prefers-reduced-motion` is on.