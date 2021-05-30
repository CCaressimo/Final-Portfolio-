import React from "react";
import image from "../images/83316363_2727986553927466_8086501138565693440_n.jpg";
import html from "../images/440-4409582_rather-th-html-css-js-icon-png.png";
import git from "../images/kissclipart-computer-icons-github-scalable-vector-graphics-02cf61b9c12df0dc.png";
import node from "../images/kisspng-node-js-javascript-express-js-mongodb-github-node-js-5b224f65cc4628.8571491215289752058367.jpg";
import sql from "../images/243-2432711_azure-sql-database-icon.png";
import express from "../images/136-1363736_express-js-icon-png-transparent-png.png";
import sequelize from "../images/kisspng-postgresql-object-relational-database-oracle-datab-portfolio-whitebolt-whitebolt-5b65f8213f29d6.5042016815334093132587.jpg";
import react from "../images/react-middle.png";
import redux from "../images/kisspng-redux-react-javascript-vue-js-single-page-applicat-5af5cde3d3a5e8.2671715915260584678669.jpg";
import bootstrap from "../images/217-2172365_bootstrap-featured-image-bootstrap-3-logo-png-clipart.png";
import tailwind from "../images/tailwind-css-logo.svg";


export default function Skills() {
  return (
    <main>
      <img
        src={image}
        alt="live at revolution"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative justify-center min-h-screen pt-12 lg:pt-64 px-20">
        <div class="w-full  p-6 flex flex-col flex-grow flex-shrink">
          <div class="flex-1 rounded-t rounded-b-none overflow-hidden shadow-lg">
            <div class="flex flex-wrap justify-between pt-36 -mx-6">
              <img src={html} alt="" />
            </div>
            <div class="flex flex-wrap justify-between pt-36 -mx-6">
              <img src={git} alt="" />
            </div>
            <div class="flex flex-wrap justify-between pt-36 -mx-6">
              <img src={node} alt="" />
            </div>
            <div class="flex flex-wrap justify-between pt-36 -mx-6">
              <img src={sql} alt="" />
            </div>
            <div class="flex flex-wrap justify-between pt-36 -mx-6">
              <img src={express} alt="" />
            </div>
            <div class="flex flex-wrap justify-between pt-36 -mx-6">
              <img src={sequelize} alt="" />
            </div>
            <div class="flex flex-wrap justify-between pt-36 -mx-6">
              <img src={react} alt="" />
            </div>
            <div class="flex flex-wrap justify-between pt-36 -mx-6">
              <img src={redux} alt="" />
            </div>
            <div class="flex flex-wrap justify-between pt-36 -mx-6">
              <img src={bootstrap} alt="" />
            </div>
            <div class="flex flex-wrap justify-between pt-36 -mx-6">
              <img src={tailwind} alt="" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
