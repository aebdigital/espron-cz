"use client";

import { useEffect, useMemo, useState } from "react";
import {
  COOKIE_CONSENT_STORAGE_KEY,
  OPEN_COOKIE_SETTINGS_EVENT,
  defaultCookiePreferences,
  type CookiePreferences,
  type StoredCookieConsent,
} from "@/lib/cookie-consent";

type ToggleRowProps = {
  checked: boolean;
  description: string;
  disabled?: boolean;
  label: string;
  onToggle: () => void;
};

function ToggleRow({
  checked,
  description,
  disabled = false,
  label,
  onToggle,
}: ToggleRowProps) {
  return (
    <div className="flex items-start justify-between gap-5 rounded-[1.35rem] border border-border bg-light px-5 py-4">
      <div className="max-w-xl">
        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold text-foreground">{label}</p>
          {disabled ? (
            <span className="rounded-full bg-primary/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
              Vždy aktívne
            </span>
          ) : null}
        </div>
        <p className="mt-2 text-sm leading-6 text-foreground/70">
          {description}
        </p>
      </div>

      <button
        type="button"
        aria-pressed={checked}
        aria-label={label}
        disabled={disabled}
        onClick={onToggle}
        className={`relative mt-1 inline-flex h-8 w-14 shrink-0 rounded-full p-1 transition-colors ${
          checked ? "bg-primary" : "bg-border"
        } ${disabled ? "cursor-not-allowed opacity-75" : ""}`}
      >
        <span
          className={`h-6 w-6 rounded-full bg-white shadow-[0_6px_18px_rgba(15,29,74,0.18)] transition-transform ${
            checked ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}

function readStoredConsent(): StoredCookieConsent | null {
  try {
    const raw = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (!raw) {
      return null;
    }

    const parsed = JSON.parse(raw) as StoredCookieConsent;
    if (!parsed?.preferences) {
      return null;
    }

    return {
      updatedAt: parsed.updatedAt,
      preferences: {
        necessary: true,
        analytics: Boolean(parsed.preferences.analytics),
        marketing: Boolean(parsed.preferences.marketing),
      },
    };
  } catch {
    return null;
  }
}

function getInitialState() {
  const stored = readStoredConsent();
  return {
    preferences: stored?.preferences ?? defaultCookiePreferences,
    showBanner: !stored,
  };
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(() => getInitialState().showBanner);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(
    () => getInitialState().preferences,
  );

  const saveConsent = (nextPreferences: CookiePreferences) => {
    const payload: StoredCookieConsent = {
      updatedAt: new Date().toISOString(),
      preferences: nextPreferences,
    };

    window.localStorage.setItem(
      COOKIE_CONSENT_STORAGE_KEY,
      JSON.stringify(payload),
    );
    setPreferences(nextPreferences);
    setShowBanner(false);
    setShowSettings(false);
  };

  useEffect(() => {
    const onOpen = () => {
      const stored = readStoredConsent();
      setPreferences(stored?.preferences ?? defaultCookiePreferences);
      setShowSettings(true);
    };

    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, onOpen);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showSettings ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showSettings]);

  const settingsRows = useMemo(
    () => [
      {
        key: "necessary" as const,
        label: "Nevyhnutné cookies",
        description:
          "Zabezpečujú základné fungovanie stránky, navigácie a bezpečnosť formulárov.",
        disabled: true,
      },
      {
        key: "analytics" as const,
        label: "Analytické cookies",
        description:
          "Pomáhajú nám pochopiť, ktoré stránky fungujú najlepšie a kde máme zlepšiť obsah.",
      },
      {
        key: "marketing" as const,
        label: "Marketingové cookies",
        description:
          "Používajú sa na relevantnejšie kampane a meranie reklamných aktivít naprieč kanálmi.",
      },
    ],
    [],
  );

  return (
    <>
      {showBanner ? (
        <div className="fixed inset-x-0 bottom-0 z-[70] px-4 pb-4 md:px-6 md:pb-6">
          <div className="mx-auto max-w-6xl rounded-[1.9rem] border border-white/20 bg-primary-dark/96 p-6 text-white shadow-[0_25px_80px_rgba(10,17,44,0.38)] backdrop-blur-2xl md:p-7">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/45">
                  Cookies
                </p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
                  Používame cookies pre funkčnosť, analytiku a marketing.
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/72 md:text-base">
                  Nevyhnutné cookies držia stránku v chode. Ostatné si môžete
                  nastaviť podľa seba a kedykoľvek ich zmeniť cez odkaz
                  <span className="font-semibold text-white"> Cookies </span>
                  vo footeri.
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
                <button
                  type="button"
                  onClick={() => setShowSettings(true)}
                  className="shrink-0 rounded-full border border-white/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:bg-white/10"
                >
                  Nastavenia cookies
                </button>
                <button
                  type="button"
                  onClick={() =>
                    saveConsent({
                      necessary: true,
                      analytics: false,
                      marketing: false,
                    })
                  }
                  className="shrink-0 rounded-full border border-white/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:bg-white/10"
                >
                  Len nevyhnutné
                </button>
                <button
                  type="button"
                  onClick={() =>
                    saveConsent({
                      necessary: true,
                      analytics: true,
                      marketing: true,
                    })
                  }
                  className="shrink-0 rounded-full bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary transition-colors hover:bg-white/90"
                >
                  Prijať všetko
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {showSettings ? (
        <div
          className="fixed inset-0 z-[80] flex items-end bg-primary-dark/55 px-4 py-4 backdrop-blur-sm md:items-center md:justify-center md:px-6"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setShowSettings(false);
            }
          }}
        >
          <div className="w-full max-w-3xl rounded-[2rem] border border-border bg-white p-6 shadow-[0_28px_80px_rgba(12,18,42,0.26)] md:p-8">
            <div className="flex items-start justify-between gap-6">
              <div className="max-w-2xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/55">
                  Cookie settings
                </p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                  Nastavenia cookies
                </h2>
                <p className="mt-4 text-sm leading-7 text-foreground/70 md:text-base">
                  Vyberte, ktoré kategórie môžeme používať. Nevyhnutné cookies
                  ostávajú zapnuté vždy, ostatné sú na vašom rozhodnutí.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowSettings(false)}
                className="rounded-full border border-border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/65 transition-colors hover:bg-light hover:text-foreground"
              >
                Zavrieť
              </button>
            </div>

            <div className="mt-8 space-y-4">
              {settingsRows.map((row) => (
                <ToggleRow
                  key={row.key}
                  checked={preferences[row.key]}
                  description={row.description}
                  disabled={row.disabled}
                  label={row.label}
                  onToggle={() => {
                    if (row.disabled) {
                      return;
                    }

                    setPreferences((current) => ({
                      ...current,
                      [row.key]: !current[row.key],
                    }));
                  }}
                />
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:flex-wrap sm:justify-between">
              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() =>
                    setPreferences({
                      necessary: true,
                      analytics: false,
                      marketing: false,
                    })
                  }
                  className="rounded-full border border-border px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-foreground/70 transition-colors hover:bg-light hover:text-foreground"
                >
                  Len nevyhnutné
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setPreferences({
                      necessary: true,
                      analytics: true,
                      marketing: true,
                    })
                  }
                  className="rounded-full border border-border px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-foreground/70 transition-colors hover:bg-light hover:text-foreground"
                >
                  Povoliť všetko
                </button>
              </div>

              <button
                type="button"
                onClick={() => saveConsent(preferences)}
                className="rounded-full bg-primary px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:bg-primary-dark"
              >
                Uložiť nastavenia
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
