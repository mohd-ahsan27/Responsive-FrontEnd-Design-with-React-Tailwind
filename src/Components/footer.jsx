import React from "react";
import Elon from "../assets/elon.jpg";
import janifer from "../assets/janifer.jpg";
import ramzay from "../assets/ramzay.jpg";
import img1 from "../assets/image1.jfif";
import img2 from "../assets/image2.jfif";
import img3 from "../assets/image3.jfif";
import fb from "../assets/facebook_20x20.png";
import ig from "../assets/instagram_20x20.png";
import lkd from "../assets/linkedin_20x20.png";
import wapp from "../assets/whatsappicon_20x20.png";
import yt from "../assets/youtube_20x20.png";
import tw from "../assets/twittericon_20x20.png";
// import AboutUs from "../Components/AboutUs";

import { Link } from "react-router-dom";

const links = [
  "https://www.facebook.com",
  "https://www.instagram.com",
  "https://www.linkedin.com",
  "https://www.whatsapp.com",
  "https://www.youtube.com",
  "https://www.twitter.com",
];

const Footer = () => {
  return (
    <footer className="bg-[#1a1d1f] text-white px-10 py-10 rounded-tl-[80px] rounded-br-[80px] ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left py-3">
        {" "}
        {/* Left Column */}
        <div>
          <h2 className="text-3xl font-bold italic text-blue-500">
            A.H Developers
          </h2>
          <p className="mt-4 text-sm leading-relaxed ">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Provident
            Unde Eveniet Optio Corrupti Sed, Earum Suscipit Eaque Blanditiis
            Cupiditate Illo Fugiat Minus Facilis Illum Assumenda Cum,
            Consequuntur Temporibus Atque Rerum Dolorum, Dolorem Sapiente, Earum
            Nobis Quibusdam Voluptatibus!
          </p>
        </div>

         {/* Middle Column */ }
        <div className="ml-10 ">
          <h3 className="text-2xl font-semibold italic text-blue-500 mb-4 ">
            CONTENT
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to={"/"} className="hover:underline hover:text-blue-600">Home</Link>
            </li>
            <li>
              <Link to={"/aboutus"} className= "hover:underline hover:text-blue-600 ">About US</Link>
            </li>
            <li>
              <Link to={"/services"} className= "hover:underline hover:text-blue-600">Services</Link>
            </li>
            <li>
              <Link to={"/team"} className= "hover:underline hover:text-blue-600">Our Team</Link>
            </li>
            <li>
              <Link to={"/contactus"} className= "hover:underline hover:text-blue-600">Contact Us</Link>
            </li>
          </ul>
        </div>


        {/* Right Column */}
        <div className="grid grid-cols-3 gap-1 place-items-center">
          {[img1, img2, img3, Elon, janifer, ramzay].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Footer image ${index + 1}`}
              className="w-[100px] h-[70px] object-cover border-2 border-white rounded hover:scale-125 transition duration-200 cursor-pointer"
            />
          ))}
        </div>
      </div>
      {/* Social Links */}
      <div className="flex  justify-center md:justify-center items-center flex-wrap gap-6 pt-4 mt-8">
        {[fb, ig, lkd, wapp, yt, tw].map((src, index) => (
          <a
            key={index}
            href={links[index]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={src}
              alt={`Footer image ${index + 1}`}
              className="object-cover hover:scale-150 transition-transform duration-300 cursor-pointer rounded-md"
            />
          </a>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="mt-3 text-center text-sm">
        <p>
          Copyright © 2025 All Rights Reserved. Design By
          <a href="#" className="text-blue-500 hover:underline ml-1 text-1xl">
            Muhammad Ahsan
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

