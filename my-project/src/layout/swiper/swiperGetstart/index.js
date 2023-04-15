import El from '@/library/El';

export function swiperFunc() {
  return [
    El({
      element: 'div',
      className: 'swiper-wrapper ',

      child: [
        El({
          element: 'div',
          className: 'swiper-slide  ',
          child: El({
            element: 'img',
            className: '  ',
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
