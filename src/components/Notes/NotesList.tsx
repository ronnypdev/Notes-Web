'use client';

import { useContext } from 'react';
import { NotesContext } from '@/context/NotesContext';

import { useRouter, useParams, useSearchParams } from 'next/navigation';
import { normalizeQuery, noteMatchesQuery } from '@/lib/utilities/search';

import NoteItem from '@/components/NoteItem/NoteItem';
import { Button } from '@/components/ui/button';
import { PlusIcon } from '@/components/icons';

interface NotesListProps {
  basePath: string;
}

export default function NotesList({ basePath }: NotesListProps) {
  const { noteCollection, createDraft, hasDraft } = useContext(NotesContext);
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  // The note currently open, read from the URL
  const activeNoteId = typeof params.id === 'string' ? params.id : undefined;

  const isSearch = basePath === 'search';
  const rawQuery = (searchParams.get('q') ?? '').trim(); // as typed, for display
  const query = normalizeQuery(rawQuery); // canonical, for matching

  // One collection feeds every route; each route derives its own view.
  const routeNotes = noteCollection.filter((note) => {
    if (basePath === 'archivenotes') return note.archive === true;
    if (basePath === 'allnotes') return !note.archive;
    return true; // search spans archived and active notes
  });

  const visibleNotes =
    isSearch && query
      ? routeNotes.filter((note) => noteMatchesQuery(note, query))
      : routeNotes;

  // Clicking a result carries the query along so the list survives the trip.
  const queryString =
    isSearch && rawQuery ? `?q=${encodeURIComponent(rawQuery)}` : '';

  function insertItem() {
    const newDraftId = createDraft();
    if (newDraftId) {
      router.push(`/allnotes/${newDraftId}`);
    }
  }

  // Search with nothing typed yet: prompt rather than dump the whole collection.
  if (isSearch && !query) {
    return (
      <p className="text-center text-neutral-600 font-sans text-sm leading-[1.3] tracking-[-0.0125rem]">
        Start typing to search by title, content, or tags.
      </p>
    );
  }

  return (
    <>
      {!isSearch && basePath !== 'archivenotes' && (
        <Button
          className="w-full mb-200 hidden lg:block"
          onClick={insertItem}
          disabled={hasDraft}>
          + Create New Note
        </Button>
      )}

      {visibleNotes.length === 0 && (
        <div className="text-center text-neutral-600 font-sans text-sm leading-[1.3] tracking-[-0.0125rem]">
          <p>{isSearch ? `No notes match “${rawQuery}”.` : 'No notes found'}</p>
        </div>
      )}

      {visibleNotes.map((note) => (
        <NoteItem
          key={note.id}
          {...note}
          basePath={`/${basePath}/${note.id}${queryString}`}
          isActive={note.id === activeNoteId}
        />
      ))}

      {!isSearch && basePath !== 'archivenotes' && (
        <Button variant="mobileCreate" onClick={insertItem} disabled={hasDraft}>
          <PlusIcon className="size-6" />
        </Button>
      )}
    </>
  );
}
