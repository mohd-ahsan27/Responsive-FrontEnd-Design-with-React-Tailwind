import React from "react";

const Services = () => {
  return (
    <div className="bg-gray-900 py-16 px-4">
      <h2 className="text-center text-3xl font-bold text-blue-500 mb-12">
        BEST SERVICES
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {/* BASIC PLAN */}
        <div className="bg-gray-50 rounded-lg shadow-md p-8 w-72 text-center hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-bold mb-4">BASIC</h3>
          <p className="text-4xl font-bold mb-2">
            $20 <span className="text-sm text-gray-600 mb-4">/ month</span>
          </p>
          <ul className="text-gray-700 mb-6 space-y-2">
            <li>Responsive Website</li>
            <li>Free Name</li>
            <li>Mobile Friendly</li>
            <li>Webmail Free</li>
            <li>Customer Support</li>
          </ul>
          <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition duration-300">
            Purchase
          </button>
        </div>

        {/* STANDARD PLAN */}
        <div className="bg-gray-50 rounded-lg shadow-md p-8 w-72 text-center hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-bold text-yellow-500 mb-4">STANDARD</h3>
          <p className="text-4xl font-bold mb-2">
            $40 <span className="text-sm text-gray-600 mb-4">/ month</span>
          </p>
          <ul className="text-gray-700 mb-6 space-y-2">
            <li>Responsive Website</li>
            <li>Free Name</li>
            <li>Mobile Friendly</li>
            <li>Webmail Free</li>
            <li>Customer Support</li>
          </ul>
          <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition duration-300">
            Purchase
          </button>
        </div>

        {/* UNLIMITED PLAN */}
        <div className="bg-gray-50 rounded-lg shadow-md p-8 w-72 text-center hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-bold mb-4">UNLIMITED</h3>
          <p className="text-4xl font-bold mb-2">
            $60 <span className="text-sm text-gray-600 mb-4">/ month</span>
          </p>
          <ul className="text-gray-700 mb-6 space-y-2">
            <li>Responsive Website</li>
            <li>Free Name</li>
            <li>Mobile Friendly</li>
            <li>Webmail Free</li>
            <li>Customer Support</li>
          </ul>
          <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition duration-300">
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
