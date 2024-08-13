import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";

const page = () => {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <div className="dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.5] relative ">
        <div className="max-w-7xl mx-auto sm:p-5 max-w-[80%] mx-auto">
          <NavBar />
          <HeroSection />
        </div>
        <div className="h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full"></div>
      </div>
    </div>
  );
};

export default page;
