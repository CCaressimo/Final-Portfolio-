import React from 'react';
import { motion } from "framer-motion";
import image from "../images/83316363_2727986553927466_8086501138565693440_n.jpg";

export default function Resume() {
  return (
    <motion.div initial={{ opacity: .7 }} animate={{ opacity: 1 }} exit={{ opacity: .4 }}>
      <main>
        <img
          src={image}
          alt="live at revolution"
          className="fixed object-cover w-full h-full"
        />
        <section className="relative">
          <h1>this is my resume</h1>
        </section>
      </main>
    </motion.div>
  );
}  
