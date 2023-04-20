import footerMenue from '@/layout/footer';
import { EachCart } from '@/library/Cart/EachCart';
import { renderCart } from '@/library/Cart/render';
import El from '@/library/El';
import { HeaderSearch } from '@/library/headerSearch/Headersearch';
import { TotalPrice } from '@/library/totalprice/Totalprice';
import { routerFunc } from '@/router';

export function cart(params) {
  setTimeout(() => {
    totalprice();
  }, 100);
  return El({
    element: 'div',
    className: 'relative',
    id: 'cart',
    child: [
      HeaderSearch({
        text: 'My Cart',
        icon: 'assets/img/login-icon.png',
      }),
      El({
        element: 'div',
        id: 'ParentCard',
        className: 'pb-40',
        child: renderCart(),
      }),
      El({
        element: 'div',
        className: 'bottom-0 rounded-t-2xl border fixed w-full bg-white',
        child: [
          El({
            element: 'div',
            className: '',
            child: El({
              element: 'footer',
              className: 'w-full px-3 ',
              child: El({
                element: 'div',
                className:
                  'border-t border-bg-gray w-full flex gap-7 items-center py-4',
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
                        id: 'SumTotal',
                        child: `$ ${''}`,
                      }),
                    ],
                  }),
                  El({
                    element: 'div',
                    className:
                      'bg-btn-black rounded-3xl flex items-center justify-center flex-grow gap-2 px-4 py-3 shadow-2xl cursor-pointer',
                    onclick: function name() {
                      routerFunc().navigate('/checkout');
                    },
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
                        child: 'Checkout',
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
          footerMenue('border pt-2'),
        ],
      }),
    ],
  });
}
export function totalprice() {
    const AllCarts = document.getElementById('AllCarts');
    if (AllCarts !== undefined) {
      let [...divs] = AllCarts.querySelectorAll('[data-cart]');
      let arr = divs.map(
        (item) => item.querySelector('#TOTAL').innerText.split(' ')[1]
      );
      const total = arr.reduce((a, b) => Number(a) + Number(b));
      document.querySelector('#SumTotal').innerText = `$ ${total}`;
    }
}
