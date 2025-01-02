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

// navbar.js

import { auth } from "./firebase-config.js";
import { onAuthStateChanged, signOut } from "firebase/auth";

const userGreeting = document.getElementById("user-greeting");
const signoutLink = document.getElementById("signout-link");

// Check if a user is signed in
onAuthStateChanged(auth, (user) => {
  if (user) {
    // Display user email in the navbar
    userGreeting.textContent = `Welcome, ${user.email}`;
  } else {
    // Redirect to sign-in page if no user is signed in
    window.location.href = "../SignIn/signin.html";
  }
});

// Sign out functionality
signoutLink.addEventListener("click", async (e) => {
  e.preventDefault();
  try {
    await signOut(auth);
    window.location.href = "../SignIn/signin.html"; // Redirect to sign-in page
  } catch (error) {
    console.error("Error signing out:", error.message);
  }
});
