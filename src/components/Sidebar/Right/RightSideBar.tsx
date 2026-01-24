import { Sidebar, SidebarHeader } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { ArchiveIcon, DeleteIcon } from "@/components/icons";

export default function RightSideBar() {
  return (
    <>
      <Sidebar side="right">
        <SidebarHeader>
          <Button variant="ghost" size="icon">
            <ArchiveIcon />
          </Button>
          <Button variant="ghost" size="icon">
            <DeleteIcon />
          </Button>
        </SidebarHeader>
      </Sidebar>
    </>
  );
}
