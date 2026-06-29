import NotesPageLayout from '@/components/Notes/NotesPageLayout';
import NotesList from '@/components/Notes/NotesList';
import { NotesProvider } from '@/context/NotesProvider';

export default function AllNotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NotesProvider>
      <NotesPageLayout
        basePath="allnotes"
        notesList={<NotesList basePath="allnotes" />}>
        {children}
      </NotesPageLayout>
    </NotesProvider>
  );
}
