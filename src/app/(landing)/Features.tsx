import { LandingIcon } from "./LandingIcon";
import { Section, SectionTitle } from "./Section";
import { FEATURES } from "./content";

export function Features() {
  return (
    <Section id="features">
      <SectionTitle>Everything a note needs, and nothing else.</SectionTitle>
      <div className="mt-10 grid gap-8 [grid-template-columns:repeat(auto-fit,minmax(210px,1fr))]">
        {FEATURES.map((f) => (
          <div key={f.title} className="flex flex-col gap-2.5">
            <LandingIcon name={f.icon} size={24} className="text-primary" />
            <div className="text-base font-semibold tracking-[-0.3px]">{f.title}</div>
            <p className="m-0 text-sm leading-[1.5] tracking-[-0.3px] text-muted-foreground text-pretty">
              {f.body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
