// Add interactivity for category buttons
const categoryButtons = document.querySelectorAll(".category-btn");
const accordionItems = document.querySelectorAll(".accordion-item");

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    categoryButtons.forEach((btn) => btn.classList.remove("active"));
    // Add active class to the clicked button
    button.classList.add("active");

    // Filter accordion items based on category
    const category = button.getAttribute("data-category");
    accordionItems.forEach((item) => {
      if (
        item.getAttribute("data-category") === category ||
        category === "all"
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
