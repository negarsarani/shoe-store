import El from '@/library/El';
import { routerFunc } from '@/router';

const chooseShipping = () => {
  return El({
    element: 'div',
    className: ' items-center relative',
    child: [
      El({
        element: 'div',
        className: 'pb-40 p-4 flex flex-col gap-4',
        child: [
          El({
            element: 'div',
            className: 'p-4 flex  justify-between',
            child: [
              El({
                element: 'div',
                className: 'flex gap-3',
                child: [
                  El({
                    element: 'img',
                    name: 'arrow-back',
                    className: 'text-3xl',
                    src: 'assets/svg/arrow.svg',
                    onclick: function name(params) {
                      routerFunc().navigate("/shippingAddress")
                    },
                  }),
                  El({
                    element: 'h1',
                    child: 'Choose Shipping',
                    className: 'text-2xl font-bold',
                  }),
                ],
              }),
            ],
          }),
          El({
            element: 'div',
            className:
              'flex items-center justify-between text-left p-3 shadow-md rounded',
            child: [
              El({
                element: 'div',
                className: 'flex justify-center items-center gap-2',
                child: [
                  El({
                    element: 'div',
                    className:
                      'relative rounded-full bg-gray-200 w-20 h-20 text-center',
                    child: [
                      El({
                        element: 'div',
                        className:
                          'absolute bottom-2 left-1/2 -translate-x-1/2 bg-black rounded-full w-16 h-16 py-6 ',
                        child: [
                          El({
                            element: 'img',
                            name: 'location',
                            className:
                              'absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white z-10 text-4xl w-6',
                            src: 'assets/svg/trend.svg',
                          }),
                        ],
                      }),
                    ],
                  }),
                  El({
                    element: 'div',

                    child: [
                      El({
                        element: 'div',
                        className: 'flex gap-2',
                        child: [
                          El({
                            element: 'p',
                            child: 'Economy',
                            className: 'font-bold text-md',
                          }),
                        ],
                      }),
                      El({
                        element: 'p',
                        child: 'Estimated Arrival, Dec 20-23',
                        className: 'text-xs text-gray-600',
                      }),
                    ],
                  }),
                ],
              }),

              El({
                element: 'div',
                className: 'flex gap-2',
                child: [
                  El({
                    element: 'span',
                    className: 'font-bold',
                    child: '$10',
                  }),
                  El({
                    element: 'input',
                    type: 'radio',
                    name: 'shipping',
                    // className: 'after:bg-black',
                  }),
                ],
              }),
            ],
          }),
          El({
            element: 'div',
            className:
              'flex items-center justify-between text-left p-3 shadow-md rounded',
            child: [
              El({
                element: 'div',
                className: 'flex justify-center items-center gap-2',
                child: [
                  El({
                    element: 'div',
                    className:
                      'relative rounded-full bg-gray-200 w-20 h-20 text-center',
                    child: [
                      El({
                        element: 'div',
                        className:
                          'absolute bottom-2 left-1/2 -translate-x-1/2 bg-black rounded-full w-16 h-16 py-6 ',
                        child: [
                          El({
                            element: 'img',
                            name: 'location',
                            className:
                              'absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white z-10 text-4xl w-6',
                            src: 'assets/svg/box.svg',
                          }),
                        ],
                      }),
                    ],
                  }),
                  El({
                    element: 'div',

                    child: [
                      El({
                        element: 'div',
                        className: 'flex gap-2',
                        child: [
                          El({
                            element: 'p',
                            child: 'Regular',
                            className: 'font-bold text-md',
                          }),
                        ],
                      }),
                      El({
                        element: 'p',
                        child: 'Estimated Arrival, Dec 20-23',
                        className: 'text-xs text-gray-600',
                      }),
                    ],
                  }),
                ],
              }),

              El({
                element: 'div',
                className: 'flex gap-2',
                child: [
                  El({
                    element: 'span',
                    className: 'font-bold',
                    child: '$15',
                  }),
                  El({
                    element: 'input',
                    type: 'radio',
                    name: 'shipping',

                    // className: 'after:bg-black',
                  }),
                ],
              }),
            ],
          }),
          El({
            element: 'div',
            className:
              'flex items-center justify-between text-left p-3 shadow-md rounded',
            child: [
              El({
                element: 'div',
                className: 'flex justify-center items-center gap-2',
                child: [
                  El({
                    element: 'div',
                    className:
                      'relative rounded-full bg-gray-200 w-20 h-20 text-center',
                    child: [
                      El({
                        element: 'div',
                        className:
                          'absolute bottom-2 left-1/2 -translate-x-1/2 bg-black rounded-full w-16 h-16 py-6 ',
                        child: [
                          El({
                            element: 'img',
                            name: 'location',
                            className:
                              'absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white z-10 text-4xl w-6',
                            src: 'assets/svg/truck.svg',
                          }),
                        ],
                      }),
                    ],
                  }),
                  El({
                    element: 'div',

                    child: [
                      El({
                        element: 'div',
                        className: 'flex gap-2',
                        child: [
                          El({
                            element: 'p',
                            child: 'Cargo',
                            className: 'font-bold text-md',
                          }),
                        ],
                      }),
                      El({
                        element: 'p',
                        child: 'Estimated Arrival, Dec 20-23',
                        className: 'text-xs text-gray-600',
                      }),
                    ],
                  }),
                ],
              }),

              El({
                element: 'div',
                className: 'flex gap-2',
                child: [
                  El({
                    element: 'span',
                    className: 'font-bold',
                    child: '$20',
                  }),
                  El({
                    element: 'input',
                    type: 'radio',
                    name: 'shipping',

                    // className: 'after:bg-black',
                  }),
                ],
              }),
            ],
          }),
          El({
            element: 'div',
            className:
              'flex items-center justify-between text-left p-3 shadow-md rounded',
            child: [
              El({
                element: 'div',
                className: 'flex justify-center items-center gap-2',
                child: [
                  El({
                    element: 'div',
                    className:
                      'relative rounded-full bg-gray-200 w-20 h-20 text-center',
                    child: [
                      El({
                        element: 'div',
                        className:
                          'absolute bottom-2 left-1/2 -translate-x-1/2 bg-black rounded-full w-16 h-16 py-6 ',
                        child: [
                          El({
                            element: 'img',
                            name: 'location',
                            className:
                              'absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white z-10 text-4xl w-6',
                            src: 'assets/svg/express.svg',
                          }),
                        ],
                      }),
                    ],
                  }),
                  El({
                    element: 'div',

                    child: [
                      El({
                        element: 'div',
                        className: 'flex gap-2',
                        child: [
                          El({
                            element: 'p',
                            child: 'Express',
                            className: 'font-bold text-md',
                          }),
                        ],
                      }),
                      El({
                        element: 'p',
                        child: 'Estimated Arrival, Dec 20-23',
                        className: 'text-xs text-gray-600',
                      }),
                    ],
                  }),
                ],
              }),

              El({
                element: 'div',
                className: 'flex gap-2',
                child: [
                  El({
                    element: 'span',
                    className: 'font-bold',
                    child: '$30',
                  }),
                  El({
                    element: 'input',
                    type: 'radio',
                    name: 'shipping',

                    // className: 'after:bg-black',
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      El({
        element: 'div',
        className:
          'bg-white border fixed px-3 bottom-0 w-full py-10 flex items-center justify-center rounded-t-3xl',
          onclick:function name(params) {
            routerFunc().navigate("/payment");
          },
        child: [
          El({
            element: 'button',
            className: 'bg-btn-black rounded-full w-full px-6 py-2',
            child: [
              El({
                element: 'div',
                className: 'flex items-center text-white justify-center',
                child: [
                  El({
                    element: 'p',
                    className: 'self-center text-md font-bold',
                    child: 'Apply',
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
export default chooseShipping;
