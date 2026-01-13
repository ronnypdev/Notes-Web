"use client";
import Link from "next/link";
import Image from "next/image";
const img = "/logo.svg"; // Replace with actual SVG path if available in public folder

export default function Logo() {
  return (
    <Link
      href="/"
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative w-24 h-7 lg:hidden"
      data-name="logo">
      <div className="relative shrink-0" data-name="Feather Notes Logo">
        <Image
          alt="Logo icon"
          className="block max-w-full size-full"
          src={img}
          width={28}
          height={28}
        />
      </div>
    </Link>
  );
}
