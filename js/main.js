/* ========== Navigation =========== */
const menu = document.querySelector(".nav-list");

document.querySelector(".hamburger").onclick = () => {
  menu.classList.add("show");
};

document.querySelector(".nav-list .close").onclick = () => {
  menu.classList.remove("show");
};

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

/* ========== SignIn Form =========== */
const signInForm = document.querySelector(".form-wrapper");

[".login-link", ".login"].forEach((p) => {
  document.querySelector(p).onclick = () => {
    signInForm.classList.add("active");
    menu.classList.remove("show");
  };
});

document.querySelector(".close-form").onclick = () => {
  signInForm.classList.remove("active");
};

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
