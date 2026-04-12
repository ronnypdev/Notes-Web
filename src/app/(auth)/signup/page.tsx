'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import AuthForm, { SignUpFormValues } from '../components/AuthForm';
import { toast } from 'sonner';

export default function Signup() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleSignUpForm = (value: SignUpFormValues) => {
    authClient.signUp.email(
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
          //redirect to the dashboard or sign in page
          toast.success('Congratulation! You successfully sign up', {
            position: 'top-right',
          });
          router.push('/allnotes');
        },
        onError: (error) => {
          toast.error(
            error.error.message || 'Something went wrong!, Please try again!',
            {
              position: 'top-right',
            },
          );
        },
      },
    );
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-neutral-100 p-5 md:p-0">
      <AuthForm
        formType="signup"
        onSubmit={handleSignUpForm}
        loading={isLoading}
        formTitle="Create Your Account"
        formDescription="Sign up to start organizing your notes and boost your productivity."
        submitButtonText="Sign Up"
        loggingWithGoogle={true}
        loggingWithGoogleText="Or log in with:"
        googleButtonText="Google"
        formFooterText="Already have an account?"
        formFooterLink="/login"
        formFooterLinkText="Login"
      />
    </div>
  );
}
