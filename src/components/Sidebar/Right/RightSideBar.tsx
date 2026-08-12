'use client';

import { useContext } from 'react';
import { NotesContext } from '@/context/NotesContext';
import { Button } from '@/components/ui/button';
import { ArchiveIcon, DeleteIcon, RefreshIcon } from '@/components/icons';
import { usePathname, useParams, useRouter } from 'next/navigation';
import { Modal } from '@/components/Modal/Modal';

export default function RightSideBar() {
  const { removeNote, archiveNote, noteCollection } = useContext(NotesContext);
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();
  const noteId = typeof params.id === 'string' ? params.id : undefined;
  const activeNote = noteId
    ? noteCollection.find((note) => note.id === noteId)
    : undefined;
  // Only saved notes can be archived
  const canArchive = activeNote !== undefined && !activeNote.isDraft;
  const isArchiveRoute = pathname.startsWith('/archivenotes');
  const isSettingsRoute = pathname.startsWith('/settings');

  if (isSettingsRoute) {
    return null;
  }

  return (
    <aside className="w-[var(--sidebar-width)] border-l border-solid border-neutral-200 bg-background p-4 lg:flex flex-col gap-2 hidden">
      {isArchiveRoute ? (
        <Button variant="outline" className="justify-start gap-2" size="lg">
          <RefreshIcon />
          Restore Note
        </Button>
      ) : (
        <Modal
          type="archive"
          onConfirm={() => {
            if (!noteId || !canArchive) return;
            archiveNote(noteId, true);
            router.push('/archivenotes');
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
          router.push(isArchiveRoute ? '/archivenotes' : '/allnotes');
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
