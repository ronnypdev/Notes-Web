import React from "react";

export default function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col gap-[32px] items-center sm:items-start">
      {children}
    </main>
  );
}
