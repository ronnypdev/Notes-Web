import Header from '@/components/Header/Header';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import LeftSideBar from '@/components/Sidebar/Left/LeftSideBar';
import RightSideBar from '@/components/Sidebar/Right/RightSideBar';
import { getServerSessions } from '@/lib/usersessions';
import UnauthenticatedPage from '@/app/(frontend)/unauthenticated/page';

export default async function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSessions();
  const user = session?.user;

  if (!user) return <UnauthenticatedPage />;

  return (
    <>
      <SidebarProvider>
        <LeftSideBar />
        <SidebarInset>
          <Header />
          <div className="flex flex-1">
            <main className="flex-1 p-4">{children}</main>
            <RightSideBar />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
