'use client';

import React, { useState } from 'react';
import { NotesContext } from './NotesContext';
import { Note } from '@/types';

export function NotesProvider({ children }: { children: React.ReactNode }) {
  const [notes, setNotes] = useState<Note[]>([
    {
      title: 'Japan Travel Planning',
      id: '1',
      tags: ['travel', 'personal'],
      lastEdited: '28 Oct 2024',
    },
    {
      title: 'Favorite Pasta Recipes',
      id: '2',
      tags: ['cooking', 'recepies'],
      lastEdited: '27 Oct 2024',
    },
    {
      title: 'Weekly Workout Plan',
      id: '3',
      tags: ['gym', 'workout'],
      lastEdited: '25 Oct 2024',
    },
    {
      title: 'Meal Prep Ideas',
      id: '4',
      tags: ['cooking', 'meal prep'],
      lastEdited: '12 Oct 2024',
    },
    {
      title: 'React Performance Optimization',
      id: '5',
      tags: ['Dev', 'React'],
      lastEdited: '29 Oct 2024',
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
