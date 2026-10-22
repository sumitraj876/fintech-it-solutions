import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { PageHeader } from '../components/ui/PageHeader';

export default function LicensePage() {
  return (
    <>
      <PageHeader eyebrow="LEGAL" title="Licensing & Credits" description="Attribution for assets used on this website." />
      <Section className="bg-jet">
        <Container size="narrow">
          <div className="prose prose-invert prose-sm max-w-none text-offwhite/70 space-y-6">
            <h2 className="text-offwhite font-display text-xl font-semibold">Fonts</h2>
            <p><strong>Inter</strong> and <strong>Space Grotesk</strong> are used under the SIL Open Font License (OFL) via Google Fonts.</p>
            
            <h2 className="text-offwhite font-display text-xl font-semibold">Icons</h2>
            <p><strong>Lucide React</strong> icons are used under the ISC License.</p>
            
            <h2 className="text-offwhite font-display text-xl font-semibold">Videos & Images</h2>
            <p>Hero background video is royalty-free abstract motion graphics. Service and location illustrations are original AI-generated assets created for FINTECH IT SOLUTIONS.</p>
            
            <h2 className="text-offwhite font-display text-xl font-semibold">Open Source Libraries</h2>
            <p>This website is built using React, Vite, Tailwind CSS, Framer Motion, and Node.js. All respective licenses are acknowledged.</p>
          </div>
        </Container>
      </Section>
    </>
  );
}