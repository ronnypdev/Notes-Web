'use client';

import { useContext } from 'react';
import { NotesContext } from '@/context/NotesContext';
import { Button } from '@/components/ui/button';
import { ArchiveIcon, DeleteIcon, RefreshIcon } from '@/components/icons';
import {
  usePathname,
  useParams,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import { Modal } from '@/components/Modal/Modal';

export default function RightSideBar() {
  const { removeNote, archiveNote, noteCollection } = useContext(NotesContext);
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const noteId = typeof params.id === 'string' ? params.id : undefined;
  const activeNote = noteId
    ? noteCollection.find((note) => note.id === noteId)
    : undefined;
  // Only saved notes can be archived
  const canArchive =
    activeNote !== undefined && !activeNote.isDraft && !activeNote.archive;
  // Only an archived note can be restored
  const canRestore = activeNote !== undefined && activeNote.archive;

  const isSearchRoute = pathname.startsWith('/search');
  const isArchiveRoute = pathname.startsWith('/archivenotes');
  const isSettingsRoute = pathname.startsWith('/settings');

  if (isSettingsRoute) {
    return null;
  }

  // The note decides which action to offer when one is open; fall back to
  // the route for the empty state, so /archivenotes still reads "Restore"
  // with nothing selected.
  const showRestore = activeNote ? activeNote.archive : isArchiveRoute;

  const rawQuery = (searchParams.get('q') ?? '').trim();
  const queryString = rawQuery ? `?q=${encodeURIComponent(rawQuery)}` : '';

  // Where Delete returns to: the list you came from, query intact.
  const listHref = isSearchRoute
    ? `/search${queryString}`
    : isArchiveRoute
      ? '/archivenotes'
      : '/allnotes';

  return (
    <aside className="w-[var(--sidebar-width)] border-l border-solid border-neutral-200 bg-background p-4 lg:flex flex-col gap-2 hidden">
      {showRestore ? (
        <Modal
          type="restore"
          onConfirm={() => {
            if (!noteId || !canRestore) return;
            archiveNote(noteId, false); // false = not archived = restored
            // On search the note stays in the results, so stay put.
            if (!isSearchRoute) router.push(`/allnotes/${noteId}`);
          }}>
          <Button
            variant="outline"
            className="justify-start gap-2"
            size="lg"
            disabled={!canRestore}>
            <RefreshIcon />
            Restore Note
          </Button>
        </Modal>
      ) : (
        <Modal
          type="archive"
          onConfirm={() => {
            if (!noteId || !canArchive) return;
            archiveNote(noteId, true);
            if (!isSearchRoute) router.push('/archivenotes');
          }}>
          <Button
            variant="outline"
            className="justify-start gap-2"
            size="lg"
            disabled={!canArchive}>
            <ArchiveIcon />
            Archive Note
          </Button>
        </Modal>
      )}
      <Modal
        type="delete"
        onConfirm={() => {
          if (!noteId) return;
          removeNote(noteId);
          router.push(listHref);
        }}>
        <Button
          variant="outline"
          className="justify-start gap-2"
          size="lg"
          disabled={!noteId}>
          <DeleteIcon />
          Delete Note
        </Button>
      </Modal>
    </aside>
  );
}
