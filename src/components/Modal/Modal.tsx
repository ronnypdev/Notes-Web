import React from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { TrashIcon, DownloadIcon } from '@/components/icons';

interface ModalProps {
  type: 'delete' | 'archive';
}

export const Modal = ({ type }: ModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent className="max-w-full border-none">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {type === 'delete' ? (
              <TrashIcon className="size-6 text-neutral-400" />
            ) : (
              <DownloadIcon className="size-6 text-neutral-400" />
            )}
          </div>
          <DialogHeader>
            <DialogTitle>
              {type === 'delete' ? 'Delete Note' : 'Archive Note'}
            </DialogTitle>
            <DialogDescription>
              {type === 'delete'
                ? 'Are you sure you want to permanently delete this note? This action cannot be undone'
                : 'Are you sure you want to archive this note? You can find it in the Archived Notes section and restore it anytime.'}
            </DialogDescription>
          </DialogHeader>
        </div>

        <DialogFooter className="border-t border-solid border-neutral-200">
          <DialogClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DialogClose>
          {type === 'delete' ? (
            <Button type="submit" variant="destructive">
              Delete Note
            </Button>
          ) : (
            <Button type="submit">Archive Note</Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
