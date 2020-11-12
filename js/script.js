"use strict";

const headSwiper = new Swiper(".swiper-container", {
  loop: true,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
});

const burger = document.querySelector(".extra-nav__burger"),
  menu = document.querySelector(".nav");

burger.onclick = function () {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
};

document.querySelectorAll(".tabs-triggers__item").forEach((item) =>
  item.addEventListener("click", function (e) {
    e.preventDefault();
    const id = e.target.getAttribute("href");
    document
      .querySelectorAll(".tabs-triggers__item")
      .forEach((child) =>
        child.classList.remove("tabs-triggers__item--active")
      );
    document
      .querySelectorAll(".tabs-item")
      .forEach((child) => child.classList.remove("tabs-item--active"));

    item.classList.add("tabs-triggers__item--active");
    document.getElementById(id).classList.add("tabs-item--active");
    initTabSwiper();
  })
);
document.querySelector(".tabs-triggers__item").click();

document.querySelectorAll(".menu__link").forEach((item) => {
  item.addEventListener("click", function (e) {
    document
      .querySelector(".menu__link--active")
      .classList.remove("menu__link--active");
    e.target.classList.add("menu__link--active");
  });
});

document.querySelectorAll(".product").forEach((product) => {
  product.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("size-num")) {
      product
        .querySelector(".size-num--active")
        .classList.remove("size-num--active");
      e.target.classList.add("size-num--active");
    }
  });
});

function initTabSwiper() {
  const tabSwiper = new Swiper(".swiper-tab", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 0,
    navigation: {
      nextEl: ".slider-arrows__next",
      prevEl: ".slider-arrows__prev",
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      "@0.90": {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      "@1.35": {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      "@1.75": {
        slidesPerView: 4,
        spaceBetween: 0,
      },
    },
  });
}
