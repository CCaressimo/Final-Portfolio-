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

      <section className="relative justify-center min-h-screen pt-6 lg:pt-24 px-20">
        <div class="w-full p-6 flex flex-col flex-grow flex-shrink">
          <div class="absolute flex-1 rounded-t rounded-b-none overflow-hidden shadow-lg">
            <div class="w-full md:w-1/6 p-6 flex flex-wrap justify-between">
              <img src={html} alt="" />
              <p>HTML5/CSS/JS</p>
            </div>
            <div class="w-full md:w-1/6 p-6 flex flex-wrap justify-between">
              <img src={git} alt="" />
              <p>Github</p>
            </div>
            <div class="w-full md:w-1/6 p-6 flex flex-wrap justify-between">
              <img src={node} alt="" />
              <p>Node.js</p>
            </div>
            <div class="w-full md:w-1/6 p-6 flex flex-wrap justify-between">
              <img src={sql} alt="" />
              <p>SQL</p>
            </div>
            <div class="w-full md:w-1/6 p-6 flex flex-wrap justify-between">
              <img src={express} alt="" />
              <p>Express.js</p>
            </div>
            <div class="w-full md:w-1/6 p-6 flex flex-wrap justify-between">
              <img src={sequelize} alt="" />
              <p>Sequelize</p>
            </div>
            <div class="w-full md:w-1/6 p-6 flex flex-wrap justify-between">
              <img src={react} alt="" />
              <p>React</p>
            </div>
            <div class="w-full md:w-1/6 p-6 flex flex-wrap justify-between">
              <img src={redux} alt="" />
              <p>Redux</p>
            </div>
            <div class="w-full md:w-1/6 p-6 flex flex-wrap justify-between">
              <img src={bootstrap} alt="" />
              <p>Bootstrap</p>
            </div>
            <div class="w-full md:w-1/6 p-6 flex flex-wrap justify-between">
              <img src={tailwind} alt="" />
              <p>Tailwind</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
