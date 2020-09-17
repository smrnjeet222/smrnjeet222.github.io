import React, { useEffect } from "react";
import "../work.css";

export default function Work() {
  useEffect(() => {
    const links = document.querySelectorAll(".link");
    links.forEach((al) => {
      al.classList.remove("active-nav");
    });
    links[3].classList.add("active-nav");
  }, []);
  return (
    <div className="gal-container">
      {/* <h1 style={{ textAlign: "center", margin: "1rem", color: "#23ffde" }}>
        My Projects
      </h1> */}
      <div className="gallery">
        <div className="box">
          <img
            alt="projimg"
            src="https://raw.githubusercontent.com/smrnjeet222/smrnjeet222/master/assets/recipe.jpg"
            className="image"
          />
          <button className="prj">
            Recipe App<span> . js</span>
          </button>
          <a href="https://github.com/smrnjeet222/recipe-app" className="show1">
            Github
          </a>
          <a href="https://smrnjeet222.github.io/recipe-app/" className="show2">
            Visit
          </a>
        </div>
        <div className="box">
          <img
            alt="projimg"
            src="https://raw.githubusercontent.com/smrnjeet222/smrnjeet222/master/assets/pg.png"
            className="image"
          />
          <button className="prj">
            Pico-Gram<span> . js</span>
          </button>
          <a href="https://github.com/smrnjeet222/PicoGram" className="show1">
            Github
          </a>
          <a href="https://smrnjeet-picogram.web.app/" className="show2">
            Visit
          </a>
        </div>
        <div className="box">
          <img
            alt="projimg"
            src="https://raw.githubusercontent.com/smrnjeet222/smrnjeet222/master/assets/blog.jpg"
            className="image"
          />
          <button className="prj">
            Django Blog<span> . py</span>
          </button>
          <a
            href="https://github.com/smrnjeet222/Django_Blog"
            className="show1"
          >
            Github
          </a>
          <a href="https://smrnjeetblogs.herokuapp.com/" className="show2">
            Visit
          </a>
        </div>

        <div className="box">
          <img
            alt="projimg"
            src="https://raw.githubusercontent.com/smrnjeet222/smrnjeet222/master/assets/portfolio.png"
            className="image"
          />
          <button className="prj">
            Old Portfolio<span> . js</span>
          </button>
          <a href="https://github.com/smrnjeet222/Portfolio" className="show1">
            Github
          </a>
          <a href="https://smrnjeet222.github.io/Portfolio/" className="show2">
            Visit
          </a>
        </div>
        <div className="box">
          <img
            alt="projimg"
            src="https://raw.githubusercontent.com/smrnjeet222/Python_Apps/master/Snake/Extras/play.png"
            className="image"
          />
          <button className="prj">
            Snake Game<span> . py</span>
          </button>
          <a
            href="https://github.com/smrnjeet222/Python_Apps/tree/master/Snake"
            className="show1"
          >
            Github
          </a>
          <a
            href="https://github.com/smrnjeet222/Python_Apps/tree/master/Snake"
            className="show2"
          >
            Visit
          </a>
        </div>
        <div className="box">
          <img
            alt="projimg"
            src="https://raw.githubusercontent.com/smrnjeet222/smrnjeet222/master/assets/Automail.png"
            className="image"
          />
          <button className="prj">
            AutoMail<span> . py</span>
          </button>
          <a href="https://github.com/smrnjeet222/AutoMail" className="show1">
            Github
          </a>
          <a href="https://github.com/smrnjeet222/AutoMail" className="show2">
            Visit
          </a>
        </div>
        <div className="box">
          <img
            alt="projimg"
            src="https://raw.githubusercontent.com/smrnjeet222/Unity_Gamedevelopment/master/FreakyFrog/best.png"
            className="image"
          />
          <button className="prj">
            Freaky Frog<span> . C#</span>
          </button>
          <a
            href="https://smrnjeet222.github.io/Unity_Gamedevelopment/"
            className="show1"
          >
            Github
          </a>
          <a href="https://smrnjeet-22.itch.io/freaky-frog" className="show2">
            Visit
          </a>
        </div>

        <div className="box">
          <img
            alt="projimg"
            src="https://raw.githubusercontent.com/smrnjeet222/Python_Apps/master/SudokuSolver/2.png"
            className="image"
          />
          <button className="prj">
            Sudoku Solver<span> . py</span>
          </button>
          <a
            href="https://github.com/smrnjeet222/Python_Apps/tree/master/SudokuSolver"
            className="show1"
          >
            Github
          </a>
          <a
            href="https://github.com/smrnjeet222/Python_Apps/tree/master/SudokuSolver"
            className="show2"
          >
            Visit
          </a>
        </div>

        <div className="box">
          <img
            alt="projimg"
            src="https://raw.githubusercontent.com/smrnjeet222/Python_Apps/master/Space-invaders/Sc.jpg"
            className="image"
          />
          <button className="prj">
            Space-invaders<span> . py</span>
          </button>
          <a
            href="https://github.com/smrnjeet222/Python_Apps/tree/master/Space-invaders"
            className="show1"
          >
            Github
          </a>
          <a
            href="https://github.com/smrnjeet222/Python_Apps/tree/master/Space-invaders"
            className="show2"
          >
            Visit
          </a>
        </div>

        <div className="box">
          <img
            alt="projimg"
            src="https://raw.githubusercontent.com/smrnjeet222/smrnjeet222/master/assets/Astar.png"
            className="image"
          />
          <button className="prj">
            A*Pathfinding<span> . py</span>
          </button>
          <a
            href="https://github.com/smrnjeet222/Python_Apps/tree/master/A-star"
            className="show1"
          >
            Github
          </a>
          <a
            href="https://repl.it/@smrnjeet222/Astar#main.py"
            className="show2"
          >
            Visit
          </a>
        </div>
        <div className="box">
          <img
            alt="projimg"
            src="https://raw.githubusercontent.com/smrnjeet222/smrnjeet222/master/assets/todo.png"
            className="image"
          />
          <button className="prj">
            React Todo <span> . js</span>
          </button>
          <a href="https://github.com/smrnjeet222/ReactApps" className="show1">
            Github
          </a>
          <a href="https://smrnjeet222.github.io/ReactApps/" className="show2">
            Visit
          </a>
        </div>

        <div className="box">
          <img
            alt="projimg"
            src="https://raw.githubusercontent.com/smrnjeet222/Python_Apps/master/Rock-Paper-Scissors/demo.jpg"
            className="image"
          />
          <button className="prj">
            Multiplayer R.P.S<span> . py</span>
          </button>
          <a
            href="https://github.com/smrnjeet222/Python_Apps/tree/master/Rock-Paper-Scissors"
            className="show1"
          >
            Github
          </a>
          <a
            href="https://github.com/smrnjeet222/Python_Apps/tree/master/Rock-Paper-Scissors"
            className="show2"
          >
            Visit
          </a>
        </div>

        <div className="box">
          <img
            alt="projimg"
            src="https://raw.githubusercontent.com/smrnjeet222/smrnjeet222/master/assets/Rc.png"
            className="image"
          />
          <button className="prj">
            Ray Casting<span> . js</span>
          </button>
          <a
            href="https://editor.p5js.org/smrnjeet222/collections/fvtHa48dt"
            className="show1"
          >
            Github
          </a>
          <a
            href="https://editor.p5js.org/smrnjeet222/sketches/j06TXs4ZF"
            className="show2"
          >
            Visit
          </a>
        </div>
        <div className="box">
          <img
            alt="projimg"
            src="https://raw.githubusercontent.com/smrnjeet222/smrnjeet222/master/assets/covid.png"
            className="image"
          />
          <button className="prj">
            Python Apps<span> . py</span>
          </button>
          <a
            href="https://github.com/smrnjeet222/Python_Apps"
            className="show1"
          >
            Github
          </a>
          <a
            href="https://github.com/smrnjeet222/Python_Apps"
            className="show2"
          >
            Visit
          </a>
        </div>
        <div className="box">
          <img
            alt="projimg"
            src="https://raw.githubusercontent.com/smrnjeet222/smrnjeet222/master/assets/bubblesort.png"
            className="image"
          />
          <button className="prj">
            Visualisations<span> . js</span>
          </button>
          <a
            href="https://editor.p5js.org/smrnjeet222/collections/fvtHa48dt"
            className="show1"
          >
            Github
          </a>
          <a
            href="https://editor.p5js.org/smrnjeet222/sketches/T0o5woDT5"
            className="show2"
          >
            Visit
          </a>
        </div>
        <div className="box">
          <img
            alt="projimg"
            src="https://raw.githubusercontent.com/smrnjeet222/BLENDER/master/Abstract_Design/Abstract.png"
            className="image"
          />
          <button className="prj">
            Blender<span> . models</span>
          </button>
          <a href="https://smrnjeet222.github.io/BLENDER/" className="show1">
            Github
          </a>
          <a
            href="https://editor.p5js.org/smrnjeet222/sketches/T0o5woDT5"
            className="show2"
          >
            Visit
          </a>
        </div>
        <div className="box">
          <img
            alt="projimg"
            src="https://raw.githubusercontent.com/smrnjeet222/Unity_Gamedevelopment/master/MYGAME.png"
            className="image"
          />
          <button className="prj">
            Unity Games<span> . C#</span>
          </button>
          <a href="https://smrnjeet-22.itch.io/" className="show1">
            Github
          </a>
          <a href="https://smrnjeet-22.itch.io/" className="show2">
            Visit
          </a>
        </div>
      </div>
    </div>
  );
}
