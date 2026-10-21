import { ArrowRight, Lock } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { PageHeader } from '../components/ui/PageHeader';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';
import { pricing, pricingDisclaimer } from '../data/pricing';

export default function PricingPage() {
  return (
    <>
      <PageHeader eyebrow="PRICING" title="Confidential pricing, tailored to you." description="We offer these engagement models to fit different needs. Because scope and complexity vary widely, we do not publish fixed prices. Let's discuss what you need.">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.04] text-pink"><Lock size={26} /></div>
      </PageHeader>
      <Section className="bg-jet">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {pricing.map((item, i) => {
              const accent = item.accent === 'pink' ? 'text-pink' : 'text-yellow';
              const border = item.accent === 'pink' ? 'hover:border-pink/50' : 'hover:border-yellow/50';
              return (
                <Reveal key={item.id} delay={i * 0.05}>
                  <div className={['flex h-full flex-col rounded-2xl border border-white/[0.08] bg-graphite/40 backdrop-blur-sm p-7 transition-all duration-300 hover:-translate-y-1', border].join(' ')}>
                    <h2 className="font-display text-lg font-semibold text-offwhite">{item.title}</h2>
                    <div className="mt-4"><span className={`font-display text-sm font-semibold ${accent}`}>{item.priceLabel}</span></div>
                    <p className="mt-4 text-sm text-offwhite/65 leading-relaxed flex-1">{item.description}</p>
                    <ul className="mt-5 space-y-2">
                      {item.highlights.map((h) => (
                        <li key={h} className="text-xs text-offwhite/60 flex items-start gap-2">
                          <span className={`mt-1 h-1 w-1 shrink-0 rounded-full ${item.accent === 'pink' ? 'bg-pink' : 'bg-yellow'}`} />{h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Reveal delay={0.1}>
            <div className="mt-10 rounded-2xl border border-white/[0.08] bg-graphite/30 p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-yellow mb-3">HOW WE QUOTE</p>
              <p className="text-sm text-offwhite/70 leading-relaxed">{pricingDisclaimer}</p>
            </div>
          </Reveal>
        </Container>
      </Section>
      <Section className="bg-graphite/20">
        <Container>
          <Reveal>
            <div className="rounded-3xl border border-white/[0.08] bg-jet/60 p-8 md:p-12 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-offwhite">Request a tailored quote.</h2>
              <p className="mt-4 max-w-xl mx-auto text-sm md:text-base text-offwhite/65">Share your scope and constraints. We will respond with a concrete proposal — including what is in scope, what is not, and what the timeline looks like.</p>
              <div className="mt-8"><Button to="/contact" variant="primary" size="lg">Discuss Your Project <ArrowRight size={18} /></Button></div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}