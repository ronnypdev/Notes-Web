'use client';

import { useContext, useTransition } from 'react';
import { NotesContext } from '@/context/NotesContext';

import { createNote } from '@/lib/utilities/notes-actions';

import NoteItem from '@/components/NoteItem/NoteItem';
import { Button } from '@/components/ui/button';
import { PlusIcon } from '@/components/icons';
import { Spinner } from '@/components/ui/spinner';
import { toast } from 'sonner';
interface NotesListProps {
  basePath: string;
}

export default function NotesList({ basePath }: NotesListProps) {
  const { noteCollection, addNote } = useContext(NotesContext);
  const [isPending, startTransition] = useTransition();

  function insertItem() {
    startTransition(async () => {
      const result = await createNote({});
      if (result.success) {
        addNote(result.note[0]);
        toast.success('Congratulations! You successfully created a new note', {
          position: 'bottom-right',
        });
      } else {
        toast.error('Error: Failed to create note', {
          position: 'bottom-right',
        });
        console.log(result.message);
      }
    });
  }

  return (
    <>
      {basePath !== 'archivenotes' && basePath !== 'search' && (
        <Button
          className="w-full mb-200 hidden lg:block"
          onClick={() => insertItem()}
          disabled={isPending}>
          {isPending ? <Spinner /> : '+ Create New Note'}
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
        <Button
          variant="mobileCreate"
          onClick={() => insertItem()}
          disabled={isPending}>
          {isPending ? <Spinner /> : <PlusIcon className="size-6" />}
        </Button>
      )}
    </>
  );
}
