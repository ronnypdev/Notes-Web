import { Field, FieldGroup, FieldLabel, FieldSet } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { SearchIcon } from '@/components/icons';
import NotesPageLayout from '@/components/Notes/NotesPageLayout';
import NotesList from '@/components/Notes/NotesList';

export default function SearchNoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="flex flex-col gap-3 lg:hidden w-full max-w-full p-6">
        <h3 className="font-sans text-2xl font-bold tracking-[-0.5px] leading-[1.2] text-neutral-950">
          Search
        </h3>
        <form>
          <FieldSet>
            <FieldGroup className="gap-4">
              <Field>
                <FieldLabel htmlFor="search"></FieldLabel>
                <div className="relative w-full flex flex-col items-center gap-1.5">
                  <Input
                    className="py-3 pl-8 bg-neutral-50 placeholder:font-sans placeholder:text-sm placeholder:font-normal placeholder:leading-[1.3] placeholder:tracking-tight placeholder:text-neutral-950 shadow-mobile-search-input"
                    id="search"
                    type="search"
                    placeholder="Search"
                  />
                  <SearchIcon className="w-5 h-5 text-neutral-600 absolute left-2 -top-0.5 translate-y-1/2" />
                </div>
              </Field>
            </FieldGroup>
          </FieldSet>
        </form>
      </header>
      <NotesPageLayout
        basePath="search"
        notesList={<NotesList basePath="search" />}>
        {children}
      </NotesPageLayout>
    </>
  );
}
