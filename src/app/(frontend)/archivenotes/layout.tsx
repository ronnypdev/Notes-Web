'use client';

import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';
import NoteItem from '../../../components/NoteItem/NoteItem';
import { PlusIcon } from '@/components/icons';

export default function ArchivedNoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isArchivedNotesRoute = pathname === '/archivenotes';
  return (
    <section className="w-full h-full grid grid-cols-1 lg:grid-cols-[350px_1fr] grid-rows-[1fr]">
      <div
        className={`notes-sidebar w-full col-span-1 row-span-1 border-r border-neutral-200 py-5 pl-4 pr-8 ${isArchivedNotesRoute ? 'block' : 'hidden'} lg:block relative`}>
        <Button className="w-full mb-200 hidden lg:block">
          + Create New Note
        </Button>
        <NoteItem
          title="React Performance Optimization"
          date="29 Oct 2024"
          tags={['Dev', 'React']}
          id="1"
          basePath="archivenotes"
        />
        <NoteItem
          title="Japan Travel Planning"
          date="28 Oct 2024"
          tags={['travel', 'personal']}
          id="2"
          basePath="archivenotes"
        />
        <NoteItem
          title="Favorite Pasta Recipes"
          date="27 Oct 2024"
          tags={['cooking', 'recepies']}
          id="3"
          basePath="archivenotes"
        />
        <NoteItem
          title="Weekly Workout Plan"
          date="25 Oct 2024"
          tags={['gym', 'workout']}
          id="4"
          basePath="archivenotes"
        />
        <NoteItem
          title="Meal Prep Ideas"
          date="12 Oct 2024"
          tags={['cooking', 'meal prep']}
          id="5"
          basePath="archivenotes"
        />
        <Button variant="mobileCreate">
          <PlusIcon className="size-6" />
        </Button>
      </div>
      <div
        className={`notes-content col-span-1 row-span-1 p-4 ${isArchivedNotesRoute ? 'hidden' : 'block'} lg:block`}>
        {children}
      </div>
    </section>
  );
}
