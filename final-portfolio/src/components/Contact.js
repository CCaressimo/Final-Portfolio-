import React from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import image from "../images/83316363_2727986553927466_8086501138565693440_n.jpg";


export default function Contact() {

    function sendEmail(e) {
      e.preventDefault();

      emailjs
        .sendForm("gmail", "template_z23g4ps", e.target, "user_iOBjKK4IyW8wbdtw5oZsU")
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
        e.target.reset()
    }

  return (
    <motion.div
      initial={{ opacity: 0.7 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.4 }}
    >
      <main className="leading-normal tracking-normal">
        <img
          src={image}
          alt="live at revolution"
          className="fixed object-cover w-full h-full"
        />

        <section className="relative leading-normal tracking-normal pt-6">
          <div className="relative border border-gray-400 containerBg rounded-b overflow-hidden shadow-lg leading-normal tracking-normal px-4 pt-6 max-w-6xl mx-auto">
            <form
              onSubmit={sendEmail}
              className="max-w-4xl mx-auto text-center break-normal"
            >
              <div className="w-full m-0 p-0 bg-cover bg-bottom">
                <div className="max-w-4xl mx-auto text-center break-normal">
                  <p className="headerText shadow-inner font-bold text-3xl md:text-5xl">
                    Contact Me
                  </p>
                  <br />
                  <p className="subText mt-3 mb-6 text-xl md:text-2xl text-yellow-500">
                    Lets get in contact!
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  ></label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="First Name"
                    name="first name"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                  ></label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-800 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Last Name"
                    name="last name"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-password"
                  ></label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="email"
                    type="email"
                    placeholder="Email"
                    name="email"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-password"
                  ></label>
                  <textarea
                    className=" no-resize appearance-none block w-full bg-white text-gray-700 border border-gray-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                    id="message"
                    placeholder="Leave a message"
                    name="message"
                  ></textarea>
                </div>
              </div>
              <div className="text-center pb-6">
                <button
                  className="headerText nextButton text-2xl py-2 px-4 border border-gray-200 rounded shadow"
                  type="submit"
                  value="Send"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
          <br />
          <div className="w-full flex justify-center pb-4 content-center">
            <div className="text-center pb-6">
              <a
                href="https://github.com/CCaressimo"
                target="_blank"
                className="px-4"
              >
                <button className="headerText nextButton py-2 px-4 border border-gray-200 rounded shadow">
                  Github
                </button>
              </a>
            </div>

            <div className="text-center pb-6">
              <a
                href="https://www.linkedin.com/in/christopheracaressimo/"
                target="_blank"
                className=""
              >
                <button className="headerText nextButton py-2 px-4 border border-gray-200 rounded shadow">
                  LinkedIn
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
};