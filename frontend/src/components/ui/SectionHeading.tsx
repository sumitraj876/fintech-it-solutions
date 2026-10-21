import type { ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col gap-4 ${alignClass} ${className}`}>
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-5xl font-bold text-offwhite leading-tight">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base md:text-lg text-offwhite/65 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}