document.addEventListener("DOMContentLoaded", () => {
  // Fetch the navbar.html file
  fetch("../navbar/navbar.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to load navbar");
      }
      return response.text();
    })
    .then((html) => {
      // Insert the navbar into the placeholder div
      document.getElementById("navbar").innerHTML = html;
    })
    .catch((error) => {
      console.error(error);
    });
});
