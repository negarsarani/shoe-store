import { trashBtn } from '@/layout/tarshbtn';
import { GetData } from '../Api/GetData';
import { getCurrentURL } from '../CurrentUrl/CurrentUrl';
import El from '../El';
import Colorpicker from '../Colorpicker';

export function EachCart(item) {
  return El({
    element: 'div',
    className: 'flex itmes-center justify-center gap-5  shadow-3xl p-3',
    id: `${2}`,
    child: [
      El({
        element: 'div',
        className: ' w-28 ',
        child: El({
          element: 'div',
          className: 'w-full',
          child: El({
            element: 'img',
            className: 'rounded-2xl ',
            src: `${item.img}`,
          }),
        }),
      }),
      El({
        element: 'div',
        className:
          'flex flex-col itmes-start justify-start gap-2 flex-grow w-10 ',
        child: [
          El({
            element: 'div',
            className: 'flex itmes-center justify-between   ',
            child: [
              El({
                element: 'div',
                className:
                  'flex flex-col itmes-start gap-2 overflow-hidden text-ellipsis truncate w-10/12 ',
                child: [
                  El({
                    element: 'div',
                    className: 'overflow-hidden text-ellipsis truncate ',
                    child: item.name,
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
                            className: `rounded-full w-4 h-4 ${Colorpicker(
                              item.color
                            )}`,
                            child: '',
                          }),
                          El({
                            element: 'div',
                            className: '',
                            child: item.color,
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
                        child: `size = ${item.size}`,
                      }),
                    ],
                  }),
                ],
              }),
              El({
                element: 'div',
                className: '',
                child: El({
                  element: 'img',
                  className: 'w-5 cursor-pointer',
                  dataset: { id: `${item.id}` },
                  eventListener: [{ event: 'click', callback: trashBtn }],
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
                child: `$ ${item.Userquantity * item.price}`,
              }),
              El({
                element: 'div',
                className: 'flex items-center justify-center gap-2',
                child: El({
                  element: 'div',
                  className: 'bg-bg-card flex gap-5 py-2 px-4  rounded-3xl',
                  dataset: { main: item.MainQuntity },
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
                      child: +item.Userquantity,
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
      countainer.innerText < +parent.dataset.main
        ? ++countainer.innerText
        : null;
      // obj.quantity = +countainer.innerText;
      // document.getElementsByTagName(
      //   'section'
      // )[0].innerText = ` $ ${obj.quantity * obj.price}`;
    }
  }
}
