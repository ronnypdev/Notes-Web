import { Section, SectionTitle } from "./Section";
import { BENEFITS } from "./content";

export function Benefits() {
  return (
    <Section>
      <SectionTitle>Why people keep using it.</SectionTitle>
      {/* Two columns max so four cards always fill complete rows. */}
      <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-card [grid-template-columns:repeat(auto-fit,minmax(280px,calc(50%-1px)))]">
        {BENEFITS.map((b) => (
          <div key={b.title} className="flex flex-col gap-2.5 bg-card p-7 outline outline-1 outline-border">
            <div className="text-lg font-semibold tracking-[-0.4px]">{b.title}</div>
            <p className="m-0 text-sm leading-[1.5] tracking-[-0.3px] text-muted-foreground text-pretty">
              {b.body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
