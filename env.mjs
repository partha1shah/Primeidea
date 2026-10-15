import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /*
   * Serverside Environment variables, not available on the client.
   * Will throw if you access these variables on the client.
   */
  server: {
    WORDPRESS_REVALIDATE_SECRET: z.string().min(1),
    WP_ENDPOINT: z.string().url(),
    /** Cloudflare Turnstile secret — required for /api/lead form submissions */
    TURNSTILE_SECRET_KEY: z.string().min(1).optional(),
    // WORDPRESS_AUTH_REFRESH_TOKEN: z.string(),
  },
  /*
   * Environment variables available on the client (and server).
   *
   * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
   */
  client: {
    NEXT_PUBLIC_TURNSTILE_SITE_KEY: z.string().min(1).optional(),
  },
  /*
   * Due to how Next.js bundles environment variables on Edge and Client, 
   * we need to manually destructure them to make sure all are included in bundle.
   *
   * 💡 You'll get type errors if not all variables from `server` & `client` are included here.
   */
  runtimeEnv: {
    WP_ENDPOINT: process.env.WP_ENDPOINT,
    WORDPRESS_REVALIDATE_SECRET: process.env.WORDPRESS_REVALIDATE_SECRET,
    TURNSTILE_SECRET_KEY: process.env.TURNSTILE_SECRET_KEY,
    NEXT_PUBLIC_TURNSTILE_SITE_KEY: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
    // WORDPRESS_AUTH_REFRESH_TOKEN: process.env.WORDPRESS_AUTH_REFRESH_TOKEN,
  },
});