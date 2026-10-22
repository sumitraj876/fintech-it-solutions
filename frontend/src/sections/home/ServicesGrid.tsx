import { ArrowUpRight } from 'lucide-react';
import { Section } from '../../components/ui/Section';
import { Container } from '../../components/ui/Container';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Reveal } from '../../components/ui/Reveal';
import { InteractiveCard } from '../../components/ui/InteractiveCard';
import { services } from '../../data/services';

export function ServicesGrid() {
  const featuredServices = services.slice(0, 6);

  return (
    <Section id="services-grid" className="bg-graphite/20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="SERVICES"
            title="Capabilities that compound."
            description="Six focused practices â€” combined into end-to-end engagements or used individually."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {featuredServices.map((service, i) => {
            const Icon = service.icon;
            const accentText = service.accent === 'pink' ? 'text-pink' : 'text-yellow';

            return (
              <Reveal key={service.slug} delay={i * 0.06}>
                <InteractiveCard to={`/services/${service.slug}`} accent={service.accent} className="h-full">
                  <div className="relative h-48 w-full overflow-hidden bg-jet">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/20 to-transparent opacity-90" />
                    <div className={`absolute bottom-4 left-6 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-jet/80 backdrop-blur-md border border-white/10 ${accentText}`}>
                      <Icon size={20} />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <h3 className="font-display text-lg font-semibold text-offwhite mb-2">
                      {service.shortTitle}
                    </h3>
                    <p className="text-sm text-offwhite/60 leading-relaxed flex-1">
                      {service.tagline}
                    </p>
                    <span className={`mt-6 inline-flex items-center gap-1.5 text-xs font-semibold ${accentText}`}>
                      Learn more
                      <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </InteractiveCard>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}