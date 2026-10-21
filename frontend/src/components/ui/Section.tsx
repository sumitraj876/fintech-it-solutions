import type { ReactNode } from 'react';

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
};

const sizeClasses: Record<NonNullable<SectionProps['size']>, string> = {
  sm: 'py-16 md:py-20',
  md: 'py-20 md:py-28',
  lg: 'py-24 md:py-36',
};

export function Section({ children, id, className = '', size = 'md' }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative w-full ${sizeClasses[size]} ${className}`}
    >
      {children}
    </section>
  );
}