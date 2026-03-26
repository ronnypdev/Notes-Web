'use client';
import { useState } from 'react';
import AuthForm from '../components/AuthForm';

export default function Login() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-neutral-100 p-5 md:p-0">
      <AuthForm
        formTitle="Welcome to Note"
        formDescription="Please log in to continue"
        inputFields={[
          {
            label: 'email',
            labelName: 'Email Address',
            placeholder: 'email@example.com',
            type: 'email',
            required: true,
            utilityClasses: 'mb-4',
          },
          {
            label: 'password',
            labelName: 'Password',
            placeholder: '',
            type: 'password',
            required: true,
            utilityClasses: 'mb-4',
            forgotPasswordLink: '/forgotpassword',
          },
        ]}
        onSubmit={() => {}}
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
