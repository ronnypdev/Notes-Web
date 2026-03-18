import { betterAuth } from 'better-auth';
import { dash } from '@better-auth/infra';

export const auth = betterAuth({
  plugins: [
    // ... other plugins
    dash(),
  ],
  secret: process.env.BETTER_AUTH_SECRET,
  apiKey: process.env.BETTER_AUTH_API_KEY,
  baseURL: process.env.BETTER_AUTH_URL,
});
