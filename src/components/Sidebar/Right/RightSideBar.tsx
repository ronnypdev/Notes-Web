import { Button } from "@/components/ui/button";
import { ArchiveIcon, DeleteIcon } from "@/components/icons";

export default function RightSideBar() {
  return (
    <aside className="w-[var(--sidebar-width)] border-l border-solid border-neutral-200 bg-background p-4 flex flex-col gap-2">
      <Button variant="outline" className="justify-start gap-2" size="lg">
        <ArchiveIcon />
        Archive Note
      </Button>
      <Button variant="outline" className="justify-start gap-2" size="lg">
        <DeleteIcon />
        Delete Note
      </Button>
    </aside>
  );
}
