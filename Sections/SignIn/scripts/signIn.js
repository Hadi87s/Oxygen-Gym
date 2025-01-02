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

// signIn.js

// import { auth } from "./firebase-config.js";
// import { signInWithEmailAndPassword } from "firebase/auth";

// const signinForm = document.querySelector(".signin-form");

// signinForm.addEventListener("submit", async (e) => {
//   e.preventDefault();

//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   try {
//     // Sign in with Firebase Authentication
//     const userCredential = await signInWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     const user = userCredential.user;

//     alert("Signed in successfully!");
//     window.location.href = "../../index.html"; // Redirect to home page
//   } catch (error) {
//     console.error("Error signing in:", error.message);
//     alert(error.message);
//   }
// });
