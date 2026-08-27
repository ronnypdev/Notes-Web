export const MAX_TAGS = 5;
export const MAX_TAG_LENGTH = 20;

/** Trim, collapse internal whitespace, cap length  */
export function normalizeTag(raw: string): string {
  return raw.trim().replace(/\s+/g, ' ').slice(0, MAX_TAG_LENGTH).trim();
}

/**
 * Canonical from for a note's tag list: drops empties, dedupes
 * case-insensitively (keeping the casing the user typed first)
 * and caps the count at MAX_TAGS
 */
export function normalizeTags(
  raw: readonly string[] | null | undefined,
): string[] {
  const seen = new Set<string>();
  const out: string[] = [];

  for (const candidate of raw ?? []) {
    const tag = normalizeTag(candidate);
    if (!tag) continue;

    const key = tag.toLowerCase();
    if (seen.has(key)) continue;

    seen.add(key);
    out.push(tag);

    if (out.length >= MAX_TAGS) break;
  }

  return out;
}
