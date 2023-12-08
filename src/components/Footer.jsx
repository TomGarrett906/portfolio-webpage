import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";


const FooterMenu = () => {
  return (
    <div className="fixed bottom-0 w-full h-[38px] bg-black text-gray-200 p-1 border-t-2 border-[#f7c857]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">

          <p className="text-sm hover:text-[#86b8ff] duration-300">Tom Garrett 2023 ©</p>
        </div>

        
        <div className="flex justify-center space-x-4 lg:hidden">
        <a
          className="mx-2 text-gray-200 hover:text-blue-600 hover:scale-125 duration-300"
          href="https://www.linkedin.com/in/thomas-garrett"
          target="blank"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          className="mx-2 text-gray-200 hover:text-[#633490] hover:scale-125 duration-300"
          href="https://github.com/TomGarrett906"
          target="blank"
        >
          <FaGithub size={30} />
        </a>
        <Link
          className="mx-2 text-gray-200 hover:text-[#3aa08a] hover:scale-125 duration-300"
          to="contact"
          smooth={true}
          duration={500}
        >
          <HiOutlineMail size={30} />
        </Link>
        <a
          className="mx-2 text-gray-200 hover:text-[#565f69] hover:scale-125 duration-300"
          href="https://www.overleaf.com/project/654cf9979d7eee7134d514f4"
          target="blank"
        >
          <BsFillPersonLinesFill size={30} />
        </a>
      </div>
      </div>

      {/* Icons for social media and contact */}

    </div>
  );
};

export default FooterMenu;
