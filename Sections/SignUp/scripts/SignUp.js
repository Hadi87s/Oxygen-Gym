// // SignUp.js

import { auth, db } from "./Firebase-config.js";

const signupForm = document.querySelector(".signup-form");

signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const fullName = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  try {
    // Create user with Firebase Authentication
    const userCredential = await auth.createUserWithEmailAndPassword(
      email,
      password
    );
    const user = userCredential.user;

    // Store additional user data in Firestore
    await db.collection("users").doc(user.uid).set({
      fullName: fullName,
      email: email,
      createdAt: new Date(),
    });

    alert("Account created successfully!");
    window.location.href = "../SignIn/signin.html"; // Redirect to sign-in page
  } catch (error) {
    console.error("Error signing up:", error.message);
    alert(error.message);
  }
});
