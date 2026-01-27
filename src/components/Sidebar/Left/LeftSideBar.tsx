import { Sidebar, SidebarFooter, SidebarHeader } from "@/components/ui/sidebar";
import Link from "next/link";

export default function LeftSideBar() {
  return (
    <>
      <Sidebar side="left">
        <SidebarHeader>
          <Link href="/allnotes">All Notes</Link>
          <Link href="/archivenotes">Archive Notes</Link>
        </SidebarHeader>
        <SidebarFooter>footer</SidebarFooter>
      </Sidebar>
    </>
  );
}
