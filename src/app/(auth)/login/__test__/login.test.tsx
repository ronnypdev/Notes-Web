import { describe, test, expect } from 'vitest';
import { loginSchema } from '@/lib/zod';

describe('loginSchema validation', () => {
  test('accepts a valid email and password', () => {
    const result = loginSchema.safeParse({
      email: 'user@example.com',
      password: 'securepassword',
    });
    expect(result.success).toBe(true);
  });

  test('rejects an invalid email format', () => {
    const result = loginSchema.safeParse({
      email: 'not-an-email',
      password: 'securepassword',
    });
    expect(result.success).toBe(false);
  });

  test('rejects an empty email', () => {
    const result = loginSchema.safeParse({
      email: '',
      password: 'securepassword',
    });
    expect(result.success).toBe(false);
  });

  test('rejects a password shorter than 8 characters', () => {
    const result = loginSchema.safeParse({
      email: 'user@example.com',
      password: 'short',
    });
    expect(result.success).toBe(false);
    const passwordErrors = result.error?.issues.filter((i) =>
      i.path.includes('password'),
    );
    expect(passwordErrors?.length).toBeGreaterThan(0);
  });

  test('rejects an empty password', () => {
    const result = loginSchema.safeParse({
      email: 'user@example.com',
      password: '',
    });
    expect(result.success).toBe(false);
  });
});
