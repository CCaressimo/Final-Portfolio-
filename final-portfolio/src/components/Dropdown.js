import React from 'react';
import {NavLink} from 'react-router-dom'

const Dropdown = ({isOpen, toggle}) => {
    return (
      <div className={isOpen ? "grid grid-rows-4 text-center items-center bg-yellow-600" : 'hidden'} onClick={toggle}>
        <NavLink
          to="/about"
          activeClassName="text-red-200 bg-gray-800"
          className="inline-flex items-center py-3 px-3 my-4 rounded text-black hover:text-green-800"
        >
          About Me
        </NavLink>
        <NavLink
          to="/projects"
          activeClassName="text-white bg-gray-800"
          className="inline-flex items-center py-3 px-3 my-4 rounded text-black hover:text-green-800"
        >
          Projects
        </NavLink>
        <NavLink
          to="/skills"
          activeClassName="text-white bg-gray-800"
          className="inline-flex items-center py-3 px-3 my-4 rounded text-black hover:text-green-800"
        >
          Skills
        </NavLink>
        <NavLink
          to="/contact"
          activeClassName="text-white bg-gray-800"
          className="inline-flex items-center py-3 px-3 my-4 rounded text-black hover:text-green-800"
        >
          Contact Me
        </NavLink>
        <a
          href="https://github.com/CCaressimo"
          target="_blank"
          className="inline-flex items-center py-3 px-3 my-4 rounded text-black hover:text-green-800"
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/christopher-c-b9885a82/"
          target="_blank"
          className="inline-flex items-center py-3 px-3 my-4 rounded text-black hover:text-green-800"
        >
          LinkedIn
        </a>
      </div>
    );
}

export default Dropdown;