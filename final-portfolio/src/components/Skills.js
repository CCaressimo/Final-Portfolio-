import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import image from "../images/83316363_2727986553927466_8086501138565693440_n.jpg";
import html from "../images/Daco_4562887.png";
import git from "../images/github.png";
import node from "../images/node.png";
import jQuery from "../images/jquery.png"
import sql from "../images/pngwing.com.png";
import postgres from "../images/postgres.png"
import express from "../images/express-js-png-5.png";
import sequelize from "../images/sequelize-logo-png-transparent.png";
import react from "../images/react.png";
import redux from "../images/redux-logo-svg-vector.svg";
import bootstrap from "../images/Bootstrap_logo.svg.png";
import tailwind from "../images/tailwind-css-logo.svg";


export default function Skills() {
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

        <section className="relative justify-center min-h-screen pt-6">
          <div className="w-full px-4 md:px-0 max-w-6xl mx-auto flex flex-col flex-grow flex-shrink">
            <div className="container containerBg rounded-t rounded-b px-auto md:px-0 max-w-6xl mx-auto">
              <div className="w-full m-0 p-0 bg-cover bg-bottom">
                <div className="container max-w-4xl mx-auto p-6 text-center break-normal">
                  <p className="headerText font-extrabold text-3xl md:text-5xl">
                    Skills
                  </p>
                  <br />
                  <p className="subText text-xl md:text-2xl">
                    These are some of the skill I have acquired during my time
                    as a developer.
                  </p>
                </div>
              </div>

              <div className="w-1/3 md:w-1/6 p-6 inline-block md:m-24">
                <img src={html} alt="" />
                <p className="text-center text-l md:text-2xl subText">
                  HTML5/CSS/JS
                </p>
              </div>
              <div className="w-1/3 md:w-1/6 p-6 inline-block md:m-24">
                <img src={git} alt="" />
                <p className="text-center text-l md:text-2xl subText">Github</p>
              </div>
              <div className="w-1/3 md:w-1/6 p-6 inline-block md:m-24">
                <img src={node} alt="" />
                <p className="text-center text-l md:text-2xl subText">
                  Node.js
                </p>
              </div>
              <div className="w-1/3 md:w-1/6 p-6 inline-block md:m-24">
                <img src={jQuery} alt="" />
                <p className="text-center text-l md:text-2xl subText">jQuery</p>
              </div>
              <div className="w-1/3 md:w-1/6 p-6 inline-block md:m-24">
                <img src={express} alt="" />
                <p className="text-center text-l md:text-2xl subText">
                  Express.js
                </p>
              </div>
              <div className="w-1/3 md:w-1/6 p-6 inline-block md:m-24">
                <img src={sql} alt="" />
                <p className="text-center text-l md:text-2xl subText">SQL</p>
              </div>
              <div className="w-1/3 md:w-1/6 p-6 inline-block md:m-24">
                <img src={sequelize} alt="" />
                <p className="text-center text-l md:text-2xl subText">
                  Sequelize
                </p>
              </div>
              <div className="w-1/3 md:w-1/6 p-6 inline-block md:m-24">
                <img src={postgres} alt="" />
                <p className="text-center text-l md:text-2xl subText">
                  Postgres
                </p>
              </div>
              <div className="w-1/3 md:w-1/6 p-6 inline-block md:m-24">
                <img src={react} alt="" />
                <p className="text-center text-l md:text-2xl subText">React</p>
              </div>
              <div className="w-1/3 md:w-1/6 p-6 inline-block md:m-24">
                <img src={redux} alt="" />
                <p className="text-center text-l md:text-2xl subText">Redux</p>
              </div>
              <div className="w-1/3 md:w-1/6 p-6 inline-block md:m-24">
                <img src={bootstrap} alt="" />
                <p className="text-center text-l md:text-2xl subText">
                  Bootstrap
                </p>
              </div>
              <div className="w-1/3 md:w-1/6 p-6 inline-block md:m-24">
                <img src={tailwind} alt="" />
                <p className="text-center text-l md:text-2xl subText">
                  Tailwind
                </p>
              </div>
            </div>
          </div>
          <div className="px-6 mx-auto items-center">
            <div className="w-full overflow-y-hidden rounded-t rounded-b px-4">
              <nav>
                <div className="text-center py-6">
                  <NavLink
                    to="/resume"
                    className="headerText nextButton text-2xl py-2 px-4 border border-gray-200 rounded shadow"
                  >
                    Resume
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
