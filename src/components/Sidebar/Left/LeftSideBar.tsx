import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarFooter,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Logo from "@/components/Logo/Logo";
import { ArchiveIcon, HomeIcon } from "@/components/icons";

export default function LeftSideBar() {
  return (
    <>
      <Sidebar side="left">
        <SidebarHeader>
          <div className="py-3 px-4 my-3">
            <Logo />
          </div>
          <div className="flex flex-col gap-1">
            <div className="py-2.5 px-3 my-1 flex items-center gap-2 text-neutral-500">
              <HomeIcon className="w-4 h-4" />
              <Link href="/allnotes">All Notes</Link>
            </div>
            <div className="py-2.5 px-3 my-1 flex items-center gap-2 text-neutral-500">
              <ArchiveIcon className="w-4 h-4" />
              <Link href="/archivenotes">Archive Notes</Link>
            </div>
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
