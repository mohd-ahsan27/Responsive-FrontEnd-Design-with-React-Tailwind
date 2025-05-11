import React from "react";
import { FaCamera } from "react-icons/fa6";
import { TbMessageChatbot } from "react-icons/tb";
import { FaRegClone } from "react-icons/fa6";

// Import your local images from assets
import Elon from "../assets/elon.jpg";
import Ramzay from "../assets/ramzay.jpg";
import Janifer from "../assets/janifer.jpg";

const OurTeam = () => {
  return (
    <div className="dark:bg-gray-800 py-16 px-4 ">
      <h2 className="text-center text-3xl font-bold text-yellow-500 mb-12 pt-20">
        OUR TEAM
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-12">
        {/* Team Member 1 */}
        <div className="bg-transparent text-center">
          <img
            src={Elon}
            alt="Elon Musk"
            className="rounded-full border-4 border-white mx-auto w-40 h-40 object-cover hover:scale-110 cursor-pointer transition duration-300"
          />
          <h3 className="mt-4 text-white text-xl font-bold">ELON MUSK</h3>
          <p className="text-sky-400">CEO & Founder</p>
          <p className="text-yellow-400">Web Developer & Programmer</p>
          <div className="flex justify-center mt-4 space-x-4 text-white text-xl ">
          <FaCamera />
          <FaRegClone />
          <TbMessageChatbot />

          </div>
        </div>

        {/* Team Member 2 */}
        <div className="bg-transparent text-center">
          <img
            src={Ramzay}
            alt="Ramzay Alya"
            className="rounded-full border-4 border-white mx-auto w-40 h-40 object-cover hover:scale-110 cursor-pointer transition duration-300"
          />
          <h3 className="mt-4 text-white text-xl font-bold">RAMZAY ALYA</h3>
          <p className="text-sky-400">VCEO & Planner</p>
          <p className="text-yellow-400">IT Expert</p>
          <div className="flex justify-center mt-4 space-x-4 text-white text-xl">
          <FaCamera />
          <FaRegClone />
          <TbMessageChatbot />
          </div>
        </div>

        {/* Team Member 3 */}
        <div className="bg-transparent text-center">
          <img
            src={Janifer}
            alt="Janifer Okla"
            className="rounded-full border-4 border-white mx-auto w-40 h-40 object-cover hover:scale-110 cursor-pointer transition duration-300"
          />
          <h3 className="mt-4 text-white text-xl font-bold">JANIFER OKLA</h3>
          <p className="text-sky-400">Managing Director</p>
          <p className="text-yellow-400">Web Designer</p>
          <div className="flex justify-center mt-4 space-x-4 text-white text-xl">
          <FaCamera />
          <FaRegClone />
          <TbMessageChatbot />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
