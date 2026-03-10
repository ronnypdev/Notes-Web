'use client';

import AuthForm from '../components/AuthForm';

export default function ResetPassword() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-neutral-100">
      <AuthForm
        formType="resetpassword"
        formTitle="Choose a new password to secure your account."
        formDescription="Enter your new password below."
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
