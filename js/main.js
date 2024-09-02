const navBtn = document.getElementById("nav-btn");
const listNavLink = document.querySelectorAll(".main-nav li");
const navbar = document.querySelector("header");
const sectionHero = document.querySelector(".section-hero");
const sections = document.querySelectorAll("section");
const btnDiv = document.querySelector("#btn-div");
const btnUp = document.querySelector(".button");

// open nav mobile
listNavLink.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("nav-is-open");
  });
});
navBtn.addEventListener("click", () => {
  navbar.classList.toggle("nav-is-open");
});

// sticky nav
window.addEventListener("scroll", () => {
  const sectionHeroHeight = sectionHero.offsetHeight;
  if (window.scrollY > sectionHeroHeight - 100) {
    navbar.classList.add("sticky");
    btnDiv.classList.add("visible");
  } else {
    navbar.classList.remove("sticky");
    btnDiv.classList.remove("visible");
  }
});

// dynamic show sections
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0 }
);
sections.forEach((section) => {
  observer.observe(section);
});

// scroll up
btnUp.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
