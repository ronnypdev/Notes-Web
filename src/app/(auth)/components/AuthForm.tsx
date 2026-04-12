'use client';

import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import InputField from '@/components/InputField/InputField';
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import GoogleIcon from '@/components/icons/GoogleIcon';
import { Spinner } from '@/components/ui/spinner';
import Link from 'next/link';
import Image from 'next/image';

const signUpSchema = z.object({
  email: z.email('Invalid email address').min(8, 'Email is required'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export type SignUpFormValues = z.infer<typeof signUpSchema>;

interface AuthFormProps {
  formType: 'login' | 'signup' | 'forgotpassword' | 'resetpassword';
  onSubmit: (data: SignUpFormValues) => void | Promise<void>;
  loading: boolean;
  formTitle: string;
  formDescription: string;
  submitButtonText: string;
  loggingWithGoogleText?: string;
  googleButtonText?: string;
  loggingWithGoogle?: boolean;
  formFooterText?: string;
  formFooterLink?: string;
  formFooterLinkText?: string;
}

export default function AuthForm({
  formType,
  onSubmit,
  loading,
  formTitle,
  formDescription,
  submitButtonText,
  loggingWithGoogleText,
  googleButtonText,
  loggingWithGoogle,
  formFooterText,
  formFooterLink,
  formFooterLinkText,
}: AuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signUpForm>({
    resolver: zodResolver(signUpSchema),
  });

  return (
    <Card className="bg-white border border-neutral-100 w-[540px] max-w-full p-12 rounded-12">
      <CardHeader className="flex flex-col items-center justify-center p-0">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={28}
          height={28}
          className="w-28 h-7 mb-4"
        />
        <div className="mb-4 text-center flex flex-col items-center gap-2 w-full">
          <CardTitle className="text-2xl font-bold">{formTitle}</CardTitle>
          <CardDescription className="text-xs text-neutral-500">
            {formDescription}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-0 my-4">
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <Button variant="default" className="w-full" type="submit">
            {loading === true ? <Spinner /> : submitButtonText}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2 w-full max-w-full px-0">
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
      </CardFooter>
    </Card>
  );
}
