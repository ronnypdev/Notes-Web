'use client';

import { useContext } from 'react';
import { NotesContext } from '@/context/NotesContext';

import { Button } from '@/components/ui/button';
import NoteItem from '@/components/NoteItem/NoteItem';
import { PlusIcon } from '@/components/icons';

interface NotesListProps {
  basePath: string;
}

export default function NotesList({ basePath }: NotesListProps) {
  const { noteCollection } = useContext(NotesContext);

  return (
    <>
      {basePath !== 'archivenotes' && basePath !== 'search' && (
        <Button className="w-full mb-200 hidden lg:block">
          + Create New Note
        </Button>
      )}

      {noteCollection.map((note) => (
        <NoteItem key={note.id} {...note} basePath={basePath} />
      ))}

      {basePath !== 'archivenotes' && basePath !== 'search' && (
        <Button variant="mobileCreate">
          <PlusIcon className="size-6" />
        </Button>
      )}
    </>
  );
}
