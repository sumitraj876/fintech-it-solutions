/**
 * Central site configuration.
 * Edit this file to update company facts across the whole site.
 */

export const site = {
  company: {
    name: 'FINTECH IT SOLUTIONS',
    shortName: 'Fintech ITSolutions',
    tagline: "We engineer what's next.",
    description:
      'AI, software engineering, and digital transformation for startups and enterprises.',
  },

  founder: {
    name: 'Sumit Kumar',
    role: 'Founder & CEO',
  },

  founded: 2024,

  // --- PLACEHOLDERS: replace when domain + mailbox are ready ---
  domain: 'YOUR-DOMAIN.com',
  email: 'fintech.itsolutions26@gmail.com',

  // Set to null until verified.
  socials: {
    instagram: 'https://instagram.com/your-handle', // <-- REPLACE WITH REAL LINK LATER
  },
} as const;

export type NavItem = {
  label: string;
  to: string;
};

export const primaryNav: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Locations', to: '/locations' },
  { label: 'Leadership', to: '/leadership' },
  { label: 'Careers', to: '/careers' },
  { label: 'Blog', to: '/blog' },
];

export const footerNav: NavItem[] = [
  { label: 'Contact', to: '/contact' },
];

/**
 * Home page hero content.
 * Edit text here without touching any component.
 */
export const hero = {
  eyebrow: 'FINTECH IT SOLUTIONS Â· EST. 2024',
  headlineTop: 'WE ENGINEER',
  headlineBottom: "WHAT'S NEXT.",
  supporting:
    'AI-powered solutions, intelligent software, and data-driven experiences built around your business goals.',
  primaryCta: { label: 'Start a Project', to: '/contact' },
  secondaryCta: { label: 'Explore Our Services', to: '/services' },
  scrollHint: 'Scroll to explore',
} as const;