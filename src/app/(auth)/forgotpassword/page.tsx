'use client';

import AuthForm from '../components/AuthForm';

export default function ForgotPassword() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-neutral-100">
      <AuthForm
        formType="forgotpassword"
        formTitle="Forgot Your Password?"
        formDescription="No worries! Enter your email to reset your password."
        inputFields={[
          {
            label: 'email',
            labelName: 'Email Address',
            placeholder: 'email@example.com',
            type: 'email',
            required: true,
            utilityClasses: 'mb-4',
          },
        ]}
        onSubmit={() => {}}
        submitButtonText="Send Reset Link"
      />
    </div>
  );
}
