import El from '@/library/El';
import Swiper from 'swiper/bundle';

export function settingSwipper() {
  const swiper = new Swiper('.swiper', {
    loop: false,

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
  swiper.on('slideChange', function () {
    const descpages = document.querySelector('#descpages');
    const datachange = descpages.querySelectorAll('[data-change]');
    const [description, button] = [...datachange];
    if (swiper.activeIndex === 0) {
      button.innerHTML = 'Next';
      description.innerHTML = 'We provide high quality products just for you';
    }
    if (swiper.activeIndex === 1) {
      button.innerHTML = 'Next';
      description.innerHTML = 'Your satisfaction is our number one periority';
    }
    if (swiper.activeIndex === 2) {
      description.innerHTML =
        'Let’s fulfill your fashion needs with shoearight now!';
      button.innerHTML = 'Get Started';
    }
  });
}

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
  ];
}
