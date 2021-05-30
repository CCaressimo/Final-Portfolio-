import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact"
import Resume from "./components/Resume"
import NavBar from "./components/NavBar"
import Dropdown from "./components/Dropdown"

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', hideMenu)

    return () => {
      window.removeEventListener("resize", hideMenu);
    }
  })

  return (
    <BrowserRouter>
      <NavBar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={Projects} path="/projects" />
        <Route component={Skills} path="/skills" />
        <Route component={Contact} path="/contact" />
        <Route component={Resume} path="/resume" />
      </switch>
    </BrowserRouter>
  );
}

export default App;
