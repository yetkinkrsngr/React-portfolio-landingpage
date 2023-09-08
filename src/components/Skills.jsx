import React from "react";
import ImageGallery from "./images";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-100vh bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline  border-b-4 border-pink-600 ">
            Experince
          </p>
          <p className="py-4">// There are the Tech. i Am working With</p>
        </div>
        <ImageGallery />
      </div>
    </div>
  );
};
export default Skills;
