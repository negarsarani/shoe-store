import footerMenue from '@/layout/footer';
import El from '@/library/El';

const myOrder = () => {
  return El({
    element: 'div',
    className: ' justify-between items-center grid grid-cols-1 gap-2',
    child: [
      El({
        element: 'div',
        className: '',
        child: [
          El({
            element: 'div',
            className: '',
            child: [
              El({
                element: 'div',
                className: 'p-4 flex justify-between',
                child: [
                  El({
                    element: 'div',
                    className: 'flex gap-3 justify-between items-center',
                    child: [
                      El({
                        element: 'div',
                        innerHTML: `<svg width="18" height="51" viewBox="0 0 54 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.23355 17.7415C22.2531 10.4389 33.6453 3.542 39.7482 0.499261C44.834 -2.54348 47.1042 9.00132 42.7997 16.7273C38.4952 24.4532 26.5252 28.8982 26.5252 28.8982C26.5252 28.8982 52.9712 22.8128 53.9884 46.1404C54.2537 52.2259 49.9198 59.3256 46.8683 61.3541C43.8168 63.3826 17.3708 79.1034 14.3194 80.6248C10.7425 82.4081 9.23359 77.582 9.23359 71.4965C9.23359 57.2971 25.5081 52.2259 25.5081 52.2259C11.2679 54.2544 2.1135 49.1832 0.0791923 33.9695C-0.598903 28.8982 3.13068 21.1646 9.23355 17.7415Z" fill="black"/>
                            </svg>
                            `,
                      }),
                      El({
                        element: 'h1',
                        child: 'My Orders',
                        className: 'text-xl font-bold',
                      }),
                    ],
                  }),
                  El({
                    element: 'div',
                    className: 'flex gap-2 justify-between items-center',
                    child: [
                      El({
                        element: 'img',
                        name: 'search-outline',
                        className: 'text-3xl',
                        src: 'assets/svg/zarebin.svg',
                      }),
                      El({
                        element: 'img',
                        name: 'ellipsis-horizontal-circle',
                        className: 'text-3xl w-8',
                        src: 'assets/svg/eli.svg',
                      }),
                    ],
                  }),
                ],
              }),
              El({
                element: 'div',
                className:
                  'tab px-4 flex flex-col justify-evenly outline-none cursor-pointer w-full',
                onclick: function name(e) {
                  if (e.target.dataset.btn) {
                    if (e.target.dataset.btn === 'Active') {
                      e.target.parentElement.querySelector(
                        '[data-btn="Completed"]'.classList?.remove(
                          'border-black'
                        )
                      );
                      e.target.classList.add('border-black');
                      openTab('Active');
                    }
                    if (e.target.dataset.btn === 'Completed') {
                      e.target.parentElement.querySelector(
                        '[data-btn="Active"]'.classList?.remove('border-black')
                      );
                      e.target.classList.add('border-black');
                      openTab('Completed');
                    }
                  }
                },
                child: [
                  El({
                    element: 'div',
                    className: 'w-full',
                    child: [
                      El({
                        element: 'button',
                        id: 'tab1-btn',
                        className:
                          '  border-b tablinks  border-0 outline-none cursor-pointer w-6/12 ',
                        child: 'Active',
                        dataset: { btn: 'Active' },
                      }),
                      El({
                        element: 'button',
                        id: 'tab2-btn',
                        dataset: { btn: 'Completed' },
                        className:
                          ' w-6/12 border-b tablinks border-0 outline-none cursor-pointer ',
                        child: 'Completed',
                      }),
                    ],
                  }),
                  El({
                    element: 'div',
                    classList: 'py-10',
                    child: ' ss',
                    id: 'mainSwitch',
                    child: El({
                      element: 'div',
                      id: 'tab1',
                      className: 'flex flex-col items-center justify-center',
                      child: [
                        El({
                          element: 'div',
                          classList:
                            'flex flex-col items-center justify-center',
                          child: [
                            El({
                              element: 'img',
                              src: 'assets/img/myOrder.png',
                            }),
                            El({
                              element: 'p',
                              child: 'You dont have an order yet!',
                              className: 'text-2xl font-bold',
                            }),
                            El({
                              element: 'p',
                              child:
                                'You dont have an active orders at this time',
                              className: 'text-xl text-center text-slate-400 ',
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              /// tab1

              /// tab2
            ],
          }),
        ],
      }),
      El({
        element: 'div',
        child: [footerMenue('bottom-0 fixed border-t')],
      }),
    ],
  });
};
export default myOrder;

/// /// functionality
const openTab = (item) => {
  const main = document.getElementById('mainSwitch');
  if (item === 'Active') {
    main.innerHTML = '';
    const elem = El({
      element: 'div',
      id: 'tab1',
      className: 'flex flex-col items-center justify-center',
      child: [
        El({
          element: 'div',
          classList: 'flex flex-col items-center justify-center',
          child: [
            El({
              element: 'img',
              src: 'assets/img/myOrder.png',
            }),
            El({
              element: 'p',
              child: 'You dont have an order yet!',
              className: 'text-2xl font-bold',
            }),
            El({
              element: 'p',
              child: 'You dont have an active orders at this time',
              className: 'text-xl text-center text-slate-400 ',
            }),
          ],
        }),
      ],
    });
    main.append(elem);
  }
  if (item === 'Completed') {
    main.innerHTML = '';
    const el = El({
      element: 'div',
      id: 'tab2',
      className: ' flex flex-col gap-5',
      child: [
        El({
          element: 'div',
          className: 'flex p-2 rounded-2xl shadow-md',
          child: [
            El({
              element: 'div',
              classList: 'flex gap-2 ',
              child: [
                El({
                  element: 'img',
                  src: 'https://img01.ztat.net/article/spp-media-p1/636952e60aed49b480ee247314b47191/742279f3422c4d8aa7d76d0b0271cd44.jpg?imwidth=1800&filter=packshot',
                  className: 'w-4/12 rounded-2xl',
                }),
                El({
                  element: 'div',
                  className: 'w-full w-8/12',
                  child: [
                    El({
                      element: 'h3',
                      child: 'Air Jordan 3 Retro',
                      className: 'font-bold mb-2',
                    }),
                    El({
                      element: 'div',
                      className: 'flex gap-3',
                      child: [
                        El({
                          element: 'div',
                          className: 'bg-black rounded-full w-4 h-4 mb-4',
                        }),
                        El({
                          element: 'span',
                          child: 'Black',
                          className: 'text-xs text-gray-600',
                        }),
                        El({
                          element: 'span',
                          child: '|',
                          className: 'text-xs text-gray-600',
                        }),
                        El({
                          element: 'span',
                          child: 'size = 42',
                          className: 'text-xs text-gray-600',
                        }),
                      ],
                    }),
                    El({
                      element: 'div',
                      className: 'flex justify-between',
                      child: [
                        El({
                          element: 'span',
                          child: '$105.00',
                          className: 'font-bold',
                        }),
                        El({
                          element: 'div',
                          className:
                            'relative bg-slate-200 rounded-full w-8 h-8 ',
                          child: [
                            El({
                              element: 'span',
                              child: '1',
                              className:
                                'absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 font-bold',
                            }),
                          ],
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
          className: 'flex p-2 rounded-2xl shadow-md',
          child: [
            El({
              element: 'div',
              classList: 'flex gap-2 ',
              child: [
                El({
                  element: 'img',
                  src: "https://img01.ztat.net/article/spp-media-p1/1bb35785bad34016952cdb808840b8a6/3b9b4fabad8648cb8ce8606bb15d46f4.jpg?imwidth=1800",
                  className: 'w-4/12 rounded-2xl',
                }),
                El({
                  element: 'div',
                  className: 'w-full w-8/12',
                  child: [
                    El({
                      element: 'h3',
                      child: 'Adidas TERREX ',
                      className: 'font-bold mb-2',
                    }),
                    El({
                      element: 'div',
                      className: 'flex gap-3',
                      child: [
                        El({
                          element: 'div',
                          className: 'bg-black rounded-full w-4 h-4 mb-4',
                        }),
                        El({
                          element: 'span',
                          child: 'Black',
                          className: 'text-xs text-gray-600',
                        }),
                        El({
                          element: 'span',
                          child: '|',
                          className: 'text-xs text-gray-600',
                        }),
                        El({
                          element: 'span',
                          child: 'size = 42',
                          className: 'text-xs text-gray-600',
                        }),
                      ],
                    }),
                    El({
                      element: 'div',
                      className: 'flex justify-between',
                      child: [
                        El({
                          element: 'span',
                          child: '$200.00',
                          className: 'font-bold',
                        }),
                        El({
                          element: 'div',
                          className:
                            'relative bg-slate-200 rounded-full w-8 h-8 ',
                          child: [
                            El({
                              element: 'span',
                              child: '2',
                              className:
                                'absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 font-bold',
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            
          ],
        }),
      ],
    });
    main.append(el);
  }
};

