import * as React from "react";

/** Every landing section: full-bleed hairline top, 1080px content column. */
export function Section({
  id,
  tone = "default",
  className = "",
  children,
}: {
  id?: string;
  tone?: "default" | "accent";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`border-t border-border px-6 py-20 ${tone === "accent" ? "bg-accent" : ""} ${className}`}
    >
      <div className="mx-auto max-w-[1080px]">{children}</div>
    </section>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="m-0 text-[clamp(26px,3.2vw,34px)] font-bold leading-[1.12] tracking-[-0.9px]">
      {children}
    </h2>
  );
}

export function SectionLead({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-3.5 text-base leading-[1.5] tracking-[-0.3px] text-muted-foreground text-pretty">
      {children}
    </p>
  );
}
