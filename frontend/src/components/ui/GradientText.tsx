import type { ReactNode } from 'react';

type GradientTextProps = {
  children: ReactNode;
  className?: string;
  variant?: 'pink-yellow' | 'pink-only';
};

const gradients = {
  'pink-yellow': 'bg-gradient-to-r from-pink via-pink to-yellow',
  'pink-only': 'bg-gradient-to-r from-pink to-pink',
};

export function GradientText({
  children,
  className = '',
  variant = 'pink-yellow',
}: GradientTextProps) {
  return (
    <span
      className={`inline-block bg-clip-text text-transparent ${gradients[variant]} ${className}`}
    >
      {children}
    </span>
  );
}