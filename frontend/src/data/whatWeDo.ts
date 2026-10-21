export type Principle = {
  label: string;
  description: string;
};

export const whatWeDo = {
  eyebrow: 'WHAT WE DO',
  title: 'Engineering intelligence into the products you ship.',
  description:
    'FINTECH IT SOLUTIONS helps startups, SMBs, and enterprise teams design, build, and operate AI-powered software. We work end to end — from a first prototype to a system that runs in production with monitoring, tests, and documentation.',
  principles: [
    {
      label: 'Outcome first',
      description: 'We start from the business problem — not the technology. Every feature has to earn its place.',
    },
    {
      label: 'Data you can trust',
      description: 'AI and analytics only work when the data underneath them is prepared, validated, and monitored.',
    },
    {
      label: 'Built to ship',
      description: 'We deliver working software with tests and documentation — not slideware or half-finished prototypes.',
    },
  ] as Principle[],
};