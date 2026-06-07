import { FieldSet, Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  TagIcon,
  CircleClockIcon,
  ArrowLeftIcon,
  ArchiveIcon,
  DeleteIcon,
} from '@/components/icons';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { TagInput } from 'emblor';

export default function NoteItemDetails() {
  return (
    <>
      <form className="h-full flex flex-col py-5 px-6">
        <header className="flex flex-col gap-200 text-neutral-950">
          <div className="mobile-properties-link lg:hidden flex items-center justify-between">
            <Link
              className="flex items-center gap-1 font-sans text-sm font-normal leading-[1.3] tracking-[-0.0125rem] text-neutral-600"
              href="/allnotes">
              <ArrowLeftIcon className="size-4 text-neutral-600" />
              Go Back
            </Link>
            <div className="mobile-properties-controls flex items-center gap-200">
              <DeleteIcon className="size-5 text-neutral-600 cursor-pointer" />
              <ArchiveIcon className="size-5 text-neutral-600 cursor-pointer" />
              <Button variant="link" className="text-neutral-600 p-0">
                Cancel
              </Button>
              <Button variant="link" className="p-0">
                Save
              </Button>
            </div>
          </div>
          <Separator className="block lg:hidden" />

          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="noteTitle"></FieldLabel>
                <Input
                  id="noteTitle"
                  type="text"
                  placeholder="Enter a title…"
                  className="text-neutral-950 font-sans font-bold text-xl md:text-2xl h-auto leading-[1.2] tracking-[-0.5px] border-none shadow-none placeholder:text-neutral-950"
                />
              </Field>
            </FieldGroup>
          </FieldSet>

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
          placeholder="Start typing your note here…"
        />

        <Separator className="my-4" />

        <div className="actions hidden lg:flex items-center gap-2">
          <Button>Save</Button>
          <Button variant="secondary">Cancel</Button>
        </div>
      </form>
    </>
  );
}
