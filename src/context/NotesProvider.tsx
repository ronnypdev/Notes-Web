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

  function changeNote(noteId: string, updates: Partial<Note>) {
    setNotes((prev) =>
      prev.map((note) => {
        if (note.id === noteId) {
          return { ...note, ...updates };
        }
        return note;
      }),
    );
  }

  //  the one-draft-at-a-time guard lives here
  function createDraft(): string | null {
    if (hasDraft) return null; // enforce a single unsaved draft

    const draft: ClientNote = {
      id: crypto.randomUUID(),
      title: '',
      tags: [],
      content: '',
      archive: false,
      lastEdited: null,
      createdAt: null,
      userId: '', // real userId is set server-side on save
      isDraft: true,
    };

    setNotes((prevNotes) => [draft, ...prevNotes]);
    return draft.id;
  }

  // Cancels draft and removes it from the front end only
  function cancelDraft(noteId: string) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
  }

  //  swap the in-memory draft for the persisted server row:
  function markNoteSaved(noteId: string, saved: Note) {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === noteId ? { ...saved, isDraft: false } : note,
      ),
    );
  }

  function removeNote(noteId: string) {
    setNotes((prev) => prev.filter((note) => note.id !== noteId));
  }

  return (
    <NotesContext
      value={{
        noteCollection: notes,
        changeNote,
        loadNotes,
        createDraft,
        cancelDraft,
        markNoteSaved,
        hasDraft,
        removeNote,
      }}>
      {children}
    </NotesContext>
  );
}
