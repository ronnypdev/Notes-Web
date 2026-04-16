import { getServerSessions } from '@/lib/usersessions';

export default async function AllNotesPage() {
  const session = await getServerSessions();
  const user = session?.user;

  if (!user) return;

  return <div>All Notes Page</div>;
}
