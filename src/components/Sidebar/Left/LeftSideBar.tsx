import { Sidebar, SidebarFooter, SidebarHeader } from "@/components/ui/sidebar";

export default function LeftSideBar() {
  return (
    <>
      <Sidebar side="left">
        <SidebarHeader>Left Sidebar</SidebarHeader>
        <SidebarFooter>footer</SidebarFooter>
      </Sidebar>
    </>
  );
}
