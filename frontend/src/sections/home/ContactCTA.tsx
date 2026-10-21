import { ArrowRight } from 'lucide-react';
import { Section } from '../../components/ui/Section';
import { Container } from '../../components/ui/Container';
import { Button } from '../../components/ui/Button';
import { GradientText } from '../../components/ui/GradientText';
import { Reveal } from '../../components/ui/Reveal';
import { site } from '../../config/site';

export function ContactCTA() {
  return (
    <Section id="contact-cta" className="bg-jet relative overflow-hidden">
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 h-[28rem] w-[28rem] rounded-full bg-pink/20 blur-[120px]" aria-hidden="true" />
      <Container className="relative">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[0.3em] text-yellow mb-4">START A PROJECT</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-offwhite leading-tight">
              Tell us what <GradientText>you're building.</GradientText>
            </h2>
            <p className="mt-6 text-base md:text-lg text-offwhite/65 leading-relaxed max-w-2xl mx-auto">
              Share the problem, the constraints, and where you are today. We respond with an honest assessment — including whether we are the right team for it.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button to="/contact" variant="primary" size="lg">Start a Project <ArrowRight size={18} /></Button>
              <a href={`mailto:${site.email}`} className="text-sm text-offwhite/70 hover:text-pink transition-colors">or email {site.email}</a>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}