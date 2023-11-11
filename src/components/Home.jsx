import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#1a1a1a]">
      {/* CONTAINER */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#f7c857]">Hello my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Tommy Garrett
        </h1>
        <h2 className="text-3xl sm:text-6xl font-bold text-[#8892b0]">
          I am a Full Stack Developer.
        </h2>
        <p className="text-[#82b6ff] py-4">
          I specialize in creating outstanding digital experiences as a
          full-stack developer, occasionally delving into design work. My
          current focus revolves around crafting responsive full-stack web
          applications.
        </p>
        <div>
          <button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#83b6fe] hover:border-[#83b6fe] hover:text-gray-900 rounded-sm">
            View Work 
            <span className="hover:rotate-90 duration-500">
            <HiArrowNarrowRight className="ml-3"/>

            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
