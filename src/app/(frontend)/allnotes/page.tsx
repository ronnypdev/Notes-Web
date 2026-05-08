import { getServerSessions } from '@/lib/usersessions';
import UnauthenticatedPage from '../unauthenticated/page';

export default async function AllNotesPage() {
  const session = await getServerSessions();
  const user = session?.user;

  if (!user) return <UnauthenticatedPage />;

  return (
    <section className="w-full h-full">
      <div className="notes-sidebar">notes sidebar</div>
      <div className="notes-content">notes content</div>
    </section>
  );
}
