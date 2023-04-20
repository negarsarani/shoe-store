import { AddTocart } from '@/layout/AddTocart';
import El from '../El';
import { routerFunc } from '@/router';
export function TotalPrice(params , btn) {
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
          onclick: handleBtn,
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
              child: btn,
            }),
          ],
        }),
      ],
    }),
  });
}
function handleBtn(e) {
  const target = e.target;
  if (target.innerText === 'Add to cart') {
    AddTocart()
  }
  if (target.innerText === 'Checkout') {
    routerFunc().navigate("./")
  }
}
