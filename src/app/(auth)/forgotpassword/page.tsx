'use client';

import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';

import AuthForm from '../components/AuthForm';

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';

export default function ForgotPassword() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-neutral-100 p-5 md:p-0">
      <AuthForm
        onSubmit={() => {}}
        loading={isLoading}
        formTitle="Forgotten your password?"
        formDescription="Enter your email below, and we’ll send you a link to reset it."
        submitButtonText="Send Reset Link">
        <FieldSet>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="forgotpassword">Email Address</FieldLabel>
              <Input
                id="forgotpassword"
                type="email"
                placeholder="email@example.com"
                required={true}
              />
            </Field>
          </FieldGroup>
        </FieldSet>
      </AuthForm>
    </div>
  );
}
