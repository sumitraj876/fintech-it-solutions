import { Link } from 'react-router-dom';
import { Mail, Instagram } from 'lucide-react';
import { footerNav, primaryNav, site } from '../../config/site';

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-jet">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          
          {/* Brand column */}
          <div className="md:col-span-5">
            <Link
              to="/"
              className="font-display text-lg font-bold tracking-tight inline-block"
              aria-label={`${site.company.name} — home`}
            >
              <span className="text-offwhite">FINTECH</span>{' '}
              <span className="text-pink">IT</span>{' '}
              <span className="text-offwhite">SOLUTIONS</span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-offwhite/55 leading-relaxed">
              {site.company.description} Founded {site.founded} by{' '}
              {site.founder.name}, {site.founder.role}.
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow">
              Explore
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              {primaryNav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-offwhite/70 transition-colors hover:text-offwhite"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in touch (Icons) */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow">
              Get in touch
            </h3>
            <div className="mt-4 flex items-center gap-4">
              {/* Mail Icon - Updated to professional email */}
              <a
                href="mailto:hello@fintechitsolutions.in"
                aria-label="Email us"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.10] bg-white/[0.02] text-offwhite/70 transition-all hover:border-pink hover:bg-pink/10 hover:text-pink"
              >
                <Mail size={18} />
              </a>

              {/* Instagram Icon - Updated to new subdomain */}
              <a
                href="https://instagram.fintechitsolutions.in"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.10] bg-white/[0.02] text-offwhite/70 transition-all hover:border-pink hover:bg-pink/10 hover:text-pink"
              >
                <Instagram size={18} />
              </a>
            </div>
            
            <ul className="mt-6 flex flex-col gap-3">
              {footerNav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-offwhite/70 transition-colors hover:text-pink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 md:mt-16 border-t border-white/[0.06] pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-xs text-offwhite/40">
              &copy; {year} {site.company.name}. All rights reserved.
            </p>
            <p className="text-xs text-offwhite/40">
              Service coverage: Pune &middot; Bengaluru &middot; Noida
            </p>
          </div>
          
          {/* Legal Links */}
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-offwhite/50">
            <Link to="/privacy" className="hover:text-pink transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-pink transition-colors">Terms of Service</Link>
            <Link to="/license" className="hover:text-pink transition-colors">Licensing</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}