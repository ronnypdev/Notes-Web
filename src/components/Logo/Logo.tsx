'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link
      href="/"
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative w-24 h-7 "
      data-name="logo">
      <div className="relative shrink-0" data-name="Feather Notes Logo">
        <Image
          alt="Logo Light version"
          aria-hidden
          className="hidden max-w-full size-full dark:block"
          src="/logowhite.svg"
          width={28}
          height={28}
        />
        <Image
          alt="Logo Dark version"
          className="block max-w-full size-full dark:hidden"
          src="/logo.svg"
          width={28}
          height={28}
        />
      </div>
    </Link>
  );
}
