import El from '@/library/El';

export function singleProduct(params) {
  return El({
    element: 'div',
    className: 'flex flex-col items-center justify-center',
    child: [
      El({
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
      }),
      El({
        element: 'div',
        className: ' w-full',
        child: El({
          element: 'div',
          className: ' w-full ',
          child: [
            El({
              element: 'div',
              className: 'flex justify-between w-full px-3 py-2 ',
              child: [
                El({
                  element: 'div',
                  className:
                    'flex flex-col overflow-hidden text-ellipsis truncate items-start gap-3 justify-end border-b pb-4',
                  child: [
                    El({
                      element: 'h1',
                      className:
                        'overflow-hidden text-ellipsis truncate font-semibold text-3xl',
                      child: 'Running Sportwear',
                    }),
                    El({
                      element: 'div',
                      className: 'flex gap-3 tem-center justify-center',
                      child: [
                        El({
                          element: 'div',
                          className: 'flex  bg-[#ECEDED] rounded-md ',
                          child: El({
                            element: 'span',
                            className: 'bg-bg-gray px-3 ',
                            child: '5,322 sold',
                          }),
                        }),
                        El({
                          element: 'div',
                          className: 'flex gap-1',
                          child: [
                            El({
                              element: 'div',
                              className: '',
                              child: El({
                                element: 'img',
                                className: 'w-6',
                                src: 'assets/svg/star.svg',
                              }),
                            }),
                            El({
                              element: 'div',
                              className: 'flex gap-1',
                              child: [
                                El({
                                  element: 'span',
                                  className: '',
                                  child: '4.3',
                                }),
                                El({
                                  element: 'span',
                                  className: '',
                                  child: '(5.244 reviews)',
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                El({
                  element: 'div',
                  onclick: function name(e) {
                    if (e.target.parentElement.dataset.heart) {
                      e.target.parentElement.classList.toggle('bg-bg-dark');
                      e.target.src = e.target.src.includes(
                        'assets/svg/heart.svg'
                      )
                        ? 'assets/svg/heart-white.svg'
                        : 'assets/svg/heart.svg';
                    }
                  },
                  className: 'pl-1',
                  child: El({
                    element: 'div',
                    dataset: { heart: 'heart' },
                    className:
                      'rounded-full w-10 h-10  flex items-center justify-center',
                    child: El({
                      element: 'img',
                      className: 'w-6',
                      src: 'assets/svg/heart.svg',
                    }),
                  }),
                }),
              ],
            }),
            El({
              element: 'div',
              className: 'px-3 py-2 ',
              child: [
                El({
                  element: 'h2',
                  className: '',
                  child: 'Description',
                }),
                El({
                  element: 'div',
                  className: '',
                  child:
                    'Lorem, ipsum dolor sit amet consectetur adipisicing elit.                                    ',
                }),
              ],
            }),
            El({
              element: 'div',
              className: 'grid grid-cols-2  ',
              child: [
                El({
                  element: 'div',
                  className: 'flex flex-col pl-3 gap-1',
                  child: [
                    El({
                      element: 'div',
                      className: 'font-semibold text-md',
                      child: 'Size',
                    }),
                    El({
                      element: 'div',
                      className: 'flex gap-3  items-center justify-start',
                      dataset: { parentDiv: 'parentDiv' },
                      onclick: function name(e) {
                        const target = e.target;
                        if (target.dataset) {
                          const mainsize = target.dataset.size;
                          const parent = target.parentElement.parentElement;
                          if (parent.dataset.parentDiv) {
                            const [...child] =
                              parent.querySelectorAll('[data-size-parent]');
                            child.map((item) => {
                              // console.log(mainsize);
                              if (item.dataset.sizeParent === mainsize) {
                                item.classList.remove('border-text-gray');
                                item.classList.remove('text-text-gray');
                                item.classList.remove('text-white');
                                item.classList.add(
                                  'border-black',
                                  'bg-black',
                                  'text-white'
                                );
                              }
                              if (item.dataset.sizeParent !== mainsize) {
                                item.classList.remove('text-white');
                                item.classList.remove('border-black'),
                                  item.classList.remove('bg-black'),
                                  item.classList.add(
                                    'border-text-gray',
                                    'text-text-gray'
                                  );
                              }
                            });
                          }
                        }
                      },
                      child: [
                        El({
                          element: 'div',
                          dataset: { sizeParent: '40' },
                          className:
                            ' flex items-center rounded-full justify-center w-10 h-10 text-text-gray border border-2 border-text-gray',
                          child: El({
                            dataset: { size: '40' },
                            element: 'div',
                            className: '',
                            child: '40',
                          }),
                        }),
                        El({
                          element: 'div',
                          dataset: { sizeParent: '42' },
                          className:
                            ' flex items-center rounded-full justify-center w-10 h-10 text-text-gray border border-2 border-text-gray',
                          child: El({
                            dataset: { size: '42' },
                            element: 'div',
                            className: '',
                            child: '42',
                          }),
                        }),
                        El({
                          element: 'div',
                          dataset: { sizeParent: '44' },
                          className:
                            ' flex items-center rounded-full justify-center w-10 h-10 text-text-gray border border-2 border-text-gray',
                          child: El({
                            dataset: { size: '44' },
                            element: 'div',
                            className: '',
                            child: '44',
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                El({
                  element: 'div',
                  className: '',
                  child: El({
                    element: 'div',
                    className: 'flex flex-col gap-1',
                    child: [
                      El({
                        element: 'div',
                        className: 'font-semibold text-md',
                        child: 'color',
                      }),
                      El({
                        element: 'div',
                        className: 'menu-scroll-x overflow-x-scroll',
                        onclick: function name(e) {
                          const target = e.target;
                          if (target.dataset.color) {
                            const parent = target.parentElement.parentElement;
                            const [...child] =
                              parent.querySelectorAll('[data-color]');
                            child.map((item) => {
                              if (item.childNodes.length === 1) {
                                item.removeChild(item.childNodes[0]);
                              }
                            });
                            target.append(
                              El({
                                element: 'img',
                                src: 'assets/svg/tick.svg',
                              })
                            );
                          }
                        },
                        child: El({
                          element: 'div',
                          className: 'flex  gap-3 items-center flex-shrink-0 ',
                          child: [
                            El({
                              element: 'div',
                              dataset: { color: 'white' },
                              classList:
                                'flex items-center rounded-full flex-shrink-0 cursor-pointer justify-center w-10 h-10 bg-slate-100',
                            }),
                            El({
                              element: 'div',
                              dataset: { color: 'red' },
                              classList:
                                'flex items-center rounded-full flex-shrink-0 cursor-pointer justify-center w-10 h-10 bg-red-300',
                            }),
                            El({
                              element: 'div',
                              dataset: { color: 'red' },
                              classList:
                                'flex items-center rounded-full flex-shrink-0 cursor-pointer justify-center w-10 h-10 bg-yellow-300',
                            }),
                            El({
                              element: 'div',
                              dataset: { color: 'red' },
                              classList:
                                'flex items-center rounded-full flex-shrink-0 cursor-pointer justify-center w-10 h-10 bg-blue-300',
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            El({
              element: 'div',
              className: '',
              child: El({
                element: 'div',
                className: 'flex pl-3 py-4',
                child: [
                  El({
                    element: 'span',
                    className: 'font-semibold',
                    child: 'Quantity',
                  }),
                  El({
                    element: 'div',
                    className: '',
                    child: El({
                      element: 'div',
                      className: 'bg-bg-card flex',
                      child: [
                        El({
                          element: 'div',
                          className: 'w-5 flex items-center justify-center',
                          child: El({
                            element: 'img',
                            className: '',
                            src: "assets/svg/minus.svg",
                          }),
                        }),
                        El({
                          element: 'div',
                          // className: '',
                          child: '100',
                        }),
                        El({
                          element: 'div',
                          className: 'flex items-center justify-center w-5',
                          child: El({
                            element: 'img',
                            // className: '',
                            src: 'assets/svg/add.svg',
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
      El({
        element: 'div',
        className: '',
        child: '',
      }),
    ],
  });
}
