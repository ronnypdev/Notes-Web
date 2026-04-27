import * as z from 'zod';

export const signUpSchema = z.object({
  email: z.email({ pattern: z.regexes.email }).min(8, 'Email is required'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export type SignUpFormValues = z.infer<typeof signUpSchema>;

export const loginSchema = z.object({
  email: z.email({ pattern: z.regexes.email }).min(8, 'Email is required'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

export const forgotPasswordSchema = z.object({
  email: z
    .email({ pattern: z.regexes.email })
    .min(8, 'Email is required to be at least 8 characters'),
});

export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

export const resetPasswordSchema = z.object({
  newPassword: z.string().min(8, 'Password must be at least 8 characters'),
  token: z.string(),
});

export type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;
