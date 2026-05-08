import { getServerSessions } from '@/lib/usersessions';
import UnauthenticatedPage from '../unauthenticated/page';

export default async function AllNotesPage() {
  const session = await getServerSessions();
  const user = session?.user;

  if (!user) return <UnauthenticatedPage />;

  return (
    <section className="w-full h-full grid grid-cols-[350px_1fr] grid-rows-[1fr]">
      <div className="notes-sidebar col-span-1 row-span-1 border-r border-neutral-200 p-4">
        notes sidebar
      </div>
      <div className="notes-content col-span-1 row-span-1 p-4">
        notes content
      </div>
    </section>
  );
}
