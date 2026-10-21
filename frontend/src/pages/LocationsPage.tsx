import { MapPin } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { PageHeader } from '../components/ui/PageHeader';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';
import { locations, statusLabels, type LocationStatus } from '../data/locations';

function statusClasses(status: LocationStatus) {
  switch (status) {
    case 'physical-office': return 'border-pink/40 text-pink';
    case 'service-location': return 'border-yellow/40 text-yellow';
    case 'planned': return 'border-offwhite/30 text-offwhite/60';
  }
}

export default function LocationsPage() {
  return (
    <>
      <PageHeader eyebrow="LOCATIONS & COVERAGE" title="Where we serve clients." description="We work with teams across India. Physical office addresses will appear here once verified." />
      <Section className="bg-transparent">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {locations.map((loc, i) => {
              // Force path to .png
              const imgUrl = loc.image;
              
              return (
                <Reveal key={loc.city} delay={i * 0.06}>
                  <div className="flex flex-col h-full rounded-2xl border border-white/[0.08] bg-graphite/40 backdrop-blur-sm overflow-hidden">
                    <div className="relative h-40 w-full overflow-hidden bg-jet">
                      <img src={imgUrl} alt={loc.city} className="h-full w-full object-cover" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-graphite to-transparent opacity-80" />
                      <div className="absolute top-4 right-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-jet/80 backdrop-blur-md border border-white/10 text-pink">
                        <MapPin size={14} />
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h2 className="font-display text-2xl font-semibold text-offwhite">{loc.city}</h2>
                        <span className={`rounded-full border px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] ${statusClasses(loc.status)}`}>{statusLabels[loc.status]}</span>
                      </div>
                      <p className="text-sm text-offwhite/50">{loc.region}</p>
                      <p className="mt-4 text-sm text-offwhite/60 leading-relaxed flex-1">{loc.note ?? 'Service coverage and client engagement.'}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
}