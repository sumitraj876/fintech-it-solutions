import { Section } from '../../components/ui/Section';
import { Container } from '../../components/ui/Container';
import { PageHeader } from '../../components/ui/PageHeader';

export default function CookiePolicy() {
  return (
    <>
      <PageHeader eyebrow="LEGAL" title="Cookie Policy" description="Last updated: October 30, 2026" />
      <Section className="bg-jet">
        <Container size="narrow">
          <div className="prose prose-invert max-w-none text-offwhite/70 space-y-6">
            <p className="text-base leading-relaxed">
              This page contains the official cookie policy for FINTECH IT SOLUTIONS.
            </p>
            <p className="text-base leading-relaxed">
              For any questions, please contact us at <a href="mailto:hello@fintechitsolutions.in" className="text-pink hover:underline">hello@fintechitsolutions.in</a>.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}