import { TimelineMax } from "gsap";

export default function guitarAnim() {
  // window.addEventListener("load", () => {
  //Varibles for the animation
  const guitar = document.getElementById("guitar_2_");

  const strings = document.getElementById("strings");

  const speaker_1 = document.getElementById("speaker-1");
  const speaker_2 = document.getElementById("speaker-2");

  const note_1 = document.getElementById("note-1_2_");
  const note_2 = document.getElementById("note-2_2_");
  const note_3 = document.getElementById("note-3_2_");
  const note_4 = document.getElementById("note-4_2_");
  const spark_1 = document.getElementById("spark-1");
  const spark_2 = document.getElementById("spark-3");
  const spark_3 = document.getElementById("spark-4");

  //Declare timeline
  var pluck = new TimelineMax({
    paused: true,
  });

  //String Animtaions
  pluck
    .fromTo(strings, 0.1, { opacity: 0.5 }, { opacity: 1 }, "-=1.1")

    .to(note_1, 0.4, { x: "-5%", y: "-5%" }, "-=1.1")
    .to(note_1, 0.2, { opacity: 1 }, "-=1.1")
    .to(note_1, 0.2, { opacity: 0 }, "-=0.9")

    .to(note_2, 0.4, { x: "5%", y: "-5%" }, "-=1.1")
    .to(note_2, 0.2, { opacity: 1 }, "-=1.1")
    .to(note_2, 0.2, { opacity: 0 }, "-=0.9")

    .to(note_3, 0.4, { x: "-2%", y: "-5%" }, "-=1.1")
    .to(note_3, 0.2, { opacity: 1 }, "-=1.1")
    .to(note_3, 0.2, { opacity: 0 }, "-=0.9")

    .to(note_4, 0.4, { x: "5%", y: "-2%" }, "-=1.1")
    .to(note_4, 0.2, { opacity: 1 }, "-=1.1")
    .to(note_4, 0.2, { opacity: 0 }, "-=0.9")

    //Sparks Animations
    .to(spark_1, 0.4, { x: "-5%", y: "5%" }, "-=1.1")
    .to(spark_1, 0.2, { opacity: 1 }, "-=1.1")
    .to(spark_1, 0.2, { opacity: 0 }, "-=0.9")

    .to(spark_2, 0.4, { x: "-5%", y: "-5%" }, "-=1.1")
    .to(spark_2, 0.2, { opacity: 1 }, "-=1.1")
    .to(spark_2, 0.2, { opacity: 0 }, "-=0.9")

    .to(spark_3, 0.4, { x: "5%", y: "-5%" }, "-=1.1")
    .to(spark_3, 0.2, { opacity: 1 }, "-=1.1")
    .to(spark_3, 0.2, { opacity: 0 }, "-=0.9")

    //Speaker Animtaions
    .to(
      speaker_1,
      0.1,
      { transform: "scale(0.9)", transformOrigin: "center" },
      "-=1.1"
    )
    .to(
      speaker_1,
      0.4,
      { transform: "scale(0.9)", transformOrigin: "center" },
      "-=1"
    )

    .to(
      speaker_2,
      0.1,
      { transform: "scale(0.9)", transformOrigin: "center" },
      "-=1.05"
    )
    .to(
      speaker_2,
      0.4,
      { transform: "scale(0.9)", transformOrigin: "bottom" },
      "-=0.95"
    );

  //Trigger Audio
  var i = 0;
  function playAudio() {
    if (i < 12) {
      ++i;
    } else {
      i = 1;
    }
    var myAudio = document.getElementById("audio-" + i);
    myAudio.play();
  }

  function rockOut() {
    pluck.restart();
    pluck.play();
    playAudio();
  }

  //Do the stuff when clicked
  guitar.addEventListener("click", rockOut);
  // });
}
