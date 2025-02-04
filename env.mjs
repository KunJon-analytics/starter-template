import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    // PRISMA
    DATABASE_URL: z.string().url(),

    // CLERK
    CLERK_SECRET_KEY: z.string().min(1),

    // MISC
    NODE_ENV: z.enum(["development", "production", "test"]),
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string().url(),

    // CLERK
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
  },
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,

    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,

    // CLERK
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
  },
});
