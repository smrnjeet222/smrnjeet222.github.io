const cls = document.querySelectorAll(".blast");
console.log(cls);

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
