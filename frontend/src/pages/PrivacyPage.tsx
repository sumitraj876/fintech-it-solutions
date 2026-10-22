import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { PageHeader } from '../components/ui/PageHeader';

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="LEGAL" title="Privacy Policy" description="Last updated: October 2026" />
      <Section className="bg-jet">
        <Container size="narrow">
          <div className="prose prose-invert prose-sm max-w-none text-offwhite/70 space-y-6">
            <h2 className="text-offwhite font-display text-xl font-semibold">1. Information We Collect</h2>
            <p>When you submit a project inquiry, we collect your name, email address, company name (optional), and project details. We do not collect payment information through this website.</p>
            
            <h2 className="text-offwhite font-display text-xl font-semibold">2. How We Use Your Information</h2>
            <p>We use your information solely to respond to your inquiry, provide a quote, and communicate about potential projects. We do not sell, rent, or share your data with third-party advertisers.</p>
            
            <h2 className="text-offwhite font-display text-xl font-semibold">3. Data Storage</h2>
            <p>Your data is processed securely. Emails are sent via Gmail SMTP and are stored in our secure inbox. We do not use tracking cookies or analytics scripts that identify individual users.</p>
            
            <h2 className="text-offwhite font-display text-xl font-semibold">4. Your Rights</h2>
            <p>You can request deletion of your data at any time by emailing us at fintech.itsolutions26@gmail.com.</p>
            
            <h2 className="text-offwhite font-display text-xl font-semibold">5. Contact</h2>
            <p>For any privacy concerns, contact Sumit Kumar at fintech.itsolutions26@gmail.com.</p>
          </div>
        </Container>
      </Section>
    </>
  );
}