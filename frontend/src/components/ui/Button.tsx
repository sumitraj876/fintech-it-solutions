import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

type ButtonAsLink = BaseProps & {
  to: string;
  href?: never;
  onClick?: never;
  type?: never;
};

type ButtonAsAnchor = BaseProps & {
  href: string;
  to?: never;
  external?: boolean;
  onClick?: never;
  type?: never;
};

type ButtonAsButton = BaseProps & {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  to?: never;
  href?: never;
};

type ButtonProps = ButtonAsLink | ButtonAsAnchor | ButtonAsButton;

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink/70 focus-visible:ring-offset-2 focus-visible:ring-offset-jet disabled:opacity-50 disabled:cursor-not-allowed';

const variants: Record<Variant, string> = {
  primary:
    'bg-pink text-jet hover:bg-yellow hover:text-jet shadow-[0_0_24px_rgba(255,22,138,0.35)]',
  secondary:
    'border border-offwhite/20 text-offwhite hover:border-pink hover:text-pink',
  ghost:
    'text-offwhite/70 hover:text-pink',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-base md:text-lg',
};

function classesFor(variant: Variant, size: Size, extra: string) {
  return `${base} ${variants[variant]} ${sizes[size]} ${extra}`;
}

export function Button(props: ButtonProps) {
  const variant = props.variant ?? 'primary';
  const size = props.size ?? 'md';
  const extra = props.className ?? '';

  if ('to' in props && typeof props.to === 'string') {
    return (
      <Link to={props.to} className={classesFor(variant, size, extra)}>
        {props.children}
      </Link>
    );
  }

  if ('href' in props && typeof props.href === 'string') {
    const isExternal = props.external ?? /^https?:\/\//.test(props.href);
    return (
      <a
        href={props.href}
        className={classesFor(variant, size, extra)}
        {...(isExternal
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
      >
        {props.children}
      </a>
    );
  }

  return (
    <button
      type={props.type ?? 'button'}
      onClick={props.onClick}
      className={classesFor(variant, size, extra)}
    >
      {props.children}
    </button>
  );
}