import { Section } from '../../components/ui/Section';
import { Container } from '../../components/ui/Container';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Reveal } from '../../components/ui/Reveal';
import { techStack } from '../../data/techStack';

export function TechStack() {
  return (
    <Section id="tech-stack" className="bg-jet">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="TECHNOLOGY STACK"
            title="Tools we reach for, by default."
            description="Not everything below is used on every project — the right stack depends on the problem. These are the tools we know well."
          />
        </Reveal>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {techStack.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.05}>
              <div className="rounded-2xl border border-white/[0.08] bg-graphite/40 backdrop-blur-sm p-6">
                <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow">{group.category}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1 text-xs text-offwhite/75">{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}