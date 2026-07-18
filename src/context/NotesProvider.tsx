'use client';

import React, { useState } from 'react';
import { NotesContext } from './NotesContext';
import { Note } from '@/types';
import { readNote } from '@/lib/utilities/notes-actions';

export function NotesProvider({ children }: { children: React.ReactNode }) {
  const [notes, setNotes] = useState<Note[]>([]);
  const [defaultNote, setDefaultNote] = useState<Note>();

  function addNote(newNote: Note) {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  async function readsNote() {
    try {
      const result = await readNote();
      if (result.success && result.note) {
        setDefaultNote(result.note[0]);
      } else {
        console.log(result.message);
      }
    } catch (error) {
      console.error('Error could not read the note:', error);
    }
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
        readsNote,
      }}>
      {children}
    </NotesContext>
  );
}
