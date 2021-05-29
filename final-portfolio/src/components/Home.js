import React from "react"
import image from "../images/niflheim-1080P-wallpaper.jpg";

export default function Home() {
    return (
      <main>
        <img
          src={image}
          alt="niflheim"
          className="absolute object-cover w-full h-full"
        />
        <section className="relative justify-center min-h-screen pt-12 lg:pt-64 px-8">
          <h1 className="text-6xl text-yellow-700 leading-none lg:leading-snug">
            Christopher Caressimo
          </h1>
          <h3 className="text-2xl text-yellow-500 leading-none lg:leading-snug">
            Full Stack Web Developer//Musician
          </h3>
        </section>
      </main>
    );
}