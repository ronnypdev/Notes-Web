'use client';

import { useState } from 'react';
import { NotesContext } from './NotesContext.ts';
import { Note } from '@/types';

const initialNotes: Note[];

export function NotesProvider({ children }: { children: React.ReactNode }) {
  const [notes, setNotes] = useState<Note[]>(initialNotes);

  return (
    <NotesContext value={{ noteCollection: notes, updateNote }}>
      {children}
    </NotesContext>
  );
}
