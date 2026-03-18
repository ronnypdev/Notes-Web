import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from '@/db';
import { dash } from '@better-auth/infra';

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
  }),
  plugins: [
    // ... other plugins
    dash(),
  ],
  secret: process.env.BETTER_AUTH_SECRET,
  apiKey: process.env.BETTER_AUTH_API_KEY,
  baseURL: process.env.BETTER_AUTH_URL,
});
