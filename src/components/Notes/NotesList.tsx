'use client';

import { useContext, useTransition } from 'react';
import { NotesContext } from '@/context/NotesContext';

import { createNote } from '@/lib/utilities/notes-actions';

import NoteItem from '@/components/NoteItem/NoteItem';
import { Button } from '@/components/ui/button';
import { PlusIcon } from '@/components/icons';
import { Spinner } from '../ui/spinner';

import { Note } from '@/types';

type newNoteItem = Omit<Note, 'id' | 'userId'>;

interface NotesListProps {
  basePath: string;
  item: newNoteItem;
}

export default function NotesList({ basePath, item }: NotesListProps) {
  const { noteCollection } = useContext(NotesContext);
  const [isPending, startTransition] = useTransition();

  function createNoteItem() {
    startTransition(async () => {
      await createNote(item);
    });
  }

  return (
    <>
      {basePath !== 'archivenotes' && basePath !== 'search' && (
        <Button
          className="w-full mb-200 hidden lg:block"
          onClick={() => createNoteItem}>
          {isPending ? <Spinner /> : '+ Create New Note'}
        </Button>
      )}

      {noteCollection.map((note) => (
        <NoteItem key={note.id} {...note} basePath={basePath} />
      ))}

      {basePath !== 'archivenotes' && basePath !== 'search' && (
        <Button variant="mobileCreate" type="submit">
          <PlusIcon className="size-6" />
        </Button>
      )}
    </>
  );
}
