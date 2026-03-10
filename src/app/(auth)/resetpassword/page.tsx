'use client';

import AuthForm from '../components/AuthForm';

export default function ResetPassword() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-neutral-100 p-5 md:p-0">
      <AuthForm
        formTitle="Reset Your Password"
        formDescription="Choose a new password to secure your account."
        inputFields={[
          {
            label: 'newPassword',
            labelName: 'New Password',
            placeholder: '',
            type: 'password',
            required: true,
            utilityClasses: 'mb-4',
            info: 'At least 8 characters',
          },
          {
            label: 'confirmPassword',
            labelName: 'Confirm New Password',
            placeholder: '',
            type: 'password',
            required: true,
            utilityClasses: 'mb-4',
          },
        ]}
        onSubmit={() => {}}
        submitButtonText="Reset Password"
      />
    </div>
  );
}
