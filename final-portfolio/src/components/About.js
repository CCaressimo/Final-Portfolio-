import React from "react";
import { motion } from "framer-motion";
import image from "../images/83316363_2727986553927466_8086501138565693440_n.jpg";
import orange from "../images/46512189_1970289146363881_2740894488737087488_n.jpg";
import reino from "../images/52417159_2096866167039511_8291758574829305856_n.jpg";
import glitch from "../images/108210827_3108775749181876_6581662062906601626_n.jpg";


export default function About() {
  return (
    <motion.div initial={{ opacity: .7}} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <main>
        <img
          src={image}
          alt="live at revolution"
          className="fixed object-cover w-full h-full"
        />
        <section className="relative font-sans leading-normal tracking-normal">
          <div class="relative bg-gradient-to-b from-transparent to-gray-900 rounded-t rounded-b px-4 md:px-0 max-w-6xl mx-auto">
            <h1 class="mb-4 p-6 text-3xl md:text-5xl text-yellow-700 font-bold text-center md:text-center ">
              Who am I
            </h1>
            <div class="md:flex justify-between">
              <div className="overflow-auto md:w-3/5 flex items-center">
                <img src={orange} alt="" className="p-6 " />
              </div>
              <div className="md:w-2/5 p-6">
                <p className="text-base md:text-2xl text-yellow-500 mb-8 text-center md:text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                  at ipsum eu nunc commodo posuere et sit amet ligula.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu
                  nunc commodo posuere et sit amet ligula.Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc
                  commodo posuere et sit amet ligula.Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo
                  posuere et sit amet ligula.Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo
                  posuere et sit amet ligula.Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo
                  posuere et sit amet ligula.
                </p>
              </div>
            </div>
            <div className="mb-4 p-6 p-6 text-center md:text-center">
              <p class="text-base md:text-2xl text-yellow-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at ipsum eu nunc commodo posuere et sit amet ligula.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu
                nunc commodo posuere et sit amet ligula.Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc
                commodo posuere et sit amet ligula.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo
                posuere et sit amet ligula.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit
                amet ligula.Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
                ipsum eu nunc commodo posuere et sit amet ligula.Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc
                commodo posuere et sit amet ligula.
              </p>
            </div>
          </div>

          <div class="relative bg-gradient-to-b from-transparent to-gray-900 rounded-t rounded-b px-4 md:px-0 max-w-6xl mx-auto">
            <h1 class="my-4 p-6 text-3xl md:text-5xl text-yellow-700 font-bold text-center md:text-center">
              How did I get here?
            </h1>
            <div className="object-right">
              <img src={reino} alt="" className="object-contain h-96 w-full" />
            </div>
            <div className="mb-4 p-6 p-6 text-center md:text-center">
              <p class="text-base md:text-2xl text-yellow-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at ipsum eu nunc commodo posuere et sit amet ligula.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu
                nunc commodo posuere et sit amet ligula.Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc
                commodo posuere et sit amet ligula.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo
                posuere et sit amet ligula.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit
                amet ligula.
              </p>
            </div>
          </div>

          <div class="relative bg-gradient-to-b from-transparent to-gray-900 rounded-t rounded-b px-4 md:px-0 max-w-6xl mx-auto">
            <h1 class="my-4 p-6 text-3xl md:text-5xl text-yellow-700 font-bold text-center md:text-center">
              Why coding?
            </h1>
            <div class="md:flex justify-between">
              <div className="overflow-auto md:w-3/5 flex items-center">
                <img src={glitch} alt="" className="p-6" />
              </div>
              <div className="md:w-2/5 p-6">
                <p className="text-base md:text-2xl text-yellow-500 mb-8 text-center md:text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                  at ipsum eu nunc commodo posuere et sit amet ligula.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu
                  nunc commodo posuere et sit amet ligula.Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc
                  commodo posuere et sit amet ligula. Aliquam at ipsum eu nunc
                  commodo posuere et sit amet ligula.
                </p>
              </div>
            </div>
            <div className="mb-4 p-6 p-6 text-center md:text-center">
              <p class="leading-normal text-base md:text-2xl text-yellow-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at ipsum eu nunc commodo posuere et sit amet ligula.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu
                nunc commodo posuere et sit amet ligula.Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc
                commodo posuere et sit amet ligula.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo
                posuere et sit amet ligula.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit
                amet ligula.
              </p>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
