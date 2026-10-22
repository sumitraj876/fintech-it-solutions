import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { PageHeader } from '../components/ui/PageHeader';

export default function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="LEGAL" title="Terms of Service" description="Last updated: October 2026" />
      <Section className="bg-jet">
        <Container size="narrow">
          <div className="prose prose-invert prose-sm max-w-none text-offwhite/70 space-y-6">
            <h2 className="text-offwhite font-display text-xl font-semibold">1. Services</h2>
            <p>FINTECH IT SOLUTIONS provides software engineering, AI/ML, data analytics, and digital transformation services. All engagements are governed by a separate signed proposal.</p>
            
            <h2 className="text-offwhite font-display text-xl font-semibold">2. No Guarantee of Results</h2>
            <p>While we strive for excellence, we do not guarantee specific business outcomes, revenue increases, or performance metrics. All concepts and demos on this website are illustrative.</p>
            
            <h2 className="text-offwhite font-display text-xl font-semibold">3. Intellectual Property</h2>
            <p>All source code and deliverables created during an engagement transfer to the client upon full payment, unless otherwise agreed in writing.</p>
            
            <h2 className="text-offwhite font-display text-xl font-semibold">4. Contact</h2>
            <p>Questions about these terms can be directed to fintech.itsolutions26@gmail.com.</p>
          </div>
        </Container>
      </Section>
    </>
  );
}