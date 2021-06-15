import React from "react";
import { motion } from "framer-motion";
import image from "../images/83316363_2727986553927466_8086501138565693440_n.jpg";


export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0.7 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.4 }}
    >
      <main class="font-sans leading-normal tracking-normal">
        <img
          src={image}
          alt="live at revolution"
          className="fixed object-cover w-full h-full"
        />

        <section class="relative bg-opacity-70 bg-gray-700 rounded-b overflow-hidden shadow-lg font-sans leading-normal tracking-normal px-4 md:px-0 max-w-6xl mx-auto">
          <form class="container max-w-4xl mx-auto text-center break-normal">
            <div class="w-full m-0 p-0 bg-cover bg-bottom">
              <div class="container max-w-4xl mx-auto pt-8 md:pt-16 text-center break-normal">
                <p class="headerText font-extrabold text-3xl md:text-5xl">
                  Contact Me
                </p>
                <br />
                <p class="subText mt-3 mb-6 text-xl md:text-2xl text-yellow-500">
                  Lets get in contact!
                </p>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                ></label>
                <input
                  class="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                ></label>
                <input
                  class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                ></label>
                <input
                  class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                ></label>
                <textarea
                  class=" no-resize appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                  id="message"
                  placeholder="Leave a message"
                ></textarea>
              </div>
            </div>
            <div className="w-full flex justify-center pb-4 content-center">
              <button
                class="bg-white hover:bg-yellow-600 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow transition ease-in-out"
                type="button"
              >
                Send
              </button>
            </div>
          </form>
        </section>
      </main>
    </motion.div>
  );
};