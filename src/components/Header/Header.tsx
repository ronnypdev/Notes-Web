'use client';

import { useRouter, usePathname } from 'next/navigation';
import { authClient } from '@/lib/auth-client';

import Logo from '../Logo/Logo';

import { Field } from '@/components/ui/field';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

import UserDropDown from '../UserDropDown/UserDropDown';
import { SearchIcon } from 'lucide-react';

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const session = authClient.useSession();
  const user = session.data?.user;

  if (!user) return;

  return (
    <>
      <header className="w-full max-w-full flex items-center justify-between my-0 mx-auto bg-neutral-100 lg:bg-transparent border-none lg:border-solid lg:border-b lg:border-b-neutral-200 px-[var(--spacing-400)] py-3.5">
        <div className="lg:hidden">
          <Logo />
        </div>

        {pathname === '/allnotes' ? (
          <h1 className="font-sans font-bold text-2xl hidden lg:block">
            All Notes
          </h1>
        ) : pathname === '/archivenotes' ? (
          <h1 className="font-sans font-bold text-2xl hidden lg:block">
            Archive Notes
          </h1>
        ) : (
          <h1 className="font-sans font-bold text-2xl hidden lg:block">
            Search
          </h1>
        )}

        <div className="hidden lg:flex justify-center items-center gap-4 w-[400px] max-w-full h-11">
          <form className="w-full">
            <Field className="relative flex items-center">
              <SearchIcon className="w-5 h-5 max-w-fit text-neutral-600 absolute left-5 top-1/2 -translate-y-1/2" />
              <div className="flex items-center gap-2">
                <Label htmlFor="search"></Label>
                <Input
                  className="px-0 pl-10 pr-1.5"
                  type="search"
                  id="search"
                  placeholder="Search by title, content, or tags…"
                />
              </div>
            </Field>
          </form>
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
