export interface Note {
  title: string;
  id: string;
  tags?: string[];
  content?: string;
  lastEdited?: string;
}

export interface NoteContextValue {
  noteCollection: Note[];
  updateNote: (noteId: string, note: Partial<Note>) => void;
}
