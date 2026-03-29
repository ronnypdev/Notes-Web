import { useState } from 'react';
import { authClient } from '@/lib/auth-client';
import AuthForm from '../components/AuthForm';

export default function Signup() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { data, error } = await authClient.signUp.email({
    email,
    password,
    name,
    callbackURL: "/allnotes'",
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-neutral-100 p-5 md:p-0">
      <AuthForm
        formTitle="Create Your Account"
        formDescription="Sign up to start organizing your notes and boost your productivity."
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
            info: 'At least 8 characters',
          },
        ]}
        onSubmit={() => {}}
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
