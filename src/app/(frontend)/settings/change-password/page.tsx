'use client';

import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { changePasswordSchema, ChangePasswordFormValues } from '@/lib/zod';
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { ArrowLeftIcon, InfoCircleIcon, ShowIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ChangePasswordPage() {
  const [showOldPassword, setShowOldPassword] = useState<boolean>(false);
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] =
    useState<boolean>(false);

  const { control, handleSubmit } = useForm<ChangePasswordFormValues>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      oldPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    },
  });

  const handleChangePasswordForm = (values: ChangePasswordFormValues) => {
    console.log('valid submit', values); // replaced in step 3
  };

  return (
    <section className="w-full h-full">
      <div className="w-full lg:w-[528px] max-w-full flex flex-col gap-6">
        <header className="flex flex-col gap-3">
          <div className="mobile-properties-link block lg:hidden">
            <Link
              className="flex items-center gap-1 font-sans text-sm font-normal leading-[1.3] tracking-[-0.0125rem] text-muted-foreground"
              href="/settings">
              <ArrowLeftIcon className="size-4 text-muted-foreground" />
              Settings
            </Link>
          </div>
          <h4 className="font-sans text-base font-semibold tracking-[-0.3px] leading-[1.3] text-foreground">
            Change Password
          </h4>
        </header>
        <form onSubmit={handleSubmit(handleChangePasswordForm)}>
          <FieldSet>
            <FieldGroup className="gap-4">
              <Controller
                name="oldPassword"
                control={control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel htmlFor={field.name}>Old Password</FieldLabel>
                    <div className="relative w-full flex flex-col items-center gap-1.5">
                      <Input
                        {...field}
                        id={field.name}
                        value={field.value ?? ''}
                        type={showOldPassword ? 'text' : 'password'}
                        aria-invalid={fieldState.invalid}
                        placeholder="Old Password"
                        required
                      />
                      <ShowIcon
                        className="w-4 h-4 text-muted-foreground absolute cursor-pointer right-2 top-2.5"
                        onClick={() =>
                          setShowOldPassword((prevPassword) => !prevPassword)
                        }
                      />
                      {fieldState.invalid && (
                        <FieldError
                          className="self-start"
                          errors={[fieldState.error]}
                        />
                      )}
                    </div>
                  </Field>
                )}
              />

              <Controller
                name="newPassword"
                control={control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel htmlFor={field.name}>New Password</FieldLabel>
                    <div className="relative w-full flex flex-col items-center gap-1.5">
                      <Input
                        {...field}
                        id={field.name}
                        value={field.value ?? ''}
                        type={showNewPassword ? 'text' : 'password'}
                        aria-invalid={fieldState.invalid}
                        placeholder="New Password"
                        required
                      />
                      <ShowIcon
                        className="w-4 h-4 text-muted-foreground absolute cursor-pointer right-2 top-2.5"
                        onClick={() =>
                          setShowNewPassword((prevPassword) => !prevPassword)
                        }
                      />
                      {fieldState.invalid && (
                        <FieldError
                          className="self-start"
                          errors={[fieldState.error]}
                        />
                      )}
                    </div>
                    <FieldDescription className="flex items-center relative bottom-2">
                      <InfoCircleIcon className="w-4 h-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">
                        At least 8 characters
                      </span>
                    </FieldDescription>
                  </Field>
                )}
              />

              <Controller
                name="confirmNewPassword"
                control={control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel htmlFor={field.name}>
                      Confirm New Password
                    </FieldLabel>
                    <div className="relative w-full flex flex-col items-center gap-1.5">
                      <Input
                        {...field}
                        id={field.name}
                        value={field.value ?? ''}
                        type={showConfirmNewPassword ? 'text' : 'password'}
                        aria-invalid={fieldState.invalid}
                        placeholder="Confirm New Password"
                        required
                      />
                      <ShowIcon
                        className="w-4 h-4 text-muted-foreground absolute cursor-pointer right-2 top-2.5"
                        onClick={() =>
                          setShowConfirmNewPassword(
                            (prevPassword) => !prevPassword,
                          )
                        }
                      />
                      {fieldState.invalid && (
                        <FieldError
                          className="self-start"
                          errors={[fieldState.error]}
                        />
                      )}
                    </div>
                  </Field>
                )}
              />
            </FieldGroup>
          </FieldSet>
          <div className="flex justify-end">
            <Button type="submit" className="mt-4">
              Change Password
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
