'use server';

import { eq, desc, and, sql } from 'drizzle-orm';
import { db } from '@/db';
import { noteTable } from '@/db/schema/auth-schema';
import { getServerSessions } from '../usersessions';
import { NotesResult } from '@/types';

type ServerItemRow = typeof noteTable.$inferInsert;

type SaveItemInput = Omit<ServerItemRow, 'userId'>; // includes the client-generated id

export async function saveNote(noteItem: SaveItemInput): Promise<NotesResult> {
  try {
    // prevents client from creating a note under someone else's account
    const session = await getServerSessions();

    if (session === null) {
      return { success: false, message: 'No active session at the moment' };
    }

    const authUserId = session.user.id;
    const newNoteItem = {
      ...noteItem,
      userId: authUserId,
      title: (noteItem.title ?? '').trim().slice(0, 255), // normalize + respect varchar(255)
    };

    const savedNote = await db
      .insert(noteTable)
      .values(newNoteItem)
      .returning();
    return {
      success: true,
      note: savedNote,
      message: 'Note successfully saved',
    };
  } catch (error) {
    console.error('Error no note created:', error);
    return { success: false, message: 'Failed to create new note' };
  }
}

export async function fetchNotes(): Promise<NotesResult> {
  try {
    // Ensure that readNotes resturns the notes belogin to the currently-loggedin user.
    const session = await getServerSessions();

    if (session === null) {
      return { success: false, message: 'No active session at the moment' };
    }

    const notes = await db
      .select()
      .from(noteTable)
      .where(eq(noteTable.userId, session.user.id))
      .orderBy(desc(noteTable.createdAt));

    return { success: true, note: notes, message: 'Note successfully read' };
  } catch (error) {
    console.error('Error no note read:', error);
    return { success: false, message: 'Can not read note at the moment' };
  }
}

export async function updateNote(
  noteId: string,
  updateItem: Partial<SaveItemInput>,
): Promise<NotesResult> {
  try {
    // Ensure that the correct note is being updated
    const session = await getServerSessions();

    if (session === null) {
      return { success: false, message: 'No active session at the moment' };
    }

    const updatedNote = await db
      .update(noteTable)
      .set({ ...updateItem, lastEdited: sql`CURRENT_DATE` })
      .where(
        and(eq(noteTable.id, noteId), eq(noteTable.userId, session.user.id)),
      )
      .returning();

    if (updatedNote.length === 0) {
      return { success: false, message: 'Note not found or not yours' };
    }

    return {
      success: true,
      note: updatedNote,
      message: 'Note successfully saved',
    };
  } catch (error) {
    console.error('Error note not updated:', error);
    return {
      success: false,
      message: 'Can not update note at the moment',
    };
  }
}

export async function deleteNote(noteId: string): Promise<NotesResult> {
  try {
    // Ensure that the correct note is being deleted by the correct user
    const session = await getServerSessions();

    if (session === null) {
      return { success: false, message: 'No active session at the moment' };
    }

    const deletedNote = await db
      .delete(noteTable)
      .where(
        and(eq(noteTable.id, noteId), eq(noteTable.userId, session.user.id)),
      )
      .returning();

    return {
      success: true,
      note: deletedNote,
      message: 'Note successfully saved',
    };
  } catch (error) {
    console.error('Error note not updated:', error);
    return {
      success: false,
      message: 'Can not update note at the moment',
    };
  }
}
