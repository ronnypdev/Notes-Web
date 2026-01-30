import Header from '@/components/Header/Header';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import LeftSideBar from '@/components/Sidebar/Left/LeftSideBar';
import RightSideBar from '@/components/Sidebar/Right/RightSideBar';

export default async function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
