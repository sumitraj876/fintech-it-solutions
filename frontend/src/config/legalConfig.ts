export const companyLegalConfig = {
  companyName: "FINTECH IT SOLUTIONS",
  website: "https://www.fintechitsolutions.in",
  legalEntityName: "FINTECH IT SOLUTIONS",
  registeredAddress: "India",
  contactEmail: "hello@fintechitsolutions.in",
  privacyEmail: "hello@fintechitsolutions.in",
  phone: "",
  effectiveDate: "October 30, 2026",
  privacyPolicyVersion: "1.0",
  cookiePolicyVersion: "1.0",
  consentVersion: "1.0",
  consentExpiryDays: 180,
};

export type CookieCategory = 'necessary' | 'functional' | 'analytics' | 'marketing';

export type CookieConsent = {
  necessary: true;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
  consentStatus: 'accepted_all' | 'rejected_all' | 'custom';
  consentTimestamp: string;
  policyVersion: string;
  consentVersion: string;
};

export const defaultConsent: CookieConsent = {
  necessary: true,
  functional: false,
  analytics: false,
  marketing: false,
  consentStatus: 'custom',
  consentTimestamp: '',
  policyVersion: companyLegalConfig.cookiePolicyVersion,
  consentVersion: companyLegalConfig.consentVersion,
};