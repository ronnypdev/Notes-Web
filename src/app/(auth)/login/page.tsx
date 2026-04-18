'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import AuthForm from '../components/AuthForm';
import { toast } from 'sonner';

export default function Login() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleLoginForm = (value: LogInFormValues) => {
    authClient.signIn.email(
      {
        email: value.email,
        password: value.password,
      },
      {
        onRequest: () => {
          //show loading
          setIsLoading(true);
        },
        onResponse: () => {
          setIsLoading(false);
        },
        onSuccess: () => {
          // redirect to allnotes route
          toast.success('Congratulation! You successfully logged in', {
            position: 'top-right',
          });
          router.push('/allnotes');
        },
        onError: ({ error }) => {
          toast.error(error.message, {
            position: 'top-right',
          });
        },
      },
    );
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-neutral-100 p-5 md:p-0">
      <AuthForm
        formType="login"
        onSubmit={handleLoginForm}
        loading={isLoading}
        formTitle="Welcome to Note"
        formDescription="Please log in to continue"
        submitButtonText="Log in"
        loggingWithGoogle={true}
        loggingWithGoogleText="Or log in with:"
        googleButtonText="Google"
        formFooterText="Don't have an account?"
        formFooterLink="/signup"
        formFooterLinkText="Sign up"
      />
    </div>
  );
}
