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

  const [value, setValue] = useState(urlQuery);
  // The last value this field itself wrote to the URL. Lets the effect
  // below tell an external change (back button, fresh load with ?q=)
  // apart from our own write, which must not clobber what's being typed.
  const lastWritten = useRef(urlQuery);
  const navigateTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (urlQuery !== lastWritten.current) {
      lastWritten.current = urlQuery;
      setValue(urlQuery);
    }
  }, [urlQuery]);

  // Drop a queued navigation if the route changes first — otherwise
  // clicking away mid-keystroke yanks you to /search a moment later.
  useEffect(() => {
    return () => {
      if (navigateTimer.current) {
        clearTimeout(navigateTimer.current);
      }
    };
  }, [pathname]);

  function handleChange(next: string) {
    setValue(next);
    lastWritten.current = next;

    if (pathname.startsWith('/search')) {
      // Keep the current path (including an open note) and swap the query.
      const queryString = next.trim() ? `?q=${encodeURIComponent(next)}` : '';
      window.history.replaceState(null, '', `${pathname}${queryString}`);
      return;
    }

    if (navigateTimer.current) {
      clearTimeout(navigateTimer.current);
    }

    navigateTimer.current = setTimeout(() => {
      if (!next.trim()) return;
      router.push(`/search?q=${encodeURIComponent(next)}`);
    }, NAVIGATE_DELAY_MS);
  }
  return (
    <Input
      id={id}
      type="search"
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
}
