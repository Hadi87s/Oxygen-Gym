window.onload = function () {
    if (localStorage.getItem("fullname")) {
      console.log(document.getElementById("user-greeting"));
  
      document.getElementById("user-greeting").textContent =
        localStorage.getItem("fullname");
      document.getElementById("user-greeting").style.display = "block";
    }
  };
  