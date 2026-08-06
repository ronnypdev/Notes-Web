'use client';

import { useContext } from 'react';
import { NotesContext } from '@/context/NotesContext';

import { useRouter, useParams } from 'next/navigation';

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
  // The note currently open, read from the URL
  const activeNoteId = typeof params.id === 'string' ? params.id : undefined;

  function insertItem() {
    const newDraftId = createDraft();
    if (newDraftId) {
      router.push(`/allnotes/${newDraftId}`);
    }
  }

  return (
    <>
      {basePath !== 'archivenotes' && basePath !== 'search' && (
        <Button
          className="w-full mb-200 hidden lg:block"
          onClick={insertItem}
          disabled={hasDraft}>
          + Create New Note
        </Button>
      )}

      {noteCollection.length === 0 && (
        <div className="text-center text-gray-500">
          <p>No notes found</p>
        </div>
      )}

      {noteCollection.map((note) => (
        <NoteItem
          key={note.id}
          {...note}
          basePath={basePath}
          isActive={note.id === activeNoteId}
        />
      ))}

      {basePath !== 'archivenotes' && basePath !== 'search' && (
        <Button variant="mobileCreate" onClick={insertItem} disabled={hasDraft}>
          <PlusIcon className="size-6" />
        </Button>
      )}
    </>
  );
}
