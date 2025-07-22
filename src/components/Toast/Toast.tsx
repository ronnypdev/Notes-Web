import { CheckCircleIcon, CloseIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';

interface ToastProps {
  message: string;
  type:
    | 'save'
    | 'archive'
    | 'delete'
    | 'restore'
    | 'update'
    | 'change'
    | 'addtag'
    | 'removetag';
}

export const Toast = ({ message, type }: ToastProps) => {
  return (
    <div
      className={`toast ${type} flex items-center border border-solid border-neutral-200 rounded-lg p-[var(--spacing-100)] bg-neutral-0 shadow-toast`}>
      {message}
    </div>
  );
};
