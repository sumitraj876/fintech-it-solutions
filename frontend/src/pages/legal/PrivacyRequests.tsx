import { Section } from '../../components/ui/Section';
import { Container } from '../../components/ui/Container';
import { PageHeader } from '../../components/ui/PageHeader';

export default function PrivacyRequests() {
  return (
    <>
      <PageHeader eyebrow="LEGAL" title="Privacy Requests" description="Last updated: October 30, 2026" />
      <Section className="bg-jet">
        <Container size="narrow">
          <div className="prose prose-invert max-w-none text-offwhite/70 space-y-6">
            <p className="text-base leading-relaxed">
              This page contains the official privacy requests for FINTECH IT SOLUTIONS.
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