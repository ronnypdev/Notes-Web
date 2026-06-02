'use client';
import { useState, useEffect } from 'react';
import { flushSync } from 'react-dom';

import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import {
  HomeIcon,
  SearchIcon,
  ArchiveIcon,
  TagIcon,
  SettingIcon,
} from '@/components/icons';
import { Separator } from '@/components/ui/separator';

export default function MobileMenu() {
  const [pendingHref, setPendingHref] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (pendingHref && pathname.startsWith(pendingHref)) {
      setPendingHref(null);
    }
  }, [pathname, pendingHref]);

  const isActive = (href: string) =>
    pathname.startsWith(href) || pendingHref === href;

  return (
    <>
      <NavigationMenu
        viewport={false}
        className="w-full border-t max-w-full bg-white border-neutral-200 shadow-mobile-menu [&>div]:w-full">
        <NavigationMenuList className="flex items-center justify-between py-[var(--spacing-150)] px-[var(--spacing-200)]">
          <NavigationMenuItem>
            <NavigationMenuLink
              className={cn(
                'flex flex-col items-center justify-center shrink-0 cursor-pointer py-1',
                isActive('/allnotes')
                  ? 'text-blue-500 bg-blue-50 rounded-lg px-2'
                  : 'text-neutral-600 hover:text-blue-500 hover:bg-blue-50',
              )}
              asChild>
              <Link
                className="font-sans text-sm font-normal leading-[1.2] tracking-[-0.2px]"
                href="/allnotes"
                onClick={() => flushSync(() => setPendingHref('/allnotes'))}>
                <HomeIcon className="size-6 text-current" />
                <span className="hidden md:block">All Notes</span>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <Separator
            className="data-[orientation=vertical]:h-auto self-stretch shrink-0 hidden md:block lg:hidden"
            orientation="vertical"
          />
          <NavigationMenuItem>
            <NavigationMenuLink
              className={cn(
                'flex flex-col items-center justify-center shrink-0 cursor-pointer py-1',
                isActive('/search')
                  ? 'text-blue-500 bg-blue-50 rounded-lg px-2'
                  : 'text-neutral-600 hover:text-blue-500 hover:bg-blue-50',
              )}
              asChild>
              <Link
                className="font-sans text-sm font-normal leading-[1.2] tracking-[-0.2px]"
                href="/search"
                onClick={() => flushSync(() => setPendingHref('/search'))}>
                <SearchIcon className="size-6 text-current" />
                <span className="hidden md:block">Search</span>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <Separator
            className="data-[orientation=vertical]:h-auto self-stretch shrink-0 hidden md:block lg:hidden"
            orientation="vertical"
          />
          <NavigationMenuItem>
            <NavigationMenuLink
              className={cn(
                'flex flex-col items-center justify-center shrink-0 cursor-pointer py-1',
                isActive('/archivenotes')
                  ? 'text-blue-500 bg-blue-50 rounded-lg px-2'
                  : 'text-neutral-600 hover:text-blue-500 hover:bg-blue-50',
              )}
              asChild>
              <Link
                className="font-sans text-sm font-normal leading-[1.2] tracking-[-0.2px]"
                href="/archivenotes"
                onClick={() =>
                  flushSync(() => setPendingHref('/archivenotes'))
                }>
                <ArchiveIcon className="size-6 text-current" />
                <span className="hidden md:block">Archived</span>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <Separator
            className="data-[orientation=vertical]:h-auto self-stretch shrink-0 hidden md:block lg:hidden"
            orientation="vertical"
          />
          <NavigationMenuItem>
            <NavigationMenuLink
              className={cn(
                'flex flex-col items-center justify-center shrink-0 cursor-pointer py-1',
                isActive('/tags')
                  ? 'text-blue-500 bg-blue-50 rounded-lg px-2'
                  : 'text-neutral-600 hover:text-blue-500 hover:bg-blue-50',
              )}
              asChild>
              <Link
                className="font-sans text-sm font-normal leading-[1.2] tracking-[-0.2px]"
                href="/tags"
                onClick={() => flushSync(() => setPendingHref('/tags'))}>
                <TagIcon className="size-6 text-current" />
                <span className="hidden md:block">Tags</span>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <Separator
            className="data-[orientation=vertical]:h-auto self-stretch shrink-0 hidden md:block lg:hidden"
            orientation="vertical"
          />
          <NavigationMenuItem>
            <NavigationMenuLink
              className={cn(
                'flex flex-col items-center justify-center shrink-0 cursor-pointer py-1',
                isActive('/settings')
                  ? 'text-blue-500 bg-blue-50 rounded-lg px-2'
                  : 'text-neutral-600 hover:text-blue-500 hover:bg-blue-50',
              )}
              asChild>
              <Link
                className="font-sans text-sm font-normal leading-[1.2] tracking-[-0.2px]"
                href="/settings"
                onClick={() => flushSync(() => setPendingHref('/settings'))}>
                <SettingIcon className="size-6 text-current" />
                <span className="hidden md:block">Settings</span>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
