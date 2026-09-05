'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { toast } from 'sonner';
import Link from 'next/link';

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from '@/components/ui/field';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';
import {
  SunIcon,
  DarkModeIcon,
  LightModeIcon,
  ArrowLeftIcon,
} from '@/components/icons';

const themeOptions = [
  {
    value: 'light',
    id: 'light-theme',
    label: 'Light Mode',
    description: 'Pick a clean and classic light theme',
    icon: SunIcon,
  },
  {
    value: 'dark',
    id: 'dark-theme',
    label: 'Dark Mode',
    description: 'Select a sleek and modern dark theme',
    icon: DarkModeIcon,
  },
  {
    value: 'system',
    id: 'system-theme',
    label: 'System',
    description: 'Adapts to your device’s theme',
    icon: LightModeIcon,
  },
];

export default function ColorThemePage() {
  const { theme, setTheme } = useTheme();
  const [selected, setSelected] = useState('system');

  useEffect(() => {
    if (theme) setSelected(theme);
  }, [theme]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTheme(selected);
    toast.success('Color theme updated');
  }

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
        <form onSubmit={handleSubmit}>
          <RadioGroup
            value={selected}
            onValueChange={setSelected}
            className="w-full max-w-full">
            {themeOptions.map((option) => (
              <FieldLabel
                key={option.value}
                className="border-neutral-200 cursor-pointer"
                htmlFor={option.id}>
                <Field orientation="horizontal">
                  <div className="flex flex-col items-center w-10 h-full justify-center bg-transparent border border-solid border-neutral-200 rounded-12">
                    <option.icon className="w-6 h-6 text-neutral-950" />
                  </div>
                  <FieldContent>
                    <FieldTitle className="font-sans text-base font-medium tracking-[-0.3px] leading-[1.3] text-neutral-950">
                      {option.label}
                    </FieldTitle>
                    <FieldDescription className="text-sm font-normal tracking-[-0.3px] leading-[1.3] text-neutral-500">
                      {option.description}
                    </FieldDescription>
                  </FieldContent>
                  <RadioGroupItem value={option.value} id={option.id} />
                </Field>
              </FieldLabel>
            ))}
          </RadioGroup>
          <div className="flex justify-end">
            <Button
              type="submit"
              className="mt-4"
              disabled={selected === theme}>
              Apply Changes
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
