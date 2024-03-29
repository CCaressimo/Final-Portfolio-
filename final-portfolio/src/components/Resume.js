import React from 'react';
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import image from "../images/83316363_2727986553927466_8086501138565693440_n.jpg";

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0.7 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.4 }}>
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
                  - DevOps (Kubernetes, Docker, AWS, Git, Jenkins), Javascript
                  (NodeJS ReactJS, jQuery) SQL (MySQL, PostgreSQL, NoSQL)
                  HTML5/CSS (Bootstrap, TailwindCSS), Python, Java
                </li>
              </ul>
            </div>
            <div>
              <h3 className="headerText p-6 text-md md:text-3xl font-bold text-left ">
                Professional Work Experience:
              </h3>
              <div className="grid grid-cols-4 gap-4">
                <p className="subText text-s md:text-2xl text-left px-6 col-span-3 h-4">
                  JP Morgan Chase & Co. | Software Engineer | New York, NY
                </p>
                <p className="subText text-s md:text-2xl text-left px-6 text-right">
                  October 2021 – Present
                </p>
              </div>
              <ul className="px-6 md:py-6 py-2">
                <li className="subText text-xs md:text-xl text-left">
                  - Maintained and migrated our Digital Assistant app to new
                  Data Centers.
                </li>
                <li className="subText text-xs md:text-xl text-left">
                  - Orchestrated monthly releases, and post release testing and
                  monitoring.
                </li>
                <li className="subText text-xs md:text-xl text-left">
                  - Aided in DevOps related roles such as config changes,
                  updating and migrating to password-less credentials, and
                  certificate renewals.
                </li>
                <li className="subText text-xs md:text-xl text-left">
                  - Collaborated with multiple teams to migrate to using AWS
                  OMNI S3
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
                  href="https://github.com/CCaressimo/cap_stone"
                  target="_blank"
                  className="resText underline text-s md:text-2xl text-left px-6 col-span-3 h-4">
                  Retro FlixNFares
                </a>
                <p className="subText text-s md:text-2xl text-left px-6 text-right">
                  July 2021
                </p>
              </div>
              <ul className="px-6 md:py-6 py-2 md:pb-12 pb-4">
                <li className="subText pb-2 text-xs md:text-xl text-left">
                  - Scrum master in a team of 3, creating an application that
                  allows users to filter through movies and TV series from the
                  70’s to 00’s by selecting what streaming source they are using
                  and by genre. In addition, there will be some selected “Fares”
                  from that time period that fit well by the genre they have
                  selected!
                </li>
                <li className="subText pb-2 text-xs md:text-xl text-left">
                  - Responsibilities include managing the team’s trello board,
                  developing and designing the UI and theme of the app, setting
                  up the front-end routes, and setting up the fetch calls to
                  pull data from our database.
                </li>
                <li className="subText text-xs md:text-xl text-left">
                  - Built with React, PostgreSQL, Express, JavaScript, Node.js,
                  and TailwindCSS.
                </li>
              </ul>
              <div className="grid grid-cols-4 gap-4">
                <a
                  href="https://github.com/CCaressimo/Tetris-app"
                  target="_blank"
                  className="resText underline text-s md:text-2xl text-left px-6 col-span-3 h-4">
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
                  href="https://github.com/CCaressimo/Mixafy"
                  target="_blank"
                  className="resText underline text-s md:text-2xl text-left px-6 col-span-3 h-4">
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
          </div>

          <div class="px-6 mx-auto items-center">
            <div class="w-full overflow-y-hidden rounded-t rounded-b px-4">
              <div className="text-center py-6">
                <button class="headerText nextButton border border-gray-200 py-2 px-4 shadow rounded inline-flex items-center">
                  <svg
                    class="fill-current w-4 h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20">
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                  </svg>
                  <a
                    href="https://docs.google.com/document/d/1Mzq9SeRTY39ed-Ze_G_Oqxrq4E99GVdJ_hZeBq0SXVk/edit?usp=sharing"
                    target="_blank">
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
                    className="headerText nextButton text-2xl py-2 px-4 border border-gray-200 rounded shadow">
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
