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

export default function LeftSideBar() {
  return (
    <>
      <Sidebar side="left">
        <SidebarHeader>
          <Logo />
          <Link href="/allnotes">All Notes</Link>
          <Link href="/archivenotes">Archive Notes</Link>
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
