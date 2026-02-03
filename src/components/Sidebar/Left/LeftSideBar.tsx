'use client';

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Logo from '@/components/Logo/Logo';
import { ArchiveIcon, HomeIcon, ChevronRightIcon } from '@/components/icons';
import clsx from 'clsx';
import NavigationList from '../NavigationList';

export default function LeftSideBar() {
  const pathname = usePathname();

  const links = [
    {
      href: '/allnotes',
      icon: HomeIcon,
      label: 'All Notes',
    },
    {
      href: '/archivenotes',
      icon: ArchiveIcon,
      label: 'Archived Notes',
    },
  ];

  return (
    <>
      <Sidebar side="left">
        <SidebarHeader>
          <div className="py-3 px-4 my-3">
            <Logo />
          </div>
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  'py-1.5 px-3 flex items-center gap-2 text-neutral-950',
                  { 'rounded-lg bg-neutral-100': pathname === link.href },
                )}>
                <link.icon
                  className={clsx('w-5 h-5', {
                    'text-blue-500': pathname === link.href,
                  })}
                />
                <span>{link.label}</span>
                <ChevronRightIcon
                  className={clsx('w-6 h-6 ml-auto', {
                    'text-blue-500': pathname === link.href,
                  })}
                />
              </Link>
            ))}
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel className="text-neutral-500 font-sans text-sm font-medium leading-[1.2] tracking-[-0.2px]">
              Tags
            </SidebarGroupLabel>
            <NavigationList />
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>A place to keep all your notes organized</SidebarFooter>
      </Sidebar>
    </>
  );
}
