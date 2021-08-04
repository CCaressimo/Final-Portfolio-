import "./css/font.css";
import "./css/background.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import image from "../images/83316363_2727986553927466_8086501138565693440_n.jpg";
import concentration from "../images/concentration.gif";
import tictactoe from "../images/tictactoe.gif"
import kanye from "../images/kanyememe.gif"
import mixafy from "../images/mixafy.gif";
import tetris from "../images/tetris.gif"
import retro from "../images/retro.gif"

export default function Projects() {
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
          className="photo fixed object-cover w-full h-full"
        />

        <section className="relative leading-normal tracking-normal pt-6">
          <div className="container containerBg border border-gray-400 rounded-t rounded-b px-4 md:px-0 max-w-6xl mx-auto">
            <div className="w-full m-0 p-6 bg-cover bg-bottom">
              <div className="container max-w-4xl mx-auto text-center break-normal">
                <p className="headerText font-bold shadow-inner text-3xl md:text-5xl">
                  Completed Projects
                </p>
                <br />
                <p className="subText text-xl md:text-2xl">
                  Feel free to checkout some of my projects that I have built
                  during my time in DigitalCrafts
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-between pt-8">
              <div className="w-full p-6 flex flex-col flex-grow flex-shrink">
                <div className="flex-1 cardBg border-2 border-black rounded-t rounded-b overflow-hidden shadow-lg">
                  <a className="flex flex-wrap no-underline hover:no-underline">
                    <a
                      href="https://www.youtube.com/watch?v=zqQFv35olns&list=UUG0zw2U922TTxYrYslzQr0w&index=1"
                      target="_blank"
                      className="h-64 w-full rounded-t pb-6"
                    >
                      <img src={retro} className="h-64 w-full rounded-t pb-6" />
                    </a>
                    <h3 className="subText text-xs text-center px-6 pb-6">
                      *Click the image to watch our presentation!*
                    </h3>
                    <div className="headerText text-center w-full font-bold shadow-inner text-3xl px-6 pb-6">
                      Retro Flix-N-Fares
                    </div>
                    <p className="subText text-xl text-base px-6 mb-5">
                      This is the first iteration of an idea that was born
                      during quarantine. Our current
                      app takes the choice paralysis and time from searching for
                      your favorite nostalgic favorites across streaming
                      services. The app in its current iteration allows a user
                      to create an account, select current streaming services,
                      genre,and the type of feature (movie or TV series).Retro
                      Flix-n-Fares returns 5 selections based on the criteria
                      along with suggested food and drink to enjoy with your
                      feature.
                      <br />
                      Retro Flix-n-Fares was built with React, PostgreSQL,
                      Express, JavaScript, Node.js, and TailwindCSS.
                    </p>
                    <div className="w-full flex justify-center pb-4 content-center">
                      <a
                        href="https://github.com/CCaressimo/cap_stone"
                        target="_blank"
                        className="pr-4"
                      >
                        <button className="headerText navButton py-2 px-4 border border-gray-200 rounded shadow">
                          GitHub
                        </button>
                      </a>
                      <a
                        href="https://retro-flixnfares-capstone.herokuapp.com"
                        target="_blank"
                      >
                        <button className="headerText navButton py-2 px-4 border border-gray-200 rounded shadow">
                          Live App
                        </button>
                      </a>
                    </div>
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
                <div className="flex-1 cardBg border-2 border-black rounded-t rounded-b overflow-hidden shadow-lg">
                  <a className="flex flex-wrap no-underline hover:no-underline">
                    <img src={tetris} className="h-64 w-full rounded-t pb-6" />
                    <div className="headerText text-center w-full font-bold shadow-inner text-3xl px-6 pb-6">
                      Dev Arcade
                    </div>
                    <p className="subText text-xl text-base px-6 mb-5">
                      DigitalCraft Flex Jan2021 Student/Teacher collaboration,
                      where the Teachers built the home page and implemented a
                      backend, and Students build games and linked to the
                      backend (**not a functioning feature as of yet**)
                      <br />
                      My team was tasked with developing the game Tetris which
                      utilized React and Redux to create a functioning game
                      board, and stores data the keeps track of the score and
                      pieces that have been placed on the board.
                    </p>
                    <div className="w-full flex justify-center pb-4 content-center">
                      <a
                        href="https://github.com/CCaressimo/Tetris-app"
                        target="_blank"
                        className="pr-4"
                      >
                        <button className="headerText navButton py-2 px-4 border border-gray-200 rounded shadow">
                          GitHub
                        </button>
                      </a>
                      <a
                        href="https://dev-arcade.herokuapp.com"
                        target="_blank"
                      >
                        <button className="headerText navButton py-2 px-4 border border-gray-200 rounded shadow">
                          Live App
                        </button>
                      </a>
                    </div>
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
                <div className="flex-1 cardBg border-2 border-black rounded-t rounded-b overflow-hidden shadow-lg">
                  <a className="flex flex-wrap no-underline hover:no-underline">
                    <img src={mixafy} className="h-64 w-full rounded-t pb-6" />
                    <div className="headerText text-center w-full font-bold shadow-inner text-3xl px-6 pb-6">
                      Mixafy
                    </div>
                    <p className="subText text-xl text-base px-6 mb-5">
                      Mixafy is a backend driven application that utilizes a
                      hand built database that stores songs with the proper
                      information and links from Spotify. This app allows the
                      user to generate random playlists between selected genres
                      or one specific genre from a database of handpicked songs
                      from Spotify. By using SQL commands, we are able to fetch
                      embed links from the Database to populate the front end.{" "}
                      <br /> Mixafy utilizes Express, Sequelize, and Bootstrap.
                    </p>
                    <div className="w-full flex justify-center pb-4 content-center">
                      <a
                        href="https://github.com/CCaressimo/Mixafy"
                        target="_blank"
                        className="pr-4"
                      >
                        <button className="headerText navButton py-2 px-4 border border-gray-200 rounded shadow">
                          GitHub
                        </button>
                      </a>
                      <a href="https://mixafy.herokuapp.com" target="_blank">
                        <button className="headerText navButton py-2 px-4 border border-gray-200 rounded shadow">
                          Live App
                        </button>
                      </a>
                    </div>
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                <div className="flex-1 cardBg border-2 border-black rounded-t rounded-b overflow-hidden shadow-lg">
                  <a className="flex flex-wrap no-underline hover:no-underline">
                    <img src={kanye} className="h-64 w-full rounded-t pb-6" />
                    <div className="headerText text-center w-full font-bold shadow-inner text-3xl px-6 pb-6">
                      Advice from Kanye
                    </div>
                    <p className="subText text-xl text-base px-6 pb-6 ">
                      Advice from Kanye is a fun little app that utilizes the
                      Kanye Quotes api, and Flickr api to generate random memes
                      of Kanye West. The app uses fetch requests to pull
                      randomized quotes and also shuffle through images to
                      populate the front-end. The UI was built using Tailwind
                      CSS.
                    </p>
                    <div className="w-full flex justify-center pb-4 content-center">
                      <a
                        href="https://github.com/CCaressimo/Front-End"
                        target="_blank"
                        className="pr-4"
                      >
                        <button className="headerText navButton py-2 px-4 border border-gray-200 rounded shadow">
                          GitHub
                        </button>
                      </a>
                      <a
                        href="https://ccaressimo.github.io/Kanye-Meme/"
                        target="_blank"
                      >
                        <button className="headerText navButton py-2 px-4 border border-gray-200 rounded shadow">
                          Live App
                        </button>
                      </a>
                    </div>
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                <div className="flex-1 cardBg border-2 border-black rounded-t rounded-b overflow-hidden shadow-lg">
                  <a className="max-w-sm rounded-t rounded-b overflow-hidden shadow-lg">
                    <img
                      src={tictactoe}
                      className="h-64 w-full rounded-t pb-6"
                    />
                    <div className="headerText text-center w-full font-bold shadow-inner text-3xl px-6 pb-6">
                      Tik-Tac-Toe
                    </div>
                    <p className="subText text-xl text-base px-6 pb-16 mb-11">
                      A basic rendition of Tik-Tac-Toe built with vanilla
                      Javascript, HTML5, and CSS. We used dom manipulation to
                      switch between players, to fill the board with X's and
                      O's, and also to determine a winner, or a tie.
                    </p>
                    <div className="w-full flex justify-center pb-4 content-center">
                      <a
                        href="https://github.com/CCaressimo/Tic-Tac-Toe"
                        target="_blank"
                        className="pr-4"
                      >
                        <button className="headerText navButton py-2 px-4 border border-gray-200 rounded shadow">
                          GitHub
                        </button>
                      </a>
                      <a href="https://minttactoe.netlify.app" target="_blank">
                        <button className="headerText navButton py-2 px-4 border border-gray-200 rounded shadow">
                          Live App
                        </button>
                      </a>
                    </div>
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                <div className="flex-1 cardBg border-2 border-black rounded-t rounded-b overflow-hidden shadow-lg">
                  <a className="max-w-sm rounded-t rounded-b overflow-hidden shadow-lg">
                    <img
                      src={concentration}
                      className="h-64 w-full rounded-t pb-6"
                    />
                    <div className="headerText text-center w-full font-bold shadow-inner text-3xl px-6 pb-6">
                      Concentration
                    </div>
                    <p className="subText text-xl text-base px-6 pb-24 mb-16">
                      A very simple rendition of Concentration built with
                      vanilla Javascript, HTML5, and CSS. We used Dom
                      manipulation to randomize the array of numbers, and to
                      remove pairs.
                    </p>
                    <div className="w-full flex justify-center pb-4 content-center">
                      <a
                        href="https://github.com/CCaressimo/Concentration-Game"
                        target="_blank"
                        className="pr-4"
                      >
                        <button className="headerText navButton py-2 px-4 border border-gray-200 rounded shadow">
                          GitHub
                        </button>
                      </a>
                      <a
                        href="https://geoconcentration.netlify.app"
                        target="_blank"
                      >
                        <button className="headerText navButton py-2 px-4 border border-gray-200 rounded shadow">
                          Live App
                        </button>
                      </a>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* 
          <br />

          <div className="container containerBg border border-gray-400 rounded-t rounded-b px-4 md:px-0 max-w-6xl mx-auto">
            <div className="w-full m-0 p-6 bg-cover bg-bottom">
              <div className="container max-w-4xl mx-auto text-center break-normal">
                <p className="headerText font-bold shadow-inner text-3xl md:text-5xl">
                    Current Projects
                </p>
                <br />
                <p className="subText text-xl md:text-2xl">
                    Here are some of the projects that I am currently working on
                    with my Band mates
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-between pt-8">         
              <div className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
                <div className="flex-1 cardBg border-2 border-black rounded-t rounded-b overflow-hidden shadow-lg">
                  <a className="flex flex-wrap no-underline hover:no-underline">
                    <img src="#" className="h-64 w-full rounded-t pb-6" />
                    <div className="headerText text-center w-full font-bold shadow-inner text-3xl px-6 pb-6">
                      [Null] 
                    </div>
                    <p className="subText text-xl text-base px-6 mb-5">
                      Band site
                    </p>
                    <div className="w-full flex justify-center pb-4 content-center">
                      <a
                        href="https://github.com/CCaressimo"
                        target="_blank"
                        className="pr-4"
                      >
                        <button className="headerText navButton py-2 px-4 border border-gray-200 rounded shadow">
                          GitHub
                        </button>
                      </a>
                      <a href="#" target="_blank">
                        <button className="headerText navButton py-2 px-4 border border-gray-200 rounded shadow">
                          Showcase
                        </button>
                      </a>
                    </div>
                  </a>
                </div>
              </div>
            
              <div className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
                <div className="flex-1 cardBg border-2 border-black rounded-t rounded-b overflow-hidden shadow-lg">
                  <a className="flex flex-wrap no-underline hover:no-underline">
                    <img src="#" className="h-64 w-full rounded-t pb-6" />
                    <div className="headerText text-center w-full font-bold shadow-inner text-3xl px-6 pb-6">
                      TRASHPLXNET
                    </div>
                    <p className="subText text-xl text-base px-6 mb-5">
                      Clothing site
                    </p>
                    <div className="w-full flex justify-center pb-4 content-center">
                      <a
                        href="https://github.com/CCaressimo"
                        target="_blank"
                        className="pr-4"
                      >
                        <button className="headerText navButton py-2 px-4 border border-gray-200 rounded shadow">
                          GitHub
                        </button>
                      </a>
                      <a href="#" target="_blank">
                        <button className="headerText navButton py-2 px-4 border border-gray-200 rounded shadow">
                          Live App
                        </button>
                      </a>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>    */}

          <div className="px-6 mx-auto items-center">
            <div className="w-full overflow-y-hidden rounded-t rounded-b px-4">
              <nav>
                <div className="text-center py-6">
                  <NavLink
                    to="/skills"
                    className="headerText nextButton text-2xl py-2 px-4 border border-gray-200 rounded shadow"
                  >
                    Skills
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
