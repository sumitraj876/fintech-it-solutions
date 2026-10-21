export type Principle = { title: string; description: string; };
export type TimelineEntry = { year: string; title: string; description: string; };

export const aboutPage = {
  hero: {
    eyebrow: 'ABOUT US',
    title: 'A new company, built for what comes next.',
    description: 'FINTECH IT SOLUTIONS was founded in 2024 by Sumit Kumar to help startups, small and medium businesses, and enterprise teams build with AI, software engineering, and data — without the theatre.',
  },
  mission: {
    title: 'Our mission',
    body: 'To help businesses use AI, software, and data to do meaningful work — reliably, transparently, and with respect for the people using what we build. We would rather ship a smaller thing that works than a larger thing that does not.',
  },
  vision: {
    title: 'Our vision',
    body: 'A future where the companies that win are the ones that treat intelligence — machine and human — as infrastructure: quiet, dependable, and in service of real problems.',
  },
  philosophy: {
    title: 'Engineering philosophy',
    body: 'We treat working software as the only honest measure of progress. That means shipping small, deploying often, writing tests where they matter, and keeping architecture as simple as the problem allows. When a decision is important, we write it down so the next person — including ourselves in six months — can understand why.',
  },
  principles: [
    { title: 'Say what we can and cannot do', description: 'We would rather lose an engagement than commit to something we cannot deliver. Honest scoping from the first conversation.' },
    { title: 'Prefer boring, working software', description: 'New tools are tempting. We reach for proven ones unless the problem genuinely needs something else.' },
    { title: 'Guard user data', description: 'We do not collect what we do not need. We do not train models on client data without explicit agreement.' },
    { title: 'Write things down', description: "Decisions, trade-offs, and known limitations live in the repository, not in someone's head." },
    { title: 'Design for maintainers', description: 'The person reading the code in two years is a first-class user of every design decision.' },
    { title: 'Accessibility is not optional', description: 'Keyboard navigation, contrast, semantics, and reduced-motion support are part of shipping, not polish.' },
  ] as Principle[],
  timeline: [
    { year: '2024', title: 'Founded by Sumit Kumar', description: 'FINTECH IT SOLUTIONS was founded to bring AI engineering, software development, and data work under one roof for teams that need real outcomes.' },
    { year: 'Today', title: 'Serving clients across India', description: 'We work with startups, SMBs, and enterprise clients on AI/ML, generative AI, full-stack engineering, data analytics, and cloud & DevOps engagements.' },
    { year: 'Next', title: 'Building in the open', description: 'We are expanding our concept portfolio, writing publicly about what we learn, and taking on new engagements aligned with our principles.' },
  ] as TimelineEntry[],
};