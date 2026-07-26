'use client';

import { useContext } from 'react';
import { NotesContext } from '@/context/NotesContext';

import { useRouter } from 'next/navigation';

import NoteItem from '@/components/NoteItem/NoteItem';
import { Button } from '@/components/ui/button';
import { PlusIcon } from '@/components/icons';

interface NotesListProps {
  basePath: string;
}

export default function NotesList({ basePath }: NotesListProps) {
  const { noteCollection, createDraft, hasDraft } = useContext(NotesContext);
  const router = useRouter();

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
        <NoteItem key={note.id} {...note} basePath={basePath} />
      ))}

      {basePath !== 'archivenotes' && basePath !== 'search' && (
        <Button variant="mobileCreate" onClick={insertItem} disabled={hasDraft}>
          <PlusIcon className="size-6" />
        </Button>
      )}
    </>
  );
}
