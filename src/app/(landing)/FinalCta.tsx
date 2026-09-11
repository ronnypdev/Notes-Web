import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="border-t border-border bg-accent px-6 py-22">
      <div className="mx-auto max-w-[680px] text-center">
        <h2 className="m-0 text-[clamp(28px,3.6vw,40px)] font-bold leading-[1.1] tracking-[-1.1px] text-pretty">
          Start keeping your notes organized.
        </h2>
        <p className="mx-auto mt-4 max-w-[520px] text-base leading-[1.5] tracking-[-0.3px] text-muted-foreground text-pretty">
          Create a free account and write your first note in under a minute. Free
          forever, with no tiers to compare.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" className="h-12 px-6 text-[15px]">
            <Link href="/signup">Create Your Free Account</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-12 px-5 text-[15px]">
            <Link href="/login">Log in</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
