import { describe, test, expect } from 'vitest';
import { forgotPasswordSchema } from '@/lib/zod';

describe('forgotPasswordSchema validation', () => {
  test('accepts a valid email', () => {
    const result = forgotPasswordSchema.safeParse({
      email: 'user@example.com',
    });
    expect(result.success).toBe(true);
  });

  test('rejects an invalid email format', () => {
    const result = forgotPasswordSchema.safeParse({
      email: 'not-an-email',
    });
    expect(result.success).toBe(false);
  });

  test('rejects an empty email', () => {
    const result = forgotPasswordSchema.safeParse({
      email: '',
    });
    expect(result.success).toBe(false);
  });
});
