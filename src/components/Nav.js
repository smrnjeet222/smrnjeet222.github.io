import React from "react";
import { NavLink } from "react-router-dom";

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
          <NavLink
            to={process.env.PUBLIC_URL + "/"}
            className="link"
            activeClassName="active-nav"
            exact
          >
            <i className="fas fa-home fa-2x"></i>
            <div className="overlay">
              <div className="text">HOME</div>
            </div>
          </NavLink>
          <NavLink
            to={process.env.PUBLIC_URL + "/about"}
            className="link"
            activeClassName="active-nav"
          >
            <i className="image fas fa-user fa-2x"></i>
            <div className="overlay">
              <div className="text">ABOUT</div>
            </div>
          </NavLink>
          <NavLink
            to={process.env.PUBLIC_URL + "/skills"}
            className="link"
            activeClassName="active-nav"
          >
            <i className="fas fa-cogs fa-2x"></i>
            <div className="overlay">
              <div className="text">SKILLS</div>
            </div>
          </NavLink>
          <NavLink
            to={process.env.PUBLIC_URL + "/work"}
            className="link"
            activeClassName="active-nav"
          >
            <i className="fas fa-eye fa-2x"></i>
            <div className="overlay">
              <div className="text">MY WORK</div>
            </div>
          </NavLink>
          <NavLink
            to={process.env.PUBLIC_URL + "/contact"}
            className="link"
            activeClassName="active-nav"
          >
            <i className="fas fa-envelope fa-2x"></i>
            <div className="overlay">
              <div className="text">CONTACT</div>
            </div>
          </NavLink>
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
              href="https://smrnjeet-22.itch.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-itch-io"></i>
            </a>
          </li>
        </ul>
      </div>

      <a className="bkmrk" target="_blank"
        href="./Resume.pdf"
      >
        <img
          src="https://raw.githubusercontent.com/smrnjeet222/smrnjeet222/master/assets/blogdark.png"
          alt="Resume"
        />
        <span className="folded-corner"></span>
      </a>
    </>
  );
}
