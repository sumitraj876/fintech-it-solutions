import { Section } from '../../components/ui/Section';
import { Container } from '../../components/ui/Container';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Reveal } from '../../components/ui/Reveal';
import { Card } from '../../components/ui/Card';
import { whatWeDo } from '../../data/whatWeDo';

export function WhatWeDo() {
  return (
    <Section id="what-we-do" className="bg-transparent">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={whatWeDo.eyebrow}
            title={whatWeDo.title}
            description={whatWeDo.description}
            align="left"
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {whatWeDo.principles.map((principle, i) => (
            <Reveal key={principle.label} delay={i * 0.08}>
              <Card className="h-full">
                <p className="text-xs uppercase tracking-[0.25em] text-pink mb-3">
                  0{i + 1}
                </p>
                <h3 className="font-display text-xl font-semibold text-offwhite mb-2">
                  {principle.label}
                </h3>
                <p className="text-sm text-offwhite/60 leading-relaxed">
                  {principle.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}