import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";

export default function App() {
  return (
    <Router>
      <Nav />
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
      </Switch>
    </Router>
  );
}
