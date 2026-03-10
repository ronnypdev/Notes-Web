'use client';

import InputField from '@/components/InputField/InputField';
import { Button } from '@/components/ui/button';
import GoogleIcon from '@/components/icons/GoogleIcon';
import Link from 'next/link';
import Image from 'next/image';

interface InputFieldData {
  label: string;
  labelName: string;
  placeholder: string;
  type: 'text' | 'number' | 'email' | 'password' | 'search';
  required: boolean;
  utilityClasses: string;
  forgotPasswordLink?: string;
  info?: string;
}

interface AuthFormProps {
  formTitle: string;
  formDescription: string;
  inputFields: InputFieldData[];
  onSubmit: () => void;
  submitButtonText: string;
  loggingWithGoogleText?: string;
  googleButtonText?: string;
  loggingWithGoogle?: boolean;
  formFooterText?: string;
  formFooterLink?: string;
  formFooterLinkText?: string;
}

export default function AuthForm({
  formTitle,
  formDescription,
  inputFields,
  onSubmit,
  submitButtonText,
  loggingWithGoogleText,
  googleButtonText,
  loggingWithGoogle,
  formFooterText,
  formFooterLink,
  formFooterLinkText,
}: AuthFormProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-white border border-neutral-100 w-[540px] max-w-full p-12 rounded-12">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="mb-4">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={28}
            height={28}
            className="w-28 h-7"
          />
        </div>
        <div className="mb-4 text-center flex flex-col items-center gap-2 self-stretch">
          <h1 className="text-2xl font-bold">{formTitle}</h1>
          <p className="text-sm text-neutral-500">{formDescription}</p>
        </div>
      </div>
      <form
        className="flex flex-col gap-2 w-full pt-6 my-4"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}>
        {inputFields.map((field) => (
          <InputField key={field.label} {...field} />
        ))}
        <Button variant="default" type="submit">
          {submitButtonText}
        </Button>
      </form>
      {loggingWithGoogle && (
        <div className="w-full flex flex-col items-center gap-4 self-stretch pt-6 border-t border-neutral-200 mb-1.5">
          <p className="text-sm font-sans font-normal leading-4 tracking-tight text-neutral-600">
            {loggingWithGoogleText}
          </p>
          <Button className="w-full" variant="outline" type="button">
            <GoogleIcon className="w-4 h-4" />
            {googleButtonText}
          </Button>
        </div>
      )}
      {formFooterText && formFooterLink && formFooterLinkText && (
        <>
          <div className="border-t border-neutral-200 h-0.5 w-full"></div>
          <div className="flex items-center justify-center">
            <p className="text-sm font-sans font-normal leading-4 tracking-tight text-neutral-600">
              {formFooterText}{' '}
              <Link
                href={formFooterLink}
                className="text-neutral-950 underline">
                {formFooterLinkText}
              </Link>
            </p>
          </div>
        </>
      )}
    </div>
  );
}
