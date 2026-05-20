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
import { Separator } from '../ui/separator';

export default function MobileMenu() {
  return (
    <>
      <NavigationMenu
        viewport={false}
        className="w-full border-t max-w-full bg-white border-neutral-200 shadow-mobile-menu [&>div]:w-full">
        <NavigationMenuList className="flex items-center justify-between py-[var(--spacing-150)] px-[var(--spacing-200)]">
          <NavigationMenuItem className="flex flex-col items-center justify-center shrink-0 cursor-pointer py-1 text-neutral-600">
            <HomeIcon className="size-6" />
            <NavigationMenuLink asChild>
              <Link
                className="font-sans text-sm font-normal leading-[1.2] tracking-[-0.2px]"
                href="/allnotes">
                All Notes
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <Separator
            className="data-[orientation=vertical]:h-auto self-stretch shrink-0 hidden md:block lg:hidden"
            orientation="vertical"
          />
          <NavigationMenuItem className="flex flex-col items-center justify-center shrink-0 cursor-pointer py-1 text-neutral-600">
            <SearchIcon className="size-6" />
            <NavigationMenuLink asChild>
              <Link
                className="font-sans text-sm font-normal leading-[1.2] tracking-[-0.2px]"
                href="#">
                Search
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <Separator
            className="data-[orientation=vertical]:h-auto self-stretch shrink-0 hidden md:block lg:hidden"
            orientation="vertical"
          />
          <NavigationMenuItem className="flex flex-col items-center justify-center shrink-0 cursor-pointer py-1 text-neutral-600">
            <ArchiveIcon className="size-6" />
            <NavigationMenuLink asChild>
              <Link
                className="font-sans text-sm font-normal leading-[1.2] tracking-[-0.2px]"
                href="/archivenotes">
                Archived
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <Separator
            className="data-[orientation=vertical]:h-auto self-stretch shrink-0 hidden md:block lg:hidden"
            orientation="vertical"
          />
          <NavigationMenuItem className="flex flex-col items-center justify-center shrink-0 cursor-pointer py-1 text-neutral-600">
            <TagIcon className="size-6" />
            <NavigationMenuLink asChild>
              <Link
                className="font-sans text-sm font-normal leading-[1.2] tracking-[-0.2px]"
                href="#">
                Tags
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <Separator
            className="data-[orientation=vertical]:h-auto self-stretch shrink-0 hidden md:block lg:hidden"
            orientation="vertical"
          />
          <NavigationMenuItem className="flex flex-col items-center justify-center shrink-0 cursor-pointer py-1 text-neutral-600">
            <SettingIcon className="size-6" />
            <NavigationMenuLink asChild>
              <Link
                className="font-sans text-sm font-normal leading-[1.2] tracking-[-0.2px]"
                href="#">
                Settings
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
