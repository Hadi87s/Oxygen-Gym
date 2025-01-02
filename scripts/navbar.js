let nav = document.querySelector("nav");
let navElements = document.querySelector("nav ul");
let navListElements = [...document.querySelectorAll("nav ul li a")];
let Logo = document.querySelector("nav .logo");
const burgerList = document.querySelector("nav .hamburger svg");
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
