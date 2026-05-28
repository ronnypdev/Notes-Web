import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from '@/components/ui/field';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

import { SunIcon, DarkModeIcon, LightModeIcon } from '@/components/icons';

export default function ColorThemePage() {
  return (
    <section className="w-full h-full">
      <div className="w-[528px] flex flex-col gap-6">
        <header className="flex flex-col">
          <h4 className="font-sans text-base font-semibold tracking-[-0.3px] leading-[1.3] text-neutral-950">
            Color Theme
          </h4>
          <p className="text-sm text-neutral-500">Choose your color theme:</p>
        </header>

        <RadioGroup defaultValue="plus" className="max-w-sm">
          <FieldLabel htmlFor="plus-plan">
            <Field orientation="horizontal">
              <SunIcon className="w-4 h-4 text-neutral-950" />
              <FieldContent>
                <FieldTitle>Light Mode</FieldTitle>
                <FieldDescription>
                  Pick a clean and classic light theme
                </FieldDescription>
              </FieldContent>
              <RadioGroupItem value="plus" id="plus-plan" />
            </Field>
          </FieldLabel>
          <FieldLabel htmlFor="pro-plan">
            <Field orientation="horizontal">
              <DarkModeIcon className="w-4 h-4 text-neutral-950" />
              <FieldContent>
                <FieldTitle>Dark Mode</FieldTitle>
                <FieldDescription>
                  Select a sleek and modern dark theme
                </FieldDescription>
              </FieldContent>
              <RadioGroupItem value="pro" id="pro-plan" />
            </Field>
          </FieldLabel>
          <FieldLabel htmlFor="enterprise-plan">
            <Field orientation="horizontal">
              <LightModeIcon className="w-4 h-4 text-neutral-950" />
              <FieldContent>
                <FieldTitle>System</FieldTitle>
                <FieldDescription>
                  Adapts to your device’s theme
                </FieldDescription>
              </FieldContent>
              <RadioGroupItem value="enterprise" id="enterprise-plan" />
            </Field>
          </FieldLabel>
        </RadioGroup>
      </div>
    </section>
  );
}
