import { GetData } from '@/library/Api/GetData';
import { renderCart } from '@/library/Cart/render';
import El from '@/library/El';
import axios from 'axios';
import Cookies from 'js-cookie';
let active;
export function trashBtn(e) {
  const target = e.target;
  console.log();
  const parent = target.parentElement.parentElement.parentElement;
  console.log(target.dataset.id);
  active = target.dataset.id;

  const alert = El({
    element: 'div',
    onclick: handleTrash,
    className:
      'trash flex flex-col  gap-2 items-center justify-center bg-bg-card font-semibold py-2 rounded-2xl',
    child: [
      El({
        element: 'h1',
        className: '',
        child: 'Are you sure?',
      }),
      El({
        element: 'div',
        className: 'flex items-center justify-center gap-5',
        child: [
          El({
            element: 'button',
            className:
              'btn bg-red-500 text-white font-semibold transition ease-in-out delay-150 bg-red-500 hover:-translate-y-1 hover:scale-110  duration-300 px-2 py-1 rounded-xl',
            child: 'delete',
            dataset: { trash: 'delete' },
          }),
          El({
            element: 'button',
            className:
              'btn transition ease-in-out delay-150 bg-slate-300 hover:-translate-y-1 hover:scale-110 duration-300 px-2 py-1 rounded-xl',
            child: 'cancel',
            dataset: { trash: 'cancel' },
          }),
        ],
      }),
    ],
  });

  parent.append(alert);
}
function handleTrash(e) {
  const target = e.target;
  if (target.dataset.trash) {
    target.dataset.trash === 'delete'
      ? deleteFunc(target)
      : target.dataset.trash === 'cancel'
      ? cancelFunc(target.parentElement.parentElement)
      : null;
  }
}
function deleteFunc(target) {
  let user;
  GetData(`users/${Cookies.get('id')}`)
    .then((res) => (user = res.data))
    .then((res) => {
      const newCart = user.cart.filter((item) => {
        return item.id !== +active;
      });
      user.cart = newCart;
    })
    .then((res) => {
      axios.put(`http://localhost:3010/users/${Cookies.get('id')}`, user, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    })
    .then(() => {
      GetData(`users/${Cookies.get('id')}`).then(() => {
        const parent = document.getElementById('ParentCard');
        parent.innerHTML = '';
        return parent.append(renderCart());
      });
    });
}
function cancelFunc(target) {
  target.remove();
}
