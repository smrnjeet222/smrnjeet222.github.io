export default function navLinks(idx) {
  const links = document.querySelectorAll(".link");
  links.forEach((al) => {
    al.classList.remove("active-nav");
  });
  links[idx].classList.add("active-nav");
}
