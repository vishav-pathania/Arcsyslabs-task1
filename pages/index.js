import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-[#050505] px-[20px] md:px-[50px] lg:px-[80px] xl:px-[110px] 2xl:px-[150px] transition-all duration-300 pt-10 min-h-screen">
      <Header />
      <Sidebar />
      <Footer />
    </div>
  );
};

export default Index;
