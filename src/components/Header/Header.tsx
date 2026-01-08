import Logo from "../Logo/Logo";
import InputField from "../InputField/InputField";
import { SettingIcon } from "../icons";

export default function Header() {
  return (
    <>
      <header className="container flex items-center justify-between my-0 mx-auto bg-neutral-100 md:bg-transparent border-none md:border-solid md:border-b md:border-b-neutral-200 px-[var(--spacing-400)] py-3.5 grid-box-header">
        <Logo />
        <h1 className="font-sans font-bold text-2xl hidden md:block">
          All Notes
        </h1>
        <div className="hidden md:flex justify-center items-center gap-4 w-[358px] max-w-full h-11">
          <InputField
            label="search-notes"
            type="search"
            placeholder="Search by title, content, or tags…"
          />
          <SettingIcon className="w-8 h-8 cursor-pointer text-neutral-500 relative top-1" />
        </div>
      </header>
    </>
  );
}
