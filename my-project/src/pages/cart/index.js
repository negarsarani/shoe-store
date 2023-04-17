import { EachCart } from '@/library/Cart/EachCart';
import El from '@/library/El';
import { HeaderSearch } from '@/library/headerSearch/Headersearch';

export function cart(params) {
  return El({
    element: 'div',
    className: '',
    child: [
      HeaderSearch({
        text: 'My Cart',
        icon: 'assets/img/login-icon.png',
      }),
      EachCart()
    ],
  });
}
