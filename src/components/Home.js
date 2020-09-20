import React, { useEffect } from "react";
import bounce from "../script/bounce";

import getRandomInt from "../script/randomsvg";

export default function Home() {
  useEffect(() => {
    document.title =
      "Simranjeet Singh | Full Stack Developer | Python Developer";
    bounce();
    const s = document.querySelector(".Slast");

    s.style.opacity = 1;
    s.style.transform = "rotate(360deg)";
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
            <span className="blast">H</span>
            <span className="blast">i</span>
            <span className="blast">,</span>
            <br />
            <span className="blast">I</span>
            <span className="blast">’</span>
            <span className="blast">m&nbsp;</span>
            <span className="Slast">S</span>
            <span className="blast">i</span>
            <span className="blast">m</span>
            <span className="blast">r</span>
            <span className="blast">a</span>
            <span className="blast">n</span>
            <span className="blast" style={{ paddingLeft: "3px" }}>
              j
            </span>
            <span className="blast">e</span>
            <span className="blast">e</span>
            <span className="blast">t</span>
            <span className="blast">,</span>
            <br />
            <span className="blast">w</span>
            <span className="blast">e</span>
            <span className="blast">b&nbsp;</span>
            <span className="blast">d</span>
            <span className="blast">e</span>
            <span className="blast">v</span>
            <span className="blast">e</span>
            <span className="blast">l</span>
            <span className="blast">o</span>
            <span className="blast">p</span>
            <span className="blast">e</span>
            <span className="blast">r</span>
            <span className="blast">.</span>
          </h1>
          <h2>Full Stack Developer / Python Programmer / Freelancer</h2>
          <div className="icons">
            <a href="https://www.linkedin.com/in/smrnjeet222/">
              <i className="fab fa-linkedin fa-3x"></i>
            </a>
            <a href="https://github.com/smrnjeet222">
              <i className="fab fa-github fa-3x"></i>
            </a>
            <a href="https://leetcode.com/smrnjeet222/">
              <i className="fa fa-code fa-3x"></i>
            </a>
            <a href="https://smrnjeet-22.itch.io/">
              <i className="fab fa-itch-io fa-3x"></i>
            </a>
          </div>
        </div>

        <span className="tags bottom-tags">
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
