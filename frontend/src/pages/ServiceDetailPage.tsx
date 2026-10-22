import { Navigate, useParams, Link } from 'react-router-dom';
import { ArrowRight, Check, ChevronRight, Activity, Calendar, Cpu } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { PageHeader } from '../components/ui/PageHeader';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';
import { FAQList } from '../sections/shared/FAQList';
import { getServiceBySlug } from '../data/services';
import { getServiceDetailBySlug } from '../data/serviceDetails';

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <Navigate to="/services" replace />;

  const service = getServiceBySlug(slug);
  const detail = getServiceDetailBySlug(slug);
  if (!service || !detail) return <Navigate to="/services" replace />;

  const Icon = service.icon;
  const accentText = service.accent === 'pink' ? 'text-pink' : 'text-yellow';
  const accentBg = service.accent === 'pink' ? 'bg-pink' : 'bg-yellow';

  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-jet pt-24 pb-4 border-b border-white/[0.05]">
        <Container>
          <div className="flex items-center gap-2 text-xs text-offwhite/50">
            <Link to="/" className="hover:text-pink transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link to="/services" className="hover:text-pink transition-colors">Services</Link>
            <ChevronRight size={12} />
            <span className="text-offwhite font-medium">{service.title}</span>
          </div>
        </Container>
      </div>

      <PageHeader eyebrow="SERVICE DETAILS" title={service.title} description={service.description}>
        <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.04] ${accentText}`}>
          <Icon size={26} />
        </div>
      </PageHeader>

      {/* Overview & Solution */}
      <Section className="bg-jet" size="sm">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Reveal>
              <SectionHeading eyebrow="THE PROBLEM" title="What we hear." description={detail.businessProblem} />
            </Reveal>
            <Reveal delay={0.1}>
              <SectionHeading eyebrow="OUR SOLUTION" title="How we solve it." description={detail.ourSolution} />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* NEW: Impact Metrics (CSS Graphs) */}
      <Section className="bg-graphite/20">
        <Container>
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <Activity className={accentText} size={24} />
              <h2 className="font-display text-2xl font-bold text-offwhite">Expected Client Impact</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {detail.impact.map((item, i) => (
                <div key={i} className="rounded-2xl border border-white/[0.08] bg-jet/60 p-6">
                  <p className="text-sm text-offwhite/60 mb-2">{item.label}</p>
                  <p className={`text-3xl font-display font-bold ${accentText} mb-4`}>{item.display}</p>
                  <div className="h-2 w-full bg-graphite rounded-full overflow-hidden">
                    <div className={`h-full ${accentBg} rounded-full`} style={{ width: `${item.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* NEW: Delivery Phases (Timeline) */}
      <Section className="bg-jet">
        <Container>
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <Calendar className={accentText} size={24} />
              <h2 className="font-display text-2xl font-bold text-offwhite">Implementation Phases</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {detail.phases.map((phase, i) => (
                <div key={i} className="relative rounded-2xl border border-white/[0.08] bg-graphite/40 p-5">
                  <span className={`inline-block px-2 py-1 rounded text-xs font-bold mb-3 ${accentBg} text-jet`}>
                    {phase.week}
                  </span>
                  <h3 className="font-display text-base font-semibold text-offwhite mb-2">{phase.title}</h3>
                  <p className="text-xs text-offwhite/60 leading-relaxed">{phase.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Deliverables & Tech */}
      <Section className="bg-graphite/20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-offwhite mb-6">What you receive</h2>
              <ul className="space-y-3">
                {detail.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-sm text-offwhite/70">
                    <span className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/[0.04] ${accentText}`}><Check size={12} /></span>
                    {d}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display text-2xl font-bold text-offwhite mb-6">Technology approach</h2>
              <ul className="space-y-2">
                {detail.techApproach.map((t) => (
                  <li key={t} className="text-sm text-offwhite/65 flex items-start gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-offwhite/40" />{t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* NEW: Latest Models / Tools */}
      <Section className="bg-jet" size="sm">
        <Container>
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <Cpu className={accentText} size={24} />
              <h2 className="font-display text-2xl font-bold text-offwhite">Latest Technologies Used</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {detail.latestModels.map((model) => (
                <span key={model} className="rounded-full border border-white/[0.10] bg-graphite/60 px-4 py-2 text-sm text-offwhite font-medium">
                  {model}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>      {/* NEW: Prerequisites */}
      <Section className="bg-graphite/20">
        <Container>
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <Check className="text-pink" size={24} />
              <h2 className="font-display text-2xl font-bold text-offwhite">What We Need From You</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(detail.prerequisites ?? []).map((req, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl border border-white/[0.08] bg-jet/60 p-4">
                  <div className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pink/20 text-pink">
                    <Check size={12} />
                  </div>
                  <p className="text-sm text-offwhite/80 leading-relaxed">{req}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* FAQ */}

      <Section className="bg-graphite/20">
        <Container size="narrow">
          <Reveal><SectionHeading eyebrow="FAQ" title="Common questions." align="center" /></Reveal>
          <div className="mt-12"><Reveal delay={0.05}><FAQList items={detail.faqs} /></Reveal></div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-jet">
        <Container>
          <Reveal>
            <div className="rounded-3xl border border-white/[0.08] bg-graphite/40 p-8 md:p-12 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-offwhite">Ready to talk about {service.shortTitle}?</h2>
              <p className="mt-4 max-w-xl mx-auto text-sm text-offwhite/65">Share the problem and constraints. We will respond with an honest recommendation.</p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button to="/contact" variant="primary" size="lg">Start a Project <ArrowRight size={18} /></Button>
                <Button to="/services" variant="secondary" size="lg">All services</Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}