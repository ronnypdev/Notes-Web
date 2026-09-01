'use client';
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
import { DeleteIcon, ArchiveIcon, RefreshIcon } from '@/components/icons';

interface ModalProps {
  type: 'delete' | 'archive' | 'restore';
  onConfirm: () => void;
  children: React.ReactNode; // the element that opens the dialog
}

export const Modal = ({ type, onConfirm, children }: ModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-full border-none">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center justify-center bg-neutral-100 rounded-lg p-3 self-start">
            {type === 'delete' ? (
              <DeleteIcon className="size-6 text-neutral-950" />
            ) : type === 'archive' ? (
              <ArchiveIcon className="size-6 text-neutral-950" />
            ) : (
              <RefreshIcon className="size-6 text-neutral-950 rotate-180" />
            )}
          </div>
          <DialogHeader>
            <DialogTitle className="font-sans font-semibold">
              {type === 'delete'
                ? 'Delete Note'
                : type === 'archive'
                  ? 'Archive Note'
                  : 'Restore Note'}
            </DialogTitle>
            <DialogDescription className="font-sans font-normal">
              {type === 'delete'
                ? 'Are you sure you want to permanently delete this note? This action cannot be undone'
                : type === 'archive'
                  ? 'Are you sure you want to archive this note? You can find it in the Archived Notes section and restore it anytime.'
                  : 'Are you sure you want to retore this note? You can always archive your notes backs with out any issues. Just make sure you are restoring the correct note'}
            </DialogDescription>
          </DialogHeader>
        </div>

        <DialogFooter className="border-t border-solid border-neutral-200 pt-4">
          <DialogClose asChild>
            <Button variant="secondary" type="button">
              Cancel
            </Button>
          </DialogClose>

          <DialogClose asChild>
            <Button
              type="button"
              variant={type === 'delete' ? 'destructive' : 'default'}
              onClick={onConfirm}>
              {type === 'delete'
                ? 'Delete Note'
                : type === 'archive'
                  ? 'Archive Note'
                  : 'Restore Note'}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
