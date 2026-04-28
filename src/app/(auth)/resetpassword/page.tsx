'use client';

import { useState, Suspense } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter, useSearchParams } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import { resetPasswordSchema, ResetPasswordFormValues } from '@/lib/zod';
import AuthForm from '../components/AuthForm';

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';

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
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function InvalidTokenCard() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  return (
    <>
      {error === 'invalid_token' && (
        <Card className="bg-white border border-neutral-100 w-[540px] max-w-full p-12 rounded-12">
          <CardHeader className="flex flex-col items-center justify-center p-0">
            <CardTitle className="text-2xl font-bold text-red-500">
              Invalid Token
            </CardTitle>
            <CardDescription className="text-sm text-red-500">
              The token is invalid or has expired. Please request a new reset
              link.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0 my-4">
            <Link href="/forgotpassword">
              <Button variant="default" className="w-full mt-4">
                Request New Reset Link
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}
    </>
  );
}

export default function ResetPassword() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const router = useRouter();

  const handleResetPasswordForm = (values: ResetPasswordFormValues) => {
    authClient.resetPassword(
      {
        newPassword: values.newPassword,
        token: values.token,
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
          router.push('/login');
        },
        onError: ({ error }) => {
          toast.error(error.message, {
            position: 'bottom-right',
          });
        },
      },
    );
  };

  const { control, handleSubmit } = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      newPassword: '',
      token: '',
    },
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-neutral-100 p-5 md:p-0">
      <AuthForm
        onSubmit={handleSubmit(handleResetPasswordForm)}
        loading={isLoading}
        formTitle="Reset Your Password"
        formDescription="Choose a new password to secure your account."
        submitButtonText="Reset Password">
        <FieldSet>
          <FieldGroup className="gap-4">
            <Controller
              name="newPassword"
              control={control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel htmlFor="newPassword">New Password</FieldLabel>
                  <div className="relative w-full flex items-center">
                    <Input
                      {...field}
                      id={field.name}
                      value={field.value ?? ''}
                      type={showPassword ? 'text' : 'password'}
                      aria-invalid={fieldState.invalid}
                      required={true}
                    />
                    <ShowIcon
                      className="w-4 h-4 text-neutral-600 absolute cursor-pointer right-2 top-1/2 -translate-y-1/2"
                      onClick={() =>
                        setShowPassword((prevPassword) => !prevPassword)
                      }
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </div>
                  <FieldDescription className="flex items-center relative bottom-2">
                    <InfoCircleIcon className="w-4 h-4 text-neutral-600" />
                    <span className="text-xs text-neutral-600">
                      At least 8 characters
                    </span>
                  </FieldDescription>
                </Field>
              )}
            />

            <Controller
              name="newPassword"
              control={control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel htmlFor="newPassword">
                    Confirm New Password
                  </FieldLabel>
                  <div className="relative w-full flex items-center">
                    <Input
                      {...field}
                      id={field.name}
                      value={field.value ?? ''}
                      type={showPassword ? 'text' : 'password'}
                      required={true}
                    />
                    <ShowIcon
                      className="w-4 h-4 text-neutral-600 absolute cursor-pointer right-2 top-1/2 -translate-y-1/2"
                      onClick={() =>
                        setShowPassword((prevPassword) => !prevPassword)
                      }
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </div>
                </Field>
              )}
            />
          </FieldGroup>
        </FieldSet>
      </AuthForm>

      <Suspense>
        <InvalidTokenCard />
      </Suspense>
    </div>
  );
}
