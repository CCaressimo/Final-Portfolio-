import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact"

function App() {
  return 
  <BrowserRouter>
    <switch>
      <Route component={Home} path='/' exact/>
      <Route component={About} path='/about' />
      <Route component={Projects} path='/projects' />
      <Route component={Skills} path='/skills' />
      <Route component={Contact} path='/contact' />
      <Route component={} path='' />

    </switch>
  </BrowserRouter>
}

export default App;
