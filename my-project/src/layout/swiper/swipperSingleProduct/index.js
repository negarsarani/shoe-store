import El from "@/library/El"
export function swiperSingleProduct(params) {
    return  El({
        element: 'div',
        className: 'w-full relative  aspect-square',
        child: [
          El({
            element: 'div',
            className: 'relative swiper   aspect-square ',
            child: [
              El({
                element: 'div',
                className:
                  'swiper-wrapper w-full cursor-pointer  aspect-square',

                child: [
                  El({
                    element: 'div',
                    className: 'swiper-slide w-full aspect-square	',
                    child: El({
                      element: 'img',
                      className: 'aspect-square	',
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
            ],
          }),
          El({
            element: 'div',
            className: 'absolute top-5 left-5 z-[1000]',
            child: El({
              element: 'img',
              className: ' cursor-pointer',
              src: 'assets/svg/arrow.svg',
              onclick: function name(){
                routerFunc().navigate('home')
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
      })
}