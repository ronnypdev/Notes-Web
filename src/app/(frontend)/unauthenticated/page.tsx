import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function UnauthenticatedPage() {
  return (
    <div className="flex flex-col items-center justify-center h-dvh gap-3 text-center px-4">
      <h1 className="text-2xl font-semibold text-neutral-950">
        Sorry, you&apos;re not authenticated
      </h1>
      <p className="text-sm text-neutral-500 max-w-sm">
        Please click on the button below to get back to the sign up page.
      </p>
      <Button asChild variant="default">
        <Link href="/signup">Go back</Link>
      </Button>
    </div>
  );
}
