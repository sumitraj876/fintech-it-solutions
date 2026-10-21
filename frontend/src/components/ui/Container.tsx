import type { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  className?: string;
  size?: 'default' | 'narrow' | 'wide';
};

const sizeClasses: Record<NonNullable<ContainerProps['size']>, string> = {
  narrow: 'max-w-3xl',
  default: 'max-w-6xl',
  wide: 'max-w-7xl',
};

export function Container({ children, className = '', size = 'default' }: ContainerProps) {
  return (
    <div className={`mx-auto w-full px-6 md:px-8 lg:px-12 ${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
}