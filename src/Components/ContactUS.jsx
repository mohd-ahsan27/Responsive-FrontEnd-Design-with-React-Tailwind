import React from "react";

const ContactUs = () => {
  return (
    <div className="flex items-center justify-center bg-gray-200 py-10 px-4">
      <div className="bg-gray-900 rounded-tl-[80px] rounded-br-[80px] p-10 md:p-16 w-full h-{50rem} max-w-2xl shadow-2xl mt-20 ">
        <h2 className="text-4xl text-center font-bold text-white mb-10 underline">
          CONTACT US
        </h2>

        <form className="flex flex-col gap-6">
          <div>
            <label className="text-white text-lg font-semibold block mb-2">
              User Name:
            </label>
            <input
              type="text"
              name="username"
              placeholder="User Name..."
              className="w-full p-3 rounded bg-white text-black outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="text-white text-lg font-semibold block mb-2">
              E-mail:
            </label>
            <input
              type="email"
              name="email"
              placeholder="E-mail..."
              className="w-full p-3 rounded bg-white text-black outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="text-white text-lg font-semibold block mb-2">
              Message:
            </label>
            <textarea
              name="message"
              placeholder="Your Message..."
              rows="5"
              className="w-full p-3 rounded bg-white text-black outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              required
            ></textarea>
          </div>

          <div className="flex justify-between mt-4">
            <button
              type="reset"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition"
            >
              RESET
            </button>
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded transition"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
