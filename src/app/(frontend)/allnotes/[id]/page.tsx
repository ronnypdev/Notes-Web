import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { TagIcon, CircleClockIcon, ArrowLeftIcon } from '@/components/icons';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function NoteItemDetails() {
  return (
    <>
      <article className="h-full flex flex-col">
        <header className="px-250 flex flex-col gap-200 text-neutral-950">
          <div className="mobile-properties lg:hidden">
            <Link className="flex items-center gap-1" href="/allnotes">
              <ArrowLeftIcon className="size-4 text-neutral-950" />
              Go Back
            </Link>
            <Separator className="my-200" />
          </div>
          <h6 className="text-neutral-950 font-sans font-bold text-2xl leading-[1.2] tracking-[-0.5px]">
            React Performance Optimization
          </h6>
          <div className="properties flex flex-col gap-4 items-start">
            <div className="tags flex items-center gap-4">
              <div className="tags-container flex items-center gap-1">
                <TagIcon className="size-4 text-neutral-950" />
                <span className="font-sans text-sm font-normal capitalize leading-[1.3] tracking-[-0.0125rem]">
                  Tags:
                </span>
              </div>
              <div className="tags-list flex items-center gap-2">
                <Badge variant="secondary">Dev</Badge>
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Performance</Badge>
              </div>
            </div>
            <div className="last-modified flex items-center gap-3">
              <div className="last-modified-container flex items-center gap-1">
                <CircleClockIcon className="size-4 text-neutral-950" />
                <span className="font-sans text-sm font-normal capitalize leading-[1.3] tracking-[-0.0125rem]">
                  Last Edited:
                </span>
              </div>
              <span className="font-sans text-sm font-normal capitalize leading-[1.3] tracking-[-0.0125rem]">
                29 Oct 2024
              </span>
            </div>
          </div>
        </header>
        <Separator className="my-4" />
        <Textarea
          className="text-neutral-950 flex-1 min-h-0 border-none resize-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
          placeholder="Enter your note content here..."
        />

        <Separator className="my-4" />

        <div className="actions flex items-center gap-2">
          <Button>Save</Button>
          <Button variant="secondary">Cancel</Button>
        </div>
      </article>
    </>
  );
}
