import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="top" className="px-6 pb-18 pt-24">
      <div className="mx-auto max-w-[800px] text-center">
        <span className="inline-block rounded-[4px] bg-[var(--color-blue-50)] px-2.5 py-[5px] text-xs font-medium tracking-[-0.2px] text-primary">
          Free. No tiers. No card.
        </span>

        <h1 className="mt-5 text-[clamp(34px,5.4vw,58px)] font-bold leading-[1.04] tracking-[-1.6px] text-pretty">
          A place to keep all your notes organized.
        </h1>

        <p className="mx-auto mt-[22px] max-w-[620px] text-[17px] leading-[1.5] tracking-[-0.2px] text-muted-foreground text-pretty">
          Notes is a free note-taking app for developers, students, writers, and
          anyone who works in text. Write a note, tag it, search it, archive it.
          Sign in and start — there is nothing to upgrade and nothing to pay.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" className="h-12 px-6 text-[15px]">
            <Link href="/signup">Start Taking Notes — Free</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-12 px-5 text-[15px]">
            <Link href="/login">Sign in with Google</Link>
          </Button>
        </div>

        <p className="mt-4 text-[13px] leading-[1.4] tracking-[-0.2px] text-muted-foreground">
          Email and password, or one click with Google. Every feature on this
          page is on the free account.
        </p>
      </div>
    </section>
  );
}
