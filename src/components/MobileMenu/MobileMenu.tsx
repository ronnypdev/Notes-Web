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

export default function MobileMenu() {
  return (
    <>
      <NavigationMenu
        viewport={false}
        className="w-full border-t max-w-full bg-white border-neutral-200 shadow-mobile-menu [&>div]:w-full">
        <NavigationMenuList className="flex items-center justify-between py-[var(--spacing-150)] px-[var(--spacing-200)]">
          <NavigationMenuItem className="cursor-pointer">
            <HomeIcon className="size-5" />
            <NavigationMenuLink asChild>
              <Link href="/allnotes">All Notes</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="cursor-pointer">
            <SearchIcon className="size-5" />
            <NavigationMenuLink asChild>
              <Link href="/allnotes">Search</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="cursor-pointer">
            <ArchiveIcon className="size-5" />
            <NavigationMenuLink asChild>
              <Link href="/archivenotes">Archived</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="cursor-pointer">
            <TagIcon className="size-5" />
            <NavigationMenuLink asChild>
              <Link href="/tags">Tags</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="cursor-pointer">
            <SettingIcon className="size-5" />
            <NavigationMenuLink asChild>
              <Link href="/settings">Settings</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
