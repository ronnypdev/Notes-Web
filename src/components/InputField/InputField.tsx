import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface InputFieldProps {
  label: string;
  placeholder: string;
  type: 'text' | 'number' | 'email' | 'password';
  value: string;
  required?: boolean;
}

export default function InputField({
  label,
  placeholder,
  type,
  value,
  required,
}: InputFieldProps) {
  return (
    <>
      <Label htmlFor={label}>{label}</Label>
      <Input
        id={label}
        placeholder={placeholder}
        value={value}
        type={type}
        required={required}
      />
    </>
  );
}
