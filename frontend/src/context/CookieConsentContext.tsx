import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

type CookieConsent = {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
  consentStatus: 'accepted_all' | 'rejected_all' | 'custom' | 'unset';
  consentTimestamp: string;
};

type ConsentContextType = {
  consent: CookieConsent;
  showBanner: boolean;
  saveConsent: (prefs: Partial<CookieConsent>, status: CookieConsent['consentStatus']) => void;
  closeBannerWithoutSaving: () => void;
};

const defaultConsent: CookieConsent = {
  necessary: true,
  functional: false,
  analytics: false,
  marketing: false,
  consentStatus: 'unset',
  consentTimestamp: '',
};

const ConsentContext = createContext<ConsentContextType | undefined>(undefined);
const STORAGE_KEY = 'fintech_cookie_consent_v1';

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<CookieConsent>(defaultConsent);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as CookieConsent;
        setConsent(parsed);
        setShowBanner(false);
      } else {
        setShowBanner(true);
      }
    } catch (e) {
      setShowBanner(true);
    }
  }, []);

  const saveConsent = (prefs: Partial<CookieConsent>, status: CookieConsent['consentStatus']) => {
    const finalConsent: CookieConsent = {
      ...consent,
      ...prefs,
      necessary: true,
      consentStatus: status,
      consentTimestamp: new Date().toISOString(),
    };
    setConsent(finalConsent);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(finalConsent));
    setShowBanner(false);
  };

  const closeBannerWithoutSaving = () => {
    saveConsent({ functional: false, analytics: false, marketing: false }, 'rejected_all');
  };

  return (
    <ConsentContext.Provider value={{ consent, showBanner, saveConsent, closeBannerWithoutSaving }}>
      {children}
    </ConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(ConsentContext);
  if (!context) throw new Error('useCookieConsent must be used within CookieConsentProvider');
  return context;
}