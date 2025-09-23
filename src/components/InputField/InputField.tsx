import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { InfoCircleIcon } from '@/components/icons';

interface InputFieldProps {
  label: string;
  placeholder: string;
  type: 'text' | 'number' | 'email' | 'password' | 'search';
  required?: boolean;
  info?: string;
}

export default function InputField({
  label,
  placeholder,
  type,
  required,
  info,
}: InputFieldProps) {
  return (
    <>
      <Label htmlFor={label}>
        {label}
        <Input
          id={label}
          placeholder={placeholder}
          type={type}
          required={required}
        />
      </Label>
      {info && (
        <div className="flex items-center gap-2 mt-1">
          <InfoCircleIcon className="w-4 h-4 text-neutral-600" />
          <span className="text-sm text-neutral-600">{info}</span>
        </div>
      )}
    </>
  );
}
