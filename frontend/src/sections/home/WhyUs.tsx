import { Check } from 'lucide-react';
import { Section } from '../../components/ui/Section';
import { Container } from '../../components/ui/Container';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Reveal } from '../../components/ui/Reveal';
import { whyUs } from '../../data/whyUs';

export function WhyUs() {
  return (
    <Section id="why-us" className="bg-graphite/20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="WHY WORK WITH US"
            title="A young team with a bias toward shipping."
            description="We are a new company — founded in 2024 — and we treat that as a reason to be precise about what we commit to and transparent about what we do not know yet."
          />
        </Reveal>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {whyUs.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <div className="flex gap-4 rounded-2xl border border-white/[0.08] bg-jet/60 backdrop-blur-sm p-6">
                <div className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-pink/15 text-pink">
                  <Check size={14} />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-offwhite">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-offwhite/60 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}