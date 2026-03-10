'use client';

import AuthForm from '../components/AuthForm';

export default function ForgotPassword() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-neutral-100 p-5 md:p-0">
      <AuthForm
        formTitle="Forgotten your password?"
        formDescription="Enter your email below, and we’ll send you a link to reset it."
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
