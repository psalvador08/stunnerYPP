function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// script.js
let currentIndex = 0;
const slidesToShow = 2; // Number of slides to show at a time
const slides = document.querySelectorAll(".carousel-item");
const totalSlides = slides.length;

function showSlide(index) {
  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex =
      Math.floor(totalSlides / slidesToShow) * slidesToShow - slidesToShow;
  } else {
    currentIndex = index;
  }

  const newTransformValue = `translateX(-${
    currentIndex * (100 / slidesToShow)
  }%)`;
  document.querySelector(".carousel-inner").style.transform = newTransformValue;
}

function nextSlide() {
  showSlide(currentIndex + slidesToShow);
}

function prevSlide() {
  showSlide(currentIndex - slidesToShow);
}

// Optional: Auto-slide functionality
setInterval(nextSlide, 5000);
