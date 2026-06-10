// 'use client';

// import { useState } from 'react';
// import { useForm, Controller } from 'react-hook-form';
// import { Tag, TagInput } from 'emblor';
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
// import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function NoteItemDetails() {
  // const { control, handleSubmit, setValue } = useForm();
  // const [tags, setTags] = React.useState<Tag[]>([]);

  // const onSubmit = (data) => {
  //   console.log(data.tags); // Process tag data
  // };

  return (
    <>
      <section className="h-full flex flex-col py-5 px-6">
        <header className="flex flex-col gap-200 lg:hidden text-neutral-950">
          <div className="mobile-properties-link flex items-center justify-between">
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
        </header>

        <form className="flex-1 min-h-0 flex flex-col" action="/">
          <FieldSet className="flex-1 min-h-0">
            <FieldGroup className="properties flex flex-col gap-4 items-start">
              <Field>
                <FieldLabel htmlFor="noteTitle"></FieldLabel>
                <Input
                  id="noteTitle"
                  type="text"
                  placeholder="Enter a title…"
                  className="text-neutral-950 font-sans font-bold text-xl md:text-2xl h-auto leading-[1.2] tracking-[-0.5px] border-none shadow-none placeholder:text-neutral-950"
                />
              </Field>
              <Field
                orientation="horizontal"
                className="tags flex items-center gap-8">
                <div className="tags-container flex items-center gap-1">
                  <TagIcon className="size-4 text-neutral-950" />
                  <FieldLabel
                    htmlFor="tagsList"
                    className="font-sans text-sm font-normal capitalize leading-[1.3] tracking-[-0.0125rem]">
                    Tags:
                  </FieldLabel>
                </div>
                <Input
                  id="tagsList"
                  type="text"
                  placeholder="Add tags separated by commas (e.g. Work, Planning)"
                  className="text-neutral-400 font-sans font-normal text-sm md:text-sm h-auto leading-[1.3] tracking-[-0.2px] border-none shadow-none placeholder:text-neutral-400"
                />
              </Field>
              <Field
                orientation="horizontal"
                className="last-modified flex items-center gap-3">
                <div className="last-modified-container flex items-center gap-1 ">
                  <CircleClockIcon className="size-4 text-neutral-950" />
                  <FieldLabel
                    htmlFor="lastEdit"
                    className="font-sans text-sm font-normal capitalize leading-[1.3] tracking-[-0.0125rem] text-nowrap">
                    Last Edited:
                  </FieldLabel>
                </div>
                <Input
                  id="lastEdit"
                  type="date"
                  className="font-sans text-sm font-normal h-auto text-neutral-400 capitalize leading-[1.3] tracking-[-0.0125rem]  border-none shadow-none placeholder:text-neutral-400"
                  readOnly
                  placeholder="03/12/2026"
                />
              </Field>
              <Separator />
              <Field>
                <FieldLabel htmlFor="noteContent"></FieldLabel>
                <Textarea
                  id="noteContent"
                  className="text-neutral-950 flex-1 min-h-0 border-none resize-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none field-sizing-fixed"
                  placeholder="Start typing your note here…"
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <Separator className="my-4" />
          <div className="actions hidden lg:flex items-center gap-2">
            <Button>Save</Button>
            <Button variant="secondary">Cancel</Button>
          </div>
        </form>
      </section>
    </>
  );
}
