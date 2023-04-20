import footerMenue from '@/layout/footer';
import { EachCart } from '@/library/Cart/EachCart';
import { renderCart } from '@/library/Cart/render';
import El from '@/library/El';
import { HeaderSearch } from '@/library/headerSearch/Headersearch';
import { TotalPrice } from '@/library/totalprice/Totalprice';

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
            child: TotalPrice({}, 'chechout'),
          }),
          footerMenue('border pt-2'),
        ],
      }),
    ],
  });
}
function totalprice(params) {
  const AllCarts = document.getElementById('AllCarts');
  let arr = AllCarts.querySelectorAll('[data-cart]');
}
