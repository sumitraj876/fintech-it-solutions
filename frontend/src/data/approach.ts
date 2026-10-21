export type ApproachStep = {
  step: string;
  title: string;
  description: string;
};

export const approach: ApproachStep[] = [
  {
    step: '01',
    title: 'Discover',
    description:
      'We clarify the business problem, constraints, users, and success criteria before proposing any solution.',
  },
  {
    step: '02',
    title: 'Design',
    description:
      'We produce a concrete plan: architecture, data approach, UX flows, and the smallest meaningful first version.',
  },
  {
    step: '03',
    title: 'Build',
    description:
      'We ship working software in increments — tested, documented, and demoed as it grows.',
  },
  {
    step: '04',
    title: 'Deploy',
    description:
      'We deploy to a real environment with pipelines, monitoring, and rollback paths in place from day one.',
  },
  {
    step: '05',
    title: 'Improve',
    description:
      'We measure what is working, learn from real usage, and iterate on the highest-leverage next change.',
  },
];