import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  const reduce = useReducedMotion();
  const shouldReduce = reduce === true;

  return (
    <div className="relative pt-32 md:pt-40 pb-16 md:pb-20 overflow-hidden">
      
      {/* Fade at the bottom to blend into the next section */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-jet pointer-events-none -z-10" />

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-8 lg:px-12 z-10">
        <motion.div
          initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
          animate={shouldReduce ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-yellow mb-4">
            {eyebrow}
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-offwhite leading-[1.05] tracking-tight max-w-4xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-base md:text-lg text-offwhite/65 leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </motion.div>
      </div>
    </div>
  );
}