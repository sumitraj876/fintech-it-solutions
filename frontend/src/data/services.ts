import type { LucideIcon } from 'lucide-react';
import {
  BrainCircuit, Sparkles, Code2, BarChart3, Cpu, Cloud,
  Users, Building2, UserCheck, Landmark, Bot, PieChart, Network
} from 'lucide-react';

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  image: string;
  highlights: string[];
  accent: 'pink' | 'yellow';
};

export const services: Service[] = [
  // --- EXISTING 6 ---
  {
    slug: 'ai-ml',
    title: 'Artificial Intelligence & Machine Learning',
    shortTitle: 'AI & ML',
    tagline: 'Classification, prediction, computer vision, and forecasting models built for real business problems.',
    description: 'We design and train ML systems that turn your data into reliable predictions, recommendations, and automated decisions.',
    icon: BrainCircuit,
    image: '/images/services/ai-ml.webp',
    highlights: ['Classification & prediction', 'Recommendation systems', 'Computer vision prototypes', 'Forecasting & evaluation'],
    accent: 'pink',
  },
  {
    slug: 'generative-ai',
    title: 'Generative AI & Large Language Models',
    shortTitle: 'Generative AI',
    tagline: 'Business chatbots, RAG assistants, and LLM integrations that work on your documents.',
    description: 'We build practical generative AI products  —  from internal document assistants to customer-facing chatbots.',
    icon: Sparkles,
    image: '/images/services/generative-ai.webp',
    highlights: ['Business chatbots', 'Retrieval-Augmented Generation', 'Document assistants', 'Workflow automation'],
    accent: 'yellow',
  },
  {
    slug: 'full-stack',
    title: 'Full-Stack Web Development',
    shortTitle: 'Full-Stack',
    tagline: 'Responsive business sites, SaaS MVPs, dashboards, and REST APIs  —  engineered end to end.',
    description: 'We design and ship production-grade web applications with clean APIs and sensible data models.',
    icon: Code2,
    image: '/images/services/full-stack.webp',
    highlights: ['Responsive websites', 'SaaS MVPs', 'Admin dashboards', 'REST APIs'],
    accent: 'pink',
  },
  {
    slug: 'data-analytics',
    title: 'Data Analytics & Business Intelligence',
    shortTitle: 'Data Analytics',
    tagline: 'KPI dashboards, business reporting, and trend analysis that turn raw data into decisions.',
    description: 'We prepare, clean, and visualize your data so stakeholders can see what is happening.',
    icon: BarChart3,
    image: '/images/services/data-analytics.webp',
    highlights: ['Data preparation', 'KPI dashboards', 'Business reporting', 'Trend analysis'],
    accent: 'yellow',
  },
  {
    slug: 'software-engineering',
    title: 'Software Engineering',
    shortTitle: 'Software Engineering',
    tagline: 'MVP development, API integrations, and modernization with testing built in.',
    description: 'We help you ship and evolve real software with tests, docs, and maintainability as first-class goals.',
    icon: Cpu,
    image: '/images/services/software-engineering.webp',
    highlights: ['MVP development', 'API integrations', 'Application modernization', 'Testing'],
    accent: 'pink',
  },
  {
    slug: 'cloud-devops',
    title: 'Cloud Engineering & DevOps',
    shortTitle: 'Cloud & DevOps',
    tagline: 'Deployment pipelines, CI/CD, monitoring, and cloud configuration that keep systems reliable.',
    description: 'We design and operate cloud infrastructure for teams that care about uptime.',
    icon: Cloud,
    image: '/images/services/cloud-devops.webp',
    highlights: ['Deployment pipelines', 'CI/CD', 'Monitoring', 'Cloud configuration'],
    accent: 'yellow',
  },

  // --- NEW 7 ENTERPRISE SERVICES ---
  {
    slug: 'crm-development',
    title: 'CRM Development',
    shortTitle: 'CRM Solutions',
    tagline: 'Custom customer relationship management systems to track leads and sales pipelines.',
    description: 'We build tailored CRM platforms that fit your exact sales workflow, with pipelines, contact management, and reporting.',
    icon: Users,
    image: '/images/services/crm-development.webp',
    highlights: ['Lead management', 'Sales pipeline dashboards', 'Contact management', 'Third-party CRM integrations'],
    accent: 'pink',
  },
  {
    slug: 'erp-business',
    title: 'ERP & Business Management',
    shortTitle: 'ERP Systems',
    tagline: 'Inventory, procurement, and operational workflows unified in one custom system.',
    description: 'We build ERP modules that connect your inventory, finance, and operations into a single source of truth.',
    icon: Building2,
    image: '/images/services/erp-business.webp',
    highlights: ['Inventory & stock', 'Procurement workflows', 'Order management', 'Custom ERP modules'],
    accent: 'yellow',
  },
  {
    slug: 'hrms-workforce',
    title: 'HRMS & Workforce Software',
    shortTitle: 'HRMS',
    tagline: 'Employee portals, attendance, and recruitment tools built for modern teams.',
    description: 'We build HR software that automates leave, attendance, and recruitment workflows with self-service portals.',
    icon: UserCheck,
    image: '/images/services/hrms-workforce.webp',
    highlights: ['Employee self-service', 'Leave & attendance', 'Recruitment workflows', 'Payroll integrations'],
    accent: 'pink',
  },
  {
    slug: 'fintech-apps',
    title: 'FinTech Applications',
    shortTitle: 'FinTech',
    tagline: 'Financial dashboards, reconciliation, and secure payment workflow automation.',
    description: 'We build secure internal financial applications, transaction reconciliations, and payment gateway integrations. We are not a regulated financial institution.',
    icon: Landmark,
    image: '/images/services/fintech-apps.webp',
    highlights: ['Financial reporting', 'Reconciliation tools', 'Payment gateways', 'Secure automation'],
    accent: 'yellow',
  },
  {
    slug: 'enterprise-ai',
    title: 'Enterprise AI & Knowledge Assistants',
    shortTitle: 'Enterprise AI',
    tagline: 'Internal knowledge assistants, RAG search, and LLM applications for your business.',
    description: 'We integrate LLMs directly into your internal tools to search, extract, and classify enterprise documents.',
    icon: Bot,
    image: '/images/services/enterprise-ai.webp',
    highlights: ['Internal knowledge assistants', 'RAG document search', 'Document extraction', 'AI workflows'],
    accent: 'pink',
  },
  {
    slug: 'business-intelligence',
    title: 'Business Intelligence',
    shortTitle: 'BI & Reporting',
    tagline: 'Executive analytics, reporting automation, and data pipelines.',
    description: 'We build the data pipelines and dashboards that give executives real-time visibility into operations.',
    icon: PieChart,
    image: '/images/services/business-intelligence.webp',
    highlights: ['KPI dashboards', 'Reporting automation', 'Data pipelines', 'Executive analytics'],
    accent: 'yellow',
  },
  {
    slug: 'api-integration',
    title: 'API & System Integration',
    shortTitle: 'API Integration',
    tagline: 'REST APIs, webhooks, and data synchronization between disconnected systems.',
    description: 'We connect your CRM, ERP, and third-party tools so data flows seamlessly between them.',
    icon: Network,
    image: '/images/services/api-integration.webp',
    highlights: ['REST APIs', 'Webhook processing', 'Data synchronization', 'Third-party integrations'],
    accent: 'pink',
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}