import { noteTable } from '@/db/schema/auth-schema';

export type Note = typeof noteTable.$inferSelect;

export type NotesResult =
  | { success: true; note: Note[]; message: string }
  | { success: false; message: string };

export interface NoteContextValue {
  noteCollection: Note[];
  addNote: (note: Note) => void;
  loadNotes: () => Promise<void>;
  updateNote: (noteId: string, note: Partial<Note>) => void;
}
