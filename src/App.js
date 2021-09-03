import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";


function Resume() {

  useEffect(() => {
    window.location.href = "https://cdn.jsdelivr.net/gh/smrnjeet222/smrnjeet222/Resume.pdf";
  }, []);

  return null;
}


export default function App() {
  return (
    <Router>
      <Nav />
      <audio
        id="music"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/Shuffle_A.mp3"
      ></audio>
      <Switch>
        <Route path={process.env.PUBLIC_URL + "/"} exact>
          <Home />
        </Route>
        <Route path={process.env.PUBLIC_URL + "/about"} exact>
          <About />
        </Route>
        <Route path={process.env.PUBLIC_URL + "/skills"} exact>
          <Skills />
        </Route>
        <Route path={process.env.PUBLIC_URL + "/work"} exact>
          <Work />
        </Route>
        <Route path={process.env.PUBLIC_URL + "/contact"} exact>
          <Contact />
        </Route>
        <Route path={process.env.PUBLIC_URL + "/resume"} exact>
          <Resume />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}
