'use client';

import { useMemo, useState, type Dispatch, type SetStateAction } from 'react';
import { Tag, TagInput } from 'emblor';
import { MAX_TAGS } from '@/lib/utilities/tags';

interface NoteTagsFieldProps {
  tags: string[];
  onTagsChange: (tags: string[]) => void;
}

export default function NoteTagsField({
  tags,
  onTagsChange,
}: NoteTagsFieldProps) {
  const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null);

  // Tag text doubles as the emblor id: unique per note (duplicates are
  // disallowed) and stable across renders, so keys and activeTagIndex
  // don't churn while the user types in the title or body.
  const emblorTags = useMemo<Tag[]>(
    () => (tags ?? []).map((text) => ({ id: text, text })),
    [tags],
  );

  const handleSetTags: Dispatch<SetStateAction<Tag[]>> = (next) => {
    const resolved = typeof next === 'function' ? next(emblorTags) : next;
    onTagsChange(resolved.map((tag) => tag.text));
  };

  return (
    <TagInput
      id="tagsList"
      tags={emblorTags}
      setTags={handleSetTags}
      activeTagIndex={activeTagIndex}
      setActiveTagIndex={setActiveTagIndex}
      maxTags={MAX_TAGS}
      inlineTags
      showCount={false}
      placeholder="Press enter to add Tags(e.g. Work, Planning)"
      className="border-0"
      styleClasses={{
        inlineTagsContainer: 'border-none',
        input:
          'text-neutral-700 font-sans font-normal text-sm md:text-sm h-auto leading-[1.3] tracking-[-0.2px] border-none shadow-none placeholder:text-neutral-400',
        tag: {
          body: 'px-2 py-1 bg-neutral-100 rounded-full text-neutral-700 text-sm border-none cursor-pointer',
          closeButton:
            'text-neutral-500 hover:text-neutral-700 p-1 cursor-pointer',
        },
      }}
    />
  );
}
