import { SEO } from '../components/layout/SEO';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { PageHeader } from '../components/ui/PageHeader';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { aboutPage } from '../data/about';

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Us | FINTECH IT SOLUTIONS"
        description="Founded in 2024 by Sumit Kumar, we are a young team of engineers building the future of enterprise software."
        path="/about"
      />
      <PageHeader
        eyebrow={aboutPage.hero.eyebrow}
        title={aboutPage.hero.title}
        description={aboutPage.hero.description}
      />
      <Section className="bg-jet">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Reveal>
              <Card className="h-full">
                <p className="text-xs uppercase tracking-[0.25em] text-pink mb-3">MISSION</p>
                <h2 className="font-display text-2xl font-semibold text-offwhite mb-3">{aboutPage.mission.title}</h2>
                <p className="text-sm md:text-base text-offwhite/65 leading-relaxed">{aboutPage.mission.body}</p>
              </Card>
            </Reveal>
            <Reveal delay={0.08}>
              <Card className="h-full">
                <p className="text-xs uppercase tracking-[0.25em] text-yellow mb-3">VISION</p>
                <h2 className="font-display text-2xl font-semibold text-offwhite mb-3">{aboutPage.vision.title}</h2>
                <p className="text-sm md:text-base text-offwhite/65 leading-relaxed">{aboutPage.vision.body}</p>
              </Card>
            </Reveal>
          </div>
        </Container>
      </Section>
      <Section className="bg-graphite/20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="PHILOSOPHY"
              title={aboutPage.philosophy.title}
              description={aboutPage.philosophy.body}
            />
          </Reveal>
        </Container>
      </Section>
      <Section className="bg-jet">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="PRINCIPLES"
              title="About Us | FINTECH IT SOLUTIONS"
              description="Founded in 2024 by Sumit Kumar, we are a young team of engineers building the future of enterprise software."
            />
          </Reveal>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {aboutPage.principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <Card className="h-full">
                  <p className="text-xs uppercase tracking-[0.25em] text-pink mb-3">0{i + 1}</p>
                  <h3 className="font-display text-base font-semibold text-offwhite mb-2">{p.title}</h3>
                  <p className="text-sm text-offwhite/60 leading-relaxed">{p.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
      <Section className="bg-graphite/20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="TIMELINE"
              title="About Us | FINTECH IT SOLUTIONS"
              description="Founded in 2024 by Sumit Kumar, we are a young team of engineers building the future of enterprise software."
            />
          </Reveal>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {aboutPage.timeline.map((entry, i) => (
              <Reveal key={entry.year} delay={i * 0.06}>
                <div className="relative h-full rounded-2xl border border-white/[0.08] bg-jet/60 backdrop-blur-sm p-6">
                  <span className="font-display text-sm font-bold uppercase tracking-[0.25em] text-yellow">{entry.year}</span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-offwhite">{entry.title}</h3>
                  <p className="mt-2 text-sm text-offwhite/60 leading-relaxed">{entry.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
      <Section className="bg-jet">
        <Container>
          <Reveal>
            <div className="rounded-3xl border border-white/[0.08] bg-graphite/40 p-8 md:p-12 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-offwhite">Want to work with us?</h2>
              <p className="mt-4 max-w-xl mx-auto text-sm md:text-base text-offwhite/65 leading-relaxed">
                Tell us what you are building. We will respond with an honest assessment.
              </p>
              <div className="mt-8">
                <Button to="/contact" variant="primary" size="lg">Start a Project</Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}