import { getServerSessions } from '@/lib/usersessions';
import UnauthenticatedPage from '../unauthenticated/page';

export default async function AllNotesPage() {
  const session = await getServerSessions();
  const user = session?.user;

  if (!user) return <UnauthenticatedPage />;

  return (
    <section className="w-full h-full">
      <h1>All Notes</h1>
    </section>
  );
}
