import { noteTable } from '@/db/schema/auth-schema';

export type Note = typeof noteTable.$inferSelect;

export type NotesResult =
  | { success: true; note: Note[]; message: string }
  | { success: false; message: string };

// Client-only view of a note. `isDraft` marks an unsaved note that lives
// in memory and has NOT been written to the database yet. It never gets persisted.
export type ClientNote = Note & { isDraft?: boolean };

export interface NoteContextValue {
  noteCollection: ClientNote[];
  changeNote: (noteId: string, note: Partial<Note>) => void;
  loadNotes: () => Promise<void>;
  createDraft: () => string | null; // returns the new draft id (null if a draft already exists)
  cancelDraft: (noteId: string) => void; // discard an unsaved draft (client-only)
  markNoteSaved: (noteId: string, saved: Note) => void; // swap draft → persisted row, isDraft:false  after saveNote succeeds
  hasDraft: boolean; // true while an unsaved draft exists (disables "Create New Note")
  removeNote: (noteId: string) => Promise<void>;
  archiveNote: (noteId: string, noteItem: Note) => void;
}
