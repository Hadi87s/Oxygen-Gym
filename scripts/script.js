let nav = document.querySelector("nav");
let navElements = document.querySelector("nav ul");
let navListElements = [...document.querySelectorAll("nav ul li")];
let Logo = document.querySelector("nav .logo");

const build = document.querySelector(".build");
const greatness = document.querySelector(".greatness");
const Jc = document.querySelector(".Jc");

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
      Jc.style.display = "block";
    }, 1600);
  }
};

document.getElementById("bugerList").onclick = (e) => {
  e.stopPropagation();
  nav.classList.toggle("grow");
  setTimeout(() => {
    navElements.classList.toggle("order");
  }, 100);
};

window.onclick = (event) => {
  if (event.target == nav) {
  } else {
    nav.classList.remove("grow");
    navElements.classList.remove("order");
  }
};

// window.onscroll = () => {
//   if (window.scrollY > 0) {
//     // nav.classList.remove("bck");
//     nav.classList.add("filter");
//     // nav.style.color = "black"; // Uncomment If Needed.
//   } else {
//     // nav.classList.add("bck");
//     nav.classList.remove("filter");
//     // nav.style.color = "white"; // Uncomment If Needed.
//   }
// };

Logo.onclick = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
