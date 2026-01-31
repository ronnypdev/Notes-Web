import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarFooter,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import Logo from '@/components/Logo/Logo';
import { ArchiveIcon, HomeIcon, ChevronRightIcon } from '@/components/icons';

export default function LeftSideBar() {
  return (
    <>
      <Sidebar side="left">
        <SidebarHeader>
          <div className="py-3 px-4 my-3">
            <Logo />
          </div>
          <div className="flex flex-col gap-2">
            <Link
              href="/allnotes"
              className="py-1.5 px-3 flex items-center gap-2 text-neutral-950">
              <HomeIcon className="w-6 h-6" />
              <span>All Notes</span>
              <ChevronRightIcon className="w-6 h-6 ml-auto" />
            </Link>
            <Link
              href="/archivenotes"
              className="py-1.5 px-3 flex items-center gap-2 text-neutral-950">
              <ArchiveIcon className="w-6 h-6" />
              <span>Archived Notes</span>
              <ChevronRightIcon className="w-6 h-6 ml-auto" />
            </Link>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Tags</SidebarGroupLabel>
            <ul className="tags">
              <li>
                <a href="#">
                  <span>Cooking</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Dev</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Fitness</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Health</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Personal</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>React</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Shopping</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Travel</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>TypeScript</span>
                </a>
              </li>
            </ul>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>A place to keep all your notes organized</SidebarFooter>
      </Sidebar>
    </>
  );
}
