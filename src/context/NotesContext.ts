import { createContext } from 'react';
import { NoteContextValue } from '@/types';

export const NotesContext = createContext<NoteContextValue>({
  noteCollection: [],
  addNote: () => {},
  updateNote: () => {},
});
