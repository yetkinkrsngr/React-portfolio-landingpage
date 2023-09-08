import React from "react";
import boot from "../assets/skills/boot.png";
import css from "../assets/skills/css.png";
import html from "../assets/skills/html.png";
import js from "../assets/skills/js.png";
import react from "../assets/skills/react.png";
import sass from "../assets/skills/sass.png";
import git from "../assets/skills/git.png";
import github from "../assets/skills/github.png";
import vite from "../assets/skills/vite.png";
import tailwind from "../assets/skills/tailwind.png";

const ImageGallery = () => {
  const images = [
    { src: html, alt: "HTML" },
    { src: css, alt: "CSS" },
    { src: git, alt: "GIT" },
    { src: github, alt: "GITHUB" },
    { src: boot, alt: "BOOTSTRAP" },
    { src: tailwind, alt: "TAILWIND" },
    { src: sass, alt: "SASS" },
    { src: react, alt: "REACT" },
    { src: vite, alt: "VITE" },
    { src: js, alt: "TERMINAL" },
  ];

  return (
    <div className="grid grid-cols-2  sm:grid-col-4 text-center py-8">
      {images.map((image, index) => (
        <div className="md:flex justify-center items-center ">
          <div
            className="shadow-md w-1/2 shadow-[#040c16] hover:scale-105 duration-500 mt-8 cursor-pointer"
            key={index}
          >
            <img
              className="w-10 mx-auto"
              src={image.src}
              alt={`Image ${index}`}
            />
            <p className="my-4">{image.alt}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
