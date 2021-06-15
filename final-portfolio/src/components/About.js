import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
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
        <section className="relative leading-normal tracking-normal pt-6">
          <div className="relative containerBg rounded-t rounded-b px-4 md:px-0 max-w-6xl mx-auto">
            <h1 className="headerText mb-4 p-6 text-3xl md:text-5xl font-bold text-center md:text-center ">
              Who am I
            </h1>
            <div className="md:flex justify-between">
              <div className="overflow-auto md:w-5/12 flex items-center">
                <img src={orange} alt="" className="p-6 " />
              </div>
              <div className="md:w-1/2 p-6">
                <p className="subText text-base md:text-2xl text-gray-100 mb-8 text-left md:text-left">
                  Hey, my name is Christopher Caressimo. I am a
                  musician-turned-full Stack Developer from Franklin Square, New
                  York. I am a Nassau Community college Alum, graduating with an
                  Associates in Arts and Science.
                  <br />
                  <br />
                  I am really big into video games, anything automotive, Mythology; specifically Norse Mythology, and also music!
                </p>
              </div>
            </div>
            <div className="mb-4 p-6 p-6 text-left md:text-left">
              <p className="subText text-base md:text-2xl text-gray-100">
                You'll often find me playing survival horror and mil sim video games, tinkering and driving my 07 WRX, or writing and goofing around with my band mates on my free time.
                <br />
                <br />
                I have an obsession with trying to figure out how things work and developing new skills, that is how I fell into the tech industry.
              </p>
            </div>
          </div>

          <div className="relative containerBg rounded-t rounded-b px-4 md:px-0 max-w-6xl mx-auto">
            <h1 className="headerText my-4 p-6 text-3xl md:text-5xl font-bold text-center md:text-center">
              How did I get here?
            </h1>
            <div className="object-right">
              <img src={reino} alt="" className="object-contain h-72 w-full" />
            </div>
            <div className="mb-4 p-6 p-6 text-left md:text-left">
              <p className="subText text-base md:text-2xl text-gray-100">
                As I was growing up, I had a few family members and friends that were in the tech field who brought up the idea of going into the tech field. Although the idea of being working in the tech field was cool, at the time I was already going to school for Nuclear Medicine which didn't work out in the long run. My goal then was to get out with a basic degree and focus my time and energy on my musical career.
                <br />
                <br />
                A year or so later, my best friend/band mate was planning on joining a coding bootcamp and was trying to convince me to go through the course with him. I was interested but felt that the time wasn't right for me. Then the Pandemic hit, which left me plenty of time to think and try to learn a new skill which ended up being Coding, and I finally felt like this was the right time to dedicate myself to this field. Which led me to enroll into DigitalCraft's Full stack program!
              </p>
            </div>
          </div>

          <div className="relative containerBg rounded-t rounded-b px-4 md:px-0 max-w-6xl mx-auto">
            <h1 className="headerText my-4 p-6 text-3xl md:text-5xl font-bold text-center md:text-center">
              Why coding?
            </h1>
            <div className="md:flex justify-between">
              <div className="overflow-auto md:w-5/12 flex items-center">
                <img src={glitch} alt="" className="p-6" />
              </div>
              <div className="md:w-1/2 p-6">
                <p className="subText text-base md:text-2xl text-gray-100 mb-8 text-left md:text-left">
                  As I stated, I have friends and family in the industry, and during the pandemic, it led me to really consider my options and future opportunities that would be practical for the long term.
                  <br />
                  <br />
                  During the shut down, I dedicated multiple hours a day learning basic HTML, CSS, and Javascript on my own. I am not the fastest learner by any means, but I stuck through the process until I felt like I was ready to decide if I wanted to advance my skills in coding or if this really wasn't the best option for me. Which it was!
                </p>
              </div>
            </div>
            <div className="mb-4 p-6 p-6 text-left md:text-left">
              <p className="subText leading-normal text-base md:text-2xl text-gray-100">
                During my time in my cohort, I've made strong connections and friendship with my classmates. I've developed my team building and communication skills, and strengthened my self learning skills as well. At the same time, I had the pleasure of building some really fun and impressive projects with my new acquired friends.
                <br />
                <br />
                I am looking forward to expanding my skill set and stepping foot into my first job as a developer!
              </p>
            </div>
          </div>
          <div className="container px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <div className="flex flex-col w-full overflow-y-hidden transparent container rounded-t rounded-b px-4">
              <nav>
                <div className="text-center py-6">
                  <NavLink
                    to="/projects"
                    className="headerText nextButton text-2xl py-2 px-4 border border-gray-200 rounded shadow transition ease-in-out"
                  >
                    Projects
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
