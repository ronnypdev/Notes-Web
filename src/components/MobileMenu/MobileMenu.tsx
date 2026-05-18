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
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <HomeIcon className="size-5" />
            <NavigationMenuLink asChild>
              <Link href="/allnotes">All Notes</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <SearchIcon className="size-5" />
            <NavigationMenuLink asChild>
              <Link href="/allnotes">Search</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <ArchiveIcon className="size-5" />
            <NavigationMenuLink asChild>
              <Link href="/archivenotes">Archived Notes</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <TagIcon className="size-5" />
            <NavigationMenuLink asChild>
              <Link href="/tags">Tags</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
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
