'use client';

import React, { useState } from 'react';
import { toast } from 'sonner';
import { NotesContext } from './NotesContext';
import { Note, ClientNote } from '@/types';
import {
  fetchNotes,
  deleteNote,
  setArchiveNote,
  setRestoreNote,
} from '@/lib/utilities/notes-actions';

export function NotesProvider({
  children,
  initialNotes,
}: {
  children: React.ReactNode;
  initialNotes: Note[];
}) {
  const [notes, setNotes] = useState<ClientNote[]>(initialNotes);
  const hasDraft = notes.some((note) => note.isDraft);

  async function loadNotes() {
    try {
      const result = await fetchNotes();
      if (result.success) {
        setNotes(result.note);
      } else {
        console.log(result.message);
      }
    } catch (error) {
      console.error('Error could not read the note:', error);
    }
  }

  function changeNote(noteId: string, updates: Partial<Note>) {
    setNotes((prev) =>
      prev.map((note) => {
        if (note.id === noteId) {
          return { ...note, ...updates };
        }
        return note;
      }),
    );
  }

  //  the one-draft-at-a-time guard lives here
  function createDraft(): string | null {
    if (hasDraft) return null; // enforce a single unsaved draft

    const draft: ClientNote = {
      id: crypto.randomUUID(),
      title: '',
      tags: [],
      content: '',
      archive: false,
      lastEdited: null,
      createdAt: null,
      userId: '', // real userId is set server-side on save
      isDraft: true,
    };

    setNotes((prevNotes) => [draft, ...prevNotes]);
    return draft.id;
  }

  // Cancels draft and removes it from the front end only
  function cancelDraft(noteId: string) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
  }

  //  swap the in-memory draft for the persisted server row:
  function markNoteSaved(noteId: string, saved: Note) {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === noteId ? { ...saved, isDraft: false } : note,
      ),
    );
  }

  // Remove active note
  async function removeNote(noteId: string) {
    const target = notes.find((note) => note.id === noteId);
    if (!target) return;

    if (target.isDraft) {
      cancelDraft(noteId); // client-only, no network
      return;
    }

    const snapshot = notes; // remember
    setNotes((prev) => prev.filter((note) => note.id !== noteId)); // optimistic

    try {
      const result = await deleteNote(noteId);
      if (!result.success) {
        setNotes(snapshot); // roll back
        toast.error(result.message, { position: 'bottom-right' });
        return;
      }
      toast.success('Note deleted', { position: 'bottom-right' });
    } catch (error) {
      console.error('Delete request failed:', error);
      setNotes(snapshot); // roll back
      toast.error('Could not delete note. Check your connection.', {
        position: 'bottom-right',
      });
    }
  }

  async function archiveNote(noteId: string, archived: boolean) {
    const target = notes.find((note) => note.id === noteId);
    if (!target) return;

    // Only saved notes can be archived — a draft has no database row yet.
    if (target.isDraft) {
      toast.error('Save this note before archiving it', {
        position: 'bottom-right',
      });
      return;
    }

    // Already in the requested state; nothing to do.
    if (Boolean(target.archive) === archived) return;

    const snapshot = notes; // remember
    setNotes((prev) =>
      prev.map((note) =>
        note.id === noteId ? { ...note, archive: archived } : note,
      ),
    ); // optimistic

    try {
      const result = await setArchiveNote(noteId, archived);

      if (!result.success) {
        setNotes(snapshot); // roll back
        toast.error(result.message, { position: 'bottom-right' });
        return;
      }
      // Reconcile with the row the server actually wrote
      setNotes((prev) =>
        prev.map((note) =>
          note.id === noteId ? { ...result.note[0], isDraft: false } : note,
        ),
      );

      toast.success(archived ? 'Note archived' : 'Note restored', {
        position: 'bottom-right',
      });
    } catch (error) {
      console.error('Archive request failed:', error);
      setNotes(snapshot); // roll back
      toast.error('Could not archive note. Check your connection.', {
        position: 'bottom-right',
      });
    }
  }

  async function restoreNote(noteId: string, restored: boolean) {
    const snapshot = notes; // remember
    setNotes((prev) =>
      prev.map((note) =>
        note.id === noteId ? { ...note, archive: restored } : note,
      ),
    ); // optimistic

    try {
      const result = await setRestoreNote(noteId, restored);

      if (!result.success) {
        setNotes(snapshot); // roll back
        toast.error(result.message, { position: 'bottom-right' });
        return;
      }

      // Reconcile with the row the server actually wrote
      setNotes((prev) =>
        prev.map((note) =>
          note.id === noteId ? { ...result.note[0], isDraft: true } : note,
        ),
      );

      toast.success(restored ? 'Note restored' : 'Note archived', {
        position: 'bottom-right',
      });
    } catch (error) {
      console.error('Restored request failed:', error);
      setNotes(snapshot); // roll back
      toast.error('Could not restored note. Check your connection.', {
        position: 'bottom-right',
      });
    }
  }

  return (
    <NotesContext
      value={{
        noteCollection: notes,
        changeNote,
        loadNotes,
        createDraft,
        cancelDraft,
        markNoteSaved,
        hasDraft,
        removeNote,
        archiveNote,
        restoreNote,
      }}>
      {children}
    </NotesContext>
  );
}
