// const userElement = document.getElementById("user-signIn");
// const userNameElement = document.getElementById("user-greeting");
// if (localStorage.getItem("fullname")) {
//   userElement.style.display = "flex";
//   userNameElement.textContent = localStorage.getItem("fullname");
// }

// document.getElementById("logout-link").addEventListener("click", function (e) {
//   e.preventDefault(); // Prevent the default link behavior

//   // Send a request to the logout endpoint
//   fetch("logout.php")
//     .then((response) => {
//       if (response.ok) {
//         // Clear the user's name from local storage
//         localStorage.removeItem("fullname");

//         // Hide the user greeting and show the login link
//         const userGreeting = document.getElementById("user-signIn");
//         if (userGreeting) {
//           userGreeting.style.display = "none";
//         }

//         // Redirect to the home page or login page
//         window.location.href = "../../index.html"; // Change this to your desired redirect page
//       } else {
//         console.error("Logout failed");
//       }
//     })
//     .catch((error) => {
//       console.error("Error during logout:", error);
//     });
// });
