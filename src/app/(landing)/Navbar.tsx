import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "./content";

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background">
      <div className="mx-auto flex max-w-[1080px] items-center gap-6 px-6 py-3">
        <Link href="#top" className="flex items-center">
          <Image src="/logo.svg" alt="Notes" width={90} height={26} priority />
        </Link>

        <nav className="ml-auto hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm font-medium tracking-[-0.3px] text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <Link
            href="/login"
            className="px-3 py-2 text-sm font-medium tracking-[-0.3px] text-muted-foreground transition-colors hover:text-foreground"
          >
            Log in
          </Link>
          <Button asChild size="lg">
            <Link href="/signup">Sign up free</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
