import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AnimatePresence} from "framer-motion";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact"
import Resume from "./components/Resume"
import NavBar from "./components/NavBar"
import Dropdown from "./components/Dropdown"
import ScrollToTop from './components/ScrollToTop';

const App = () => {
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
// const location = useLocation();
  
  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavBar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={About} path="/about" />
          <Route component={Projects} path="/projects" />
          <Route component={Skills} path="/skills" />
          <Route component={Resume} path="/resume" />
          <Route component={Contact} path="/contact" />
        </Switch>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
