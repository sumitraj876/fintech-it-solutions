import type { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
  as?: 'div' | 'article' | 'li';
};

export function Card({
  children,
  className = '',
  interactive = false,
  as: Tag = 'div',
}: CardProps) {
  const interactiveClass = interactive
    ? 'transition-all duration-300 hover:border-pink/40 hover:shadow-[0_0_32px_rgba(255,22,138,0.15)] hover:-translate-y-1'
    : '';

  return (
    <Tag
      className={`relative rounded-2xl border border-white/[0.08] bg-graphite/40 backdrop-blur-sm p-6 md:p-8 ${interactiveClass} ${className}`}
    >
      {children}
    </Tag>
  );
}