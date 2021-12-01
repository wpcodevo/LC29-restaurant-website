/* ========== Navigation =========== */
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".nav-list .close");
const menu = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
  menu.classList.add("show");
});

close.addEventListener("click", () => {
  menu.classList.remove("show");
});

/* ========== Video PopUp =========== */
const video = document.querySelector(".video");
const button = document.querySelector(".video-control");
const videoWrapper = document.querySelector("header .wrapper");

document.querySelector(".watch-btn").onclick = () => {
  videoWrapper.classList.add("active");
};

document.querySelector(".close-video").onclick = () => {
  videoWrapper.classList.remove("active");
};

function playpausevideo() {
  if (video.paused) {
    button.innerHTML = "<i class='bx bx-pause' ></i>";
    video.play();
  } else {
    button.innerHTML = "<i class='bx bx-play' ></i>";
    video.pause();
  }
}

button.addEventListener("click", playpausevideo);

/* ========== Testimonials Swiper =========== */
const swiper = new Swiper(".mySwiper", {
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".custom-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".custom-button-prev",
    prevEl: ".custom-button-next",
  },
  breakpoints: {
    567: {
      slidesPerView: 2,
    },
    996: {
      slidesPerView: 3,
    },
  },
});
