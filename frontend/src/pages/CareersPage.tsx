import { SEO } from '../components/layout/SEO';
import { useState } from 'react';
import { ArrowRight, Briefcase, ChevronDown, Info } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { PageHeader } from '../components/ui/PageHeader';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';
import { GoogleFormEmbed } from '../components/forms/GoogleFormEmbed';
import { careerRoles, careersPage } from '../data/careers';

export default function CareersPage() {
  const [openRoleId, setOpenRoleId] = useState<string | null>(null);
  const visibleRoles = careerRoles.filter((r) => r.status !== 'closed');

  return (
    <>
      <SEO title="Careers  —  — Æ —  —  —  —  — Å¡ —  —  —  —  —  —  build with us" description="Roles in AI/ML, Generative AI, full-stack, data, software engineering, and cloud/DevOps." path="/careers" />
      <PageHeader eyebrow={careersPage.eyebrow}
        title={careersPage.title}
        description={careersPage.description}
      />

      <Section className="bg-transparent" size="sm">
        <Container>
          <Reveal>
            <div className="rounded-2xl border border-yellow/20 bg-yellow/5 p-6 md:p-8 flex gap-4">
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow/15 text-yellow">
                <Info size={18} />
              </div>
              <div>
                <h2 className="font-display text-lg font-semibold text-offwhite">
                  {careersPage.note.title}
                </h2>
                <p className="mt-2 text-sm text-offwhite/70 leading-relaxed">
                  {careersPage.note.body}
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Roles */}
      <Section className="bg-transparent">
        <Container>
          {visibleRoles.length === 0 ? (
            <Reveal>
              <div className="rounded-2xl border border-white/[0.08] bg-jet/10 p-10 text-center">
                <h2 className="font-display text-2xl font-semibold text-offwhite">
                  No roles are open right now.
                </h2>
                <p className="mt-3 text-sm text-offwhite/60 max-w-md mx-auto">
                  We are always interested in meeting people who care about the
                  same things we do. You can still express interest below.
                </p>
              </div>
            </Reveal>
          ) : (
            <div className="space-y-4">
              {visibleRoles.map((role, i) => {
                const isOpen = openRoleId === role.id;
                return (
                  <Reveal key={role.id} delay={i * 0.04}>
                    <div className="rounded-2xl border border-white/[0.08] bg-jet/10 backdrop-blur-sm">
                      <button
                        type="button"
                        onClick={() => setOpenRoleId(isOpen ? null : role.id)}
                        aria-expanded={isOpen}
                        className="flex w-full items-start justify-between gap-4 p-6 md:p-7 text-left transition-colors hover:bg-white/[0.02]"
                      >
                        <div className="flex items-start gap-4 flex-1">
                          <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pink/10 text-pink">
                            <Briefcase size={18} />
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <h2 className="font-display text-lg font-semibold text-offwhite">
                                {role.title}
                              </h2>
                              <span className="rounded-full border border-white/[0.10] bg-white/[0.02] px-2.5 py-0.5 text-[10px] uppercase tracking-[0.2em] text-offwhite/60">
                                {role.team}
                              </span>
                            </div>
                            <p className="text-sm text-offwhite/65 leading-relaxed">
                              {role.summary}
                            </p>
                            <div className="mt-3 flex flex-wrap gap-1.5">
                              {role.employmentTypes.map((t) => (
                                <span
                                  key={t}
                                  className="rounded-full border border-white/[0.08] bg-white/[0.02] px-2.5 py-0.5 text-[11px] text-offwhite/60"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <ChevronDown
                          size={18}
                          className={[
                            'shrink-0 mt-2 text-offwhite/50 transition-transform duration-200',
                            isOpen ? 'rotate-180 text-pink' : '',
                          ].join(' ')}
                        />
                      </button>

                      {isOpen && (
                        <div className="border-t border-white/[0.06] px-6 md:px-7 py-6">
                          <h3 className="text-xs uppercase tracking-[0.25em] text-yellow mb-3">
                            Focus areas
                          </h3>
                          <ul className="space-y-2 mb-6">
                            {role.focusAreas.map((area) => (
                              <li
                                key={area}
                                className="text-sm text-offwhite/70 flex items-start gap-2"
                              >
                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-pink" />
                                {area}
                              </li>
                            ))}
                          </ul>
                          <div className="flex flex-col sm:flex-row gap-3">
                            <Button
                              to="#express-interest"
                              size="md"
                            >
                              Express Interest
                              <ArrowRight size={16} />
                            </Button>
                          </div>
                          <p className="mt-4 text-xs text-offwhite/45 leading-relaxed">
                            Engagement type (full-time, part-time, project-based)
                            is discussed when we align on a concrete fit. We do not
                            publish salary bands here.
                          </p>
                        </div>
                      )}
                    </div>
                  </Reveal>
                );
              })}
            </div>
          )}
        </Container>
      </Section>

      {/* Express Interest form */}
      <Section id="express-interest" className="bg-transparent">
        <Container size="narrow">
          <Reveal>
            <div className="text-center mb-10">
              <p className="text-xs uppercase tracking-[0.3em] text-yellow mb-3">
                EXPRESS INTEREST
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-offwhite">
                Tell us what you want to work on.
              </h2>
              <p className="mt-4 max-w-xl mx-auto text-sm md:text-base text-offwhite/65 leading-relaxed">
                Share a short note about what you have built and the kind of
                problems you want to solve. If the fit is right, we will reach out.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <GoogleFormEmbed
              height={1000}
              notConfiguredLabel="Careers form not configured yet"
              externalLabel="Open careers form in new tab"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 text-xs text-offwhite/45 text-center leading-relaxed">
              We never ask for Aadhaar, PAN, or payment information during
              initial interest.
            </p>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}