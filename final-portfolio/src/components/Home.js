import "./css/font.css"
import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import image from "../images/83316363_2727986553927466_8086501138565693440_n.jpg";

export default function Home() {
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
          <section className="relative pt-12 lg:pt-64 px-20">
            <div className="container pt-24 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
              <div className="flex flex-col w-full overflow-y-hidden transparent container bg-opacity-90 bg-gray-700 rounded-t rounded-b px-4">
                <h1 className="headerText my-4 text-3xl md:text-5xl font-bold text-center">
                  Christopher Caressimo
                </h1>
                <p className="subText text-xs md:text-2xl text-yellow-500 text-center">
                  Full Stack Web Developer//Musician
                </p>
                <nav>
                  <div className="text-center py-6">
                    <NavLink
                      to="/about"
                      className="headerText bg-opacity-70 bg-gray-700 hover:bg-yellow-600 text-gray-800 py-2 px-4 border border-gray-200 rounded shadow transition ease-in-out">
                        Enter
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
