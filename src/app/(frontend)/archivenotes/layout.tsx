import NotesPageLayout from '@/components/Notes/NotesPageLayout';
import NotesList from '@/components/Notes/NotesList';

export default function ArchivedNoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NotesPageLayout
      basePath="archivenotes"
      notesList={<NotesList basePath="archivenotes" />}>
      {children}
    </NotesPageLayout>
  );
}
