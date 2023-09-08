import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div className="transition-transform hover:scale-110 mx-2">
        <a href="#">
          <i className="fa-solid  fa-code  fa-lg" style={{ color: "#cc0459" }}>
            <p className="mx-12 block text-gray-300">Yetkin Dev</p>
          </i>
        </a>
      </div>
      {/*Menu*/}
      <div className="hidden md:flex">
        <ul className="hidden md:flex">
          <li
            className="transition-transform hover:scale-105 hover:underline"
            style={{ color: "#CC0459" }}
          >
            <a href="">
              <Link to="home" smooth="{true} duration{500}">
                Home
              </Link>
            </a>
          </li>
          <li className="transition-transform hover:scale-105 hover:underline ">
            <a href="">
              <Link to="about" smooth="{true} duration{500}">
                About
              </Link>
            </a>
          </li>
          <li className="transition-transform hover:scale-105 hover:underline ">
            <a href="">
              <Link to="skills" smooth="{true} duration{500}">
                Skill
              </Link>
            </a>
          </li>
          <li className="transition-transform hover:scale-105 hover:underline ">
            <a href="">
              <Link to="work" smooth="{true} duration{500}">
                Work
              </Link>
            </a>
          </li>
          <li className="transition-transform hover:scale-105 hover:underline ">
            <a href="">
              <Link to="contact" smooth="{true} duration{500}">
                Contact
              </Link>
            </a>
          </li>
        </ul>
      </div>
      {/*Hamburger Menu*/}
      <div
        onClick={handleClick}
        className="md:hidden z-10 transition-all ease-in duration-300"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/*mobile Menu*/}
      <div
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex justify-center items-center transition-all ease-in duration-300 md:hidden"
        }
      >
        <ul>
          <li className="py-6 text-4xl transition-transform hover:scale-110">
            <a href="" style={{ color: "#CC0459" }}>
              Home
            </a>
          </li>
          <li className="py-6 text-4xl transition-transform hover:scale-110">
            <a href=""> About</a>
          </li>
          <li className="py-6 text-4xl transition-transform hover:scale-110">
            <a href=""> Skill</a>
          </li>
          <li className="py-6 text-4xl transition-transform hover:scale-110">
            <a href=""> Contact</a>
          </li>
        </ul>
      </div>
      {/*Social icons*/}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[168px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300 hover:text-gray-400 transition-all ease-in duration-300"
              href="/"
            >
              Linkedin
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[168px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300 hover:text-gray-400 transition-all ease-in duration-300"
              href="/"
            >
              Github
              <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[168px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300 hover:text-gray-400 transition-all ease-in duration-300"
              href="/"
            >
              E-mail
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[168px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300 hover:text-gray-400 transition-all ease-in duration-300"
              href="/"
            >
              Resume
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
