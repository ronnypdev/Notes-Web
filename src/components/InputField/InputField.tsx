import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InfoCircleIcon, ShowIcon, SearchIcon } from "@/components/icons";

interface InputFieldProps {
  label: string;
  labelName?: string;
  placeholder: string;
  type: "text" | "number" | "email" | "password" | "search";
  required?: boolean;
  info?: string;
}

export default function InputField({
  label,
  labelName,
  placeholder,
  type,
  required,
  info,
}: InputFieldProps) {
  return (
    <>
      <div className="flex flex-col gap-2 max-w-full w-full">
        {label && (
          <Label htmlFor={label} className="self-start">
            {labelName}
          </Label>
        )}
        <div className="relative w-full flex items-center">
          {type === "search" && (
            <SearchIcon className="w-5 h-5 text-neutral-600 absolute left-2 -top-0.5 translate-y-1/2" />
          )}
          <Input
            className={`${type === "search" ? "px-8" : ""}`}
            id={label}
            placeholder={placeholder}
            type={type}
            required={required}
          />
          {type === "password" && (
            <ShowIcon className="w-4 h-4 text-neutral-600 absolute right-2 top-1/2 -translate-y-1/2" />
          )}
        </div>
      </div>
      {info && (
        <div className="flex items-center relative bottom-5">
          <InfoCircleIcon className="w-4 h-4 text-neutral-600" />
          <span className="text-sm text-neutral-600">{info}</span>
        </div>
      )}
    </>
  );
}
