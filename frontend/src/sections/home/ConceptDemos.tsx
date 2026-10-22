import { useState } from 'react';
import { Section } from '../../components/ui/Section';
import { Container } from '../../components/ui/Container';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Reveal } from '../../components/ui/Reveal';
import { Users, Building2, ChevronRight } from 'lucide-react';

export function ConceptDemos() {
  const [activeTab, setActiveTab] = useState<'crm' | 'erp'>('crm');

  return (
    <Section className="bg-jet py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="CONCEPT DEMOS"
            title="Interfaces we can build for you."
            description="A look at the custom CRM and ERP dashboards we design for enterprise clients. These are illustrative mockups — not live client data."
            align="center"
          />
        </Reveal>

        <div className="mt-12 flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab('crm')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all ${
              activeTab === 'crm'
                ? 'bg-pink text-jet shadow-[0_0_20px_rgba(255,22,138,0.4)]'
                : 'bg-graphite/40 text-offwhite/70 hover:text-offwhite border border-white/10'
            }`}
          >
            <Users size={18} /> CRM Pipeline
          </button>
          <button
            onClick={() => setActiveTab('erp')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all ${
              activeTab === 'erp'
                ? 'bg-yellow text-jet shadow-[0_0_20px_rgba(255,230,0,0.4)]'
                : 'bg-graphite/40 text-offwhite/70 hover:text-offwhite border border-white/10'
            }`}
          >
            <Building2 size={18} /> ERP Dashboard
          </button>
        </div>

        <Reveal delay={0.1}>
          <div className="relative mx-auto max-w-5xl rounded-2xl border border-white/[0.1] bg-graphite/60 p-2 backdrop-blur-xl shadow-2xl overflow-hidden">
            {/* Fake Window Header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.05]">
              <div className="h-3 w-3 rounded-full bg-red-500/80" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <div className="h-3 w-3 rounded-full bg-green-500/80" />
              <div className="ml-4 text-xs text-offwhite/40 font-mono">
                {activeTab === 'crm' ? 'app.fintechitsolutions.com/crm' : 'app.fintechitsolutions.com/erp'}
              </div>
            </div>

            {/* Mock UI */}
            <div className="p-6 md:p-8">
              {activeTab === 'crm' ? (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-offwhite">Sales Pipeline</h3>
                    <div className="px-4 py-2 bg-pink/10 text-pink text-sm font-semibold rounded-lg">+ New Lead</div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Column 1 */}
                    <div className="space-y-3">
                      <div className="text-xs uppercase tracking-wider text-offwhite/50 font-semibold mb-2">Qualified (3)</div>
                      {[
                        { name: 'Acme Corp', value: '₹45,000', color: 'border-pink/50' },
                        { name: 'Stark Industries', value: '₹1,20,000', color: 'border-pink/50' },
                        { name: 'Wayne Ent.', value: '₹85,000', color: 'border-pink/50' }
                      ].map((lead, i) => (
                        <div key={i} className={`p-4 rounded-xl bg-jet border-l-4 ${lead.color}`}>
                          <p className="text-sm font-semibold text-offwhite">{lead.name}</p>
                          <p className="text-xs text-yellow mt-1">{lead.value}</p>
                        </div>
                      ))}
                    </div>
                    {/* Column 2 */}
                    <div className="space-y-3">
                      <div className="text-xs uppercase tracking-wider text-offwhite/50 font-semibold mb-2">Proposal Sent (2)</div>
                      {[
                        { name: 'Globex', value: '₹2,50,000', color: 'border-yellow/50' },
                        { name: 'Initech', value: '₹90,000', color: 'border-yellow/50' }
                      ].map((lead, i) => (
                        <div key={i} className={`p-4 rounded-xl bg-jet border-l-4 ${lead.color}`}>
                          <p className="text-sm font-semibold text-offwhite">{lead.name}</p>
                          <p className="text-xs text-yellow mt-1">{lead.value}</p>
                        </div>
                      ))}
                    </div>
                    {/* Column 3 */}
                    <div className="space-y-3">
                      <div className="text-xs uppercase tracking-wider text-offwhite/50 font-semibold mb-2">Closed Won (1)</div>
                      {[
                        { name: 'Umbrella Corp', value: '₹4,00,000', color: 'border-green-500/50' }
                      ].map((lead, i) => (
                        <div key={i} className={`p-4 rounded-xl bg-jet border-l-4 ${lead.color}`}>
                          <p className="text-sm font-semibold text-offwhite">{lead.name}</p>
                          <p className="text-xs text-green-400 mt-1">{lead.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-offwhite">Inventory Overview</h3>
                    <div className="px-4 py-2 bg-yellow/10 text-yellow text-sm font-semibold rounded-lg">Export Report</div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl bg-jet border border-white/5">
                      <p className="text-sm text-offwhite/50 mb-2">Total Stock Value</p>
                      <p className="text-3xl font-bold text-offwhite">₹1,24,50,000</p>
                      <div className="mt-4 h-2 w-full bg-graphite rounded-full overflow-hidden">
                        <div className="h-full bg-pink w-3/4 rounded-full" />
                      </div>
                    </div>
                    <div className="p-6 rounded-xl bg-jet border border-white/5">
                      <p className="text-sm text-offwhite/50 mb-2">Low Stock Alerts</p>
                      <p className="text-3xl font-bold text-yellow">12 Items</p>
                      <div className="mt-4 h-2 w-full bg-graphite rounded-full overflow-hidden">
                        <div className="h-full bg-yellow w-1/4 rounded-full" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-jet border border-white/5">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-sm font-semibold text-offwhite">Recent Purchase Orders</p>
                      <ChevronRight size={16} className="text-offwhite/40" />
                    </div>
                    <div className="space-y-3">
                      {[
                        { id: 'PO-2024-089', vendor: 'TechSupplies Ltd', amount: '₹45,000', status: 'Approved' },
                        { id: 'PO-2024-090', vendor: 'Global Parts Inc', amount: '₹1,20,000', status: 'Pending' }
                      ].map((order, i) => (
                        <div key={i} className="flex justify-between items-center p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                          <div>
                            <p className="text-sm font-medium text-offwhite">{order.id}</p>
                            <p className="text-xs text-offwhite/50">{order.vendor}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-offwhite">{order.amount}</p>
                            <p className={`text-xs ${order.status === 'Approved' ? 'text-green-400' : 'text-yellow'}`}>{order.status}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}