'use client';

import {
  SunIcon,
  LockIcon,
  TypeIcon,
  ChevronRightIcon,
  LogoutIcon,
} from '@/components/icons';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const settingsLinks = [
    {
      href: '/settings/color-theme',
      label: 'Color Theme',
      icon: SunIcon,
    },
    {
      href: '/settings/font-options',
      label: 'Font Theme',
      icon: TypeIcon,
    },
    {
      href: '/settings/change-password',
      label: 'Change Password',
      icon: LockIcon,
    },
  ];

  return (
    <section className="w-full h-full grid grid-cols-1 lg:grid-cols-[350px_1fr] grid-rows-[1fr]">
      <div className="settings-sidebar w-full col-span-1 row-span-1 border-r border-neutral-200 py-5 pl-4 pr-8">
        <nav>
          <ul className="flex flex-col gap-2">
            {settingsLinks.map((link) => {
              const isActive =
                pathname === link.href || pathname.startsWith(link.href + '/');
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={clsx(
                      'py-1.5 px-3 flex items-center gap-2 text-neutral-950',
                      {
                        'rounded-lg bg-neutral-100': isActive,
                      },
                    )}>
                    <link.icon
                      className={clsx('w-5 h-5', { 'text-blue-500': isActive })}
                    />
                    <span>{link.label}</span>
                    <ChevronRightIcon
                      className={clsx('w-6 h-6 ml-auto', {
                        'text-blue-500': isActive,
                      })}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
          <Separator className="my-4" />
          <ul className="flex flex-col gap-2">
            <li className="py-1.5 px-3 flex items-center gap-2 text-neutral-950">
              <LogoutIcon className="w-5 h-5" />
              <Link href="/settings/logout">Logout</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="settings-content col-span-1 row-span-1 p-4">
        {children}
      </div>
    </section>
  );
}
