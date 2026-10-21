import { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { primaryNav, site } from '../../config/site';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useLockBodyScroll(open);

  // Escape key closes the menu
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  return (
    <div
      className={[
        'fixed inset-0 z-[60] md:hidden transition-opacity duration-300',
        open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
      ].join(' ')}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close menu"
        className="absolute inset-0 bg-jet/80 backdrop-blur-sm"
        tabIndex={-1}
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={[
          'absolute right-0 top-0 h-full w-[85%] max-w-sm',
          'bg-graphite/95 backdrop-blur-md border-l border-white/[0.08]',
          'flex flex-col transition-transform duration-300 ease-out',
          open ? 'translate-x-0' : 'translate-x-full',
        ].join(' ')}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-white/[0.06]">
          <span className="font-display text-sm font-bold tracking-tight">
            <span className="text-offwhite">FINTECH</span>{' '}
            <span className="text-pink">IT</span>{' '}
            <span className="text-offwhite">SOLUTIONS</span>
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-offwhite/15 text-offwhite"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 3L13 13M13 3L3 13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 py-6" aria-label="Mobile primary">
          <ul className="flex flex-col gap-1">
            {primaryNav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  onClick={onClose}
                  className={({ isActive }) =>
                    [
                      'block rounded-xl px-4 py-3 text-base font-medium transition-colors',
                      isActive
                        ? 'bg-pink/10 text-pink'
                        : 'text-offwhite/80 hover:bg-white/[0.04] hover:text-offwhite',
                    ].join(' ')
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="px-6 py-6 border-t border-white/[0.06]">
          <Link
            to="/contact"
            onClick={onClose}
            className="flex w-full items-center justify-center rounded-full bg-pink px-6 py-3 text-sm font-semibold text-jet transition-colors hover:bg-yellow"
          >
            Start a Project
          </Link>
          <a
            href={`mailto:${site.email}`}
            className="mt-4 block text-center text-xs text-offwhite/50 hover:text-offwhite"
          >
            {site.email}
          </a>
        </div>
      </aside>
    </div>
  );
}