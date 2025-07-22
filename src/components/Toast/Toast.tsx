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
  return <div className={`toast ${type}`}>{message}</div>;
};
