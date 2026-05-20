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
          <NavigationMenuItem>
            <NavigationMenuLink
              className="flex flex-col items-center justify-center shrink-0 cursor-pointer py-1 text-neutral-600 hover:text-blue-500 hover:bg-blue-50 group/menu-link"
              asChild>
              <Link
                className="font-sans text-sm font-normal leading-[1.2] tracking-[-0.2px]"
                href="/allnotes">
                <HomeIcon className="group-hover/menu-link:text-blue-500 size-6" />
                All Notes
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <Separator
            className="data-[orientation=vertical]:h-auto self-stretch shrink-0 hidden md:block lg:hidden"
            orientation="vertical"
          />
          <NavigationMenuItem>
            <NavigationMenuLink
              className="flex flex-col items-center justify-center shrink-0 cursor-pointer py-1 text-neutral-600 hover:text-blue-500 hover:bg-blue-50 group/menu-link"
              asChild>
              <Link
                className="font-sans text-sm font-normal leading-[1.2] tracking-[-0.2px]"
                href="#">
                <SearchIcon className="group-hover/menu-link:text-blue-500 size-6" />
                Search
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <Separator
            className="data-[orientation=vertical]:h-auto self-stretch shrink-0 hidden md:block lg:hidden"
            orientation="vertical"
          />
          <NavigationMenuItem>
            <NavigationMenuLink
              className="flex flex-col items-center justify-center shrink-0 cursor-pointer py-1 text-neutral-600 hover:text-blue-500 hover:bg-blue-50 group/menu-link"
              asChild>
              <Link
                className="font-sans text-sm font-normal leading-[1.2] tracking-[-0.2px]"
                href="/archivenotes">
                <ArchiveIcon className="group-hover/menu-link:text-blue-500 size-6" />
                Archived
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <Separator
            className="data-[orientation=vertical]:h-auto self-stretch shrink-0 hidden md:block lg:hidden"
            orientation="vertical"
          />
          <NavigationMenuItem>
            <NavigationMenuLink
              className="flex flex-col items-center justify-center shrink-0 cursor-pointer py-1 text-neutral-600 hover:text-blue-500 hover:bg-blue-50 group/menu-link"
              asChild>
              <Link
                className="font-sans text-sm font-normal leading-[1.2] tracking-[-0.2px]"
                href="#">
                <TagIcon className="group-hover/menu-link:text-blue-500 size-6" />
                Tags
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <Separator
            className="data-[orientation=vertical]:h-auto self-stretch shrink-0 hidden md:block lg:hidden"
            orientation="vertical"
          />
          <NavigationMenuItem>
            <NavigationMenuLink
              className="flex flex-col items-center justify-center shrink-0 cursor-pointer py-1 text-neutral-600 hover:text-blue-500 hover:bg-blue-50 group/menu-link"
              asChild>
              <Link
                className="font-sans text-sm font-normal leading-[1.2] tracking-[-0.2px]"
                href="#">
                <SettingIcon className="group-hover/menu-link:text-blue-500 size-6" />
                Settings
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
