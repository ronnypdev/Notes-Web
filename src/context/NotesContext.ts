import { createContext } from 'react';
import { NoteContextValue } from '@/types';

export const NotesContext = createContext<NoteContextValue>({
  noteCollection: [],
  addNote: () => {},
  loadNotes: () => Promise.resolve(void 0),
  updateNote: () => {},
});
