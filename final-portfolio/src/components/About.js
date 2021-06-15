import React from "react";
import { motion } from "framer-motion";
import image from "../images/83316363_2727986553927466_8086501138565693440_n.jpg";
import orange from "../images/46512189_1970289146363881_2740894488737087488_n.jpg";
import reino from "../images/52417159_2096866167039511_8291758574829305856_n.jpg";
import glitch from "../images/108210827_3108775749181876_6581662062906601626_n.jpg";


export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0.7 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <main>
        <img
          src={image}
          alt="live at revolution"
          className="fixed object-cover w-full h-full"
        />
        <section className="relative font-sans leading-normal tracking-normal">
          <div class="relative bg-gradient-to-b from-transparent to-gray-800 rounded-t rounded-b px-4 md:px-0 max-w-6xl mx-auto">
            <h1 class="headerText mb-4 p-6 text-3xl md:text-5xl font-bold text-center md:text-center ">
              Who am I
            </h1>
            <div class="md:flex justify-between">
              <div className="overflow-auto md:w-5/12 flex items-center">
                <img src={orange} alt="" className="p-6 " />
              </div>
              <div className="md:w-1/2 p-6">
                <p className="subText text-base md:text-2xl text-yellow-500 mb-8 text-left md:text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet
                  ligula.Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Aliquam at ipsum eu nunc commodo posuere et sit amet
                  ligula.Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Aliquam at ipsum eu nunc commodo posuere et sit amet
                  ligula.Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.
                </p>
              </div>
            </div>
            <div className="mb-4 p-6 p-6 text-left md:text-left">
              <p class="subText text-base md:text-2xl text-yellow-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at ipsum eu nunc commodo posuere et sit amet ligula.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu
                nunc commodo posuere et sit amet ligula.Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc
                commodo posuere et sit amet ligula.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </div>
          </div>

          <div class="relative bg-gradient-to-b from-transparent to-gray-800 rounded-t rounded-b px-4 md:px-0 max-w-6xl mx-auto">
            <h1 class="headerText my-4 p-6 text-3xl md:text-5xl text-yellow-700 font-bold text-center md:text-center">
              How did I get here?
            </h1>
            <div className="object-right">
            
              <img src={reino} alt="" className="object-contain h-72 w-full" />
            </div>
            <div className="mb-4 p-6 p-6 text-left md:text-left">
              <p class="subText text-base md:text-2xl text-yellow-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at ipsum eu nunc commodo posuere et sit amet ligula.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu
                nunc commodo posuere et sit amet ligula.Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc
                commodo posuere et sit amet ligula.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo
                posuere et sit amet ligula.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo
                posuere et sit amet ligula.
              </p>
            </div>
          </div>

          <div class="relative bg-gradient-to-b from-transparent to-gray-800 rounded-t rounded-b px-4 md:px-0 max-w-6xl mx-auto">
            <h1 class="headerText my-4 p-6 text-3xl md:text-5xl text-yellow-700 font-bold text-center md:text-center">
              Why coding?
            </h1>
            <div class="md:flex justify-between">
              <div className="overflow-auto md:w-5/12 flex items-center">
                <img src={glitch} alt="" className="p-6" />
              </div>
              <div className="md:w-1/2 p-6">
                <p className="subText text-base md:text-2xl text-yellow-500 mb-8 text-left md:text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet
                  ligula.Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Aliquam at ipsum eu nunc commodo posuere et sit amet
                  ligula.Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.
                </p>
              </div>
            </div>
            <div className="mb-4 p-6 p-6 text-left md:text-left">
              <p class="subText leading-normal text-base md:text-2xl text-yellow-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at ipsum eu nunc commodo posuere et sit amet ligula.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu
                nunc commodo posuere et sit amet ligula.Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc
                commodo posuere et sit amet ligula.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
