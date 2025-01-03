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
