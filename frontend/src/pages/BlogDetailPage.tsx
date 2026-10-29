import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { PageHeader } from '../components/ui/PageHeader';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';
import { getPostById } from '../data/blog';

export default function BlogDetailPage() {
  const { id } = useParams<{ id: string }>();
  if (!id) return <Navigate to="/blog" replace />;
  
  const post = getPostById(id);
  if (!post) return <Navigate to="/blog" replace />;

  return (
    <>
      <PageHeader eyebrow={post.category} title={post.title} description={post.excerpt}>
        <div className="flex items-center gap-4 text-sm text-offwhite/60">
          <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
          <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
        </div>
      </PageHeader>

      <Section className="bg-jet">
        <Container size="narrow">
          <Reveal>
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-pink hover:text-yellow mb-8">
              <ArrowLeft size={16} /> Back to all articles
            </Link>
            
            {/* Rendering HTML Content safely */}
            <div 
              className="prose prose-invert prose-pink max-w-none text-offwhite/80 leading-relaxed
                         prose-h2:text-offwhite prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4
                         prose-h3:text-yellow prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-3
                         prose-p:mb-4 prose-li:mb-2 prose-ul:list-disc prose-ul:pl-6 prose-strong:text-offwhite"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />

            <div className="mt-12 pt-8 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-sm text-offwhite/60 mb-2">Interested in this service?</p>
                <Link to={`/services/${post.serviceSlug}`} className="text-lg font-semibold text-pink hover:text-yellow transition-colors">
                  Explore our {post.category} services &rarr;
                </Link>
              </div>
              <Button to="/contact" variant="primary" size="md">Discuss Your Project</Button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}