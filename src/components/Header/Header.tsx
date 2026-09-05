'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { authClient } from '@/lib/auth-client';

import Logo from '../Logo/Logo';

import { Field } from '@/components/ui/field';
import { Label } from '@/components/ui/label';
import SearchField from '@/components/Search/SearchField';

import UserDropDown from '../UserDropDown/UserDropDown';
import { SearchIcon } from 'lucide-react';

function pageTitle(pathname: string, query: string): string {
  if (pathname.startsWith('/search')) {
    return query ? `Showing results for: “${query}”` : 'Search';
  }
  if (pathname.startsWith('/archivenotes')) return 'Archived Notes';
  if (pathname.startsWith('/allnotes')) return 'All Notes';
  if (pathname.startsWith('/settings')) return 'Settings';
  return '';
}

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const session = authClient.useSession();
  const user = session.data?.user;
  const rawQuery = (useSearchParams().get('q') ?? '').trim();
  const title = pageTitle(pathname, rawQuery);

  if (!user) return;

  return (
    <>
      <header className="w-full max-w-full flex items-center justify-between my-0 mx-auto bg-neutral-100 lg:bg-transparent border-none lg:border-solid lg:border-b lg:border-b-neutral-200 px-[var(--spacing-400)] py-3.5">
        <div className="lg:hidden">
          <Logo />
        </div>

        <h1
          className="font-sans font-bold text-2xl hidden lg:block truncate max-w-[40%]"
          title={title}>
          {title}
        </h1>

        <div className="hidden lg:flex justify-center items-center gap-4 w-[400px] max-w-full h-11">
          <div className="w-full">
            <Field className="relative flex items-center">
              <SearchIcon className="w-5 h-5 max-w-fit text-neutral-600 absolute left-5 top-1/2 -translate-y-1/2" />
              <div className="flex items-center gap-2">
                <Label htmlFor="desktop-search" className="sr-only">
                  Search notes
                </Label>
                <SearchField
                  id="desktop-search"
                  className="px-0 pl-10 pr-1.5"
                  placeholder="Search by title, content, or tags…"
                />
              </div>
            </Field>
          </div>

          <UserDropDown
            user={user}
            onSignOut={() => {
              authClient.signOut({
                fetchOptions: {
                  onSuccess: () => {
                    router.push('/login'); // redirect to login page
                  },
                },
              });
            }}
          />
        </div>
      </header>
    </>
  );
}
