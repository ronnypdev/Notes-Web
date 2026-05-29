import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from '@/components/ui/field';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

import {
  AAMonoSpaceIcon,
  AASansSerifIcon,
  AASerifIcon,
} from '@/components/icons';
import { Button } from '@/components/ui/button';

export default function FontOptionsPage() {
  return (
    <section className="w-full h-full">
      <div className="w-[528px] flex flex-col gap-6">
        <header className="flex flex-col">
          <h4 className="font-sans text-base font-semibold tracking-[-0.3px] leading-[1.3] text-neutral-950">
            Font Theme
          </h4>
          <p className="text-sm tracking-[-0.3px] leading-[1.3] text-neutral-500">
            Choose your font theme:
          </p>
        </header>
        <form>
          <RadioGroup defaultValue="plus" className="w-full max-w-full">
            <FieldLabel
              className="border-neutral-200 cursor-pointer"
              htmlFor="plus-plan">
              <Field orientation="horizontal">
                <div className="flex flex-col items-center w-10 h-full justify-center bg-transparent border border-solid border-neutral-200 rounded-12">
                  <AASansSerifIcon className="w-4 h-4 text-neutral-950" />
                </div>
                <FieldContent>
                  <FieldTitle className="font-sans text-base font-medium tracking-[-0.3px] leading-[1.3] text-neutral-950">
                    Sans Serif
                  </FieldTitle>
                  <FieldDescription className="text-sm font-normal tracking-[-0.3px] leading-[1.3] text-neutral-500">
                    Clean and modern, easy to read.
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
                  <AASerifIcon className="w-4 h-4 text-neutral-950" />
                </div>
                <FieldContent>
                  <FieldTitle className="font-sans text-base font-medium tracking-[-0.3px] leading-[1.3] text-neutral-950">
                    Serif
                  </FieldTitle>
                  <FieldDescription className="text-sm font-normal tracking-[-0.3px] leading-[1.3] text-neutral-500">
                    Classic and elegant for a timeless feel.
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
                  <AAMonoSpaceIcon className="w-4 h-4 text-neutral-950" />
                </div>
                <FieldContent>
                  <FieldTitle className="font-sans text-base font-medium tracking-[-0.3px] leading-[1.3] text-neutral-950">
                    Mono Space
                  </FieldTitle>
                  <FieldDescription className="text-sm font-normal tracking-[-0.3px] leading-[1.3] text-neutral-500">
                    Code-like, great for a technical vibe.
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
