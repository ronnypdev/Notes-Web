import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from '@/db';
import { user, session, account, verification } from '@/db/schema/auth-schema';
import { sendEmail } from './emails';

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema: { user, session, account, verification },
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
    sendResetPassword: async ({ user, url }) => {
      void sendEmail({
        username: user.name,
        fromEmail: 'ronnpdev@ronthesweexperiments.us',
        userEmail: user.email,
        emailSubject: 'Request to reset your password',
        resetLink: url,
      });
    },
  },

  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,
});
