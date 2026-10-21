import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { PageHeader } from '../components/ui/PageHeader';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';
import { solutions, solutionCategories, type SolutionCategory } from '../data/solutions';

type Filter = 'All' | SolutionCategory;

export default function SolutionsPage() {
  const [filter, setFilter] = useState<Filter>('All');
  const visible = useMemo(() => (filter === 'All' ? solutions : solutions.filter((s) => s.category === filter)), [filter]);
  const filters: Filter[] = ['All', ...solutionCategories];

  return (
    <>
      <PageHeader eyebrow="SOLUTIONS & CONCEPTS" title="Concept work that shows how we think." description="Concept solutions and internal prototypes that illustrate how we combine AI, engineering, and data." />
      <Section className="bg-transparent">
        <Container>
          <Reveal>
            <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter by category">
              {filters.map((f) => {
                const active = filter === f;
                return (
                  <button key={f} type="button" onClick={() => setFilter(f)} aria-pressed={active} className={['rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition-colors', active ? 'bg-pink text-jet' : 'border border-white/[0.10] text-offwhite/70 hover:border-pink/50 hover:text-offwhite'].join(' ')}>
                    {f}
                  </button>
                );
              })}
            </div>
          </Reveal>

          {visible.length === 0 ? (
            <div className="rounded-2xl border border-white/[0.08] bg-graphite/30 p-10 text-center text-offwhite/60">No concept solutions in this category yet.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {visible.map((solution, i) => {
                const Icon = solution.icon;
                const accentText = solution.accent === 'pink' ? 'text-pink' : 'text-yellow';
                // Force the path to look for whatever is in the folder
                const imgUrl = solution.image; 
                
                return (
                  <Reveal key={solution.id} delay={i * 0.04}>
                    <Link to={`/solutions/${solution.id}`} className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-graphite/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-pink/40 block"><article className={['group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-graphite/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1', solution.accent === 'pink' ? 'hover:border-pink/40' : 'hover:border-yellow/40'].join(' ')}>
                      <div className="relative h-48 w-full overflow-hidden bg-jet">
                        <img 
                          src={imgUrl} 
                          alt={solution.title} 
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                          loading="lazy" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-graphite to-transparent opacity-80" />
                        <div className={["absolute bottom-4 left-6 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-jet/80 backdrop-blur-md border border-white/10", accentText].join(' ')}>
                          <Icon size={20} />
                        </div>
                        <span className="absolute top-4 right-4 text-[10px] uppercase tracking-[0.25em] text-offwhite/60 bg-jet/10 px-2 py-1 rounded-md">{solution.kind}</span>
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <h3 className="font-display text-lg font-semibold text-offwhite mb-2">{solution.title}</h3>
                        <p className="text-sm text-offwhite/60 leading-relaxed flex-1">{solution.description}</p>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {solution.tags.map((tag) => (
                            <span key={tag} className="rounded-full border border-white/[0.08] bg-white/[0.02] px-2.5 py-1 text-[11px] text-offwhite/60">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </article></Link>
                  </Reveal>
                );
              })}
            </div>
          )}
        </Container>
      </Section>
      <Section className="bg-transparent">
        <Container>
          <Reveal>
            <div className="rounded-3xl border border-white/[0.08] bg-jet/10 p-8 md:p-12 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-offwhite">Have a problem in mind?</h2>
              <p className="mt-4 max-w-xl mx-auto text-sm md:text-base text-offwhite/65 leading-relaxed">Tell us about it. We will respond with an honest assessment of what a first version could look like.</p>
              <div className="mt-8"><Button to="/contact" size="lg">Start a Project</Button></div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}