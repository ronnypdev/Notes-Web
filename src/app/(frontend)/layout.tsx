import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-[32px] items-center sm:items-start">
        {children}
      </main>
      <Footer />
    </>
  );
}