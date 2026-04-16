"use client";

import { useSyncExternalStore } from "react";
import CookieConsent from "@/components/cookies/CookieConsent";

export default function CookieConsentMount() {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  if (!mounted) {
    return null;
  }

  return <CookieConsent />;
}
