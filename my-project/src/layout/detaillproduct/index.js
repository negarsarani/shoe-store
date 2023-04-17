import El from '@/library/El';
import { renderColor, renderSize } from './render';
import { TotalPrice } from '@/library/totalprice/Totalprice';

export function detailsproduct(params) {
  const obj = {
    quantity: 1,
    price: params.price,
  };
  return El({
    element: 'div',
    className: ' w-full ',
    child: El({
      element: 'div',
      className: ' w-full ',
      child: [
        El({
          element: 'div',
          className: ' px-3 py-2 ',
          child: El({
            element: 'div',
            className: 'flex justify-between w-full  border-b pb-4',
            child: [
              El({
                element: 'div',
                className:
                  'flex flex-col overflow-hidden text-ellipsis truncate items-start gap-3 justify-end',
                child: [
                  El({
                    element: 'h1',
                    className:
                      'overflow-hidden text-ellipsis truncate font-semibold text-3xl',
                    child: params.name,
                  }),
                  El({
                    element: 'div',
                    className:
                      'flex gap-3 tem-center justify-center text-[.8rem]',
                    child: [
                      El({
                        element: 'div',
                        className: 'flex items-center bg-[#ECEDED] rounded-md ',
                        child: El({
                          element: 'span',
                          className: 'bg-bg-gray px-3 ',
                          child: `${params.rating.count} sold`,
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
                            className: 'flex items-center gap-1',
                            child: [
                              El({
                                element: 'span',
                                className: '',
                                child: params.rating.rate,
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
                    e.target.src = e.target.src.includes('assets/svg/heart.svg')
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
              child: params.description,
            }),
          ],
        }),
        El({
          element: 'div',
          className: 'grid grid-cols-2 gap-2 ',
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
                  className:
                    'flex gap-3  items-center justify-start menu-scroll-x overflow-x-scroll',

                  child: El({
                    element: 'div',
                    dataset: { parentDiv: 'parentDiv' },
                    className: 'flex  gap-3 items-center flex-shrink-0 pr-3',
                    child: renderSize(params.sizes).map((item) => item),
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
                  }),
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
                      child: renderColor(params.colors).map((item) => item),
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
        El({
          element: 'div',
          className: 'py-3',
          child: El({
            element: 'div',
            className: 'flex pl-3 items-center justify-start gap-6',
            child: [
              El({
                element: 'span',
                className: 'font-semibold',
                child: 'Quantity',
              }),
              El({
                element: 'div',
                className: 'flex items-center justify-center ',
                child: El({
                  element: 'div',
                  className: 'bg-bg-card flex px-3 py-2 gap-2  rounded-3xl',
                  onclick: function name(e) {
                    const target = e.target;
                    if (target.dataset.btn) {
                      const parent = target.parentElement.parentElement;
                      const countainer = parent.querySelector('[data-input]');

                      if (target.dataset.btn === 'minus') {
                        countainer.innerText > 1
                          ? (countainer.innerText = --countainer.innerText)
                          : null;
                        obj.quantity = +countainer.innerText;
                        document.getElementsByTagName(
                          'section'
                        )[0].innerText = ` $ ${obj.quantity * obj.price}`;
                      }
                      if (target.dataset.btn === 'add') {
                        countainer.innerText < params.quantity
                          ? ++countainer.innerText
                          : null;
                        obj.quantity = +countainer.innerText;
                        document.getElementsByTagName(
                          'section'
                        )[0].innerText = ` $ ${obj.quantity * obj.price}`;
                      }
                    }
                  },
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
        }),
        TotalPrice(obj),
      ],
    }),
  });
}
