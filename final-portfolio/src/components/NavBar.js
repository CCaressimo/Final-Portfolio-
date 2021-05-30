import React from "react";
import { NavLink } from "react-router-dom"

export default function NavBar({toggle}) {
  return (
    <header className="sticky top-0 z-50">
      <div>
        <nav className="flex justify-between items-center h-16 bg-black relative shadow-sm font-mono">
          <NavLink
            to="/"
            exact
            activeClassName="text-gray-300"
            className="inflex-flex items-center py-6 px-3 rounded text-yellow-700 hover:text-green-800 text-4xl font-bold mukta tracking-widest"
          >
            CC
          </NavLink>

          <div className="px-4.cursor-pointer md:hidden" onClick={toggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="orange"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <div className="pr-8 md:block hidden">
            <NavLink
              to="/about"
              activeClassName="text-red-200 bg-gray-800"
              className="inline-flex items-center py-3 px-3 my-4 rounded text-yellow-500 hover:text-green-800"
            >
              About Me
            </NavLink>
            <NavLink
              to="/projects"
              activeClassName="text-white bg-gray-800"
              className="inline-flex items-center py-3 px-3 my-4 rounded text-yellow-500 hover:text-green-800"
            >
              Projects
            </NavLink>
            <NavLink
              to="/skills"
              activeClassName="text-white bg-gray-800"
              className="inline-flex items-center py-3 px-3 my-4 rounded text-yellow-500 hover:text-green-800"
            >
              Skills
            </NavLink>
            <NavLink
              to="/contact"
              activeClassName="text-white bg-gray-800"
              className="inline-flex items-center py-3 px-3 my-4 rounded text-yellow-500 hover:text-green-800"
            >
              Contact Me
            </NavLink>
            <NavLink
              to="/resume"
              activeClassName="text-white bg-gray-800"
              className="inline-flex items-center py-3 px-3 my-4 rounded text-yellow-500 hover:text-green-800"
            >
              Resume
            </NavLink>
            <a
              href="https://github.com/CCaressimo"
              target="_blank"
              className="inline-flex items-center py-3 px-3 my-4 rounded text-yellow-500 hover:text-green-800"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/christopher-c-b9885a82/"
              target="_blank"
              className="inline-flex items-center py-3 px-3 my-4 rounded text-yellow-500 hover:text-green-800"
            >
              LinkedIn
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
