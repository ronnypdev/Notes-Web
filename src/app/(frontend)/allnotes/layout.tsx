import NotesPageLayout from '@/components/Notes/NotesPageLayout';
import NotesList from '@/components/Notes/NotesList';
import { NotesProvider } from '@/context/NotesProvider';
import { fetchNotes } from '@/lib/utilities/notes-actions';

export default async function AllNotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const result = await fetchNotes();
  const initialNotes = result.success ? result.note : [];

  return (
    <NotesProvider initialNotes={initialNotes}>
      <NotesPageLayout
        basePath="allnotes"
        notesList={<NotesList basePath="allnotes" />}>
        {children}
      </NotesPageLayout>
    </NotesProvider>
  );
}
