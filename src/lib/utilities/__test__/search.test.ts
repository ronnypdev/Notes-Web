import { describe, test, expect } from 'vitest';
import { normalizeQuery, noteMatchesQuery } from '@/lib/utilities/search';

const note = {
  title: 'React Performance Optimization',
  content: 'Use memo and useCallback to avoid re-renders.',
  tags: ['Dev', 'React'],
};

describe('normalizeQuery', () => {
  test('returns an empty string for null or undefined', () => {
    expect(normalizeQuery(null)).toBe('');
    expect(normalizeQuery(undefined)).toBe('');
  });

  test('trims, collapses whitespace, and lowercases', () => {
    expect(normalizeQuery('  React   Hooks ')).toBe('react hooks');
  });

  test('treats a whitespace-only query as empty', () => {
    expect(normalizeQuery('   ')).toBe('');
  });
});

describe('noteMatchesQuery', () => {
  test('matches on title, case-insensitively', () => {
    expect(noteMatchesQuery(note, 'performance')).toBe(true);
  });

  test('matches on content', () => {
    expect(noteMatchesQuery(note, 'usecallback')).toBe(true);
  });

  test('matches on a tag', () => {
    expect(noteMatchesQuery(note, 'dev')).toBe(true);
  });

  test('matches partial words', () => {
    expect(noteMatchesQuery(note, 'perf')).toBe(true);
  });

  test('matches the whole query as one string, not as tokens', () => {
    expect(noteMatchesQuery(note, 'react performance')).toBe(true);
    expect(noteMatchesQuery(note, 'react memo')).toBe(false);
  });

  test('returns false when nothing matches', () => {
    expect(noteMatchesQuery(note, 'postgres')).toBe(false);
  });

  test('survives null title, content, and tags', () => {
    const empty = { title: null, content: null, tags: null };
    expect(noteMatchesQuery(empty, 'anything')).toBe(false);
  });

  test('matches everything when the query is empty', () => {
    expect(noteMatchesQuery(note, '')).toBe(true);
  });
});
