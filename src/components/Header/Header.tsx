import InputField from "../InputField/InputField";
import { SettingIcon } from "../icons";

export default function Header() {
  return (
    <>
      <header>
        <h1>All Notes</h1>
        <div>
          <InputField
            type="search"
            placeholder="Search by title, content, or tags…"
          />
          <SettingIcon />
        </div>
      </header>
    </>
  );
}
