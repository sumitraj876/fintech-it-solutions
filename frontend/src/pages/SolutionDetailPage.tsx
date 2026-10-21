import { Navigate, useParams, Link } from 'react-router-dom';
import { ArrowRight, Check, ChevronRight, Info } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { PageHeader } from '../components/ui/PageHeader';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';
import { solutions } from '../data/solutions';
import { getSolutionDetailById } from '../data/solutionDetails';

export default function SolutionDetailPage() {
  const { id } = useParams<{ id: string }>();
  if (!id) return <Navigate to="/solutions" replace />;

  const solution = solutions.find((s) => s.id === id);
  const detail = getSolutionDetailById(id);
  if (!solution || !detail) return <Navigate to="/solutions" replace />;

  const Icon = solution.icon;
  const accentText = solution.accent === 'pink' ? 'text-pink' : 'text-yellow';

  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-jet pt-24 pb-4 border-b border-white/[0.05]">
        <Container>
          <div className="flex items-center gap-2 text-xs text-offwhite/50">
            <Link to="/" className="hover:text-pink transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link to="/solutions" className="hover:text-pink transition-colors">Solutions</Link>
            <ChevronRight size={12} />
            <span className="text-offwhite font-medium">{solution.title}</span>
          </div>
        </Container>
      </div>

      <PageHeader
        eyebrow="CONCEPT DEMO"
        title={solution.title}
        description={solution.description}
      >
        <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.04] ${accentText}`}>
          <Icon size={26} />
        </div>
      </PageHeader>

      <Section className="bg-jet" size="sm">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="THE BUSINESS PROBLEM" title="Why this matters." description={detail.businessProblem} />
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-graphite/20" size="sm">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="HOW IT WORKS" title="The core mechanics." description={detail.howItWorks} />
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-jet">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
            <Reveal>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-offwhite mb-6">System Architecture</h2>
              <ul className="space-y-3">
                {detail.architecture.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-sm md:text-base text-offwhite/70">
                    <span className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/[0.04] ${accentText}`}>
                      <Check size={12} />
                    </span>
                    {a}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-offwhite mb-6">Tech Stack</h2>
              <ul className="space-y-2 mb-10">
                {detail.components.map((c) => (
                  <li key={c} className="text-sm md:text-base text-offwhite/65 leading-relaxed flex items-start gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-offwhite/40" />
                    {c}
                  </li>
                ))}
              </ul>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-offwhite mb-6">Limitations</h2>
              <div className="p-4 rounded-xl border border-yellow/20 bg-yellow/5 flex items-start gap-3">
                <Info size={18} className="text-yellow shrink-0 mt-0.5" />
                <p className="text-sm text-offwhite/70 leading-relaxed">{detail.limitations}</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="bg-graphite/20">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="IMPLEMENTATION PLAN" title="How we would build it." />
          </Reveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {detail.implementationPlan.map((step, i) => (
              <Reveal key={step} delay={i * 0.04}>
                <div className="rounded-2xl border border-white/[0.08] bg-jet/60 p-5">
                  <p className={`font-display text-2xl font-bold mb-2 ${accentText}`}>0{i + 1}</p>
                  <p className="text-sm text-offwhite/70 leading-relaxed">{step}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-jet">
        <Container>
          <Reveal>
            <div className="rounded-3xl border border-white/[0.08] bg-graphite/40 p-8 md:p-12 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-offwhite">Want this for your business?</h2>
              <p className="mt-4 max-w-xl mx-auto text-sm md:text-base text-offwhite/65">Let's discuss the scope and constraints. We will build a tailored proposal.</p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button to="/contact" variant="primary" size="lg">Start a Project <ArrowRight size={18} /></Button>
                <Button to="/solutions" variant="secondary" size="lg">All solutions</Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}