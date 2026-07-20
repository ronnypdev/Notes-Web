'use client';

import React, { useState } from 'react';
import { NotesContext } from './NotesContext';
import { Note } from '@/types';
import { fetchNotes } from '@/lib/utilities/notes-actions';

export function NotesProvider({
  children,
  initialNotes,
}: {
  children: React.ReactNode;
  initialNotes: Note[];
}) {
  const [notes, setNotes] = useState<Note[]>(initialNotes);

  function addNote(newNote: Note) {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  async function loadNotes() {
    try {
      const result = await fetchNotes();
      if (result.success && result.note) {
        setNotes(result.note);
      } else {
        console.log(result.message);
      }
    } catch (error) {
      console.error('Error could not read the note:', error);
    }
  }

  function updateNote(noteId: string, updates: Partial<Note>) {
    setNotes((prev) =>
      prev.map((note) => {
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
        loadNotes,
      }}>
      {children}
    </NotesContext>
  );
}
