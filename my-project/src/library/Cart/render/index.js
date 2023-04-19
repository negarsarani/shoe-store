import El from '@/library/El';
import { EachCart } from '../EachCart';
import Cookies from 'js-cookie';
import { GetData } from '@/library/Api/GetData';

function render(data, elem) {
  const arr = data.cart.map((item) => EachCart(item));
  arr.map((item) => elem.insertAdjacentElement('beforeend', item));
}

export function renderCart(params) {
  const elem = El({
    element: 'div',

    className: 'flex flex-col gap-4 py-3',
  });
  const userId = Cookies.get('id');
  GetData(`users/${userId}`).then((res) => render(res.data, elem));
  return elem;
}
