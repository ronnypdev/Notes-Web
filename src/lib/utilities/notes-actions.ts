'use server';

import { eq, desc } from 'drizzle-orm';
import { db } from '@/db';
import { noteTable } from '@/db/schema/auth-schema';
import { getServerSessions } from '../usersessions';

type ServerItemRow = typeof noteTable.$inferInsert;

type CallerItemInput = Omit<ServerItemRow, 'id' | 'userId'>;

export async function createNote(noteItem: CallerItemInput) {
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

export async function readNote() {
  try {
    // Ensure that readNotes resturns the notes belogin to the currently-loggedin user.
    const session = await getServerSessions();

    if (session === null) {
      return { success: false, message: 'No active session at the moment' };
    }

    const redNote = await db
      .select()
      .from(noteTable)
      .where(eq(noteTable.userId, session.user.id))
      .orderBy(desc(noteTable.createdAt));

    return { success: true, note: redNote, message: 'Note successfully read' };
  } catch (error) {
    console.error('Error no note read:', error);
    return { success: false, message: 'Can not read note at the moment' };
  }
}

export async function updateNote() {}

export async function deleteNote() {}
