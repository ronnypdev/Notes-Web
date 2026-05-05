import { describe, test, expect } from 'vitest';
import { resetPasswordSchema } from '@/lib/zod';

describe('resetPasswordSchema validation', () => {
  test('accepts matching valid passwords', () => {
    const result = resetPasswordSchema.safeParse({
      newPassword: 'securepassword',
      confirmPassword: 'securepassword',
    });
    expect(result.success).toBe(true);
  });

  test('rejects a newPassword shorter than 8 characters', () => {
    const result = resetPasswordSchema.safeParse({
      newPassword: 'short',
      confirmPassword: 'short',
    });
    expect(result.success).toBe(false);
    const errors = result.error?.issues.filter((i) =>
      i.path.includes('newPassword'),
    );
    expect(errors?.length).toBeGreaterThan(0);
  });

  test('rejects an empty newPassword', () => {
    const result = resetPasswordSchema.safeParse({
      newPassword: '',
      confirmPassword: 'securepassword',
    });
    expect(result.success).toBe(false);
  });

  test('rejects an empty confirmPassword', () => {
    const result = resetPasswordSchema.safeParse({
      newPassword: 'securepassword',
      confirmPassword: '',
    });
    expect(result.success).toBe(false);
  });

  test('rejects when passwords do not match', () => {
    const result = resetPasswordSchema.safeParse({
      newPassword: 'securepassword',
      confirmPassword: 'differentpassword',
    });
    expect(result.success).toBe(false);
    const errors = result.error?.issues.filter((i) =>
      i.path.includes('confirmPassword'),
    );
    expect(errors?.length).toBeGreaterThan(0);
  });
});
