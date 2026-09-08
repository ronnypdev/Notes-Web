'use client';
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
import Logo from '@/components/Logo/Logo';

interface AuthFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void | Promise<void>;
  loading: boolean;
  formTitle: string;
  formDescription: string;
  submitButtonText: string;
  loggingWithGoogle?: boolean;
  loggingWithGoogleText?: string;
  onGoogleLogin?: () => void | Promise<void>;
  googleButtonText?: string;
  formFooterText?: string;
  formFooterLink?: string;
  formFooterLinkText?: string;
  children: React.ReactNode;
}

export default function AuthForm({
  onSubmit,
  loading,
  formTitle,
  formDescription,
  submitButtonText,
  loggingWithGoogle,
  loggingWithGoogleText,
  onGoogleLogin,
  googleButtonText,
  children,
  formFooterText,
  formFooterLink,
  formFooterLinkText,
}: AuthFormProps) {
  return (
    <Card className="bg-background border border-border w-[540px] max-w-full p-12 rounded-12">
      <CardHeader className="flex flex-col items-center justify-center p-0">
        <Logo />
        <div className="mb-4 text-center flex flex-col items-center gap-2 w-full">
          <CardTitle className="text-2xl font-bold">{formTitle}</CardTitle>
          <CardDescription className="text-xs text-muted-foreground">
            {formDescription}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-0 my-4">
        <form onSubmit={onSubmit}>
          {children}
          <Button variant="default" className="w-full mt-4" type="submit">
            {loading === true ? <Spinner /> : submitButtonText}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2 w-full max-w-full px-0">
        {loggingWithGoogle && (
          <div className="w-full flex flex-col items-center gap-4 self-stretch pt-3 border-t border-border mb-1.5">
            <p className="text-sm font-sans font-normal leading-4 tracking-tight text-muted-foreground">
              {loggingWithGoogleText}
            </p>
            <Button
              className="w-full"
              variant="outline"
              type="button"
              onClick={onGoogleLogin}>
              <GoogleIcon className="w-4 h-4" />
              {googleButtonText}
            </Button>
          </div>
        )}
        {formFooterText && formFooterLink && formFooterLinkText && (
          <>
            <div className="border-t border-border h-0.5 w-full"></div>
            <div className="flex items-center justify-center">
              <p className="text-sm font-sans font-normal leading-4 tracking-tight text-muted-foreground">
                {formFooterText}{' '}
                <Link
                  href={formFooterLink}
                  className="text-foreground underline">
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
