"use client";

import { useEffect, useRef } from "react";

const SCRIPT_ID = "cf-turnstile-script";
const SCRIPT_SRC =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

/**
 * Cloudflare Turnstile widget.
 * @param {{
 *   onToken: (token: string | null) => void,
 *   resetKey?: number,
 *   theme?: "light" | "dark" | "auto",
 *   className?: string,
 * }} props
 */
export default function TurnstileWidget({
  onToken,
  resetKey = 0,
  theme = "light",
  className = "",
}) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);
  const onTokenRef = useRef(onToken);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  useEffect(() => {
    onTokenRef.current = onToken;
  }, [onToken]);

  useEffect(() => {
    if (!siteKey || !containerRef.current) return;

    let cancelled = false;

    const renderWidget = () => {
      if (cancelled || !window.turnstile || !containerRef.current) return;

      if (widgetIdRef.current !== null) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          /* already gone */
        }
        widgetIdRef.current = null;
      }

      containerRef.current.innerHTML = "";
      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        theme,
        callback: (token) => onTokenRef.current?.(token),
        "expired-callback": () => onTokenRef.current?.(null),
        "error-callback": () => onTokenRef.current?.(null),
      });
    };

    const existing = document.getElementById(SCRIPT_ID);
    if (window.turnstile) {
      renderWidget();
    } else if (existing) {
      existing.addEventListener("load", renderWidget);
    } else {
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = SCRIPT_SRC;
      script.async = true;
      script.defer = true;
      script.onload = renderWidget;
      document.head.appendChild(script);
    }

    return () => {
      cancelled = true;
      existing?.removeEventListener("load", renderWidget);
      if (widgetIdRef.current !== null && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          /* ignore */
        }
        widgetIdRef.current = null;
      }
    };
  }, [siteKey, theme, resetKey]);

  if (!siteKey) {
    return (
      <p className={`text-xs text-red-600 ${className}`.trim()}>
        Security check is not configured. Form submissions are disabled.
      </p>
    );
  }

  return (
    <div
      ref={containerRef}
      className={className}
      data-turnstile-reset={resetKey}
    />
  );
}
