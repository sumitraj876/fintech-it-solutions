import { SEO } from '../components/layout/SEO';
import { ArrowUpRight } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { PageHeader } from '../components/ui/PageHeader';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';
import { InteractiveCard } from '../components/ui/InteractiveCard';
import { services } from '../data/services';

export default function ServicesPage() {
  return (
    <>
      <SEO title="Services | AI/ML, Full-Stack, CRM, ERP & Cloud" description="Explore our 13 core services: Artificial Intelligence, Generative AI, Full-Stack Development, Data Analytics, and more." path="/services" />
      
      <PageHeader
        eyebrow="SERVICES"
        title="Services | AI/ML, Full-Stack, CRM, ERP & Cloud"
        description="Explore our 13 core services: Artificial Intelligence, Generative AI, Full-Stack Development, Data Analytics, and more."
      />

      <Section className="bg-jet">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              const accentText = service.accent === 'pink' ? 'text-pink' : 'text-yellow';
              
              return (
                <Reveal key={service.slug} delay={i * 0.05}>
                  {/* CRITICAL FIX: The `to` prop is passed directly to InteractiveCard to ensure it routes correctly */}
                  <InteractiveCard to={`/services/${service.slug}`} accent={service.accent} className="h-full">
                    <div className="relative h-48 w-full overflow-hidden bg-jet">
                      <img src={service.image} alt={service.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/20 to-transparent opacity-90" />
                      <div className={`absolute bottom-4 left-6 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-jet/80 backdrop-blur-md border border-white/10 ${accentText}`}>
                        <Icon size={20} />
                      </div>
                    </div>
                    
                    <div className="flex flex-1 flex-col p-6">
                      <h2 className="font-display text-xl font-semibold text-offwhite mb-2">{service.title}</h2>
                      <p className="text-sm text-offwhite/65 leading-relaxed flex-1">{service.description}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {service.highlights.slice(0, 3).map((h) => (
                          <span key={h} className="rounded-full border border-white/[0.08] bg-white/[0.02] px-2.5 py-1 text-[11px] text-offwhite/60">{h}</span>
                        ))}
                      </div>
                      <span className={`mt-6 inline-flex items-center gap-1.5 text-xs font-semibold ${accentText}`}>
                        Learn more <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </InteractiveCard>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="bg-graphite/20">
        <Container>
          <Reveal>
            <div className="rounded-3xl border border-white/[0.08] bg-jet/60 p-8 md:p-12 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-offwhite">Not sure which you need?</h2>
              <p className="mt-4 max-w-xl mx-auto text-sm md:text-base text-offwhite/65 leading-relaxed">Tell us the problem. We will recommend a shape for the engagement.</p>
              <div className="mt-8"><Button to="/contact" variant="primary" size="lg">Start a Project</Button></div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}