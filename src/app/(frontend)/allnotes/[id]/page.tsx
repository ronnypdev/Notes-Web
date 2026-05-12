import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function NoteItemDetails() {
  return (
    <>
      <h4 className="text-neutral-950 text-2xl font-semibold leading-[1.2] tracking-[-0.3px]">
        Note Title
      </h4>
      <Textarea placeholder="Enter your note content here..." />

      <Button>Save</Button>
    </>
  );
}
