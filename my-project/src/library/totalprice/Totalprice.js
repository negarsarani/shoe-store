import El from '../El';
export function TotalPrice(params) {
  console.log(params);
  return El({
    element: 'footer',
    className: 'w-full px-3 ',
    child: El({
      element: 'div',
      className: 'border-t border-bg-gray w-full flex gap-7 items-center py-4',
      child: [
        El({
          element: 'div',
          className: '',
          child: [
            El({
              element: 'div',
              className: '',
              child: 'total price',
            }),
            El({
              element: 'section',
              className: 'font-semibold text-xl',
              child: `$ ${params.price * params.quantity}`,
            }),
          ],
        }),
        El({
          element: 'div',
          className:
            'bg-btn-black rounded-3xl flex items-center justify-center flex-grow gap-2 px-4 py-3 shadow-2xl cursor-pointer',
          child: [
            El({
              element: 'div',
              className: 'w-5',
              child: El({
                element: 'img',
                className: '',
                src: 'assets/svg/bag-fill.svg',
              }),
            }),
            El({
              element: 'span',
              className: 'text-white',
              child: 'Add to cart',
            }),
          ],
        }),
      ],
    }),
  });
}
