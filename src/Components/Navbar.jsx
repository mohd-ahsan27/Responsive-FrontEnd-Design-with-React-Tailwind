import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between bg-gray-700 h-24 fixed w-full z-50 px-4 md:px-8">
      <div className="text-3xl md:text-5xl text-yellow-400 hover:scale-110 cursor-pointer transition-transform duration-300">
          A.H Developers
</div>


        {/* Hamburger Icon */}
        <div
          className="md:hidden text-white text-3xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 lg:gap-24 text-white text-lg mr-8">
          <li className="hover:text-yellow-300 hover:scale-110 cursor-pointer transition duration-300">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="hover:text-yellow-300 hover:scale-110 cursor-pointer transition duration-300">
            <Link to={"/aboutus"}>About Us</Link>
          </li>
          <li className="hover:text-yellow-300 hover:scale-110 cursor-pointer transition duration-300">
            <Link to={"/services"}>Services</Link>
          </li>
          <li className="hover:text-yellow-300 hover:scale-110 cursor-pointer transition duration-300">
            <Link to={"/team"}>Our Team</Link>
          </li>
          <li className="hover:text-yellow-300 hover:scale-110 cursor-pointer transition duration-300">
            <Link to={"/contactus"}>Contact US</Link>
          </li>
        </ul>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="absolute top-24 left-0 w-full bg-gray-700 flex flex-col items-center text-white text-lg gap-4 py-4 md:hidden">
            <li
              className="hover:text-yellow-300 cursor-pointer transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              <Link to={"/"}>Home</Link>
            </li>
            <li
              className="hover:text-yellow-300 cursor-pointer transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              <Link to={"/aboutus"}>About Us</Link>
            </li>
            <li
              className="hover:text-yellow-300 cursor-pointer transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              <Link to={"/services"}>Services</Link>
            </li>
            <li
              className="hover:text-yellow-300 cursor-pointer transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              <Link to={"/team"}>Our Team</Link>
            </li>
            <li
              className="hover:text-yellow-300 cursor-pointer transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              <Link to={"/contactus"}>Contact US</Link>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Navbar;
