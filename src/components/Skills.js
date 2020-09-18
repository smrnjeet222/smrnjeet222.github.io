import React, { useEffect } from "react";
import getRandomInt from "../script/randomsvg";

export default function Skills() {
  useEffect(() => {
    const cls = document.querySelectorAll(".blast");
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

    const links = document.querySelectorAll(".link");
    links.forEach((al) => {
      al.classList.remove("active-nav");
    });
    links[2].classList.add("active-nav");
  }, []);

  return (
    <>
      <div className="container home-page">
        <span className="tags top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
        <div className="text-zone">
          <h1
            aria-label=" Hi, I’m Simranjeet,web developer."
            className="blast-root"
          >
            <span className="blast" style={{ opacity: 1, color: "#23ffde" }}>
              Skills&nbsp;
            </span>
            <span className="blast" style={{ opacity: 1, color: "#23ffde" }}>
              &&nbsp;
            </span>
            <span className="blast" style={{ opacity: 1, color: "#23ffde" }}>
              Experience
            </span>
          </h1>
          <p align="LEFT">
            The main area of my expertise is Web development and Python.
            <br />
            <br />
            Python, HTML, CSS, JS , SASS, Bootstrap, building small and
            <br />
            medium web apps with Django & React. | 5⭐ in Problem Solving
            <br />
            (Algorithms and Data Structures) on HackerRank.
            <br />
            <br />
            I also have substantial experience in Python, with automation
            scripts,
            <br />
            web scraping and stuff . <br />
            <br />
            Visit my&nbsp;
            <a
              href="https://www.linkedin.com/in/smrnjeet222"
              style={{ color: "#23ffde" }}
            >
              LinkedIn&nbsp;
            </a>
            profile for more details or just&nbsp;
            <a href="/contact" style={{ color: "#23ffde" }}>
              contact&nbsp;
            </a>
            me.
          </p>
        </div>

        <span className="tags bottom-tags" style={{ bottom: "10px" }}>
          &nbsp;&nbsp;&nbsp;&lt;/body&gt;
          <br />
          &lt;/html&gt;
        </span>
      </div>
      <div id="mysvg">
        <img
          alt="hacker"
          src={`https://raw.githubusercontent.com/smrnjeet222/smrnjeet222/master/assets/code${getRandomInt()}.svg`}
        />
      </div>
    </>
  );
}
