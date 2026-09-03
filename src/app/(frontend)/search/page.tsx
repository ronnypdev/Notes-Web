'use client';
import { useSearchParams } from 'next/navigation';

// import { getServerSessions } from '@/lib/usersessions';
// import UnauthenticatedPage from '../unauthenticated/page';

export default function SearchPage() {
  // const session = await getServerSessions();
  // const user = session?.user;
  // if (!user) return <UnauthenticatedPage />;
  // return null;

  const q = useSearchParams().get('q');
  console.log('[spike] render, q =', q);
  return <p style={{ padding: 24 }}>q = {q ?? '(none)'}</p>;
}
