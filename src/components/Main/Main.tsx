import React from "react";

export default function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start grid-box-sidebar-main border-r border-neutral-200">
      {children}
    </main>
  );
}
