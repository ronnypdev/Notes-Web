'use client';

import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import GoogleIcon from '@/components/icons/GoogleIcon';
import { InfoCircleIcon, ShowIcon } from '@/components/icons';
import { Spinner } from '@/components/ui/spinner';
import Link from 'next/link';
import Image from 'next/image';

const signUpSchema = z.object({
  name: z.string().min(4, 'Name is required and must be at least 4 characters'),
  email: z.email({ pattern: z.regexes.email }).min(8, 'Email is required'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export type SignUpFormValues = z.infer<typeof signUpSchema>;

interface AuthFormProps {
  formType: 'login' | 'signup' | 'forgotpassword' | 'resetpassword';
  onSubmit: (data: SignUpFormValues) => void | Promise<void>;
  loading: boolean;
  formTitle: string;
  formDescription: string;
  submitButtonText: string;
  loggingWithGoogleText?: string;
  googleButtonText?: string;
  loggingWithGoogle?: boolean;
  formFooterText?: string;
  formFooterLink?: string;
  formFooterLinkText?: string;
}

export default function AuthForm({
  formType,
  onSubmit,
  loading,
  formTitle,
  formDescription,
  submitButtonText,
  loggingWithGoogleText,
  googleButtonText,
  loggingWithGoogle,
  formFooterText,
  formFooterLink,
  formFooterLinkText,
}: AuthFormProps) {
  const { control, handleSubmit } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
  });

  return (
    <Card className="bg-white border border-neutral-100 w-[540px] max-w-full p-12 rounded-12">
      <CardHeader className="flex flex-col items-center justify-center p-0">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={28}
          height={28}
          className="w-28 h-7 mb-4"
        />
        <div className="mb-4 text-center flex flex-col items-center gap-2 w-full">
          <CardTitle className="text-2xl font-bold">{formTitle}</CardTitle>
          <CardDescription className="text-xs text-neutral-500">
            {formDescription}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-0 my-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          {formType === 'signup' && (
            <>
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
                            id={field.name}
                            type="password"
                            aria-invalid={fieldState.invalid}
                            placeholder="Password"
                            required={true}
                          />
                          <ShowIcon className="w-4 h-4 text-neutral-600 absolute cursor-pointer right-2 top-1/2 -translate-y-1/2" />
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
            </>
          )}

          {formType === 'login' && (
            <>
              <FieldSet>
                <FieldGroup className="gap-4">
                  <Field>
                    <FieldLabel htmlFor="email">Email Address</FieldLabel>
                    <Input
                      id="email"
                      type="email"
                      placeholder="email@example.com"
                      required={true}
                    />
                  </Field>
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
                        id="password"
                        type="password"
                        placeholder="Password"
                        required={true}
                      />
                      <ShowIcon className="w-4 h-4 text-neutral-600 absolute cursor-pointer right-2 top-1/2 -translate-y-1/2" />
                    </div>
                  </Field>
                </FieldGroup>
              </FieldSet>
            </>
          )}

          {formType === 'forgotpassword' && (
            <>
              <FieldSet>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="forgotpassword">
                      Email Address
                    </FieldLabel>
                    <Input
                      id="forgotpassword"
                      type="email"
                      placeholder="email@example.com"
                      required={true}
                    />
                  </Field>
                </FieldGroup>
              </FieldSet>
            </>
          )}

          {formType === 'resetpassword' && (
            <>
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
                      <Input
                        id="confirmPassword"
                        type="password"
                        required={true}
                      />
                      <ShowIcon className="w-4 h-4 text-neutral-600 absolute cursor-pointer right-2 top-1/2 -translate-y-1/2" />
                    </div>
                  </Field>
                </FieldGroup>
              </FieldSet>
            </>
          )}
          <Button variant="default" className="w-full mt-4" type="submit">
            {loading === true ? <Spinner /> : submitButtonText}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2 w-full max-w-full px-0">
        {loggingWithGoogle && (
          <div className="w-full flex flex-col items-center gap-4 self-stretch pt-3 border-t border-neutral-200 mb-1.5">
            <p className="text-sm font-sans font-normal leading-4 tracking-tight text-neutral-600">
              {loggingWithGoogleText}
            </p>
            <Button className="w-full" variant="outline" type="button">
              <GoogleIcon className="w-4 h-4" />
              {googleButtonText}
            </Button>
          </div>
        )}
        {formFooterText && formFooterLink && formFooterLinkText && (
          <>
            <div className="border-t border-neutral-200 h-0.5 w-full"></div>
            <div className="flex items-center justify-center">
              <p className="text-sm font-sans font-normal leading-4 tracking-tight text-neutral-600">
                {formFooterText}{' '}
                <Link
                  href={formFooterLink}
                  className="text-neutral-950 underline">
                  {formFooterLinkText}
                </Link>
              </p>
            </div>
          </>
        )}
      </CardFooter>
    </Card>
  );
}
