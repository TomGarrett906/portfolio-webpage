import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import {Link} from 'react-scroll'
import TG from "../assets/t-g.png"

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#5778a5] border-b border-[#f7c857]">
      <div className="flex items-center justify-evenly">
        <img  className='rounded-sm' src={TG} alt="Logo Img" style={{ width: "70px" }} />

      </div>

      {/* MENU */}
      <ul className="hidden sm:flex">
        <li>                  
          <Link to="home" smooth={true} duration={500}>
              Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
              About
          </Link>
        </li>
        <li>
          <Link to="certification" smooth={true} duration={500}>
              Certification
          </Link>
        </li>
        <li>          
          <Link to="work" smooth={true} duration={500}>
              Work
          </Link></li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
              Contact
          </Link>
        </li>
      </ul>

      {/* HAMBURGER MENU */}
      <div onClick={handleClick} className="sm:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes className="text-gray-300"/>}
      </div>

      {/* MOBILE MENU */}
      <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0c1c36f8] flex flex-col justify-center items-center text-gray-300"}
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
              Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
              About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="certification" smooth={true} duration={500}>
              Certification
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
              Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
              Contact
          </Link>
        </li>
      </ul>

      {/* ICONS */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
      <ul>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-md">
          <a className="flex justify-between items-center w-full text-gray-300"
            href="/">
            LinkedIn <FaLinkedin size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] rounded-md">
          <a className="flex justify-between items-center w-full text-gray-300"
            href="/">
            GitHub <FaGithub size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3aa08a] rounded-md">
          <a className="flex justify-between items-center w-full text-gray-300"
            href="/">
            Email <HiOutlineMail size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] rounded-md">
          <a className="flex justify-between items-center w-full text-gray-300"
            href="/">
            Resume <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </div></div>
  );
};

export default Navbar;
