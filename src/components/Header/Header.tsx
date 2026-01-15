import Logo from "../Logo/Logo";
import InputField from "../InputField/InputField";
import { SettingIcon } from "../icons";

export default function Header() {
  return (
    <>
      <header className="w-full max-w-full flex items-center justify-between my-0 mx-auto bg-neutral-100 lg:bg-transparent border-none lg:border-solid lg:border-b lg:border-b-neutral-200 px-[var(--spacing-400)] py-3.5">
        <Logo />
        <h1 className="font-sans font-bold text-2xl hidden lg:block">
          All Notes
        </h1>
        <div className="hidden lg:flex justify-center items-center gap-4 w-[358px] max-w-full h-11">
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
