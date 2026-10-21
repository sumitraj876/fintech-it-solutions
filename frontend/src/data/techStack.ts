export type TechGroup = {
  category: string;
  items: string[];
};

export const techStack: TechGroup[] = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'TypeScript', 'Zod', 'REST'] },
  { category: 'Data & AI', items: ['Python', 'PyTorch', 'scikit-learn', 'Pandas', 'LangChain'] },
  { category: 'Data Storage', items: ['PostgreSQL', 'Redis', 'Vector DBs', 'Object Storage'] },
  { category: 'Cloud & DevOps', items: ['Docker', 'GitHub Actions', 'Vercel', 'AWS', 'Fly.io'] },
  { category: 'Tooling', items: ['Git', 'ESLint', 'Prettier', 'Vitest', 'Playwright'] },
];