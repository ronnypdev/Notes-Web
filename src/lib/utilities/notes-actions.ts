'use server';
import { db } from '@/db';
import { type InferSelectModel, type InferInsertModel } from 'drizzle-orm';
import { noteTable } from '@/db/schema/auth-schema';
import { Note } from '@/types';

export async function createNote(noteItem: Note[]) {
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

type SelectUserAlt = InferSelectModel<typeof noteTable>;
type InsertUserAlt = InferInsertModel<typeof noteTable>;

export async function readNote() {}

export async function updateNote() {}

export async function deleteNote() {}
