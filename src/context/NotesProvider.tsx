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
  const hasDraft = notes.some((note) => note.isDraft);

  function createDraft() {
    if (hasDraft) return null; // enforce a single unsaved draft

    const draft: ClientNote = {
      id: crypto.randomUUID(),
      title: '',
      content: '',
      archive: false,
      lastEdited: null,
      createdAt: null,
      userId: '', // real userId is set server-side on save
      isDraft: true,
    };

    setNotes((prev) => [draft, ...prev]);
    return draft.id;
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
