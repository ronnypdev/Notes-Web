import { LandingIcon } from "./LandingIcon";
import { Section, SectionTitle, SectionLead } from "./Section";
import { SECURITY_POINTS } from "./content";

export function Security() {
  return (
    <Section id="security">
      <div className="grid items-start gap-12 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
        <div>
          <SectionTitle>Your notes require your sign-in.</SectionTitle>
          <SectionLead>
            Built on Next.js 15, React 19, Tailwind CSS 4, Neon Postgres with
            Drizzle, and Better Auth.
          </SectionLead>
        </div>
        <div className="flex flex-col gap-6">
          {SECURITY_POINTS.map((p) => (
            <div key={p.title} className="flex gap-3.5">
              <LandingIcon name={p.icon} size={20} className="text-primary" />
              <div>
                <div className="text-[15px] font-semibold tracking-[-0.3px]">{p.title}</div>
                <p className="mt-1 text-sm leading-[1.5] tracking-[-0.3px] text-muted-foreground">
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
