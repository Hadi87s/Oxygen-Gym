let nav = document.querySelector("nav");
let navElements = document.querySelector("nav ul");
let navListElements = [...document.querySelectorAll("nav ul li a")];
let Logo = document.querySelector("nav .logo");
const build = document.querySelector(".build");
const greatness = document.querySelector(".greatness");
const btn = document.querySelector(".gB");
const burgerList = document.querySelector("nav .hamburger svg");

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    once: true,
    duration: 500,
    offset: 100, // Offset for triggering animations
  });
});

window.onload = () => {
  setTimeout(() => {
    build.style.display = "block";
  }, 320);
  setTimeout(() => {
    greatness.style.display = "block";
  }, 900);
  if (window.outerWidth <= 617) {
    Jc.style.display = "none";
  } else {
    setTimeout(() => {
      btn.style.display = "block";
    }, 1600);
  }
};

const hamburger = document.querySelector("#burgerList");
const checkbox = hamburger.querySelector("input");

checkbox.onchange = (e) => {
  e.stopPropagation();
  if (checkbox.checked) {
    nav.classList.add("grow");

    setTimeout(() => {
      navElements.classList.add("order");
    }, 100);
  } else {
    nav.classList.remove("grow");
    setTimeout(() => {
      navElements.classList.remove("order");
    }, 100);
  }
};

window.onclick = (event) => {
  if (event.target == nav) {
  } else {
    nav.classList.remove("grow");
    navElements.classList.remove("order");
  }
};

btn.onclick = () => {
  window.scrollTo({
    top: 986.4,
    behavior: "smooth",
  });
};

Logo.onclick = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

const revealElements = document.querySelectorAll(".reveal");

function handleScroll() {
  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 50) {
      element.classList.add("show"); //
    } else {
      element.classList.remove("show");
    }
  });
}

// Attach the scroll event
window.addEventListener("scroll", handleScroll);

AOS.init();
