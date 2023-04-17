import { GetData } from '../Api/GetData';
import { getCurrentURL } from '../CurrentUrl/CurrentUrl';
import El from '../El';

export function EachCart(params) {
  return El({
    element: 'div',
    className: 'flex itmes-center justify-center gap-5 bg-red-300  p-3',
    // id:params.id,
    child: [
      El({
        element: 'div',
        className: 'bg-blue-200 w-4/12 rounded-xl',
        child: El({
          element: 'img',
          className: '',
          src: '',
        }),
      }),
      El({
        element: 'div',
        className: 'flex flex-col itmes-start justify-start gap-2 w-8/12',
        child: [
          El({
            element: 'div',
            className: 'flex itmes-center justify-between   ',
            child: [
              El({
                element: 'div',
                className: 'flex flex-col itmes-start gap-2 ',
                child: [
                  El({
                    element: 'div',
                    className: '',
                    child: 'Air jordan jjj jjj ',
                  }),
                  El({
                    element: 'div',
                    className: 'flex gap-3 text-text-gray',
                    child: [
                      El({
                        element: 'div',
                        className: 'flex items-center justify-center gap-2',
                        child: [
                          El({
                            element: 'div',
                            className: `rounded-full w-4 h-4 bg-blue-300`,
                            child: '',
                          }),
                          El({
                            element: 'div',
                            className: '',
                            child: 'black',
                          }),
                        ],
                      }),
                      El({
                        element: 'div',
                        className: '',
                        child: '|',
                      }),
                      El({
                        element: 'div',
                        className: '',
                        child: `size = 41`,
                      }),
                    ],
                  }),
                ],
              }),
              El({
                element: 'div',
                className: 'cursor-pointer',
                child: El({
                  element: 'img',
                  className: 'w-5',
                  src: 'assets/svg/trash.svg',
                }),
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'flex items-center justify-between gap-4',
            eventListener: [{ event: 'click', callback: handlebtn }],
            child: [
              El({
                element: 'div',
                className: 'font-semibold',
                child: `$ ${1}`,
              }),
              El({
                element: 'div',
                className: 'flex items-center justify-center gap-2',
                child: El({
                  element: 'div',
                  className: 'bg-bg-card flex gap-5 py-2 px-4  rounded-3xl',
                  dataset: { main: '5' },
                  child: [
                    El({
                      element: 'div',
                      className: 'w-5 flex items-center justify-center',
                      child: El({
                        element: 'img',
                        className: 'cursor-pointer',
                        src: 'assets/svg/minus.svg',
                        dataset: { btn: 'minus' },
                      }),
                    }),
                    El({
                      element: 'div',
                      className: 'font-semibold',
                      id: 'Quantity',
                      child: '1',
                      dataset: { input: 'Quantity' },
                    }),
                    El({
                      element: 'div',
                      className: 'flex items-center justify-center w-5',
                      child: El({
                        element: 'img',
                        className: 'cursor-pointer',
                        src: 'assets/svg/add.svg',
                        dataset: { btn: 'add' },
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}

function handlebtn(e) {
  const target = e.target;
  if (target.dataset.btn) {
    const parent = target.parentElement.parentElement;
    const countainer = parent.querySelector('[data-input]');

    if (target.dataset.btn === 'minus') {
      countainer.innerText > 1
        ? (countainer.innerText = --countainer.innerText)
        : null;
      // obj.quantity = +countainer.innerText;
      // document.getElementsByTagName(
      //   'section'
      // )[0].innerText = ` $ ${obj.quantity * obj.price}`;
    }
    if (target.dataset.btn === 'add') {
      countainer.innerText < +parent.dataset.main ? ++countainer.innerText : null;
      // obj.quantity = +countainer.innerText;
      // document.getElementsByTagName(
      //   'section'
      // )[0].innerText = ` $ ${obj.quantity * obj.price}`;
    }
  }
}
