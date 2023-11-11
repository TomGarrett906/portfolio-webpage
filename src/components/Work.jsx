import React from "react";
import aDJ from '../assets/a-dj.png'
import sky from '../assets/sky.png'
import f1Start from '../assets/f1start.png'

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-[#0a192f] bg-[#f7c857]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-[#0a192f] border-[#ffffff]">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>
        {/* CONTAINER */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 rounded-md">




          {/* GRID ITEM */}
        <div 
          style={{backgroundImage: `url(${aDJ})`}} 
          className="shadow-lg shadow-[#f7c857] group container rounded-md flex justify-center items-center mx-auto content-div">

            {/* HOVER EFFECT */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-[#ffffffbd] tracking-wider">
                Gig Trakr (coming soon)
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                    </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                    </button>
                </a>
              </div>
            </div>
          </div>




          {/* GRID ITEM */}
        <div 
          style={{backgroundImage: `url(${f1Start})`}} 
          className="shadow-lg shadow-[#f7c857] group container rounded-md flex justify-center items-center mx-auto content-div">

            {/* HOVER EFFECT */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-[#ffffffbd] tracking-wider">
                Formula 1 API (coming soon)
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                    </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                    </button>
                </a>
              </div>
            </div>
          </div>





          {/* GRID ITEM */}
        <div 
          style={{backgroundImage: `url(${sky})`}} 
          className="shadow-lg shadow-[#f7c857] group container rounded-md flex justify-center items-center mx-auto content-div">

            {/* HOVER EFFECT */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-[#ffffffbd] tracking-wider">
                Weather API (coming soon)
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                    </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                    </button>
                </a>
              </div>
            </div>
          </div>





        </div>
      </div>
    </div>
  );
};

export default Work;
