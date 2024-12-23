let nav = document.querySelector("nav");
let navElements = document.querySelector("nav ul");
let navListElements = [...document.querySelectorAll("nav ul li")];
let Logo = document.querySelector("nav .logo");

const build = document.querySelector(".build");
const greatness = document.querySelector(".greatness");
const btn = document.querySelector(".btn-grad");

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

// document.querySelector(".hamburger").onclick = (e) => {
//   e.stopPropagation();
//   console.log(`From hamburger being pressed!`);

//   nav.classList.toggle("grow");
//   setTimeout(() => {
//     navElements.classList.toggle("order");
//   }, 100);
// };

const hamburger = document.querySelector("#burgerList");
const checkbox = hamburger.querySelector("input");

checkbox.onchange = (e) => {
  e.stopPropagation();
  if (checkbox.checked) {
    console.log(`From hamburger being pressed!`);

    nav.classList.add("grow");

    setTimeout(() => {
      navElements.classList.add("order");
    }, 100);
  } else {
    // a7a
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

// Custom Reveal Animation Script.
// Didn't use AOS due to some malfunction in hover when I use it sometimes.
const revealElements = document.querySelectorAll(".reveal");

function handleScroll() {
  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 50) {
      element.classList.add("show"); // Add 'show' when element is in view
    } else {
      element.classList.remove("show"); // Remove 'show' when out of view (optional)
    }
  });
}

// Attach the scroll event
window.addEventListener("scroll", handleScroll);

AOS.init();
