'use client';

import React, { useState } from 'react';
import { NotesContext } from './NotesContext';
import { Note } from '@/types';

export function NotesProvider({ children }: { children: React.ReactNode }) {
  const [notes, setNotes] = useState<Note[]>([
    {
      title: 'Note 1',
      id: '1',
      tags: ['tag1', 'tag2'],
      lastEdited: '2021-01-01',
    },
    {
      title: 'Note 2',
      id: '2',
      tags: ['tag3', 'tag4'],
      lastEdited: '2021-01-02',
    },
    {
      title: 'Note 3',
      id: '3',
      tags: ['tag5', 'tag6'],
      lastEdited: '2021-01-03',
    },
    {
      title: 'Note 4',
      id: '4',
      tags: ['tag7', 'tag8'],
      lastEdited: '2021-01-04',
    },
    {
      title: 'Note 5',
      id: '5',
      tags: ['tag9', 'tag10'],
      lastEdited: '2021-01-05',
    },
  ]);

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
      }}>
      {children}
    </NotesContext>
  );
}
