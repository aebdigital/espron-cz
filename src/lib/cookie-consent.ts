export const COOKIE_CONSENT_STORAGE_KEY = "espron-cookie-consent";
export const OPEN_COOKIE_SETTINGS_EVENT = "espron:open-cookie-settings";

export type CookiePreferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

export type StoredCookieConsent = {
  updatedAt: string;
  preferences: CookiePreferences;
};

export const defaultCookiePreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};
