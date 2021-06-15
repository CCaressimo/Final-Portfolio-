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
        <section className="relative">
          <h1>this is my resume</h1>

          <div class="container px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <div class="flex flex-col w-full overflow-y-hidden transparent container rounded-t rounded-b px-4">
              <nav>
                <div className="text-center py-6">
                  <NavLink
                    to="/contact"
                    class="headerText nextButton text-2xl py-2 px-4 border border-gray-200 rounded shadow "
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
