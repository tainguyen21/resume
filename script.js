const header = document.getElementById("header");

const handleScroll = () => {
  if (window.scrollY >= 80) {
    header.classList.add("background");
  } else header.classList.remove("background");
};

window.onload = () => {
  window.onscroll = handleScroll;
};

const projects = document.getElementById("projects");
