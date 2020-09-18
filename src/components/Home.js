import React, { useEffect } from "react";

import getRandomInt from "../script/randomsvg";

export default function Home() {
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
    links[0].classList.add("active-nav");
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
            <span className="blast" style={{ opacity: 1 }}>
              H
            </span>
            <span className="blast" style={{ opacity: 1 }}>
              i
            </span>
            <span className="blast" style={{ opacity: 1 }}>
              ,
            </span>
            <br />
            <span className="blast" style={{ opacity: 1 }}>
              I
            </span>
            <span className="blast" style={{ opacity: 1 }}>
              ’
            </span>
            <span className="blast" style={{ opacity: 1 }}>
              m&nbsp;
            </span>
            <span className="Slast" style={{ opacity: 1 }}>
              S
            </span>
            <span className="blast" style={{ opacity: 1 }}>
              i
            </span>
            <span className="blast" style={{ opacity: 1 }}>
              m
            </span>
            <span className="blast" style={{ opacity: 1 }}>
              r
            </span>
            <span className="blast" style={{ opacity: 1 }}>
              a
            </span>
            <span className="blast" style={{ opacity: 1 }}>
              n
            </span>
            <span className="blast" style={{ opacity: 1, paddingLeft: "3px" }}>
              j
            </span>
            <span className="blast" style={{ opacity: 1 }}>
              e
            </span>
            <span className="blast" style={{ opacity: 1 }}>
              e
            </span>
            <span className="blast" style={{ opacity: 1 }}>
              t
            </span>
            <span className="blast" style={{ opacity: 1 }}>
              ,
            </span>
            <br />
            <span className="blast" style={{ opacity: 1 }}>
              w
            </span>
            <span className="blast" style={{ opacity: 1 }}>
              e
            </span>
            <span className="blast" style={{ opacity: 1 }}>
              b&nbsp;
            </span>
            <span className="blast" style={{ opacity: 1 }}>
              d
            </span>
            <span className="blast" style={{ opacity: 1 }}>
              e
            </span>
            <span className="blast" style={{ opacity: 1 }}>
              v
            </span>
            <span className="blast" style={{ opacity: 1 }}>
              e
            </span>
            <span className="blast" style={{ opacity: 1 }}>
              l
            </span>
            <span className="blast" style={{ opacity: 1 }}>
              o
            </span>
            <span className="blast" style={{ opacity: 1 }}>
              p
            </span>
            <span className="blast" style={{ opacity: 1 }}>
              e
            </span>
            <span className="blast" style={{ opacity: 1 }}>
              r
            </span>
            <span className="blast" style={{ opacity: 1 }}>
              .
            </span>
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
