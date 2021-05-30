import React from "react";
import image from "../images/83316363_2727986553927466_8086501138565693440_n.jpg";
import html from "../images/Daco_4562887.png";
import git from "../images/2560px-Git-logo.svg.png";
import node from "../images/590px-Node.js_logo.svg.png";
import sql from "../images/pngwing.com.png";
import express from "../images/express-js-png-5.png";
import sequelize from "../images/sequelize-logo-png-transparent.png";
import react from "../images/1280px-React-icon.svg.png";
import redux from "../images/redux-logo-svg-vector.svg";
import bootstrap from "../images/Bootstrap_logo.svg.png";
import tailwind from "../images/tailwind-css-logo.svg";


export default function Skills() {
  return (
    <main>
      <img
        src={image}
        alt="live at revolution"
        className="fixed object-cover w-full h-full"
      />

      <section className="relative justify-center min-h-screen pt-2 lg:pt-4 px-20">
        <div class="w-full m-0 p-0 bg-cover bg-bottom">
          <div class="container max-w-4xl mx-auto pt-8 md:pt-16 text-center break-normal">
            <p class="text-yellow-600 font-extrabold text-3xl md:text-5xl">
              Skills
            </p>
            <br />
            <p class="text-xl md:text-2xl text-yellow-500">
              These are some of the skill I have acquired during my time as a
              developer.
            </p>
          </div>
        </div>

        <div class="w-full p-6 flex flex-col flex-grow flex-shrink">
          <div class="absolute flex-1 rounded-t rounded-b-none overflow-hidden shadow-lg">
            <div class="w-1/2 md:w-1/6 p-7 flex flex-wrap justify-between">
              <img src={html} alt="" />
              <p class="text-l md:text-2xl text-yellow-500">HTML5/CSS/JS</p>
            </div>
            <div class="w-1/2 md:w-1/6 p-6 flex flex-wrap justify-between">
              <img src={git} alt="" />
              <p class="text-l md:text-2xl text-yellow-500">Github</p>
            </div>
            <div class="w-1/2 md:w-1/6 p-6 flex flex-wrap justify-between">
              <img src={node} alt="" />
              <p class="text-l md:text-2xl text-yellow-500">Node.js</p>
            </div>
            <div class="w-1/2 md:w-1/6 p-7 flex flex-wrap justify-between">
              <img src={sql} alt="" />
              <p class="text-l md:text-2xl text-yellow-500">SQL</p>
            </div>
            <div class="w-1/2 md:w-1/6 p-6 flex flex-wrap justify-between">
              <img src={express} alt="" />
              <p class="text-l md:text-2xl text-yellow-500">Express.js</p>
            </div>
            <div class="w-1/2 md:w-1/6 p-6 flex flex-wrap justify-between">
              <img src={sequelize} alt="" />
              <p class="text-l md:text-2xl text-yellow-500">Sequelize</p>
            </div>
            <div class="w-1/2 md:w-1/6 p-6 flex flex-wrap justify-between">
              <img src={react} alt="" />
              <p class="text-l md:text-2xl text-yellow-500">React</p>
            </div>
            <div class="w-1/2 md:w-1/6 p-6 flex flex-wrap justify-between">
              <img src={redux} alt="" />
              <p class="text-l md:text-2xl text-yellow-500">Redux</p>
            </div>
            <div class="w-1/2 md:w-1/6 p-6 flex flex-wrap justify-between">
              <img src={bootstrap} alt="" />
              <p class="text-l md:text-2xl text-yellow-500">Bootstrap</p>
            </div>
            <div class="w-1/2 md:w-1/6 p-6 flex flex-wrap justify-between">
              <img src={tailwind} alt="" />
              <p class="text-l md:text-2xl text-yellow-500">Tailwind</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
