import Header from "@/components/Header/Header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import LeftSideBar from "@/components/Sidebar/Left/LeftSideBar";

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
        </SidebarInset>
        <main className="flex flex-col gap-[32px] items-center sm:items-start">
          {children}
        </main>
      </SidebarProvider>
    </>
  );
}