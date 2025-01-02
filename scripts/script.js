const build = document.querySelector(".build");
const greatness = document.querySelector(".greatness");
const btn = document.querySelector(".gB");

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

document.getElementById("UAElearnMore").onclick = () => {
  window.open(
    "http://localhost/Web%20Project/Sections/Plans/UAE.html",
    "_self"
  );
};

document.getElementById("KuwaitLearnMore").onclick = () => {
  window.open(
    "http://localhost/Web%20Project/Sections/Plans/Kuwait.html",
    "_self"
  );
};
