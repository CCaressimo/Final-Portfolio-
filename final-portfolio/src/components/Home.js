import "./css/font.css"
import React from "react";
import { motion } from "framer-motion";
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
            <div class="container pt-24 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
              <div class="flex flex-col w-full overflow-y-hidden transparent container bg-opacity-70 bg-gray-700 rounded-t rounded-b px-4">
                <h1 class="headerText my-4 text-3xl md:text-5xl font-bold text-center">
                  Christopher Caressimo
                </h1>
                <p class="subText md:text-2xl text-yellow-500 mb-6 text-center">
                  Full Stack Web Developer//Musician
                </p>
              </div>
            </div>
          </section>
        </main>
      </motion.div>
    );
}  
