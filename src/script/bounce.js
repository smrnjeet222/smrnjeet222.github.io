export default function bounce() {
  const cls = document.querySelectorAll(".blast");

  let vel = 100;

  cls.forEach((cl, idx) => {
    setTimeout(() => {
      cl.style.opacity = 1;

      cl.classList.add("startAnim");
    }, (idx + 1) * vel--);
  });

  cls.forEach((cl) => {
    cl.addEventListener("mouseover", function () {
      cl.classList.remove("startAnim");
      cl.classList.add("rubberBand");
    });

    cl.addEventListener("mouseleave", function () {
      cl.classList.remove("startAnim");

      setTimeout(function () {
        cl.classList.remove("rubberBand");
      }, 1000);
    });
  });
}
