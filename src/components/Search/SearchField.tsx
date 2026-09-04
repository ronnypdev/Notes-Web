'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Input } from '@/components/ui/input';

const NAVIGATE_DELAY_MS = 200;

interface SearchFieldProps {
  id: string;
  className?: string;
  placeholder?: string;
}
/**
 * The search box. `?q=` in the URL is the source of truth, but local
 * state backs the input so typing never waits on the router.
 *
 * On /search the URL is rewritten in place with history.replaceState —
 * no navigation, no RSC request. Anywhere else, typing navigates to
 * /search once after a short debounce, and from then on the in-place
 * path applies.
 */
export default function SearchField({
  id,
  className,
  placeholder = 'Search',
}: SearchFieldProps) {
  const pathname = usePathname();
  const router = useRouter();
  const urlQuery = useSearchParams().get('q') ?? '';
}
