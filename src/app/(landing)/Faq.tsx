"use client";

import { useState } from "react";
import { LandingIcon } from "./LandingIcon";
import { Section, SectionTitle } from "./Section";
import { FAQS } from "./content";

export function Faq({ openFirst = false }: { openFirst?: boolean }) {
  const [open, setOpen] = useState<number | null>(openFirst ? 0 : null);

  return (
    <Section id="faq">
      <div className="mx-auto max-w-[760px]">
        <SectionTitle>Questions before you sign up.</SectionTitle>
        <div className="mt-8 border-t border-border">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-border">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full cursor-pointer items-center gap-4 bg-transparent px-1 py-[18px] text-left text-base font-semibold tracking-[-0.3px] text-foreground transition-colors hover:text-primary"
                >
                  <span className="flex-1">{f.q}</span>
                  <LandingIcon name={isOpen ? "close" : "plus"} size={20} className="text-muted-foreground" />
                </button>
                {isOpen && (
                  <p className="m-0 pb-5 pl-1 pr-10 text-[15px] leading-[1.55] tracking-[-0.3px] text-muted-foreground text-pretty">
                    {f.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
