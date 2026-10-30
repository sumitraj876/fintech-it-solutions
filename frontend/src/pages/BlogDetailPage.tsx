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
        <div className="flex items-center gap-6 text-sm text-offwhite/60 mt-4">
          <span className="flex items-center gap-2"><Calendar size={16} /> {post.date}</span>
          <span className="flex items-center gap-2"><Clock size={16} /> {post.readTime}</span>
          <span className="px-3 py-1 rounded-full bg-pink/10 text-pink border border-pink/20 text-xs font-semibold">Deep Dive</span>
        </div>
      </PageHeader>

      <Section className="bg-jet">
        <Container size="narrow">
          <Reveal>
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-pink hover:text-yellow mb-10 font-medium transition-colors">
              <ArrowLeft size={16} /> Back to all articles
            </Link>
            
            <div 
              className="
                text-offwhite/80 leading-[1.9] text-[1.05rem]
                [&_h2]:text-offwhite [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:mt-12 [&_h2]:mb-6 [&_h2]:border-b [&_h2]:border-white/10 [&_h2]:pb-3
                [&_h3]:text-yellow [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-10 [&_h3]:mb-4
                [&_p]:mb-6 [&_p]:leading-relaxed
                [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-3 [&_ul]:mb-8
                [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-3 [&_ol]:mb-8
                [&_li]:text-offwhite/75 [&_li]:leading-relaxed
                [&_strong]:text-offwhite [&_strong]:font-bold
                
                [&_table]:w-full [&_table]:my-8 [&_table]:border-collapse [&_table]:text-sm md:[&_table]:text-base
                [&_th]:bg-white/5 [&_th]:p-4 [&_th]:text-left [&_th]:font-semibold [&_th]:text-offwhite [&_th]:border [&_th]:border-white/10
                [&_td]:p-4 [&_td]:border [&_td]:border-white/10 [&_td]:text-offwhite/70
                [&_em]:text-offwhite/50 [&_em]:text-sm
                
                [&_.flex-col]:flex [&_.flex-col]:flex-col [&_.items-center]:items-center
                [&_.gap-2]:gap-2 [&_.my-6]:my-10
                [&_.bg-jet\/60]:bg-white/5 [&_.bg-jet\/60]:shadow-sm [&_.border]:border-white/10 [&_.rounded-lg]:rounded-xl
                [&_.px-6]:px-6 [&_.py-3]:py-4 [&_.text-offwhite]:text-offwhite [&_.font-semibold]:font-semibold
                [&_.w-full]:w-full [&_.max-w-md]:max-w-md [&_.text-center]:text-center
                [&_.bg-pink\/10]:bg-pink/10 [&_.border-pink\/30]:border-pink/30 [&_.text-pink]:text-pink [&_.w-64]:w-64
              "
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />

            <div className="mt-16 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 bg-graphite/30 p-8 rounded-2xl">
              <div>
                <p className="text-sm text-offwhite/60 mb-2">Interested in this service?</p>
                <Link to={`/services/${post.serviceSlug}`} className="text-xl font-semibold text-pink hover:text-yellow transition-colors">
                  Explore our {post.category} services &rarr;
                </Link>
              </div>
              <Button to="/contact" variant="primary" size="lg">Discuss Your Project</Button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}