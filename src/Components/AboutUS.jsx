import React from "react";
import { FaDesktop, FaTrophy, FaPencilRuler } from "react-icons/fa";

const AboutUs = () => {
  return (
    
    <div className="bg-gray-600 py-28 px-4 ">
      <h2 className="text-center text-3xl font-bold text-blue-500 mb-20">
        About US
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-6 ">
        <div className="text-center text-white max-w-xs">
          <FaDesktop className="text-7xl mx-auto mb-4 hover:scale-125 transition duration-300 cursor-pointer" />
          <h3 className="text-xl font-bold mb-2 ">Easy to Use</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
            consequatur suscipit libero modi sapiente incidunt.
          </p>
        </div>

        <div className="text-center text-white max-w-xs">
          <FaTrophy className="text-7xl mx-auto mb-4 hover:scale-125 transition duration-300 cursor-pointer" />
          <h3 className="text-xl font-bold mb-2">Awesome Design</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
            consequatur suscipit libero modi sapiente incidunt.
          </p>
        </div>

        <div className="text-center text-white max-w-xs">
          <FaPencilRuler className="text-7xl mx-auto mb-4 hover:scale-125 transition duration-300 cursor-pointer" />
          <h3 className="text-xl font-bold mb-2 ">Easy To Customize</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
            consequatur suscipit libero modi sapiente incidunt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
