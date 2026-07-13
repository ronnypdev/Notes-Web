export interface Note {
  id: string;
  title?: string;
  tags?: string[];
  content?: string;
  lastEdited?: string;
  archive?: boolean;
  userId: string;
  created_at?: Date;
}

export interface NoteContextValue {
  noteCollection: Note[];
  addNote: (note: Note) => void;
  updateNote: (noteId: string, note: Partial<Note>) => void;
}
