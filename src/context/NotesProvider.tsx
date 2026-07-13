'use client';

import React, { useState } from 'react';
import { NotesContext } from './NotesContext';
import { Note } from '@/types';

export function NotesProvider({ children }: { children: React.ReactNode }) {
  const [notes, setNotes] = useState<Note[]>([]);

  function addNote(newNote: Note) {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  function updateNote(noteId: string, updates: Partial<Note>) {
    setNotes(
      notes.map((note) => {
        if (note.id === noteId) {
          return { ...note, ...updates };
        }
        return note;
      }),
    );
  }

  return (
    <NotesContext
      value={{
        noteCollection: notes,
        updateNote,
        addNote,
      }}>
      {children}
    </NotesContext>
  );
}
