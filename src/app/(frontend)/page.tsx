import { redirect } from 'next/navigation';
import { getServerSessions } from '@/lib/usersessions';

export default async function FrontendPage() {
  const session = await getServerSessions();
  const user = session?.user;

  if (!user) return;

  redirect('/allnotes');
}
