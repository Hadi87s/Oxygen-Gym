const userElement = document.getElementById("user-signIn");
const userNameElement = document.getElementById("user-greeting");
let nav = document.querySelector("nav");
let navElements = document.querySelector("nav ul");
let navListElements = [...document.querySelectorAll("nav ul li a")];
let Logo = document.querySelector("nav .logo");
const burgerList = document.querySelector("nav .hamburger svg");
const hamburger = document.querySelector("#burgerList");
const checkbox = hamburger.querySelector("input");
const userIsLogged = document.getElementById("userIsLoggedIn");
const userIsNotLogged = document.getElementById("login");

document.addEventListener("click", function (event) {
  const burgerList = document.getElementById("burgerList");
  const checkbox = burgerList.querySelector('input[type="checkbox"]');
  const nav = document.querySelector("nav"); // Select the navbar
  const themeSwitch = document.getElementById("theme-switch"); // Select the theme switch
  const logo = document.getElementById("logo"); // Select the logo

  // Check if the click is on the theme switch or logo
  if (themeSwitch.contains(event.target) || logo.contains(event.target)) {
    checkbox.checked = false; // Uncheck the checkbox
  }
  // Check if the click is outside the navbar and not on the hamburger menu
  else if (
    !nav.contains(event.target) &&
    !burgerList.contains(event.target) &&
    checkbox.checked
  ) {
    checkbox.checked = false; // Uncheck the checkbox
  }
});

if (localStorage.getItem("fullname")) {
  userElement.style.display = "flex";
  userNameElement.textContent = localStorage.getItem("fullname");
  userIsLogged.style.display = "block";
  userIsNotLogged.style.display = "none";
}

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

function fetchUserName() {
  fetch("getUser.php")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text(); // Log the raw response
    })
    .then((text) => {
      const userNameElement = document.getElementById("user-greeting");
      userNameElement.textContent = JSON.parse(text).fullname.split(" ")[0];
      localStorage.setItem("fullname", JSON.parse(text).fullname.split(" ")[0]);
      const userElement = document.getElementById("user-signIn");
      const userLogout = document.getElementById("logout-link");
      localStorage.setItem("logout", "shown");

      userLogout.classList.add("show");
      userElement.style.display = "flex";
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
    });
}

// Call the function when the page loads
document.addEventListener("DOMContentLoaded", fetchUserName);

document.getElementById("logout-link").addEventListener("click", function (e) {
  e.preventDefault(); // Prevent the default link behavior
  userIsLogged.style.display = "none";
  userIsNotLogged.style.display = "block";
  // Send a request to the logout endpoint
  fetch("/Web%20Project/logout.php")
    .then((response) => {
      if (response.ok) {
        // Clear the user's name from local storage
        localStorage.removeItem("fullname");

        // Hide the user greeting and show the login link
        const userGreeting = document.getElementById("user-signIn");
        if (userGreeting) {
          userGreeting.style.display = "none";
        }
        const userLogout = document.getElementById("logout-link");
        if (userLogout) {
          userLogout.classList.remove("show");
        }
        localStorage.removeItem("logout");

        // Redirect to the home page or login page
        window.location.href = "http://localhost/Web%20Project/index.html"; // Change this to your desired redirect page
      } else {
        console.error("Logout failed");
      }
    })
    .catch((error) => {
      console.error("Error during logout:", error);
    });
});
