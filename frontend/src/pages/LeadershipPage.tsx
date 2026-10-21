import { ArrowRight } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { PageHeader } from '../components/ui/PageHeader';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';
import { founder } from '../data/founder';
import { site } from '../config/site';

export default function LeadershipPage() {
  return (
    <>
      <PageHeader eyebrow="LEADERSHIP" title="A founder-led team, by design." description="FINTECH IT SOLUTIONS is led by its founder, with the people building your software directly involved in every engagement." />
      <Section className="bg-jet">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-start">
            <Reveal className="md:col-span-4">
              <div className="relative">
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-pink/25 to-yellow/15 blur-2xl" aria-hidden="true" />
                <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/[0.08] bg-graphite/60">
                  <img src={founder.portrait} alt={`Portrait placeholder for ${founder.name}`} className="h-full w-full object-cover" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
                  <div className="absolute inset-0 -z-10 flex items-center justify-center"><span className="font-display text-5xl font-bold text-offwhite/20">SK</span></div>
                </div>
              </div>
            </Reveal>
            <div className="md:col-span-8">
              <Reveal delay={0.1}>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-offwhite">{founder.name}</h1>
                <p className="mt-1 text-sm text-pink font-medium">{founder.role} · {site.company.name}</p>
                <p className="mt-6 text-base md:text-lg text-offwhite/70 leading-relaxed">{founder.intro}</p>
                <p className="mt-4 text-sm md:text-base text-offwhite/65 leading-relaxed">{founder.message}</p>
                <div className="mt-10 rounded-2xl border border-white/[0.08] bg-graphite/40 p-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-yellow mb-2">A note on this page</p>
                  <p className="text-sm text-offwhite/60 leading-relaxed">This profile deliberately focuses on the founder's role and the company's direction. Verified employment history, certifications, and prior engagements will be added only when supplied and approved.</p>
                </div>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Button to="/contact" variant="primary" size="md">Start a conversation <ArrowRight size={16} /></Button>
                  <Button to="/about" variant="secondary" size="md">About the company</Button>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}