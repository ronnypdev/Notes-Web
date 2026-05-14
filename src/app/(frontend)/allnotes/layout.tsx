import { Button } from '@/components/ui/button';
import NoteItem from './components/NoteItem';

export default function NoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full h-full grid grid-cols-[350px_1fr] grid-rows-[1fr]">
      <div className="notes-sidebar col-span-1 row-span-1 border-r border-neutral-200 py-5 pl-4 pr-8">
        <Button className="w-full mb-200">+ Create New Note</Button>
        <NoteItem
          title="React Performance Optimization"
          date="29 Oct 2024"
          tags={['Dev', 'React']}
          id="1"
        />
        <NoteItem
          title="Japan Travel Planning"
          date="28 Oct 2024"
          tags={['travel', 'personal']}
          id="2"
        />
        <NoteItem
          title="Favorite Pasta Recipes"
          date="27 Oct 2024"
          tags={['cooking', 'recepies']}
          id="3"
        />
        <NoteItem
          title="Weekly Workout Plan"
          date="25 Oct 2024"
          tags={['gym', 'workout']}
          id="4"
        />
        <NoteItem
          title="Meal Prep Ideas"
          date="12 Oct 2024"
          tags={['cooking', 'meal prep']}
          id="5"
        />
      </div>
      <div className="notes-content col-span-1 row-span-1 p-4">{children}</div>
    </section>
  );
}
