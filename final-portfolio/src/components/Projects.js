import React from "react";


export default function Projects() {

  return (
    <main className="bg-gray-200 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex text-black justify-center">Projects</h1>
        <h3 className="text-lg text-black flex justify-center mb-12">
          Come check out some of the projects I have built during my time in
          DigitalCrafts! There will be links for both the live site and Github
          repository.
        </h3>
        <section className="grid grid-cols-2 gap-8">
          <article className="relative rounded-lg shadow-xl bg-black p-16">
            <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-yellow-500">
              <a href="" alt="" target="_blank" rel="noopener noreferrer">
                
              </a>
            </h3>
            <div>
              <span></span>
              <span></span>
              <span></span>
              <p></p>
              <span></span>
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}
