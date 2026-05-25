import NotesPageLayout from './_components/NotesPageLayout';
import NotesList from './_components/NotesList';

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
