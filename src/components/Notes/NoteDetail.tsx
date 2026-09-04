'use client';

import { useContext, useRef, useTransition } from 'react';
import { NotesContext } from '@/context/NotesContext';
import { saveNote, updateNote } from '@/lib/utilities/notes-actions';
import { ClientNote } from '@/types';

import NoteTagsField from '@/components/NoteTags/NoteTagsField';
import { Modal } from '@/components/Modal/Modal';

import { toast } from 'sonner';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';

import { FieldSet, Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  TagIcon,
  CircleClockIcon,
  LoadingIcon,
  ArrowLeftIcon,
  ArchiveIcon,
  RefreshIcon,
  DeleteIcon,
} from '@/components/icons';

interface NoteDetailProps {
  /** Where "Go Back", Cancel and Delete return to. */
  backHref: string;
  /**
   * Where to land after archiving or restoring. Omit to stay on the note,
   * which is what /search wants — its list spans both collections, so the
   * note never leaves the results.
   */
  afterStatusChangeHref?: string;
}

/**
 * The note editor. Everything that used to be decided by the route is
 * derived from the note itself — an archived note offers Restore, an active
 * one offers Archive — so one component serves any collection.
 */
export default function NoteDetail({
  backHref,
  afterStatusChangeHref,
}: NoteDetailProps) {
  const originalNoteRef = useRef<ClientNote | null>(null);
  const {
    noteCollection,
    changeNote,
    cancelDraft,
    markNoteSaved,
    removeNote,
    archiveNote,
  } = useContext(NotesContext);
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

  const isArchived = currentNote.archive;

  const handleSave = () => {
    startTransition(async () => {
      const result = currentNote.isDraft
        ? await saveNote({
            id: currentNote.id,
            title: currentNote.title,
            content: currentNote.content,
            tags: currentNote.tags,
            archive: currentNote.archive,
          })
        : await updateNote(currentNote.id, {
            title: currentNote.title,
            content: currentNote.content,
            tags: currentNote.tags ?? [],
          });

      if (result.success) {
        markNoteSaved(currentNote.id, result.note[0]);
        originalNoteRef.current = { ...result.note[0], isDraft: false }; // new baseline
        toast.success('Note saved', { position: 'bottom-right' });
      } else {
        toast.error('Failed to save note', { position: 'bottom-right' });
        // draft stays in place so the user can retry
      }
    });
  };

  const handleCancel = () => {
    if (currentNote.isDraft) {
      cancelDraft(currentNote.id);
    } else if (originalNoteRef.current) {
      changeNote(currentNote.id, originalNoteRef.current); // restore saved values
    }
    router.push(backHref);
  };

  const handleDelete = () => {
    removeNote(currentNote.id);
    router.push(backHref);
  };

  // One action, two directions. The provider already rejects drafts and
  // toasts, so we only decide whether to navigate afterwards.
  const handleStatusChange = () => {
    const wasDraft = currentNote.isDraft;
    archiveNote(currentNote.id, !isArchived);
    if (!wasDraft && afterStatusChangeHref) {
      router.push(afterStatusChangeHref);
    }
  };

  return (
    <section className="h-full flex flex-col py-5 px-6">
      <header className="flex flex-col gap-200 lg:hidden text-neutral-950">
        <div className="mobile-properties-link flex items-center justify-between">
          <Link
            className="flex items-center gap-1 font-sans text-sm font-normal leading-[1.3] tracking-[-0.0125rem] text-neutral-600"
            href={backHref}>
            <ArrowLeftIcon className="size-4 text-neutral-600" />
            Go Back
          </Link>
          <div className="mobile-properties-controls flex items-center gap-200">
            <Modal type="delete" onConfirm={handleDelete}>
              <button
                type="button"
                aria-label="Delete note"
                className="cursor-pointer text-neutral-600">
                <DeleteIcon className="size-5" />
              </button>
            </Modal>
            <Modal
              type={isArchived ? 'restore' : 'archive'}
              onConfirm={handleStatusChange}>
              <button
                type="button"
                aria-label={isArchived ? 'Restore note' : 'Archive note'}
                disabled={currentNote.isDraft}
                className="cursor-pointer text-neutral-600 disabled:opacity-50 disabled:cursor-not-allowed">
                {isArchived ? (
                  <RefreshIcon className="size-5 rotate-180" />
                ) : (
                  <ArchiveIcon className="size-5" />
                )}
              </button>
            </Modal>
            <Button
              variant="link"
              className="text-neutral-600 p-0"
              onClick={handleCancel}
              disabled={isPending}
              type="button">
              Cancel
            </Button>
            <Button
              variant="link"
              className="p-0"
              onClick={handleSave}
              disabled={isPending}
              type="button">
              Save
            </Button>
          </div>
        </div>
        <Separator className="block lg:hidden" />
      </header>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSave();
        }}
        className="flex-1 min-h-0 flex flex-col">
        <FieldSet className="flex-1 min-h-0">
          <FieldGroup className="properties flex flex-col gap-4 items-start">
            <Field>
              <FieldLabel htmlFor="noteTitle"></FieldLabel>
              <Input
                id="noteTitle"
                type="text"
                value={currentNote.title ?? ''}
                onChange={(e) =>
                  changeNote(currentNote.id, { title: e.target.value })
                }
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
              <NoteTagsField
                key={currentNote.id}
                tags={currentNote.tags ?? []}
                onTagsChange={(tags) => changeNote(currentNote.id, { tags })}
              />
            </Field>
            {isArchived && (
              <Field
                orientation="horizontal"
                className="status flex items-center gap-3">
                <div className="status-container flex items-center gap-1">
                  <LoadingIcon className="size-4 text-neutral-950" />
                  <span className="font-sans text-sm font-normal capitalize leading-[1.3] tracking-[-0.0125rem]">
                    Status:
                  </span>
                </div>
                <span className="font-sans text-sm font-normal capitalize leading-[1.3] tracking-[-0.0125rem]">
                  Archived
                </span>
              </Field>
            )}
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
              {currentNote.lastEdited}
            </Field>
            <Separator />
            <Field>
              <FieldLabel htmlFor="noteContent"></FieldLabel>
              <Textarea
                id="noteContent"
                className="text-neutral-950 flex-1 min-h-0 border-none resize-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none field-sizing-fixed"
                placeholder="Start typing your note here…"
                value={currentNote.content ?? ''}
                onChange={(e) =>
                  changeNote(currentNote.id, { content: e.target.value })
                }
              />
            </Field>
          </FieldGroup>
        </FieldSet>
        <Separator className="my-4" />
        <div className="actions hidden lg:flex items-center gap-2">
          <Button onClick={handleSave} disabled={isPending} type="button">
            Save
          </Button>
          <Button
            variant="secondary"
            onClick={handleCancel}
            disabled={isPending}
            type="button">
            Cancel
          </Button>
        </div>
      </form>
    </section>
  );
}
