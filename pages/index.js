import React, { useState, useEffect } from 'react';
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Startchat from "@/components/Startchat";

const Index = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileScreen(window.innerWidth <= 768); // Set your desired mobile breakpoint
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <div className="bg-[#050505] flex flex-col px-[20px] md:px-[50px] lg:px-[80px] xl:px-[110px] 2xl:px-[150px] transition-all duration-300 pt-10 max-h-full relative">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        {/* Conditionally render Startchat based on screen size */}
        {!isMobileScreen && <Startchat />}
      </div>
      <div className="mb-10 pt-20 pb-10">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
