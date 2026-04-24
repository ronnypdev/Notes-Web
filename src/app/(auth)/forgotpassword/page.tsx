'use client';

import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { authClient } from '@/lib/auth-client';
import { forgotPasswordSchema, ForgotPasswordFormValues } from '@/lib/zod';
import AuthForm from '../components/AuthForm';

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

export default function ForgotPassword() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleForgotPasswordForm = (values: ForgotPasswordFormValues) => {
    authClient.requestPasswordReset(
      {
        email: values.email,
        redirectTo: '/resetpassword',
      },
      {
        onRequest: () => {
          setIsLoading(true);
        },
        onResponse: () => {
          setIsLoading(false);
        },
        onSuccess: () => {
          toast.success('Reset password link sent to your email', {
            position: 'bottom-right',
          });
        },
        onError: ({ error }) => {
          toast.error(error.message, {
            position: 'bottom-right',
          });
        },
      },
    );
  };

  const { control, handleSubmit } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-neutral-100 p-5 md:p-0">
      <AuthForm
        onSubmit={handleSubmit(handleForgotPasswordForm)}
        loading={isLoading}
        formTitle="Forgotten your password?"
        formDescription="Enter your email below, and we’ll send you a link to reset it."
        submitButtonText="Send Reset Link">
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <FieldSet>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="forgotpassword">
                    Email Address
                  </FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    value={field.value ?? ''}
                    type="email"
                    aria-invalid={fieldState.invalid}
                    placeholder="email@example.com"
                    required={true}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              </FieldGroup>
            </FieldSet>
          )}
        />
      </AuthForm>
    </div>
  );
}
