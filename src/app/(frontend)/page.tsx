import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";
import LeftSideBar from "@/components/Sidebar/Left/LeftSideBar";
import RightSideBar from "@/components/Sidebar/Right/RightSideBar";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <LeftSideBar />
      <Main>
        <h1>Main</h1>
      </Main>
      <RightSideBar />
      <Footer />
    </>
  );
}
