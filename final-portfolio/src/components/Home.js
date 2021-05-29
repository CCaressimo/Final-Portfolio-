import React from "react"
import image from "../images/niflheim-1080P-wallpaper.jpg";

export default function Home() {
    return (
        <main>
            <img src={image} alt="niflheim" className="fixed object-cover w-full h-full"/>
            <section>
                <h1>Christopher Caressimo</h1>
                <h3>Full Stack Web Developer//Musician</h3>
            </section>
        </main>
    )
}