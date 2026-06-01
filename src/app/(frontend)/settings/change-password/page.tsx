'use client';

import { useState } from 'react';
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
  return (
    <section className="w-full h-full">
      <div className="w-full lg:w-[528px] max-w-full flex flex-col gap-6">
        <header className="flex flex-col gap-3">
          <div className="mobile-properties-link block lg:hidden">
            <Link
              className="flex items-center gap-1 font-sans text-sm font-normal leading-[1.3] tracking-[-0.0125rem] text-neutral-600"
              href="/settings">
              <ArrowLeftIcon className="size-4 text-neutral-600" />
              Settings
            </Link>
          </div>
          <h4 className="font-sans text-base font-semibold tracking-[-0.3px] leading-[1.3] text-neutral-950">
            Change Password
          </h4>
        </header>
        <form>
          <FieldSet>
            <FieldGroup className="gap-4">
              <Field>
                <FieldLabel htmlFor="oldPassword">Old Password</FieldLabel>
                <div className="relative w-full flex flex-col items-center gap-1.5">
                  <Input
                    id="oldPassword"
                    type={showOldPassword ? 'text' : 'password'}
                    placeholder="Old Password"
                    required
                  />
                  <ShowIcon
                    className="w-4 h-4 text-neutral-600 absolute cursor-pointer right-2 top-2.5"
                    onClick={() =>
                      setShowOldPassword((prevPassword) => !prevPassword)
                    }
                  />
                  <FieldError
                    className="self-start hidden"
                    errors={[{ message: 'Old password is required' }]}
                  />
                </div>
              </Field>
              <Field>
                <FieldLabel htmlFor="newPassword">New Password</FieldLabel>
                <div className="relative w-full flex flex-col items-center gap-1.5">
                  <Input
                    id="newPassword"
                    type={showNewPassword ? 'text' : 'password'}
                    placeholder="New Password"
                    required
                  />
                  <ShowIcon
                    className="w-4 h-4 text-neutral-600 absolute cursor-pointer right-2 top-2.5"
                    onClick={() =>
                      setShowNewPassword((prevPassword) => !prevPassword)
                    }
                  />
                  <FieldError
                    className="self-start hidden"
                    errors={[{ message: 'New password is required' }]}
                  />
                </div>
                <FieldDescription className="flex items-center relative bottom-2">
                  <InfoCircleIcon className="w-4 h-4 text-neutral-600" />
                  <span className="text-xs text-neutral-600">
                    At least 8 characters
                  </span>
                </FieldDescription>
              </Field>
              <Field>
                <FieldLabel htmlFor="confirmNewPassword">
                  Confirm New Password
                </FieldLabel>
                <div className="relative w-full flex flex-col items-center gap-1.5">
                  <Input
                    id="confirmNewPassword"
                    type={showConfirmNewPassword ? 'text' : 'password'}
                    placeholder="Confirm New Password"
                    required
                  />
                  <ShowIcon
                    className="w-4 h-4 text-neutral-600 absolute cursor-pointer right-2 top-2.5"
                    onClick={() =>
                      setShowConfirmNewPassword((prevPassword) => !prevPassword)
                    }
                  />
                  <FieldError
                    className="self-start hidden"
                    errors={[
                      { message: 'Confirm new password does not match' },
                    ]}
                  />
                </div>
              </Field>
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
