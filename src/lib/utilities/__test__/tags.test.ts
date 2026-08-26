import { describe, test, expect } from 'vitest';
import {
  normalizeTag,
  normalizeTags,
  MAX_TAGS,
  MAX_TAG_LENGTH,
} from '@/lib/utilities/tags';

describe('normalizeTag', () => {
  test('trims surrounding whitespace', () => {
    expect(normalizeTag('  work  ')).toBe('work');
  });

  test('collapses internal whitespace', () => {
    expect(normalizeTag('side   project')).toBe('side project');
  });

  test('caps length without leaving a trailing space', () => {
    const result = normalizeTag('a'.repeat(MAX_TAG_LENGTH + 10));
    expect(result).toHaveLength(MAX_TAG_LENGTH);
    expect(result).toBe(result.trim());
  });
});

describe('normalizeTags', () => {
  test('returns an empty array for null or undefined', () => {
    expect(normalizeTags(null)).toEqual([]);
    expect(normalizeTags(undefined)).toEqual([]);
  });

  test('drops empty and whitespace-only entries', () => {
    expect(normalizeTags(['work', '', '   ', 'dev'])).toEqual(['work', 'dev']);
  });

  test('dedupes case-insensitively, keeping the first casing typed', () => {
    expect(normalizeTags(['Dev', 'dev', 'DEV'])).toEqual(['Dev']);
  });

  test('preserves intentional casing', () => {
    expect(normalizeTags(['TypeScript', 'React'])).toEqual([
      'TypeScript',
      'React',
    ]);
  });

  test('caps the list at MAX_TAGS', () => {
    expect(normalizeTags(['a', 'b', 'c', 'd', 'e', 'f', 'g'])).toHaveLength(
      MAX_TAGS,
    );
  });
});
