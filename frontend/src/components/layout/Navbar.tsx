import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, ChevronDown, MapPin, Briefcase } from 'lucide-react';
import { primaryNav, site } from '../../config/site';
import { services } from '../../data/services';
import { solutions } from '../../data/solutions';
import { locations } from '../../data/locations';
import { careerRoles } from '../../data/careers';
import { MobileMenu } from './MobileMenu';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={[
          'fixed top-0 inset-x-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-jet/80 backdrop-blur-xl border-b border-white/[0.06] py-2 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent py-4',
        ].join(' ')}
      >
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6 md:px-8 lg:px-12">
          
          {/* LOGO */}
          <Link to="/" className="group flex items-center gap-3 outline-none" aria-label={`${site.company.name} — home`}>
            <img src="/images/logo.png" alt="FINTECH IT SOLUTIONS" className="h-10 w-auto transition-transform duration-300 group-hover:scale-105" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} />
            <span className="hidden font-display text-lg font-bold tracking-tight text-offwhite">FINTECH <span className="text-pink">IT</span> SOLUTIONS</span>
          </Link>

          {/* NAVIGATION */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
            {primaryNav.map((item) => {
              
              // 1. SERVICES DROPDOWN
              if (item.label === 'Services') {
                return (
                  <div key={item.to} className="relative" onMouseEnter={() => setActiveDropdown('services')} onMouseLeave={() => setActiveDropdown(null)}>
                    <NavLink to={item.to} className="flex items-center gap-1 text-sm font-medium text-offwhite/70 hover:text-offwhite transition-colors py-4">
                      Services <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180 text-pink' : ''}`} />
                    </NavLink>
                    <AnimatePresence>
                      {activeDropdown === 'services' && (
                        <motion.div initial={{ opacity: 0, y: 10, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.98 }} transition={{ duration: 0.2 }} className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] rounded-2xl border border-white/[0.08] bg-jet/95 backdrop-blur-2xl p-4 shadow-2xl">
                          <div className="grid grid-cols-2 gap-2">
                            {services.map((s) => {
                              const Icon = s.icon;
                              return (
                                <Link key={s.slug} to={`/services/${s.slug}`} className="flex items-start gap-3 rounded-xl p-3 hover:bg-white/[0.04] transition-colors group">
                                  <div className={`mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-jet border border-white/[0.05] ${s.accent === 'pink' ? 'text-pink' : 'text-yellow'}`}><Icon size={16} /></div>
                                  <div><p className="text-sm font-semibold text-offwhite group-hover:text-pink transition-colors">{s.shortTitle}</p><p className="text-xs text-offwhite/50 line-clamp-1 mt-0.5">{s.tagline}</p></div>
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              // 2. SOLUTIONS DROPDOWN
              if (item.label === 'Solutions') {
                return (
                  <div key={item.to} className="relative" onMouseEnter={() => setActiveDropdown('solutions')} onMouseLeave={() => setActiveDropdown(null)}>
                    <NavLink to={item.to} className="flex items-center gap-1 text-sm font-medium text-offwhite/70 hover:text-offwhite transition-colors py-4">
                      Solutions <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'solutions' ? 'rotate-180 text-pink' : ''}`} />
                    </NavLink>
                    <AnimatePresence>
                      {activeDropdown === 'solutions' && (
                        <motion.div initial={{ opacity: 0, y: 10, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.98 }} transition={{ duration: 0.2 }} className="absolute top-full left-1/2 -translate-x-1/2 w-[500px] rounded-2xl border border-white/[0.08] bg-jet/95 backdrop-blur-2xl p-4 shadow-2xl">
                          <div className="grid grid-cols-1 gap-1">
                            {solutions.map((s) => {
                              const Icon = s.icon;
                              return (
                                <Link key={s.id} to={`/solutions/${s.id}`} className="flex items-center gap-3 rounded-xl p-3 hover:bg-white/[0.04] transition-colors group">
                                  <div className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-jet border border-white/[0.05] ${s.accent === 'pink' ? 'text-pink' : 'text-yellow'}`}><Icon size={16} /></div>
                                  <div><p className="text-sm font-semibold text-offwhite group-hover:text-pink transition-colors">{s.title}</p><p className="text-xs text-offwhite/50">{s.kind}</p></div>
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              // 3. LOCATIONS DROPDOWN
              if (item.label === 'Locations') {
                return (
                  <div key={item.to} className="relative" onMouseEnter={() => setActiveDropdown('locations')} onMouseLeave={() => setActiveDropdown(null)}>
                    <NavLink to={item.to} className="flex items-center gap-1 text-sm font-medium text-offwhite/70 hover:text-offwhite transition-colors py-4">
                      Locations <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'locations' ? 'rotate-180 text-pink' : ''}`} />
                    </NavLink>
                    <AnimatePresence>
                      {activeDropdown === 'locations' && (
                        <motion.div initial={{ opacity: 0, y: 10, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.98 }} transition={{ duration: 0.2 }} className="absolute top-full left-1/2 -translate-x-1/2 w-[240px] rounded-2xl border border-white/[0.08] bg-jet/95 backdrop-blur-2xl p-2 shadow-2xl">
                          {locations.map((loc) => (
                            <Link key={loc.city} to="/locations" className="flex items-center gap-3 rounded-xl p-3 hover:bg-white/[0.04] transition-colors group">
                              <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-jet border border-white/[0.05] text-pink"><MapPin size={16} /></div>
                              <div><p className="text-sm font-semibold text-offwhite group-hover:text-pink transition-colors">{loc.city}</p><p className="text-xs text-offwhite/50">{loc.region}</p></div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              // 4. CAREERS DROPDOWN
              if (item.label === 'Careers') {
                return (
                  <div key={item.to} className="relative" onMouseEnter={() => setActiveDropdown('careers')} onMouseLeave={() => setActiveDropdown(null)}>
                    <NavLink to={item.to} className="flex items-center gap-1 text-sm font-medium text-offwhite/70 hover:text-offwhite transition-colors py-4">
                      Careers <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'careers' ? 'rotate-180 text-pink' : ''}`} />
                    </NavLink>
                    <AnimatePresence>
                      {activeDropdown === 'careers' && (
                        <motion.div initial={{ opacity: 0, y: 10, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.98 }} transition={{ duration: 0.2 }} className="absolute top-full left-1/2 -translate-x-1/2 w-[300px] rounded-2xl border border-white/[0.08] bg-jet/95 backdrop-blur-2xl p-2 shadow-2xl">
                          {careerRoles.slice(0, 4).map((role) => (
                            <Link key={role.id} to="/careers" className="flex items-center gap-3 rounded-xl p-3 hover:bg-white/[0.04] transition-colors group">
                              <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-jet border border-white/[0.05] text-yellow"><Briefcase size={16} /></div>
                              <div><p className="text-sm font-semibold text-offwhite group-hover:text-pink transition-colors">{role.title}</p><p className="text-xs text-offwhite/50">{role.team}</p></div>
                            </Link>
                          ))}
                          <Link to="/careers" className="mt-1 flex items-center justify-center rounded-xl p-2 text-xs font-semibold text-pink hover:bg-pink/10 transition-colors">View all roles</Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              // STANDARD LINKS
              return (
                <NavLink key={item.to} to={item.to} className={({ isActive }) => ['relative text-sm font-medium transition-colors duration-300 py-4', isActive ? 'text-pink' : 'text-offwhite/70 hover:text-offwhite'].join(' ')} end={item.to === '/'}>
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {isActive && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink rounded-full shadow-[0_0_8px_rgba(255,22,138,0.8)]" />}
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* CTA BUTTON */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/contact" className="rounded-full bg-pink px-6 py-2.5 text-sm font-semibold text-jet transition-all duration-300 hover:bg-yellow hover:scale-105 hover:shadow-[0_0_20px_rgba(255,230,0,0.4)]">Start a Project</Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button type="button" onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.15] bg-jet/50 text-offwhite backdrop-blur-md transition-colors hover:border-pink"><Menu size={20} /></button>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}