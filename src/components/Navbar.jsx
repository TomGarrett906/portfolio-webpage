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
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#5778a5] border-b-2 border-[#f7c857]">
      <div className="flex items-center justify-evenly">
      <Link className='hover:text-white hover:text-sm' to="home" smooth={true} duration={500}>
              
        <img  className='rounded-md shadow-sm hover:shadow-white hover:scale-110 duration-500' src={TG} alt="Logo Img" style={{ width: "70px" }} />
          </Link>

      </div>

      {/* NAVBAR MENU */}
      <ul className="hidden sm:flex">
        <li>                  
          <Link className='hover:text-white hover:text-sm duration-300' to="home" smooth={true} duration={500}>
              Home
          </Link>
        </li>
        <li>
          <Link className='hover:text-white hover:text-sm duration-300' to="about" smooth={true} duration={500}>
              About
          </Link>
        </li>
        <li>
          <Link className='hover:text-white hover:text-sm duration-300' to="certification" smooth={true} duration={500}>
              Certification
          </Link>
        </li>
        <li>          
          <Link className='hover:text-white hover:text-sm duration-300' to="work" smooth={true} duration={500}>
              Work
          </Link></li>
        <li>
          <Link className='hover:text-white hover:text-sm duration-300' to="contact" smooth={true} duration={500}>
              Contact
          </Link>
        </li>
      </ul>

      {/* HAMBURGER MENU */}
      <div onClick={handleClick} className="sm:hidden z-10">
        {!nav ? <FaBars className="hover:text-white duration-500"/> : <FaTimes className="text-gray-300 hover:text-red-600"/>}
      </div>

      {/* MOBILE MENU */}
      <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0c1c36] flex flex-col justify-center items-center text-gray-300"}
      >
        <li className="py-6 text-4xl hover:text-[#f7c857] hover:scale-110 duration-300">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
              Home
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-[#f7c857] hover:scale-110 duration-300">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
              About
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-[#f7c857] hover:scale-110 duration-300">
          <Link onClick={handleClick} to="certification" smooth={true} duration={500}>
              Certification
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-[#f7c857] hover:scale-110 duration-300">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
              Work
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-[#f7c857] hover:scale-110 duration-300">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
              Contact
          </Link>
        </li>
      </ul>

      {/* ICON SIDE MENU */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
      <ul>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-md">
          <a className="flex justify-between items-center w-full text-gray-300"
            href="https://www.linkedin.com/in/thomas-garrett" target="blank">
            LinkedIn <FaLinkedin size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#633490] rounded-md">
          <a className="flex justify-between items-center w-full text-gray-300"
            href="https://github.com/TomGarrett906" target="blank">
            GitHub <FaGithub size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3aa08a] rounded-md">
          <a className="flex justify-between items-center w-full text-gray-300"
            href="/">
                      <Link className='hover:text-white hover:text-sm' to="contact" smooth={true} duration={500}>
              Email
          </Link><HiOutlineMail size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] rounded-md">
          <a className="flex justify-between items-center w-full text-gray-300"
            href="https://www.overleaf.com/project/654cf9979d7eee7134d514f4" target="blank">
            Resume <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </div></div>
  );
};

export default Navbar;
