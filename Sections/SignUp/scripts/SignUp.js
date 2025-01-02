// signup.js

let myInputs = document.querySelector(".input-group input");

myInputs.array.forEach((element) => {
  console.log(element);

});
// import { auth, db } from "../../../scripts/firebase-config.js";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { doc, setDoc } from "firebase/firestore";

// const signupForm = document.querySelector(".signup-form");

// signupForm.addEventListener("submit", async (e) => {
//   e.preventDefault();

//   const fullName = document.getElementById("fullname").value;
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;
//   const confirmPassword = document.getElementById("confirm-password").value;

//   // Check if passwords match
//   if (password !== confirmPassword) {
//     alert("Passwords do not match!");
//     return;
//   }

//   try {
//     // Create user with Firebase Authentication
//     const userCredential = await createUserWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     const user = userCredential.user;

//     // Store additional user data in Firestore
//     await setDoc(doc(db, "users", user.uid), {
//       fullName: fullName,
//       email: email,
//       createdAt: new Date(),
//     });

//     alert("Account created successfully!");
//     window.location.href = "../SignIn/signin.html"; // Redirect to sign-in page
//   } catch (error) {
//     console.error("Error signing up:", error.message);
//     alert(error.message);
//   }
// });
