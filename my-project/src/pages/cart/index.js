import footerMenue from '@/layout/footer';
import { EachCart } from '@/library/Cart/EachCart';
import { renderCart } from '@/library/Cart/render';
import El from '@/library/El';
import { HeaderSearch } from '@/library/headerSearch/Headersearch';

export function cart(params) {
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
        className: 'pb-10',
        child: renderCart(),
      }),
      footerMenue()
    ],
  });
}
