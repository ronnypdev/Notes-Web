'use client';

import { Button } from '@/components/ui/button';
import NoteItem from '@/components/NoteItem/NoteItem';
import { PlusIcon } from '@/components/icons';

interface NotesListProps {
  basePath: string;
}

export default function NotesList({ basePath }: NotesListProps) {
  return (
    <>
      {basePath !== 'archivenotes' && (
        <Button className="w-full mb-200 hidden lg:block">
          + Create New Note
        </Button>
      )}
      <NoteItem
        title="React Performance Optimization"
        date="29 Oct 2024"
        tags={['Dev', 'React']}
        id="1"
        basePath={basePath}
      />
      <NoteItem
        title="Japan Travel Planning"
        date="28 Oct 2024"
        tags={['travel', 'personal']}
        id="2"
        basePath={basePath}
      />
      <NoteItem
        title="Favorite Pasta Recipes"
        date="27 Oct 2024"
        tags={['cooking', 'recepies']}
        id="3"
        basePath={basePath}
      />
      <NoteItem
        title="Weekly Workout Plan"
        date="25 Oct 2024"
        tags={['gym', 'workout']}
        id="4"
        basePath={basePath}
      />
      <NoteItem
        title="Meal Prep Ideas"
        date="12 Oct 2024"
        tags={['cooking', 'meal prep']}
        id="5"
        basePath={basePath}
      />
      {basePath !== 'archivenotes' && (
        <Button variant="mobileCreate">
          <PlusIcon className="size-6" />
        </Button>
      )}
    </>
  );
}
