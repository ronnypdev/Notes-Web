'use client';

import { useContext } from 'react';
import { NotesContext } from '@/context/NotesContext';
import { Button } from '@/components/ui/button';
import { ArchiveIcon, DeleteIcon, RefreshIcon } from '@/components/icons';
import { usePathname } from 'next/navigation';

export default function RightSideBar() {
  const { noteCollection, removeNote } = useContext(NotesContext);
  const pathname = usePathname();
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
        <Button variant="outline" className="justify-start gap-2" size="lg">
          <ArchiveIcon />
          Archive Note
        </Button>
      )}
      <Button
        variant="outline"
        className="justify-start gap-2"
        size="lg"
        onClick={() => removeNote(noteCollection.forEach((note) => note.id))}>
        <DeleteIcon />
        Delete Note
      </Button>
    </aside>
  );
}
