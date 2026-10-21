export type EmploymentType = 'Full-time' | 'Part-time' | 'Project-based';

export type CareerRole = {
  id: string;
  title: string;
  team: 'AI & ML' | 'Generative AI' | 'Engineering' | 'Data' | 'Cloud';
  summary: string;
  /** What someone would work on — not a promise of specific projects. */
  focusAreas: string[];
  employmentTypes: EmploymentType[];
  /**
   * Status of the role:
   *  - "interest": expressing interest; engagement type depends on project requirements
   *  - "open": active vacancy (only set this when you are actively hiring)
   *  - "closed": not currently considered
   */
  status: 'interest' | 'open' | 'closed';
};

/**
 * RULES (kept honest by design):
 * - Do NOT display salary.
 * - Do NOT display experience requirements.
 * - Do NOT invent specific vacancies or job IDs.
 * - Engagement type depends on project requirements.
 */
export const careerRoles: CareerRole[] = [
  {
    id: 'ai-ml-engineer',
    title: 'AI/ML Engineer',
    team: 'AI & ML',
    summary:
      'Build and evaluate machine-learning models that solve real business problems, from data audit through deployment.',
    focusAreas: [
      'Model development and evaluation',
      'Data preparation and feature engineering',
      'Deployment and monitoring',
    ],
    employmentTypes: ['Full-time', 'Part-time', 'Project-based'],
    status: 'interest',
  },
  {
    id: 'genai-engineer',
    title: 'Generative AI Engineer',
    team: 'Generative AI',
    summary:
      'Design and ship generative AI applications — RAG pipelines, LLM integrations, and evaluation frameworks grounded in real data.',
    focusAreas: [
      'RAG systems and LLM integrations',
      'Prompt design and evaluation',
      'Guardrails and safety',
    ],
    employmentTypes: ['Full-time', 'Part-time', 'Project-based'],
    status: 'interest',
  },
  {
    id: 'fullstack-developer',
    title: 'Full-Stack Developer',
    team: 'Engineering',
    summary:
      'Build web applications end to end — clean React frontends, typed APIs, real databases, and deployment pipelines.',
    focusAreas: [
      'React + TypeScript frontend',
      'Node.js / Express backend',
      'Database design and migrations',
    ],
    employmentTypes: ['Full-time', 'Part-time', 'Project-based'],
    status: 'interest',
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    team: 'Data',
    summary:
      'Prepare, model, and visualize data — turning raw sources into KPI dashboards and metric definitions teams can act on.',
    focusAreas: [
      'Data preparation and cleaning',
      'Dashboard building',
      'Metric definitions and reporting',
    ],
    employmentTypes: ['Full-time', 'Part-time', 'Project-based'],
    status: 'interest',
  },
  {
    id: 'software-engineer',
    title: 'Software Engineer',
    team: 'Engineering',
    summary:
      'Ship maintainable software — MVPs, API integrations, refactors, and modernizations with tests as a first-class concern.',
    focusAreas: [
      'MVP builds and integrations',
      'Testing and maintainability',
      'Modernization of existing systems',
    ],
    employmentTypes: ['Full-time', 'Part-time', 'Project-based'],
    status: 'interest',
  },
  {
    id: 'cloud-devops-engineer',
    title: 'Cloud/DevOps Engineer',
    team: 'Cloud',
    summary:
      'Design and operate cloud infrastructure for teams that care about uptime — CI/CD, monitoring, and reliable configuration.',
    focusAreas: [
      'CI/CD pipelines',
      'Observability and alerting',
      'Infrastructure as code',
    ],
    employmentTypes: ['Full-time', 'Part-time', 'Project-based'],
    status: 'interest',
  },
];

export const careersPage = {
  eyebrow: 'CAREERS',
  title: 'Build the products that define our first decade.',
  description:
    'We are a small team working on AI, software, and data problems for real businesses. Engagement type depends on project requirements and can range from full-time to project-based. Express interest below and we will reach out when a fit opens up.',
  note: {
    title: 'A note on how we hire',
    body:
      'We do not post salary bands or fixed experience requirements here. Those are discussed directly when there is a concrete fit. We also do not ask for Aadhaar, PAN, or other sensitive information during initial interest. If any communication from us asks for those up front, treat it as suspicious.',
  },
};