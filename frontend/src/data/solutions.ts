import type { LucideIcon } from 'lucide-react';
import { MessageSquareCode, LineChart, ScanEye, LayoutDashboard, Workflow, ShieldCheck } from 'lucide-react';

export type SolutionCategory = 'AI & ML' | 'Generative AI' | 'Full-Stack' | 'Data Analytics' | 'Automation' | 'Cloud & DevOps';

export type Solution = {
  id: string;
  title: string;
  kind: string;
  category: SolutionCategory;
  description: string;
  icon: LucideIcon;
  image: string;
  tags: string[];
  accent: 'pink' | 'yellow';
};

export const solutionCategories: SolutionCategory[] = ['AI & ML', 'Generative AI', 'Full-Stack', 'Data Analytics', 'Automation', 'Cloud & DevOps'];

export const solutions: Solution[] = [
  {
    id: 'rag-assistant',
    title: 'Internal document assistant (RAG)',
    kind: 'Concept',
    category: 'Generative AI',
    description: 'A retrieval-augmented assistant that answers employee questions from approved internal documents with citations back to the source.',
    icon: MessageSquareCode,
    image: '/images/solutions/rag-assistant.webp',
    tags: ['Generative AI', 'RAG', 'LLM'],
    accent: 'pink',
  },
  {
    id: 'sales-forecast',
    title: 'Sales forecasting dashboard',
    kind: 'Concept',
    category: 'Data Analytics',
    description: 'Time-series forecasting on historical sales data, surfaced in a KPI dashboard for planning cycles with confidence bands.',
    icon: LineChart,
    image: '/images/solutions/sales-forecast.webp',
    tags: ['Data Analytics', 'Forecasting', 'BI'],
    accent: 'yellow',
  },
  {
    id: 'vision-qc',
    title: 'Computer vision quality check',
    kind: 'Prototype',
    category: 'AI & ML',
    description: 'An image-classification pipeline that flags likely defects on a production line for human review, with an audit trail.',
    icon: ScanEye,
    image: '/images/solutions/vision-qc.webp',
    tags: ['AI & ML', 'Computer Vision'],
    accent: 'pink',
  },
  {
    id: 'saas-mvp',
    title: 'Multi-role SaaS MVP',
    kind: 'Concept',
    category: 'Full-Stack',
    description: 'A production-shaped SaaS skeleton: authentication, role-based access, billing-ready structure, and an admin dashboard.',
    icon: LayoutDashboard,
    image: '/images/solutions/saas-mvp.webp',
    tags: ['Full-Stack', 'SaaS', 'REST'],
    accent: 'yellow',
  },
  {
    id: 'workflow-automation',
    title: 'Document workflow automation',
    kind: 'Concept',
    category: 'Automation',
    description: 'An intake-to-approval pipeline that reads uploaded documents, extracts structured fields, and routes the result to the right approver.',
    icon: Workflow,
    image: '/images/solutions/workflow-automation.webp',
    tags: ['Automation', 'LLM', 'Integration'],
    accent: 'pink',
  },
  {
    id: 'cloud-hardening',
    title: 'CI/CD + observability baseline',
    kind: 'Prototype',
    category: 'Cloud & DevOps',
    description: 'A reference setup for teams shipping to the cloud: reproducible builds, deployment pipelines, uptime checks, and alerting.',
    icon: ShieldCheck,
    image: '/images/solutions/cloud-hardening.webp',
    tags: ['Cloud', 'DevOps', 'Reliability'],
    accent: 'yellow',
  },
];