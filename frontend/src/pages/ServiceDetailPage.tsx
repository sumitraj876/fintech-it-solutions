import { Navigate, useParams, Link } from 'react-router-dom';
import { ArrowRight, Check, ChevronRight } from 'lucide-react';
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

      <PageHeader
        eyebrow="SERVICE DETAILS"
        title={service.title}
        description={service.description}
      >
        <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.04] ${accentText}`}>
          <Icon size={26} />
        </div>
      </PageHeader>

      {/* Overview */}
      <Section className="bg-jet" size="sm">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="THE BUSINESS PROBLEM" title="What we hear from teams." description={detail.businessProblem} />
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-graphite/20" size="sm">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="OUR SOLUTION" title="How we approach it." description={detail.ourSolution} />
          </Reveal>
        </Container>
      </Section>

      {/* Deliverables & Tech */}
      <Section className="bg-jet">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
            <Reveal>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-offwhite mb-6">What you receive</h2>
              <ul className="space-y-3">
                {detail.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-sm md:text-base text-offwhite/70">
                    <span className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/[0.04] ${accentText}`}>
                      <Check size={12} />
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-offwhite mb-6">Technology approach</h2>
              <ul className="space-y-2">
                {detail.techApproach.map((t) => (
                  <li key={t} className="text-sm md:text-base text-offwhite/65 leading-relaxed flex items-start gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-offwhite/40" />
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Use Cases & Process */}
      <Section className="bg-graphite/20">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="USE CASES" title="What this looks like in practice." description="Illustrative examples — not claims of past client work." />
          </Reveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {detail.exampleUseCases.map((u, i) => (
              <Reveal key={u} delay={i * 0.04}>
                <div className="rounded-2xl border border-white/[0.08] bg-jet/60 p-5">
                  <p className={`text-xs uppercase tracking-[0.25em] mb-2 ${accentText}`}>0{i + 1}</p>
                  <p className="text-sm text-offwhite/70 leading-relaxed">{u}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-jet">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="DELIVERY PROCESS" title="How the engagement runs." />
          </Reveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {detail.deliveryProcess.map((step, i) => (
              <Reveal key={step} delay={i * 0.04}>
                <div className="rounded-2xl border border-white/[0.08] bg-graphite/40 p-5">
                  <p className={`font-display text-2xl font-bold mb-2 ${accentText}`}>0{i + 1}</p>
                  <p className="text-sm text-offwhite/70 leading-relaxed">{step}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="bg-graphite/20">
        <Container size="narrow">
          <Reveal>
            <SectionHeading eyebrow="FAQ" title="Common questions." align="center" />
          </Reveal>
          <div className="mt-12">
            <Reveal delay={0.05}>
              <FAQList items={detail.faqs} />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-jet">
        <Container>
          <Reveal>
            <div className="rounded-3xl border border-white/[0.08] bg-graphite/40 p-8 md:p-12 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-offwhite">Ready to talk about {service.shortTitle}?</h2>
              <p className="mt-4 max-w-xl mx-auto text-sm md:text-base text-offwhite/65">Share the problem and constraints. We will respond with an honest recommendation.</p>
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