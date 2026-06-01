import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from '@/components/ui/field';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

import {
  SunIcon,
  DarkModeIcon,
  LightModeIcon,
  ArrowLeftIcon,
} from '@/components/icons';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ColorThemePage() {
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
            Color Theme
          </h4>
          <p className="text-sm tracking-[-0.3px] leading-[1.3] text-neutral-500">
            Choose your color theme:
          </p>
        </header>
        <form>
          <RadioGroup defaultValue="plus" className="w-full max-w-full">
            <FieldLabel
              className="border-neutral-200 cursor-pointer"
              htmlFor="plus-plan">
              <Field orientation="horizontal">
                <div className="flex flex-col items-center w-10 h-full justify-center bg-transparent border border-solid border-neutral-200 rounded-12">
                  <SunIcon className="w-6 h-6 text-neutral-950" />
                </div>
                <FieldContent>
                  <FieldTitle className="font-sans text-base font-medium tracking-[-0.3px] leading-[1.3] text-neutral-950">
                    Light Mode
                  </FieldTitle>
                  <FieldDescription className="text-sm font-normal tracking-[-0.3px] leading-[1.3] text-neutral-500">
                    Pick a clean and classic light theme
                  </FieldDescription>
                </FieldContent>
                <RadioGroupItem value="plus" id="plus-plan" />
              </Field>
            </FieldLabel>
            <FieldLabel
              className="border-neutral-200 cursor-pointer"
              htmlFor="pro-plan">
              <Field orientation="horizontal">
                <div className="flex flex-col items-center w-10 h-full justify-center bg-transparent border border-solid border-neutral-200 rounded-12">
                  <DarkModeIcon className="w-6 h-6 text-neutral-950" />
                </div>
                <FieldContent>
                  <FieldTitle className="font-sans text-base font-medium tracking-[-0.3px] leading-[1.3] text-neutral-950">
                    Dark Mode
                  </FieldTitle>
                  <FieldDescription className="text-sm font-normal tracking-[-0.3px] leading-[1.3] text-neutral-500">
                    Select a sleek and modern dark theme
                  </FieldDescription>
                </FieldContent>
                <RadioGroupItem value="pro" id="pro-plan" />
              </Field>
            </FieldLabel>
            <FieldLabel
              className="border-neutral-200 cursor-pointer"
              htmlFor="enterprise-plan">
              <Field orientation="horizontal">
                <div className="flex flex-col items-center w-10 h-full justify-center bg-transparent border border-solid border-neutral-200 rounded-12">
                  <LightModeIcon className="w-6 h-6 text-neutral-950" />
                </div>
                <FieldContent>
                  <FieldTitle className="font-sans text-base font-medium tracking-[-0.3px] leading-[1.3] text-neutral-950">
                    System
                  </FieldTitle>
                  <FieldDescription className="text-sm font-normal tracking-[-0.3px] leading-[1.3] text-neutral-500">
                    Adapts to your device’s theme
                  </FieldDescription>
                </FieldContent>
                <RadioGroupItem value="enterprise" id="enterprise-plan" />
              </Field>
            </FieldLabel>
          </RadioGroup>
          <div className="flex justify-end">
            <Button type="submit" className="mt-4">
              Apply Changes
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
