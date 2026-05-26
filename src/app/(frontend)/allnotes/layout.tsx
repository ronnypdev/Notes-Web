import NotesPageLayout from '@/components/Notes/NotesPageLayout';
import NotesList from '@/components/Notes/NotesList';

export default function AllNotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NotesPageLayout
      basePath="allnotes"
      notesList={<NotesList basePath="allnotes" />}>
      {children}
    </NotesPageLayout>
  );
}
