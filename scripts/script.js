if (localStorage.getItem("fullname")) {
  const userLogOut = document.getElementById("user-signIn");
  userLogOut.style.display = "flex";

  document.getElementById("user-greeting").textContent =
    localStorage.getItem("fullname");
  // document.getElementById("user-greeting").style.display = "block";
}
if (localStorage.getItem("logout") === "shown") {
  document.getElementById("logout-link").classList.add("show");
}

const build = document.querySelector(".build");
const greatness = document.querySelector(".greatness");
const btn = document.querySelector(".gB");

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

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    once: true,
    duration: 500,
    offset: 100, // Offset for triggering animations
  });
});

btn.onclick = () => {
  window.scrollTo({
    top: 986.4,
    behavior: "smooth",
  });
};

document.getElementById("logo").onclick = () => {
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

function fetchUserName() {
  fetch("getUser.php")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text(); // Log the raw response
    })
    .then((text) => {
      console.log("Raw response:", text); // Log the raw response
      //return JSON.parse(text); // Parse the JSON manually
      const userNameElement = document.getElementById("user-greeting");
      console.log(JSON.parse(text).fullname.split(" ")[0]);
      userNameElement.textContent = JSON.parse(text).fullname;
      localStorage.setItem("fullname", JSON.parse(text).fullname.split(" ")[0]);
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
    });
}

// Call the function when the page loads
document.addEventListener("DOMContentLoaded", fetchUserName);

window.onload = () => {
  const userNameElement = document.getElementById("user-greeting");
  if (localStorage.getItem("fullname")) {
    userNameElement.style.display = "block";
    userNameElement.textContent = localStorage.getItem("fullname");
  }
};

// Logout functionality
document.getElementById("logout-link").addEventListener("click", function (e) {
  e.preventDefault(); // Prevent the default link behavior

  // Send a request to the logout endpoint
  fetch("logout.php")
    .then((response) => {
      if (response.ok) {
        // Clear the user's name from local storage
        localStorage.removeItem("fullname");

        // Hide the user greeting and show the login link
        const userGreeting = document.getElementById("user-signIn");
        if (userGreeting) {
          userGreeting.style.display = "none";
        }

        // Redirect to the home page or login page
        window.location.href = "./Sections/Shop/shops.html"; // Change this to your desired redirect page
      } else {
        console.error("Logout failed");
      }
    })
    .catch((error) => {
      console.error("Error during logout:", error);
    });
});
