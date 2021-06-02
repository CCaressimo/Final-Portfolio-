import React from 'react';
import image from "../images/83316363_2727986553927466_8086501138565693440_n.jpg";

export default Resume = () => {
  return (
    <main>
      <img
        src={image}
        alt="live at revolution"
        className="fixed object-cover w-full h-full"
      />
      <section className="relative">
        <h1>this is my resume</h1>
      </section>
    </main>
  );
}  
