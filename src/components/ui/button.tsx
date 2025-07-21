import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-[var(--spacing-100)] whitespace-nowrap rounded-lg text-sm font-sans font-medium   disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-5 shrink-0 [&_svg]:shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer",
  {
    variants: {
      variant: {
        default: 'bg-primary text-white shadow-xs hover:bg-blue-700/90',
        secondary:
          'bg-neutral-100 text-neutral-600 shadow-xs hover:bg-neutral-0 hover:text-neutral-950 hover:border hover:border-solid hover:rounded-lg hover:border-neutral-300 focus-visible:shadow-btn-secondary-hover focus-visible:border-neutral-600 focus-visible:shadow-[var(--box-shadow-btn-secondary-hover)]',
        outline:
          'border bg-neutral-0 text-neutral-600 border border-solid rounded-lg border-neutral-300 hover:bg-neutral-100 hover:text-neutral-600 hover:border-none shadow-xs focus-visible:shadow-btn-secondary-hover focus-visible:border-neutral-600 focus-visible:shadow-[var(--box-shadow-btn-secondary-hover)]',
        destructive: 'bg-red-500 text-white shadow-xs hover:bg-red-500/90',
        ghost:
          'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default:
          'py-[var(--spacing-150)] px-[var(--spacing-200)] has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
