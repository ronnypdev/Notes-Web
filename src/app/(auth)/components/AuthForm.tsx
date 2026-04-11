'use client';

import InputField from '@/components/InputField/InputField';
import { Button } from '@/components/ui/button';
import GoogleIcon from '@/components/icons/GoogleIcon';
import { Spinner } from '@/components/ui/spinner';
import Link from 'next/link';
import Image from 'next/image';
// import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form';

interface AuthFormProps {
  formTitle: string;
  formType: 'login' | 'signup' | 'forgotpassword' | 'resetpassword';
  // inputRef: React.RefObject<HTMLInputElement | null>;
  // register: UseFormRegister<FieldValues>;
  // errors: FieldErrors<FieldValues>;
  formDescription: string;
  onSubmit: React.SubmitEventHandler<HTMLFormElement>;
  submitButtonText: string;
  loggingWithGoogleText?: string;
  googleButtonText?: string;
  loggingWithGoogle?: boolean;
  formFooterText?: string;
  formFooterLink?: string;
  formFooterLinkText?: string;
  loading: boolean;
}

export default function AuthForm({
  formType,
  formTitle,
  formDescription,
  onSubmit,
  submitButtonText,
  loggingWithGoogleText,
  googleButtonText,
  loggingWithGoogle,
  formFooterText,
  formFooterLink,
  formFooterLinkText,
  loading,
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
        onSubmit={onSubmit}>
        {formType === 'signup' && (
          <>
            <InputField
              label="email"
              labelName="Email Address"
              placeholder="email@example.com"
              type="email"
              required={true}
              utilityClasses="mb-4"
            />
            <InputField
              label="password"
              labelName="Password"
              type="password"
              required={true}
              utilityClasses="mb-4"
              info="At least 8 characters"
            />
          </>
        )}

        {formType === 'login' && (
          <>
            <InputField
              label="email"
              labelName="Email Address"
              placeholder="email@example.com"
              type="email"
              required={true}
              utilityClasses="mb-4"
            />
            <InputField
              label="password"
              labelName="Password"
              type="password"
              required={true}
              utilityClasses="mb-4"
              forgotPasswordLink="/forgotpassword"
            />
          </>
        )}

        {formType === 'forgotpassword' && (
          <>
            <InputField
              label="email"
              labelName="Email Address"
              placeholder="email@example.com"
              type="email"
              required={true}
              utilityClasses="mb-4"
            />
          </>
        )}

        {formType === 'resetpassword' && (
          <>
            <InputField
              label="newPassword"
              labelName="New Password"
              type="password"
              required={true}
              utilityClasses="mb-4"
              info="At least 8 characters"
            />
            <InputField
              label="confirmPassword"
              labelName="Confirm New Password"
              type="password"
              required={true}
              utilityClasses="mb-4"
            />
          </>
        )}

        <Button variant="default" type="submit">
          {loading === true ? <Spinner /> : submitButtonText}
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
