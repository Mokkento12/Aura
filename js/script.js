document.addEventListener("DOMContentLoaded", function () {
  // Slider
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

  // Timer

  const deadline = "2025-03-17";

  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const seconds = Math.floor((t / 1000) % 60);

    return {
      total: t,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector);
    const hours = timer.querySelector("#hours");
    const minutes = timer.querySelector("#minutes");
    const seconds = timer.querySelector("#seconds");

    function updateClock() {
      const t = getTimeRemaining(endtime);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }

    updateClock();

    const timeInterval = setInterval(updateClock, 1000);
  }

  setClock(".timer", deadline);
});
