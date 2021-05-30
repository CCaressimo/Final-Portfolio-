import React from "react"
import image from "../images/83316363_2727986553927466_8086501138565693440_n.jpg";

export default function Home() {
    return (
      <main>
        <img
          src={image}
          alt="niflheim"
          className="absolute object-cover w-full h-full"
        /> 
        <section className="relative justify-center min-h-screen pt-12 lg:pt-64 px-20">
          <div class="container pt-24 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <div class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
              <h1 class="my-4 text-3xl md:text-5xl text-yellow-700 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
                Christopher Caressimo
              </h1>
              <p class="leading-normal text-base md:text-2xl text-yellow-500 leading-none lg:leading-snug mb-8 text-center md:text-left slide-in-bottom-subtitle">
                Full Stack Web Developer//Musician
              </p>
            </div>
          </div>
        </section>
      </main>
    );
}  
