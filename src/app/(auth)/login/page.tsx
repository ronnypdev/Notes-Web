'use client';

import AuthForm from '../components/AuthForm';

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-neutral-100 p-5 md:p-0">
      <AuthForm
        formType="login"
        formTitle="Welcome to Note"
        formDescription="Please log in to continue"
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
