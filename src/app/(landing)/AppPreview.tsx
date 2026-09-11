import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LandingIcon } from "./LandingIcon";
import { SectionTitle, SectionLead } from "./Section";

function TagChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-[4px] bg-accent px-2 py-1 text-xs tracking-[-0.2px] text-foreground">
      {children}
    </span>
  );
}

function NoteCard({
  title,
  tags,
  lastEdited,
  active = false,
}: {
  title: string;
  tags: string[];
  lastEdited: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex w-full flex-col items-start gap-3 rounded-md border-b border-border p-2 ${
        active ? "bg-accent" : "bg-background shadow-[0px_8px_12px_0px_rgba(240,240,240,0.6)] dark:shadow-none"
      }`}
    >
      <div className="text-base font-semibold leading-[1.2] tracking-[-0.3px]">{title}</div>
      <div className="flex flex-wrap items-center gap-1">
        {tags.map((t) => (
          <TagChip key={t}>{t}</TagChip>
        ))}
      </div>
      <div className="text-xs leading-[1.2] tracking-[-0.2px] text-muted-foreground">{lastEdited}</div>
    </div>
  );
}

function SidebarRow({
  icon,
  label,
  active = false,
}: {
  icon: "home" | "archive" | "setting";
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium tracking-[-0.3px] ${
        active ? "bg-accent text-foreground" : "text-muted-foreground"
      }`}
    >
      <LandingIcon name={icon} size={20} className={active ? "text-primary" : ""} />
      {label}
    </div>
  );
}

/** Static three-pane recreation of the app, used as the hero-adjacent proof shot. */
export function AppPreview() {
  return (
    <section className="border-t border-border px-6 pb-20 pt-18">
      <div className="mx-auto max-w-[1080px]">
        <div className="max-w-[620px]">
          <SectionTitle>The whole app is three panes.</SectionTitle>
          <SectionLead>
            Navigation on the left, your notes in the middle, the note you are
            reading on the right. On a phone the same three panes become one view
            with a slide-out menu.
          </SectionLead>
        </div>

        <div className="mt-8 overflow-x-auto rounded-xl border border-border bg-background shadow-[0px_8px_12px_0px_rgba(240,240,240,0.6)] dark:shadow-none">
          <div className="grid min-w-[860px] grid-cols-[220px_300px_1fr]">
            {/* Pane 1 — navigation */}
            <div className="flex flex-col gap-5 border-r border-border p-4 pt-5">
              <Image src="/logo.svg" alt="Notes" width={82} height={24} />
              <div className="flex flex-col gap-0.5">
                <SidebarRow icon="home" label="All Notes" active />
                <SidebarRow icon="archive" label="Archived Notes" />
                <SidebarRow icon="setting" label="Settings" />
              </div>
              <div className="h-px bg-border" />
              <div className="flex items-center gap-2 text-xs tracking-[-0.2px] text-muted-foreground">
                <LandingIcon name="tag" size={16} />
                Tags
              </div>
              <div className="flex flex-wrap gap-1.5">
                <TagChip>Dev</TagChip>
                <TagChip>Research</TagChip>
                <TagChip>Reading</TagChip>
              </div>
            </div>

            {/* Pane 2 — note list */}
            <div className="flex flex-col gap-3.5 border-r border-border p-4">
              <Button size="lg" className="w-full">
                + Create New Note
              </Button>
              <NoteCard title="React Hooks Cheatsheet" tags={["Dev", "React"]} lastEdited="29 Oct 2025" active />
              <NoteCard title="Thesis Sources — Chapter 2" tags={["Research", "Thesis"]} lastEdited="28 Oct 2025" />
              <NoteCard title="Interview Notes: Onboarding" tags={["Work"]} lastEdited="21 Oct 2025" />
            </div>

            {/* Pane 3 — the note */}
            <div className="flex flex-col gap-[18px] px-7 py-6">
              <div className="text-xl font-bold leading-[1.2] tracking-[-0.5px]">React Hooks Cheatsheet</div>
              <div className="flex flex-col gap-2.5 text-xs tracking-[-0.2px] text-muted-foreground">
                <div className="flex items-center gap-2.5">
                  <LandingIcon name="tag" size={16} />
                  <span className="w-[92px]">Tags:</span>
                  <span className="text-foreground">Dev, React</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <LandingIcon name="clock" size={16} />
                  <span className="w-[92px]">Last Edited:</span>
                  <span className="text-foreground">29 Oct 2025</span>
                </div>
              </div>
              <div className="h-px bg-border" />
              <div className="text-sm leading-[1.6] tracking-[-0.3px]">
                useState for local state. useEffect for side effects — remember the
                dependency array. useMemo and useCallback only when a render is
                measurably expensive.
              </div>
              <div className="text-sm leading-[1.6] tracking-[-0.3px] text-muted-foreground">
                Start typing your note here…
              </div>
              <div className="mt-auto flex gap-2 pt-5">
                <Button size="lg">Save Note</Button>
                <Button size="lg" variant="secondary">Cancel</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
