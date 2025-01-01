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

const email = document.getElementById("email");
const password = document.getElementById("password");
const login = document.getElementById("submit-btn");

login.onclick = (e) => {
  console.log(email.value);
  console.log(password.value);
  e.preventDefault(); // Prevents the default form submission behavior
  if (email.value == "admin@pal.com" && password.value == "admin") {
    // Redirects to the dashboard
    window.open(
      "http://localhost/Web%20Project/Sections/Dashboard/control-center.html",
      "_self"
    );
  }
};
