'use server';
import { db } from '@/db';
import { noteTable } from '@/db/schema/auth-schema';

type NewNoteItem = typeof noteTable.$inferInsert;

export async function createNote(noteItem: NewNoteItem) {
  // Generate unique id for each note
  const uniqueNoteId = crypto.randomUUID();
  const newNoteItemWithId = { ...noteItem, id: uniqueNoteId };

  try {
    const newNote = await db
      .insert(noteTable)
      .values(newNoteItemWithId)
      .returning();
    return {
      success: true,
      note: newNote,
      message: 'Note successfully created',
    };
  } catch (error) {
    console.error('Error adding item to cart:', error);
    return { success: false, message: 'Failed to create new note' };
  }
}

export async function readNote() {}

export async function updateNote() {}

export async function deleteNote() {}
