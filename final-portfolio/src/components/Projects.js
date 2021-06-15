import "./css/font.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import image from "../images/83316363_2727986553927466_8086501138565693440_n.jpg";
import concentration from "../images/concentration.PNG";
import mixafy from "../images/mixafy.PNG";

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
          className="fixed object-cover w-full h-full"
        />

        <section className="relative leading-normal tracking-normal pt-6">
          <div className="container bg-opacity-70 bg-gray-700 rounded-t rounded-b px-4 md:px-0 max-w-6xl mx-auto">
            <div className="w-full m-0 p-6 bg-cover bg-bottom">
              <div className="container max-w-4xl mx-auto text-center break-normal">
                <p className="headerText font-extrabold text-3xl md:text-5xl">
                  Projects
                </p>
                <br />
                <p className="subText text-xl md:text-2xl text-yellow-500">
                  Feel free to checkout some of my projects that I have built
                  during my time in DigitalCrafts
                </p>
              </div>
            </div>

            <div className="flex h-full bg-white overflow-hidden shadow-lg"></div>

            <div className="flex flex-wrap justify-between pt-8">
              <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                <div className="flex-1 bg-gray-600 rounded-t rounded-b overflow-hidden shadow-lg">
                  <a
                    href="#"
                    className="max-w-sm rounded-t rounded-b overflow-hidden shadow-lg"
                  >
                    <img
                      src={concentration}
                      className="h-64 w-full rounded-t pb-6"
                    />
                    <div className="headerText text-center w-full font-bold text-3xl px-6 pb-6">
                      Concentration
                    </div>
                    <p className="subText text-yellow-500 text-xl text-base px-6 mb-5">
                      A very simple rendition of Concentration built with
                      vanilla Javascript, HTML5, and CSS.
                      <br />
                      <br />
                      <br />
                    </p>
                    <div className="w-full flex justify-center pb-4 content-center">
                      <a
                        href="https://github.com/CCaressimo/Concentration-Game"
                        target="_blank"
                        className="pr-4"
                      >
                        <button className="headerText bg-opacity-70 bg-gray-700 hover:bg-yellow-600 text-gray-800 py-2 px-4 border border-gray-200 rounded shadow transition ease-in-out">
                          GitHub
                        </button>
                      </a>
                      <a
                        href="https://ccaressimo.github.io/Concentration-Game/"
                        target="_blank"
                      >
                        <button className="headerText bg-opacity-70 bg-gray-700 hover:bg-yellow-600 text-gray-800 py-2 px-4 border border-gray-200 rounded shadow transition ease-in-out">
                          Live App
                        </button>
                      </a>
                    </div>
                  </a>
                </div>
              </div>

              <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                <div className="flex-1 bg-gray-600 rounded-t rounded-b overflow-hidden shadow-lg">
                  <a
                    href="#"
                    className="flex flex-wrap no-underline hover:no-underline"
                  >
                    <img src="#" className="h-64 w-full rounded-t pb-6" />
                    <div className="headerText text-center w-full font-bold text-3xl px-6 pb-6">
                      Kanye meme
                    </div>
                    <p className="subText text-yellow-500 text-xl text-base px-6 mb-5">
                      An App that utilizes the Kanye Quotes api, and Flickr api
                      to generate random meme of Kanye West. The UI was also
                      built with Bootstrap.
                    </p>
                    <div className="w-full flex justify-center pb-4 content-center">
                      <a
                        href="https://github.com/CCaressimo/Front-End"
                        target="_blank"
                        className="pr-4"
                      >
                        <button className="headerText bg-opacity-70 bg-gray-700 hover:bg-yellow-600 text-gray-800 py-2 px-4 border border-gray-200 rounded shadow transition ease-in-out">
                          GitHub
                        </button>
                      </a>
                      <a
                        href="https://ccaressimo.github.io/Front-End/"
                        target="_blank"
                      >
                        <button className="headerText bg-opacity-70 bg-gray-700 hover:bg-yellow-600 text-gray-800 py-2 px-4 border border-gray-200 rounded shadow transition ease-in-out">
                          Live App
                        </button>
                      </a>
                    </div>
                  </a>
                </div>
              </div>

              <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                <div className="flex-1 bg-gray-600 rounded-t rounded-b overflow-hidden shadow-lg">
                  <a
                    href="#"
                    className="flex flex-wrap no-underline hover:no-underline"
                  >
                    <img src={mixafy} className="h-64 w-full rounded-t pb-6" />
                    <div className="headerText text-center w-full font-bold text-3xl px-6 pb-6">
                      Mixafy
                    </div>
                    <p className="subText text-yellow-500 text-xl text-base px-6 mb-5">
                      A Spotify playlist generator that allows you to create a
                      randomized playlist. Mixafy utilizes express, Sequelize,
                      and Bootstrap.
                    </p>
                    <div className="w-full flex justify-center pb-4 content-center">
                      <a
                        href="https://github.com/CCaressimo/Mixafy"
                        target="_blank"
                        className="pr-4"
                      >
                        <button className="headerText bg-opacity-70 bg-gray-700 hover:bg-yellow-600 text-gray-800 py-2 px-4 border border-gray-200 rounded shadow transition ease-in-out">
                          GitHub
                        </button>
                      </a>
                      <a href="https://mixafy.herokuapp.com" target="_blank">
                        <button className="headerText bg-opacity-70 bg-gray-700 hover:bg-yellow-600 text-gray-800 py-2 px-4 border border-gray-200 rounded shadow transition ease-in-out">
                          Live App
                        </button>
                      </a>
                    </div>
                  </a>
                </div>
              </div>

              <div className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
                <div className="flex-1 bg-gray-600 rounded-t rounded-b overflow-hidden shadow-lg">
                  <a
                    href="#"
                    className="flex flex-wrap no-underline hover:no-underline"
                  >
                    <img src="#" className="h-64 w-full rounded-t pb-6" />
                    <div className="headerText text-center w-full font-bold text-3xl px-6 pb-6">
                      React Project
                    </div>
                    <p className="subText text-yellow-500 text-xl text-base px-6 mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam at ipsum eu nunc commodo posuere et sit amet
                      ligula.
                    </p>
                    <div className="w-full flex justify-center pb-4 content-center">
                      <a
                        href="https://github.com/CCaressimo"
                        target="_blank"
                        className="pr-4"
                      >
                        <button className="headerText bg-opacity-70 bg-gray-700 hover:bg-yellow-600 text-gray-800 py-2 px-4 border border-gray-200 rounded shadow transition ease-in-out">
                          GitHub
                        </button>
                      </a>
                      <a href="#" target="_blank">
                        <button className="headerText bg-opacity-70 bg-gray-700 hover:bg-yellow-600 text-gray-800 py-2 px-4 border border-gray-200 rounded shadow transition ease-in-out">
                          Live App
                        </button>
                      </a>
                    </div>
                  </a>
                </div>
              </div>

              <div className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
                <div className="flex-1 bg-gray-600 rounded-t rounded-b overflow-hidden shadow-lg">
                  <a
                    href="#"
                    className="flex flex-wrap no-underline hover:no-underline"
                  >
                    <img src="#" className="h-64 w-full rounded-t pb-6" />
                    <div className="headerText text-center w-full font-bold text-3xl px-6 pb-6">
                      Capstone
                    </div>
                    <p className="subText text-yellow-500 text-xl text-base px-6 mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam at ipsum eu nunc commodo posuere et sit amet
                      ligula.
                    </p>
                    <div className="w-full flex justify-center pb-4 content-center">
                      <a
                        href="https://github.com/CCaressimo"
                        target="_blank"
                        className="pr-4"
                      >
                        <button className="headerText bg-opacity-70 bg-gray-700 hover:bg-yellow-600 text-gray-800 py-2 px-4 border border-gray-200 rounded shadow transition ease-in-out">
                          GitHub
                        </button>
                      </a>
                      <a href="#" target="_blank">
                        <button className="headerText bg-opacity-70 bg-gray-700 hover:bg-yellow-600 text-gray-800 py-2 px-4 border border-gray-200 rounded shadow transition ease-in-out">
                          Live App
                        </button>
                      </a>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="container px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <div className="flex flex-col w-full overflow-y-hidden transparent container rounded-t rounded-b px-4">
              <nav>
                <div className="text-center py-6">
                  <NavLink
                    to="/skills"
                    className="headerText bg-opacity-70 bg-gray-700 hover:bg-yellow-600 text-gray-800 py-2 px-4 border border-gray-200 rounded shadow transition ease-in-out"
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
