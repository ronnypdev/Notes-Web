'use client';

import { useContext, useEffect, useState } from 'react';

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
  AAMonoSpaceIcon,
  AASansSerifIcon,
  AASerifIcon,
  ArrowLeftIcon,
} from '@/components/icons';
import { toast } from 'sonner';
import Link from 'next/link';

import { FontThemeContext } from '@/context/FontThemeContext';
import { FontTheme } from '@/types';

const fontOptions: {
  value: FontTheme;
  id: string;
  label: string;
  description: string;
  icon: typeof AASansSerifIcon;
  previewFont: string;
}[] = [
  {
    value: 'sans',
    id: 'sans-font',
    label: 'Sans Serif',
    description: 'Clean and modern, easy to read.',
    icon: AASansSerifIcon,
    previewFont: 'var(--font-inter)',
  },
  {
    value: 'serif',
    id: 'serif-font',
    label: 'Serif',
    description: 'Classic and elegant for a timeless feel.',
    icon: AASerifIcon,
    previewFont: 'var(--font-noto-serif)',
  },
  {
    value: 'mono',
    id: 'mono-font',
    label: 'Mono Space',
    description: 'Code-like, great for a technical vibe.',
    icon: AAMonoSpaceIcon,
    previewFont: 'var(--font-source-code-pro)',
  },
];

export default function FontOptionsPage() {
  const { fontTheme, setFontTheme } = useContext(FontThemeContext);
  const [selected, setSelected] = useState<FontTheme>('sans');

  useEffect(() => {
    setSelected(fontTheme);
  }, [fontTheme]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFontTheme(selected);
    toast.success('Font theme updated');
  }

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
            Font Theme
          </h4>
          <p className="text-sm tracking-[-0.3px] leading-[1.3] text-muted-foreground">
            Choose your font theme:
          </p>
        </header>
        <form onSubmit={handleSubmit}>
          <RadioGroup
            value={selected}
            onValueChange={(value) => setSelected(value as FontTheme)}
            className="w-full max-w-full">
            {fontOptions.map((option) => (
              <FieldLabel
                key={option.value}
                className="border-border cursor-pointer"
                htmlFor={option.id}>
                <Field orientation="horizontal">
                  <div className="flex flex-col items-center w-10 h-full justify-center bg-transparent border border-solid border-border rounded-12">
                    <option.icon className="w-4 h-4 text-foreground" />
                  </div>
                  <FieldContent>
                    <FieldTitle
                      className="text-base font-medium tracking-[-0.3px] leading-[1.3] text-foreground"
                      style={{ fontFamily: option.previewFont }}>
                      {option.label}
                    </FieldTitle>
                    <FieldDescription className="text-sm font-normal tracking-[-0.3px] leading-[1.3] text-muted-foreground">
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
              disabled={selected === fontTheme}>
              Apply Changes
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
