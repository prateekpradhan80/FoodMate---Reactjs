 
import React, { useContext } from "react";
import { UserContext } from "../Utils/UserContext";
const Contact = () => {
  const{theme} = useContext(UserContext);
  return (
    <div>
      <div class=  {`px-5 py-24 flex justify-center bg-${theme}-500`} >
        <div class="  bg-gray-200 rounded-lg p-8 flex flex-col   w-1/3 mt-10 shadow-green-500    shadow-2xl">
          <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
            Contact Us
          </h2>

          <div class="  mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="  mb-4">
            <label for="message" class="leading-7 text-sm text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Button
          </button>
          <p class="text-xs text-gray-500 mt-3">feel free to contact us</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
