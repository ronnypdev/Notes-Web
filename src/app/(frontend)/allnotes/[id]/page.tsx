import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function NoteItemDetails() {
  return (
    <>
      <article>
        <header>
          <h6 className="text-neutral-950 font-sans font-bold text-2xl leading-[1.2] tracking-[-0.5px]">
            React Performance Optimization
          </h6>
          <div className="properties">
            <div className="tags">
              <span className="tag">tags</span>
              <Input type="text" placeholder="Add a tag" />
            </div>
            <div className="last-modified">
              <span className="last-modified-label">Last Edited: </span>
              <span className="last-modified-date">29 Oct 2024</span>
            </div>
          </div>
        </header>
        <Textarea placeholder="Enter your note content here..." />

        <Button>Save</Button>
      </article>
    </>
  );
}
