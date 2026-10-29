import { useParams, Navigate } from 'react-router-dom';
import { ArrowRight, Check, Info } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { PageHeader } from '../components/ui/PageHeader';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';
import { getProposalBySlug } from '../data/proposals';

export default function ProposalPage() {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <Navigate to="/" replace />;
  
  const proposal = getProposalBySlug(slug);
  if (!proposal) return <Navigate to="/" replace />;

  return (
    <>
      <PageHeader 
        eyebrow="PROPOSAL" 
        title={proposal.title} 
        description="A detailed breakdown of scope, timeline, and investment for your project." 
      />
      
      <Section className="bg-jet">
        <Container>
          <Reveal>
            <div className="mb-8 rounded-2xl border border-pink/30 bg-pink/5 p-6 text-center">
              <p className="text-sm text-offwhite/60 uppercase tracking-widest">Estimated Timeline</p>
              <p className="text-3xl font-bold text-pink mt-2">{proposal.timeline}</p>
            </div>
          </Reveal>
          
          <div className="space-y-4">
            {proposal.phases.map((phase, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="rounded-2xl border border-white/[0.08] bg-graphite/40 p-6 flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-offwhite">{phase.name}</h3>
                    <p className="text-sm text-offwhite/60 mt-2">{phase.description}</p>
                  </div>
                  <div className="flex gap-6 md:text-right">
                    <div>
                      <p className="text-xs text-offwhite/50 uppercase">Duration</p>
                      <p className="text-sm font-semibold text-yellow">{phase.duration}</p>
                    </div>
                    <div>
                      <p className="text-xs text-offwhite/50 uppercase">Cost</p>
                      <p className="text-sm font-semibold text-pink">{phase.cost}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <div className="mt-12 rounded-2xl border-2 border-pink p-8 text-center bg-jet">
              <p className="text-sm text-offwhite/60 uppercase tracking-widest mb-2">Total Estimated Investment</p>
              <p className="text-4xl font-bold text-offwhite">{proposal.totalCost}</p>
              
              {/* Disclaimer Section */}
              <div className="mt-6 flex items-start gap-3 rounded-xl border border-yellow/20 bg-yellow/5 p-4 text-left max-w-2xl mx-auto">
                <Info size={20} className="text-yellow shrink-0 mt-0.5" />
                <p className="text-xs text-offwhite/70 leading-relaxed">
                  <strong className="text-offwhite">Note:</strong> This is a preliminary estimate. Final pricing depends on specific work requirements, integrations, and project scope. We will share a detailed, tailored quote after our discovery call.
                </p>
              </div>

              <div className="mt-8">
                <Button to="/contact" variant="primary" size="lg">Discuss This Proposal <ArrowRight size={18} /></Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}