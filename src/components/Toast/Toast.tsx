import { CheckCircleIcon, CloseRemoveIcon } from '@/components/icons';
import Link from 'next/link';

interface ToastProps {
  message: string;
  type?:
    | 'save'
    | 'archive'
    | 'delete'
    | 'restore'
    | 'update'
    | 'change'
    | 'addtag'
    | 'removetag';
  routeLink?: string;
}

export const Toast = ({ message, type, routeLink }: ToastProps) => {
  const toastNotificationType = (type: ToastProps['type']) => {
    switch (type) {
      case 'archive':
        return 'Archived Notes';
      case 'restore':
        return 'All Notes';
      default:
        return '';
    }
  };

  return (
    <div
      className={`toast ${type} w-full max-w-full flex items-center justify-between border border-solid border-neutral-200 rounded-lg p-[var(--spacing-100)] bg-neutral-0 shadow-toast`}>
      <div className="flex items-center gap-[var(--spacing-100)]">
        <CheckCircleIcon className="size-4 text-green-500" />
        <p className="text-xs text-neutral-950 font-sans font-normal leading-line-normal">
          {message}
        </p>
      </div>
      <div className="flex items-center gap-[var(--spacing-100)]">
        <Link
          href={routeLink || '/'}
          className="text-xs text-neutral-950 underline font-sans font-normal leading-line-sm tracking-tighter-xxs">
          {toastNotificationType(type)}
        </Link>
        <CloseRemoveIcon className="size-4 text-neutral-400 cursor-pointer" />
      </div>
    </div>
  );
};
