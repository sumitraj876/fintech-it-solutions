import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { PageHeader } from '../components/ui/PageHeader';
import { Reveal } from '../components/ui/Reveal';
import { blogPosts } from '../data/blog';

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="INSIGHTS & CASE STUDIES"
        title="Deep dives into modern engineering."
        description="Technical articles on AI, Full-Stack, Cloud, and Enterprise Architecture, written by our team."
      />
      <Section className="bg-jet">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <Reveal key={post.id} delay={i * 0.08}>
                <Link to={`/blog/${post.id}`} className="group flex flex-col h-full rounded-2xl border border-white/[0.08] bg-graphite/40 p-6 transition-all hover:-translate-y-1 hover:border-pink/50">
                  <div className="flex items-center gap-3 text-xs text-offwhite/50 mb-3">
                    <span className="text-pink font-semibold uppercase tracking-widest">{post.category}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-offwhite mb-3 group-hover:text-pink transition-colors">{post.title}</h3>
                  <p className="text-sm text-offwhite/60 flex-1 mb-6">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/[0.06]">
                    <span className="text-xs text-offwhite/50 flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                    <span className="text-sm font-semibold text-yellow flex items-center gap-1">Read Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}