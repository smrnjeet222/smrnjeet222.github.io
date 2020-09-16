import React, { useEffect } from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";

export default function App() {
  useEffect(() => {
    const cls = document.querySelectorAll(".blast");
    console.log(cls);
    cls.forEach((cl) => {
      cl.addEventListener("mouseover", function () {
        cl.classList.add("animated");
        cl.classList.add("rubberBand");
      });

      cl.addEventListener("mouseleave", function () {
        setTimeout(function () {
          cl.classList.remove("animated");
          cl.classList.remove("rubberBand");
        }, 1000);
      });
    });
  }, []);

  return (
    <>
      <Nav />
      {/* <Home /> */}
      {/* <About /> */}
      {/* <Skills /> */}
      {/* <Work /> */}
      <Contact />
    </>
  );
}
