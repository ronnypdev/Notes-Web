import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section, SectionTitle } from "./Section";
import { STEPS } from "./content";

export function HowItWorks() {
  return (
    <Section id="how" tone="accent">
      <SectionTitle>Organized notes in three steps.</SectionTitle>
      <div className="mt-10 grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]">
        {STEPS.map((s, i) => (
          <div key={s.title} className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground">
              {i + 1}
            </div>
            <div className="text-base font-semibold tracking-[-0.3px]">{s.title}</div>
            <p className="m-0 text-sm leading-[1.5] tracking-[-0.3px] text-muted-foreground text-pretty">
              {s.body}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-7">
        <Button asChild size="lg" className="h-12 px-6 text-[15px]">
          <Link href="/signup">Start Your First Note — Free</Link>
        </Button>
      </div>
    </Section>
  );
}
