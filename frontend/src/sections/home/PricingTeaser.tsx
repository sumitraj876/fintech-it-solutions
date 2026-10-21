import { ArrowUpRight, Lock } from 'lucide-react';
import { Section } from '../../components/ui/Section';
import { Container } from '../../components/ui/Container';
import { Reveal } from '../../components/ui/Reveal';
import { Button } from '../../components/ui/Button';
import { pricing, pricingDisclaimer } from '../../data/pricing';

export function PricingTeaser() {
  return (
    <Section id="pricing-teaser" className="bg-transparent">
      <Container>
        <Reveal>
          <div className="rounded-3xl border border-white/[0.08] bg-graphite/40 p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-pink/10 text-pink mb-5">
                  <Lock size={22} />
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-offwhite leading-tight">
                  Engagement models & confidential pricing.
                </h2>
                <p className="mt-4 max-w-xl text-sm md:text-base text-offwhite/65 leading-relaxed">
                  We offer fixed-scope engagements (websites, MVPs, prototypes) and
                  ongoing retainers. Because every project has different constraints,
                  we quote privately based on your exact needs.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {pricing.map((p) => (
                    <span key={p.id} className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1 text-xs text-offwhite/70">
                      {p.title}
                    </span>
                  ))}
                </div>

                <p className="mt-6 text-xs text-offwhite/50 leading-relaxed max-w-2xl">
                  {pricingDisclaimer}
                </p>
              </div>

              <div className="md:col-span-1 md:text-right">
                <Button to="/pricing" variant="secondary" size="lg">
                  View Engagement Models
                  <ArrowUpRight size={18} />
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}