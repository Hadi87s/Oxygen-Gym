window.onload = () => {
  if (localStorage.getItem("fullname")) {
    window.location.href = "http://localhost/Web%20Project/index.html";
  }
};

const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

if (localStorage.getItem("logout") === "shown") {
  document.getElementById("logout-link").classList.add("show");
}
