'use client';

import { usePathname } from 'next/navigation';

export default function NotesPageLayout({
  children,
  notesList,
  basePath,
}: {
  children?: React.ReactNode;
  notesList: React.ReactNode;
  basePath: string;
}) {
  const pathname = usePathname();
  const isBaseRoute = pathname === `/${basePath}`;
  return (
    <section className="w-full h-full grid grid-cols-1 lg:grid-cols-[350px_1fr] grid-rows-[1fr]">
      <div
        className={`notes-sidebar w-full col-span-1 row-span-1 border-r border-neutral-200 py-5 pl-4 pr-8 ${isBaseRoute ? 'block' : 'hidden'} lg:block relative`}>
        {notesList}
      </div>
      <div
        className={`notes-content col-span-1 row-span-1 p-4 ${isBaseRoute ? 'hidden' : 'block'} lg:block`}>
        {children}
      </div>
    </section>
  );
}
