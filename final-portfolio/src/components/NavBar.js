import React from "react";
import { NavLink } from "react-router-dom"
import { SocialIcon } from "react-social-icons"

export default function NavBar() {
  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-2xl font-bold mukta tracking-widest"
          >
            CC
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-red-100 bg-red-400"
            className="inline-flex items-center py-3 px-3 my-4 rounded text-red-200 hover:text-green-800"
          >
            About Me
          </NavLink>
          <NavLink
            to="/projects"
            activeClassName="text-red-100 bg-red-400"
            className="inline-flex items-center py-3 px-3 my-4 rounded text-red-200 hover:text-green-800"
          >
            Projects
          </NavLink>
          <NavLink
            to="skills"
            activeClassName="text-red-100 bg-red-400"
            className="inline-flex items-center py-3 px-3 my-4 rounded text-red-200 hover:text-green-800"
          >
            Skills
          </NavLink>
          <NavLink
            to="contact"
            activeClassName="text-red-100 bg-red-400"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
          >
            Contact Me
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-4">
          <SocialIcon
            url="https://github.com/CCaressimo"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/christopher-c-b9885a82/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />

        </div>
      </div>
    </header>
  );
}
