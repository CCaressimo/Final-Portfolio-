import "./css/background.css"
import React from "react";
import { NavLink } from "react-router-dom"

export default function NavBar({toggle}) {
  return (
    <header className="sticky top-0 z-50">
      <div>
        <nav className="headerText flex justify-between items-center h-16 background relative shadow-sm font-odin text-gray-100">
          <NavLink
            to="/"
            className="titleText inflex-flex items-center py-6 px-3 rounded text-4xl font-bold font-family-odin tracking-widest "
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
              activeClassName="titleText"
              className="inline-flex items-center py-3 px-3 my-4 rounded navButton text-xl md:text-2xl"
            >
              About Me
            </NavLink>
            <NavLink
              to="/projects"
              activeClassName="titleText"
              className="inline-flex items-center py-3 px-3 my-4 rounded navButton text-xl md:text-2xl"
            >
              Projects
            </NavLink>
            <NavLink
              to="/skills"
              activeClassName="titleText"
              className="inline-flex items-center py-3 px-3 my-4 rounded navButton text-xl md:text-2xl"
            >
              Skills
            </NavLink>
            <NavLink
              to="/resume"
              activeClassName="titleText"
              className="inline-flex items-center py-3 px-3 my-4 rounded navButton text-xl md:text-2xl"
            >
              Resume
            </NavLink>
            <NavLink
              to="/contact"
              activeClassName="titleText"
              className="inline-flex items-center py-3 px-3 my-4 rounded navButton text-xl md:text-2xl"
            >
              Contact Me
            </NavLink>
            <a
              href="https://github.com/CCaressimo"
              target="_blank"
              className="inline-flex items-center py-3 px-3 my-4 rounded navButton text-xl md:text-2xl"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/christopheracaressimo/"
              target="_blank"
              className="inline-flex items-center py-3 px-3 my-4 rounded navButton text-xl md:text-2xl"
            >
              LinkedIn
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
