import React from 'react';
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import image from "../images/83316363_2727986553927466_8086501138565693440_n.jpg";

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0.7 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.4 }}
    >
      <main>
        <img
          src={image}
          alt="live at revolution"
          className="fixed object-cover w-full h-full"
        />
        <section className="relative leading-normal tracking-normal pt-6">
          <div className="relative containerBg border border-gray-400 rounded-t rounded-b px-4 md:px-0 max-w-6xl mx-auto">
            <h1 className="headerText p-6 text-3xl md:text-5xl font-bold text-center">
              Christopher Caressimo
            </h1>
            <p className="subText text-xs md:text-2xl text-center">
              835 Cornell Road Franklin Square, NY 11010, 516 263 3889,
              c.caressimo@gmail.com
            </p>
            <h3 className="headerText p-6 text-md md:text-3xl font-bold text-left ">
              Education:
            </h3>
            <ul>
              <li className="subText text-xs md:text-xl text-left">
                Nassau Community College
              </li>
              <li className="subText text-xs md:text-xl text-left">
                H. Frank Carey High School
              </li>
            </ul>
          </div>

          <div class="container px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <div class="flex flex-col w-full overflow-y-hidden container rounded-t rounded-b px-4">
              <div className="text-center py-6">
                <button class="headerText nextButton border border-gray-200 py-2 px-4 shadow rounded inline-flex items-center">
                  <svg
                    class="fill-current w-4 h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                  </svg>
                  <a href="#" target="_blank">
                    Download
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div class="container px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <div class="flex flex-col w-full overflow-y-hidden container rounded-t rounded-b px-4">
              <nav>
                <div className="text-center py-6">
                  <NavLink
                    to="/contact"
                    className="headerText nextButton text-2xl py-2 px-4 border border-gray-200 rounded shadow"
                  >
                    Contact
                  </NavLink>
                </div>
              </nav>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}  
