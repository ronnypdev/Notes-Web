'use client';

import React, { useState } from 'react';
import { NotesContext } from './NotesContext';
import { Note, ClientNote } from '@/types';
import { fetchNotes } from '@/lib/utilities/notes-actions';

export function NotesProvider({
  children,
  initialNotes,
}: {
  children: React.ReactNode;
  initialNotes: Note[];
}) {
  const [notes, setNotes] = useState<ClientNote[]>(initialNotes);

  function addNote(newNote: ClientNote) {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  async function loadNotes() {
    try {
      const result = await fetchNotes();
      if (result.success) {
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
        loadNotes,
      }}>
      {children}
    </NotesContext>
  );
}
