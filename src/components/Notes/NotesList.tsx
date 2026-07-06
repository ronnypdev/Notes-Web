'use client';

import { useContext } from 'react';
import { NotesContext } from '@/context/NotesContext';

import {
  createNote,
  readNote,
  updateNote,
  deleteNote,
} from '@/lib/utilities/notes-actions';

import NoteItem from '@/components/NoteItem/NoteItem';
import { Button } from '@/components/ui/button';
import { PlusIcon } from '@/components/icons';

interface NotesListProps {
  basePath: string;
}

export default function NotesList({ basePath }: NotesListProps) {
  const { noteCollection } = useContext(NotesContext);

  return (
    <form>
      {basePath !== 'archivenotes' && basePath !== 'search' && (
        <Button className="w-full mb-200 hidden lg:block" type="submit">
          + Create New Note
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
    </form>
  );
}
