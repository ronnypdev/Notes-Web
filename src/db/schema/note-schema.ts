import { user } from './auth-schema';
import { sql } from 'drizzle-orm';
import {
  pgTable,
  text,
  varchar,
  boolean,
  date,
  timestamp,
} from 'drizzle-orm/pg-core';

export const noteTable = pgTable('note', {
  id: text('id').primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  archive: boolean('archive').notNull(),
  tags: text('tags')
    .array()
    .notNull()
    .default(sql`ARRAY[]::text[]`),
  content: varchar('content').notNull(),
  lastEdited: date('last_edited')
    .notNull()
    .default(sql`CURRENT_DATE`),
  userId: text('user_id').references(() => user.id),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});
