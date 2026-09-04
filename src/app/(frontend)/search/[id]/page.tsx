'use client';

import { useSearchParams } from 'next/navigation';
import NoteDetail from '@/components/Notes/NoteDetail';

export default function SearchNoteDetails() {
  const rawQuery = (useSearchParams().get('q') ?? '').trim();
  const queryString = rawQuery ? `?q=${encodeURIComponent(rawQuery)}` : '';

  // No afterStatusChangeHref: archiving or restoring from search keeps you
  // on the note, since search results span both collections.
  return <NoteDetail backHref={`/search${queryString}`} />;
}
