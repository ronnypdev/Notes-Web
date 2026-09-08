'use client';

import Link from 'next/link';

import {
  Item,
  ItemActions,
  ItemTitle,
  ItemFooter,
  ItemHeader,
} from '@/components/ui/item';
import { Note } from '@/types';
import { cn } from '@/lib/utils';

interface NoteItemProps extends Note {
  href: string;
  isActive?: boolean;
}

export default function NoteItem({
  title,
  id,
  tags,
  lastEdited,
  href,
  isActive = false,
}: NoteItemProps) {
  return (
    <Link href={href} aria-current={isActive ? 'page' : undefined}>
      <Item
        id={id}
        className={cn(
          'flex flex-col items-start gap-150 p-100 rounded-(--radius-6) w-full bg-background hover:bg-accent transition-colors duration-100 cursor-pointer border-b border-solid border-border shadow-large mb-150',
          isActive && 'bg-accent shadow-none',
        )}>
        <ItemHeader>
          {title ? (
            <ItemTitle className="w-full text-foreground font-semibold text-base leading-[1.2] tracking-[-0.3px]">
              {title}
            </ItemTitle>
          ) : (
            <ItemTitle className="w-full text-foreground font-semibold text-base leading-[1.2] tracking-[-0.3px]">
              Enter title
            </ItemTitle>
          )}
        </ItemHeader>
        <ItemActions>
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1 items-center">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-muted text-foreground text-[12px] font-normal leading-[1.2] tracking-[-0.2px] rounded-[4px] px-[6px] py-[2px] capitalize">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </ItemActions>
        <ItemFooter className="text-muted-foreground text-[12px] font-normal leading-[1.2] tracking-[-0.2px]">
          {lastEdited}
        </ItemFooter>
      </Item>
    </Link>
  );
}
