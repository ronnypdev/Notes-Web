import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemHeader,
  ItemTitle,
} from '@/components/ui/item';
import { Button } from '@/components/ui/button';

interface NoteItemProps {
  title: string;
  id?: string;
  tags?: string[];
  date: string;
  // isArchived: boolean;
  content: string;
}

export default function NoteItem({
  title,
  id,
  tags,
  date,
  content,
}: NoteItemProps) {
  return (
    <>
      <Item id={id}>
        <ItemHeader>
          <ItemTitle>{title}</ItemTitle>
        </ItemHeader>
        <ItemContent>
          {content && <ItemDescription>{content}</ItemDescription>}
        </ItemContent>
        <ItemActions>
          {tags &&
            tags.map((tag) => (
              <Button key={tag} variant="outline">
                {tag}
              </Button>
            ))}
        </ItemActions>
        <ItemFooter>
          <ItemDescription>{date}</ItemDescription>
        </ItemFooter>
      </Item>
    </>
  );
}
