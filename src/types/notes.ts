import { noteTable } from '@/db/schema/auth-schema';

export type Note = typeof noteTable.$inferSelect;

export interface NoteContextValue {
  noteCollection: Note[];
  addNote: (note: Note) => void;
  readsNote: (note: Note) => void;
  updateNote: (noteId: string, note: Partial<Note>) => void;
}
