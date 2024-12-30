document.querySelectorAll(".table-controls ul li").forEach(function (item) {
  item.addEventListener("click", function () {
    var tsfilter = this.getAttribute("data-tsfilter");

    // Remove 'active' class from all list items
    document.querySelectorAll(".table-controls ul li").forEach(function (li) {
      li.classList.remove("active");
    });

    // Add 'active' class to the clicked item
    this.classList.add("active");

    // Handle filtering logic
    if (tsfilter === "all") {
      document.querySelector(".class-timetable").classList.remove("filtering");
      document.querySelectorAll(".ts-meta").forEach(function (meta) {
        meta.classList.remove("show");
      });
    } else {
      document.querySelector(".class-timetable").classList.add("filtering");
    }

    // Show/hide ts-meta elements
    document.querySelectorAll(".ts-meta").forEach(function (meta) {
      meta.classList.remove("show");
      if (meta.getAttribute("data-tsmeta") === tsfilter) {
        meta.classList.add("show");
      }
    });
  });
});
