import { Mail, Clock } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { PageHeader } from '../components/ui/PageHeader';
import { Reveal } from '../components/ui/Reveal';
import { ContactForm } from '../sections/shared/ContactForm';

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="CONTACT"
        title="Tell us what you're building."
        description="Share the problem, the constraints, and where you are today. We respond with an honest assessment â€” including whether we are the right team for it."
      />

      <Section className="bg-jet">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Reveal>
                <div className="rounded-2xl border border-white/[0.08] bg-graphite/40 p-6">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-pink/10 text-pink mb-4">
                    <Mail size={18} />
                  </div>
                  <h2 className="font-display text-lg font-semibold text-offwhite">
                    Prefer email?
                  </h2>
                  <p className="mt-2 text-sm text-offwhite/60 leading-relaxed">
                    Reach us directly at:
                  </p>
                  <a
                    href="mailto:hello@fintechitsolutions.in"
                    className="mt-2 inline-block font-medium text-pink hover:text-yellow transition-colors break-all"
                  >
                    hello@fintechitsolutions.in
                  </a>
                  <p className="mt-4 text-xs text-offwhite/45 leading-relaxed">
                    Email delivery depends on our domain and mailbox being
                    configured. Until then, the form below is the preferred way to
                    reach us.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="mt-5 rounded-2xl border border-white/[0.08] bg-graphite/40 p-6">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-yellow/10 text-yellow mb-4">
                    <Clock size={18} />
                  </div>
                  <h2 className="font-display text-lg font-semibold text-offwhite">
                    What to expect
                  </h2>
                  <ul className="mt-3 space-y-2.5 text-sm text-offwhite/65 leading-relaxed">
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-pink" />
                      A reply within a reasonable timeframe â€” not a marketing autoresponder.
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-pink" />
                      A short discovery call if there is a fit.
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-pink" />
                      A written proposal with scope, timeline, and cost.
                    </li>
                  </ul>
                </div>
              </Reveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <Reveal>
                <div className="rounded-2xl border border-white/[0.08] bg-graphite/40 p-6 md:p-8">
                  <h2 className="font-display text-2xl font-semibold text-offwhite mb-3">
                    Project inquiry form
                  </h2>
                  <p className="text-sm text-offwhite/60 leading-relaxed mb-6">
                    Fields marked <span className="text-pink">*</span> are required.
                  </p>
                  <ContactForm />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}