import React from 'react';
import {NavLink} from 'react-router-dom'

const Dropdown = ({isOpen, toggle}) => {
    return (
      <header className="headerText sticky top-0 z-50">
        <div
          className={
            isOpen
              ? "grid grid-rows-4 text-center items-center bg-black"
              : "hidden"
          }
          onClick={toggle}
        >
          <NavLink
            to="/about"
            activeClassName="titleText bg-gray-800"
            className="inline-flex items-center py-3 px-3 my-4 rounded nextButton text-xl md:text-2xl"
          >
            About Me
          </NavLink>
          <NavLink
            to="/projects"
            activeClassName="titleText bg-gray-800"
            className="inline-flex items-center py-3 px-3 my-4 rounded nextButton text-xl md:text-2xl"
          >
            Projects
          </NavLink>
          <NavLink
            to="/skills"
            activeClassName="titleText bg-gray-800"
            className="inline-flex items-center py-3 px-3 my-4 rounded nextButton text-xl md:text-2xl"
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
            activeClassName="titleText bg-gray-800"
            className="inline-flex items-center py-3 px-3 my-4 rounded nextButton text-xl md:text-2xl"
          >
            Contact Me
          </NavLink>
          <a
            href="https://github.com/CCaressimo"
            target="_blank"
            className="inline-flex items-center py-3 px-3 my-4 rounded nextButton text-xl md:text-2xl"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/christopher-c-b9885a82/"
            target="_blank"
            className="inline-flex items-center py-3 px-3 my-4 rounded nextButton text-xl md:text-2xl"
          >
            LinkedIn
          </a>
        </div>
      </header>
    );
}

export default Dropdown;