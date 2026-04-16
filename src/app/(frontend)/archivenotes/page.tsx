import { getServerSessions } from '@/lib/usersessions';

export default async function ArchiveNotesPage() {
  const session = await getServerSessions();
  const user = session?.user;

  if (!user) return;

  return <div>Archive Notes Page</div>;
}
