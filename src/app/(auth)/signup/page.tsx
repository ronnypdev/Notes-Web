'use client';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import { signUpSchema, SignUpFormValues } from '@/lib/zod';
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
import { toast } from 'sonner';

export default function Signup() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const router = useRouter();

  const deriveDisplayName = (email: string) => {
    const localPart = email.split('@')[0]?.trim() ?? '';
    if (!localPart) return 'User';

    // "john.doe_99" -> "John Doe 99"
    const normalized = localPart
      .replace(/[._-]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    if (!normalized) return 'User';

    return normalized
      .split(' ')
      .filter(Boolean)
      .map((chunk) => chunk.charAt(0).toUpperCase() + chunk.slice(1))
      .join(' ');
  };

  const handleSignUpForm = (value: SignUpFormValues) => {
    authClient.signUp.email(
      {
        name: deriveDisplayName(value.email),
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
          //redirect to the dashboard or sign in page
          toast.success('Congratulation! You successfully sign up', {
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

  const { control, handleSubmit } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-neutral-100 p-5 md:p-0">
      <AuthForm
        onSubmit={handleSubmit(handleSignUpForm)}
        loading={isLoading}
        formTitle="Create Your Account"
        formDescription="Sign up to start organizing your notes and boost your productivity."
        submitButtonText="Sign Up"
        loggingWithGoogle={true}
        loggingWithGoogleText="Or log in with:"
        googleButtonText="Google"
        formFooterText="Already have an account?"
        formFooterLink="/login"
        formFooterLinkText="Login">
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
                  <FieldLabel htmlFor="password">Password</FieldLabel>
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
                  <FieldDescription className="flex items-center relative bottom-2">
                    <InfoCircleIcon className="w-4 h-4 text-neutral-600" />
                    <span className="text-xs text-neutral-600">
                      At least 8 characters
                    </span>
                  </FieldDescription>
                </Field>
              )}
            />
          </FieldGroup>
        </FieldSet>
      </AuthForm>
    </div>
  );
}
