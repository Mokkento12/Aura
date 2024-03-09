const swiper = new Swiper(".new__stickers-slider--container", {
  loop: true,
});

let tabs = document.querySelectorAll(".tabs .tab");
let slides = document.querySelectorAll(".new__stickers-slide");
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  slides[index].style.display = "block";
  tabs[index].classList.add("active");
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function startSlider() {
  slideInterval = setInterval(nextSlide, 3000);
}

function stopSlider() {
  clearInterval(slideInterval);
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    stopSlider();
    showSlide(index);
    currentSlide = index;
    startSlider();
  });
});

startSlider();
