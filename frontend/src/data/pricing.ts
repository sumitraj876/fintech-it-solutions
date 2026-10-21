export type PricingItem = {
  id: string;
  title: string;
  /** Replacing fixed amounts with a confidential label */
  priceLabel: string;
  description: string;
  highlights: string[];
  accent: 'pink' | 'yellow';
};

/**
 * Pricing tiers — amounts are intentionally withheld.
 * Cost is discussed privately based on project scope.
 */
export const pricing: PricingItem[] = [
  {
    id: 'business-website',
    title: 'Business website',
    priceLabel: 'Available upon request',
    description:
      'A responsive marketing site with the essential pages, contact integration, and deployable infrastructure.',
    highlights: [
      'Up to 5 core pages',
      'Responsive design',
      'Contact form integration',
      'Basic SEO setup',
    ],
    accent: 'pink',
  },
  {
    id: 'fullstack-mvp',
    title: 'Full-stack MVP',
    priceLabel: 'Available upon request',
    description:
      'A production-shaped MVP with authentication, typed APIs, a real database, and a deployment pipeline.',
    highlights: [
      'Frontend + backend',
      'Authentication',
      'Database design',
      'CI/CD pipeline',
    ],
    accent: 'yellow',
  },
  {
    id: 'analytics-dashboard',
    title: 'Data analytics dashboard',
    priceLabel: 'Available upon request',
    description:
      'A role-focused KPI dashboard built on your cleaned and modeled data, with metric definitions documented.',
    highlights: [
      'Data preparation',
      'KPI dashboard',
      'Metric definitions',
      'Scheduled refresh',
    ],
    accent: 'pink',
  },
  {
    id: 'ai-chatbot',
    title: 'AI chatbot prototype',
    priceLabel: 'Available upon request',
    description:
      'A RAG-based chatbot grounded in your approved documents, with guardrails and evaluation on real queries.',
    highlights: [
      'Document ingestion',
      'RAG pipeline',
      'Guardrails & evaluation',
      'Chat UI',
    ],
    accent: 'yellow',
  },
  {
    id: 'ml-poc',
    title: 'ML proof of concept',
    priceLabel: 'Available upon request',
    description:
      'A targeted ML model or forecasting proof of concept with an honest evaluation report and deployment recommendation.',
    highlights: [
      'Data audit',
      'Model + evaluation',
      'Proof-of-concept report',
      'Deployment plan',
    ],
    accent: 'pink',
  },
];

export const pricingDisclaimer =
  'Because every project has unique scope, integrations, and constraints, we do not publish fixed prices. Contact us to discuss your requirements and receive a tailored proposal.';