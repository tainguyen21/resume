const header = document.getElementById("header");
const toggleBtn = document.querySelector(".header__toggle");
const headerNav = document.querySelector(".header__nav");

const handleScroll = () => {
  if (window.scrollY >= 80) {
    header.classList.add("background");
  } else header.classList.remove("background");
};

const handleNavLinkClick = () => {
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

const handleToggleBtnClick = () => {
  headerNav.classList.toggle("show");
  toggleBtn.classList.toggle("show");

  if (toggleBtn.classList.contains("show"))
    toggleBtn.innerHTML = `<i class="fas fa-times"></i>`;
  else toggleBtn.innerHTML = `<i class="fas fa-bars"></i>`;
};

window.onload = () => {
  // AOS.init();
  window.onscroll = handleScroll;
  handleNavLinkClick();

  toggleBtn.addEventListener("click", handleToggleBtnClick);
};
