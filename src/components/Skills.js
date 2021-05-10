import React, { useEffect } from "react";
import bounce from "../script/bounce";

export default function Skills() {
  useEffect(() => {
    document.title = "Simranjeet Singh | Skills ";

    bounce();
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
            <span className="blast" style={{ color: "#23ffde" }}>
              Skills&nbsp;
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              &&nbsp;
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              Experience
            </span>
          </h1>
          <p align="LEFT">
            The main area of my expertise is Web development and Python.
            <br />
            <br />
            Tech I know:
            &nbsp;&nbsp; <b>Python &nbsp;|&nbsp;  Typescript  &nbsp;|&nbsp;  C/C++ </b><br />
            <br />
            &nbsp;&nbsp; • &nbsp;&nbsp; ReactJs + NextJs , VueJs , Svelte<br />
            &nbsp;&nbsp; • &nbsp;&nbsp; ChakraUI , MaterialUI , TailwindCSS , Bootstrap<br />
            &nbsp;&nbsp; • &nbsp;&nbsp; NodeJs , Express , NestJs , MongoDB<br />
            &nbsp;&nbsp; • &nbsp;&nbsp; Django (Python)<br />
            &nbsp;&nbsp; • &nbsp;&nbsp; OpenCV , Image Processing<br />
            &nbsp;&nbsp; • &nbsp;&nbsp; Database Management (SQL)<br />
            &nbsp;&nbsp; • &nbsp;&nbsp; Data Science + Web Scraping + IT Automation<br />
            &nbsp;&nbsp; • &nbsp;&nbsp; React Native<br />
            &nbsp;&nbsp; • &nbsp;&nbsp; Blender + Unity3D<br />
            <br />
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
          src={`https://raw.githubusercontent.com/smrnjeet222/smrnjeet222/master/assets/code${Math.floor(Math.random() * 4) + 1}.svg`}
        />
      </div>
    </>
  );
}
