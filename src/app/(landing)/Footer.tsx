import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "./content";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-[1080px] flex-wrap items-center gap-6">
        <div className="flex flex-col gap-2">
          <Image src="/logo.svg" alt="Notes" width={82} height={24} />
          <div className="text-xs tracking-[-0.2px] text-muted-foreground">
            A place to keep all your notes organized.
          </div>
        </div>

        <nav className="ml-auto flex flex-wrap gap-5 text-[13px] tracking-[-0.2px]">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-muted-foreground transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
          <Link href="/login" className="text-muted-foreground transition-colors hover:text-foreground">Log in</Link>
          <Link href="/signup" className="text-muted-foreground transition-colors hover:text-foreground">Sign up</Link>
        </nav>

        <div className="w-full border-t border-border pt-5 text-xs tracking-[-0.2px] text-muted-foreground">
          © {new Date().getFullYear()} Notes. Privacy Policy · Terms
        </div>
      </div>
    </footer>
  );
}
