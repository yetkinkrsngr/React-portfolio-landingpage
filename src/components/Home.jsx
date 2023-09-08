import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import "../index.css";

const Home = () => {
  return (
    <div name="home" className=" w-full h-screen bg-[#0a192f]">
      {/*Container */}
      <div className="h- md:max-w-[100vh] mx-auto px-8 flex flex-col justify-center h-full pt-12">
        <p className="text-pink-600 mt-12">Hi , my name is</p>
        <h1 className="text-2xl sm:text-7xl font-bold text-[#ccd6f6] mt-2">
          Yetkin KARASUNGUR
        </h1>
        <h2 className="text-2xl sm:text-7xl text-bold text-[#8892b0]">
          I am a{" "}
          <span className="inline-block transition-transform cursor-pointer text-1xl sm:text-4xl font-bold hover:scale-105 duration-300 hover:anime-lover">
            {" "}
            #FrontEndDeveloper
          </span>
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          A junior Front-End developer is an aspiring professional who
          specializes in web development. They utilize a versatile skill set
          that includes HTML, CSS, and popular frameworks like Bootstrap,
          Tailwind, and React. Their toolkit also includes Vite, a fast build
          tool, and development server. Junior Front-End developers play a
          crucial role in crafting visually appealing and responsive user
          interfaces, learning and growing in the ever-evolving world of web
          development.
        </p>
        <div className="">
          <button className="text-white group border-2 px-6 p-3 my-2 flex items-center hover:bg-pink-600 transition-all duration-300 ease-in-out">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />{" "}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
