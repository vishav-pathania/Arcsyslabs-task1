import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
//import Chatsection from "@/components/Chatsection";
import Footer from "@/components/Footer";
import Startchat from "@/components/Startchat";

const Index = () => {
  return (
    <div className="bg-[#050505] flex flex-col px-[20px] md:px-[50px] lg:px-[80px] xl:px-[110px] 2xl:px-[150px] transition-all duration-300 pt-10 h-screen relative">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <Startchat />
      </div>
      <div className="relative pt-20 pb-[100px]">
      <Footer />
      </div>
    </div>
  );
};

export default Index;
