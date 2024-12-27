let themeSwitch = document.getElementById("theme-switch");

const applyDarkMode = () => {
  localStorage.setItem("darkmode", "active");
  document.body.classList.remove("lightmode");
};

const applyLightMode = () => {
  localStorage.setItem("darkmode", "inactive");
  document.body.classList.add("lightmode");
};

// Check current mode from localStorage and apply
if (localStorage.getItem("darkmode") === "active") {
  applyDarkMode();
} else {
  applyLightMode();
}

// Toggle dark/light mode on button click
themeSwitch.onclick = () => {
  const darkmode = localStorage.getItem("darkmode");

  if (darkmode === "active") {
    applyLightMode(); // Switch to light mode
  } else {
    applyDarkMode(); // Switch to dark mode
  }
};
