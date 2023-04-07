import El from '@/library/El';
import Swiper, { Navigation, Pagination } from 'swiper';
export function settingSwipper() {
  const swiper = new Swiper('.swiper', {
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      pagination: 'true',
      type: 'bullets',
      effect: 'fade',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      navigation: 'true',
    },
  });
}
const bullets = document.getElementsByClassName('.swiper-pagination-bullet');
export function swiperFunc() {
  return [
    El({
      element: 'div',
      className: 'swiper-wrapper w-full',

      child: [
        El({
          element: 'div',
          className: 'swiper-slide w-full',
          child: El({
            element: 'img',
            className: 'w-full',
            src: 'assets/img/started/shoe-1.png',
          }),
        }),
        El({
          element: 'div',
          className: 'swiper-slide',
          child: El({
            element: 'img',
            src: 'assets/img/started/shoe-2.png',
          }),
        }),
        El({
          element: 'div',
          className: 'swiper-slide',
          child: El({
            element: 'img',
            src: 'assets/img/started/shoe-3.png',
          }),
        }),
      ],
    }),
    El({
      element: 'div',
      className: 'swiper-pagination',
    }),
    El({
      element: 'div',
      className: 'swiper-button-next',
    }),
  ];
}
