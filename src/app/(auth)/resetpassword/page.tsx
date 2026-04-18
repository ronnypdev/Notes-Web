'use client';

import AuthForm from '../components/AuthForm';
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { InfoCircleIcon, ShowIcon } from '@/components/icons';

export default function ResetPassword() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-neutral-100 p-5 md:p-0">
      <AuthForm
        onSubmit={() => {}}
        loading={isLoading}
        formTitle="Reset Your Password"
        formDescription="Choose a new password to secure your account."
        submitButtonText="Reset Password">
        <FieldSet>
          <FieldGroup className="gap-4">
            <Field>
              <FieldLabel htmlFor="newPassword">New Password</FieldLabel>
              <div className="relative w-full flex items-center">
                <Input id="newPassword" type="password" required={true} />
                <ShowIcon className="w-4 h-4 text-neutral-600 absolute cursor-pointer right-2 top-1/2 -translate-y-1/2" />
              </div>
              <FieldDescription className="flex items-center relative bottom-2">
                <InfoCircleIcon className="w-4 h-4 text-neutral-600" />
                <span className="text-xs text-neutral-600">
                  At least 8 characters
                </span>
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="confirmPassword">
                Confirm New Password
              </FieldLabel>
              <div className="relative w-full flex items-center">
                <Input id="confirmPassword" type="password" required={true} />
                <ShowIcon className="w-4 h-4 text-neutral-600 absolute cursor-pointer right-2 top-1/2 -translate-y-1/2" />
              </div>
            </Field>
          </FieldGroup>
        </FieldSet>
      </AuthForm>
    </div>
  );
}
