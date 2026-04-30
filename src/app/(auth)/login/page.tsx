'use client';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import { loginSchema, LoginFormValues } from '@/lib/zod';
import AuthForm from '../components/AuthForm';

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { ShowIcon } from '@/components/icons';
import { toast } from 'sonner';
import Link from 'next/link';

export default function Login() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const router = useRouter();

  const handleLoginForm = (value: LoginFormValues) => {
    authClient.signIn.email(
      {
        email: value.email,
        password: value.password,
      },
      {
        onRequest: () => {
          //show loading
          setIsLoading(true);
        },
        onResponse: () => {
          setIsLoading(false);
        },
        onSuccess: () => {
          // redirect to allnotes route
          toast.success('Congratulation! You successfully logged in', {
            position: 'bottom-right',
          });
          router.push('/allnotes');
        },
        onError: ({ error }) => {
          toast.error(error.message, {
            position: 'bottom-right',
          });
        },
      },
    );
  };

  const { control, handleSubmit } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-neutral-100 p-5 md:p-0">
      <AuthForm
        onSubmit={handleSubmit(handleLoginForm)}
        loading={isLoading}
        formTitle="Welcome to Note"
        formDescription="Please log in to continue"
        submitButtonText="Log in"
        loggingWithGoogle={true}
        loggingWithGoogleText="Or log in with:"
        googleButtonText="Google"
        formFooterText="Don't have an account?"
        formFooterLink="/signup"
        formFooterLinkText="Sign up">
        <FieldSet>
          <FieldGroup className="gap-4">
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel htmlFor="email">Email Address</FieldLabel>
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
              )}
            />

            <Controller
              name="password"
              control={control}
              render={({ field, fieldState }) => (
                <Field>
                  <div className="flex justify-between items-center w-full">
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Link
                      href="/forgotpassword"
                      className="text-sm text-neutral-600 font-sans font-normal leading-4 tracking-tight">
                      <span className="underline">Forgot</span>
                    </Link>
                  </div>
                  <div className="relative w-full flex items-center">
                    <Input
                      {...field}
                      value={field.value ?? ''}
                      id={field.name}
                      type={showPassword ? 'text' : 'password'}
                      aria-invalid={fieldState.invalid}
                      placeholder="Password"
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
    </div>
  );
}
