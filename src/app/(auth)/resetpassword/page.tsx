'use client';

import AuthForm from '../components/AuthForm';

export default function ResetPassword() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-neutral-100 p-5 md:p-0">
      <AuthForm
        formType="resetpassword"
        formTitle="Reset Your Password"
        formDescription="Choose a new password to secure your account."
        onSubmit={() => {}}
        submitButtonText="Reset Password"
      />
    </div>
  );
}
