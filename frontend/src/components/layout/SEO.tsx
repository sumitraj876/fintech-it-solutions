import { useSeo } from '../../lib/seo';

export type SEOProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
};

export function SEO(props: SEOProps) {
  useSeo(props);
  return null;
}