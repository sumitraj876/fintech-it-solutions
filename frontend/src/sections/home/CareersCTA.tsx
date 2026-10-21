import { ArrowRight } from 'lucide-react';
import { Section } from '../../components/ui/Section';
import { Container } from '../../components/ui/Container';
import { Button } from '../../components/ui/Button';
import { Reveal } from '../../components/ui/Reveal';

export function CareersCTA() {
  return (
    <Section id="careers-cta" className="bg-transparent">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-graphite/40 p-8 md:p-12">
            <div
              className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-pink/15 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <p className="text-xs uppercase tracking-[0.3em] text-yellow mb-3">
                  CAREERS
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-offwhite leading-tight">
                  Build the products that define our first decade.
                </h2>
                <p className="mt-4 max-w-xl text-sm md:text-base text-offwhite/65 leading-relaxed">
                  We are a small team working on AI, software, and data problems
                  for real businesses. If that sounds like the kind of place you
                  want to grow, we would like to hear from you.
                </p>
              </div>
              <div className="md:col-span-1 md:text-right">
                <Button to="/careers" variant="secondary" size="md">
                  Explore careers
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}