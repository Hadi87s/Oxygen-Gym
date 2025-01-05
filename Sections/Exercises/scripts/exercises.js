window.onload = function () {
  if (localStorage.getItem("fullname")) {
    console.log(document.getElementById("user-greeting"));

    document.getElementById("user-greeting").textContent =
      localStorage.getItem("fullname");
    document.getElementById("user-greeting").style.display = "block";
  }
};

if (localStorage.getItem("logout") === "shown") {
  document.getElementById("logout-link").classList.add("show");
}

document.getElementById("scroll-button").onclick = () => {
  document
    .getElementById("exercises-page")
    .scrollIntoView({ behavior: "smooth" });
};
