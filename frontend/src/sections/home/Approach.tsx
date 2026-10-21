import { Section } from '../../components/ui/Section';
import { Container } from '../../components/ui/Container';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Reveal } from '../../components/ui/Reveal';
import { approach } from '../../data/approach';

export function Approach() {
  return (
    <Section id="approach" className="bg-graphite/20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="OUR APPROACH"
            title="Discover → Design → Build → Deploy → Improve."
            description="A repeatable process that keeps the work grounded in your business problem and honest about what has actually shipped."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-5">
          {approach.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.06}>
              <div className="relative h-full rounded-2xl border border-white/[0.08] bg-jet/60 backdrop-blur-sm p-5 md:p-6">
                <span className="font-display text-3xl md:text-4xl font-bold text-pink/80">
                  {step.step}
                </span>
                <h3 className="mt-3 font-display text-base font-semibold text-offwhite">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs md:text-sm text-offwhite/60 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}