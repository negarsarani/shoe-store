import El from '@/library/El';
import { routerFunc } from '@/router';
import { settingSwipper } from '../setting';
export function swiperSingleProduct(params) {
  setTimeout(() => {
    settingSwipper();
  }, 0);
  const item = params.image;
  return El({
    element: 'div',
    className: 'w-full relative  aspect-square',
    child: [
      El({
        element: 'div',
        className: 'relative swiper   aspect-square ',
        child: [
          El({
            element: 'div',
            className: 'swiper-wrapper w-full cursor-pointer ',
            child: render(item),
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'absolute top-5 left-5 z-[1000]',
        child: El({
          element: 'img',
          className: ' cursor-pointer',
          src: 'assets/svg/arrow.svg',
          onclick: function name() {
            routerFunc().navigate('home');
          },
        }),
      }),
      El({
        element: 'div',
        className: ' absolute bottom-0 w-full',
        child: El({
          element: 'div',
          className: 'swiper-pagination  z-[1000]',
        }),
      }),
    ],
  });
}
function render(params) {
  return params.map((item) => {
    return El({
      element: 'div',
      className: 'swiper-slide w-full aspect-square	',
      child: El({
        element: 'img',
        className: 'aspect-[3/4]	',
        src: item,
      }),
    });
  });
}
