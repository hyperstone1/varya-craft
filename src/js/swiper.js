import "swiper/css";
import "swiper/css/bundle";

import Swiper from "swiper";
import remToPx from "./utils/rem";
import { Navigation } from "swiper/modules";

const swipers = document.querySelectorAll(".swiper");

swipers.forEach((item) => {
  const cur =
    item.querySelector(".swiper__pagination-cur") ||
    item.closest(".container").querySelector(".swiper__pagination-cur");
  const last =
    item.querySelector(".swiper__pagination-last") ||
    item.closest(".container").querySelector(".swiper__pagination-last");
  const swiperProducts = new Swiper(item, {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: remToPx(3.9),
    speed: 1000,
    navigation: {
      prevEl:
        item.querySelector(".swiper__navigation-left") ||
        item.closest(".container").querySelector(".swiper__navigation-left"),
      nextEl:
        item.querySelector(".swiper__navigation-right") ||
        item.closest(".container").querySelector(".swiper__navigation-right"),
    },
    on: {
      init: function (swiper) {
        const active = swiper.activeIndex;
        cur.textContent = `0${active + 1}`;
        last.textContent = `0${swiper.slides.length}`;
      },
      slideChange: function (swiper) {
        const active = swiper.activeIndex;
        cur.textContent = `0${active + 1}`;
      },
    },
  });
});
