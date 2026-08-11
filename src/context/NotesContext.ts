import { createContext } from 'react';
import { NoteContextValue } from '@/types';

export const NotesContext = createContext<NoteContextValue>({
  noteCollection: [],
  changeNote: () => {},
  loadNotes: async () => {},
  createDraft: () => null,
  cancelDraft: () => {},
  markNoteSaved: () => {},
  hasDraft: false,
  removeNote: async () => {},
  archiveNote: async () => {},
});
