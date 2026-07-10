'use server';
import { db } from '@/db';
import { noteTable } from '@/db/schema/auth-schema';

type NewNoteItem = typeof noteTable.$inferInsert;

export async function createNote(noteItem: NewNoteItem) {
  try {
    const newNote = await db.insert(noteTable).values(noteItem).returning();
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
