import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Section } from '../../components/ui/Section';
import { Container } from '../../components/ui/Container';
import { Reveal } from '../../components/ui/Reveal';
import { founder } from '../../data/founder';
import { site } from '../../config/site';

export function FounderIntro() {
  return (
    <Section id="founder" className="bg-jet">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
          <Reveal className="md:col-span-4">
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-pink/25 to-yellow/15 blur-2xl" aria-hidden="true" />
              <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/[0.08] bg-graphite/60">
                <img src={founder.portrait} alt={`Portrait placeholder for ${founder.name}`} className="h-full w-full object-cover" loading="lazy" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
                <div className="absolute inset-0 -z-10 flex items-center justify-center">
                  <span className="font-display text-5xl font-bold text-offwhite/20">SK</span>
                </div>
              </div>
            </div>
          </Reveal>
          <div className="md:col-span-8">
            <Reveal delay={0.1}>
              <p className="text-xs uppercase tracking-[0.3em] text-yellow mb-4">FROM THE FOUNDER</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-offwhite leading-tight">{founder.name}</h2>
              <p className="mt-1 text-sm text-pink font-medium">{founder.role} · {site.company.name}</p>
              <p className="mt-6 text-base md:text-lg text-offwhite/70 leading-relaxed">{founder.intro}</p>
              <p className="mt-4 text-sm md:text-base text-offwhite/60 leading-relaxed">{founder.message}</p>
              {founder.bioLink && (
                <Link to={founder.bioLink} className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-pink hover:text-yellow transition-colors">
                  Read full bio <ArrowUpRight size={14} />
                </Link>
              )}
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}