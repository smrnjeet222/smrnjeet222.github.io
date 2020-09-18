import React, { useEffect } from "react";
import { motion } from "framer-motion";

import "../work.css";
const container = {
  hidden: { scale: 1 },
  show: {
    scale: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

function Post({ img, name, ext, git, live }) {
  return (
    <motion.div className="box" variants={item}>
      <img
        alt="projimg"
        src={img}
        className="image"
        style={{ backgroundColor: "#c2c2c2" }}
      />
      <button className="prj">
        {name}
        <span> . {ext}</span>
      </button>
      <a href={git} className="show1">
        Github
      </a>
      <a href={live} className="show2">
        Visit
      </a>
    </motion.div>
  );
}

export default function Work() {
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
    links[3].classList.add("active-nav");
  }, []);
  return (
    <div className="gal-container">
      {/* <h1 style={{ textAlign: "center", margin: "1rem", color: "#23ffde" }}>
        <span className="blast">My&nbsp;</span>{" "}
        <span className="blast"> Projects</span>
      </h1> */}
      <motion.div
        className="gallery"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <Post
          img="https://raw.githubusercontent.com/smrnjeet222/smrnjeet222/master/assets/recipe.jpg"
          name="Recipe App"
          ext="js"
          git="https://github.com/smrnjeet222/recipe-app"
          live="https://smrnjeet222.github.io/recipe-app/"
        />
        <Post
          img="https://raw.githubusercontent.com/smrnjeet222/smrnjeet222/master/assets/pg.png"
          name="Pico-Gram"
          ext="js"
          git="https://github.com/smrnjeet222/PicoGram"
          live="https://smrnjeet-picogram.web.app/"
        />
        <Post
          img="https://raw.githubusercontent.com/smrnjeet222/smrnjeet222/master/assets/blog.jpg"
          name="Django Blog"
          ext="py"
          git="https://github.com/smrnjeet222/Django_Blog"
          live="https://smrnjeetblogs.herokuapp.com/"
        />
        <Post
          img="https://raw.githubusercontent.com/smrnjeet222/smrnjeet222/master/assets/portfolio.png"
          name="Old Portfolio"
          ext="js"
          git="https://github.com/smrnjeet222/Portfolio"
          live="https://smrnjeet222.github.io/Portfolio/"
        />
        <Post
          img="https://raw.githubusercontent.com/smrnjeet222/Python_Apps/master/Snake/Extras/play.png"
          name="Snake Game"
          ext="py"
          git="https://github.com/smrnjeet222/Python_Apps/tree/master/Snake"
          live="https://github.com/smrnjeet222/Python_Apps/tree/master/Snake"
        />
        <Post
          img="https://raw.githubusercontent.com/smrnjeet222/smrnjeet222/master/assets/Automail.png"
          name="AutoMail"
          ext="py"
          git="https://github.com/smrnjeet222/AutoMail"
          live="https://github.com/smrnjeet222/AutoMail"
        />
        <Post
          img="https://raw.githubusercontent.com/smrnjeet222/Unity_Gamedevelopment/master/FreakyFrog/best.png"
          name="Freaky Frog"
          ext="c#"
          git="https://github.com/smrnjeet222/Unity_Gamedevelopment"
          live="https://smrnjeet-22.itch.io/freaky-frog"
        />
        <Post
          img="https://raw.githubusercontent.com/smrnjeet222/Python_Apps/master/SudokuSolver/2.png"
          name="Sudoku Solver"
          ext="py"
          git="https://github.com/smrnjeet222/Python_Apps/tree/master/SudokuSolver"
          live="https://github.com/smrnjeet222/Python_Apps/tree/master/SudokuSolver"
        />
        <Post
          img="https://raw.githubusercontent.com/smrnjeet222/Python_Apps/master/Space-invaders/Sc.jpg"
          name="Space-invaders"
          ext="py"
          git="https://github.com/smrnjeet222/Python_Apps/tree/master/Space-invaders"
          live="https://github.com/smrnjeet222/Python_Apps/tree/master/Space-invaders"
        />
        <Post
          img="https://raw.githubusercontent.com/smrnjeet222/smrnjeet222/master/assets/Astar.png"
          name="A*Pathfinding"
          ext="py"
          git="https://github.com/smrnjeet222/Python_Apps/tree/master/A-star"
          live="https://repl.it/@smrnjeet222/Astar#main.py"
        />
        <Post
          img="https://raw.githubusercontent.com/smrnjeet222/smrnjeet222/master/assets/todo.png"
          name="React Todo "
          ext="js"
          git="https://github.com/smrnjeet222/ReactApps"
          live="https://github.com/smrnjeet222/ReactApps"
        />
        <Post
          img="https://raw.githubusercontent.com/smrnjeet222/Python_Apps/master/Rock-Paper-Scissors/demo.jpg"
          name="Multiplayer R.P.S"
          ext="py"
          git="https://github.com/smrnjeet222/Python_Apps/tree/master/Rock-Paper-Scissors"
          live="https://github.com/smrnjeet222/Python_Apps/tree/master/Rock-Paper-Scissors"
        />
        <Post
          img="https://raw.githubusercontent.com/smrnjeet222/smrnjeet222/master/assets/Rc.png"
          name="Ray Casting"
          ext="js"
          git="https://editor.p5js.org/smrnjeet222/collections/fvtHa48dt"
          live="https://editor.p5js.org/smrnjeet222/sketches/j06TXs4ZF"
        />
        <Post
          img="https://raw.githubusercontent.com/smrnjeet222/smrnjeet222/master/assets/covid.png"
          name="Python Apps"
          ext="py"
          git="https://github.com/smrnjeet222/Python_Apps"
          live="https://github.com/smrnjeet222/Python_Apps"
        />
        <Post
          img="https://raw.githubusercontent.com/smrnjeet222/smrnjeet222/master/assets/bubblesort.png"
          name="Visualisations"
          ext="js"
          git="https://editor.p5js.org/smrnjeet222/collections/fvtHa48dt"
          live="https://editor.p5js.org/smrnjeet222/sketches/T0o5woDT5"
        />
        <Post
          img="https://raw.githubusercontent.com/smrnjeet222/BLENDER/master/Abstract_Design/Abstract.png"
          name="Blender"
          ext="models"
          git="https://github.com/smrnjeet222/BLENDER"
          live="https://smrnjeet222.github.io/BLENDER/"
        />
        <Post
          img="https://raw.githubusercontent.com/smrnjeet222/Unity_Gamedevelopment/master/MYGAME.png"
          name="Unity Games"
          ext="c#"
          git="https://github.com/smrnjeet222/Unity_Gamedevelopment"
          live="https://smrnjeet-22.itch.io/"
        />
      </motion.div>
    </div>
  );
}
