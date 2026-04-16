import { getServerSessions } from '@/lib/usersessions';
import UnauthenticatedPage from '../unauthenticated/page';

export default async function ArchiveNotesPage() {
  const session = await getServerSessions();
  const user = session?.user;

  if (!user) return <UnauthenticatedPage />;

  return <div>Archive Notes Page</div>;
}
