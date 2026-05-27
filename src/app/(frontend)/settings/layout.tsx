import Link from 'next/link';

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full h-full grid grid-cols-1 lg:grid-cols-[350px_1fr] grid-rows-[1fr]">
      <div className="settings-sidebar w-full col-span-1 row-span-1 border-r border-neutral-200 py-5 pl-4 pr-8">
        <nav>
          <ul>
            <li>
              <Link href="/settings/change-password">Change Password</Link>
            </li>
            <li>
              <Link href="/settings/color-theme">Color Theme</Link>
            </li>
            <li>
              <Link href="/settings/font-options">Font Options</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="settings-content col-span-1 row-span-1 p-4">
        {children}
      </div>
    </section>
  );
}
