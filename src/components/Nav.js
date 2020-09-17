import React from "react";

export default function Nav() {
  return (
    <>
      <div id="nav-bar">
        <a href="https://smrnjeet222.github.io/Portfolio/">
          <img
            className="logo"
            src="https://raw.githubusercontent.com/smrnjeet222/smrnjeet222/master/assets/home.png"
            alt="logo"
          />
        </a>

        <nav>
          <a href="/" className="link ">
            <i className="fas fa-home fa-2x"></i>
            <div className="overlay">
              <div className="text">HOME</div>
            </div>
          </a>
          <a href="/about" className="link">
            <i className="image fas fa-user fa-2x"></i>
            <div className="overlay">
              <div className="text">ABOUT</div>
            </div>
          </a>
          <a href="/skills" className="link">
            <i className="fas fa-cogs fa-2x"></i>
            <div className="overlay">
              <div className="text">SKILLS</div>
            </div>
          </a>
          <a href="/work" className="link">
            <i className="fas fa-eye fa-2x"></i>
            <div className="overlay">
              <div className="text">MY WORK</div>
            </div>
          </a>
          <a href="/contact" className="link">
            <i className="fas fa-envelope fa-2x"></i>
            <div className="overlay">
              <div className="text">CONTACT</div>
            </div>
          </a>
        </nav>
        <ul>
          <li>
            <a
              href="https://www.instagram.com/smrnjeet_22/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.reddit.com/user/smrnjeet_22"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-reddit-alien"></i>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/Att_Sardar_ji"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
      <a className="bkmrk" href="/Resume.html">
        <img
          src="https://raw.githubusercontent.com/smrnjeet222/smrnjeet222/master/assets/blogdark.png"
          alt="Resume"
        />
        <span className="folded-corner"></span>
      </a>
    </>
  );
}
