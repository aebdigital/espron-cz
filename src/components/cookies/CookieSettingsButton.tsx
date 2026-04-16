"use client";

import type { ReactNode } from "react";
import { OPEN_COOKIE_SETTINGS_EVENT } from "@/lib/cookie-consent";

type CookieSettingsButtonProps = {
  className?: string;
  children: ReactNode;
};

export default function CookieSettingsButton({
  className,
  children,
}: CookieSettingsButtonProps) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT))}
      className={className}
    >
      {children}
    </button>
  );
}
