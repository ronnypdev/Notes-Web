import { Note } from '@/types';

/** Only the fields search actually reads — keeps callers and tests light. */
export type SearchableNote = Pick<Note, 'title' | 'content' | 'tags'>;

/**
 * Canonical form for a search query: trimmed, internal whitespace
 * collapsed, lowercased. Returns '' for a query with nothing to match,
 * which callers treat as "no active search".
 */
export function normalizeQuery(raw: string | null | undefined): string {
  return (raw ?? '').trim().replace(/\s+/g, ' ').toLowerCase();
}

/**
 * True when the query appears as a substring of the note's title,
 * content, or any one of its tags. The whole query is matched as a
 * single string — "react hooks" will not match a note containing
 * "react" and "hooks" separately.
 *
 * `query` is expected to be already normalized. An empty query matches
 * everything, so callers must branch on it before filtering.
 */
export function noteMatchesQuery(note: SearchableNote, query: string): boolean {
  if (!query) return true;

  const title = note.title?.toLowerCase() ?? '';
  if (title.includes(query)) return true;

  const content = note.content?.toLowerCase() ?? '';
  if (content.includes(query)) return true;

  return (note.tags ?? []).some((tag) => tag.toLowerCase().includes(query));
}
