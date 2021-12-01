var swiper = new Swiper(".swiper-container", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

var swiper = new Swiper(".swip-two", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let mobilOpen = document.querySelector(".mobil-open");
let openBar = document.querySelector(".open-menu");
let closeBtn = document.querySelectorAll(".close-btn");
let Body = document.querySelector("#body");

openBar.addEventListener("click", () => {
  mobilOpen.classList.add("active");
  Body.classList.add("active");
});

for (let i = 0; i < closeBtn.length; i++) {
  closeBtn[i].addEventListener("click", () => {
    mobilOpen.classList.remove("active");
    Body.classList.remove("active");
    listTwo.classList.remove("active");
  });
}

let listTwo = document.querySelector(".list-two");
let openSub = document.querySelector(".open-sub");
let geriBtn = document.querySelector(".geri");

openSub.addEventListener("click", () => {
  listTwo.classList.add("active");
});

geriBtn.addEventListener("click", () => {
  listTwo.classList.remove("active");
});
