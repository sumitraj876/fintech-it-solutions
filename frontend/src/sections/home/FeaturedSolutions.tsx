import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Section } from '../../components/ui/Section';
import { Container } from '../../components/ui/Container';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Reveal } from '../../components/ui/Reveal';
import { solutions } from '../../data/solutions';

export function FeaturedSolutions() {
  return (
    <Section id="solutions" className="bg-transparent">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <Reveal>
            <SectionHeading
              eyebrow="SOLUTIONS & CONCEPTS"
              title="Directions we build toward."
              description="Concept solutions and internal prototypes that illustrate how we combine AI, engineering, and data."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/solutions"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-pink hover:text-yellow transition-colors shrink-0"
            >
              View all solutions
              <ArrowUpRight size={14} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {solutions.map((solution, i) => {
            const Icon = solution.icon;
            const accentText = solution.accent === 'pink' ? 'text-pink' : 'text-yellow';

            return (
              <Reveal key={solution.id} delay={i * 0.05}>
                <Link to={`/solutions/${solution.id}`} className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-graphite/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-pink/40 block"><article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-graphite/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-pink/40">
                  
                  {/* Image Header */}
                  <div className="relative h-48 w-full overflow-hidden bg-jet">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-graphite to-transparent opacity-80" />
                    
                    <div className={`absolute bottom-4 left-6 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-jet/80 backdrop-blur-md border border-white/10 ${accentText}`}>
                      <Icon size={20} />
                    </div>
                    <span className="absolute top-4 right-4 text-[10px] uppercase tracking-[0.25em] text-offwhite/60 bg-jet/10 px-2 py-1 rounded-md">
                      {solution.kind}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-semibold text-offwhite mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-sm text-offwhite/60 leading-relaxed flex-1">
                      {solution.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {solution.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-white/[0.08] bg-white/[0.02] px-2.5 py-1 text-[11px] text-offwhite/60">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                </article></Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}