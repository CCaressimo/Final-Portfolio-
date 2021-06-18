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
          <section className="relative pt-36 lg:pt-48 px-20">
            <div className="pt-24 md:pt-48 px-0 max-w-6xl mx-auto items-center">
              <div className="w-full overflow-y-hidden containerBg border border-gray-400 rounded-t rounded-b px-4">
                <h1 className="headerText my-4 text-3xl md:text-5xl font-bold shadow-inner text-center">
                  Christopher Caressimo
                </h1>
                <p className="subText text-xs md:text-2xl text-center">
                  Full Stack Web Developer//Musician
                </p>
                <nav>
                  <div className="text-center pt-6">
                    <NavLink
                      to="/about"
                      className="headerText nextButton text-2xl py-2 px-4 border border-gray-200 rounded shadow"
                    >
                      Enter
                    </NavLink>
                  </div>
                </nav>
                <h3 className="subText text-xs text-center md:text-right py-6">
                  Built with React and Tailwind CSS
                </h3>
              </div>
            </div>
          </section>
        </main>
      </motion.div>
    );
}  
