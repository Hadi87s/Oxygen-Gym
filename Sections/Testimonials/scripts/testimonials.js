// Add any necessary interactivity here
// For example, dynamic loading of testimonials or animations
document.addEventListener("DOMContentLoaded", function () {
  // Example: Add a simple fade-in effect for the testimonial cards
  const testimonialCards = document.querySelectorAll(".testimonial-card");
  testimonialCards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 200);
  });
});
