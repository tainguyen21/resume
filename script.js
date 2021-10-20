const header = document.getElementById("header");

const handleScroll = () => {
  if (window.scrollY >= 80) {
    header.classList.add("background");
  } else header.classList.remove("background");
};

window.onload = () => {
  window.onscroll = handleScroll;
  const sections = [
    ".about-section",
    ".skills-section",
    ".projects-section",
    ".education-section",
    ".contact-section",
  ];
  const navLinks = document.querySelectorAll(".header__link");
  const banner = document.querySelector(".banner-section");
  let totalHeight = banner.offsetHeight;

  for (let i = 0; i < navLinks.length; i++) {
    const section = document.querySelector(sections[i]);
    let scrollHeight = totalHeight;

    navLinks[i].addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo(0, scrollHeight);
    });

    totalHeight += section.offsetHeight + 76;
  }
};
