'use server';

import { eq, desc } from 'drizzle-orm';
import { db } from '@/db';
import { noteTable } from '@/db/schema/auth-schema';
import { getServerSessions } from '../usersessions';
import { NotesResult } from '@/types';

type ServerItemRow = typeof noteTable.$inferInsert;

type CallerItemInput = Omit<ServerItemRow, 'id' | 'userId'>;

type SaveItemInput = Omit<ServerItemRow, 'userId'>; // includes the client-generated id

export async function createNote(
  noteItem: CallerItemInput,
): Promise<NotesResult> {
  // Generate unique id for each note
  const uniqueNoteId = crypto.randomUUID();

  try {
    // prevents client from creating a note under someone else's account
    const session = await getServerSessions();

    if (session === null) {
      return { success: false, message: 'No active session at the moment' };
    }

    const authUserId = session.user.id;
    const newNoteItem = {
      ...noteItem,
      id: uniqueNoteId,
      userId: authUserId,
    };

    const newNote = await db.insert(noteTable).values(newNoteItem).returning();
    return {
      success: true,
      note: newNote,
      message: 'Note successfully created',
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

export async function saveNote(
  noteItem: CallerItemInput,
): Promise<NotesResult> {}

export async function updateNote() {}

export async function deleteNote() {}
