'use client';

import { useContext, useTransition, useRef } from 'react';
import { NotesContext } from '@/context/NotesContext';
import { updateNote } from '@/lib/utilities/notes-actions';
import { ClientNote } from '@/types';
import NoteTagsField from '@/components/NoteTags/NoteTagsField';
import { toast } from 'sonner';
import { useParams, useRouter } from 'next/navigation';
import { FieldSet, Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Modal } from '@/components/Modal/Modal';

import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  TagIcon,
  CircleClockIcon,
  LoadingIcon,
  ArrowLeftIcon,
  RefreshIcon,
  DeleteIcon,
} from '@/components/icons';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

export default function ArchivedNoteDetails() {
  const originalNoteRef = useRef<ClientNote | null>(null);
  const { noteCollection, changeNote, markNoteSaved, removeNote, archiveNote } =
    useContext(NotesContext);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const params = useParams();
  const currentNote = noteCollection.find((note) => note.id === params.id);

  if (!currentNote) return null;

  // Capture the saved snapshot once per note. Keyed on id, so typing
  // (same id, new object each keystroke) never overwrites the baseline.
  if (originalNoteRef.current?.id !== currentNote.id) {
    originalNoteRef.current = currentNote;
  }

  const handleSave = () => {
    startTransition(async () => {
      const result = await updateNote(currentNote.id, {
        title: currentNote.title,
        content: currentNote.content,
        tags: currentNote.tags ?? [],
      });
      if (result.success) {
        markNoteSaved(currentNote.id, result.note[0]);
        originalNoteRef.current = { ...result.note[0], isDraft: false };
        toast.success('Note saved', { position: 'bottom-right' });
      } else {
        toast.error('Failed to save note', { position: 'bottom-right' });
      }
    });
  };

  return (
    <>
      <article className="h-full flex flex-col">
        <header className="px-250 flex flex-col gap-200 text-neutral-950">
          <div className="mobile-properties-link lg:hidden flex items-center justify-between">
            <Link
              className="flex items-center gap-1 font-sans text-sm font-normal leading-[1.3] tracking-[-0.0125rem] text-neutral-600"
              href="/archivenotes">
              <ArrowLeftIcon className="size-4 text-neutral-600" />
              Go Back
            </Link>
            <div className="mobile-properties-controls flex items-center gap-200">
              <DeleteIcon className="size-5 text-neutral-600 cursor-pointer" />
              <RefreshIcon className="size-5 text-neutral-600 cursor-pointer rotate-180" />
              <Button variant="link" className="text-neutral-600 p-0">
                Cancel
              </Button>
              <Button variant="link" className="p-0">
                Save
              </Button>
            </div>
          </div>
          <Separator className="block lg:hidden" />
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
            <div className="status flex items-center gap-3">
              <div className="status-container flex items-center gap-1">
                <LoadingIcon className="size-4 text-neutral-950" />
                <span className="font-sans text-sm font-normal capitalize leading-[1.3] tracking-[-0.0125rem]">
                  Status:
                </span>
              </div>
              <span className="font-sans text-sm font-normal capitalize leading-[1.3] tracking-[-0.0125rem]">
                Archived
              </span>
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

        <div className="actions hidden lg:flex items-center gap-2">
          <Button>Save</Button>
          <Button variant="secondary">Cancel</Button>
        </div>
      </article>
    </>
  );
}
