import InputField from "../InputField/InputField";
import { SettingIcon } from "../icons";

export default function Header() {
  return (
    <>
      <header className="container flex items-center justify-between">
        <h1>All Notes</h1>
        <div className="flex items-center justify-center gap-2">
          <InputField
            type="search"
            placeholder="Search by title, content, or tags…"
          />
          <SettingIcon className="w-8 h-8 cursor-pointer" />
        </div>
      </header>
    </>
  );
}
