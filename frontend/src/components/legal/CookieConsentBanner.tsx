import { useState } from 'react';
import { Shield, X, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCookieConsent } from '../../context/CookieConsentContext';

export function CookieConsentBanner() {
  const { showBanner, consent, saveConsent, closeBannerWithoutSaving } = useCookieConsent();
  const [view, setView] = useState<'banner' | 'preferences'>('banner');
  const [prefs, setPrefs] = useState({
    functional: consent.functional,
    analytics: consent.analytics,
    marketing: consent.marketing,
  });

  if (!showBanner) return null;

  const handleAcceptAll = () => {
    saveConsent({ functional: true, analytics: true, marketing: true }, 'accepted_all');
    setView('banner');
  };

  const handleRejectAll = () => {
    saveConsent({ functional: false, analytics: false, marketing: false }, 'rejected_all');
    setView('banner');
  };

  const handleSaveCustom = () => {
    saveConsent(prefs, 'custom');
    setView('banner');
  };

  const handleClose = () => {
    if (view === 'preferences') {
      setView('banner');
    } else {
      closeBannerWithoutSaving();
    }
  };

  const togglePref = (key: keyof typeof prefs) => {
    setPrefs((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90]" onClick={handleClose} />
      <div className="fixed bottom-0 left-0 right-0 z-[100] bg-jet border-t border-white/10 shadow-2xl">
        <div className="max-w-7xl mx-auto p-6 md:p-8">
          {view === 'banner' ? (
            <>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <Shield className="text-pink shrink-0" size={28} />
                  <h2 className="text-xl md:text-2xl font-display font-bold text-offwhite">Your Privacy Matters</h2>
                </div>
                <button onClick={handleClose} aria-label="Close banner" className="text-offwhite/50 hover:text-offwhite transition-colors shrink-0">
                  <X size={22} />
                </button>
              </div>
              <p className="text-sm text-offwhite/70 leading-relaxed mb-6 max-w-4xl">
                We use cookies and similar technologies to keep our website secure, improve its functionality,
                understand website performance and, where permitted, support marketing activities. Some cookies
                are essential for the website to operate. Optional cookies are used only according to your
                preferences and applicable consent requirements. You can accept all cookies, reject optional
                cookies or customize your preferences at any time.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex gap-4 text-xs">
                  <Link to="/privacy-policy" className="text-pink hover:underline">Privacy Policy</Link>
                  <Link to="/cookie-policy" className="text-pink hover:underline">Cookie Policy</Link>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button onClick={() => setView('preferences')} className="px-5 py-2.5 rounded-full border border-white/20 text-offwhite font-semibold hover:bg-white/5 transition-colors text-sm">
                    Customize Preferences
                  </button>
                  <button onClick={handleRejectAll} className="px-5 py-2.5 rounded-full border border-white/20 text-offwhite font-semibold hover:bg-white/5 transition-colors text-sm">
                    Reject All
                  </button>
                  <button onClick={handleAcceptAll} className="px-5 py-2.5 rounded-full bg-pink text-jet font-semibold hover:bg-yellow transition-colors text-sm">
                    Accept All
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-start justify-between gap-4 mb-4">
                <h2 className="text-xl md:text-2xl font-display font-bold text-offwhite">Customize Preferences</h2>
                <button onClick={handleClose} aria-label="Close preferences" className="text-offwhite/50 hover:text-offwhite transition-colors shrink-0">
                  <X size={22} />
                </button>
              </div>
              <p className="text-sm text-offwhite/70 mb-6">
                Choose which optional cookie categories you want to allow. Strictly necessary cookies are required for the site to function.
              </p>
              <div className="space-y-3 mb-6 max-h-[40vh] overflow-y-auto pr-2">
                <div className="flex items-center justify-between gap-4 p-4 rounded-xl bg-graphite/50 border border-white/5">
                  <div>
                    <h4 className="text-sm font-semibold text-offwhite">Strictly Necessary</h4>
                    <p className="text-xs text-offwhite/60 mt-1">Required for the site to function. Cannot be disabled.</p>
                  </div>
                  <div className="relative inline-flex items-center shrink-0 w-11 h-6 rounded-full bg-pink/70 opacity-60 cursor-not-allowed">
                    <span className="absolute left-6 top-1 bg-white w-4 h-4 rounded-full" />
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4 p-4 rounded-xl bg-graphite/50 border border-white/5">
                  <div>
                    <h4 className="text-sm font-semibold text-offwhite">Functional</h4>
                    <p className="text-xs text-offwhite/60 mt-1">Remember user preferences and choices.</p>
                  </div>
                  <button onClick={() => togglePref('functional')} role="switch" aria-checked={prefs.functional}
                    className={`relative inline-flex items-center shrink-0 w-11 h-6 rounded-full transition-colors ${prefs.functional ? 'bg-pink' : 'bg-white/20'}`}>
                    <span className={`absolute top-1 bg-white w-4 h-4 rounded-full transition-transform ${prefs.functional ? 'left-6' : 'left-1'}`} />
                  </button>
                </div>
                <div className="flex items-center justify-between gap-4 p-4 rounded-xl bg-graphite/50 border border-white/5">
                  <div>
                    <h4 className="text-sm font-semibold text-offwhite">Analytics</h4>
                    <p className="text-xs text-offwhite/60 mt-1">Help us understand website usage and performance.</p>
                  </div>
                  <button onClick={() => togglePref('analytics')} role="switch" aria-checked={prefs.analytics}
                    className={`relative inline-flex items-center shrink-0 w-11 h-6 rounded-full transition-colors ${prefs.analytics ? 'bg-pink' : 'bg-white/20'}`}>
                    <span className={`absolute top-1 bg-white w-4 h-4 rounded-full transition-transform ${prefs.analytics ? 'left-6' : 'left-1'}`} />
                  </button>
                </div>
                <div className="flex items-center justify-between gap-4 p-4 rounded-xl bg-graphite/50 border border-white/5">
                  <div>
                    <h4 className="text-sm font-semibold text-offwhite">Marketing</h4>
                    <p className="text-xs text-offwhite/60 mt-1">Support campaign measurement and advertising activities.</p>
                  </div>
                  <button onClick={() => togglePref('marketing')} role="switch" aria-checked={prefs.marketing}
                    className={`relative inline-flex items-center shrink-0 w-11 h-6 rounded-full transition-colors ${prefs.marketing ? 'bg-pink' : 'bg-white/20'}`}>
                    <span className={`absolute top-1 bg-white w-4 h-4 rounded-full transition-transform ${prefs.marketing ? 'left-6' : 'left-1'}`} />
                  </button>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-end gap-3">
                <button onClick={handleRejectAll} className="px-5 py-2.5 rounded-full border border-white/20 text-offwhite font-semibold hover:bg-white/5 transition-colors text-sm">
                  Reject All
                </button>
                <button onClick={handleAcceptAll} className="px-5 py-2.5 rounded-full border border-white/20 text-offwhite font-semibold hover:bg-white/5 transition-colors text-sm">
                  Accept All
                </button>
                <button onClick={handleSaveCustom} className="px-5 py-2.5 rounded-full bg-pink text-jet font-semibold hover:bg-yellow transition-colors text-sm flex items-center justify-center gap-2">
                  <Check size={16} /> Save My Preferences
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}