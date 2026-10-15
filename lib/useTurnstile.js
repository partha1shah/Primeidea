"use client";

import { useCallback, useState } from "react";

/**
 * Shared Turnstile token + reset helpers for lead forms.
 */
export function useTurnstile() {
  const [token, setToken] = useState(null);
  const [resetKey, setResetKey] = useState(0);

  const onToken = useCallback((next) => {
    setToken(next || null);
  }, []);

  const reset = useCallback(() => {
    setToken(null);
    setResetKey((key) => key + 1);
  }, []);

  return { token, resetKey, onToken, reset };
}
