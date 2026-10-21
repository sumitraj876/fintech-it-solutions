import { ArrowUpRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Section } from '../../components/ui/Section';
import { Container } from '../../components/ui/Container';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Reveal } from '../../components/ui/Reveal';
import { locations, statusLabels } from '../../data/locations';

export function LocationsTeaser() {
  return (
    <Section id="locations-teaser" className="bg-transparent">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <Reveal>
            <SectionHeading
              eyebrow="SERVICE COVERAGE"
              title="Where we work with clients."
              description="We serve startups, SMBs, and enterprise teams across India. Physical office addresses will appear here once verified."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/locations"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-pink hover:text-yellow transition-colors shrink-0"
            >
              View all locations
              <ArrowUpRight size={14} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {locations.map((loc, i) => (
            <Reveal key={loc.city} delay={i * 0.06}>
              <div className="flex flex-col h-full rounded-2xl border border-white/[0.08] bg-jet/10 backdrop-blur-sm overflow-hidden">
                
                {/* Image Header */}
                <div className="relative h-40 w-full overflow-hidden bg-graphite">
                  <img 
                    src={loc.image} 
                    alt={loc.city} 
                    className="h-full w-full object-cover" 
                    loading="lazy" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-jet to-transparent opacity-80" />
                  <div className="absolute top-4 right-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-jet/80 backdrop-blur-md border border-white/10 text-pink">
                    <MapPin size={14} />
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-display text-xl font-semibold text-offwhite">
                      {loc.city}
                    </h3>
                    <span className="rounded-full border border-white/[0.10] bg-white/[0.02] px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-offwhite/50">
                      {statusLabels[loc.status]}
                    </span>
                  </div>
                  <p className="text-sm text-offwhite/50">{loc.region}</p>
                  {loc.note && (
                    <p className="mt-3 text-xs text-offwhite/60 leading-relaxed flex-1">
                      {loc.note}
                    </p>
                  )}
                </div>
                
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}