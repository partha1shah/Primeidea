/**
 * Simple in-memory rate limit for lead submissions.
 * Resets on cold starts (serverless) — defense in depth with Turnstile.
 */

const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_PER_WINDOW = 8;

/** @type {Map<string, number[]>} */
const hits = new Map();

/**
 * @param {string} key
 * @returns {{ allowed: boolean, retryAfterSec?: number }}
 */
export function checkLeadRateLimit(key) {
  const now = Date.now();
  const prior = (hits.get(key) || []).filter((t) => now - t < WINDOW_MS);

  if (prior.length >= MAX_PER_WINDOW) {
    const oldest = prior[0];
    const retryAfterSec = Math.ceil((WINDOW_MS - (now - oldest)) / 1000);
    hits.set(key, prior);
    return { allowed: false, retryAfterSec };
  }

  prior.push(now);
  hits.set(key, prior);

  // Occasional prune to avoid unbounded growth
  if (hits.size > 5000) {
    for (const [k, times] of hits) {
      const recent = times.filter((t) => now - t < WINDOW_MS);
      if (recent.length === 0) hits.delete(k);
      else hits.set(k, recent);
    }
  }

  return { allowed: true };
}
