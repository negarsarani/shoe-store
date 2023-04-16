import El from '@/library/El';
import { EachcardHome } from '@/library/productHome/CardHome';
import { observer } from '..';
import { getCurrentURL } from '@/library/CurrentUrl/CurrentUrl';

export function parentCardsHome(elem, data) {
  const cardSkleton = document.getElementById('cardSkleton');
  if (getCurrentURL()[4] === '/home') {
    observer.observe(cardSkleton);
  }

  const arr = data.map((item) => EachcardHome(item));
  const el = El({
    element: 'div',
    className: 'grid grid-cols-2  gap-1 px-2 overflow-hidden',
  });
  arr.map((item) => el.insertAdjacentElement('beforeend', item));
  return elem.append(el);
}
