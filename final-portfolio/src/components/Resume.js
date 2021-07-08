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
              Full Stack Software Developer
            </p>
            <p className="subText p-6 text-xs md:text-xl text-center">
              Creative software engineer with the ability to pick up new
              languages and technologies as needed. Prior to being a software
              engineer, I worked as a School bus driver for First Student and
              also a drum instructor at the School of Rock.
            </p>
            <div>
              <h3 className="headerText p-6 text-md md:text-3xl font-bold text-left ">
                Software Development Skills:
              </h3>
              <ul className="px-6 md:py-6 py-2">
                <li className="subText text-xs md:text-xl text-left">
                  - HTML, CSS, JavaScript, Github, Node.js, Express.js, SQL,
                  Sequelize, React, Redux, Bootstrap, and Tailwindcss.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="headerText p-6 text-md md:text-3xl font-bold text-left ">
                Education:
              </h3>
              <div className="grid grid-cols-4 gap-4">
                <p className="subText text-s md:text-2xl text-left px-6 col-span-3 h-4">
                  DigitalCrafts | Certificate in Software Engineering | Atlanta,
                  GA
                </p>
                <p className="subText text-s md:text-2xl text-left px-6 text-right">
                  January 2021 – July 2021
                </p>
              </div>
              <ul className="px-6 md:py-6 py-2 md:pb-12 pb-4">
                <li className="subText text-xs md:text-xl text-left">
                  - Software engineering training program covering full-stack
                  development including, but not limited to JavaScript, Python,
                  including an emphasis on cutting-edge frameworks like
                  React/Redux and server-side technologies including Node.js,
                  Express, and PostgreSQL.
                </li>
              </ul>
              <div className="grid grid-cols-4 gap-4">
                <p className="subText text-s md:text-2xl text-left px-6 col-span-3 h-4">
                  Nassau Community College | Associates in Arts & Sciences |
                  Garden City, NY
                </p>
                <p className="subText text-s md:text-2xl text-left px-6 text-right">
                  September 2014 – May 2019
                </p>
              </div>
            </div>
            <div>
              <h3 className="headerText p-6 text-md md:text-3xl font-bold text-left ">
                Software Development Portfolio:
              </h3>
              <div className="grid grid-cols-4 gap-4">
                <a
                  href="https://github.com/CCaressimo/Tetris-app"
                  target="_blank"
                  className="resText underline text-s md:text-2xl text-left px-6 col-span-3 h-4"
                >
                  Dev Arcade
                </a>
                <p className="subText text-s md:text-2xl text-left px-6 text-right">
                  July 2021
                </p>
              </div>
              <ul className="px-6 md:py-6 py-2 md:pb-12 pb-4">
                <li className="subText pb-2 text-xs md:text-xl text-left">
                  - A DigitalCraft Flex Jan 2021 Student/Teacher collaboration,
                  where teachers and students built a fully functional arcade
                  with working games.
                </li>
                <li className="subText pb-2 text-xs md:text-xl text-left">
                  - Scrum master in a team of 3, tasked with building Tetris. We
                  utilized React and Redux to build a working game board that
                  stores the users movement, piece placement, and score.
                </li>
                <li className="subText text-xs md:text-xl text-left">
                  - Built with React, Redux, and vanilla CSS.
                </li>
              </ul>
              <div className="grid grid-cols-4 gap-4">
                <a
                  href="https://github.com/CCaressimo/Final-Portfolio-"
                  target="_blank"
                  className="resText underline text-s md:text-2xl text-left px-6 col-span-3 h-4"
                >
                  Portfolio
                </a>
                <p className="subText text-s md:text-2xl text-left px-6 text-right">
                  June 2021
                </p>
              </div>
              <ul className="px-6 md:py-6 py-2 md:pb-12 pb-4">
                <li className="subText pb-2 text-xs md:text-xl text-left">
                  - Solo project for graduation to showcase myself, my projects,
                  and experience during my time at DigitalCrafts.
                </li>
                <li className="subText pb-2 text-xs md:text-xl text-left">
                  - Built from scratch using React, Router-dom, Tailwind CSS,
                  and basic animations with Framer-motion.
                </li>
                <li className="subText text-xs md:text-xl text-left">
                  - Learned React, Router-dom and Tailwind CSS through
                  Self-study to build this project using technologies before
                  course scope.
                </li>
              </ul>
              <div className="grid grid-cols-4 gap-4">
                <a
                  href="https://github.com/CCaressimo/Mixafy"
                  target="_blank"
                  className="resText underline text-s md:text-2xl text-left px-6 col-span-3 h-4"
                >
                  Mixafy
                </a>
                <p className="subText text-s md:text-2xl text-left px-6 text-right">
                  May 2021
                </p>
              </div>
              <ul className="px-6 md:py-6 py-2">
                <li className="subText pb-2 text-xs md:text-xl text-left">
                  - Lead developer in a team of 2, creating an application that
                  allows the user to generate random playlists between selected
                  genres or one specific genre from a database of handpicked
                  songs from Spotify.
                </li>
                <li className="subText pb-2 text-xs md:text-xl text-left">
                  - Responsibilities include setting up a database using
                  Beekeeper and PostgreSQL, linking back-end with front-end
                  utilizing Express and Node.js, and creating the UI with
                  Bootstrap and vanilla CSS.
                </li>
                <li className="subText text-xs md:text-xl text-left">
                  - Built with HTML, CSS/BootStrap, Javascript, Express,
                  Node.js, and PostgreSQL.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="headerText p-6 text-md md:text-3xl font-bold text-left ">
                Professional Work Experience:
              </h3>
              <div className="grid grid-cols-4 gap-4">
                <p className="subText text-s md:text-2xl text-left px-6 col-span-3 h-4">
                  First Student | School Bus Driver | Freeport, NY
                </p>
                <p className="subText text-s md:text-2xl text-left px-6 text-right">
                  August 2019 – Present
                </p>
              </div>
              <ul className="px-6 md:py-6 py-2">
                <li className="subText text-xs md:text-xl text-left">
                  - Drove for grades k-12th and BOCES in Nassau and Suffolk
                  county.
                </li>
                <li className="subText text-xs md:text-xl text-left">
                  - Developed better time management and communication skills.
                </li>
              </ul>
              <div className="grid grid-cols-4 gap-4">
                <p className="subText text-s md:text-2xl text-left px-6 col-span-3 h-4">
                  School Of Rock | Drum Instructor | Rockville Center, NY
                </p>
                <p className="subText text-s md:text-2xl text-left px-6 text-right">
                  August 2019 – March 2020
                </p>
              </div>
              <ul className="px-6 md:py-6 py-2">
                <li className="subText text-xs md:text-xl text-left">
                  - Taught kids ages 6-18 and kids that special needs drums,
                  sheet reading, and assisted in live show production.
                </li>
                <li className="subText text-xs md:text-xl text-left">
                  - Developed teaching, team building, and leadership skills.
                </li>
              </ul>
              <div className="grid grid-cols-4 gap-4">
                <p className="subText text-s md:text-2xl text-left px-6 col-span-3 h-4">
                  New York Community Bank | Financial Service Assistant |
                  Hicksville, NY
                </p>
                <p className="subText text-s md:text-2xl text-left px-6 text-right">
                  August 2016 – August 2019
                </p>
              </div>
              <ul className="px-6 md:py-6 py-2">
                <li className="subText text-xs md:text-xl text-left">
                  - Conducted traditional bank transactions, wires, foreign
                  currency transactions, and set up customer accounts.
                </li>
                <li className="subText text-xs md:text-xl text-left">
                  - Developed communication, team building, customer service,
                  sales, and money management skills
                </li>
              </ul>
            </div>
          </div>

          <div class="px-6 mx-auto items-center">
            <div class="w-full overflow-y-hidden rounded-t rounded-b px-4">
              <div className="text-center py-6">
                <button class="headerText nextButton border border-gray-200 py-2 px-4 shadow rounded inline-flex items-center">
                  <svg
                    class="fill-current w-4 h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                  </svg>
                  <a
                    href="https://docs.google.com/document/d/1Mzq9SeRTY39ed-Ze_G_Oqxrq4E99GVdJ_hZeBq0SXVk/edit?usp=sharing"
                    target="_blank"
                  >
                    Download
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div class="px-6 mx-auto items-center">
            <div class="w-full overflow-y-hidden rounded-t rounded-b px-4">
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
